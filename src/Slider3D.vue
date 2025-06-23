<template>
  <div class="slider3d-container" :class="{ 'full-height': fullHeight }" aria-label="3D Image Slider" tabindex="0" role="region">
    <swiper-container 
      :slides-per-view="1"
      :speed="1000"
      :effect="'cube'"
      :loop="loop"
      :autoplay="autoplay"
      :pagination="pagination"
      :navigation="navigation"
      :cube-effect="{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94
      }"
      class="slider3d"
      style="min-height: 220px; height: 320px; max-height: 60vw;"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index" class="slider3d-slide" tabindex="0" role="group" :aria-label="slide.alt">
        <div class="relative h-full">
          <img 
            :src="slide.image" 
            :alt="slide.alt" 
            class="w-full h-full object-cover"
            :class="imageClass"
          />
          <div v-if="slide.showText" class="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div class="text-center text-white px-2 md:px-4">
              <h2 class="text-2xl md:text-6xl font-bold mb-4 md:mb-6 text-white animate-fade-in">{{ slide.title }}</h2>
              <p class="text-base md:text-xl text-white/90 mb-4 md:mb-8 max-w-3xl mx-auto animate-fade-in" style="animation-delay: 0.2s">{{ slide.description }}</p>
              <slot name="extra-content" :slide="slide"></slot>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  slides: {
    type: Array,
    required: true
  },
  loop: {
    type: Boolean,
    default: true
  },
  autoplay: {
    type: Object,
    default: () => ({
      delay: 5000,
      disableOnInteraction: false
    })
  },
  pagination: {
    type: Object,
    default: () => ({
      clickable: true
    })
  },
  navigation: {
    type: Boolean,
    default: true
  },
  fullHeight: {
    type: Boolean,
    default: false
  },
  imageClass: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.slider3d-container {
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;
}

.slider3d-container.full-height {
  height: 100vh;
}

.slider3d {
  width: 100%;
  height: 100%;
}

.slider3d-slide {
  width: 100%;
  height: 100%;
}

:deep(.swiper-cube-shadow) {
  background: rgba(0, 0, 0, 0.4);
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
