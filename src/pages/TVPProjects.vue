<template>
  <div
    class="venus-project-content min-h-screen w-full max-w-none animate-fade-in bg-gradient-to-br from-white via-[#f7faff] to-[#eaf6ff] px-0 py-8 text-black md:px-0">
    <!-- Dracoscopia & TVP Chain Vision Callout -->
    <section class="glassy-bg border-l-4 border-tvp-blue/60 bg-tvp-blue/5 rounded-2xl shadow-lg mb-12 p-6 animate-fade-in-up max-w-4xl mx-auto"
      aria-label="Dracoscopia & TVP Chain Vision for Proposals">
      <h3 class="mb-2 text-2xl font-bold text-tvp-blue flex items-center gap-2">
        <svg class="inline-block w-7 h-7 text-tvp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m4 0h-1v-4h-1m-4 0h-1v-4h-1" />
        </svg>
        Proposal Infrastructure: Dracoscopia & TVP Chain
      </h3>
      <p class="text-gray-800">All proposals for TVP projects are designed to leverage the <span class="font-bold text-tvp-blue">Dracoscopia</span>
        creative network and the <span class="font-bold text-tvp-blue">TVP Chain</span> blockchain. This ensures transparent
        tracking, open collaboration, and secure resource management for every initiative. Our infrastructure vision includes
        decentralized data centers, community-driven governance, and scalable, ethical technology for a sustainable future.
      </p>
      <div class="mt-6 text-center">
        <router-link to="/OutpostProposal" class="inline-block rounded-lg bg-gradient-to-r from-tvp-blue via-tvp-teal to-tvp-purple px-6 py-3 text-white font-bold shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-tvp-blue" aria-label="Submit your project proposal">Submit Your Project Proposal</router-link>
      </div>
    </section>

    <!-- Active TVP Projects Section -->
    <section class="glassy-bg animate-fade-in-up mx-auto mb-16 max-w-7xl rounded-xl shadow-lg">
      <h2 class="text-gradient mb-8 text-center text-3xl font-bold">Active TVP Projects</h2>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <BaseCard v-for="project in projects" :key="project.id"
          customClass="frosted-glass-card border border-blue-500/20 rounded-xl overflow-hidden hover:border-blue-400/40 transition-all animate-pop-in">
          <!-- Project Image -->
          <div class="aspect-w-16 aspect-h-9">
            <img :src="project.image" :alt="project.title" class="h-full w-full object-cover" />
          </div>

          <!-- Project Content -->
          <div class="p-6">
            <div class="mb-4 flex items-start justify-between">
              <h3 class="text-xl font-bold text-tvp-blue">{{ project.title }}</h3>
              <span :class="['rounded-full px-2 py-1 text-xs font-semibold', statusColors[project.status]]">
                {{ project.status }}
              </span>
            </div>

            <p class="mb-4 text-gray-700">{{ project.description }}</p>

            <!-- Progress Bar -->
            <div class="mb-4">
              <div class="mb-1 flex justify-between text-sm text-tvp-blue">
                <span>Progress</span>
                <span>{{ project.progress }}%</span>
              </div>
              <div class="h-2 w-full overflow-hidden rounded-full bg-blue-900/10">
                <div
                  class="h-full rounded-full bg-gradient-to-r from-tvp-purple via-tvp-blue to-tvp-teal transition-all duration-500"
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
            <BaseButton color="primary" class="mt-6 w-full">Get Involved</BaseButton>
          </div>
        </BaseCard>
      </div>
    </section>

    <!-- Proposed Projects & Proposals Section -->
    <!-- <section class="glassy-bg animate-fade-in-up mb-16 rounded-xl !p-0 max-w-7xl mx-auto shadow-lg"> -->
      <Proposals :proposals="allProposals" :filters="proposalFilters" />
    <!-- </section> -->
  </div>
</template>

<script setup>
import { headingClass, subheadingClass } from "@/layouts/layoutClasses";
import Proposals from "@/components/Proposals.vue";
import { allProposals, proposalFilters } from "@/assets/proposals.js";
import { onMounted, nextTick } from "vue";
import gsap from "gsap";

const statusColors = {
  Active: "bg-green-500/20 text-green-400",
  Planning: "bg-blue-500/20 text-blue-400",
  Completed: "bg-purple-500/20 text-purple-400",
  "On Hold": "bg-yellow-500/20 text-yellow-400",
};

const projects = [
  {
    id: 1,
    title: "Circular City Development",
    description: "Construction of a self-sustainable city prototype incorporating advanced renewable energy systems.",
    status: "Active",
    progress: 75,
    location: "Venus, Florida",
    teamSize: "250+",
    startDate: "2024-12",
    image: "/images/tvp/circular-city.jpg",
  },
  {
    id: 2,
    title: "Global Resource Survey",
    description: "Comprehensive mapping of Earth's resources to optimize distribution and utilization.",
    status: "Planning",
    progress: 30,
    location: "Global",
    teamSize: "100+",
    startDate: "2025-01",
    image: "/images/tvp/resource-survey.jpg",
  },
  {
    id: 3,
    title: "Ocean Restoration",
    description: "Implementation of advanced technologies for ocean cleanup and ecosystem restoration.",
    status: "Active",
    progress: 45,
    location: "Pacific Ocean",
    teamSize: "150+",
    startDate: "2025-03",
    image: "/images/tvp/ocean-restoration.jpg",
  },
  {
    id: 4,
    title: "Automated Agriculture",
    description: "Development of fully automated vertical farming systems for sustainable food production.",
    status: "Planning",
    progress: 15,
    location: "Multiple Locations",
    teamSize: "75+",
    startDate: "2025-06",
    image: "/images/tvp/vertical-farming.jpg",
  },
];

onMounted(async () => {
  await nextTick();
  if (window.gsap) {
    window.gsap.from(".frosted-glass-card", {
      opacity: 0,
      y: 40,
      stagger: 0.12,
      duration: 0.8,
      ease: "power2.out",
    });
  }
});
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(90deg, #42386c, #153695, #143395);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-tvp-blue {
  color: #153695;
}
</style>

<SeoHead
  title="TVP Projects | Building the Future"
  description="Explore active and proposed projects of The Venus Project, all powered by the Dracoscopia creative network and TVP Chain for transparent, sustainable progress."
  keywords="The Venus Project, projects, Dracoscopia, TVP Chain, sustainability, blockchain, collaboration, infrastructure"
  image="/the-venus-project-circular-city.jpg"
  url="https://www.thevenusproject.com/projects"
  type="website"
  :schema="{
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'TVP Projects',
    'url': 'https://www.thevenusproject.com/projects',
    'description': 'Explore active and proposed projects of The Venus Project, all powered by the Dracoscopia creative network and TVP Chain for transparent, sustainable progress.'
  }"
/>
