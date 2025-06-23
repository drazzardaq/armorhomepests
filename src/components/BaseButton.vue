<template>
  <button
    :class="[
      'base-btn',
      sizeClass,
      colorClass,
      { 'is-loading': loading, 'is-disabled': disabled },
      customClass
    ]"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
    @focus="$emit('focus', $event)"
    @blur="$emit('blur', $event)"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  size: { type: String, default: 'md' }, // sm, md, lg
  color: { type: String, default: 'primary' }, // primary, secondary, accent, danger
  loading: Boolean,
  disabled: Boolean,
  customClass: String,
});
const sizeClass = computed(() => ({
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2 text-base',
  lg: 'px-7 py-3 text-lg',
}[props.size] || 'px-5 py-2 text-base'));
const colorClass = computed(() => ({
  primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300',
  secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-300',
  accent: 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-300',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-300',
}[props.color] || 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300'));
</script>

<style scoped>
.base-btn {
  border-radius: 0.75rem;
  font-weight: 600;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  outline: none;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.07);
  cursor: pointer;
  position: relative;
}
.base-btn:focus {
  box-shadow: 0 0 0 3px rgba(59,130,246,0.2);
}
.base-btn.is-loading {
  opacity: 0.7;
  pointer-events: none;
}
.base-btn.is-disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
