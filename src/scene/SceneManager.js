import * as THREE from 'three';

/**
 * Manages the Three.js scene, camera, renderer, and lighting.
 * Exposes environment parameter controls for the co-sim bridge.
 */
export class SceneManager {
  constructor(canvas) {
    this.canvas = canvas;
    this.envParams = {
      lightIntensity: 1.0,
      lightAngle: 45,
      ambientIntensity: 0.4,
      colorTemperature: 5500, // Kelvin
    };

    this._initRenderer();
    this._initScene();
    this._initCamera();
    this._initLights();
    this._initGround();

    this._onResize = this._onResize.bind(this);
    window.addEventListener('resize', this._onResize);
    this._onResize();
  }

  _initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: false,
    });
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
  }

  _initScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0f1923);
    this.scene.fog = new THREE.Fog(0x0f1923, 8, 25);
  }

  _initCamera() {
    const aspect = this.canvas.clientWidth / this.canvas.clientHeight;
    this.camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 100);
    this.camera.position.set(1.2, 1.0, 1.5);
    this.camera.lookAt(0, 0.45, 0);

    // Simple orbit state
    this._orbitAngle = Math.atan2(this.camera.position.z, this.camera.position.x);
    this._orbitRadius = Math.sqrt(
      this.camera.position.x ** 2 + this.camera.position.z ** 2
    );
    this._orbitY = this.camera.position.y;
    this._isDragging = false;
    this._lastMouse = { x: 0, y: 0 };

    this.canvas.addEventListener('mousedown', (e) => {
      this._isDragging = true;
      this._lastMouse = { x: e.clientX, y: e.clientY };
    });
    window.addEventListener('mouseup', () => { this._isDragging = false; });
    window.addEventListener('mousemove', (e) => {
      if (!this._isDragging) return;
      const dx = e.clientX - this._lastMouse.x;
      const dy = e.clientY - this._lastMouse.y;
      this._orbitAngle += dx * 0.005;
      this._orbitY = Math.max(0.3, Math.min(3.0, this._orbitY + dy * 0.005));
      this._lastMouse = { x: e.clientX, y: e.clientY };
      this._updateCameraOrbit();
    });
    this.canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      this._orbitRadius = Math.max(0.8, Math.min(5, this._orbitRadius + e.deltaY * 0.002));
      this._updateCameraOrbit();
    }, { passive: false });
  }

  _updateCameraOrbit() {
    this.camera.position.x = Math.cos(this._orbitAngle) * this._orbitRadius;
    this.camera.position.z = Math.sin(this._orbitAngle) * this._orbitRadius;
    this.camera.position.y = this._orbitY;
    this.camera.lookAt(0, 0.45, 0);
  }

  _initLights() {
    // Ambient
    this.ambientLight = new THREE.AmbientLight(0xffffff, this.envParams.ambientIntensity);
    this.scene.add(this.ambientLight);

    // Main directional (simulates overhead / adjustable angle)
    this.mainLight = new THREE.DirectionalLight(0xffffff, this.envParams.lightIntensity);
    this.mainLight.position.set(2, 3, 1);
    this.mainLight.castShadow = true;
    this.mainLight.shadow.mapSize.set(2048, 2048);
    this.mainLight.shadow.camera.near = 0.1;
    this.mainLight.shadow.camera.far = 10;
    this.mainLight.shadow.camera.left = -2;
    this.mainLight.shadow.camera.right = 2;
    this.mainLight.shadow.camera.top = 2;
    this.mainLight.shadow.camera.bottom = -2;
    this.scene.add(this.mainLight);

    // Fill light
    this.fillLight = new THREE.DirectionalLight(0x8899bb, 0.3);
    this.fillLight.position.set(-1, 2, -1);
    this.scene.add(this.fillLight);

    // Grid helper for ground reference
    const grid = new THREE.GridHelper(6, 30, 0x1a2a3a, 0x111d2a);
    grid.position.y = 0.001;
    this.scene.add(grid);
  }

  _initGround() {
    const groundGeo = new THREE.PlaneGeometry(10, 10);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x0d1520,
      roughness: 0.9,
      metalness: 0.1,
    });
    this.ground = new THREE.Mesh(groundGeo, groundMat);
    this.ground.rotation.x = -Math.PI / 2;
    this.ground.receiveShadow = true;
    this.scene.add(this.ground);
  }

  /**
   * Update lighting based on environment parameters
   */
  updateEnvironment(params) {
    Object.assign(this.envParams, params);

    // Light intensity
    this.mainLight.intensity = this.envParams.lightIntensity;
    this.ambientLight.intensity = this.envParams.ambientIntensity;

    // Light angle (rotate main light around y-axis)
    const angleRad = (this.envParams.lightAngle * Math.PI) / 180;
    const dist = 3;
    this.mainLight.position.set(
      Math.cos(angleRad) * dist,
      2 + Math.sin(angleRad) * 1.5,
      Math.sin(angleRad) * dist
    );

    // Color temperature → light color (simplified Planckian locus)
    const kelvin = this.envParams.colorTemperature;
    this.mainLight.color.copy(this._kelvinToColor(kelvin));

    // Exposure (linked to light intensity)
    this.renderer.toneMappingExposure = 0.5 + this.envParams.lightIntensity * 0.7;
  }

  _kelvinToColor(kelvin) {
    // Simplified color temperature approximation
    const t = kelvin / 100;
    let r, g, b;
    if (t <= 66) {
      r = 255;
      g = Math.max(0, Math.min(255, 99.4708 * Math.log(t) - 161.1196));
      b = t <= 19 ? 0 : Math.max(0, Math.min(255, 138.5177 * Math.log(t - 10) - 305.0448));
    } else {
      r = Math.max(0, Math.min(255, 329.6987 * Math.pow(t - 60, -0.1332)));
      g = Math.max(0, Math.min(255, 288.1221 * Math.pow(t - 60, -0.0755)));
      b = 255;
    }
    return new THREE.Color(r / 255, g / 255, b / 255);
  }

  _onResize() {
    const parent = this.canvas.parentElement;
    const w = parent.clientWidth;
    const h = parent.clientHeight;
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  /**
   * Capture current frame as simulated RGB sensor data
   * Returns a compact feature vector (not full pixels) for speed
   */
  captureRGBFeatures() {
    // Downsample to small resolution for sensor sim
    const size = 8;
    const rt = new THREE.WebGLRenderTarget(size, size);
    this.renderer.setRenderTarget(rt);
    this.renderer.render(this.scene, this.camera);
    const pixels = new Uint8Array(size * size * 4);
    this.renderer.readRenderTargetPixels(rt, 0, 0, size, size, pixels);
    this.renderer.setRenderTarget(null);
    rt.dispose();

    // Convert to normalized float features
    const features = new Float32Array(size * size * 3);
    for (let i = 0; i < size * size; i++) {
      features[i * 3] = pixels[i * 4] / 255;
      features[i * 3 + 1] = pixels[i * 4 + 1] / 255;
      features[i * 3 + 2] = pixels[i * 4 + 2] / 255;
    }
    return features;
  }

  dispose() {
    window.removeEventListener('resize', this._onResize);
    this.renderer.dispose();
  }
}
