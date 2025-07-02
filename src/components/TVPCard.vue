<template>
  <div :class="['tvp-card', `tvp-card--${variant}`, 'glass-effect', 'rounded-2xl', 'shadow-lg', 'font-ui']">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  variant: { type: String, default: 'default' } // default, highlight, info, warning, success
})
</script>

<style scoped>
.tvp-card {
  background: #fff1;
  border-radius: 1.25rem;
  box-shadow: 0 4px 24px 0 rgba(30,41,59,0.10);
  padding: 2rem;
  margin-bottom: 2rem;
  transition: box-shadow 0.2s, background 0.2s;
  border: 1.5px solid #e0e7ef33;
}
.tvp-card--highlight {
  background: linear-gradient(90deg,#e0e7ff33 0,#f1f5f933 100%);
  border-color: #2563eb;
}
.tvp-card--info {
  background: #f0f9ff22;
  border-color: #38bdf8;
}
.tvp-card--warning {
  background: #fff7ed22;
  border-color: #f59e42;
}
.tvp-card--success {
  background: #f0fdf422;
  border-color: #22c55e;
}
.tvp-card:hover {
  box-shadow: 0 8px 32px 0 rgba(30,41,59,0.18);
  background: #fff2;
}
</style>
