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
   * Task state machine: controls the robot through pick-and-place cycles
   */
  _updateTask(dt) {
    if (this.taskState === 'idle') return;

    const speed = this.taskSpeed * 1.5;
    this.taskProgress += dt * speed;

    const objPos = this.env.getObjectPosition();
    const tableH = this.env.tableHeight;

    switch (this.taskState) {
      case 'reaching': {
        // Move arm toward object
        const t = Math.min(1, this.taskProgress);
        const targetY = objPos.y + 0.02;
        const target = {
          x: objPos.x,
          y: targetY + (1 - t) * 0.15,
          z: objPos.z,
        };
        this.robot.solveIK(target, tableH);
        this.robot.joints.gripperOpen = 1.0;

        if (t >= 1) {
          this.taskState = 'grasping';
          this.taskProgress = 0;
        }
        break;
      }

      case 'grasping': {
        // Close gripper
        const t = Math.min(1, this.taskProgress * 2);
        this.robot.joints.gripperOpen = 1.0 - t;
        this.robot.solveIK(
          { x: objPos.x, y: objPos.y + 0.02, z: objPos.z },
          tableH
        );

        if (t >= 1) {
          this.robot.isGripping = true;

          // Check grip reliability from co-sim
          if (this.coSimProperties) {
            const roll = Math.random();
            if (roll > this.coSimProperties.gripReliability) {
              // Grip failed! Object slips
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
        // Lift object upward
        const t = Math.min(1, this.taskProgress);
        const liftHeight = 0.15;
        this.robot.solveIK(
          {
            x: objPos.x,
            y: tableH + 0.05 + t * liftHeight,
            z: objPos.z,
          },
          tableH
        );

        if (t >= 1) {
          this.taskState = 'moving';
          this.taskProgress = 0;
        }
        break;
      }

      case 'moving': {
        // Move to target position
        const t = Math.min(1, this.taskProgress);
        const startX = this.objectStartPos.x;
        const endX = this.objectTargetPos.x;
        const moveHeight = tableH + 0.2;

        this.robot.solveIK(
          {
            x: startX + (endX - startX) * t,
            y: moveHeight + Math.sin(t * Math.PI) * 0.05,
            z: 0,
          },
          tableH
        );

        if (t >= 1) {
          this.taskState = 'placing';
          this.taskProgress = 0;
        }
        break;
      }

      case 'placing': {
        // Lower to place position
        const t = Math.min(1, this.taskProgress);
        this.robot.solveIK(
          {
            x: this.objectTargetPos.x,
            y: tableH + 0.2 - t * 0.12,
            z: 0,
          },
          tableH
        );

        if (t >= 1) {
          this.taskState = 'releasing';
          this.taskProgress = 0;
        }
        break;
      }

      case 'releasing': {
        // Open gripper
        const t = Math.min(1, this.taskProgress * 2);
        this.robot.joints.gripperOpen = t;
        if (t >= 0.3) {
          this.robot.isGripping = false;
        }

        if (t >= 1) {
          this.taskState = 'returning';
          this.taskProgress = 0;
        }
        break;
      }

      case 'returning': {
        // Return to home position
        const t = Math.min(1, this.taskProgress);
        this.robot.solveIK(
          {
            x: 0,
            y: tableH + 0.3,
            z: 0,
          },
          tableH
        );
        this.robot.joints.gripperOpen = 0.5;

        if (t >= 1) {
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
   * Reset object to start position for next cycle
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
