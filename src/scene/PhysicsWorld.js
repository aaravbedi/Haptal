import * as CANNON from 'cannon-es';

/**
 * Cannon-es physics world wrapping rigid body simulation.
 * Handles collisions, forces, and provides sensor-grade contact data.
 */
export class PhysicsWorld {
  constructor() {
    this.world = new CANNON.World({
      gravity: new CANNON.Vec3(0, -9.81, 0),
    });
    this.world.broadphase = new CANNON.NaiveBroadphase();
    this.world.solver.iterations = 10;
    this.world.defaultContactMaterial.friction = 0.3;
    this.world.defaultContactMaterial.restitution = 0.2;

    this.bodies = {};
    this.contactData = { force: 0, point: null, normal: null };

    this._initGround();
    this._initTable();
    this._setupContactListener();
  }

  _initGround() {
    const groundBody = new CANNON.Body({
      mass: 0,
      shape: new CANNON.Plane(),
    });
    groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    this.world.addBody(groundBody);
    this.bodies.ground = groundBody;
  }

  _initTable() {
    // Table as a static box
    const tableBody = new CANNON.Body({
      mass: 0,
      shape: new CANNON.Box(new CANNON.Vec3(0.45, 0.015, 0.3)),
      position: new CANNON.Vec3(0, 0.42, 0),
    });
    this.world.addBody(tableBody);
    this.bodies.table = tableBody;
  }

  _setupContactListener() {
    this.world.addEventListener('postStep', () => {
      this.contactData = { force: 0, point: null, normal: null };
      if (this.bodies.object && this.bodies.gripper) {
        const contacts = this.world.contacts;
        for (const c of contacts) {
          const involvesObject = c.bi === this.bodies.object || c.bj === this.bodies.object;
          const involvesGripper = c.bi === this.bodies.gripper || c.bj === this.bodies.gripper;
          if (involvesObject && involvesGripper && c.equations.length > 0) {
            // Extract contact force magnitude
            let totalForce = 0;
            for (const eq of c.equations) {
              totalForce += Math.abs(eq.multiplier);
            }
            this.contactData = {
              force: totalForce,
              point: c.equations[0]?.rj ? {
                x: c.equations[0].rj.x,
                y: c.equations[0].rj.y,
                z: c.equations[0].rj.z,
              } : null,
              normal: c.ni ? { x: c.ni.x, y: c.ni.y, z: c.ni.z } : null,
            };
          }
        }
      }
    });
  }

  /**
   * Set gravity (affected by environment temperature → air density)
   */
  setGravity(g) {
    this.world.gravity.set(0, -g, 0);
  }

  /**
   * Spawn a physics body for the target object
   */
  spawnObject(objectDef, position) {
    // Remove previous
    if (this.bodies.object) {
      this.world.removeBody(this.bodies.object);
    }

    const p = objectDef.physics;
    let shape;
    switch (p.shape) {
      case 'sphere':
        shape = new CANNON.Sphere(p.radius);
        break;
      case 'cylinder':
        shape = new CANNON.Cylinder(p.radius, p.radius, p.length || 0.1, 12);
        break;
      case 'box':
        shape = new CANNON.Box(new CANNON.Vec3(
          (p.width || 0.1) / 2,
          (p.height || 0.1) / 2,
          (p.depth || 0.1) / 2
        ));
        break;
      default:
        shape = new CANNON.Sphere(0.03);
    }

    const body = new CANNON.Body({
      mass: p.mass,
      shape,
      position: new CANNON.Vec3(position.x, position.y, position.z),
      linearDamping: 0.4,
      angularDamping: 0.4,
    });

    // Set material properties
    const material = new CANNON.Material();
    material.friction = p.friction;
    material.restitution = p.restitution;
    body.material = material;

    this.world.addBody(body);
    this.bodies.object = body;
    return body;
  }

  /**
   * Create/update gripper physics body at end-effector position
   */
  updateGripper(position, isGripping) {
    if (!this.bodies.gripper) {
      const shape = new CANNON.Sphere(0.02);
      this.bodies.gripper = new CANNON.Body({
        mass: 0, // kinematic
        shape,
        type: CANNON.Body.KINEMATIC,
      });
      this.world.addBody(this.bodies.gripper);
    }

    this.bodies.gripper.position.set(position.x, position.y, position.z);

    // When gripping, lock the object to the gripper
    if (isGripping && this.bodies.object) {
      const obj = this.bodies.object;
      const grip = this.bodies.gripper;
      const dx = obj.position.x - grip.position.x;
      const dy = obj.position.y - grip.position.y;
      const dz = obj.position.z - grip.position.z;
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

      if (dist < 0.08) {
        // Snap object to gripper
        obj.position.copy(grip.position);
        obj.position.y -= 0.03;
        obj.velocity.set(0, 0, 0);
        obj.angularVelocity.set(0, 0, 0);
      }
    }
  }

  /**
   * Step the physics simulation
   */
  step(dt) {
    this.world.step(Math.min(dt, 1 / 30), dt, 3);
  }

  /**
   * Get object physics state for sensor data
   */
  getObjectState() {
    const obj = this.bodies.object;
    if (!obj) return null;
    return {
      position: { x: obj.position.x, y: obj.position.y, z: obj.position.z },
      velocity: { x: obj.velocity.x, y: obj.velocity.y, z: obj.velocity.z },
      angularVelocity: {
        x: obj.angularVelocity.x,
        y: obj.angularVelocity.y,
        z: obj.angularVelocity.z,
      },
      contactForce: this.contactData.force,
      contactPoint: this.contactData.point,
    };
  }

  /**
   * Update object friction/material based on co-sim derived properties
   */
  updateObjectMaterial(friction, restitution) {
    if (this.bodies.object && this.bodies.object.material) {
      this.bodies.object.material.friction = friction;
      this.bodies.object.material.restitution = restitution;
    }
  }
}
