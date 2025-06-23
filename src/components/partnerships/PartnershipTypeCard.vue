<template>
  <div class="frosted-glass-card p-8 rounded-lg flex flex-col items-start justify-between min-h-[220px] shadow-xl">
    <h3 class="text-2xl font-bold mb-2 text-blue-400">{{ title }}</h3>
    <p class="text-gray-700 mb-4">{{ description }}</p>
    <router-link :to="link" class="mt-auto inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-tvp-blue to-tvp-teal text-white font-bold shadow-lg hover:opacity-90 transition">
      Learn More
    </router-link>
  </div>
</template>
<script setup>
defineProps({
  title: String,
  description: String,
  link: String
});
</script>
