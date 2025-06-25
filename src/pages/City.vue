<template>
  <div class="bg-black text-white min-h-screen font-body">
    <CitySection parallaxImage="https://www.resourcebasedeconomy.org/wp-content/uploads/sites/2/2017/10/aerial_main_city_still.jpg" parallaxStrength="0.18">
      <div class="relative z-10 text-center py-24">
        <h1 class="text-5xl md:text-6xl font-heading mb-6 drop-shadow-xl">City With A Purpose</h1>
        <p class="max-w-2xl mx-auto font-ui text-lg md:text-2xl text-white/90">A city designed to showcase the next stage in humanity’s social evolution — built to solve problems, not create them.</p>
      </div>
    </CitySection>

    <CitySection parallaxImage="https://www.resourcebasedeconomy.org/wp-content/uploads/sites/2/2017/10/aerial_circular_ring_city_still.jpg" parallaxStrength="0.12">
      <div class="text-center py-16 max-w-5xl mx-auto">
        <h2 class="text-4xl font-heading mb-4">The Vision</h2>
        <p class="font-ui max-w-3xl mx-auto text-lg leading-relaxed mb-8">
          This city is unlike any other. It has a purpose: to help usher in the next step in humanity’s social evolution. Designed to solve problems, not create them, it is a living demonstration of abundance, sustainability, and collaboration—where technology and design serve the wellbeing of all.
        </p>
        <a href="https://www.resourcebasedeconomy.org/" target="_blank" class="inline-block mt-2 px-6 py-3 rounded-xl bg-cyan-400 text-black font-bold font-ui hover:bg-cyan-300 transition">Learn More</a>
      </div>
    </CitySection>

    <CitySection parallaxImage="https://www.resourcebasedeconomy.org/wp-content/uploads/sites/2/2017/10/automated_canal_digger.jpg" parallaxStrength="0.10">
      <div class="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
        <div>
          <h3 class="text-2xl font-heading mb-2">Automated Infrastructure</h3>
          <p class="font-ui text-lg mb-4">Automation and cybernation are at the heart of the city, from food production to transportation, ensuring abundance and freeing people to pursue creativity and collaboration.</p>
          <ul class="list-disc ml-6 text-left text-base font-body text-white/80">
            <li>Automated canal diggers and construction</li>
            <li>Renewable energy grid and smart water systems</li>
            <li>Self-sustaining food and resource management</li>
          </ul>
        </div>
        <img src="https://www.resourcebasedeconomy.org/wp-content/uploads/sites/2/2017/10/automated_canal_digger.jpg" class="w-full object-cover rounded-xl shadow-lg" alt="Automated Canal Digger" />
      </div>
    </CitySection>

    <CitySection parallaxImage="https://www.resourcebasedeconomy.org/wp-content/uploads/sites/2/2017/10/jacque_fresco_city_model.jpg" parallaxStrength="0.10">
      <div class="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
        <img src="https://www.resourcebasedeconomy.org/wp-content/uploads/sites/2/2017/10/jacque_fresco_city_model.jpg" class="w-full object-cover rounded-xl shadow-lg" alt="Jacque Fresco City Model" />
        <div>
          <h3 class="text-2xl font-heading mb-2">Design for Wellbeing</h3>
          <p class="font-ui text-lg mb-4">Circular city design, green belts, and modular architecture create a harmonious, healthy environment for all residents—eliminating waste and maximizing quality of life.</p>
          <ul class="list-disc ml-6 text-left text-base font-body text-white/80">
            <li>Green spaces and recreation at every level</li>
            <li>Universal access to education, healthcare, and culture</li>
            <li>Open-source technology and transparent governance</li>
          </ul>
        </div>
      </div>
    </CitySection>

    <!-- <CitySection animate="false">
      <div class="bg-blue-900 p-10 text-center rounded-xl my-10 max-w-4xl mx-auto">
        <blockquote class="italic font-ui text-xl">
          “Technology is just so much junk unless it improves the lives of all people”
          <br />
          <small class="block mt-2 text-gray-400">— Jacque Fresco</small>
        </blockquote>
      </div>
    </CitySection> -->

    <CitySection parallaxImage="https://www.resourcebasedeconomy.org/wp-content/uploads/sites/2/2017/10/jacque_fresco.png" parallaxStrength="0.08">
      <div class="flex flex-col md:flex-row gap-6 justify-center items-center max-w-5xl mx-auto text-center py-12">
        <img src="https://www.resourcebasedeconomy.org/wp-content/uploads/sites/2/2017/10/jacque_fresco.png" class="w-48 h-48 object-cover rounded-full shadow-lg" alt="Jacque Fresco" />
        <div>
          <p class="font-ui text-lg mb-2">Inspired by the vision of Jacque Fresco and the Resource Based Economy movement.</p>
          
        </div>
      </div>
    </CitySection>
  </div>
</template>

<script setup>
import CitySection from '@/components/CitySection.vue'
</script>
