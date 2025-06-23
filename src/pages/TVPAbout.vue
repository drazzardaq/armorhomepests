<template>
      <div class="space-y-16">
      <!-- Hero Section -->
      <section class="py-16 text-center bg-white/90 rounded-xl shadow-2xl mb-12">
        <h1 class="mb-6 text-4xl font-bold md:text-5xl text-tvp-blue">About The Venus Project</h1>
        <p class="mx-auto max-w-3xl text-xl text-gray-700">Founded by social engineer Jacque Fresco, The Venus Project presents a bold, new direction for humanity that entails nothing less than the total redesign of our culture.</p>
      </section>
      <!-- Vision Section -->
      <section class="grid items-center gap-12 md:grid-cols-2 bg-white/80 rounded-xl shadow-xl mb-12 p-8">
        <div>
          <h2 class="mb-6 text-3xl font-bold text-tvp-blue">Our Vision</h2>
          <p class="mb-4 text-gray-700">The Venus Project proposes an alternative vision of what the future can be if we apply what we already know in order to achieve a sustainable new world civilization.</p>
          <p class="mb-4 text-gray-700">It calls for a straightforward redesign of our culture in which the age-old inadequacies of war, poverty, hunger, debt and unnecessary human suffering are viewed not only as avoidable, but as totally unacceptable.</p>
          <p class="text-gray-700">Anything less will result in a continuation of the same catalog of problems inherent in today's world.</p>
        </div>
        <div class="relative flex flex-col gap-4">
          <img src="https://www.thevenusproject.com/wp-content/uploads/2023/11/Website-graphics-Vision-B-720x380.png" alt="The Venus Project Vision" class="rounded-lg shadow-2xl" />
          <img src="https://www.thevenusproject.com/wp-content/uploads/2023/11/Website-graphics-Values-B-720x380.png" alt="The Venus Project Values" class="rounded-lg shadow-2xl" />
          <img src="https://www.thevenusproject.com/wp-content/uploads/2023/11/Website-graphics-Knowledge-B-720x380.png" alt="The Venus Project Knowledge" class="rounded-lg shadow-2xl" />
        </div>
      </section>

      <!-- Principles Section -->
      <section>
        <h2 class="mb-8 text-center text-3xl font-bold">Core Principles</h2>
        <div class="grid gap-8 md:grid-cols-3">
          <div class="rounded-lg bg-white/5 p-6">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
              <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 class="mb-3 text-xl font-semibold">Scientific Method</h3>
            <p class="text-gray-300">Application of the scientific method to social concerns and resource management.</p>
          </div>

          <div class="rounded-lg bg-white/5 p-6">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-600">
              <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="mb-3 text-xl font-semibold">Resource-Based Economy</h3>
            <p class="text-gray-300">Intelligent management of Earth's resources for the benefit of all humanity.</p>
          </div>

          <div class="rounded-lg bg-white/5 p-6">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600">
              <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="mb-3 text-xl font-semibold">Technology for Good</h3>
            <p class="text-gray-300">Using technology to enhance human potential and create sustainable solutions.</p>
          </div>
        </div>
      </section>

      <!-- Jacque Fresco Section -->
      <section class="grid items-center gap-12 md:grid-cols-2">
        <div class="relative">
          <img src="/tvp/jf.webp" alt="Jacque Fresco" class="rounded-lg shadow-2xl" />
        </div>
        <div>
          <h2 class="mb-6 text-3xl font-bold">Jacque Fresco (1916-2017)</h2>
          <p class="mb-4 text-gray-300">Jacque Fresco was a self-taught structural designer, architectural designer, philosopher of science, concept artist, educator, and futurist.</p>
          <p class="mb-4 text-gray-300">He spent most of his life conceiving of and devising inventions and innovations in various fields including architecture, automotive design, and social engineering.</p>
          <p class="text-gray-300">His work culminated in The Venus Project, which he founded with his partner Roxanne Meadows to promote his vision of a sustainable future.</p>
        </div>
      </section>

      <!-- Advisors Section -->
      <section>
        <h2 class="mb-8 text-center text-3xl font-bold">Our Advisors</h2>
        <TVPAdvisors />
      </section>
    </div>
  </template>

<script setup>
import { headingClass, subheadingClass } from '@/layouts/layoutClasses';
import TVPAdvisors from "@/components/TVPAdvisors.vue";
</script>
