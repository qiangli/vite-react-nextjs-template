import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const outDir = 'dist/';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.PAGES_BASE_PATH,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Adjust the path as needed
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // increase limit to 1000 kB
    outDir: outDir,
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: () => 'everything',
        entryFileNames: 'assets/bundle.js',
        assetFileNames: assetInfo => {
          if (assetInfo?.name?.endsWith('.css')) {
            return 'assets/bundle.css';
          }
          return 'assets/[name][extname]';
        },
      },
    },
  },
});
