import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/css/main.css'

// Import all pages
import Home from './pages/Home.vue'
import Security from './pages/Security.vue'
import PestControl from './pages/PestControl.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'
import Services from './pages/Services.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/security', component: Security },
    { path: '/pest-control', component: PestControl },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/services', component: Services }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')

// Register service worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope)
      })
      .catch(error => {
        console.log('ServiceWorker registration failed: ', error)
      })
  })
} 