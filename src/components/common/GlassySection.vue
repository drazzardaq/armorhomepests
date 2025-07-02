<template>
  <section class="glassy-bg w-full max-w-7xl mx-auto rounded-2xl shadow-2xl px-4 py-10 md:py-16 glassy-interact">
    <slot />
  </section>
</template>

<script setup>
// No props needed for now, but could add title/aria-label for accessibility
</script>

<style scoped>
.glassy-bg {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.glassy-interact {
  transition: transform 0.3s;
}

.glassy-interact:hover {
  transform: scale(1.02);
}
</style>