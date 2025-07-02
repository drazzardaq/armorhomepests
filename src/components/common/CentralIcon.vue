<template>
  <div class="central-icon glassy-interact">
    <img v-if="color === 'dark'" src="/icon-white.png" alt="The Venus Project Icon" class="central-icon-img !invert" />
    <img v-else-if="color === 'default'" src="/icon.png" alt="The Venus Project Icon" class="central-icon-img" />
    <img v-else-if="color === 'white'" src="/icon-white.png" alt="The Venus Project Icon" class="central-icon-img" />
  </div>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: 'default', // default, primary, secondary, accent
  },
});
</script>

<style scoped>
.central-icon {
  @apply rounded-full  mb-4 flex items-center justify-center;
}
.central-icon-img {
  @apply w-32 h-32 md:w-40 md:h-40 object-contain scale-100 transition-transform duration-300;
}
.central-icon-img:hover {
  @apply scale-105;
}
</style>
