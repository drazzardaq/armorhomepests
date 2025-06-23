<template>
  <div class="central-icon glassy-interact">
    <img src="/icon.png" alt="The Venus Project Icon" class="central-icon-img" />
  </div>
</template>

<script setup>
// No props needed for now, but could add src/alt for reuse
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
