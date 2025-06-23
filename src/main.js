import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/css/main.css'

// Import Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faEnvelope, faFilePdf, faGlobe, faCheck, faMicrochip, faCoins, faLandmark, 
//          faSortAmountDown, faClock, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
// import { faDiscord, faTwitter, faInstagram, faFacebook, faFacebookF, faGithub, faXTwitter, faYoutube, faYoutubeSquare, faLinkedin, faWhatsapp, faTelegram, faReddit, faTwitch, faSpotify, faSoundcloud, faApple, faGoogle, faGooglePlay, faWindows, faLinux } from "@fortawesome/free-brands-svg-icons";
// import far from '@fortawesome/free-regular-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from "@fortawesome/free-brands-svg-icons";
library.add(fas, fab);
// Add icons to library
// library.add(
//   faEnvelope, faFilePdf, faGlobe, faCheck, faMicrochip, faCoins, faLandmark,
//   faSortAmountDown, faClock, faShoppingCart, faDiscord, faTwitter, faInstagram, faFacebook, faXTwitter, faFacebookF, faGithub, faYoutube, faYoutubeSquare, faLinkedin, faWhatsapp, faTelegram, faReddit, faTwitch, faSpotify, faSoundcloud, faApple, faGoogle, faGooglePlay, faWindows, faLinux
// )

// Import Swiper and styles
import { register } from 'swiper/element/bundle'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Register Swiper custom elements
register()

// Import routes
import { routes } from './router/routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 100 // Offset for fixed header
      }
    } else {
      return { 
        top: 0,
        behavior: 'smooth'
      }
    }
  }
})

const app = createApp(App)

// Configure Vue to recognize Swiper custom elements
app.config.compilerOptions.isCustomElement = (tag) => {
  return tag.startsWith('swiper-')
}

// Register Font Awesome component globally
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.mount('#app')

// Register service worker for PWA
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/sw.js')
//       .then(registration => {
//         console.log('ServiceWorker registration successful with scope: ', registration.scope)
//       })
//       .catch(error => {
//         console.log('ServiceWorker registration failed: ', error)
//       })
//   })
// }