import react from '@vitejs/plugin-react-swc';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl';
const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base:'/my-snapshot-app/',
  plugins: [react(),glsl()],
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
  },
  optimizeDeps: {
    include: ["three"],
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
