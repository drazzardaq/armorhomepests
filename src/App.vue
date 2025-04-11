<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
    <PWAInstallPrompt />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import PWAInstallPrompt from '@/components/PWAInstallPrompt.vue';
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

/* Global styles */
html {
  scroll-behavior: smooth;
}

body {
  @apply bg-light-gray text-dark-gray antialiased;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  @apply bg-gray-100;
}

::-webkit-scrollbar-thumb {
  @apply bg-primary-blue/50 rounded-full hover:bg-primary-blue/70 transition-colors duration-200;
}

/* Focus styles */
:focus-visible {
  @apply outline-none ring-2 ring-primary-blue ring-offset-2;
}

/* Selection styles */
::selection {
  @apply bg-primary-blue/20 text-dark-gray;
}

.nav-link {
  @apply inline-flex items-center px-1 pt-1 text-sm font-medium text-dark-gray hover:text-accent-blue;
}

.mobile-nav-link {
  @apply block px-3 py-2 rounded-md text-base font-medium text-dark-gray hover:text-accent-blue hover:bg-gray-50;
}

.btn {
  @apply inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm;
}

.btn-gradient {
  @apply bg-gradient-to-r from-primary-blue to-secondary-blue text-white hover:from-secondary-blue hover:to-primary-blue;
}

.btn-phone {
  @apply bg-green-600 text-white hover:bg-green-700;
}
</style> 