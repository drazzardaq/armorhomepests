<template>
  <TVPLayout active="Projects">
    <div class="space-y-16">
      <!-- Hero Section -->
      <section class="py-16 text-center">
        <h1 class="mb-6 text-4xl font-bold md:text-5xl">Our Projects</h1>
        <p class="mx-auto max-w-3xl text-xl text-gray-300">Explore the innovative projects and designs that showcase the principles of a resource-based economy and sustainable living.</p>
      </section>

      <!-- Filter Section -->
      <section class="mb-8 flex flex-wrap justify-center gap-4">
        <button v-for="category in categories" :key="category" @click="selectedCategory = category" :class="['rounded-lg px-4 py-2 transition-colors', selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20']">
          {{ category }}
        </button>
      </section>

      <!-- Projects Grid -->
      <section>
        <TVPProjects />
      </section>

      <!-- Featured Project Slides -->
      <section>
        <h2 class="mb-8 text-center text-3xl font-bold">Featured Designs</h2>
        <TVPSlides :slides="featuredSlides" />
      </section>

      <!-- Call to Action -->
      <section class="rounded-lg bg-blue-600 p-8 text-center">
        <h2 class="mb-4 text-3xl font-bold">Want to Contribute?</h2>
        <p class="mb-6 text-xl">Join our community of designers, engineers, and visionaries working towards a sustainable future.</p>
        <button class="rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100">Get Involved</button>
      </section>
    </div>
  </TVPLayout>
</template>

<script setup>
import { ref } from "vue";
import TVPLayout from "@/layouts/TVPLayout.vue";
import TVPProjects from "@/components/TVPProjects.vue";
import TVPSlides from "@/components/TVPSlides.vue";

const selectedCategory = ref("All");
const categories = ref(["All", "Urban Planning", "Agriculture", "Transportation", "Energy", "Environmental"]);

const featuredSlides = ref([
  {
    id: 1,
    title: "Circular City Master Plan",
    description: "Comprehensive urban design featuring concentric zones for optimal resource distribution and minimal environmental impact.",
    image: "/images/circular-city-master.jpg",
    features: ["Population capacity: 1 million residents", "Zero waste production", "Automated transportation network", "Integrated renewable energy systems"],
    action: "View Master Plan",
  },
  {
    id: 2,
    title: "Vertical Farm Complex",
    description: "Multi-story agricultural facility using advanced hydroponics and AI-controlled growing systems.",
    image: "/images/vertical-farm.jpg",
    features: ["95% less water usage", "Year-round production", "No pesticides or herbicides", "Automated harvesting systems"],
    action: "Explore Design",
  },
  {
    id: 3,
    title: "Maglev Transportation Hub",
    description: "Central transportation facility connecting multiple cities through magnetic levitation technology.",
    image: "/images/maglev-hub.jpg",
    features: ["Speeds up to 600 km/h", "Zero emissions operation", "Automated scheduling", "Weather-independent travel"],
    action: "Learn More",
  },
]);
</script>
