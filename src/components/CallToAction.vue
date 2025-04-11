<template>
  <section class="py-20 bg-dark-gray">
    <div class="container mx-auto px-4 text-center">
      <div class="special-offer max-w-2xl mx-auto px-8 py-6">
        <div class="flex items-center justify-center">
          <i :class="icon" class="text-3xl text-blue-500 mr-3"></i>
          <h3 class="text-2xl font-bold">{{ title }}</h3>
        </div>
        <p class="mt-2">{{ description }}</p>
      </div>
      <router-link :to="buttonLink" class="btn btn-gradient mt-8">{{ buttonText }}</router-link>
      <p v-if="legalInfo" class="legal-info">{{ legalInfo }}</p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: 'fas fa-gift'
  },
  buttonText: {
    type: String,
    default: 'Get Started'
  },
  buttonLink: {
    type: String,
    default: '/contact'
  },
  legalInfo: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.special-offer {
  @apply bg-white rounded-lg shadow-lg;
}

.legal-info {
  @apply text-sm text-gray-400 mt-4;
}
</style> 