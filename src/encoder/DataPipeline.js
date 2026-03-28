/**
 * Data Pipeline
 *
 * Orchestrates the full flow: raw sensor data → embedding → storage.
 * Manages trajectory-level processing and dataset accumulation.
 *
 * Pipeline stages:
 *   1. Raw frame collection (SensorCollector)
 *   2. Frame → vector conversion
 *   3. Vector → embedding (EmbeddingEncoder)
 *   4. Embedding + metadata → DatasetManager
 */

export class DataPipeline {
  constructor(sensorCollector, embeddingEncoder, datasetManager) {
    this.sensor = sensorCollector;
    this.encoder = embeddingEncoder;
    this.dataset = datasetManager;

    this.isProcessing = false;
    this.processedTrajectories = 0;
    this.processedFrames = 0;
    this.totalEmbeddings = 0;
    this.pipelineLatencyMs = 0;
  }

  /**
   * Process a completed trajectory:
   *   - Convert frames to vectors
   *   - Encode to embeddings
   *   - Store in dataset with metadata
   */
  processTrajectory(trajectory, objectDef, envParams) {
    if (!trajectory || trajectory.frames.length === 0) return null;

    const start = performance.now();
    this.isProcessing = true;

    const embeddings = [];
    const vectors = [];

    for (const frame of trajectory.frames) {
      const vector = this.sensor.frameToVector(frame);
      vectors.push(vector);
      const embedding = this.encoder.encode(vector);
      embeddings.push(embedding);
    }

    // Create trajectory record
    const record = {
      id: `traj_${Date.now()}_${this.processedTrajectories}`,
      objectId: objectDef.id || objectDef.name,
      objectPath: objectDef.path ? objectDef.path.join('.') : 'unknown',
      category: objectDef.path ? objectDef.path[0] : 'unknown',
      subcategory: objectDef.path ? objectDef.path.slice(0, -1).join('.') : 'unknown',
      objectName: objectDef.name,
      frameCount: trajectory.frames.length,
      embeddings,
      // Summary embedding (mean of all frame embeddings)
      summaryEmbedding: this._meanEmbedding(embeddings),
      environment: { ...envParams },
      timestamp: Date.now(),
      durationMs: trajectory.frames.length > 1
        ? trajectory.frames[trajectory.frames.length - 1].timestamp - trajectory.frames[0].timestamp
        : 0,
      success: this._evaluateSuccess(trajectory),
    };

    // Store in dataset
    this.dataset.addTrajectory(record);

    this.processedTrajectories++;
    this.processedFrames += trajectory.frames.length;
    this.totalEmbeddings += embeddings.length;
    this.pipelineLatencyMs += performance.now() - start;
    this.isProcessing = false;

    return record;
  }

  /**
   * Compute mean embedding from array of embeddings
   */
  _meanEmbedding(embeddings) {
    if (embeddings.length === 0) return new Float32Array(this.encoder.outputDim);
    const mean = new Float32Array(embeddings[0].length);
    for (const emb of embeddings) {
      for (let i = 0; i < mean.length; i++) mean[i] += emb[i];
    }
    const n = embeddings.length;
    for (let i = 0; i < mean.length; i++) mean[i] /= n;
    // L2 normalize
    let norm = 0;
    for (let i = 0; i < mean.length; i++) norm += mean[i] * mean[i];
    norm = Math.sqrt(norm + 1e-8);
    for (let i = 0; i < mean.length; i++) mean[i] /= norm;
    return mean;
  }

  /**
   * Simple heuristic to evaluate if a grasp trajectory was successful.
   * Checks if object was lifted above a threshold height.
   */
  _evaluateSuccess(trajectory) {
    if (trajectory.frames.length < 5) return false;
    const lastFrames = trajectory.frames.slice(-5);
    const maxHeight = Math.max(...lastFrames.map(f => f.objectPosition[1]));
    // Success if object lifted at least 5cm above table
    return maxHeight > 0.47;
  }

  /**
   * Get pipeline stats
   */
  getStats() {
    return {
      processedTrajectories: this.processedTrajectories,
      processedFrames: this.processedFrames,
      totalEmbeddings: this.totalEmbeddings,
      avgLatencyMs: this.processedTrajectories > 0
        ? this.pipelineLatencyMs / this.processedTrajectories
        : 0,
      isProcessing: this.isProcessing,
    };
  }
}
