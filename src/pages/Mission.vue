<template>
  <SeoHead
    title="Our Mission | The Venus Project"
    description="Discover the mission of The Venus Project: designing a sustainable, resource-based future for all. Learn how we align human well-being with intelligent resource management."
    keywords="The Venus Project, mission, sustainability, resource-based economy, future, global collaboration"
    image="/the-venus-project-circular-city.jpg"
    url="https://www.thevenusproject.com/mission"
    type="website"
    :schema="{
      '@context': 'https://schema.org',
      '@type': 'NGO',
      'name': 'The Venus Project',
      'url': 'https://www.thevenusproject.com/',
      'description': 'The Venus Project’s mission is to design and promote a new, sustainable social system for the benefit of all.'
    }"
  />
  <section class="mission-section animate-fade-in-up glassy-bg glassy-interact mx-auto my-16 w-full max-w-5xl rounded-2xl px-4 py-12 shadow-2xl md:py-16">
    <h1 class="text-gradient mb-6 text-center text-5xl font-extrabold">Our Mission</h1>
    <p class="mx-auto mb-8 max-w-3xl text-center text-lg text-gray-700">
      The Venus Project is dedicated to realizing a new era of civilization—one where human potential is unleashed through the intelligent application of science and technology, and where the well-being of people and the planet is the highest priority. Our mission is to catalyze a global transition to a resource-based economy, eliminating artificial scarcity, poverty, and war. We strive to inspire, educate, and unite people everywhere to co-create a sustainable, equitable, and peaceful future for all.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      <div class="bg-white/70 dark:bg-black/40 rounded-xl p-8 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 text-gradient">Core Values</h2>
        <ul class="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2">
          <li>Human and environmental well-being above profit or politics</li>
          <li>Global cooperation and peaceful problem-solving</li>
          <li>Science and technology for social good</li>
          <li>Equitable access to resources for all</li>
          <li>Continuous learning, innovation, and adaptability</li>
        </ul>
      </div>
      <div class="bg-white/70 dark:bg-black/40 rounded-xl p-8 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 text-gradient">Our Vision</h2>
        <p class="text-gray-800 dark:text-gray-200">
          We envision a world where cities are designed for people and nature, not profit; where automation and renewable energy free humanity from menial labor; where education, healthcare, and opportunity are universal; and where the boundaries of what is possible are continually expanded by creativity and collaboration. The Venus Project’s vision is a thriving, peaceful civilization in harmony with the Earth.
        </p>
      </div>
    </div>
    <div class="mt-12 flex flex-col items-center gap-4">
      <router-link to="/solutions" class="btn-glass-cta px-8 py-4 text-lg font-bold" aria-label="See Our Solutions">See Our Solutions</router-link>
      <router-link to="/faq" class="btn-glass-cta px-8 py-4 text-lg font-bold" aria-label="Frequently Asked Questions">Frequently Asked Questions</router-link>
    </div>
  </section>
</template>
<script setup>
import SeoHead from '@/components/SeoHead.vue';
</script>
