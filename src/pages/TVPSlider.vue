<template>
  <Slider3D 
    :slides="slides"
    :loop="loop"
    :autoplay="autoplay"
    :pagination="pagination"
    :navigation="navigation"
    :fullHeight="fullHeight"
    class="tvp-slider"
  >
    <template #extra-content="{ slide }">
      <slot name="extra-content" :slide="slide"></slot>
    </template>
  </Slider3D>
</template>

<script setup>
import { defineProps } from 'vue'
import Slider3D from './Slider3D.vue'

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
      clickable: true,
      bulletClass: 'tvp-bullet',
      bulletActiveClass: 'tvp-bullet-active'
    })
  },
  navigation: {
    type: Boolean,
    default: true
  },
  fullHeight: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.tvp-slider :deep(.swiper-cube-shadow) {
  background: linear-gradient(45deg, rgba(30, 64, 175, 0.3), rgba(0, 0, 0, 0.4));
  filter: blur(20px);
  opacity: 0.6;
}

.tvp-slider :deep(.swiper-button-next),
.tvp-slider :deep(.swiper-button-prev) {
  color: rgba(255, 255, 255, 0.9);
  background: rgba(30, 64, 175, 0.3);
  width: 50px;
  height: 50px;
  border-radius: 25px;
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);
}

.tvp-slider :deep(.swiper-button-next:hover),
.tvp-slider :deep(.swiper-button-prev:hover) {
  color: white;
  background: rgba(30, 64, 175, 0.5);
  transform: scale(1.1);
}

.tvp-slider :deep(.swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  background: rgba(255, 255, 255, 0.6);
  border: 2px solid transparent;
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);
}

.tvp-slider :deep(.swiper-pagination-bullet-active) {
  background: #fff;
  border-color: rgba(59, 130, 246, 0.5);
  transform: scale(1.2);
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
}

.tvp-slider :deep(.slider3d-container) {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(59, 130, 246, 0.1);
}

.tvp-slider :deep(.swiper-cube) {
  box-shadow: none;
  transform-style: preserve-3d;
}

.tvp-slider :deep(.swiper-slide) {
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

.tvp-slider :deep(.swiper-slide-active) {
  z-index: 2;
  transform: translateZ(1px);
}

@keyframes glowPulse {
  0% { box-shadow: 0 0 10px rgba(59, 130, 246, 0.3); }
  50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
  100% { box-shadow: 0 0 10px rgba(59, 130, 246, 0.3); }
}

.tvp-slider :deep(.slider3d-container:hover) {
  animation: glowPulse 2s infinite;
}
</style>
