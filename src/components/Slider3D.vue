<template>
  <div class="relative h-96 w-full overflow-hidden rounded-lg bg-black/20">
    <div class="flex h-full items-center justify-center">
      <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(item, index) in items" :key="item.id" class="relative w-full flex-shrink-0">
          <img :src="item.image" :alt="item.title" class="h-96 w-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          <div class="absolute bottom-8 left-8 right-8">
            <h3 class="mb-2 text-2xl font-bold text-white">{{ item.title }}</h3>
            <p class="text-gray-300">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <button @click="prevSlide" class="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70">
      <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <button @click="nextSlide" class="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70">
      <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Indicators -->
    <div class="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
      <button v-for="(item, index) in items" :key="index" @click="currentIndex = index" :class="['h-3 w-3 rounded-full transition-colors', currentIndex === index ? 'bg-white' : 'bg-white/50']"></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  autoPlay: {
    type: Boolean,
    default: true,
  },
  interval: {
    type: Number,
    default: 5000,
  },
});

const currentIndex = ref(0);
let autoPlayTimer = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.items.length;
};

const prevSlide = () => {
  currentIndex.value = currentIndex.value === 0 ? props.items.length - 1 : currentIndex.value - 1;
};

const startAutoPlay = () => {
  if (props.autoPlay) {
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
