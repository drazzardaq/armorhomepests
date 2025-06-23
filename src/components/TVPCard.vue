<template>
  <div :class="['tvp-card', `tvp-card--${variant}`]">
    <slot />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  variant: { type: String, default: 'default' } // default, highlight, info, warning, success
})
</script>

<style scoped>
.tvp-card {
  background: #fff;
  border-radius: 1.25rem;
  box-shadow: 0 4px 24px 0 rgba(30,41,59,0.10);
  padding: 2rem;
  margin-bottom: 2rem;
  transition: box-shadow 0.2s;
  border: 1.5px solid #e0e7ef;
}
.tvp-card--highlight {
  background: linear-gradient(90deg,#e0e7ff 0,#f1f5f9 100%);
  border-color: #2563eb;
}
.tvp-card--info {
  background: #f0f9ff;
  border-color: #38bdf8;
}
.tvp-card--warning {
  background: #fff7ed;
  border-color: #f59e42;
}
.tvp-card--success {
  background: #f0fdf4;
  border-color: #22c55e;
}
.tvp-card:hover {
  box-shadow: 0 8px 32px 0 rgba(30,41,59,0.16);
}
</style>
