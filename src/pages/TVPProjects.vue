<template>
  <div
    class="venus-project-content min-h-screen w-full max-w-none bg-white text-background font-body px-0 py-8 animate-fade-in">

    <!-- Active TVP Projects Section -->
    <section class="glassy-bg animate-fade-in-up mx-auto mb-16 max-w-7xl rounded-2xl shadow-lg p-8">
      <h1 class="text-4xl font-heading font-extrabold tracking-tight text-accent text-center drop-shadow-lg mb-8">Active TVP Projects</h1>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        <BaseCard v-for="project in projects" :key="project.id"
          customClass="frosted-glass-card border border-accent/20 rounded-xl overflow-hidden hover:border-accent/40 transition-all animate-pop-in">
          <!-- Project Image -->
          <!-- <div class="aspect-w-16 aspect-h-9">
            <img :src="project.image" :alt="project.title + ' project image'" class="h-full w-full object-cover rounded-t-xl" />
          </div> -->

          <!-- Project Content -->
          <div class="p-6">
            <div class="mb-4 flex items-start justify-between">
              <h2 class="text-xl font-bold text-accent">{{ project.title }}</h2>
              <span :class="['rounded-full px-2 py-1 text-xs text-accent font-semibold', statusColors[project.status]]" aria-label="Project status">
                {{ project.status }}
              </span>
            </div>

            <p class="mb-4 font-semibold text-background font-body">{{ project.description }}</p>

            <!-- Progress Bar -->
            <div class="mb-4 !text-lg">
              <div class="mb-1 flex justify-between text-lg text-accent">
                <span class="font-body uppercase">Progress</span>
                <span class="font-body uppercase">{{ project.progress }}%</span>
              </div>
              <div class="h-2 w-full overflow-hidden rounded-full bg-navy/10">
                <div
                  class="h-full rounded-full bg-gradient-to-r from-tvp-purple via-tvp-blue to-tvp-teal transition-all duration-500"
                  :style="{ width: project.progress + '%' }" aria-label="Project progress"></div>
              </div>
            </div>

            <!-- Project Details -->
            <div class="space-y-2 text-lg font-body">
              <div class="flex justify-between leading-5 font-bold">
                <span class="text-muted">Location:</span>
                <span class="text-accent">{{ project.location }}</span>
              </div>
              <div class="flex justify-between leading-5 font-bold">
                <span class="text-muted">Team Size:</span>
                <span class="text-accent">{{ project.teamSize }}</span>
              </div>
              <div class="flex justify-between leading-5 font-bold">
                <span class="text-muted">Start Date:</span>
                <span class="text-accent">{{ project.startDate }}</span>
              </div>
            </div>

            <!-- Action Button -->
            <BaseButton color="primary" class="mt-6 w-full btn-unified">Get Involved</BaseButton>
          </div>
        </BaseCard>
      </div>
    </section>

    <!-- Vision Alignment Callout -->
    <section class="frosted-glass-card max-w-7xl mx-auto mb-16 rounded-2xl shadow-lg p-8 animate-fade-in-up">
      <h2 class="text-2xl font-bold mb-4 text-accent text-center">Building a Sustainable, Transparent Future</h2>
      <p class="text-lg text-accent text-center mb-2">All TVP projects are intended to be powered by the creative network of activists, ensuring transparent, decentralized, and sustainable progress. Join us in shaping a future where technology, ecology, and humanity thrive together.</p>
    </section>

    <!-- Proposed Projects & Proposals Section -->
    <Proposals :proposals="allProposals" :filters="proposalFilters" />
  </div>
</template>

<script setup>
import Proposals from "@/components/Proposals.vue";
import BaseCard from "@/components/BaseCard.vue";
import BaseButton from "@/components/BaseButton.vue";
import { allProposals, proposalFilters } from "@/assets/proposals.js";
import { onMounted, nextTick } from "vue";

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
  background: rgba(255,255,255,0.85) !important;
  background-color: rgba(255,255,255,0.50) !important;
  backdrop-filter: blur(8px);
}
.frosted-glass-card {
  background-color: rgba(255,255,255,0.50) !important;
  background: rgba(255,255,255,0.50) !important;
  backdrop-filter: blur(16px);
}
.text-tvp-blue {
  color: #38bdf8;
}
</style>

