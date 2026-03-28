import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Haptal/',
  server: {
    port: 3000,
    open: false,
  },
  build: {
    outDir: 'dist',
  },
});
