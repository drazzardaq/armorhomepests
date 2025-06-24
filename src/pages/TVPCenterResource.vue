<template>
  <SeoHead
    title="Center for Resource Management | The Venus Project"
    description="Discover the Center for Resource Management, a core of TVP's vision for global resource monitoring, equitable distribution, and sustainable design."
    keywords="The Venus Project, resource management, sustainability, global survey, circular city, proposals"
    image="/the-venus-project-circular-city.jpg"
    url="https://www.thevenusproject.com/center-resource-management"
    type="website"
    :schema="{
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Center for Resource Management',
      'url': 'https://www.thevenusproject.com/center-resource-management',
      'description': 'TVP Center for Resource Management: global resource monitoring, equitable distribution, and sustainable design.'
    }"
  />
  <div class="venus-project-content min-h-screen bg-gradient-to-br from-white via-[#f7faff] to-[#eaf6ff] text-black">
    <section class="glassy-bg py-12 px-4 md:px-16 max-w-5xl mx-auto rounded-3xl shadow-2xl animate-fade-in-up">
      <h1 :class="headingClass + ' text-center drop-shadow mb-6'">Center for Resource Management</h1>
      <p class="max-w-3xl mx-auto text-lg mb-8 text-center">
        The Center for Resource Management is a core component of The Venus Project’s vision, designed to monitor, manage, and equitably distribute the world’s resources using advanced technology and a systems approach. This center is essential for a sustainable, global Resource-Based Economy.
      </p>
      <div class="frosted-glass-card mb-8 max-w-3xl mx-auto text-center p-6 shadow-lg">
        <h3 :class="subheadingClass + ' mb-2'">How Outpost Proposals Power the Global Resource Survey</h3>
        <p class="text-lg text-gray-800 mb-4">Outpost Project Proposals submitted by the community are a vital input to the Global Resource Survey. Each proposal helps us map, design, and optimize a network of self-sufficient, circular cities. Contribute your vision and help shape the future of resource management.</p>
        <BaseButton as="router-link" to="/OutpostProposal" color="primary" class="mt-2 w-full md:w-auto">Submit an Outpost Proposal</BaseButton>
      </div>
      <!-- Slider -->
      <swiper-container
        :slides-per-view="1"
        :space-between="0"
        :navigation="true"
        :pagination="{ clickable: true }"
        class="tvp-slider-full mb-12"
        aria-label="Center for Resource Management Gallery"
      >
        <swiper-slide v-for="(img, i) in sliderImages" :key="i">
          <div class="relative w-full h-[400px] md:h-[520px] flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-blue-900/40 to-gray-900/40">
            <img :src="img.src" :alt="img.alt" class="absolute inset-0 w-full h-full object-cover scale-105 opacity-90 z-0" />
            <div class="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-gray-900/40 opacity-60 z-10" aria-hidden="true"></div>
            <div class="relative z-20 text-center w-full">
              <span class="inline-block px-6 py-3 bg-white/10 backdrop-blur rounded-xl text-2xl font-bold text-blue-200 shadow-xl drop-shadow-lg">{{ img.caption }}</span>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
      <!-- Main Content -->
      <div class="prose prose-lg max-w-4xl mx-auto text-gray-900 bg-white/80 rounded-xl p-8 shadow-xl">
        <h2 id="purpose">Purpose and Function</h2>
        <p>
          The Center for Resource Management is designed to monitor, manage, and equitably distribute the world’s resources using advanced technology and a systems approach. It is the core of a global Resource-Based Economy, ensuring that the needs of all people are met while maintaining ecological balance.
        </p>
        <h2 id="features">Key Features</h2>
        <ul>
          <li>Global resource monitoring and management</li>
          <li>Automated data collection and analysis</li>
          <li>Equitable distribution of goods and services</li>
          <li>Integration with city and regional resource centers</li>
          <li>Transparency and public access to data</li>
        </ul>
        <h2 id="exhibition">Exhibition of the Future</h2>
        <p>
          The Center will also serve as an educational hub, showcasing the latest advancements in science, technology, and sustainable design. Visitors can explore interactive exhibits, attend lectures, and participate in workshops focused on building a better future for all.
        </p>
        <h2 id="design">Design and Architecture</h2>
        <p>
          The Center’s circular design reflects the interconnectedness of all systems and the importance of holistic thinking. Each ring serves a specific function, from data processing to public education, and is designed for maximum efficiency and accessibility.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import SeoHead from '@/components/SeoHead.vue';
import BaseButton from '@/components/BaseButton.vue';
import { headingClass, subheadingClass } from '@/layouts/layoutClasses';

const sliderImages = [
  {
    src: 'https://www.thevenusproject.com/wp-content/uploads/2019/07/Center-for-Resource-Management-Rings-4-and-5.jpg',
    alt: 'Resource Management Rings 4 and 5',
    caption: 'Resource Management: Rings 4 & 5',
  },
  {
    src: 'https://www.thevenusproject.com/wp-content/uploads/2019/07/Center-for-Resource-Management-Rings-Numbered-3.jpg',
    alt: 'Resource Management Rings Numbered',
    caption: 'Resource Management: Numbered Rings',
  },
  {
    src: 'https://www.thevenusproject.com/wp-content/uploads/2019/07/Center-for-Resource-Management-Exhibition-of-the-Future.jpg',
    alt: 'Exhibition of the Future',
    caption: 'Exhibition of the Future',
  },
  {
    src: 'https://www.thevenusproject.com/wp-content/uploads/2019/07/Center-for-Resource-Management-Ring-2.jpg',
    alt: 'Resource Management Ring 2',
    caption: 'Resource Management: Ring 2',
  },
  {
    src: 'https://www.thevenusproject.com/wp-content/uploads/2019/07/Center-for-Resource-Management-Ring-3.jpg',
    alt: 'Resource Management Ring 3',
    caption: 'Resource Management: Ring 3',
  },
];
</script>

<style scoped>
.tvp-slider-full {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}
</style>
