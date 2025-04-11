<template>
  <div class="relative w-full overflow-hidden rounded-xl">
    <!-- Slider Container -->
    <div 
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div 
        v-for="(slide, index) in slides" 
        :key="index"
        class="w-full flex-shrink-0"
      >
        <div class="relative aspect-[16/9]">
          <img 
            :src="require(`@/assets/${slide.image}`)" 
            :alt="slide.title"
            class="w-full h-full object-cover"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-dark-gray/80 to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 class="text-2xl font-bold mb-2">{{ slide.title }}</h3>
            <p class="text-gray-200">{{ slide.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Arrows -->
    <button 
      @click="prev"
      class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary-blue p-2 rounded-full shadow-lg transition-all duration-200"
      :class="{ 'opacity-50 cursor-not-allowed': currentIndex === 0 }"
    >
      <i class="fas fa-chevron-left"></i>
    </button>
    <button 
      @click="next"
      class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary-blue p-2 rounded-full shadow-lg transition-all duration-200"
      :class="{ 'opacity-50 cursor-not-allowed': currentIndex === slides.length - 1 }"
    >
      <i class="fas fa-chevron-right"></i>
    </button>

    <!-- Dots Navigation -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      <button 
        v-for="(_, index) in slides" 
        :key="index"
        @click="goToSlide(index)"
        class="w-2 h-2 rounded-full transition-all duration-200"
        :class="currentIndex === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  slides: {
    type: Array,
    required: true
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  interval: {
    type: Number,
    default: 5000
  }
});

const currentIndex = ref(0);
let autoplayInterval;

const next = () => {
  if (currentIndex.value < props.slides.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
};

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = props.slides.length - 1;
  }
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

const startAutoplay = () => {
  if (props.autoplay) {
    autoplayInterval = setInterval(next, props.interval);
  }
};

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }
};

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>