<template>
  <div :class="['base-card', customClass]">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  customClass: String,
});
</script>

<style scoped>
.base-card {
  background: rgba(255,255,255,0.85);
  border-radius: 1.25rem;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.10);
  padding: 2rem;
  transition: box-shadow 0.2s, transform 0.2s;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.base-card:hover {
  box-shadow: 0 8px 32px 0 rgba(59,130,246,0.15);
  transform: translateY(-2px) scale(1.01);
}
</style>
