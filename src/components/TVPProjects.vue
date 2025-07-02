<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div 
      v-for="project in displayedProjects" 
      :key="project.id"
      class="glass-effect !bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 group shadow-xl focus:outline-none focus:ring-2 focus:ring-[#143395] border border-white/20"
      tabindex="0"
      :aria-label="project.title + ' project card'"
      ref="cardRef"
    >
      <div class="relative h-48 overflow-hidden">
        <img 
          :src="project.image" 
          :alt="project.title + ' image'"
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 rounded-t-2xl"
          loading="lazy"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent rounded-t-2xl"></div>
        <div class="absolute top-4 right-4">
          <span :class="[
            'px-2 py-1 rounded-full text-xs font-medium',
            project.status === 'Active' ? 'bg-green-600 text-white' :
            project.status === 'Planning' ? 'bg-yellow-600 text-white' :
            'bg-blue-600 text-white'
          ]">
            {{ project.status }}
          </span>
        </div>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-heading text-white mb-2 drop-shadow-lg">{{ project.title }}</h3>
        <p class="text-white/80 mb-4 font-ui">{{ project.description }}</p>
        <div class="flex items-center justify-between">
          <span class="text-sm text-crypto-primary font-ui">{{ project.category }}</span>
          <button class="text-[#143395] hover:text-[#153695] text-sm font-ui font-medium" aria-label="Learn more about {{ project.title }}">
            Learn More 3
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
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

const props = defineProps({
  limit: {
    type: Number,
    default: null
  }
})

const projects = ref([
  {
    id: 1,
    title: 'Circular City Design',
    description: 'Revolutionary urban planning concept featuring concentric zones for optimal resource distribution and minimal environmental impact.',
    image: '/images/circular-city.jpg',
    category: 'Urban Planning',
    status: 'Active'
  },
  {
    id: 2,
    title: 'Automated Agriculture',
    description: 'Fully automated farming systems using AI and robotics to maximize yield while minimizing resource consumption.',
    image: '/images/automated-farm.jpg',
    category: 'Agriculture',
    status: 'Active'
  },
  {
    id: 3,
    title: 'Ocean Cities',
    description: 'Self-sustaining floating cities designed to harness ocean resources while maintaining ecological balance.',
    image: '/images/ocean-city.jpg',
    category: 'Marine Engineering',
    status: 'Planning'
  },
  {
    id: 4,
    title: 'Atmospheric Processors',
    description: 'Large-scale atmospheric processing systems for climate control and air purification.',
    image: '/images/atmospheric-processor.jpg',
    category: 'Environmental',
    status: 'Research'
  },
  {
    id: 5,
    title: 'Transportation Networks',
    description: 'Integrated transportation systems using magnetic levitation and automated guidance.',
    image: '/images/transport-network.jpg',
    category: 'Transportation',
    status: 'Active'
  },
  {
    id: 6,
    title: 'Energy Distribution',
    description: 'Global renewable energy grid with intelligent distribution and storage systems.',
    image: '/images/energy-grid.jpg',
    category: 'Energy',
    status: 'Planning'
  }
])

const displayedProjects = computed(() => {
  return props.limit ? projects.value.slice(0, props.limit) : projects.value
})
</script>