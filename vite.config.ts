import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/c6a52936-cf5c-473a-9d0e-456934ef2d79/preview',
  plugins: [react()],
  css: {
    // Ensure CSS is processed and injected correctly
    devSourcemap: true,
  },
  server: {
    port: 5249,
    host: true,
    strictPort: true,
    hmr: {
      // HMR will be proxied through our backend
      port: 5249,
    },
  },
})
