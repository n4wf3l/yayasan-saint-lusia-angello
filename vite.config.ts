import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Production is served from GitHub Pages under /yayasan-saint-lusia-angello/.
export default defineConfig(({ command, isPreview }) => ({
  base: command === 'build' || isPreview ? '/yayasan-saint-lusia-angello/' : '/',
  plugins: [react()],
  // Two HTML entries: the one-page home and the shareable /donasi/ page.
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        donasi: 'donasi/index.html',
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
}))
