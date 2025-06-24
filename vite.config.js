import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('-')
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
        name: 'TVPOutpost',
        short_name: 'TVPOutpost',
        description: 'The Venus Project - Outpost',
        theme_color: '#1a1a1a',
        background_color: '#1a1a1a',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/images/dracaris.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/images/dragonorb.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ],
        shortcuts: [
          {
            name: 'Marketplace',
            short_name: 'Marketplace',
            description: 'Browse and trade NFTs',
            url: '/marketplace',
            icons: [{ src: '/images/dracaris.png', sizes: '192x192' }]
          },
          {
            name: 'The Venus Project Outposts',
            short_name: 'Outposts',
            description: 'Venus Outposts',
            url: '/thevenusproject',
            icons: [{ src: '/tvp/the-venus-project-circular-city.jpg', sizes: '192x192' }]
          },
          {
            name: 'Staking',
            short_name: 'Staking',
            description: 'Stake your $DRACO tokens',
            url: '/staking',
            icons: [{ src: '/images/dragonorb.png', sizes: '192x192' }]
          }
        ]
      },
      // workbox: {
      //   cleanupOutdatedCaches: true,
      //   sourcemap: true,
      //   runtimeCaching: [
      //     {
      //       urlPattern: /^https:\/\/dracoscopia\.com\/.*/i,
      //       handler: 'CacheFirst',
      //       options: {
      //         cacheName: 'dracoscopia-images',
      //         expiration: {
      //           maxEntries: 60,
      //           maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
      //         },
      //         cacheableResponse: {
      //           statuses: [0, 200]
      //         }
      //       }
      //     },
      //     {
      //       urlPattern: /^https:\/\/api\.dracoscopia\.com\/.*/i,
      //       handler: 'NetworkFirst',
      //       options: {
      //         cacheName: 'dracoscopia-api',
      //         networkTimeoutSeconds: 10,
      //         expiration: {
      //           maxEntries: 50,
      //           maxAgeSeconds: 5 * 60 // 5 minutes
      //         }
      //       }
      //     }
      //   ]
      // },
      // devOptions: {
      //   enabled: true,
      //   type: 'module',
      //   navigateFallback: 'index.html'
      // }
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