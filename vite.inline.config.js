import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist-inline',
    assetsInlineLimit: 1000000,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        manualChunks: undefined,
      },
    },
  },
});
