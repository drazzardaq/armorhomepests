<template>
  <div class="frosted-glass-card p-8 rounded-2xl shadow-xl flex flex-col items-start justify-between min-h-[420px] bg-white">
    <img :src="img" :alt="title" class="mb-4 w-full rounded-xl object-cover shadow-lg" />
    <h3 class="text-2xl font-bold mb-2 text-gray-900">{{ title }}</h3>
    <p class="text-gray-900 mb-4"><slot name="desc">{{ description }}</slot></p>
    <ul v-if="features && features.length" class="mb-4 ml-4 list-disc text-gray-900">
      <li v-for="(f, i) in features" :key="i">{{ f }}</li>
    </ul>
    <router-link v-if="link" :to="link" class="mt-auto inline-block px-6 py-3 rounded-lg bg-blue-700 text-white font-bold shadow-lg hover:opacity-90 transition">{{ linkText }}</router-link>
  </div>
</template>
<script setup>
defineProps({
  img: String,
  title: String,
  description: String,
  features: Array,
  link: String,
  linkText: String
});
</script>
