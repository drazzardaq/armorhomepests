<template>
  <!-- <Layout :activeSection="'about'"> -->
    <section class="frosted-glass-card p-8 flex flex-col gap-8">
      <!-- <header>
        <h1 :class="headingClass">About The Venus Project</h1>
        <p :class="subheadingClass">A vision for a sustainable, advanced, and equitable future</p>
      </header> -->
      <div class="prose prose-invert max-w-none text-lg">
        <div :class="layoutClass">
          <div class="mb-12 flex flex-col items-center gap-4 px-8 text-center">
            <h1 :class="headingClass">About The Venus Project</h1>
            <p class="max-w-2xl text-lg text-blue-100 font-medium drop-shadow-lg">Founded by social engineer Jacque Fresco, The Venus Project presents a bold, new direction for humanity that entails nothing less than the total redesign of our culture.</p>
          </div>
          <div class="grid items-center gap-12 md:grid-cols-2 mb-16">
            <div>
              <h2 :class="headingClass + ' text-3xl !mb-6'">Our Vision</h2>
              <p class="mb-4 text-blue-100">The Venus Project proposes an alternative vision of what the future can be if we apply what we already know in order to achieve a sustainable new world civilization.</p>
              <p class="mb-4 text-blue-100">It calls for a straightforward redesign of our culture in which the age-old inadequacies of war, poverty, hunger, debt and unnecessary human suffering are viewed not only as avoidable, but as totally unacceptable.</p>
              <p class="text-blue-100">Anything less will result in a continuation of the same catalog of problems inherent in today's world.</p>
            </div>
            <div class="relative">
              <img src="/tvp/sustainable-future-the-venus-project.jpg" alt="The Venus Project Vision" class="rounded-2xl shadow-2xl" />
            </div>
          </div>
          <div class="mb-16">
            <h2 :class="headingClass + ' text-3xl !mb-8 text-center'">Core Principles</h2>
            <div class="grid gap-8 md:grid-cols-3">
              <div class="frosted-glass-card rounded-2xl p-6">
                <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                  <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 class="mb-3 text-xl font-semibold text-blue-200">Scientific Method</h3>
                <p class="text-blue-100">Application of the scientific method to social concerns and resource management.</p>
              </div>
              <div class="frosted-glass-card rounded-2xl p-6">
                <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-600">
                  <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 class="mb-3 text-xl font-semibold text-green-200">Resource-Based Economy</h3>
                <p class="text-blue-100">Intelligent management of Earth's resources for the benefit of all humanity.</p>
              </div>
              <div class="frosted-glass-card rounded-2xl p-6">
                <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600">
                  <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 class="mb-3 text-xl font-semibold text-purple-200">Technology for Good</h3>
                <p class="text-blue-100">Using technology to enhance human potential and create sustainable solutions.</p>
              </div>
            </div>
          </div>
          <div class="grid items-center gap-12 md:grid-cols-2 mb-16">
            <div class="relative">
              <img src="/tvp/jf.webp" alt="Jacque Fresco" class="rounded-2xl shadow-2xl" />
            </div>
            <div>
              <h2 :class="headingClass + ' text-3xl !mb-6'">Jacque Fresco (1916-2017)</h2>
              <p class="mb-4 text-blue-100">Jacque Fresco was a self-taught structural designer, architectural designer, philosopher of science, concept artist, educator, and futurist.</p>
              <p class="mb-4 text-blue-100">He spent most of his life conceiving of and devising inventions and innovations in various fields including architecture, automotive design, and social engineering.</p>
              <p class="text-blue-100">His work culminated in The Venus Project, which he founded with his partner Roxanne Meadows to promote his vision of a sustainable future.</p>
            </div>
          </div>
          <div class="mb-16">
            <h2 :class="headingClass + ' text-3xl !mb-8 text-center'">Our Advisors</h2>
            <div class="frosted-glass-card rounded-2xl p-8">
              <TVPAdvisors />
            </div>
          </div>
        </div>
      </div>
    </section>
  <!-- </Layout> -->
</template>

<script setup>
import Layout from '@/layouts/Layout.vue';
import TVPAdvisors from '@/components/TVPAdvisors.vue';
import { headingClass, subheadingClass } from '@/layouts/layoutClasses';
</script>

<style scoped>
.frosted-glass-card {
  background: rgba(30, 41, 59, 0.7);
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1.5px solid rgba(255, 255, 255, 0.18);
}
</style>
