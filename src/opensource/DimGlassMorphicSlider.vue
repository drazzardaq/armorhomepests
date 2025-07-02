<template>
  <div
    class="glassmorphic-slider-component"
    :class="[`variant-${variant}`]"
    :style="sliderStyle"
  >
    <input
      type="range"
      :min="min"
      :max="max"
      :step="step"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.valueAsNumber)"
      class="slider-input"
      :style="inputStyle"
    />
    <div class="slider-value mt-2 text-xs text-purple-300">{{ modelValue }}</div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
const props = defineProps({
  variant: { type: String, default: 'glass' },
  roundness: { type: Number, default: 12 },
  primaryColor: { type: String, default: '#6366f1' },
  bgColor: { type: String, default: '#1e293b' },
  textColor: { type: String, default: '#e2e8f0' },
  fontFamily: { type: String, default: 'inherit' },
  width: { type: Number, default: 320 },
  height: { type: Number, default: 48 },
  padding: { type: Number, default: 12 },
  margin: { type: Number, default: 8 },
  theme: { type: String, default: 'dark' },
  compact: { type: Boolean, default: false },
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  step: { type: Number, default: 1 },
  modelValue: { type: Number, default: 50 }
});
const emit = defineEmits(['update:modelValue']);

const sliderStyle = computed(() => ({
  borderRadius: `${props.roundness}px`,
  background: props.variant === 'glass' ? 'rgba(30,41,59,0.7)' : 'rgba(99,102,241,0.1)',
  color: props.textColor,
  fontFamily: props.fontFamily,
  width: `${props.width}px`,
  height: `${props.height}px`,
  padding: `${props.padding}px`,
  margin: `${props.margin}px`,
  boxShadow: '0 2px 8px 0 rgba(99,102,241,0.10)',
  backdropFilter: props.variant === 'glass' ? 'blur(8px)' : undefined,
  border: `1.5px solid ${props.primaryColor}40`,
  transition: 'box-shadow 0.2s, background 0.2s'
}));
const inputStyle = computed(() => ({
  width: '100%',
  accentColor: props.primaryColor,
  borderRadius: `${props.roundness}px`
}));
</script>

<style scoped>
.glassmorphic-slider-component {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.slider-input {
  width: 100%;
  height: 6px;
  background: rgba(99,102,241,0.2);
  border-radius: 8px;
  outline: none;
  transition: background 0.2s;
}
.slider-input::-webkit-slider-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #6366f1;
  cursor: pointer;
  box-shadow: 0 2px 8px 0 rgba(99,102,241,0.15);
  transition: background 0.2s;
}
.slider-input:focus {
  outline: none;
}
</style>
