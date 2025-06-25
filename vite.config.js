import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('swiper-')
        }
      }
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico',
        'robots.txt',
        'apple-touch-icon.png',
        'images/*',
        'fonts/*'
      ],
      manifest: {
        name: 'The Venus Project - Outpost',
        short_name: 'TVP Outpost',
        description: 'The Venus Project - Outpost',
        theme_color: '#1a1a1a',
        background_color: '#1a1a1a',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/icon.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/icon.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ],
       
      },
      workbox: {
        cleanupOutdatedCaches: true,
        sourcemap: true,
        // runtimeCaching: [
        //   {
        //     urlPattern: /^https:\/\/dracoscopia\.com\/.*/i,
        //     handler: 'CacheFirst',
        //     options: {
        //       cacheName: 'tvp-dracoscopia-images',
        //       expiration: {
        //         maxEntries: 60,
        //         maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
        //       },
        //       cacheableResponse: {
        //         statuses: [0, 200]
        //       }
        //     }
        //   },
        // ]
      },
      devOptions: {
        enabled: true,
        type: 'module',
        navigateFallback: 'index.html'
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue-router'],
          'swiper': ['swiper'],
          'gsap': ['gsap']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  optimizeDeps: {
    include: ['vue', 'swiper', 'gsap']
  }
})