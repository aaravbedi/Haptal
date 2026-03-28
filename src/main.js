/**
 * Haptal — Sim-to-Real Synthetic Data Platform
 *
 * Main entry point. Initializes all subsystems and wires them together.
 *
 * Architecture:
 *   SceneManager (Three.js) ←→ PhysicsWorld (Cannon-es)
 *         ↕                           ↕
 *   RobotArm + Environment      CoSimBridge
 *         ↕                           ↕
 *   SimulationEngine ←→ SensorCollector → EmbeddingEncoder → DatasetManager
 *         ↕                                                        ↕
 *   DomainRandomizer ←→ SyntheticGenerator              DatasetBrowser (UI)
 *         ↕
 *   ControlPanel (UI) + SimControls (UI) + StatsDisplay (UI)
 */

import { SceneManager } from './scene/SceneManager.js';
import { RobotArm } from './scene/RobotArm.js';
import { Environment } from './scene/Environment.js';
import { PhysicsWorld } from './scene/PhysicsWorld.js';
import { CoSimBridge } from './simulation/CoSimBridge.js';
import { SensorCollector } from './simulation/SensorCollector.js';
import { SimulationEngine } from './simulation/SimulationEngine.js';
import { DomainRandomizer } from './simulation/DomainRandomizer.js';
import { EmbeddingEncoder } from './encoder/EmbeddingEncoder.js';
import { DataPipeline } from './encoder/DataPipeline.js';
import { DatasetManager } from './data/DatasetManager.js';
import { SyntheticGenerator } from './data/SyntheticGenerator.js';
import { TAXONOMY, getObjectByPath, getAllObjects } from './data/taxonomy.js';
import { ControlPanel } from './ui/ControlPanel.js';
import { DatasetBrowser } from './ui/DatasetBrowser.js';
import { SimControls } from './ui/SimControls.js';
import { StatsDisplay } from './ui/StatsDisplay.js';

class HaptalApp {
  constructor() {
    // === Core Systems ===
    const canvas = document.getElementById('render-canvas');
    this.scene = new SceneManager(canvas);
    this.robot = new RobotArm();
    this.env = new Environment(this.scene.scene);
    this.physics = new PhysicsWorld();
    this.cosim = new CoSimBridge();
    this.sensor = new SensorCollector();
    this.encoder = new EmbeddingEncoder(95, 256, 128);
    this.dataset = new DatasetManager();
    this.pipeline = new DataPipeline(this.sensor, this.encoder, this.dataset);

    // Add robot to scene
    this.robot.addToScene(this.scene.scene, this.env.tableHeight);

    // === Simulation Engine ===
    this.sim = new SimulationEngine({
      sceneManager: this.scene,
      robotArm: this.robot,
      environment: this.env,
      physicsWorld: this.physics,
      coSimBridge: this.cosim,
      sensorCollector: this.sensor,
      dataPipeline: this.pipeline,
    });

    // === Data Generation ===
    this.randomizer = new DomainRandomizer(this.cosim);
    this.generator = new SyntheticGenerator(this.sim, this.randomizer, this.pipeline);

    // Hook up cycle completion for batch generation
    const origUpdateTask = this.sim._updateTask.bind(this.sim);
    this.sim._updateTask = (dt) => {
      const prevCycles = this.sim.taskCycleCount;
      origUpdateTask(dt);
      if (this.sim.taskCycleCount > prevCycles) {
        this.generator.onCycleComplete();
      }
    };

    // === UI ===
    this.controlPanel = new ControlPanel(
      document.getElementById('controls-container'),
      this.cosim, this.scene, this.physics, this.sim
    );

    this.datasetBrowser = new DatasetBrowser(
      document.getElementById('dataset-browser'),
      this.dataset
    );

    this.simControls = new SimControls(
      document.getElementById('sim-controls-bar'),
      this.sim, this.generator, this.randomizer
    );

    this.statsDisplay = new StatsDisplay(
      document.getElementById('stats-overlay'),
      document.getElementById('data-stats'),
      this.sim, this.pipeline, this.encoder, this.dataset
    );

    // === Wire up object selection ===
    const selectObject = (pathStr) => {
      const obj = this._resolveObject(pathStr);
      if (obj) {
        this.sim.loadObject(obj);
        this.controlPanel.refresh();

        // Auto-start if not running
        if (!this.sim.isRunning) {
          this.sim.start();
        }
        if (this.sim.taskState === 'idle') {
          this.sim.startTask();
        }
      }
    };

    this.controlPanel.onObjectSelected = selectObject;
    this.datasetBrowser.onObjectSelected = selectObject;

    // === Start UI refresh loop ===
    this._startUIRefresh();

    // === Load default object ===
    selectObject('tactile.fruits.apple');

    console.log('[Haptal] Platform initialized');
    console.log('[Haptal] Subsystems: Scene, Robot, Physics, CoSim, Encoder, Pipeline, Dataset');
    console.log('[Haptal] Encoder: 95-dim input → 256-dim hidden → 128-dim embedding');
    console.log('[Haptal] Ready for sim-to-real data generation');
  }

  /**
   * Resolve a dot-path to a full object definition with path metadata
   */
  _resolveObject(pathStr) {
    const parts = pathStr.split('.');
    let current = TAXONOMY;
    for (const part of parts) {
      current = current[part] || current?.children?.[part];
      if (!current) return null;
    }

    if (!current || !current.physics) return null;

    return {
      ...current,
      path: parts,
      id: pathStr,
    };
  }

  /**
   * Periodic UI refresh (separate from render loop for performance)
   */
  _startUIRefresh() {
    setInterval(() => {
      this.statsDisplay.refresh();
      this.simControls.refresh();
      this.datasetBrowser.refresh();

      // Update generation progress
      if (this.generator.isGenerating) {
        const progress = this.generator.getProgress();
        this.statsDisplay.updateProgress(parseFloat(progress.percentage));
      }
    }, 250); // 4 Hz UI update
  }
}

// === Bootstrap ===
document.addEventListener('DOMContentLoaded', () => {
  window.haptal = new HaptalApp();
});
