<template>
  <div class="venus-project-content w-full px-0 py-8 md:px-0 max-w-none bg-gradient-to-br from-white via-[#f7faff] to-[#eaf6ff] animate-fade-in text-black min-h-screen">
    <!-- Active TVP Projects Section -->
    <section class="mb-16 px-8 py-8 glassy-bg rounded-xl shadow-lg animate-fade-in-up">
      <h2 class="text-3xl text-center font-bold mb-8 text-gradient">Active TVP Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="project in projects" 
             :key="project.id"
             class="frosted-glass-card border border-blue-500/20 rounded-xl overflow-hidden hover:border-blue-400/40 transition-all animate-pop-in">
          
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
            <button class="mt-6 w-full btn-glass-cta">
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Proposed Projects & Proposals Section -->
    <section class="mb-16 px-8 py-8 glassy-bg rounded-xl shadow-lg animate-fade-in-up">
      <h2 class="text-3xl text-center font-bold mb-8 text-gradient">Proposed Projects & Proposals</h2>
      <Proposals :proposals="allProposals" :filters="proposalFilters" />
    </section>
  </div>
</template>

<script setup>
import { headingClass, subheadingClass } from '@/layouts/layoutClasses'
import Proposals from '@/components/Proposals.vue'
import { allProposals, proposalFilters } from '@/assets/proposals.js'
import { onMounted, nextTick } from 'vue'
import gsap from 'gsap'

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

onMounted(async () => {
  await nextTick();
  if (window.gsap) {
    window.gsap.from('.frosted-glass-card', {
      opacity: 0,
      y: 40,
      stagger: 0.12,
      duration: 0.8,
      ease: 'power2.out',
    });
  }
});
</script>

<style scoped>
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
