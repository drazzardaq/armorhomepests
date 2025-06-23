<template>
  <header class="bg-gray-900">
    <nav class="bg-gray-800/50 backdrop-blur border-b border-gray-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center space-x-8">
            <router-link to="/" class="flex items-center space-x-3">
              <img src="https://TVPOutpost.com/images/dragonorb.png" alt="TVPOutpost" class="h-8 w-auto" />
              <span class="text-xl font-bold text-white">TVPOutpost</span>
            </router-link>
            <div class="hidden md:flex items-center space-x-4">
              <router-link 
                v-for="link in navLinks" 
                :key="link.path"
                :to="link.path"
                class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                :class="{ 'text-crypto-primary': isCurrentRoute(link.path) }"
              >
                {{ link.name }}
              </router-link>
            </div>
          </div>
          
          <div class="flex items-center space-x-4">
            <!-- Auth Buttons -->
            <div v-if="!isAuthenticated" class="flex items-center space-x-3">
              <button 
                @click="openLoginModal"
                class="px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Login
              </button>
              <button 
                @click="openRegisterModal"
                class="px-4 py-2 rounded-lg bg-crypto-accent text-white hover:bg-crypto-accent/90 transition-colors"
              >
                Register
              </button>
            </div>

            <!-- User Menu -->
            <div v-if="isAuthenticated" class="relative">
              <button 
                @click="toggleUserMenu"
                class="flex items-center space-x-2 text-gray-300 hover:text-white"
              >
                <img 
                  :src="userAvatar" 
                  alt="User Avatar" 
                  class="w-8 h-8 rounded-full border-2 border-crypto-primary"
                />
                <span class="hidden md:inline">{{ userName }}</span>
              </button>
              <!-- Dropdown Menu -->
              <div 
                v-if="showUserMenu"
                class="absolute right-0 mt-2 w-48 rounded-lg bg-gray-800 border border-gray-700 shadow-lg py-1"
              >
                <router-link 
                  v-for="item in userMenuItems" 
                  :key="item.path"
                  :to="item.path"
                  class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  {{ item.name }}
                </router-link>
                <button 
                  @click="logout"
                  class="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-700 hover:text-red-300"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile Navigation -->
    <div class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link 
          v-for="link in navLinks" 
          :key="link.path"
          :to="link.path"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
          :class="{ 'text-crypto-primary': isCurrentRoute(link.path) }"
        >
          {{ link.name }}
        </router-link>
      </div>
    </div>

    <!-- Auth Modals -->
    <div v-if="showLoginModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div class="bg-gray-800 rounded-xl p-8 max-w-md w-full mx-4">
        <h2 class="text-2xl font-bold text-white mb-6">Login to TVPOutpost</h2>
        <!-- Login Form -->
        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-400 mb-2">Email</label>
            <input 
              type="email" 
              v-model="loginForm.email"
              class="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-crypto-primary"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-400 mb-2">Password</label>
            <input 
              type="password" 
              v-model="loginForm.password"
              class="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-crypto-primary"
              required
            />
          </div>
          <div class="flex justify-between items-center">
            <button 
              type="submit"
              class="px-6 py-2 rounded-lg bg-crypto-primary text-white hover:bg-crypto-accent transition-colors"
            >
              Login
            </button>
            <button 
              type="button"
              @click="closeLoginModal"
              class="text-gray-400 hover:text-white"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>

    <div v-if="showRegisterModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div class="bg-gray-800 rounded-xl p-8 max-w-md w-full mx-4">
        <h2 class="text-2xl font-bold text-white mb-6">Create Account</h2>
        <!-- Register Form -->
        <form @submit.prevent="handleRegister" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-400 mb-2">Username</label>
            <input 
              type="text" 
              v-model="registerForm.username"
              class="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-crypto-primary"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-400 mb-2">Email</label>
            <input 
              type="email" 
              v-model="registerForm.email"
              class="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-crypto-primary"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-400 mb-2">Password</label>
            <input 
              type="password" 
              v-model="registerForm.password"
              class="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-crypto-primary"
              required
            />
          </div>
          <div class="flex justify-between items-center">
            <button 
              type="submit"
              class="px-6 py-2 rounded-lg bg-crypto-primary text-white hover:bg-crypto-accent transition-colors"
            >
              Register
            </button>
            <button 
              type="button"
              @click="closeRegisterModal"
              class="text-gray-400 hover:text-white"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isAuthenticated = ref(false)
const showUserMenu = ref(false)
const showLoginModal = ref(false)
const showRegisterModal = ref(false)

const userName = ref('John Doe')
const userAvatar = ref('https://TVPOutpost.com/images/avatars/default.jpg')

const loginForm = ref({
  email: '',
  password: ''
})

const registerForm = ref({
  username: '',
  email: '',
  password: ''
})

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Marketplace', path: '/marketplace' },
  { name: 'Staking', path: '/staking' },
  { name: 'Roadmap', path: '/roadmap' },
  { name: 'About', path: '/about' }
]

const userMenuItems = [
  { name: 'Profile', path: '/profile' },
  { name: 'My NFTs', path: '/profile/nfts' },
  { name: 'Settings', path: '/profile/settings' }
]

const isCurrentRoute = (path) => {
  return route.path === path
}

const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value
}

const openLoginModal = () => {
  showLoginModal.value = true
  showRegisterModal.value = false
}

const closeLoginModal = () => {
  showLoginModal.value = false
  loginForm.value = { email: '', password: '' }
}

const openRegisterModal = () => {
  showRegisterModal.value = true
  showLoginModal.value = false
}

const closeRegisterModal = () => {
  showRegisterModal.value = false
  registerForm.value = { username: '', email: '', password: '' }
}

const handleLogin = () => {
  // Implement login logic here
  console.log('Login:', loginForm.value)
  closeLoginModal()
  isAuthenticated.value = true
}

const handleRegister = () => {
  // Implement registration logic here
  console.log('Register:', registerForm.value)
  closeRegisterModal()
  isAuthenticated.value = true
}

const logout = () => {
  isAuthenticated.value = false
  showUserMenu.value = false
}
</script>

<style scoped>
.backdrop-blur {
  backdrop-filter: blur(12px);
}
</style> 