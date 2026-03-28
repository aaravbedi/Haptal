/**
 * Dataset Manager
 *
 * Stores and organizes collected trajectory data by taxonomy category.
 * Provides querying, statistics, and export capabilities.
 */

export class DatasetManager {
  constructor() {
    // Trajectories indexed by category path
    this.trajectories = new Map();  // path → [trajectory records]
    this.allTrajectories = [];
    this.totalFrames = 0;
    this.totalEmbeddings = 0;

    // Category statistics
    this.categoryStats = new Map();  // path → { count, successRate, avgFrames }
  }

  /**
   * Add a processed trajectory record
   */
  addTrajectory(record) {
    this.allTrajectories.push(record);

    // Index by category
    const path = record.objectPath;
    if (!this.trajectories.has(path)) {
      this.trajectories.set(path, []);
    }
    this.trajectories.get(path).push(record);

    // Update stats
    this.totalFrames += record.frameCount;
    this.totalEmbeddings += record.embeddings.length;
    this._updateCategoryStats(path, record);
  }

  /**
   * Update category statistics
   */
  _updateCategoryStats(path, record) {
    if (!this.categoryStats.has(path)) {
      this.categoryStats.set(path, {
        count: 0,
        successCount: 0,
        totalFrames: 0,
      });
    }
    const stats = this.categoryStats.get(path);
    stats.count++;
    if (record.success) stats.successCount++;
    stats.totalFrames += record.frameCount;
  }

  /**
   * Get trajectories for a specific taxonomy path
   */
  getByPath(path) {
    return this.trajectories.get(path) || [];
  }

  /**
   * Get count for a specific path (including children)
   */
  getCountForPath(pathPrefix) {
    let count = 0;
    for (const [path, trajs] of this.trajectories) {
      if (path === pathPrefix || path.startsWith(pathPrefix + '.')) {
        count += trajs.length;
      }
    }
    return count;
  }

  /**
   * Get aggregated statistics for a category path
   */
  getStatsForPath(pathPrefix) {
    let total = 0, successes = 0, frames = 0;
    for (const [path, stats] of this.categoryStats) {
      if (path === pathPrefix || path.startsWith(pathPrefix + '.')) {
        total += stats.count;
        successes += stats.successCount;
        frames += stats.totalFrames;
      }
    }
    return {
      count: total,
      successRate: total > 0 ? (successes / total * 100).toFixed(1) : 0,
      avgFrames: total > 0 ? Math.round(frames / total) : 0,
    };
  }

  /**
   * Get overall dataset stats
   */
  getOverallStats() {
    const successCount = this.allTrajectories.filter(t => t.success).length;
    return {
      totalTrajectories: this.allTrajectories.length,
      totalFrames: this.totalFrames,
      totalEmbeddings: this.totalEmbeddings,
      successRate: this.allTrajectories.length > 0
        ? (successCount / this.allTrajectories.length * 100).toFixed(1)
        : 0,
      categories: this.trajectories.size,
      embeddingDim: this.allTrajectories.length > 0
        ? this.allTrajectories[0].embeddings[0]?.length || 128
        : 128,
    };
  }

  /**
   * Export dataset summary as JSON
   */
  exportSummary() {
    return {
      metadata: {
        generated: new Date().toISOString(),
        platform: 'Haptal Sim-to-Real',
        version: '0.1.0',
      },
      stats: this.getOverallStats(),
      categories: Object.fromEntries(
        [...this.categoryStats.entries()].map(([path, stats]) => [
          path,
          {
            trajectories: stats.count,
            successRate: stats.count > 0
              ? (stats.successCount / stats.count * 100).toFixed(1) + '%'
              : '0%',
            totalFrames: stats.totalFrames,
          },
        ])
      ),
    };
  }
}
