<template>
  <div :class="['unified-card', customClass]" tabindex="0" role="region">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  customClass: String,
});
</script>

<style scoped>
.unified-card {
  background: rgba(255,255,255,0.85);
  border-radius: 1.25rem;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.10);
  padding: 2rem;
  transition: box-shadow 0.2s, transform 0.2s;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.unified-card:hover {
  box-shadow: 0 8px 32px 0 rgba(59,130,246,0.15);
  transform: translateY(-2px) scale(1.01);
}
</style>
