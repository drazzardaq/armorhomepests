<template>
  <div class="space-y-8">
    <div v-for="slide in slides" :key="slide.id" class="overflow-hidden rounded-lg bg-white/5 transition-colors hover:bg-white/10">
      <div class="md:flex">
        <div class="md:w-1/3">
          <img :src="slide.image" :alt="slide.title" class="h-48 w-full object-cover md:h-full" />
        </div>
        <div class="p-6 md:w-2/3">
          <h3 class="mb-3 text-2xl font-bold text-white">{{ slide.title }}</h3>
          <p class="mb-4 text-gray-300">{{ slide.description }}</p>
          <div v-if="slide.features" class="space-y-2">
            <h4 class="font-semibold text-gray-200">Key Features:</h4>
            <ul class="space-y-1 text-sm text-gray-400">
              <li v-for="feature in slide.features" :key="feature">• {{ feature }}</li>
            </ul>
          </div>
          <button v-if="slide.action" class="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">
            {{ slide.action }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  slides: {
    type: Array,
    default: () => [],
  },
});

// Default slides if none provided
const defaultSlides = [
  {
    id: 1,
    title: "Circular City Design",
    description: "Revolutionary urban planning that maximizes efficiency while minimizing environmental impact through intelligent resource distribution.",
    image: "/images/circular-city-detail.jpg",
    features: ["Concentric zone organization", "Automated transportation", "Integrated green spaces", "Resource recycling systems"],
    action: "Explore Design",
  },
  {
    id: 2,
    title: "Sustainable Agriculture",
    description: "Advanced farming techniques using automation, hydroponics, and AI to produce maximum yield with minimal resource consumption.",
    image: "/images/sustainable-agriculture.jpg",
    features: ["Automated crop management", "Hydroponic systems", "AI-driven optimization", "Zero waste production"],
    action: "Learn More",
  },
  {
    id: 3,
    title: "Clean Energy Grid",
    description: "Comprehensive renewable energy network with intelligent distribution and storage capabilities for global sustainability.",
    image: "/images/clean-energy.jpg",
    features: ["Solar and wind integration", "Smart grid technology", "Energy storage systems", "Global distribution network"],
    action: "View Details",
  },
];

const slides = ref(props.slides.length > 0 ? props.slides : defaultSlides);
</script>
