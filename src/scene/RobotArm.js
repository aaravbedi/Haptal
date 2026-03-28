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
   * Set target position and compute IK (simplified analytical).
   * Returns true if reachable.
   */
  solveIK(targetPos, tableHeight) {
    const C = ARM_CONFIG;
    const totalReach = C.upperArmLength + C.lowerArmLength + C.gripperLength;
    const baseY = tableHeight + C.baseHeight + C.shoulderHeight;

    // Target relative to shoulder
    const dx = targetPos.x;
    const dz = targetPos.z;
    const dy = targetPos.y - baseY;

    // Base rotation
    this.joints.base = Math.atan2(dz, dx);

    // Distance in shoulder plane
    const horizontalDist = Math.sqrt(dx * dx + dz * dz);
    const dist2D = Math.sqrt(horizontalDist * horizontalDist + dy * dy);

    // Clamp to reachable
    const L1 = C.upperArmLength;
    const L2 = C.lowerArmLength + C.gripperLength * 0.5;
    const reach = Math.min(dist2D, L1 + L2 - 0.01);

    if (reach < Math.abs(L1 - L2) + 0.01) return false;

    // Two-link IK
    const cosElbow = (L1 * L1 + L2 * L2 - reach * reach) / (2 * L1 * L2);
    const elbowAngle = Math.acos(Math.max(-1, Math.min(1, cosElbow)));

    const cosAlpha = (L1 * L1 + reach * reach - L2 * L2) / (2 * L1 * reach);
    const alpha = Math.acos(Math.max(-1, Math.min(1, cosAlpha)));
    const gamma = Math.atan2(dy, horizontalDist);

    this.joints.shoulder = -(gamma + alpha);
    this.joints.elbow = Math.PI - elbowAngle;

    // Keep gripper pointing down
    this.joints.wristPitch = -(this.joints.shoulder + this.joints.elbow) - Math.PI / 2;

    this.updateJoints();
    return true;
  }

  /**
   * Add arm to a Three.js scene at given table height.
   */
  addToScene(scene, tableHeight) {
    this.group.position.y = tableHeight;
    scene.add(this.group);
  }
}
