<template>
  <div class="venus-project-content min-h-screen w-full px-0 py-8 !my-20 md:px-0 max-w-none bg-primary text-primary font-body">
    <div class="space-y-16 max-w-7xl mx-auto">
      <!-- Hero Section -->
      <section class="glassy-bg rounded-3xl shadow-2xl mb-12 animate-fade-in-up">
        <h1 class="mb-6 text-4xl md:text-5xl text-gradient text-center font-heading">About The Venus Project</h1>
        <p class="mx-auto max-w-3xl text-xl text-muted text-center font-body">Founded by social engineer Jacque Fresco, The Venus Project presents a bold, new direction for humanity that entails nothing less than the total redesign of our culture.</p>
      </section>
      <!-- Vision Section -->
      <section class="glassy-bg rounded-3xl shadow-xl mb-12 p-8 grid items-center gap-12 md:grid-cols-2 animate-fade-in-up">
        <div>
          <h2 class="mb-6 text-3xl font-heading text-gradient">Our Vision</h2>
          <p class="mb-4 text-muted font-body">The Venus Project proposes an alternative vision of what the future can be if we apply what we already know in order to achieve a sustainable new world civilization.</p>
          <p class="mb-4 text-muted font-body">It calls for a straightforward redesign of our culture in which the age-old inadequacies of war, poverty, hunger, debt and unnecessary human suffering are viewed not only as avoidable, but as totally unacceptable.</p>
          <p class="text-muted font-body">Anything less will result in a continuation of the same catalog of problems inherent in today's world.</p>
        </div>
        <div class="relative flex flex-col gap-4">
          <img src="https://www.thevenusproject.com/wp-content/uploads/2023/11/Website-graphics-Vision-B-720x380.png" alt="The Venus Project Vision graphic" class="rounded-xl shadow-2xl w-full" loading="lazy" />
          <img src="https://www.thevenusproject.com/wp-content/uploads/2023/11/Website-graphics-Values-B-720x380.png" alt="The Venus Project Values graphic" class="rounded-xl shadow-2xl w-full" loading="lazy" />
          <img src="https://www.thevenusproject.com/wp-content/uploads/2023/11/Website-graphics-Knowledge-B-720x380.png" alt="The Venus Project Knowledge graphic" class="rounded-xl shadow-2xl w-full" loading="lazy" />
        </div>
      </section>
      <!-- Principles Section -->
      <section class="glassy-bg rounded-3xl shadow-xl mb-12 animate-fade-in-up">
        <h2 class="mb-8 text-center text-3xl font-heading text-gradient">Core Principles</h2>
        <div class="grid gap-8 md:grid-cols-3">
          <div class="rounded-xl bg-white/60 frosted-glass-card p-6 animate-pop-in" tabindex="0" aria-label="Scientific Method">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-tvp-purple via-tvp-blue to-tvp-teal">
              <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 class="mb-3 text-xl font-ui text-tvp-blue">Scientific Method</h3>
            <p class="text-muted font-body">Application of the scientific method to social concerns and resource management.</p>
          </div>
          <div class="rounded-xl bg-white/60 frosted-glass-card p-6 animate-pop-in" tabindex="0" aria-label="Resource-Based Economy">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-tvp-purple via-tvp-blue to-tvp-teal">
              <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="mb-3 text-xl font-ui text-tvp-blue">Resource-Based Economy</h3>
            <p class="text-muted font-body">Intelligent management of Earth's resources for the benefit of all humanity.</p>
          </div>
          <div class="rounded-xl bg-white/60 frosted-glass-card p-6 animate-pop-in" tabindex="0" aria-label="Technology for Good">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-tvp-purple via-tvp-blue to-tvp-teal">
              <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="mb-3 text-xl font-ui text-tvp-blue">Technology for Good</h3>
            <p class="text-muted font-body">Using technology to enhance human potential and create sustainable solutions.</p>
          </div>
        </div>
      </section>
      <!-- Jacque Fresco Section -->
      <section class="glassy-bg rounded-3xl shadow-xl mb-12 grid items-center gap-12 md:grid-cols-2 animate-fade-in-up">
        <div class="relative">
          <img src="/tvp/jf.webp" alt="Jacque Fresco portrait" class="rounded-xl shadow-2xl w-full" loading="lazy" />
        </div>
        <div>
          <h2 class="mb-6 text-3xl font-heading text-gradient">Jacque Fresco (1916-2017)</h2>
          <p class="mb-4 text-muted font-body">Jacque Fresco was a self-taught structural designer, architectural designer, philosopher of science, concept artist, educator, and futurist.</p>
          <p class="mb-4 text-muted font-body">He spent most of his life conceiving of and devising inventions and innovations in various fields including architecture, automotive design, and social engineering.</p>
          <p class="text-muted font-body">His work culminated in The Venus Project, which he founded with his partner Roxanne Meadows to promote his vision of a sustainable future.</p>
        </div>
      </section>
      
      <!-- Advisors Section -->
      <section class="glassy-bg rounded-3xl shadow-xl mb-12 animate-fade-in-up" aria-label="Our Advisors">
        <h2 class="mb-8 text-center text-3xl font-heading text-gradient">Our Advisors</h2>
        <TVPAdvisors />
      </section>
      <!-- The Venus Project Blockchain Vision Section -->
      <section class="glassy-bg rounded-3xl shadow-xl mb-12 p-8 animate-fade-in-up border-2 border-tvp-blue/30" aria-label="The Venus Project Blockchain Vision">
        <h2 class="mb-6 text-3xl font-bold text-gradient">The Venus Project Blockchain: The Next Step</h2>
        <p class="mb-4 text-gray-800">The Venus Project is pioneering a new era of collaboration and transparency by integrating the <span class="font-bold text-tvp-blue">Dracoscopia</span> creative network and the <span class="font-bold text-tvp-blue">TVP Blockchain</span> - Custom, Private & Secure Data Storage. This infrastructure will power proposals, resource management, and global participation, ensuring every project is secure, transparent, and community-driven.</p>
        <ul class="list-disc ml-8 text-gray-800 mb-4">
          <li>All proposals and projects are validated and tracked on the TVP Chain</li>
          <li>Dracoscopia enables creative, scientific, and technical collaboration across borders</li>
          <li>(Aiming) TVP-owned data centers and machines ensure sustainable, ethical computation</li>
          <li>Open participation and transparent governance for all contributors</li>
        </ul>
        <p class="text-tvp-blue font-semibold">This vision is at the heart of every new proposal and partnership. <router-link to="/OutpostProposal" class="underline hover:text-tvp-teal">Submit your proposal</router-link> and help build the future of The Venus Project!</p>
      </section>
      <!-- The Venus Project Blockchain Vision Proposal Callout -->
      <section class="glassy-bg border-l-4 border-tvp-blue/60 bg-tvp-blue/5 rounded-2xl shadow-lg mb-12 p-6 animate-fade-in-up max-w-4xl mx-auto" aria-label="The Venus Project Blockchain Vision for Proposals">
        <h2 class="mb-2 text-2xl font-bold text-tvp-blue flex items-center gap-2">
          <svg class="inline-block w-7 h-7 text-tvp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m4 0h-1v-4h-1m-4 0h-1v-4h-1"/></svg>
          Proposal Vision: The Venus Project Blockchain
        </h2>
        <p class="text-gray-800">All proposals and new initiatives are designed to be part of thecreative network of activsts and volunteers validated on the <span class='font-bold text-tvp-blue'>The Venus Project Blockchain</span>. This ensures that every idea, from sustainable cities to planetary habitats, is transparent, collaborative, and future-ready—empowering humanity to build a legacy of ethical, decentralized progress.</p>
        <div class="mt-6 text-center">
          <router-link to="/OutpostProposal" class="inline-block rounded-lg bg-gradient-to-r from-tvp-blue via-tvp-teal to-tvp-purple px-6 py-3 text-white font-bold shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-tvp-blue" aria-label="Submit your proposal">Submit Your Proposal</router-link>
        </div>
      </section>
      <!-- Learn More Section -->
      <section class="mb-12 text-center">
        <BaseButton color="primary" class="w-full rounded-lg">Learn More</BaseButton>
      </section>
    </div>
  </div>
</template>

<script setup>
import TVPAdvisors from '@/components/TVPAdvisors.vue';
import BaseButton from '@/components/BaseButton.vue';
</script>

<SeoHead
  title="Mission & Vision | The Venus Project"
  description="Learn about the mission and vision of The Venus Project: a sustainable, resource-based future for humanity."
  keywords="The Venus Project, mission, vision, sustainability, resource-based economy, future"
  image="/the-venus-project-circular-city.jpg"
  url="https://www.thevenusproject.com/mission"
  type="article"
  :schema="{
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    'name': 'Mission & Vision',
    'url': 'https://www.thevenusproject.com/mission',
    'description': 'Learn about the mission and vision of The Venus Project: a sustainable, resource-based future for humanity.'
  }"
/>
