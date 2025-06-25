<template>
  <SeoHead title="About | The Venus Project"
    description="Learn about The Venus Project: a 501(c)(3) non-profit dedicated to designing human habitats that enhance well-being and sustainability. Discover our history, vision, and team."
    keywords="The Venus Project, about, history, vision, sustainability, founders, advisors"
    image="@/assets/images/city-slides/1.jpg" url="https://www.thevenusproject.com/about" type="article" :schema="{
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      'name': 'About',
      'url': 'https://www.thevenusproject.com/about',
      'description': 'Learn about The Venus Project: a 501(c)(3) non-profit dedicated to designing human habitats that enhance well-being and sustainability. Discover our history, vision, and team.'
    }" />
  <main
    class="venus-project-content flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-white to-white px-0 pb-8 text-gray-900 md:px-0">
    <!-- Hero Section -->
    <section
      class="glassy-bg animate-fade-in-up max-w-7xl mx-auto mb-12 rounded-2xl shadow-2xl px-4 py-12 md:py-16 text-center">
      <h1 class="text-4xl md:text-5xl font-extrabold text-gradient mb-6">About The Venus Project</h1>
      <p class="mx-auto max-w-7xl text-lg mb-6">
        The Venus Project is a 501(c)(3) non-profit organization dedicated to designing human habitats that enhance
        well-being and sustainability. Founded by <a href="https://en.wikipedia.org/wiki/Jacque_Fresco" target="_blank"
          class="text-tvp-blue underline">Jacque Fresco</a> and <a href="https://en.wikipedia.org/wiki/Roxanne_Meadows"
          target="_blank" class="text-tvp-blue underline">Roxanne Meadows</a>, TVP envisions a world where science and
        technology are harnessed for the benefit of all, within a global Resource-Based Economy.
      </p>
      <img src="@/assets/images/city-slides/11.jpg" alt="The Venus Project Circular City"
        class="mx-auto rounded-xl shadow-lg mb-8 max-w-xl w-full" />
      <div class="flex flex-col md:flex-row gap-6 justify-center mb-6">
        <a href="https://www.thevenusproject.com/" target="_blank"
          class="btn-unified bg-gradient-to-r from-tvp-blue to-tvp-teal text-white">Official Website</a>
        <a href="https://www.thevenusproject.com/about/jacque-fresco/" target="_blank"
          class="btn-unified bg-gradient-to-r from-tvp-purple to-tvp-blue text-white">About Jacque Fresco</a>
        <a href="https://www.thevenusproject.com/about/roxanne-meadows/" target="_blank"
          class="btn-unified bg-gradient-to-r from-tvp-teal to-tvp-purple text-white">About Roxanne Meadows</a>
      </div>
      <p class="mx-auto max-w-7xl text-lg text-gray-700">
        TVP’s mission is to realize a new, sustainable world civilization through the intelligent management of Earth’s
        resources, innovative city design, and global collaboration. <a href="https://www.thevenusproject.com/mission/"
          target="_blank" class="text-tvp-blue underline">Learn more about our mission</a>.
      </p>
    </section>

    <!-- History Section -->
    <section class="frosted-glass-card max-w-7xl mx-auto mb-12 rounded-2xl shadow-xl p-8 animate-fade-in-up"
      aria-label="History">
      <h2 class="text-3xl font-bold mb-4 text-tvp-blue">Our History</h2>
      <p class="mb-4 text-lg text-gray-800">
        The Venus Project was founded in the 1970s in Venus, Florida, as a research center for sustainable city design
        and social innovation. Over the decades, TVP has inspired millions worldwide through documentaries, books, and
        public lectures. Its legacy continues through the <a href="https://www.thevenusproject.com/history/"
          target="_blank" class="text-tvp-blue underline">official history</a> and the ongoing work of its global
        network.
      </p>
      <ul class="list-disc ml-8 text-lg text-gray-700 mb-4">
        <li><a href="https://www.thevenusproject.com/about/history/" target="_blank"
            class="underline text-tvp-blue">Timeline & Milestones</a></li>
        <li><a href="https://www.thevenusproject.com/about/legacy/" target="_blank"
            class="underline text-tvp-blue">Legacy & Impact</a></li>
        <li><a href="https://www.thevenusproject.com/about/faq/" target="_blank"
            class="underline text-tvp-blue">Frequently Asked Questions</a></li>
      </ul>
    </section>

    <!-- Vision Section -->
    <section
      class="glassy-bg w-full max-w-7xl mx-auto mb-12 rounded-2xl shadow-xl p-8 animate-fade-in-up"
      aria-label="Our Vision">
      <div class="w-full h-full flex items-center justify-center relative z-10 flex-col gap-4 mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4 text-tvp-blue relative z-10">Our Vision</h2>
        <p class="mb-4 text-lg text-gray-800 relative z-10">
          TVP envisions a world where the needs of all people are met through the intelligent application of science and
          technology, without the limitations of politics, war, or scarcity. Our vision is a global Resource-Based
          Economy, where resources are managed for the benefit of all, and cities are designed for harmony with nature.
        </p>
        <ul class="list-none ml-8 text-lg text-gray-700 mb-4 relative z-10">
          <li>Resource-Based Economy</li>
          <li>Ecological city design</li>
          <li>Global collaboration</li>
          <li>Technological autonomy</li>
          <li>Human well-being as the highest priority</li>
        </ul>
        <a href="https://www.thevenusproject.com/vision/" target="_blank"
          class="btn-unified bg-gradient-to-r from-tvp-blue to-tvp-teal text-white">Explore the Vision</a>
      </div>
      <img src="@/assets/images/city-slides/9.jpg" alt="The Venus Project Circular City"
        class="absolute inset-0 z-0 object-cover w-full max-h-[700px] h-full rounded-xl opacity-5" />
    </section>

    <!-- Team & Advisors Section -->
    <section class="frosted-glass-card max-w-7xl mx-auto mb-12 rounded-2xl shadow-xl p-8 animate-fade-in-up"
      aria-label="Team & Advisors">
      <h2 class="text-3xl font-bold mb-4 text-tvp-blue">Our Team & Advisors</h2>
      <p class="mb-4 text-lg text-gray-800">The Venus Project is supported by a diverse team of experts, advisors, and
        volunteers from around the world. Meet some of our key contributors:</p>
      <ul class="list-disc ml-8 text-lg text-gray-700 mb-4">
        <li><a href="https://www.thevenusproject.com/about/team/" target="_blank" class="underline text-tvp-blue">Meet
            the Team</a></li>
        <li><a href="https://www.thevenusproject.com/about/advisors/" target="_blank"
            class="underline text-tvp-blue">Advisors</a></li>
        <li><a href="https://www.thevenusproject.com/about/partners/" target="_blank"
            class="underline text-tvp-blue">Partners & Network</a></li>
      </ul>
    </section>

    <!-- Call to Action -->
    <section class="glassy-bg max-w-7xl mx-auto mb-16 rounded-2xl shadow-lg p-8 animate-fade-in-up text-center">
      <h2 class="text-2xl font-bold mb-4 text-tvp-blue">Get Involved</h2>
      <p class="mb-6 text-lg text-gray-800">Join our global community and help build a sustainable, equitable future.
        Volunteer, contribute, or learn more about our ongoing projects and initiatives.</p>
      <a href="https://www.thevenusproject.com/get-involved/" target="_blank"
        class="btn-unified bg-gradient-to-r from-tvp-blue to-tvp-teal text-white">Get Involved</a>
    </section>
  </main>
</template>

<script setup>
// No additional logic needed for static content
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
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  outline: none;
}
.btn-unified:focus {
  box-shadow: 0 0 0 3px #38bdf8, 0 2px 8px 0 rgba(0,0,0,0.12);
}
.text-gradient {
  background: linear-gradient(90deg, #42386c, #153695, #143395);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
  color: #153695;
}
</style>


