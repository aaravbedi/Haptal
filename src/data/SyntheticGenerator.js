/**
 * Synthetic Data Generator
 *
 * Manages batch generation of synthetic data by cycling through:
 *   - Different objects from the taxonomy
 *   - Domain-randomized environment conditions
 *   - Multiple task repetitions per configuration
 *
 * Provides generation plans and progress tracking for long-running
 * data collection campaigns.
 */

import { getAllObjects } from './taxonomy.js';

export class SyntheticGenerator {
  constructor(simulationEngine, domainRandomizer, dataPipeline) {
    this.sim = simulationEngine;
    this.randomizer = domainRandomizer;
    this.pipeline = dataPipeline;

    this.isGenerating = false;
    this.currentPlan = null;
    this.progress = { current: 0, total: 0, phase: 'idle' };

    // Generation stats
    this.stats = {
      totalGenerated: 0,
      totalSimHours: 0,
      objectsCovered: new Set(),
      environmentssampled: 0,
    };
  }

  /**
   * Create a generation plan specifying what data to generate.
   */
  createPlan({
    objects = null,       // specific objects, or null for all
    repetitions = 10,     // task cycles per object per environment
    environments = 5,     // random environments per object
    timeScaleTarget = 10, // desired sim speed
  } = {}) {
    const objectList = objects || getAllObjects();

    const plan = {
      objects: objectList,
      repetitions,
      environments,
      timeScaleTarget,
      totalCycles: objectList.length * environments * repetitions,
      estimatedSimHours: (objectList.length * environments * repetitions * 8) / 3600,
      estimatedRealMinutes: null,
    };

    // Estimate real time based on speed
    plan.estimatedRealMinutes = (plan.estimatedSimHours * 60) / timeScaleTarget;

    this.currentPlan = plan;
    return plan;
  }

  /**
   * Start executing a generation plan.
   * This runs incrementally — call tick() each frame.
   */
  startGeneration(plan = null) {
    if (plan) this.currentPlan = plan;
    if (!this.currentPlan) return;

    this.isGenerating = true;
    this.progress = {
      current: 0,
      total: this.currentPlan.totalCycles,
      phase: 'generating',
      currentObject: null,
      currentEnvironment: 0,
      currentRepetition: 0,
      objectIndex: 0,
      envIndex: 0,
      repIndex: 0,
    };

    this.randomizer.enabled = true;
    this.sim.setTimeScale(this.currentPlan.timeScaleTarget);

    // Load first object
    this._loadNextConfiguration();
  }

  /**
   * Stop generation
   */
  stopGeneration() {
    this.isGenerating = false;
    this.progress.phase = 'stopped';
    this.randomizer.enabled = false;
  }

  /**
   * Called when a task cycle completes. Advances to next configuration.
   */
  onCycleComplete() {
    if (!this.isGenerating) return;

    this.progress.current++;
    this.progress.repIndex++;
    this.stats.totalGenerated++;
    this.stats.totalSimHours = this.sim.simHours;

    const plan = this.currentPlan;

    if (this.progress.repIndex >= plan.repetitions) {
      // Next environment
      this.progress.repIndex = 0;
      this.progress.envIndex++;
      this.stats.environmentssampled++;

      if (this.progress.envIndex >= plan.environments) {
        // Next object
        this.progress.envIndex = 0;
        this.progress.objectIndex++;

        if (this.progress.objectIndex >= plan.objects.length) {
          // Plan complete!
          this.isGenerating = false;
          this.progress.phase = 'complete';
          return;
        }
      }

      this._loadNextConfiguration();
    }
  }

  /**
   * Load the next object + environment configuration
   */
  _loadNextConfiguration() {
    const plan = this.currentPlan;
    const obj = plan.objects[this.progress.objectIndex];

    this.progress.currentObject = obj.name;
    this.stats.objectsCovered.add(obj.id || obj.name);

    // Randomize environment
    this.randomizer.randomize();

    // Load object into simulation
    this.sim.loadObject(obj);
    this.sim.startTask();
  }

  /**
   * Get generation progress
   */
  getProgress() {
    return {
      ...this.progress,
      percentage: this.progress.total > 0
        ? (this.progress.current / this.progress.total * 100).toFixed(1)
        : 0,
    };
  }

  /**
   * Get generation stats
   */
  getStats() {
    return {
      totalGenerated: this.stats.totalGenerated,
      totalSimHours: this.stats.totalSimHours.toFixed(2),
      objectsCovered: this.stats.objectsCovered.size,
      environmentsSampled: this.stats.environmentssampled,
      isGenerating: this.isGenerating,
    };
  }
}
