<template>
  <button
    :class="[
      'btn-unified',
      sizeClass,
      { 'is-loading': loading, 'is-disabled': disabled },
      customClass
    ]"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
    @focus="$emit('focus', $event)"
    @blur="$emit('blur', $event)"
    :aria-busy="loading ? 'true' : 'false'"
    :aria-disabled="disabled ? 'true' : 'false'"
    :tabindex="disabled ? -1 : 0"
    type="button"
  >
    <span v-if="loading" class="btn-spinner" aria-hidden="true"></span>
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  size: { type: String, default: 'md' }, // sm, md, lg
  loading: Boolean,
  disabled: Boolean,
  customClass: String,
});
const sizeClass = computed(() => ({
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2 text-base',
  lg: 'px-7 py-3 text-lg',
}[props.size] || 'px-5 py-2 text-base'));
</script>

<style scoped>
.btn-spinner {
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 2px solid #fff;
  border-top: 2px solid #143395;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  margin-right: 0.5em;
  vertical-align: middle;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
