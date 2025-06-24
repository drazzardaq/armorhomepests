<template>
  <div
    class="venus-project-content min-h-screen w-full max-w-none bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 px-0 py-8 text-white animate-fade-in">

    <!-- Active TVP Projects Section -->
    <section class="glassy-bg animate-fade-in-up mx-auto mb-16 max-w-7xl rounded-2xl shadow-lg p-8">
      <h1 class="text-4xl font-extrabold tracking-tight text-green-200 text-center drop-shadow-lg mb-8">Active TVP Projects</h1>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <BaseCard v-for="project in projects" :key="project.id"
          customClass="frosted-glass-card border border-blue-500/20 rounded-xl overflow-hidden hover:border-blue-400/40 transition-all animate-pop-in">
          <!-- Project Image -->
          <div class="aspect-w-16 aspect-h-9">
            <img :src="project.image" :alt="project.title + ' project image'" class="h-full w-full object-cover rounded-t-xl" />
          </div>

          <!-- Project Content -->
          <div class="p-6">
            <div class="mb-4 flex items-start justify-between">
              <h2 class="text-xl font-bold text-tvp-blue">{{ project.title }}</h2>
              <span :class="['rounded-full px-2 py-1 text-xs font-semibold', statusColors[project.status]]" aria-label="Project status">
                {{ project.status }}
              </span>
            </div>

            <p class="mb-4 text-gray-200">{{ project.description }}</p>

            <!-- Progress Bar -->
            <div class="mb-4">
              <div class="mb-1 flex justify-between text-sm text-tvp-blue">
                <span>Progress</span>
                <span>{{ project.progress }}%</span>
              </div>
              <div class="h-2 w-full overflow-hidden rounded-full bg-blue-900/10">
                <div
                  class="h-full rounded-full bg-gradient-to-r from-tvp-purple via-tvp-blue to-tvp-teal transition-all duration-500"
                  :style="{ width: project.progress + '%' }" aria-label="Project progress"></div>
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
            <BaseButton color="primary" class="mt-6 w-full btn-unified">Get Involved</BaseButton>
          </div>
        </BaseCard>
      </div>
    </section>

    <!-- Vision Alignment Callout -->
    <section class="frosted-glass-card max-w-4xl mx-auto mb-16 rounded-2xl shadow-lg p-8 animate-fade-in-up">
      <h2 class="text-2xl font-bold mb-4 text-green-200">Building a Sustainable, Transparent Future</h2>
      <p class="text-lg text-green-100 mb-2">All TVP projects are powered by the Dracoscopia creative network and TVP Chain, ensuring transparent, decentralized, and sustainable progress. Join us in shaping a future where technology, ecology, and humanity thrive together.</p>
    </section>

    <!-- Proposed Projects & Proposals Section -->
    <Proposals :proposals="allProposals" :filters="proposalFilters" />
  </div>
</template>

<script setup>
import { headingClass, subheadingClass } from "@/layouts/layoutClasses";
import Proposals from "@/components/Proposals.vue";
import BaseCard from "@/components/BaseCard.vue";
import BaseButton from "@/components/BaseButton.vue";
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
.venus-project-content {
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
}
.btn-unified {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.12);
  transition: all 0.3s;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  outline: none;
}
.btn-unified:focus {
  box-shadow: 0 0 0 3px #38bdf8, 0 2px 8px 0 rgba(0,0,0,0.12);
}
.glassy-bg {
  background: rgba(255,255,255,0.10);
  backdrop-filter: blur(8px);
}
.frosted-glass-card {
  background: rgba(255,255,255,0.20);
  backdrop-filter: blur(16px);
}
.text-tvp-blue {
  color: #38bdf8;
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
