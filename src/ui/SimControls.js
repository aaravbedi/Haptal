/**
 * Simulation Controls Bar
 *
 * Bottom bar with play/pause, speed control, and time display.
 */

export class SimControls {
  constructor(container, simulationEngine, syntheticGenerator, domainRandomizer) {
    this.container = container;
    this.sim = simulationEngine;
    this.generator = syntheticGenerator;
    this.randomizer = domainRandomizer;

    this._build();
  }

  _build() {
    this.container.innerHTML = '';

    // Play/Pause
    this.playBtn = this._btn('▶ Play', 'btn btn-primary btn-sm', () => {
      if (!this.sim.isRunning) {
        this.sim.start();
        if (this.sim.currentObjectDef && this.sim.taskState === 'idle') {
          this.sim.startTask();
        }
      } else {
        const paused = this.sim.togglePause();
        this.playBtn.textContent = paused ? '▶ Play' : '⏸ Pause';
      }
      this._updatePlayButton();
    });
    this.container.appendChild(this.playBtn);

    // Stop
    this.container.appendChild(this._btn('⏹ Stop', 'btn btn-danger btn-sm', () => {
      this.sim.stop();
      this._updatePlayButton();
    }));

    // Separator
    this.container.appendChild(this._sep());

    // Speed controls
    const speeds = [1, 2, 5, 10, 25, 50, 100];
    this.speedIndicator = document.createElement('span');
    this.speedIndicator.className = 'speed-indicator';
    this.speedIndicator.textContent = '1x';
    this.container.appendChild(this.speedIndicator);

    this.container.appendChild(this._btn('−', 'btn btn-sm', () => {
      const idx = speeds.indexOf(this.sim.timeScale);
      if (idx > 0) {
        this.sim.setTimeScale(speeds[idx - 1]);
        this.speedIndicator.textContent = `${speeds[idx - 1]}x`;
      }
    }));

    this.container.appendChild(this._btn('+', 'btn btn-sm', () => {
      const idx = speeds.indexOf(this.sim.timeScale);
      if (idx < speeds.length - 1) {
        this.sim.setTimeScale(speeds[idx + 1]);
        this.speedIndicator.textContent = `${speeds[idx + 1]}x`;
      } else if (idx === -1) {
        // Find closest
        const closest = speeds.reduce((a, b) =>
          Math.abs(b - this.sim.timeScale) < Math.abs(a - this.sim.timeScale) ? b : a
        );
        const ci = speeds.indexOf(closest);
        if (ci < speeds.length - 1) {
          this.sim.setTimeScale(speeds[ci + 1]);
          this.speedIndicator.textContent = `${speeds[ci + 1]}x`;
        }
      }
    }));

    // Separator
    this.container.appendChild(this._sep());

    // Time display
    this.timeDisplay = document.createElement('span');
    this.timeDisplay.className = 'time-display';
    this.timeDisplay.textContent = '0:00:00';
    this.container.appendChild(this.timeDisplay);

    // Separator
    this.container.appendChild(this._sep());

    // Domain randomization toggle
    this.drToggle = this._btn('DR: OFF', 'btn btn-sm', () => {
      this.randomizer.enabled = !this.randomizer.enabled;
      this.drToggle.textContent = `DR: ${this.randomizer.enabled ? 'ON' : 'OFF'}`;
      this.drToggle.style.color = this.randomizer.enabled ? '#22c55e' : '';
    });
    this.container.appendChild(this.drToggle);

    // Batch generate button
    this.container.appendChild(this._btn('Batch Gen', 'btn btn-sm', () => {
      if (this.generator.isGenerating) {
        this.generator.stopGeneration();
      } else {
        const plan = this.generator.createPlan({ repetitions: 5, environments: 3, timeScaleTarget: 25 });
        this.generator.startGeneration(plan);
        this.sim.setTimeScale(25);
        this.speedIndicator.textContent = '25x';
      }
    }));
  }

  _btn(text, className, onClick) {
    const btn = document.createElement('button');
    btn.className = className;
    btn.textContent = text;
    btn.addEventListener('click', onClick);
    return btn;
  }

  _sep() {
    const sep = document.createElement('div');
    sep.style.cssText = 'width:1px;height:24px;background:#2d3a4f;';
    return sep;
  }

  _updatePlayButton() {
    if (this.sim.isRunning && !this.sim.isPaused) {
      this.playBtn.textContent = '⏸ Pause';
    } else {
      this.playBtn.textContent = '▶ Play';
    }
  }

  /**
   * Update time display
   */
  refresh() {
    const stats = this.sim.getStats();
    const hours = Math.floor(stats.simTime / 3600);
    const mins = Math.floor((stats.simTime % 3600) / 60);
    const secs = Math.floor(stats.simTime % 60);
    this.timeDisplay.textContent = `${hours}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')} sim`;
  }
}
