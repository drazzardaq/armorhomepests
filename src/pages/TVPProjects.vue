<template>
  <div class="tvp-projects bg-white/90 text-black rounded-xl py-8 shadow-2xl">
    <h2 class="text-3xl text-center font-bold mb-8 text-gradient bg-gradient-to-r from-tvp-purple via-tvp-blue to-tvp-teal bg-clip-text text-transparent">Active Projects</h2>
    
    <!-- Project Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="project in projects" 
           :key="project.id"
           class="project-card frosted-glass-card border border-blue-500/20 rounded-xl overflow-hidden hover:border-blue-400/40 transition-all">
        
        <!-- Project Image -->
        <div class="aspect-w-16 aspect-h-9">
          <img :src="project.image" :alt="project.title" class="w-full h-full object-cover">
        </div>
        
        <!-- Project Content -->
        <div class="p-6">
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-xl font-bold text-tvp-blue">{{ project.title }}</h3>
            <span :class="[
              'px-2 py-1 text-xs font-semibold rounded-full',
              statusColors[project.status]
            ]">
              {{ project.status }}
            </span>
          </div>
          
          <p class="text-gray-700 mb-4">{{ project.description }}</p>
          
          <!-- Progress Bar -->
          <div class="mb-4">
            <div class="flex justify-between text-sm text-tvp-blue mb-1">
              <span>Progress</span>
              <span>{{ project.progress }}%</span>
            </div>
            <div class="w-full h-2 bg-blue-900/10 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-tvp-purple via-tvp-blue to-tvp-teal rounded-full transition-all duration-500"
                   :style="{ width: project.progress + '%' }"></div>
            </div>
          </div>
          
          <!-- Project Details -->
          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span class="text-gray-400">Location:</span>
              <span class="text-tvp-blue">{{ project.location }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Team Size:</span>
              <span class="text-tvp-blue">{{ project.teamSize }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Start Date:</span>
              <span class="text-tvp-blue">{{ project.startDate }}</span>
            </div>
          </div>
          
          <!-- Action Button -->
          <button class="mt-6 w-full bg-gradient-to-r from-tvp-blue to-tvp-teal text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:opacity-90 transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { headingClass, subheadingClass } from '@/layouts/layoutClasses'

const statusColors = {
  'Active': 'bg-green-500/20 text-green-400',
  'Planning': 'bg-blue-500/20 text-blue-400',
  'Completed': 'bg-purple-500/20 text-purple-400',
  'On Hold': 'bg-yellow-500/20 text-yellow-400'
}

const projects = [
  {
    id: 1,
    title: 'Circular City Development',
    description: 'Construction of a self-sustainable city prototype incorporating advanced renewable energy systems.',
    status: 'Active',
    progress: 75,
    location: 'Venus, Florida',
    teamSize: '250+',
    startDate: '2024-12',
    image: '/images/tvp/circular-city.jpg'
  },
  {
    id: 2,
    title: 'Global Resource Survey',
    description: 'Comprehensive mapping of Earth\'s resources to optimize distribution and utilization.',
    status: 'Planning',
    progress: 30,
    location: 'Global',
    teamSize: '100+',
    startDate: '2025-01',
    image: '/images/tvp/resource-survey.jpg'
  },
  {
    id: 3,
    title: 'Ocean Restoration',
    description: 'Implementation of advanced technologies for ocean cleanup and ecosystem restoration.',
    status: 'Active',
    progress: 45,
    location: 'Pacific Ocean',
    teamSize: '150+',
    startDate: '2025-03',
    image: '/images/tvp/ocean-restoration.jpg'
  },
  {
    id: 4,
    title: 'Automated Agriculture',
    description: 'Development of fully automated vertical farming systems for sustainable food production.',
    status: 'Planning',
    progress: 15,
    location: 'Multiple Locations',
    teamSize: '75+',
    startDate: '2025-06',
    image: '/images/tvp/vertical-farming.jpg'
  }
]
</script>

<style scoped>
.project-card {
  backdrop-filter: blur(16px) saturate(180%);
  background: rgba(255,255,255,0.7);
  border: 1.5px solid rgba(66,56,108,0.15);
  box-shadow: 0 8px 32px 0 rgba(31,38,135,0.15);
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1),
              0 2px 4px -1px rgba(59, 130, 246, 0.06);
}

.aspect-w-16 {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
}

.aspect-w-16 > img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.frosted-glass-card {
  background: rgba(255,255,255,0.7);
  backdrop-filter: blur(16px) saturate(180%);
  border: 1.5px solid rgba(66,56,108,0.15);
  box-shadow: 0 8px 32px 0 rgba(31,38,135,0.15);
}

.text-gradient {
  background: linear-gradient(90deg, #42386c, #153695, #00deff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.text-tvp-blue {
  color: #153695;
}
</style>
