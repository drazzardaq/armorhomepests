<template>
  <div class="min-h-screen bg-gradient-to-b from-crypto-dark to-dark-purple flex items-center justify-center px-4">
    <div class="text-center">
      <div class="-mb-10 relative z-20">
        <img src="@/assets/images/vvv.png" alt="TVPOutpost Logo" class="w-auto h-64 mx-auto opacity-100 brightness-125" />
      </div>
      <h1 class="text-4xl -mt-2 z-30 block relative font-bold text-crypto-primary mb-4">404</h1>
      <h2 class="text-2xl font-semibold text-white mb-6">Page Not Found</h2>
      <p class="text-gray-300 mb-8 max-w-md mx-auto">
        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </p>
      <div class="space-x-4">
        <router-link to="/" class="btn-gradient-crypto px-6 py-3 rounded-lg inline-block">
          Return Home
        </router-link>
        <button @click="goBack" class="btn-outline-white px-6 py-3 rounded-lg inline-block">
          Go Back
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.go(-1)
}
</script>

<style scoped>
.btn-outline-white {
  @apply border-2 border-white text-white hover:bg-white hover:text-crypto-dark transition-colors duration-300;
}
</style> 