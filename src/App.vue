<template>
  <div class="min-h-screen bg-white text-black">
    <router-view />
    <PWAInstallPrompt />
  </div>
</template>

<script setup>
import PWAInstallPrompt from '@/components/PWAInstallPrompt.vue';
</script>

<style>
@import '@/assets/css/main.css';
</style> 