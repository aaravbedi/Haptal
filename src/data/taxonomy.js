/**
 * Haptal Dataset Taxonomy
 *
 * Hierarchical categorization of objects and tasks for sim-to-real data.
 * Each leaf node defines an object with physical properties used by the
 * co-simulation bridge to derive material behavior.
 */

export const TAXONOMY = {
  tactile: {
    name: 'Tactile Datasets',
    icon: '🤲',
    children: {
      fruits: {
        name: 'Fruits',
        icon: '🍎',
        children: {
          apple: {
            name: 'Apple',
            icon: '🍎',
            physics: {
              mass: 0.20,             // kg
              radius: 0.04,           // m
              shape: 'sphere',
              friction: 0.4,
              restitution: 0.3,       // bounciness
              deformability: 0.15,    // 0=rigid, 1=fully soft
              surfaceTexture: 'smooth',
              color: [0.85, 0.12, 0.1],
              gripForceMin: 0.8,      // N - min force to hold
              gripForceMax: 8.0,      // N - max before damage
              thermalConductivity: 0.42,
            },
          },
          banana: {
            name: 'Banana',
            icon: '🍌',
            physics: {
              mass: 0.12,
              radius: 0.02,
              length: 0.18,
              shape: 'cylinder',
              friction: 0.35,
              restitution: 0.15,
              deformability: 0.25,
              surfaceTexture: 'smooth',
              color: [0.95, 0.88, 0.2],
              gripForceMin: 0.5,
              gripForceMax: 5.0,
              thermalConductivity: 0.35,
            },
          },
          orange: {
            name: 'Orange',
            icon: '🍊',
            physics: {
              mass: 0.18,
              radius: 0.038,
              shape: 'sphere',
              friction: 0.55,
              restitution: 0.25,
              deformability: 0.12,
              surfaceTexture: 'rough',
              color: [1.0, 0.55, 0.0],
              gripForceMin: 0.7,
              gripForceMax: 10.0,
              thermalConductivity: 0.38,
            },
          },
          grape: {
            name: 'Grape Cluster',
            icon: '🍇',
            physics: {
              mass: 0.08,
              radius: 0.015,
              shape: 'sphere',
              friction: 0.3,
              restitution: 0.1,
              deformability: 0.35,
              surfaceTexture: 'smooth',
              color: [0.4, 0.1, 0.5],
              gripForceMin: 0.2,
              gripForceMax: 3.0,
              thermalConductivity: 0.5,
            },
          },
        },
      },
      vegetables: {
        name: 'Vegetables',
        icon: '🥕',
        children: {
          tomato: {
            name: 'Tomato',
            icon: '🍅',
            physics: {
              mass: 0.15,
              radius: 0.035,
              shape: 'sphere',
              friction: 0.38,
              restitution: 0.2,
              deformability: 0.3,
              surfaceTexture: 'smooth',
              color: [0.9, 0.15, 0.1],
              gripForceMin: 0.4,
              gripForceMax: 4.0,
              thermalConductivity: 0.52,
            },
          },
          carrot: {
            name: 'Carrot',
            icon: '🥕',
            physics: {
              mass: 0.08,
              radius: 0.015,
              length: 0.18,
              shape: 'cylinder',
              friction: 0.45,
              restitution: 0.35,
              deformability: 0.05,
              surfaceTexture: 'rough',
              color: [1.0, 0.5, 0.0],
              gripForceMin: 0.6,
              gripForceMax: 15.0,
              thermalConductivity: 0.6,
            },
          },
          potato: {
            name: 'Potato',
            icon: '🥔',
            physics: {
              mass: 0.17,
              radius: 0.035,
              shape: 'sphere',
              friction: 0.5,
              restitution: 0.3,
              deformability: 0.03,
              surfaceTexture: 'rough',
              color: [0.6, 0.45, 0.25],
              gripForceMin: 1.0,
              gripForceMax: 20.0,
              thermalConductivity: 0.55,
            },
          },
        },
      },
    },
  },
  warehouse: {
    name: 'Warehouse Automation',
    icon: '🏭',
    children: {
      boxes: {
        name: 'Boxes & Containers',
        icon: '📦',
        children: {
          cardboard_small: {
            name: 'Small Cardboard Box',
            icon: '📦',
            physics: {
              mass: 0.35,
              width: 0.15,
              height: 0.10,
              depth: 0.12,
              shape: 'box',
              friction: 0.55,
              restitution: 0.15,
              deformability: 0.2,
              surfaceTexture: 'rough',
              color: [0.72, 0.55, 0.35],
              gripForceMin: 2.0,
              gripForceMax: 50.0,
              thermalConductivity: 0.07,
            },
          },
          cardboard_large: {
            name: 'Large Cardboard Box',
            icon: '📦',
            physics: {
              mass: 0.80,
              width: 0.30,
              height: 0.20,
              depth: 0.25,
              shape: 'box',
              friction: 0.55,
              restitution: 0.1,
              deformability: 0.18,
              surfaceTexture: 'rough',
              color: [0.68, 0.52, 0.32],
              gripForceMin: 4.0,
              gripForceMax: 50.0,
              thermalConductivity: 0.07,
            },
          },
          plastic_container: {
            name: 'Plastic Container',
            icon: '🗃️',
            physics: {
              mass: 0.25,
              width: 0.18,
              height: 0.08,
              depth: 0.12,
              shape: 'box',
              friction: 0.35,
              restitution: 0.4,
              deformability: 0.02,
              surfaceTexture: 'smooth',
              color: [0.3, 0.5, 0.7],
              gripForceMin: 1.5,
              gripForceMax: 100.0,
              thermalConductivity: 0.19,
            },
          },
        },
      },
      parcels: {
        name: 'Parcels & Packages',
        icon: '📮',
        children: {
          envelope: {
            name: 'Padded Envelope',
            icon: '✉️',
            physics: {
              mass: 0.10,
              width: 0.25,
              height: 0.01,
              depth: 0.18,
              shape: 'box',
              friction: 0.5,
              restitution: 0.05,
              deformability: 0.4,
              surfaceTexture: 'smooth',
              color: [0.9, 0.85, 0.7],
              gripForceMin: 0.3,
              gripForceMax: 20.0,
              thermalConductivity: 0.05,
            },
          },
          bottle_package: {
            name: 'Bottle Package',
            icon: '🧴',
            physics: {
              mass: 0.45,
              radius: 0.035,
              length: 0.20,
              shape: 'cylinder',
              friction: 0.3,
              restitution: 0.35,
              deformability: 0.01,
              surfaceTexture: 'smooth',
              color: [0.85, 0.85, 0.9],
              gripForceMin: 2.0,
              gripForceMax: 80.0,
              thermalConductivity: 0.17,
            },
          },
        },
      },
    },
  },
  medical: {
    name: 'Medical & Lab',
    icon: '🏥',
    children: {
      instruments: {
        name: 'Instruments',
        icon: '🔬',
        children: {
          syringe: {
            name: 'Syringe',
            icon: '💉',
            physics: {
              mass: 0.015,
              radius: 0.006,
              length: 0.10,
              shape: 'cylinder',
              friction: 0.25,
              restitution: 0.3,
              deformability: 0.0,
              surfaceTexture: 'smooth',
              color: [0.9, 0.92, 0.95],
              gripForceMin: 0.2,
              gripForceMax: 30.0,
              thermalConductivity: 0.2,
            },
          },
          test_tube: {
            name: 'Test Tube',
            icon: '🧪',
            physics: {
              mass: 0.025,
              radius: 0.008,
              length: 0.12,
              shape: 'cylinder',
              friction: 0.2,
              restitution: 0.15,
              deformability: 0.0,
              surfaceTexture: 'smooth',
              color: [0.85, 0.9, 0.95],
              gripForceMin: 0.3,
              gripForceMax: 15.0,
              thermalConductivity: 1.0,
            },
          },
        },
      },
      supplies: {
        name: 'Supplies',
        icon: '🩹',
        children: {
          bandage_roll: {
            name: 'Bandage Roll',
            icon: '🩹',
            physics: {
              mass: 0.05,
              radius: 0.025,
              length: 0.04,
              shape: 'cylinder',
              friction: 0.6,
              restitution: 0.1,
              deformability: 0.3,
              surfaceTexture: 'rough',
              color: [0.95, 0.95, 0.92],
              gripForceMin: 0.3,
              gripForceMax: 10.0,
              thermalConductivity: 0.08,
            },
          },
          medicine_bottle: {
            name: 'Medicine Bottle',
            icon: '💊',
            physics: {
              mass: 0.08,
              radius: 0.018,
              length: 0.06,
              shape: 'cylinder',
              friction: 0.3,
              restitution: 0.25,
              deformability: 0.0,
              surfaceTexture: 'smooth',
              color: [0.4, 0.25, 0.15],
              gripForceMin: 0.5,
              gripForceMax: 40.0,
              thermalConductivity: 0.17,
            },
          },
        },
      },
    },
  },
  electronics: {
    name: 'Electronics Assembly',
    icon: '🔌',
    children: {
      components: {
        name: 'Components',
        icon: '🖥️',
        children: {
          circuit_board: {
            name: 'Circuit Board',
            icon: '🟩',
            physics: {
              mass: 0.04,
              width: 0.08,
              height: 0.002,
              depth: 0.06,
              shape: 'box',
              friction: 0.35,
              restitution: 0.2,
              deformability: 0.0,
              surfaceTexture: 'smooth',
              color: [0.1, 0.5, 0.2],
              gripForceMin: 0.2,
              gripForceMax: 8.0,
              thermalConductivity: 0.3,
            },
          },
          usb_cable: {
            name: 'USB Cable',
            icon: '🔌',
            physics: {
              mass: 0.03,
              radius: 0.004,
              length: 0.15,
              shape: 'cylinder',
              friction: 0.4,
              restitution: 0.1,
              deformability: 0.6,
              surfaceTexture: 'smooth',
              color: [0.15, 0.15, 0.15],
              gripForceMin: 0.1,
              gripForceMax: 15.0,
              thermalConductivity: 0.15,
            },
          },
        },
      },
    },
  },
};

/**
 * Flatten taxonomy into list of all leaf objects with full path
 */
export function getAllObjects(taxonomy = TAXONOMY) {
  const objects = [];
  function walk(node, path) {
    if (node.physics) {
      objects.push({ ...node, path, id: path.join('.') });
      return;
    }
    if (node.children) {
      for (const [key, child] of Object.entries(node.children)) {
        walk(child, [...path, key]);
      }
    } else {
      for (const [key, child] of Object.entries(node)) {
        if (typeof child === 'object' && child.name) {
          walk(child, [...path, key]);
        }
      }
    }
  }
  for (const [key, category] of Object.entries(taxonomy)) {
    walk(category, [key]);
  }
  return objects;
}

/**
 * Get object by dot-separated path
 */
export function getObjectByPath(path) {
  const parts = path.split('.');
  let current = TAXONOMY;
  for (const part of parts) {
    current = current[part] || current?.children?.[part];
    if (!current) return null;
  }
  return current;
}
