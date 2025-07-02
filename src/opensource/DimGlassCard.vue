<template>
  <GlassCardComponent v-bind="props" />
</template>

<script setup>
import GlassCardComponent from './components/GlassCardComponent.vue';
const props = defineProps({
  roundness: { type: Number, default: 16 },
  primaryColor: { type: String, default: '#6366f1' },
  bgColor: { type: String, default: '#1e293b' },
  textColor: { type: String, default: '#e2e8f0' },
  fontFamily: { type: String, default: 'inherit' },
  width: { type: Number, default: 320 },
  height: { type: Number, default: 180 },
  padding: { type: Number, default: 24 },
  margin: { type: Number, default: 12 },
  theme: { type: String, default: 'dark' },
  compact: { type: Boolean, default: false }
});
</script>

<!-- This file is now merged into DimCard.vue as a variant. Safe to delete. -->
