<template>
  <div class="relative h-64 w-full overflow-hidden rounded-2xl glass-effect md:h-96 shadow-lg">
    <div class="flex h-full transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(slide, index) in slides" :key="slide.id" class="relative h-full w-full flex-shrink-0">
        <img :src="slide.image" :alt="slide.title" class="h-full w-full object-cover rounded-2xl blur-[2px] scale-105" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-2xl"></div>
        <div class="absolute bottom-8 left-8 right-8">
          <h3 class="mb-2 text-2xl md:text-3xl font-heading text-white drop-shadow-lg">{{ slide.title }}</h3>
          <p class="text-sm md:text-base font-ui text-white/80">{{ slide.description }}</p>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <button @click="prevSlide" class="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full glass-effect border border-white/20 p-2 text-white shadow-lg hover:bg-crypto-primary/60 transition-all duration-200">
      <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <button @click="nextSlide" class="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full glass-effect border border-white/20 p-2 text-white shadow-lg hover:bg-crypto-primary/60 transition-all duration-200">
      <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Indicators -->
    <div class="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
      <button v-for="(slide, index) in slides" :key="index" @click="currentIndex = index" :class="['h-2 w-2 rounded-full transition-all duration-200', currentIndex === index ? 'bg-white shadow-soft scale-125' : 'bg-white/50']"></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
  autoPlay: {
    type: Boolean,
    default: true,
  },
  interval: {
    type: Number,
    default: 4000,
  },
});

const currentIndex = ref(0);
let autoPlayTimer = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.slides.length;
};

const prevSlide = () => {
  currentIndex.value = currentIndex.value === 0 ? props.slides.length - 1 : currentIndex.value - 1;
};

const startAutoPlay = () => {
  if (props.autoPlay && props.slides.length > 1) {
    autoPlayTimer = setInterval(nextSlide, props.interval);
  }
};

const stopAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }
};

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  stopAutoPlay();
});
</script>

<style>
.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.shadow-soft {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.hover\:bg-crypto-primary\/60:hover {
  background-color: rgba(14, 165, 233, 0.6);
}
</style>
