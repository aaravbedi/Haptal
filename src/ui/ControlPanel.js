/**
 * Control Panel UI
 *
 * Left sidebar with environment parameter controls.
 * Each slider/control maps to a co-sim bridge parameter.
 */

export class ControlPanel {
  constructor(container, coSimBridge, sceneManager, physicsWorld, simulationEngine) {
    this.container = container;
    this.cosim = coSimBridge;
    this.scene = sceneManager;
    this.physics = physicsWorld;
    this.sim = simulationEngine;
    this.onObjectSelected = null;  // callback

    this._build();
  }

  _build() {
    this.container.innerHTML = '';

    // === Lighting Group ===
    this._addGroup('Lighting', [
      this._slider('Light Intensity', 'lightIntensity', 0.05, 2.0, 0.05, 1.0, ''),
      this._slider('Light Angle', 'lightAngle', 0, 360, 1, 45, '°'),
      this._slider('Color Temp', 'colorTemperature', 2000, 9000, 100, 5500, 'K'),
      this._slider('Ambient', 'ambientIntensity', 0.0, 1.0, 0.05, 0.4, ''),
    ]);

    // === Physical Environment ===
    this._addGroup('Physical Environment', [
      this._slider('Temperature', 'temperature', -20, 50, 1, 22, '°C'),
      this._slider('Humidity', 'humidity', 0, 100, 1, 45, '%'),
      this._slider('Gravity', 'gravity', 0.5, 20, 0.1, 9.81, 'm/s²'),
      this._slider('Air Density', 'airDensity', 0.5, 2.0, 0.01, 1.225, 'kg/m³'),
    ]);

    // === Surface Conditions ===
    this._addGroup('Surface Conditions', [
      this._slider('Contamination', 'surfaceContamination', 0, 1, 0.01, 0, ''),
      this._slider('Vibration', 'vibration', 0, 50, 0.5, 0, 'Hz'),
    ]);

    // === Derived Properties (read-only display) ===
    this._addDerivedSection();

    // === Object Selector ===
    this._addObjectSelector();
  }

  _addGroup(title, controls) {
    const group = document.createElement('div');
    group.className = 'control-group';

    const header = document.createElement('div');
    header.className = 'control-group-title';
    header.innerHTML = `<span class="dot"></span>${title}`;
    group.appendChild(header);

    for (const control of controls) {
      group.appendChild(control);
    }

    this.container.appendChild(group);
  }

  _slider(label, paramKey, min, max, step, defaultVal, unit) {
    const row = document.createElement('div');
    row.className = 'control-row';

    const lbl = document.createElement('label');
    lbl.textContent = label;

    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = min;
    slider.max = max;
    slider.step = step;
    slider.value = defaultVal;

    const valueDisp = document.createElement('span');
    valueDisp.className = 'value-display';
    valueDisp.textContent = `${defaultVal}${unit}`;

    slider.addEventListener('input', () => {
      const val = parseFloat(slider.value);
      valueDisp.textContent = `${Number.isInteger(val) ? val : val.toFixed(step < 1 ? 2 : 0)}${unit}`;
      this._onParamChange(paramKey, val);
    });

    row.appendChild(lbl);
    row.appendChild(slider);
    row.appendChild(valueDisp);
    return row;
  }

  _onParamChange(key, value) {
    // Update co-sim bridge
    this.cosim.setEnvironment({ [key]: value });

    // Update 3D scene lighting
    if (['lightIntensity', 'lightAngle', 'colorTemperature', 'ambientIntensity'].includes(key)) {
      this.scene.updateEnvironment({ [key]: value });
    }

    // Update physics gravity
    if (key === 'gravity') {
      this.physics.setGravity(value);
    }

    // Recompute object properties if loaded
    if (this.sim.currentObjectDef) {
      const props = this.cosim.computeObjectProperties(this.sim.currentObjectDef.physics);
      this.sim.coSimProperties = props;
      this.physics.updateObjectMaterial(props.effectiveFriction, props.effectiveRestitution);
      this._updateDerived(props);
    }
  }

  _addDerivedSection() {
    const group = document.createElement('div');
    group.className = 'control-group';

    const header = document.createElement('div');
    header.className = 'control-group-title';
    header.innerHTML = '<span class="dot"></span>Derived Properties';
    group.appendChild(header);

    this._derivedContainer = document.createElement('div');
    this._derivedContainer.id = 'derived-props';
    group.appendChild(this._derivedContainer);

    this._updateDerived(null);
    this.container.appendChild(group);
  }

  _updateDerived(props) {
    if (!this._derivedContainer) return;

    const items = props ? [
      ['Eff. Friction', props.effectiveFriction.toFixed(3)],
      ['Eff. Restitution', props.effectiveRestitution.toFixed(3)],
      ['Grip Reliability', (props.gripReliability * 100).toFixed(1) + '%'],
      ['Grip Force Range', `${props.gripForceMin.toFixed(1)}-${props.gripForceMax.toFixed(1)}N`],
      ['Sensor Noise', props.sensorNoise.toFixed(4)],
      ['Stiffness', props.materialStiffness.toFixed(3)],
      ['Drag Coeff', props.dragCoefficient.toFixed(5)],
    ] : [
      ['Eff. Friction', '—'],
      ['Eff. Restitution', '—'],
      ['Grip Reliability', '—'],
      ['Sensor Noise', '—'],
    ];

    this._derivedContainer.innerHTML = items.map(([label, value]) => `
      <div class="control-row">
        <label>${label}</label>
        <span class="value-display">${value}</span>
      </div>
    `).join('');
  }

  _addObjectSelector() {
    const group = document.createElement('div');
    group.className = 'object-selector';

    const header = document.createElement('div');
    header.className = 'control-group-title';
    header.innerHTML = '<span class="dot"></span>Quick Object Select';
    group.appendChild(header);

    const grid = document.createElement('div');
    grid.className = 'object-grid';

    const quickObjects = [
      { id: 'tactile.fruits.apple', icon: '🍎', name: 'Apple' },
      { id: 'tactile.fruits.banana', icon: '🍌', name: 'Banana' },
      { id: 'tactile.fruits.orange', icon: '🍊', name: 'Orange' },
      { id: 'warehouse.boxes.cardboard_small', icon: '📦', name: 'Box' },
      { id: 'medical.instruments.syringe', icon: '💉', name: 'Syringe' },
      { id: 'medical.instruments.test_tube', icon: '🧪', name: 'Test Tube' },
      { id: 'electronics.components.circuit_board', icon: '🟩', name: 'PCB' },
      { id: 'tactile.vegetables.tomato', icon: '🍅', name: 'Tomato' },
    ];

    for (const obj of quickObjects) {
      const card = document.createElement('div');
      card.className = 'object-card';
      card.innerHTML = `<div class="obj-icon">${obj.icon}</div><div class="obj-name">${obj.name}</div>`;
      card.addEventListener('click', () => {
        grid.querySelectorAll('.object-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        if (this.onObjectSelected) this.onObjectSelected(obj.id);
      });
      grid.appendChild(card);
    }

    group.appendChild(grid);
    this.container.appendChild(group);
  }

  /**
   * Refresh derived properties display
   */
  refresh() {
    if (this.sim.coSimProperties) {
      this._updateDerived(this.sim.coSimProperties);
    }
  }
}
