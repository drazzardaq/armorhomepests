<template>
  <div class="tvp-timeline bg-gradient-to-br from-blue-900/80 to-gray-900/80 rounded-xl p-8">
    <h2 class="text-3xl font-bold mb-8 text-blue-200">Project Timeline</h2>
    
    <div class="relative">
      <!-- Timeline Line -->
      <div class="absolute h-full w-0.5 bg-blue-500/30 left-8 md:left-1/2 transform -translate-x-1/2"></div>
      
      <!-- Timeline Events -->
      <div class="space-y-8">
        <div v-for="(event, index) in timelineEvents" 
             :key="index"
             class="relative flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8">
          <!-- Event Date -->
          <div :class="[
            'md:text-right',
            'p-4',
            index % 2 === 0 ? 'md:order-1' : 'md:order-2'
          ]">
            <span class="text-blue-300 font-bold">{{ event.date }}</span>
          </div>
          
          <!-- Event Content -->
          <div :class="[
            'relative',
            'bg-blue-900/20',
            'border',
            'border-blue-500/20',
            'rounded-xl',
            'p-6',
            'ml-8',
            'md:ml-0',
            index % 2 === 0 ? 'md:order-2' : 'md:order-1'
          ]">
            <!-- Timeline Dot -->
            <div class="absolute left-0 top-1/2 transform -translate-x-12 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
            
            <h3 class="text-xl font-bold text-blue-200 mb-2">{{ event.title }}</h3>
            <p class="text-gray-300">{{ event.description }}</p>
            
            <div v-if="event.achievements" class="mt-4">
              <h4 class="text-blue-300 font-semibold mb-2">Key Achievements:</h4>
              <ul class="list-disc list-inside text-gray-300 space-y-1">
                <li v-for="(achievement, aIndex) in event.achievements" 
                    :key="aIndex">{{ achievement }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { headingClass, subheadingClass } from '@/layouts/layoutClasses'

const timelineEvents = [
  {
    date: '2024',
    title: 'Project Inception',
    description: 'Launch of The Venus Project\'s global initiative for sustainable development.',
    achievements: [
      'Establishment of international partnerships',
      'Development of initial resource-based economy framework',
      'Creation of educational programs'
    ]
  },
  {
    date: '2025',
    title: 'Research & Development Phase',
    description: 'Advancement in sustainable technologies and social systems design.',
    achievements: [
      'Completion of first sustainable city prototype',
      'Implementation of renewable energy systems',
      'Launch of global resource management platform'
    ]
  },
  {
    date: '2026',
    title: 'Global Implementation',
    description: 'Worldwide adoption of Venus Project principles and technologies.',
    achievements: [
      'Integration with existing infrastructure',
      'Training of regional coordinators',
      'Establishment of resource distribution networks'
    ]
  },
  {
    date: '2027',
    title: 'Future Expansion',
    description: 'Extension of project scope to include space colonization and terraforming.',
    achievements: [
      'Development of space habitat prototypes',
      'Research into terraforming technologies',
      'International space cooperation agreements'
    ]
  }
]
</script>

<style scoped>
.tvp-timeline {
  position: relative;
  z-index: 1;
}

/* Timeline animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Timeline line gradient effect */
.tvp-timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 8px;
  right: 8px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent);
}
</style>
