<template>
  <nav class="bg-white shadow-sm sticky top-0 z-50">
    <div class="container-custom">
      <div class="flex items-center justify-between min-h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-2">
          <img src="@/assets/images//logo.png" alt="Logo" class="h-16 w-auto">
          <span class="text-xl font-bold text-primary-blue">HomeGuard</span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <router-link 
            v-for="item in navItems" 
            :key="item.path"
            :to="item.path"
            class="nav-link"
            :class="{ 'text-primary-blue': isCurrentRoute(item.path) }"
          >
            {{ item.name }}
          </router-link>
          <a 
            href="tel:480-839-3333" 
            class="btn-phone flex items-center gap-2"
          >
            <i class="fas fa-phone-alt"></i>
            480-839-3333
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden p-2 rounded-md text-gray-600 hover:text-primary-blue hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-blue/20"
          aria-label="Toggle menu"
        >
          <i :class="isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'" class="text-xl"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide-down">
      <div 
        v-if="isMobileMenuOpen" 
        class="md:hidden bg-white border-t border-gray-100"
      >
        <div class="container-custom py-4 space-y-4">
          <router-link 
            v-for="item in navItems" 
            :key="item.path"
            :to="item.path"
            class="mobile-nav-link block"
            :class="{ 'text-primary-blue bg-gray-50': isCurrentRoute(item.path) }"
            @click="isMobileMenuOpen = false"
          >
            {{ item.name }}
          </router-link>
          <a 
            href="tel:480-839-3333" 
            class="btn-phone w-full flex items-center justify-center gap-2"
            @click="isMobileMenuOpen = false"
          >
            <i class="fas fa-phone-alt"></i>
            480-839-3333
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isMobileMenuOpen = ref(false);

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
];

const isCurrentRoute = (path) => {
  return route.path === path;
};
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease-out;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.nav-link {
  @apply text-gray-600 hover:text-primary-blue transition-colors duration-200;
}

.mobile-nav-link {
  @apply text-gray-600 hover:text-primary-blue hover:bg-gray-50 transition-colors duration-200;
}

.btn-phone {
  @apply bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1;
}
</style> 