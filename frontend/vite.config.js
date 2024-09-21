import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Other aliases...
    },
  },
  esbuild: {
    loader: 'jsx', // The loader must be a string, not an object
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx', // Ensure JS files are treated as JSX
      },
    },
  },
});
