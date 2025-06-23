<template>
  <SeoHead
    title="Research | The Venus Project"
    description="Explore the research and scientific foundations behind The Venus Project’s proposals for a sustainable, resource-based future."
    keywords="The Venus Project, research, science, sustainability, resource-based economy, innovation"
    image="/the-venus-project-circular-city.jpg"
    url="https://www.thevenusproject.com/research"
    type="article"
    :schema="{
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Research',
      'url': 'https://www.thevenusproject.com/research',
      'description': 'Explore the research and scientific foundations behind The Venus Project’s proposals for a sustainable, resource-based future.'
    }"
  />
  <section class="research-section animate-fade-in-up glassy-bg glassy-interact mx-auto my-16 w-full max-w-6xl rounded-2xl px-4 py-12 shadow-2xl md:py-16">
    <h1 class="text-gradient mb-6 text-center text-5xl font-extrabold">Research & Scientific Foundations</h1>
    <p class="mx-auto mb-10 max-w-3xl text-center text-lg text-gray-700">
      The Venus Project’s proposals are grounded in decades of interdisciplinary research, systems thinking, and real-world experimentation. Our work draws from fields such as environmental science, engineering, architecture, sociology, and economics to design a holistic, sustainable future for all.
    </p>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div class="research-card rounded-xl bg-white/80 p-6 shadow-lg">
        <h2 class="mb-2 text-xl font-bold text-tvp-blue">Systems Thinking</h2>
        <p class="text-gray-700">Understanding the interconnectedness of social, ecological, and technological systems to design resilient solutions.</p>
      </div>
      <div class="research-card rounded-xl bg-white/80 p-6 shadow-lg">
        <h2 class="mb-2 text-xl font-bold text-tvp-blue">Sustainable Design</h2>
        <p class="text-gray-700">Applying principles of biomimicry, circularity, and regenerative design to create cities and technologies in harmony with nature.</p>
      </div>
      <div class="research-card rounded-xl bg-white/80 p-6 shadow-lg">
        <h2 class="mb-2 text-xl font-bold text-tvp-blue">Social Innovation</h2>
        <p class="text-gray-700">Exploring new models for education, collaboration, and governance that empower communities and foster global cooperation.</p>
      </div>
      <div class="research-card rounded-xl bg-white/80 p-6 shadow-lg">
        <h2 class="mb-2 text-xl font-bold text-tvp-blue">Technological Advancement</h2>
        <p class="text-gray-700">Leveraging automation, AI, and renewable energy to improve quality of life and reduce environmental impact.</p>
      </div>
      <div class="research-card rounded-xl bg-white/80 p-6 shadow-lg">
        <h2 class="mb-2 text-xl font-bold text-tvp-blue">Pilot Projects</h2>
        <p class="text-gray-700">Demonstration projects and prototypes that showcase the feasibility and benefits of TVP’s concepts.</p>
      </div>
      <div class="research-card rounded-xl bg-white/80 p-6 shadow-lg">
        <h2 class="mb-2 text-xl font-bold text-tvp-blue">Open Knowledge</h2>
        <p class="text-gray-700">Sharing research, data, and best practices openly to accelerate global progress toward sustainability.</p>
      </div>
    </div>
    <div class="mt-8 flex flex-col items-center gap-4">
      <router-link to="/education" class="btn-glass-cta px-8 py-4 text-lg font-bold" aria-label="Education">Education</router-link>
      <router-link to="/media" class="btn-glass-cta px-8 py-4 text-lg font-bold" aria-label="Media">Media</router-link>
    </div>
  </section>
</template>
<script setup>
import SeoHead from '@/components/SeoHead.vue';
</script>
