<template>
  <div class="testimonial-card bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-6 focus:outline-none focus:ring-2 focus:ring-[#143395] transition-all duration-300" tabindex="0" :aria-label="'Testimonial by ' + name" ref="cardRef">
    <div class="flex items-center mb-4">
      <img :src="image" :alt="name + ' photo'" class="w-12 h-12 rounded-full mr-4 object-cover" loading="lazy" />
      <div>
        <p class="testimonial-author font-bold text-[#42386c]">{{ name }}</p>
        <div class="flex text-yellow-400">
          <i v-for="n in 5" :key="n" class="fas fa-star"></i>
        </div>
      </div>
    </div>
    <p class="testimonial-text text-gray-700 italic">"{{ text }}"</p>
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
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: 'https://randomuser.me/api/portraits/men/4.jpg',
    required: true
  },
  text: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.testimonial-card {
  @apply bg-white rounded-lg shadow-lg p-6;
}

.testimonial-author {
  @apply text-lg;
}

.testimonial-text {
  @apply text-gray-800 italic;
}

.testimonial-card:focus {
  box-shadow: 0 0 0 3px #14339555;
}
</style>