<template>
  <div class="testimonial-card">
    <div class="flex items-center mb-4">
      <img :src="image" :alt="name" class="w-12 h-12 rounded-full mr-4">
      <div>
        <p class="testimonial-author font-bold text-black">{{ name }}</p>
        <div class="flex text-yellow-400">
          <i v-for="n in 5" :key="n" class="fas fa-star"></i>
        </div>
      </div>
    </div>
    <p class="testimonial-text text-black">"{{ text }}"</p>
  </div>
</template>

<script setup>
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
</style>