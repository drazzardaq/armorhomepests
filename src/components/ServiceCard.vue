<template>
  <div class="service-card bg-white/80 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden transition-all duration-300 cursor-pointer border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#143395]" @click="$emit('click')" tabindex="0" :aria-label="title + ' service card'" ref="cardRef">
    <div v-if="image" class="service-image">
      <img :src="image" :alt="title + ' image'" class="w-full h-48 object-cover" loading="lazy" />
    </div>
    <div v-else-if="icon" class="service-icon flex justify-center items-center h-48">
      <i :class="icon"></i>
    </div>
    <div class="service-content p-4">
      <h3 class="service-title text-2xl font-bold text-black mb-2 drop-shadow-sm">{{ title }}</h3>
      <p class="service-description text-gray-700 mb-4">{{ description }}</p>
      <router-link 
        :to="link" 
        class="service-button px-4 py-2 rounded-lg bg-gradient-to-r from-[#42386c] via-[#153695] to-[#143395] text-white font-bold shadow-lg hover:opacity-90 transition"
        :class="buttonClass"
        aria-label="Learn more about {{ title }}"
      >
        Learn More
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
let cardRef = ref(null)
onMounted(() => {
  if (cardRef.value && window.gsap) {
    window.gsap.from(cardRef.value, {
      opacity: 0,
      y: 40,
      duration: 0.7,
      ease: 'power2.out',
      stagger: 0.1
    })
  }
})
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
    default: 'images/service.png'
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
  @apply bg-white/80 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden transition-all duration-300 cursor-pointer border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#143395];
}

.service-card:hover {
  @apply transform -translate-y-2 shadow-xl;
}

.service-card:focus {
  box-shadow: 0 0 0 3px #14339555;
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