import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Production is served from the root of yayasansaintlusiaangello.org (Hostinger).
export default defineConfig({
  plugins: [react()],
  // HTML entries: home, the shareable /donasi/ page and /legal/, each in Indonesian and under /en/.
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        donasi: 'donasi/index.html',
        en: 'en/index.html',
        enDonasi: 'en/donasi/index.html',
        legal: 'legal/index.html',
        enLegal: 'en/legal/index.html',
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
})
