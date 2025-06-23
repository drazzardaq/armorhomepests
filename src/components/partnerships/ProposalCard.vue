<template>
  <div class="frosted-glass-card p-8 rounded-2xl shadow-xl flex flex-col items-start justify-between min-h-[420px]">
    <img :src="img" :alt="title" class="mb-4 w-full rounded-xl object-cover shadow-lg" />
    <h3 class="text-2xl font-bold mb-2 bg-gradient-to-r from-tvp-purple via-tvp-blue to-tvp-teal bg-clip-text text-transparent">{{ title }}</h3>
    <p class="text-gray-800 mb-4">{{ description }}</p>
    <ul class="mb-4 ml-4 list-disc text-gray-700">
      <li v-for="(point, i) in points" :key="i">{{ point }}</li>
    </ul>
    <a :href="link" class="mt-auto inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-tvp-blue to-tvp-teal text-white font-bold shadow-lg hover:opacity-90 transition">{{ linkText }}</a>
  </div>
</template>
<script setup>
defineProps({
  img: String,
  title: String,
  description: String,
  points: Array,
  link: String,
  linkText: String
});
</script>
