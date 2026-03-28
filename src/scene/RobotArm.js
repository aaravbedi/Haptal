import * as THREE from 'three';

/**
 * Orca-style robot arm with 6 DOF + gripper.
 *
 * Joint structure:
 *   Base (Y-axis rotation)
 *   → Shoulder (Z-axis rotation)
 *     → Upper Arm
 *       → Elbow (Z-axis rotation)
 *         → Lower Arm
 *           → Wrist Pitch (Z-axis rotation)
 *             → Wrist Roll (Y-axis rotation)
 *               → Wrist Yaw (Z-axis rotation)
 *                 → Gripper (open/close)
 */

const ARM_CONFIG = {
  baseHeight: 0.06,
  baseRadius: 0.06,
  shoulderHeight: 0.08,
  upperArmLength: 0.22,
  elbowSize: 0.03,
  lowerArmLength: 0.20,
  wristSize: 0.022,
  gripperLength: 0.07,
  gripperWidth: 0.012,
  gripperGap: 0.04,    // max opening
  jointColor: 0x2a2a2a,
  armColor: 0xe8e8e8,
  gripperColor: 0x3a3a3a,
  accentColor: 0x3b82f6,
};

export class RobotArm {
  constructor() {
    this.group = new THREE.Group();

    // Joint angles (radians)
    this.joints = {
      base: 0,
      shoulder: -0.6,
      elbow: 1.2,
      wristPitch: -0.5,
      wristRoll: 0,
      wristYaw: 0,
      gripperOpen: 0.5,  // 0=closed, 1=fully open
    };

    // Joint torques (computed from physics)
    this.torques = new Float32Array(6);

    // Contact state
    this.isGripping = false;
    this.contactForce = new THREE.Vector3();

    this._buildArm();
  }

  _mat(color, metalness = 0.6, roughness = 0.35) {
    return new THREE.MeshStandardMaterial({ color, metalness, roughness });
  }

  _buildArm() {
    const C = ARM_CONFIG;

    // === Base ===
    const baseGeo = new THREE.CylinderGeometry(C.baseRadius, C.baseRadius * 1.15, C.baseHeight, 24);
    const baseMesh = new THREE.Mesh(baseGeo, this._mat(C.jointColor, 0.8, 0.2));
    baseMesh.castShadow = true;
    this.basePivot = new THREE.Group();
    this.basePivot.add(baseMesh);
    baseMesh.position.y = C.baseHeight / 2;
    this.group.add(this.basePivot);

    // Accent ring on base
    const ringGeo = new THREE.TorusGeometry(C.baseRadius * 0.9, 0.003, 8, 32);
    const ringMesh = new THREE.Mesh(ringGeo, this._mat(C.accentColor, 0.3, 0.5));
    ringMesh.rotation.x = Math.PI / 2;
    ringMesh.position.y = C.baseHeight;
    this.basePivot.add(ringMesh);

    // === Shoulder housing ===
    const shoulderGeo = new THREE.CylinderGeometry(0.035, 0.04, C.shoulderHeight, 16);
    const shoulderMesh = new THREE.Mesh(shoulderGeo, this._mat(C.jointColor));
    shoulderMesh.castShadow = true;
    this.shoulderPivot = new THREE.Group();
    this.shoulderPivot.position.y = C.baseHeight;
    shoulderMesh.position.y = C.shoulderHeight / 2;
    this.shoulderPivot.add(shoulderMesh);
    this.basePivot.add(this.shoulderPivot);

    // === Upper Arm ===
    const upperArmGeo = new THREE.BoxGeometry(0.032, C.upperArmLength, 0.028);
    const upperArmMesh = new THREE.Mesh(upperArmGeo, this._mat(C.armColor, 0.4, 0.45));
    upperArmMesh.castShadow = true;
    this.upperArmPivot = new THREE.Group();
    this.upperArmPivot.position.y = C.shoulderHeight;
    upperArmMesh.position.y = C.upperArmLength / 2;
    this.upperArmPivot.add(upperArmMesh);
    this.shoulderPivot.add(this.upperArmPivot);

    // Joint sphere at shoulder
    const jointSphere1 = new THREE.Mesh(
      new THREE.SphereGeometry(0.025, 12, 12),
      this._mat(C.jointColor)
    );
    jointSphere1.castShadow = true;
    this.upperArmPivot.add(jointSphere1);

    // === Elbow ===
    const elbowSphere = new THREE.Mesh(
      new THREE.SphereGeometry(C.elbowSize, 12, 12),
      this._mat(C.jointColor)
    );
    elbowSphere.castShadow = true;
    this.elbowPivot = new THREE.Group();
    this.elbowPivot.position.y = C.upperArmLength;
    this.elbowPivot.add(elbowSphere);
    this.upperArmPivot.add(this.elbowPivot);

    // === Lower Arm ===
    const lowerArmGeo = new THREE.BoxGeometry(0.026, C.lowerArmLength, 0.024);
    const lowerArmMesh = new THREE.Mesh(lowerArmGeo, this._mat(C.armColor, 0.4, 0.45));
    lowerArmMesh.castShadow = true;
    lowerArmMesh.position.y = C.lowerArmLength / 2;
    this.elbowPivot.add(lowerArmMesh);

    // === Wrist ===
    this.wristPitchPivot = new THREE.Group();
    this.wristPitchPivot.position.y = C.lowerArmLength;
    this.elbowPivot.add(this.wristPitchPivot);

    const wristSphere = new THREE.Mesh(
      new THREE.SphereGeometry(C.wristSize, 12, 12),
      this._mat(C.jointColor)
    );
    wristSphere.castShadow = true;
    this.wristPitchPivot.add(wristSphere);

    this.wristRollPivot = new THREE.Group();
    this.wristPitchPivot.add(this.wristRollPivot);

    this.wristYawPivot = new THREE.Group();
    this.wristRollPivot.add(this.wristYawPivot);

    // === Gripper Mount ===
    const mountGeo = new THREE.CylinderGeometry(0.018, 0.015, 0.02, 12);
    const mountMesh = new THREE.Mesh(mountGeo, this._mat(C.gripperColor));
    mountMesh.castShadow = true;
    mountMesh.position.y = 0.01;
    this.wristYawPivot.add(mountMesh);

    // === Gripper Fingers ===
    this.gripperGroup = new THREE.Group();
    this.gripperGroup.position.y = 0.02;
    this.wristYawPivot.add(this.gripperGroup);

    const fingerGeo = new THREE.BoxGeometry(
      C.gripperWidth, C.gripperLength, 0.008
    );
    const fingerMat = this._mat(C.gripperColor, 0.7, 0.3);

    // Left finger
    this.leftFinger = new THREE.Mesh(fingerGeo, fingerMat);
    this.leftFinger.castShadow = true;
    this.leftFinger.position.set(0, C.gripperLength / 2, 0);
    this.leftFingerPivot = new THREE.Group();
    this.leftFingerPivot.add(this.leftFinger);
    this.gripperGroup.add(this.leftFingerPivot);

    // Right finger
    this.rightFinger = new THREE.Mesh(fingerGeo, fingerMat);
    this.rightFinger.castShadow = true;
    this.rightFinger.position.set(0, C.gripperLength / 2, 0);
    this.rightFingerPivot = new THREE.Group();
    this.rightFingerPivot.add(this.rightFinger);
    this.gripperGroup.add(this.rightFingerPivot);

    // Finger tips (blue accent)
    const tipGeo = new THREE.BoxGeometry(C.gripperWidth + 0.002, 0.01, 0.012);
    const tipMat = this._mat(C.accentColor, 0.3, 0.5);
    const leftTip = new THREE.Mesh(tipGeo, tipMat);
    leftTip.position.y = C.gripperLength;
    this.leftFingerPivot.add(leftTip);
    const rightTip = new THREE.Mesh(tipGeo, tipMat);
    rightTip.position.y = C.gripperLength;
    this.rightFingerPivot.add(rightTip);

    this.updateJoints();
  }

  /**
   * Apply current joint angles to the arm hierarchy.
   */
  updateJoints() {
    const j = this.joints;
    const C = ARM_CONFIG;

    this.basePivot.rotation.y = j.base;
    this.upperArmPivot.rotation.z = j.shoulder;
    this.elbowPivot.rotation.z = j.elbow;
    this.wristPitchPivot.rotation.z = j.wristPitch;
    this.wristRollPivot.rotation.y = j.wristRoll;
    this.wristYawPivot.rotation.z = j.wristYaw;

    // Gripper open/close
    const halfGap = (j.gripperOpen * C.gripperGap) / 2;
    this.leftFingerPivot.position.z = halfGap;
    this.rightFingerPivot.position.z = -halfGap;
  }

  /**
   * Get end-effector (gripper tip) world position.
   */
  getEndEffectorPosition() {
    const tip = new THREE.Vector3(0, ARM_CONFIG.gripperLength, 0);
    this.gripperGroup.localToWorld(tip);
    return tip;
  }

  /**
   * Get joint angles as flat array for sensor data.
   */
  getJointAngles() {
    const j = this.joints;
    return new Float32Array([
      j.base, j.shoulder, j.elbow,
      j.wristPitch, j.wristRoll, j.wristYaw,
    ]);
  }

  /**
   * Compute IK target joint angles WITHOUT applying them.
   * Returns { base, shoulder, elbow, wristPitch } or null if unreachable.
   *
   * Conventions (Three.js Z-rotation on a +Y-pointing arm):
   *   shoulder_z = θ1 - π/2    (θ1 = shoulder angle from horizontal)
   *   elbow_z    = θ2           (θ2 = elbow bend, negative = elbow-down)
   *   wrist_z    = -θ1 - θ2 - π/2   (keeps gripper pointing straight down)
   */
  computeIK(targetPos, tableHeight) {
    const C = ARM_CONFIG;
    const L1 = C.upperArmLength;
    const L2 = C.lowerArmLength + C.gripperLength * 0.6;

    // Shoulder pivot in world space
    const shoulderY = tableHeight + C.baseHeight + C.shoulderHeight;

    // Base rotation (Y-axis) — point arm toward target in XZ plane
    const base = Math.atan2(targetPos.z, targetPos.x);

    // Target in the arm's 2D plane (horizontal r, vertical y), relative to shoulder
    const r = Math.sqrt(targetPos.x * targetPos.x + targetPos.z * targetPos.z);
    const y = targetPos.y - shoulderY;

    // Distance from shoulder to target
    const dSq = r * r + y * y;
    const d = Math.sqrt(dSq);

    // Clamp to reachable workspace
    const maxReach = L1 + L2 - 0.005;
    const minReach = Math.abs(L1 - L2) + 0.005;
    if (d > maxReach || d < minReach) {
      // Clamp: point straight toward target at max reach
      const clampD = Math.min(maxReach, Math.max(minReach, d));
      const scale = clampD / Math.max(d, 0.001);
      return this.computeIK(
        { x: targetPos.x * scale, y: shoulderY + y * scale, z: targetPos.z * scale },
        tableHeight
      );
    }

    // Standard 2-link planar IK
    // Elbow angle (negative = elbow-down, natural reaching configuration)
    const cosQ2 = (dSq - L1 * L1 - L2 * L2) / (2 * L1 * L2);
    const q2 = -Math.acos(Math.max(-1, Math.min(1, cosQ2))); // elbow-down

    // Shoulder angle from horizontal
    const k1 = L1 + L2 * Math.cos(q2);
    const k2 = L2 * Math.sin(q2);
    const q1 = Math.atan2(y, r) - Math.atan2(k2, k1);

    // Convert to Three.js Z-rotation angles
    const shoulder = q1 - Math.PI / 2;
    const elbow = q2;
    const wristPitch = -q1 - q2 - Math.PI / 2;

    return { base, shoulder, elbow, wristPitch };
  }

  /**
   * Solve IK and apply immediately. Returns true if reachable.
   */
  solveIK(targetPos, tableHeight) {
    const result = this.computeIK(targetPos, tableHeight);
    if (!result) return false;

    this.joints.base = result.base;
    this.joints.shoulder = result.shoulder;
    this.joints.elbow = result.elbow;
    this.joints.wristPitch = result.wristPitch;
    this.updateJoints();
    return true;
  }

  /**
   * Smoothly interpolate current joints toward target joints.
   * @param {object} target - { base, shoulder, elbow, wristPitch }
   * @param {number} alpha - interpolation factor (0-1), higher = faster
   */
  lerpJoints(target, alpha) {
    const a = Math.min(1, Math.max(0, alpha));
    this.joints.base += (target.base - this.joints.base) * a;
    this.joints.shoulder += (target.shoulder - this.joints.shoulder) * a;
    this.joints.elbow += (target.elbow - this.joints.elbow) * a;
    this.joints.wristPitch += (target.wristPitch - this.joints.wristPitch) * a;
    this.updateJoints();
  }

  /**
   * Add arm to a Three.js scene at given table height.
   */
  addToScene(scene, tableHeight) {
    this.group.position.y = tableHeight;
    scene.add(this.group);
  }
}
