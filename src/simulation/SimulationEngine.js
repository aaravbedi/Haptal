/**
 * Simulation Engine
 *
 * Core loop that orchestrates:
 *   - Physics stepping (Cannon-es)
 *   - Robot arm task execution (reach → grasp → lift → place → release)
 *   - Sensor data collection at each timestep
 *   - Time acceleration (run N physics steps per render frame)
 *   - Co-sim bridge updates
 *
 * Supports accelerated simulation up to 100x real-time while maintaining
 * physics stability through sub-stepping.
 */

export class SimulationEngine {
  constructor({
    sceneManager, robotArm, environment, physicsWorld,
    coSimBridge, sensorCollector, dataPipeline
  }) {
    this.scene = sceneManager;
    this.robot = robotArm;
    this.env = environment;
    this.physics = physicsWorld;
    this.cosim = coSimBridge;
    this.sensor = sensorCollector;
    this.pipeline = dataPipeline;

    // Simulation state
    this.isRunning = false;
    this.isPaused = false;
    this.timeScale = 1;       // 1x, 2x, 5x, 10x, 50x, 100x
    this.simTime = 0;         // total simulated seconds
    this.realTime = 0;        // total real seconds
    this.frameCount = 0;
    this.physicsHz = 120;     // physics steps per simulated second
    this.physicsDt = 1 / 120;

    // Task state machine
    this.taskState = 'idle';   // idle, reaching, grasping, lifting, moving, placing, releasing, returning
    this.taskProgress = 0;     // 0-1 within current state
    this.taskCycleCount = 0;
    this.taskSpeed = 1.0;      // task execution speed multiplier

    // Current object
    this.currentObjectDef = null;
    this.coSimProperties = null;

    // Targets
    this.objectStartPos = { x: 0.25, y: 0.45, z: 0 };
    this.objectTargetPos = { x: -0.25, y: 0.55, z: 0 };

    // RAF handle
    this._rafHandle = null;
    this._lastTimestamp = 0;

    // Sim hours tracking
    this.simHours = 0;
  }

  /**
   * Start the simulation loop
   */
  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.isPaused = false;
    this._lastTimestamp = performance.now();
    this._loop();
  }

  /**
   * Pause/unpause
   */
  togglePause() {
    this.isPaused = !this.isPaused;
    if (!this.isPaused) {
      this._lastTimestamp = performance.now();
    }
    return this.isPaused;
  }

  /**
   * Stop simulation
   */
  stop() {
    this.isRunning = false;
    if (this._rafHandle) {
      cancelAnimationFrame(this._rafHandle);
      this._rafHandle = null;
    }
  }

  /**
   * Set time acceleration factor
   */
  setTimeScale(scale) {
    this.timeScale = Math.max(1, Math.min(100, scale));
  }

  /**
   * Load an object for manipulation
   */
  loadObject(objectDef) {
    this.currentObjectDef = objectDef;

    // Compute derived physics via co-sim
    this.coSimProperties = this.cosim.computeObjectProperties(objectDef.physics);

    // Spawn in 3D scene
    this.env.spawnObject(objectDef);

    // Spawn in physics
    const startPos = this.env.getObjectPosition();
    this.physics.spawnObject(objectDef, startPos);

    // Update physics material with co-sim derived values
    this.physics.updateObjectMaterial(
      this.coSimProperties.effectiveFriction,
      this.coSimProperties.effectiveRestitution
    );

    // Reset task
    this.taskState = 'idle';
    this.taskProgress = 0;

    return this.coSimProperties;
  }

  /**
   * Start a pick-and-place task cycle
   */
  startTask() {
    if (!this.currentObjectDef) return;

    // Snapshot the current object position as the grab target
    const objPos = this.env.getObjectPosition();
    this._grabPos = { x: objPos.x, y: objPos.y, z: objPos.z };
    this._placePos = { x: -0.2, y: 0, z: 0.1 };

    this.taskState = 'reaching';
    this.taskProgress = 0;
    this.robot.joints.gripperOpen = 1.0;
    this.sensor.startTrajectory();
  }

  /**
   * Main simulation loop
   */
  _loop() {
    if (!this.isRunning) return;
    this._rafHandle = requestAnimationFrame(() => this._loop());

    if (this.isPaused) return;

    const now = performance.now();
    const realDt = Math.min((now - this._lastTimestamp) / 1000, 0.05); // cap at 50ms
    this._lastTimestamp = now;

    this.realTime += realDt;

    // Number of physics steps this frame
    const simDt = realDt * this.timeScale;
    const steps = Math.min(
      Math.ceil(simDt / this.physicsDt),
      this.timeScale * 4  // cap to prevent freeze
    );

    // Only capture RGB once per render frame (expensive)
    let rgbFeatures = null;
    const shouldCaptureRGB = this.timeScale <= 5; // skip RGB at high speeds

    for (let i = 0; i < steps; i++) {
      const stepDt = this.physicsDt;
      this.simTime += stepDt;
      this.simHours = this.simTime / 3600;

      // Update task state machine
      this._updateTask(stepDt);

      // Update robot
      this.robot.updateJoints();

      // Update gripper physics
      const eePos = this.robot.getEndEffectorPosition();
      this.physics.updateGripper(eePos, this.robot.isGripping);

      // Step physics
      this.physics.step(stepDt);

      // Sync object visual with physics
      const objState = this.physics.getObjectState();
      if (objState) {
        this.env.setObjectPosition(
          objState.position.x,
          objState.position.y,
          objState.position.z
        );
      }

      // Collect sensor data
      if (this.sensor.isRecording) {
        const envVec = this.cosim.getEnvironmentVector();
        // Only capture RGB on first step of this frame
        if (i === 0 && shouldCaptureRGB) {
          rgbFeatures = this.scene.captureRGBFeatures();
        }
        this.sensor.collectFrame(
          this.robot, this.physics, this.cosim,
          envVec, rgbFeatures
        );
      }
    }

    // Update environment visuals
    this.env.update(this.simTime);

    // Render
    this.scene.render();
    this.frameCount++;
  }

  /**
   * Smooth easing function (ease-in-out cubic)
   */
  _ease(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  /**
   * Task state machine: controls the robot through pick-and-place cycles.
   * Uses smooth joint interpolation via lerpJoints for natural motion.
   */
  _updateTask(dt) {
    if (this.taskState === 'idle') return;

    const speed = this.taskSpeed * 1.2;
    this.taskProgress += dt * speed;

    const tableH = this.env.tableHeight;
    // Smoothing factor — higher = snappier, lower = smoother
    const smoothing = Math.min(1, dt * 8);

    switch (this.taskState) {
      case 'reaching': {
        // Phase 1: move above the object, then descend
        const t = this._ease(Math.min(1, this.taskProgress));

        // Use the stored grab position (set when task starts)
        const gx = this._grabPos.x;
        const gz = this._grabPos.z;
        const aboveY = tableH + 0.18; // hover height
        const grabY = tableH + 0.06;  // grasp height (just above object)

        let targetPos;
        if (t < 0.6) {
          // Move to above the object
          const t2 = t / 0.6;
          targetPos = {
            x: gx * t2,
            y: aboveY + (1 - t2) * 0.1,
            z: gz * t2,
          };
        } else {
          // Descend toward the object
          const t2 = (t - 0.6) / 0.4;
          targetPos = {
            x: gx,
            y: aboveY + (grabY - aboveY) * t2,
            z: gz,
          };
        }

        const ik = this.robot.computeIK(targetPos, tableH);
        if (ik) this.robot.lerpJoints(ik, smoothing);
        this.robot.joints.gripperOpen = 1.0;
        this.robot.updateJoints();

        if (this.taskProgress >= 1) {
          this.taskState = 'grasping';
          this.taskProgress = 0;
        }
        break;
      }

      case 'grasping': {
        // Close gripper around the object
        const t = Math.min(1, this.taskProgress * 2.5);
        this.robot.joints.gripperOpen = 1.0 - t * 0.95;

        // Hold position at grab point
        const ik = this.robot.computeIK(
          { x: this._grabPos.x, y: tableH + 0.06, z: this._grabPos.z },
          tableH
        );
        if (ik) this.robot.lerpJoints(ik, smoothing);
        this.robot.updateJoints();

        if (t >= 1) {
          this.robot.isGripping = true;

          // Check grip reliability from co-sim
          if (this.coSimProperties) {
            if (Math.random() > this.coSimProperties.gripReliability) {
              this.robot.isGripping = false;
              this.robot.joints.gripperOpen = 0.8;
              this.taskState = 'reaching';
              this.taskProgress = 0;
              break;
            }
          }

          this.taskState = 'lifting';
          this.taskProgress = 0;
        }
        break;
      }

      case 'lifting': {
        // Lift straight up from the grab position
        const t = this._ease(Math.min(1, this.taskProgress));
        const liftHeight = 0.16;
        const ik = this.robot.computeIK(
          {
            x: this._grabPos.x,
            y: tableH + 0.06 + t * liftHeight,
            z: this._grabPos.z,
          },
          tableH
        );
        if (ik) this.robot.lerpJoints(ik, smoothing);
        this.robot.updateJoints();

        if (this.taskProgress >= 1) {
          this.taskState = 'moving';
          this.taskProgress = 0;
        }
        break;
      }

      case 'moving': {
        // Arc motion from grab position to place position
        const t = this._ease(Math.min(1, this.taskProgress));
        const startX = this._grabPos.x;
        const startZ = this._grabPos.z;
        const endX = this._placePos.x;
        const endZ = this._placePos.z;
        const arcHeight = tableH + 0.24;

        const ik = this.robot.computeIK(
          {
            x: startX + (endX - startX) * t,
            y: arcHeight + Math.sin(t * Math.PI) * 0.06,
            z: startZ + (endZ - startZ) * t,
          },
          tableH
        );
        if (ik) this.robot.lerpJoints(ik, smoothing);
        this.robot.updateJoints();

        if (this.taskProgress >= 1) {
          this.taskState = 'placing';
          this.taskProgress = 0;
        }
        break;
      }

      case 'placing': {
        // Lower to the place position
        const t = this._ease(Math.min(1, this.taskProgress));
        const ik = this.robot.computeIK(
          {
            x: this._placePos.x,
            y: tableH + 0.24 - t * 0.16,
            z: this._placePos.z,
          },
          tableH
        );
        if (ik) this.robot.lerpJoints(ik, smoothing);
        this.robot.updateJoints();

        if (this.taskProgress >= 1) {
          this.taskState = 'releasing';
          this.taskProgress = 0;
        }
        break;
      }

      case 'releasing': {
        // Open gripper
        const t = Math.min(1, this.taskProgress * 2.5);
        this.robot.joints.gripperOpen = 0.05 + t * 0.95;
        if (t >= 0.3) {
          this.robot.isGripping = false;
        }
        this.robot.updateJoints();

        if (t >= 1) {
          this.taskState = 'returning';
          this.taskProgress = 0;
        }
        break;
      }

      case 'returning': {
        // Smooth return to upright home position
        const t = this._ease(Math.min(1, this.taskProgress));

        // First lift up, then move to center
        let targetPos;
        if (t < 0.4) {
          const t2 = t / 0.4;
          targetPos = {
            x: this._placePos.x * (1 - t2),
            y: tableH + 0.10 + t2 * 0.16,
            z: this._placePos.z * (1 - t2),
          };
        } else {
          const t2 = (t - 0.4) / 0.6;
          targetPos = {
            x: 0.12 * (1 - t2),
            y: tableH + 0.26 - t2 * 0.02,
            z: 0,
          };
        }

        const ik = this.robot.computeIK(targetPos, tableH);
        if (ik) this.robot.lerpJoints(ik, smoothing);
        this.robot.joints.gripperOpen = 0.5;
        this.robot.updateJoints();

        if (this.taskProgress >= 1) {
          // End trajectory and process
          const trajectory = this.sensor.endTrajectory();
          if (trajectory) {
            this.pipeline.processTrajectory(
              trajectory,
              this.currentObjectDef,
              this.cosim.environment
            );
          }

          this.taskCycleCount++;

          // Reset object position and start new cycle
          this._resetObject();
          this.taskState = 'reaching';
          this.taskProgress = 0;
          this.sensor.startTrajectory();
        }
        break;
      }
    }
  }

  /**
   * Reset object to a new random position and update grab target
   */
  _resetObject() {
    if (this.currentObjectDef) {
      const pos = {
        x: this.objectStartPos.x + (Math.random() - 0.5) * 0.08,
        y: this.objectStartPos.y,
        z: (Math.random() - 0.5) * 0.08,
      };
      this.physics.spawnObject(this.currentObjectDef, pos);
      this.env.setObjectPosition(pos.x, pos.y, pos.z);

      // Update grab target for next cycle
      this._grabPos = { x: pos.x, y: pos.y, z: pos.z };
      this._placePos = {
        x: -0.18 + (Math.random() - 0.5) * 0.06,
        y: 0,
        z: 0.08 + (Math.random() - 0.5) * 0.06,
      };
    }
  }

  /**
   * Get simulation stats
   */
  getStats() {
    return {
      isRunning: this.isRunning,
      isPaused: this.isPaused,
      timeScale: this.timeScale,
      simTime: this.simTime,
      simHours: this.simHours,
      realTime: this.realTime,
      frameCount: this.frameCount,
      taskState: this.taskState,
      taskCycleCount: this.taskCycleCount,
      fps: this.frameCount / Math.max(0.001, this.realTime),
    };
  }
}
