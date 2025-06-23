<template>
  <!-- Dracoscopia & TVP Chain Vision Proposal Callout -->
  <section class="glassy-bg border-l-4 border-tvp-blue/60 bg-tvp-blue/5 rounded-2xl shadow-lg mb-12 p-6 animate-fade-in-up max-w-4xl mx-auto" aria-label="Dracoscopia & TVP Chain Vision for Proposals">
    <h2 class="mb-2 text-2xl font-bold text-tvp-blue flex items-center gap-2">
      <svg class="inline-block w-7 h-7 text-tvp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m4 0h-1v-4h-1m-4 0h-1v-4h-1"/></svg>
      Proposal Vision: Dracoscopia & TVP Chain
    </h2>
    <p class="text-gray-800">All proposals and new initiatives are designed to be part of the <span class='font-bold text-tvp-blue'>Dracoscopia</span> creative network and validated on the <span class='font-bold text-tvp-blue'>TVP Chain</span> blockchain. This ensures that every idea, from sustainable cities to planetary habitats, is transparent, collaborative, and future-ready—empowering humanity to build a legacy of ethical, decentralized progress.</p>
    <div class="mt-6 text-center">
      <router-link to="/OutpostProposal" class="inline-block rounded-lg bg-gradient-to-r from-tvp-blue via-tvp-teal to-tvp-purple px-6 py-3 text-white font-bold shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-tvp-blue" aria-label="Submit your proposal">Submit Your Proposal</router-link>
    </div>
  </section>
  <!-- Dracoscopia & TVP Chain Advisory Callout -->
  <section class="glassy-bg rounded-2xl shadow-lg mb-12 p-6 border-l-4 border-tvp-blue/60 bg-tvp-blue/5 animate-fade-in-up" aria-label="Advisory Focus: Dracoscopia & TVP Chain">
    
    <!-- <p class="text-gray-800">Our advisors are actively guiding the integration of the <span class="font-bold text-tvp-blue">Dracoscopia</span> creative network and the <span class="font-bold text-tvp-blue">TVP Chain</span> blockchain. Their expertise ensures that every project, partnership, and proposal leverages this secure, transparent, and collaborative infrastructure for a sustainable future.</p> -->
  </section>
  <!-- Advisors Section -->
  <section class="glassy-bg rounded-3xl shadow-xl p-8 animate-fade-in-up" aria-label="Our Advisors">
    <h1 class="text-3xl md:text-4xl font-extrabold text-gradient mb-8 text-center">Our Advisors</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <BaseCard 
        v-for="advisor in advisors" 
        :key="advisor.id"
        customClass="frosted-glass-card bg-white/80 rounded-3xl p-6 text-center animate-pop-in focus:outline-none focus:ring-2 focus:ring-tvp-blue"
        tabindex="0"
        :aria-label="advisor.name + ', ' + advisor.title"
      >
        <div class="relative w-24 h-24 mx-auto mb-4">
          <img 
            :src="advisor.image" 
            :alt="advisor.name + ' portrait'"
            class="w-full h-full rounded-full object-cover shadow-lg"
            loading="lazy"
          >
        </div>
        <h3 class="text-xl font-bold text-tvp-blue mb-2">{{ advisor.name }}</h3>
        <p class="text-tvp-purple font-medium mb-3">{{ advisor.title }}</p>
        <p class="text-gray-800 text-sm mb-4">{{ advisor.bio }}</p>
        <div class="flex justify-center space-x-3">
          <a 
            v-if="advisor.linkedin" 
            :href="advisor.linkedin" 
            target="_blank"
            aria-label="LinkedIn profile for {{ advisor.name }}"
            class="text-tvp-blue hover:text-tvp-teal transition-colors"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a 
            v-if="advisor.twitter" 
            :href="advisor.twitter" 
            target="_blank"
            aria-label="Twitter profile for {{ advisor.name }}"
            class="text-tvp-blue hover:text-tvp-teal transition-colors"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a 
            v-if="advisor.website" 
            :href="advisor.website" 
            target="_blank"
            aria-label="Website for {{ advisor.name }}"
            class="text-tvp-blue hover:text-tvp-teal transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9a9 9 0 00-9 9m0 0a9 9 0 009-9" />
            </svg>
          </a>
        </div>
      </BaseCard>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const advisors = ref([
  {
    id: 1,
    name: 'Roxanne Meadows',
    title: 'Co-founder & Director',
    bio: 'Architectural designer and co-founder of The Venus Project, continuing Jacque Fresco\'s vision.',
    image: '/images/roxanne-meadows.jpg',
    linkedin: 'https://linkedin.com/in/roxanne-meadows',
    website: 'https://thevenusproject.com'
  },
  {
    id: 2,
    name: 'Dr. Elena Rodriguez',
    title: 'Systems Engineer',
    bio: 'Expert in sustainable systems design and renewable energy integration.',
    image: '/images/elena-rodriguez.jpg',
    linkedin: 'https://linkedin.com/in/elena-rodriguez',
    twitter: 'https://twitter.com/elena_systems'
  },
  {
    id: 3,
    name: 'Prof. Michael Chen',
    title: 'Urban Planning Advisor',
    bio: 'Leading researcher in sustainable urban development and smart city technologies.',
    image: '/images/michael-chen.jpg',
    linkedin: 'https://linkedin.com/in/michael-chen-urban',
    website: 'https://sustainablecities.org'
  },
  {
    id: 4,
    name: 'Dr. Sarah Johnson',
    title: 'Environmental Scientist',
    bio: 'Climate change researcher focused on ecosystem restoration and biodiversity.',
    image: '/images/sarah-johnson.jpg',
    linkedin: 'https://linkedin.com/in/sarah-johnson-env',
    twitter: 'https://twitter.com/sarahclimate'
  },
  {
    id: 5,
    name: 'David Kim',
    title: 'Technology Advisor',
    bio: 'AI and automation specialist working on human-centered technology solutions.',
    image: '/images/david-kim.jpg',
    linkedin: 'https://linkedin.com/in/david-kim-tech',
    website: 'https://humantech.ai'
  },
  {
    id: 6,
    name: 'Dr. Maria Santos',
    title: 'Social Systems Analyst',
    bio: 'Sociologist studying the transition to resource-based economic models.',
    image: '/images/maria-santos.jpg',
    linkedin: 'https://linkedin.com/in/maria-santos-social',
    twitter: 'https://twitter.com/mariasocial'
  }
])
</script>