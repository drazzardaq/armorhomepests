<template>
  <div class="service-card" @click="$emit('click')">
    <div v-if="image" class="service-image">
      <img :src="image" :alt="title" class="w-full h-48 object-cover">
    </div>
    <div v-else-if="icon" class="service-icon">
      <i :class="icon"></i>
    </div>
    <div class="service-content">
      <h3 class="service-title">{{ title }}</h3>
      <p class="service-description">{{ description }}</p>
      <router-link 
        :to="link" 
        class="service-button"
        :class="buttonClass"
      >
        Learn More
      </router-link>
    </div>
  </div>
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
  image: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    required: true
  },
  buttonClass: {
    type: String,
    default: 'btn-gradient-blue'
  }
});

defineEmits(['click']);
</script>

<style scoped>
.service-card {
  @apply bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 cursor-pointer;
}

.service-card:hover {
  @apply transform -translate-y-2 shadow-xl;
}

.service-image {
  @apply w-full h-48 overflow-hidden;
}

.service-icon {
  @apply text-4xl text-primary-blue p-6 text-center;
}

.service-content {
  @apply p-6;
}

.service-title {
  @apply text-xl font-bold mb-2 text-gray-800;
}

.service-description {
  @apply text-gray-600 mb-4;
}

.service-button {
  @apply inline-block px-6 py-2 rounded-full text-white font-semibold transition-all duration-300;
}

.btn-gradient-blue {
  @apply bg-gradient-to-r from-primary-blue to-secondary-blue hover:from-secondary-blue hover:to-primary-blue;
}

.btn-gradient-green {
  @apply bg-gradient-to-r from-primary-green to-secondary-green hover:from-secondary-green hover:to-primary-green;
}
</style> 