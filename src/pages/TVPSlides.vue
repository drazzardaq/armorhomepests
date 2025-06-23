<!-- Template for TVP Slides with enhanced features -->
<template>
  <section class="tvp-slides relative py-16 bg-gradient-to-b from-dark-navy to-dark-purple">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-white mb-12 text-center">
        Terraforming Value Proposition
      </h2>
      
      <TVPSlider
        :slides="slides"
        :autoplay="{ delay: 6000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        :navigation="true"
        :loop="true"
        class="h-[600px] w-full rounded-xl overflow-hidden"
      >
        <template #extra-content="{ slide }">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="bg-black bg-opacity-50 p-8 rounded-xl max-w-2xl text-center backdrop-blur-sm">
              <h3 class="text-3xl font-bold text-white mb-4">{{ slide.title }}</h3>
              <p class="text-lg text-gray-200">{{ slide.description }}</p>
              <div v-if="slide.stats" class="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                <div v-for="(stat, index) in slide.stats" :key="index" class="text-center">
                  <div class="text-2xl font-bold text-blue-400">{{ stat.value }}</div>
                  <div class="text-sm text-gray-300">{{ stat.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </TVPSlider>
    </div>
  </section>
</template>

<script setup>
import TVPSlider from './TVPSlider.vue'

const slides = [
  {
    title: "Mars Terraforming Initiative",
    description: "Transform Mars into a habitable world through advanced terraforming technologies and sustainable development practices.",
    image: "/images/planets/mars.jpg",
    stats: [
      { value: "2.5x", label: "Gravity Increase" },
      { value: "15°C", label: "Target Temperature" },
      { value: "21%", label: "Oxygen Level Goal" }
    ]
  },
  {
    title: "Venus Atmospheric Processing",
    description: "Revolutionize Venus's hostile environment through atmospheric carbon capture and temperature regulation systems.",
    image: "/images/planets/venus.jpg",
    stats: [
      { value: "-400°C", label: "Temperature Reduction" },
      { value: "90%", label: "Pressure Decrease" },
      { value: "H2O", label: "Water Integration" }
    ]
  },
  {
    title: "Lunar Outpost Development",
    description: "Establish sustainable lunar bases as stepping stones for further solar system exploration and resource utilization.",
    image: "/images/planets/moon.jpg",
    stats: [
      { value: "24/7", label: "Operations" },
      { value: "1000+", label: "Capacity" },
      { value: "H3", label: "Resource Mining" }
    ]
  }
]
</script>

<style scoped>
.tvp-slides {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 100%);
    pointer-events: none;
  }
}
</style>
