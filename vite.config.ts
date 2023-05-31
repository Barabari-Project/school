import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [sveltekit()],
  build: {
    target: 'es2015'
  },
  server: {
    port: 3000
  }
})
