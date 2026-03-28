/**
 * Co-Simulation Bridge
 *
 * This is the core physics derivation engine. It takes high-level environment
 * parameters (temperature, humidity, light, etc.) and computes the actual
 * physical material properties and forces that affect the simulation.
 *
 * This bridges the gap between "knobs the user turns" and "values the physics
 * engine needs". In a real system, this would interface with FEA solvers or
 * lookup tables from material science databases. Here we use first-principles
 * approximations that capture the essential relationships.
 *
 * Key relationships modeled:
 *   Temperature → friction coefficient, material stiffness, grip reliability
 *   Humidity → surface moisture, slip factor, electrical conductivity
 *   Light → sensor noise, color accuracy, shadow strength
 *   Air pressure → drag forces, buoyancy
 *   Surface contamination → grip degradation
 */

export class CoSimBridge {
  constructor() {
    // Environment state (user-controllable)
    this.environment = {
      temperature: 22,        // Celsius
      humidity: 45,           // % relative humidity
      lightIntensity: 1.0,    // normalized 0-2
      lightAngle: 45,         // degrees
      colorTemperature: 5500, // Kelvin
      ambientIntensity: 0.4,  // normalized 0-1
      gravity: 9.81,          // m/s^2
      airDensity: 1.225,      // kg/m^3 (sea level)
      surfaceContamination: 0, // 0=clean, 1=oily/dusty
      vibration: 0,           // Hz - table vibration frequency
    };

    // Derived physical properties (computed by the bridge)
    this.derived = {
      effectiveFriction: 0.4,
      effectiveRestitution: 0.3,
      gripReliability: 1.0,
      materialStiffness: 1.0,
      sensorNoise: 0.01,
      dragCoefficient: 0.0,
      thermalExpansion: 0.0,
      surfaceSlip: 0.0,
      jointStiffness: 1.0,
      colorShift: [0, 0, 0],
    };
  }

  /**
   * Set environment parameters and recompute all derived properties.
   */
  setEnvironment(params) {
    Object.assign(this.environment, params);
    this._recompute();
    return this.derived;
  }

  /**
   * Compute derived physical properties for a specific object.
   * Returns properties adjusted for the object's material and the environment.
   */
  computeObjectProperties(objectPhysics) {
    const env = this.environment;
    const p = objectPhysics;

    // === Temperature effects ===
    // Friction decreases at extreme temperatures (frozen or melting surfaces)
    const tempDeviation = Math.abs(env.temperature - 22) / 30; // normalized
    const tempFrictionFactor = 1.0 - 0.3 * tempDeviation * tempDeviation;

    // Material stiffness increases at low temps (brittleness), decreases at high
    const stiffnessFactor = p.deformability > 0
      ? 1.0 + 0.5 * (22 - env.temperature) / 40 * p.deformability
      : 1.0;

    // Thermal expansion changes object radius slightly
    const thermalExpansion = (env.temperature - 22) * (p.thermalConductivity || 0.4) * 0.00001;

    // === Humidity effects ===
    // Surface moisture reduces friction
    const moistureFactor = 1.0 - (env.humidity / 100) * 0.25;
    // Deformable objects absorb moisture and get heavier
    const massIncrease = 1.0 + (env.humidity / 100) * 0.05 * p.deformability;

    // === Surface contamination ===
    // Oil/dust reduces friction and grip reliability
    const contaminationFriction = 1.0 - env.surfaceContamination * 0.5;
    const gripReliability = Math.max(0.1,
      1.0 - env.surfaceContamination * 0.4 - (env.humidity / 100) * 0.15
    );

    // === Combine friction modifiers ===
    const effectiveFriction = p.friction
      * tempFrictionFactor
      * moistureFactor
      * contaminationFriction;

    // === Restitution (bounciness) ===
    // Cold objects bounce more (stiffer), warm objects absorb more
    const restTempFactor = 1.0 + (22 - env.temperature) / 100;
    const effectiveRestitution = Math.max(0, Math.min(1,
      p.restitution * restTempFactor
    ));

    // === Grip force thresholds ===
    // Min force increases in adverse conditions (slippery)
    const gripForceMin = p.gripForceMin / (effectiveFriction / p.friction);
    // Max force before damage decreases for cold/brittle or hot/soft objects
    const gripForceMax = p.gripForceMax * stiffnessFactor;

    // === Air drag ===
    const crossSection = p.shape === 'sphere' ? Math.PI * p.radius * p.radius
      : p.shape === 'cylinder' ? (p.radius * 2) * (p.length || 0.1)
      : (p.width || 0.1) * (p.height || 0.1);
    const dragCoefficient = 0.47 * env.airDensity * crossSection; // sphere Cd≈0.47

    // === Sensor noise from lighting ===
    const sensorNoise = Math.max(0.001,
      0.02 / Math.max(0.1, env.lightIntensity) + env.vibration * 0.005
    );

    return {
      effectiveFriction: Math.max(0.05, effectiveFriction),
      effectiveRestitution,
      effectiveMass: p.mass * massIncrease,
      gripForceMin,
      gripForceMax,
      gripReliability,
      materialStiffness: stiffnessFactor,
      thermalExpansion,
      dragCoefficient,
      sensorNoise,
      crossSection,
    };
  }

  /**
   * Internal: recompute general derived properties (not object-specific).
   */
  _recompute() {
    const env = this.environment;

    // General sensor noise
    this.derived.sensorNoise = Math.max(0.001,
      0.02 / Math.max(0.1, env.lightIntensity) + env.vibration * 0.005
    );

    // Air density adjusts with temperature (ideal gas approximation)
    // ρ = P / (R * T), at 1atm
    const tempKelvin = env.temperature + 273.15;
    this.derived.airDensity = (101325) / (287.05 * tempKelvin);
    env.airDensity = this.derived.airDensity;

    // General joint stiffness (robots get stiffer in cold)
    this.derived.jointStiffness = 1.0 + (22 - env.temperature) * 0.002;

    // Color shift from light temperature
    this.derived.colorShift = this._computeColorShift(env.colorTemperature);

    // Surface slip factor
    this.derived.surfaceSlip = env.surfaceContamination * 0.5
      + (env.humidity / 100) * 0.2;
  }

  /**
   * Compute how color temperature shifts perceived colors.
   * Returns [r, g, b] bias factors.
   */
  _computeColorShift(kelvin) {
    // Warm light (< 5500K) adds red/yellow bias
    // Cool light (> 5500K) adds blue bias
    const deviation = (kelvin - 5500) / 5000;
    return [
      -deviation * 0.1, // red channel
      0,                // green stays
      deviation * 0.1,  // blue channel
    ];
  }

  /**
   * Generate a full environment state snapshot for embedding.
   */
  getEnvironmentVector() {
    const env = this.environment;
    return new Float32Array([
      env.temperature / 50,           // normalize to ~[-1, 1]
      env.humidity / 100,
      env.lightIntensity,
      env.lightAngle / 180,
      env.colorTemperature / 10000,
      env.gravity / 15,
      env.surfaceContamination,
      env.vibration / 50,
    ]);
  }
}
