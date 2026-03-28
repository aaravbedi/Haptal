/**
 * Sensor Data Collector
 *
 * Collects raw sensor data from the simulation at each timestep:
 *   - Joint angles (6 DOF)
 *   - Joint torques (6 DOF)
 *   - End-effector position (3D)
 *   - Gripper state (open amount + contact force)
 *   - Object state (position, velocity)
 *   - Environment parameters (8 dims)
 *   - RGB features (downsampled)
 *
 * Outputs a raw sensor frame that the EmbeddingEncoder can process.
 */

export class SensorCollector {
  constructor() {
    this.frameBuffer = [];
    this.maxBufferSize = 100000; // max frames in memory
    this.totalFramesCollected = 0;
    this.trajectoryCount = 0;
    this.currentTrajectory = [];
    this.isRecording = false;
  }

  /**
   * Collect a single sensor frame from all sources.
   * Returns the raw sensor frame object.
   */
  collectFrame(robotArm, physicsWorld, coSimBridge, envVector, rgbFeatures) {
    const jointAngles = robotArm.getJointAngles();
    const endEffector = robotArm.getEndEffectorPosition();
    const objectState = physicsWorld.getObjectState();
    const contactData = physicsWorld.contactData;

    const frame = {
      timestamp: performance.now(),
      // Robot state (6 joint angles)
      jointAngles: new Float32Array(jointAngles),
      // Joint torques (computed from physics)
      jointTorques: new Float32Array(robotArm.torques),
      // End effector position
      endEffector: new Float32Array([endEffector.x, endEffector.y, endEffector.z]),
      // Gripper
      gripperOpen: robotArm.joints.gripperOpen,
      gripperContactForce: contactData.force,
      // Object state
      objectPosition: objectState ? new Float32Array([
        objectState.position.x, objectState.position.y, objectState.position.z,
      ]) : new Float32Array(3),
      objectVelocity: objectState ? new Float32Array([
        objectState.velocity.x, objectState.velocity.y, objectState.velocity.z,
      ]) : new Float32Array(3),
      // Environment
      environmentVector: new Float32Array(envVector),
      // RGB features (compact)
      rgbFeatures: rgbFeatures ? new Float32Array(rgbFeatures.slice(0, 64)) : new Float32Array(64),
    };

    if (this.isRecording) {
      this.currentTrajectory.push(frame);
      this.totalFramesCollected++;
    }

    return frame;
  }

  /**
   * Convert a raw frame to a flat Float32Array for the encoder.
   * Layout:
   *   [0-5]   joint angles (6)
   *   [6-11]  joint torques (6)
   *   [12-14] end effector pos (3)
   *   [15]    gripper open (1)
   *   [16]    contact force (1)
   *   [17-19] object position (3)
   *   [20-22] object velocity (3)
   *   [23-30] environment (8)
   *   [31-94] rgb features (64)
   *   Total: 95 floats
   */
  frameToVector(frame) {
    const vec = new Float32Array(95);
    vec.set(frame.jointAngles, 0);
    vec.set(frame.jointTorques, 6);
    vec.set(frame.endEffector, 12);
    vec[15] = frame.gripperOpen;
    vec[16] = frame.gripperContactForce;
    vec.set(frame.objectPosition, 17);
    vec.set(frame.objectVelocity, 20);
    vec.set(frame.environmentVector, 23);
    vec.set(frame.rgbFeatures, 31);
    return vec;
  }

  /**
   * Start recording a new trajectory
   */
  startTrajectory() {
    this.isRecording = true;
    this.currentTrajectory = [];
  }

  /**
   * End current trajectory and store it
   */
  endTrajectory() {
    this.isRecording = false;
    if (this.currentTrajectory.length > 0) {
      this.trajectoryCount++;
      const trajectory = {
        id: this.trajectoryCount,
        frames: this.currentTrajectory,
        length: this.currentTrajectory.length,
        timestamp: Date.now(),
      };
      this.currentTrajectory = [];

      // Keep frame buffer bounded
      if (this.frameBuffer.length > this.maxBufferSize) {
        this.frameBuffer.splice(0, this.frameBuffer.length - this.maxBufferSize);
      }

      return trajectory;
    }
    return null;
  }

  /**
   * Get collection statistics
   */
  getStats() {
    return {
      totalFrames: this.totalFramesCollected,
      trajectories: this.trajectoryCount,
      currentTrajectoryLength: this.currentTrajectory.length,
      isRecording: this.isRecording,
      bufferUsage: this.frameBuffer.length / this.maxBufferSize,
    };
  }

  /**
   * Reset all collected data
   */
  reset() {
    this.frameBuffer = [];
    this.totalFramesCollected = 0;
    this.trajectoryCount = 0;
    this.currentTrajectory = [];
    this.isRecording = false;
  }
}
