import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),  
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest:{
        name: 'Veerin Bajracharya Portfolio',
        short_name: 'Veerin Portfolio',
        description: 'An official Portfolio of Veerin Bajracharya, a front-end web developer.',
        theme_color: '#0f172a',
        background_color: '#fffff0',
        display: 'standalone',
        scope: '/',
        icons:[
          {
            src: '/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  base: process.env.VITE_BASE_PATH || '/my-portfolio',
})
