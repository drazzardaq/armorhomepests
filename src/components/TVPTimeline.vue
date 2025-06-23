<template>
  <div class="relative">
    <!-- Timeline Line -->
    <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-500"></div>
    
    <div class="space-y-8">
      <div 
        v-for="event in displayedEvents" 
        :key="event.id"
        class="relative flex items-start"
      >
        <!-- Timeline Dot -->
        <div class="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900"></div>
        
        <!-- Content -->
        <div class="ml-16 bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-bold text-white">{{ event.title }}</h3>
            <span class="text-blue-400 font-medium">{{ event.year }}</span>
          </div>
          <p class="text-gray-300 mb-3">{{ event.description }}</p>
          <div v-if="event.achievements" class="space-y-1">
            <h4 class="text-sm font-semibold text-gray-200">Key Achievements:</h4>
            <ul class="text-sm text-gray-400 space-y-1">
              <li v-for="achievement in event.achievements" :key="achievement">
                • {{ achievement }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  limit: {
    type: Number,
    default: null
  }
})

const events = ref([
  {
    id: 1,
    year: '1916',
    title: 'Jacque Fresco Born',
    description: 'Jacque Fresco is born in New York City, beginning a life dedicated to innovation and social design.',
    achievements: [
      'Early interest in invention and design',
      'Self-taught approach to learning'
    ]
  },
  {
    id: 2,
    year: '1940s',
    title: 'Early Career',
    description: 'Fresco begins his career as an industrial designer, working on various projects including aircraft design.',
    achievements: [
      'Aircraft design innovations',
      'Industrial design projects',
      'Early social observations'
    ]
  },
  {
    id: 3,
    year: '1960s',
    title: 'Sociocyberneering',
    description: 'Development of sociocyberneering concepts, applying cybernetics to social systems.',
    achievements: [
      'Cybernetic social theory',
      'Systems thinking approach',
      'Early automation concepts'
    ]
  },
  {
    id: 4,
    year: '1975',
    title: 'Venus Project Founded',
    description: 'Jacque Fresco establishes The Venus Project in Venus, Florida, with partner Roxanne Meadows.',
    achievements: [
      'Research center established',
      'Model city designs',
      'Educational programs launched'
    ]
  },
  {
    id: 5,
    year: '1990s',
    title: 'Global Outreach',
    description: 'The Venus Project begins international outreach through lectures, documentaries, and publications.',
    achievements: [
      'International lectures',
      'Documentary productions',
      'Book publications'
    ]
  },
  {
    id: 6,
    year: '2006',
    title: 'Future by Design',
    description: 'Release of the documentary "Future by Design" brings global attention to The Venus Project.',
    achievements: [
      'Worldwide documentary release',
      'Increased public awareness',
      'Educational partnerships'
    ]
  },
  {
    id: 7,
    year: '2011',
    title: 'Zeitgeist Movement',
    description: 'Collaboration with The Zeitgeist Movement spreads Venus Project ideas globally.',
    achievements: [
      'Global movement partnership',
      'Worldwide chapters established',
      'Youth engagement programs'
    ]
  },
  {
    id: 8,
    year: '2017',
    title: 'Jacque Fresco Passes',
    description: 'Jacque Fresco passes away at age 101, leaving behind a legacy of innovation and vision.',
    achievements: [
      'Century of innovation',
      'Global impact achieved',
      'Legacy continues through TVP'
    ]
  },
  {
    id: 9,
    year: '2018-Present',
    title: 'Continuing the Vision',
    description: 'The Venus Project continues under Roxanne Meadows, advancing research and education.',
    achievements: [
      'Ongoing research projects',
      'Educational initiatives',
      'Technology development'
    ]
  }
])

const displayedEvents = computed(() => {
  return props.limit ? events.value.slice(0, props.limit) : events.value
})
</script>