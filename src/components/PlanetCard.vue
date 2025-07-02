<template>
  <div :class="['planet-card', 'bg-white/80', 'backdrop-blur-lg', 'border', 'border-black/10', 'shadow-xl', 'transition-transform', 'hover:scale-105', 'hover:shadow-2xl', 'duration-300', 'flex', 'flex-col', 'justify-start', 'items-start', 'p-4', 'md:p-6', 'rounded-2xl', 'mb-4', 'min-h-[400px]', 'w-full', 'max-w-full', 'mx-auto', 'focus:outline-none', 'focus:ring-2', 'focus:ring-[#143395]']" ref="cardRef" tabindex="0" :aria-label="'Planet card for ' + name">
    <div class="mb-4 w-full overflow-hidden rounded-xl">
      <img :src="image" :alt="name + ' image'" class="h-40 w-full bg-black/10 object-cover object-center md:h-48" loading="lazy" />
    </div>
    <h2 class="px-6 mb-2 text-2xl font-bold text-black drop-shadow-sm">{{ name }}</h2>
    <p class="px-6 mb-4 text-base text-gray-700 md:text-lg">{{ description }}</p>
    <ul class="pl-6 mb-2 flex flex-col !text-xs text-gray-900">
      <li v-for="fact in facts" :key="fact" class="!text-sm flex items-center justify-start">
        <font-awesome-icon icon="circle" size="sm" class="mr-2 -ml-3" fixed-width />
        <span>{{ fact }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
// For GSAP animation
let cardRef = ref(null);

onMounted(() => {
  if (cardRef.value && window.gsap) {
    window.gsap.from(cardRef.value, {
      opacity: 0,
      y: 40,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.1,
    });
  }
});

defineProps({
  name: String,
  description: String,
  image: String,
  gradientColors: Array,
  facts: Array,
});
</script>

<style scoped>
.planet-card {
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
  padding: 0!important;
  outline: none;
}
.planet-card:focus {
  box-shadow: 0 0 0 3px #14339555;
}
</style>
