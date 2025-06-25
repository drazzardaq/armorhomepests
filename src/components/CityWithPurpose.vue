<template>
  <section class="relative min-h-[550px] glass-effect text-white overflow-hidden rounded-2xl shadow-lg mb-12 w-[980px] max-w-7xl mx-auto">
    <div class="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-8">
      <div class="absolute inset-0 bg-gradient-to-br from-crypto-dark/20 via-black/50 to-transparent rounded-2xl"></div>
      <h1 class="text-5xl font-heading mb-6 drop-shadow-xl text-white">City With A Purpose</h1>
      <p class="max-w-2xl mx-auto font-ui text-xl text-white relative z-10">
        A city designed to showcase the next stage in humanity’s social evolution — built to solve problems, not create them.
      </p>
      <RouterLink to="/city" class="mt-10 inline-block px-6 py-3 rounded-xl bg-teal-400 text-black font-bold hover:bg-teal-300 transition font-ui shadow-soft">
        Learn More
      </RouterLink>
    </div>
    <div class="absolute inset-0 z-10 w-[980px] !h-full min-h-[550px] mx-auto flex flex-col items-center justify-center text-center">
      <iframe
        class="w-[980px] min-w-[980px] h-full min-h-[550px] object-cover opacity-80 hover:opacity-100 transition-opacity"
        src="https://www.youtube-nocookie.com/embed/z1ibeM3SN3I?autoplay=0&controls=0&mute=1&loop=1&playlist=z1ibeM3SN3I"
        title="City With A Purpose"
        frameborder="0"
        allow="autoplay; encrypted-media"
      />
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
