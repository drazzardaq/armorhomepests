<template>
  <div
    :class="['planet-card', 'bg-white/80', 'backdrop-blur-lg', 'border', 'border-black/10', 'shadow-xl', 'transition-transform', 'hover:scale-105', 'hover:shadow-2xl', 'duration-300', 'flex', 'flex-col', 'justify-start', 'items-start', 'p-4', 'md:p-6', 'rounded-2xl', 'mb-4', 'min-h-[350px]', 'w-full', 'max-w-md', 'mx-auto', 'focus:outline-none', 'focus:ring-2', 'focus:ring-[#143395]']"
    ref="cardRef"
    tabindex="0"
    :aria-label="'Planet card for ' + name"
  >
    <div class="overflow-hidden rounded-xl w-full mb-4">
      <img :src="image" :alt="name + ' image'" class="w-full h-40 md:h-48 object-cover object-center bg-black/10" loading="lazy" />
    </div>
    <h2 class="text-2xl font-bold mb-2 text-black drop-shadow-sm">{{ name }}</h2>
    <p class="mb-4 text-gray-700 text-base md:text-lg">{{ description }}</p>
    <ul class="mb-2 list-disc ml-6 text-gray-800 text-sm md:text-base">
      <li v-for="fact in facts" :key="fact">{{ fact }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// For GSAP animation
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
  name: String,
  description: String,
  image: String,
  gradientColors: Array,
  facts: Array
});
</script>

<style scoped>
.planet-card {
  box-shadow: 0 8px 32px 0 rgba(31,38,135,0.10);
  outline: none;
}
.planet-card:focus {
  box-shadow: 0 0 0 3px #14339555;
}
</style>
