/**
 * Domain Randomizer
 *
 * Applies randomized environment variations between task cycles to ensure
 * the synthetic dataset covers diverse conditions. This is critical for
 * sim-to-real transfer — models trained on domain-randomized data
 * generalize better to real-world variation.
 *
 * Randomization domains:
 *   - Lighting (intensity, angle, color temperature)
 *   - Temperature
 *   - Humidity
 *   - Surface contamination
 *   - Object start position (small perturbations)
 *   - Gravity (for robustness)
 *   - Vibration
 */

export class DomainRandomizer {
  constructor(coSimBridge) {
    this.cosim = coSimBridge;
    this.enabled = false;

    // Randomization ranges (min, max) for each parameter
    this.ranges = {
      temperature:         { min: -5,   max: 45,    enabled: true },
      humidity:            { min: 10,   max: 95,    enabled: true },
      lightIntensity:      { min: 0.1,  max: 2.0,   enabled: true },
      lightAngle:          { min: 0,    max: 360,   enabled: true },
      colorTemperature:    { min: 2500, max: 9000,  enabled: true },
      ambientIntensity:    { min: 0.05, max: 0.8,   enabled: true },
      gravity:             { min: 8.0,  max: 12.0,  enabled: false }, // off by default
      surfaceContamination:{ min: 0,    max: 0.8,   enabled: true },
      vibration:           { min: 0,    max: 15,    enabled: false },
    };

    this.randomizationCount = 0;
    this.lastRandomization = null;
  }

  /**
   * Generate a random environment configuration
   */
  randomize() {
    if (!this.enabled) return this.cosim.environment;

    const params = {};
    for (const [key, range] of Object.entries(this.ranges)) {
      if (range.enabled) {
        params[key] = range.min + Math.random() * (range.max - range.min);
      }
    }

    this.cosim.setEnvironment(params);
    this.randomizationCount++;
    this.lastRandomization = { ...params };
    return params;
  }

  /**
   * Apply a structured sweep over one parameter while randomizing others.
   * Useful for generating datasets that probe specific physical effects.
   */
  sweepParameter(paramName, steps) {
    const range = this.ranges[paramName];
    if (!range) return [];

    const configs = [];
    for (let i = 0; i < steps; i++) {
      const t = i / (steps - 1);
      const sweepValue = range.min + t * (range.max - range.min);

      // Randomize everything else
      const params = {};
      for (const [key, r] of Object.entries(this.ranges)) {
        if (key === paramName) {
          params[key] = sweepValue;
        } else if (r.enabled) {
          params[key] = r.min + Math.random() * (r.max - r.min);
        }
      }
      configs.push(params);
    }
    return configs;
  }

  /**
   * Get randomization stats
   */
  getStats() {
    return {
      enabled: this.enabled,
      randomizationCount: this.randomizationCount,
      enabledDomains: Object.entries(this.ranges)
        .filter(([, r]) => r.enabled)
        .map(([k]) => k),
    };
  }
}
