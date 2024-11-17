import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'chart-vendor': ['chart.js', 'react-chartjs-2'],
          'map-vendor': ['leaflet', 'react-leaflet']
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  assetsInclude: ['**/*.gltf', '**/*.glb', '**/*.bin'],
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  copyPublicDir: true,
});
