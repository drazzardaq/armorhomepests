<template>
  <button
    :class="[
      'tvp-btn',
      `tvp-btn--${variant}`,
      `tvp-btn--${size}`,
      { 'tvp-btn--block': block }
    ]"
    :type="type"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
  variant: { type: String, default: 'primary' }, // primary, secondary, outline, ghost
  size: { type: String, default: 'md' }, // sm, md, lg
  block: { type: Boolean, default: false },
  type: { type: String, default: 'button' },
  disabled: { type: Boolean, default: false }
})
defineEmits(['click'])
</script>

<style scoped>
.tvp-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border-radius: 0.75rem;
  transition: all 0.15s cubic-bezier(0.4,0,0.2,1);
  cursor: pointer;
  border: none;
  outline: none;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.08);
  gap: 0.5em;
}
.tvp-btn--primary {
  background: linear-gradient(90deg,#2563eb,#1e293b);
  color: #fff;
}
.tvp-btn--primary:hover:not(:disabled),
.tvp-btn--primary:focus-visible {
  background: linear-gradient(90deg,#1e40af,#334155);
  box-shadow: 0 4px 16px 0 rgba(37,99,235,0.15);
}
.tvp-btn--secondary {
  background: #fff;
  color: #1e293b;
  border: 2px solid #2563eb;
}
.tvp-btn--secondary:hover:not(:disabled),
.tvp-btn--secondary:focus-visible {
  background: #e0e7ff;
  color: #1e40af;
}
.tvp-btn--outline {
  background: transparent;
  color: #2563eb;
  border: 2px solid #2563eb;
}
.tvp-btn--outline:hover:not(:disabled),
.tvp-btn--outline:focus-visible {
  background: #2563eb;
  color: #fff;
}
.tvp-btn--ghost {
  background: transparent;
  color: #1e293b;
}
.tvp-btn--ghost:hover:not(:disabled),
.tvp-btn--ghost:focus-visible {
  background: #f1f5f9;
}
.tvp-btn--sm {
  font-size: 0.875rem;
  padding: 0.5em 1.25em;
}
.tvp-btn--md {
  font-size: 1rem;
  padding: 0.75em 1.75em;
}
.tvp-btn--lg {
  font-size: 1.125rem;
  padding: 1em 2.25em;
}
.tvp-btn--block {
  width: 100%;
  display: flex;
}
.tvp-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
