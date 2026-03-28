import * as THREE from 'three';

/**
 * Creates the table and manages target objects in the scene.
 * Objects are swapped based on taxonomy selection.
 */
export class Environment {
  constructor(scene) {
    this.scene = scene;
    this.tableHeight = 0.42;
    this.currentObject = null;
    this.currentObjectMesh = null;
    this.targetPosition = new THREE.Vector3(0.25, this.tableHeight, 0);
    this.collectPosition = new THREE.Vector3(-0.25, this.tableHeight + 0.1, 0);

    this._buildTable();
    this._buildTargetMarker();
  }

  _buildTable() {
    const tableMat = new THREE.MeshStandardMaterial({
      color: 0x2a1f14,
      roughness: 0.75,
      metalness: 0.1,
    });

    // Tabletop
    const topGeo = new THREE.BoxGeometry(0.9, 0.03, 0.6);
    this.tabletop = new THREE.Mesh(topGeo, tableMat);
    this.tabletop.position.y = this.tableHeight;
    this.tabletop.castShadow = true;
    this.tabletop.receiveShadow = true;
    this.scene.add(this.tabletop);

    // Table legs
    const legGeo = new THREE.CylinderGeometry(0.018, 0.018, this.tableHeight - 0.015, 8);
    const legMat = new THREE.MeshStandardMaterial({
      color: 0x1a1410,
      roughness: 0.6,
      metalness: 0.3,
    });
    const legPositions = [
      [-0.38, -0.24],
      [0.38, -0.24],
      [-0.38, 0.24],
      [0.38, 0.24],
    ];
    for (const [x, z] of legPositions) {
      const leg = new THREE.Mesh(legGeo, legMat);
      leg.position.set(x, (this.tableHeight - 0.015) / 2, z);
      leg.castShadow = true;
      this.scene.add(leg);
    }

    // Edge trim (metal strip)
    const edgeGeo = new THREE.BoxGeometry(0.91, 0.005, 0.61);
    const edgeMat = new THREE.MeshStandardMaterial({
      color: 0x555555,
      roughness: 0.3,
      metalness: 0.8,
    });
    const edge = new THREE.Mesh(edgeGeo, edgeMat);
    edge.position.y = this.tableHeight + 0.015;
    this.scene.add(edge);
  }

  _buildTargetMarker() {
    // Pulsing ring where collected objects go
    const ringGeo = new THREE.RingGeometry(0.04, 0.05, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x22c55e,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4,
    });
    this.targetMarker = new THREE.Mesh(ringGeo, ringMat);
    this.targetMarker.rotation.x = -Math.PI / 2;
    this.targetMarker.position.copy(this.collectPosition);
    this.targetMarker.position.y = this.tableHeight + 0.016;
    this.scene.add(this.targetMarker);
  }

  /**
   * Spawn an object on the table based on taxonomy physics data.
   */
  spawnObject(objectDef) {
    // Remove previous
    if (this.currentObjectMesh) {
      this.scene.remove(this.currentObjectMesh);
      this.currentObjectMesh.geometry.dispose();
      this.currentObjectMesh.material.dispose();
    }

    this.currentObject = objectDef;
    const p = objectDef.physics;
    const color = new THREE.Color(p.color[0], p.color[1], p.color[2]);

    let geo;
    switch (p.shape) {
      case 'sphere':
        geo = new THREE.SphereGeometry(p.radius, 24, 24);
        break;
      case 'cylinder':
        geo = new THREE.CylinderGeometry(p.radius, p.radius, p.length || 0.1, 16);
        break;
      case 'box':
        geo = new THREE.BoxGeometry(p.width || 0.1, p.height || 0.1, p.depth || 0.1);
        break;
      default:
        geo = new THREE.SphereGeometry(0.03, 16, 16);
    }

    const mat = new THREE.MeshStandardMaterial({
      color,
      roughness: p.surfaceTexture === 'rough' ? 0.8 : 0.35,
      metalness: 0.05,
    });

    this.currentObjectMesh = new THREE.Mesh(geo, mat);
    this.currentObjectMesh.castShadow = true;

    // Position on table
    const objHeight = p.shape === 'sphere' ? p.radius
      : p.shape === 'cylinder' ? (p.length || 0.1) / 2
      : (p.height || 0.1) / 2;

    this.objectRestY = this.tableHeight + 0.015 + objHeight;
    this.currentObjectMesh.position.set(
      this.targetPosition.x,
      this.objectRestY,
      this.targetPosition.z
    );
    this.scene.add(this.currentObjectMesh);

    return this.currentObjectMesh;
  }

  /**
   * Update object position (called during sim)
   */
  setObjectPosition(x, y, z) {
    if (this.currentObjectMesh) {
      this.currentObjectMesh.position.set(x, y, z);
    }
  }

  getObjectPosition() {
    if (this.currentObjectMesh) {
      return this.currentObjectMesh.position.clone();
    }
    return new THREE.Vector3();
  }

  /**
   * Animate target marker pulse
   */
  update(time) {
    if (this.targetMarker) {
      this.targetMarker.material.opacity = 0.25 + 0.2 * Math.sin(time * 3);
      const s = 1.0 + 0.08 * Math.sin(time * 3);
      this.targetMarker.scale.set(s, s, 1);
    }
  }
}
