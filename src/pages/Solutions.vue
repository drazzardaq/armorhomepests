<template>
  <SeoHead
    title="Our Solutions | The Venus Project"
    description="Explore The Venus Project’s solutions for a sustainable future: resource-based economy, circular cities, sustainable technologies, and more."
    keywords="The Venus Project, solutions, resource-based economy, circular cities, sustainability, technology, global collaboration"
    image="/the-venus-project-circular-city.jpg"
    url="https://www.thevenusproject.com/solutions"
    type="website"
    :schema="{
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Our Solutions',
      'url': 'https://www.thevenusproject.com/solutions',
      'description': 'The Venus Project’s solutions for a sustainable, resource-based future.'
    }"
  />
  <section class="solutions-section animate-fade-in-up glassy-bg glassy-interact mx-auto my-16 w-full max-w-6xl rounded-2xl px-4 py-12 shadow-2xl md:py-16">
    <h1 class="text-gradient mb-6 text-center text-5xl font-extrabold">Our Solutions</h1>
    <p class="mx-auto mb-10 max-w-3xl text-center text-lg text-gray-700">
      The Venus Project offers a comprehensive set of solutions to address the root causes of today’s social, economic, and environmental challenges. By applying science and technology with human and ecological well-being as our highest priorities, we can create a world of abundance, peace, and sustainability for all.
    </p>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div class="solution-card rounded-xl bg-white/80 p-6 shadow-lg">
        <h2 class="mb-2 text-xl font-bold text-tvp-blue">Resource-Based Economy</h2>
        <p class="text-gray-700">A system where resources are managed scientifically for the well-being of all, eliminating the need for money, barter, or servitude.</p>
        <p class="mt-2 text-sm text-tvp-green font-semibold">How We Realize This: We advocate for global resource surveys, open access to technology, and collaborative design of systems that meet everyone’s needs.</p>
      </div>
      <div class="solution-card rounded-xl bg-white/80 p-6 shadow-lg">
        <h2 class="mb-2 text-xl font-bold text-tvp-blue">Circular Cities</h2>
        <p class="text-gray-700">Urban designs that optimize resource use, foster community, and integrate nature and technology for a thriving, sustainable future.</p>
        <p class="mt-2 text-sm text-tvp-green font-semibold">How We Realize This: We develop and share blueprints for modular, circular cities that are efficient, beautiful, and adaptable to local needs.</p>
      </div>
      <div class="solution-card rounded-xl bg-white/80 p-6 shadow-lg">
        <h2 class="mb-2 text-xl font-bold text-tvp-blue">Sustainable Technologies</h2>
        <p class="text-gray-700">Innovations in energy, food, water, and shelter that reduce environmental impact and improve quality of life for all.</p>
        <p class="mt-2 text-sm text-tvp-green font-semibold">How We Realize This: We promote research, open-source development, and demonstration projects in renewable energy, automation, and ecological design.</p>
      </div>
      <div class="solution-card rounded-xl bg-white/80 p-6 shadow-lg">
        <h2 class="mb-2 text-xl font-bold text-tvp-blue">Education & Outreach</h2>
        <p class="text-gray-700">Programs and media to inform, inspire, and empower people to participate in building a better world.</p>
        <p class="mt-2 text-sm text-tvp-green font-semibold">How We Realize This: We create documentaries, courses, and events to raise awareness and foster critical thinking about systemic change.</p>
      </div>
      <div class="solution-card rounded-xl bg-white/80 p-6 shadow-lg">
        <h2 class="mb-2 text-xl font-bold text-tvp-blue">Global Collaboration</h2>
        <p class="text-gray-700">A worldwide network of volunteers, experts, and organizations working together for systemic change.</p>
        <p class="mt-2 text-sm text-tvp-green font-semibold">How We Realize This: We build partnerships, open platforms, and inclusive teams to co-create and implement solutions worldwide.</p>
      </div>
      <div class="solution-card rounded-xl bg-white/80 p-6 shadow-lg">
        <h2 class="mb-2 text-xl font-bold text-tvp-blue">Restoring the Environment</h2>
        <p class="text-gray-700">Holistic approaches to renew habitats, restore ecosystems, and align technology with ecology.</p>
        <p class="mt-2 text-sm text-tvp-green font-semibold">How We Realize This: We support reforestation, regenerative agriculture, and eco-restoration projects that heal the planet.</p>
      </div>
    </div>
    <div class="mt-8 flex flex-col items-center gap-4">
      <router-link to="/mission" class="btn-glass-cta px-8 py-4 text-lg font-bold" aria-label="Our Mission">Our Mission</router-link>
      <router-link to="/faq" class="btn-glass-cta px-8 py-4 text-lg font-bold" aria-label="FAQ">FAQ</router-link>
    </div>
  </section>
</template>
<script setup>
import SeoHead from '@/components/SeoHead.vue';
</script>
