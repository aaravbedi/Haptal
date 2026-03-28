/**
 * Stats Display
 *
 * Overlay badges showing live simulation statistics.
 * Also manages the right-sidebar data stats section.
 */

export class StatsDisplay {
  constructor(overlayContainer, dataStatsContainer, simulationEngine, dataPipeline, encoder, datasetManager) {
    this.overlay = overlayContainer;
    this.dataStats = dataStatsContainer;
    this.sim = simulationEngine;
    this.pipeline = dataPipeline;
    this.encoder = encoder;
    this.dataset = datasetManager;

    this._buildOverlay();
    this._buildDataStats();
  }

  _buildOverlay() {
    this.overlay.innerHTML = '';

    this.badges = {};

    const badgeDefs = [
      { key: 'simHours', label: 'Sim Hours', cls: 'accent' },
      { key: 'trajectories', label: 'Trajectories', cls: 'green' },
      { key: 'embeddings', label: 'Embeddings', cls: 'purple' },
      { key: 'fps', label: 'FPS', cls: 'orange' },
      { key: 'taskState', label: 'Task State', cls: 'cyan' },
    ];

    for (const def of badgeDefs) {
      const badge = document.createElement('div');
      badge.className = `stat-badge ${def.cls}`;
      badge.innerHTML = `
        <span class="stat-label">${def.label}</span>
        <span class="stat-value" id="stat-${def.key}">0</span>
      `;
      this.overlay.appendChild(badge);
      this.badges[def.key] = badge.querySelector('.stat-value');
    }
  }

  _buildDataStats() {
    this.dataStats.innerHTML = '';

    const title = document.createElement('div');
    title.className = 'data-stats-title';
    title.textContent = 'Data Pipeline';
    this.dataStats.appendChild(title);

    this._dataStatsContainer = document.createElement('div');
    this.dataStats.appendChild(this._dataStatsContainer);

    // Embedding visualization
    const embTitle = document.createElement('div');
    embTitle.className = 'data-stats-title';
    embTitle.style.marginTop = '16px';
    embTitle.textContent = 'Embedding Preview';
    this.dataStats.appendChild(embTitle);

    this.embeddingViz = document.createElement('div');
    this.embeddingViz.className = 'embedding-vector';
    // Create 64 bars for embedding visualization
    for (let i = 0; i < 64; i++) {
      const bar = document.createElement('div');
      bar.className = 'embedding-bar';
      bar.style.height = '2px';
      this.embeddingViz.appendChild(bar);
    }
    this.dataStats.appendChild(this.embeddingViz);

    // Progress bar for generation
    const progTitle = document.createElement('div');
    progTitle.className = 'data-stats-title';
    progTitle.style.marginTop = '16px';
    progTitle.textContent = 'Generation Progress';
    this.dataStats.appendChild(progTitle);

    this.progressBar = document.createElement('div');
    this.progressBar.className = 'progress-bar';
    this.progressBar.innerHTML = '<div class="fill" style="width: 0%"></div>';
    this.dataStats.appendChild(this.progressBar);

    this.progressLabel = document.createElement('div');
    this.progressLabel.className = 'data-stat-row';
    this.progressLabel.style.marginTop = '6px';
    this.progressLabel.innerHTML = '<span class="label">Progress</span><span class="value">0%</span>';
    this.dataStats.appendChild(this.progressLabel);
  }

  /**
   * Refresh all stats (called each frame or periodically)
   */
  refresh() {
    const simStats = this.sim.getStats();
    const dsStats = this.dataset.getOverallStats();
    const encStats = this.encoder.getStats();
    const pipeStats = this.pipeline.getStats();

    // Overlay badges
    this.badges.simHours.textContent = simStats.simHours.toFixed(2);
    this.badges.trajectories.textContent = dsStats.totalTrajectories;
    this.badges.embeddings.textContent = dsStats.totalEmbeddings;
    this.badges.fps.textContent = Math.round(simStats.fps);
    this.badges.taskState.textContent = simStats.taskState;

    // Data stats panel
    this._dataStatsContainer.innerHTML = [
      ['Total Frames', dsStats.totalFrames.toLocaleString()],
      ['Success Rate', `${dsStats.successRate}%`],
      ['Categories', dsStats.categories],
      ['Embedding Dim', dsStats.embeddingDim],
      ['Encoder Speed', `${encStats.throughput}/s`],
      ['Pipeline Latency', `${pipeStats.avgLatencyMs.toFixed(1)}ms`],
    ].map(([label, value]) => `
      <div class="data-stat-row">
        <span class="label">${label}</span>
        <span class="value">${value}</span>
      </div>
    `).join('');

    // Update embedding visualization with latest trajectory summary
    this._updateEmbeddingViz();
  }

  _updateEmbeddingViz() {
    const trajs = this.dataset.allTrajectories;
    if (trajs.length === 0) return;

    const latest = trajs[trajs.length - 1];
    if (!latest.summaryEmbedding) return;

    const bars = this.embeddingViz.children;
    const emb = latest.summaryEmbedding;
    const step = Math.max(1, Math.floor(emb.length / bars.length));

    for (let i = 0; i < bars.length; i++) {
      const val = Math.abs(emb[i * step] || 0);
      const height = Math.max(2, val * 30);
      bars[i].style.height = `${height}px`;
      // Color based on sign
      const sign = (emb[i * step] || 0) >= 0;
      bars[i].style.background = sign ? '#3b82f6' : '#a855f7';
    }
  }

  /**
   * Update generation progress bar
   */
  updateProgress(percentage) {
    const fill = this.progressBar.querySelector('.fill');
    fill.style.width = `${percentage}%`;
    this.progressLabel.querySelector('.value').textContent = `${percentage}%`;
  }
}
