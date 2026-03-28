import * as THREE from 'three';

/**
 * Environment Presets & Props
 *
 * Manages the full 3D environment: floor, walls, furniture, props,
 * and scattered objects. Supports multiple preset environments.
 */

// ─── Material helpers ───
function mat(color, roughness = 0.7, metalness = 0.1) {
  return new THREE.MeshStandardMaterial({ color, roughness, metalness });
}
function matFloor(color) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.9, metalness: 0.05, side: THREE.DoubleSide });
}

// ─── Preset Definitions ───
export const PRESETS = {
  kitchen: {
    name: 'Kitchen',
    icon: '🍳',
    floor: { color: 0x8b7355, size: 8 },
    walls: true,
    wallColor: 0xf5f0e8,
    ambient: 0.5,
    lightColor: 0xfff5e0,
    fogColor: 0x2a2218,
    tableHeight: 0.42,
    tableSize: [1.2, 0.03, 0.7],
    tableColor: 0x3b2a1a,
    props: ['chair', 'chair', 'counter', 'fridge', 'plate', 'plate', 'mug', 'bowl', 'cutting_board'],
  },
  warehouse: {
    name: 'Warehouse',
    icon: '🏭',
    floor: { color: 0x555555, size: 10 },
    walls: true,
    wallColor: 0x888888,
    ambient: 0.35,
    lightColor: 0xffffff,
    fogColor: 0x1a1a1f,
    tableHeight: 0.38,
    tableSize: [1.5, 0.04, 0.8],
    tableColor: 0x666666,
    props: ['shelf', 'shelf', 'conveyor', 'pallet', 'crate', 'crate', 'barrel'],
  },
  park: {
    name: 'Park / Outdoor',
    icon: '🌳',
    floor: { color: 0x3a6b28, size: 12 },
    walls: false,
    ambient: 0.6,
    lightColor: 0xfffde0,
    fogColor: 0x1a2a15,
    tableHeight: 0.38,
    tableSize: [1.0, 0.04, 0.55],
    tableColor: 0x5a3a1a,
    props: ['bench', 'tree', 'tree', 'bush', 'bush', 'rock', 'rock', 'lamppost'],
  },
  lab: {
    name: 'Lab / Default',
    icon: '🔬',
    floor: { color: 0x0d1520, size: 6 },
    walls: false,
    ambient: 0.4,
    lightColor: 0xffffff,
    fogColor: 0x0f1923,
    tableHeight: 0.42,
    tableSize: [0.9, 0.03, 0.6],
    tableColor: 0x2a1f14,
    props: [],
  },
};

// ─── Prop Builder Functions ───
const PROP_BUILDERS = {
  chair(scene, x, z, rotY = 0) {
    const g = new THREE.Group();
    // Seat
    g.add(Object.assign(new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.03, 0.4), mat(0x5a3a20, 0.7, 0.15)), { position: new THREE.Vector3(0, 0.44, 0), castShadow: true }));
    // Legs
    for (const [lx, lz] of [[-0.16, -0.16], [0.16, -0.16], [-0.16, 0.16], [0.16, 0.16]]) {
      g.add(Object.assign(new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.44, 6), mat(0x3a2a15)), { position: new THREE.Vector3(lx, 0.22, lz), castShadow: true }));
    }
    // Backrest
    g.add(Object.assign(new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.35, 0.025), mat(0x5a3a20, 0.7, 0.15)), { position: new THREE.Vector3(0, 0.63, -0.18), castShadow: true }));
    g.position.set(x, 0, z);
    g.rotation.y = rotY;
    scene.add(g);
    return g;
  },

  counter(scene, x, z, rotY = 0) {
    const g = new THREE.Group();
    // Body
    g.add(Object.assign(new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.85, 0.5), mat(0xd4c9b8, 0.6, 0.1)), { position: new THREE.Vector3(0, 0.425, 0), castShadow: true, receiveShadow: true }));
    // Countertop
    g.add(Object.assign(new THREE.Mesh(new THREE.BoxGeometry(0.84, 0.03, 0.54), mat(0x888888, 0.3, 0.4)), { position: new THREE.Vector3(0, 0.87, 0), castShadow: true }));
    g.position.set(x, 0, z);
    g.rotation.y = rotY;
    scene.add(g);
    return g;
  },

  fridge(scene, x, z, rotY = 0) {
    const g = new THREE.Group();
    g.add(Object.assign(new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.7, 0.6), mat(0xdcdcdc, 0.3, 0.6)), { position: new THREE.Vector3(0, 0.85, 0), castShadow: true }));
    // Handle
    g.add(Object.assign(new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.2, 6), mat(0x999999, 0.2, 0.8)), { position: new THREE.Vector3(0.25, 1.1, 0.31), castShadow: true }));
    g.position.set(x, 0, z);
    g.rotation.y = rotY;
    scene.add(g);
    return g;
  },

  plate(scene, x, z) {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.09, 0.012, 24), mat(0xf0ece4, 0.4, 0.1));
    m.castShadow = true;
    scene.add(m);
    m.position.set(x, 0, z);
    return m;
  },

  mug(scene, x, z) {
    const g = new THREE.Group();
    g.add(Object.assign(new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.028, 0.08, 12), mat(0xc0392b, 0.5, 0.1)), { position: new THREE.Vector3(0, 0.04, 0), castShadow: true }));
    // Handle
    const handle = new THREE.Mesh(new THREE.TorusGeometry(0.018, 0.004, 6, 12, Math.PI), mat(0xc0392b, 0.5, 0.1));
    handle.rotation.z = Math.PI / 2;
    handle.position.set(0.04, 0.04, 0);
    g.add(handle);
    g.position.set(x, 0, z);
    scene.add(g);
    return g;
  },

  bowl(scene, x, z) {
    const m = new THREE.Mesh(new THREE.SphereGeometry(0.06, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2), mat(0xe8dcc8, 0.5, 0.05));
    m.castShadow = true;
    m.position.set(x, 0, z);
    scene.add(m);
    return m;
  },

  cutting_board(scene, x, z) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.012, 0.15), mat(0x8b6914, 0.8, 0.05));
    m.castShadow = true;
    m.rotation.y = Math.random() * 0.3;
    m.position.set(x, 0, z);
    scene.add(m);
    return m;
  },

  shelf(scene, x, z, rotY = 0) {
    const g = new THREE.Group();
    // Uprights
    for (const sx of [-0.4, 0.4]) {
      g.add(Object.assign(new THREE.Mesh(new THREE.BoxGeometry(0.04, 1.8, 0.04), mat(0x555555, 0.4, 0.6)), { position: new THREE.Vector3(sx, 0.9, 0), castShadow: true }));
    }
    // Shelves
    for (const sy of [0.35, 0.7, 1.05, 1.4]) {
      g.add(Object.assign(new THREE.Mesh(new THREE.BoxGeometry(0.84, 0.02, 0.45), mat(0x666666, 0.5, 0.4)), { position: new THREE.Vector3(0, sy, 0), castShadow: true }));
    }
    g.position.set(x, 0, z);
    g.rotation.y = rotY;
    scene.add(g);
    return g;
  },

  conveyor(scene, x, z, rotY = 0) {
    const g = new THREE.Group();
    // Belt
    g.add(Object.assign(new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.03, 0.4), mat(0x222222, 0.8, 0.2)), { position: new THREE.Vector3(0, 0.35, 0), castShadow: true }));
    // Frame
    g.add(Object.assign(new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.3, 0.08), mat(0x888888, 0.4, 0.5)), { position: new THREE.Vector3(0, 0.2, 0.2) }));
    g.add(Object.assign(new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.3, 0.08), mat(0x888888, 0.4, 0.5)), { position: new THREE.Vector3(0, 0.2, -0.2) }));
    // Legs
    for (const lx of [-0.9, 0, 0.9]) {
      for (const lz of [-0.16, 0.16]) {
        g.add(Object.assign(new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.35, 6), mat(0x777777)), { position: new THREE.Vector3(lx, 0.175, lz) }));
      }
    }
    g.position.set(x, 0, z);
    g.rotation.y = rotY;
    scene.add(g);
    return g;
  },

  pallet(scene, x, z) {
    const g = new THREE.Group();
    // Top boards
    for (let i = 0; i < 5; i++) {
      g.add(Object.assign(new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.02, 0.08), mat(0x8b7355, 0.8, 0.05)), { position: new THREE.Vector3(0, 0.1, -0.2 + i * 0.1), castShadow: true }));
    }
    // Bottom runners
    for (const lz of [-0.15, 0, 0.15]) {
      g.add(Object.assign(new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.5), mat(0x8b7355, 0.8, 0.05)), { position: new THREE.Vector3(0, 0.05, lz) }));
    }
    g.position.set(x, 0, z);
    scene.add(g);
    return g;
  },

  crate(scene, x, z) {
    const s = 0.2 + Math.random() * 0.15;
    const m = new THREE.Mesh(new THREE.BoxGeometry(s, s * 0.8, s), mat(0x8b6914, 0.85, 0.05));
    m.castShadow = true;
    m.position.set(x, s * 0.4, z);
    m.rotation.y = Math.random() * 0.4;
    scene.add(m);
    return m;
  },

  barrel(scene, x, z) {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.16, 0.5, 12), mat(0x4a6a8a, 0.5, 0.4));
    m.castShadow = true;
    m.position.set(x, 0.25, z);
    scene.add(m);
    return m;
  },

  tree(scene, x, z) {
    const g = new THREE.Group();
    // Trunk
    g.add(Object.assign(new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.8, 8), mat(0x5a3a1a, 0.85, 0.05)), { position: new THREE.Vector3(0, 0.4, 0), castShadow: true }));
    // Canopy (layered cones)
    const green = mat(0x2d5a1e, 0.8, 0.05);
    g.add(Object.assign(new THREE.Mesh(new THREE.ConeGeometry(0.4, 0.6, 8), green), { position: new THREE.Vector3(0, 1.0, 0), castShadow: true }));
    g.add(Object.assign(new THREE.Mesh(new THREE.ConeGeometry(0.32, 0.5, 8), green), { position: new THREE.Vector3(0, 1.35, 0), castShadow: true }));
    g.add(Object.assign(new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.4, 8), green), { position: new THREE.Vector3(0, 1.6, 0), castShadow: true }));
    g.position.set(x, 0, z);
    scene.add(g);
    return g;
  },

  bush(scene, x, z) {
    const g = new THREE.Group();
    const green = mat(0x3a7a2a, 0.8, 0.05);
    g.add(Object.assign(new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 6), green), { position: new THREE.Vector3(0, 0.15, 0), castShadow: true }));
    g.add(Object.assign(new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 6), green), { position: new THREE.Vector3(0.1, 0.22, 0.08), castShadow: true }));
    g.add(Object.assign(new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), green), { position: new THREE.Vector3(-0.08, 0.2, -0.06), castShadow: true }));
    g.position.set(x, 0, z);
    scene.add(g);
    return g;
  },

  rock(scene, x, z) {
    const s = 0.08 + Math.random() * 0.12;
    const m = new THREE.Mesh(
      new THREE.DodecahedronGeometry(s, 1),
      mat(0x777777, 0.85, 0.15)
    );
    m.castShadow = true;
    m.position.set(x, s * 0.5, z);
    m.rotation.set(Math.random(), Math.random(), Math.random());
    m.scale.y = 0.6 + Math.random() * 0.3;
    scene.add(m);
    return m;
  },

  bench(scene, x, z, rotY = 0) {
    const g = new THREE.Group();
    const wood = mat(0x6b4226, 0.75, 0.1);
    // Seat
    g.add(Object.assign(new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.04, 0.35), wood), { position: new THREE.Vector3(0, 0.42, 0), castShadow: true }));
    // Backrest
    g.add(Object.assign(new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.3, 0.03), wood), { position: new THREE.Vector3(0, 0.6, -0.16), castShadow: true }));
    // Legs (metal)
    const iron = mat(0x333333, 0.4, 0.7);
    for (const lx of [-0.4, 0.4]) {
      g.add(Object.assign(new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.42, 0.3), iron), { position: new THREE.Vector3(lx, 0.21, 0), castShadow: true }));
    }
    g.position.set(x, 0, z);
    g.rotation.y = rotY;
    scene.add(g);
    return g;
  },

  lamppost(scene, x, z) {
    const g = new THREE.Group();
    const iron = mat(0x2a2a2a, 0.3, 0.7);
    // Pole
    g.add(Object.assign(new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.03, 2.2, 8), iron), { position: new THREE.Vector3(0, 1.1, 0), castShadow: true }));
    // Lamp head
    g.add(Object.assign(new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 6), mat(0xffffcc, 0.3, 0.1)), { position: new THREE.Vector3(0, 2.25, 0) }));
    // Arm
    g.add(Object.assign(new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.15, 6), iron), { position: new THREE.Vector3(0, 2.15, 0) }));
    g.position.set(x, 0, z);
    scene.add(g);
    return g;
  },
};

// ─── Prop layout positions per preset ───
const PROP_LAYOUTS = {
  kitchen: {
    chair:         [{ x: 0, z: -0.65, r: 0 }, { x: 0, z: 0.65, r: Math.PI }],
    counter:       [{ x: -1.2, z: 0, r: Math.PI / 2 }],
    fridge:        [{ x: -1.6, z: -0.8, r: 0 }],
    plate:         [{ x: 0.2, z: 0.12 }, { x: -0.15, z: -0.1 }],
    mug:           [{ x: 0.35, z: -0.15 }],
    bowl:          [{ x: -0.3, z: 0.15 }],
    cutting_board: [{ x: -0.1, z: 0.22 }],
  },
  warehouse: {
    shelf:    [{ x: -2.0, z: -1.5, r: 0 }, { x: -2.0, z: 1.5, r: 0 }],
    conveyor: [{ x: 1.5, z: 0, r: Math.PI / 2 }],
    pallet:   [{ x: -1.5, z: 0 }],
    crate:    [{ x: -1.5, z: -0.5 }, { x: -1.3, z: 0.4 }],
    barrel:   [{ x: 2.0, z: -1.2 }],
  },
  park: {
    bench:    [{ x: 1.5, z: 0, r: -Math.PI / 2 }],
    tree:     [{ x: -2.5, z: -2.0 }, { x: 2.5, z: 2.0 }],
    bush:     [{ x: -1.5, z: 1.5 }, { x: 1.8, z: -1.2 }],
    rock:     [{ x: -0.8, z: 1.8 }, { x: 1.2, z: -1.8 }],
    lamppost: [{ x: -2.0, z: 0 }],
  },
  lab: {},
};

// ─── Main Environment Class ───
export class Environment {
  constructor(scene) {
    this.scene = scene;
    this.tableHeight = 0.42;
    this.currentPreset = 'lab';
    this.currentObject = null;
    this.currentObjectMesh = null;
    this.targetPosition = new THREE.Vector3(0.25, this.tableHeight, 0);
    this.collectPosition = new THREE.Vector3(-0.25, this.tableHeight + 0.1, 0);

    // Groups for easy cleanup
    this._envGroup = new THREE.Group();
    this._envGroup.name = 'environment';
    scene.add(this._envGroup);

    this._propsGroup = new THREE.Group();
    this._propsGroup.name = 'props';
    scene.add(this._propsGroup);

    this._tableGroup = new THREE.Group();
    this._tableGroup.name = 'table';
    scene.add(this._tableGroup);

    this.propMeshes = [];

    // Build default
    this.loadPreset('lab');
    this._buildTargetMarker();
  }

  /**
   * Load a full environment preset
   */
  loadPreset(presetId) {
    const preset = PRESETS[presetId];
    if (!preset) return;
    this.currentPreset = presetId;
    this.tableHeight = preset.tableHeight;

    // Clear old
    this._clearGroup(this._envGroup);
    this._clearGroup(this._propsGroup);
    this._clearGroup(this._tableGroup);
    this.propMeshes = [];

    // Floor
    const floorGeo = new THREE.PlaneGeometry(preset.floor.size, preset.floor.size);
    const floor = new THREE.Mesh(floorGeo, matFloor(preset.floor.color));
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    this._envGroup.add(floor);

    // Grid
    const grid = new THREE.GridHelper(
      preset.floor.size, preset.floor.size * 5,
      new THREE.Color(preset.floor.color).lerp(new THREE.Color(0xffffff), 0.1),
      new THREE.Color(preset.floor.color).lerp(new THREE.Color(0xffffff), 0.05)
    );
    grid.position.y = 0.002;
    this._envGroup.add(grid);

    // Walls
    if (preset.walls) {
      const wallMat = mat(preset.wallColor, 0.85, 0.05);
      const wallH = 2.5;
      const halfSize = preset.floor.size / 2;
      // Back wall
      const backWall = new THREE.Mesh(new THREE.PlaneGeometry(preset.floor.size, wallH), wallMat);
      backWall.position.set(0, wallH / 2, -halfSize);
      backWall.receiveShadow = true;
      this._envGroup.add(backWall);
      // Side walls
      const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(preset.floor.size, wallH), wallMat);
      leftWall.position.set(-halfSize, wallH / 2, 0);
      leftWall.rotation.y = Math.PI / 2;
      leftWall.receiveShadow = true;
      this._envGroup.add(leftWall);
    }

    // Table
    this._buildTable(preset);

    // Props
    this._buildProps(presetId, preset);

    // Update fog
    this.scene.fog = new THREE.Fog(preset.fogColor, 6, 20);

    return preset;
  }

  _buildTable(preset) {
    const [tw, th, td] = preset.tableSize;
    const tableMat = mat(preset.tableColor, 0.75, 0.1);

    // Tabletop
    this.tabletop = new THREE.Mesh(new THREE.BoxGeometry(tw, th, td), tableMat);
    this.tabletop.position.y = this.tableHeight;
    this.tabletop.castShadow = true;
    this.tabletop.receiveShadow = true;
    this._tableGroup.add(this.tabletop);

    // Legs
    const legGeo = new THREE.CylinderGeometry(0.018, 0.018, this.tableHeight - th / 2, 8);
    const legMat = mat(
      new THREE.Color(preset.tableColor).lerp(new THREE.Color(0x000000), 0.3),
      0.6, 0.3
    );
    const hx = tw / 2 - 0.06;
    const hz = td / 2 - 0.06;
    for (const [lx, lz] of [[-hx, -hz], [hx, -hz], [-hx, hz], [hx, hz]]) {
      const leg = new THREE.Mesh(legGeo, legMat);
      leg.position.set(lx, (this.tableHeight - th / 2) / 2, lz);
      leg.castShadow = true;
      this._tableGroup.add(leg);
    }

    // Edge trim
    const edgeGeo = new THREE.BoxGeometry(tw + 0.01, 0.005, td + 0.01);
    const edge = new THREE.Mesh(edgeGeo, mat(0x555555, 0.3, 0.8));
    edge.position.y = this.tableHeight + th / 2;
    this._tableGroup.add(edge);
  }

  _buildProps(presetId, preset) {
    const layouts = PROP_LAYOUTS[presetId] || {};

    for (const propType of preset.props) {
      const builder = PROP_BUILDERS[propType];
      if (!builder) continue;

      const positions = layouts[propType];
      if (!positions || positions.length === 0) continue;

      const pos = positions.shift(); // take next available position
      if (!pos) continue;

      // Table-top items get placed relative to table height
      const isTabletop = ['plate', 'mug', 'bowl', 'cutting_board'].includes(propType);
      const yOffset = isTabletop ? this.tableHeight + 0.016 : 0;

      const mesh = builder(this._propsGroup, pos.x, pos.z, pos.r || 0);
      if (mesh && isTabletop) {
        mesh.position.y += yOffset;
      }
      this.propMeshes.push(mesh);
    }
  }

  _buildTargetMarker() {
    const ringGeo = new THREE.RingGeometry(0.04, 0.05, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x22c55e,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4,
    });
    this.targetMarker = new THREE.Mesh(ringGeo, ringMat);
    this.targetMarker.rotation.x = -Math.PI / 2;
    this.targetMarker.position.set(-0.25, this.tableHeight + 0.016, 0.1);
    this.scene.add(this.targetMarker);
  }

  _clearGroup(group) {
    while (group.children.length) {
      const child = group.children[0];
      group.remove(child);
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (Array.isArray(child.material)) child.material.forEach(m => m.dispose());
        else child.material.dispose();
      }
      // Recurse for groups
      if (child.children) {
        while (child.children.length) {
          const sub = child.children[0];
          child.remove(sub);
          if (sub.geometry) sub.geometry.dispose();
          if (sub.material) sub.material.dispose();
        }
      }
    }
  }

  /**
   * Spawn an object on the table based on taxonomy physics data.
   */
  spawnObject(objectDef) {
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

    const objMat = new THREE.MeshStandardMaterial({
      color,
      roughness: p.surfaceTexture === 'rough' ? 0.8 : 0.35,
      metalness: 0.05,
    });

    this.currentObjectMesh = new THREE.Mesh(geo, objMat);
    this.currentObjectMesh.castShadow = true;

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

  update(time) {
    if (this.targetMarker) {
      this.targetMarker.material.opacity = 0.25 + 0.2 * Math.sin(time * 3);
      const s = 1.0 + 0.08 * Math.sin(time * 3);
      this.targetMarker.scale.set(s, s, 1);
    }
  }
}
