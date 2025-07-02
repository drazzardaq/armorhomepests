<template>
  <!-- Documentation Mode -->
  <div v-if="isDocs" class="DUIMX-docs prose prose-purple max-w-none">
    <div class="mb-6 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4">
      <h2 class="mb-2 text-2xl font-bold text-purple-300">🎛️ DUIMX Neumorphic Toggle</h2>
      <p class="text-purple-200">Beautiful neumorphic-style toggle switches with soft shadows and elegant animations.</p>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">✨ Features</h3>
    <ul class="mb-6 space-y-2 text-purple-200">
      <li>🎨 <strong>Neumorphic Design</strong> - Soft, elegant 3D appearance</li>
      <li>🌓 <strong>Theme Adaptive</strong> - Light and dark mode support</li>
      <li>⚡ <strong>Smooth Animations</strong> - Fluid toggle transitions</li>
      <li>🎛️ <strong>Multiple Variants</strong> - Round, square, pill shapes</li>
      <li>♿ <strong>Accessible</strong> - Keyboard navigation and ARIA support</li>
      <li>🔧 <strong>Customizable</strong> - Colors, sizes, and shadows</li>
    </ul>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">🛠️ Props</h3>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full border-collapse border border-purple-500/30">
        <thead>
          <tr class="bg-purple-500/20">
            <th class="border border-purple-500/30 p-2 text-left text-purple-300">Prop</th>
            <th class="border border-purple-500/30 p-2 text-left text-purple-300">Type</th>
            <th class="border border-purple-500/30 p-2 text-left text-purple-300">Default</th>
            <th class="border border-purple-500/30 p-2 text-left text-purple-300">Description</th>
          </tr>
        </thead>
        <tbody class="text-purple-200">
          <tr><td class="border border-purple-500/30 p-2 font-mono">modelValue</td><td class="border border-purple-500/30 p-2">Boolean</td><td class="border border-purple-500/30 p-2">false</td><td class="border border-purple-500/30 p-2">Toggle state (v-model)</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">variant</td><td class="border border-purple-500/30 p-2">String</td><td class="border border-purple-500/30 p-2">'round'</td><td class="border border-purple-500/30 p-2">Toggle shape variant</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">size</td><td class="border border-purple-500/30 p-2">String</td><td class="border border-purple-500/30 p-2">'medium'</td><td class="border border-purple-500/30 p-2">Size preset</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">disabled</td><td class="border border-purple-500/30 p-2">Boolean</td><td class="border border-purple-500/30 p-2">false</td><td class="border border-purple-500/30 p-2">Disable interaction</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">shadowIntensity</td><td class="border border-purple-500/30 p-2">Number</td><td class="border border-purple-500/30 p-2">1</td><td class="border border-purple-500/30 p-2">Shadow depth (0-2)</td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">🎨 Variants</h3>
    <div class="mb-6 grid grid-cols-2 gap-4">
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">round</h4>
        <p class="text-purple-200 text-sm">Classic circular toggle button</p>
      </div>
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">square</h4>
        <p class="text-purple-200 text-sm">Square toggle with rounded corners</p>
      </div>
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">pill</h4>
        <p class="text-purple-200 text-sm">Pill-shaped toggle switch</p>
      </div>
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">lever</h4>
        <p class="text-purple-200 text-sm">Sliding lever style</p>
      </div>
    </div>

    <div class="mb-6 rounded-lg border border-purple-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4">
      <p class="text-center text-purple-200">
        <strong>🔗 Source Code:</strong> 
        <a href="https://github.com/drazzardaq/opensource/blob/master/src/opensource/DimNeumorphicToggle.vue" 
           target="_blank" 
           class="text-purple-300 hover:text-purple-100 transition-colors underline">
          View on GitHub
        </a>
      </p>
    </div>
  </div>

  <!-- Component Mode -->
  <div v-else class="DUIMX-neumorphic-toggle">
    <!-- Round Variant -->
    <button v-if="variant === 'round'"
            class="relative transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
            :class="[roundClasses, { 'opacity-50 cursor-not-allowed': disabled }]"
            :style="roundStyles"
            :disabled="disabled"
            @click="toggle"
            role="switch"
            :aria-checked="modelValue">
      <div class="absolute inset-1 rounded-full transition-all duration-300"
           :style="innerButtonStyles"></div>
    </button>

    <!-- Square Variant -->
    <button v-else-if="variant === 'square'"
            class="relative transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
            :class="[squareClasses, { 'opacity-50 cursor-not-allowed': disabled }]"
            :style="squareStyles"
            :disabled="disabled"
            @click="toggle"
            role="switch"
            :aria-checked="modelValue">
      <div class="absolute inset-1 transition-all duration-300"
           :style="[innerSquareStyles, { borderRadius: `${roundness * 0.5}px` }]"></div>
    </button>

    <!-- Pill Variant -->
    <button v-else-if="variant === 'pill'"
            class="relative transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
            :class="[pillClasses, { 'opacity-50 cursor-not-allowed': disabled }]"
            :style="pillStyles"
            :disabled="disabled"
            @click="toggle"
            role="switch"
            :aria-checked="modelValue">
      <div class="absolute top-1 left-1 h-6 w-6 rounded-full transition-all duration-300"
           :style="pillKnobStyles"></div>
    </button>

    <!-- Lever Variant -->
    <div v-else-if="variant === 'lever'"
         class="relative"
         :style="{ width: `${leverWidth}px`, height: `${leverHeight}px` }">
      <div class="absolute inset-0 rounded-full transition-all duration-300"
           :style="leverTrackStyles"></div>
      <button class="absolute top-0.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
              :class="{ 'opacity-50 cursor-not-allowed': disabled }"
              :style="leverKnobStyles"
              :disabled="disabled"
              @click="toggle"
              role="switch"
              :aria-checked="modelValue">
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  // Documentation mode
  isDocs: { type: Boolean, default: false },
  
  // Core functionality
  modelValue: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  
  // Appearance
  variant: { type: String, default: 'round' }, // round, square, pill, lever
  size: { type: String, default: 'medium' }, // small, medium, large
  shadowIntensity: { type: Number, default: 1 }, // 0-2
  
  // Theme and styling
  roundness: { type: Number, default: 16 },
  primaryColor: { type: String, default: '#6366f1' },
  bgColor: { type: String, default: '#f1f5f9' },
  textColor: { type: String, default: '#1f2937' },
  fontFamily: { type: String, default: 'inherit' },
  theme: { type: String, default: 'light' },
  width: { type: Number, default: 48 },
  height: { type: Number, default: 48 },
  padding: { type: Number, default: 8 },
  margin: { type: Number, default: 8 },
  boxShadow: { type: String, default: '0 4px 6px rgba(0, 0, 0, 0.1)' },
  borderWidth: { type: Number, default: 0 },
  animation: { type: String, default: 'none' }
});

const emit = defineEmits(['update:modelValue']);

const toggle = () => {
  if (!props.disabled) {
    emit('update:modelValue', !props.modelValue);
  }
};

const sizeMap = computed(() => {
  const sizes = {
    small: { width: 32, height: 32 },
    medium: { width: 48, height: 48 },
    large: { width: 64, height: 64 }
  };
  return sizes[props.size] || sizes.medium;
});

const shadowStyles = computed(() => {
  const intensity = Math.max(0, Math.min(2, props.shadowIntensity));
  const baseOffset = 2 * intensity;
  const blurRadius = 8 * intensity;
  const spreadRadius = 0;
  
  if (props.theme === 'dark') {
    return {
      boxShadow: props.modelValue
        ? `inset ${baseOffset}px ${baseOffset}px ${blurRadius}px rgba(0,0,0,0.3), inset -${baseOffset}px -${baseOffset}px ${blurRadius}px rgba(255,255,255,0.1)`
        : `${baseOffset}px ${baseOffset}px ${blurRadius}px rgba(0,0,0,0.3), -${baseOffset}px -${baseOffset}px ${blurRadius}px rgba(255,255,255,0.1)`
    };
  } else {
    return {
      boxShadow: props.modelValue
        ? `inset ${baseOffset}px ${baseOffset}px ${blurRadius}px rgba(0,0,0,0.2), inset -${baseOffset}px -${baseOffset}px ${blurRadius}px rgba(255,255,255,1)`
        : `${baseOffset}px ${baseOffset}px ${blurRadius}px rgba(0,0,0,0.2), -${baseOffset}px -${baseOffset}px ${blurRadius}px rgba(255,255,255,1)`
    };
  }
});

// Round variant styles
const roundClasses = computed(() => {
  return 'rounded-full';
});

const roundStyles = computed(() => {
  return {
    width: `${sizeMap.value.width}px`,
    height: `${sizeMap.value.height}px`,
    backgroundColor: props.bgColor,
    ...shadowStyles.value,
    focusRingColor: props.primaryColor
  };
});

const innerButtonStyles = computed(() => {
  return {
    backgroundColor: props.modelValue ? props.primaryColor : props.bgColor,
    boxShadow: props.modelValue 
      ? `0 2px 4px rgba(0,0,0,0.2)` 
      : `inset 0 2px 4px rgba(0,0,0,0.1)`,
    transform: props.modelValue ? 'scale(0.9)' : 'scale(1)'
  };
});

// Square variant styles
const squareClasses = computed(() => {
  return '';
});

const squareStyles = computed(() => {
  return {
    width: `${sizeMap.value.width}px`,
    height: `${sizeMap.value.height}px`,
    backgroundColor: props.bgColor,
    borderRadius: `${props.roundness}px`,
    ...shadowStyles.value,
    focusRingColor: props.primaryColor
  };
});

const innerSquareStyles = computed(() => {
  return {
    backgroundColor: props.modelValue ? props.primaryColor : props.bgColor,
    boxShadow: props.modelValue 
      ? `0 2px 4px rgba(0,0,0,0.2)` 
      : `inset 0 2px 4px rgba(0,0,0,0.1)`,
    transform: props.modelValue ? 'scale(0.85)' : 'scale(1)'
  };
});

// Pill variant styles
const pillClasses = computed(() => {
  return 'rounded-full';
});

const pillStyles = computed(() => {
  return {
    width: '56px',
    height: '32px',
    backgroundColor: props.modelValue ? props.primaryColor : props.bgColor,
    ...shadowStyles.value,
    focusRingColor: props.primaryColor
  };
});

const pillKnobStyles = computed(() => {
  return {
    backgroundColor: props.theme === 'dark' ? '#ffffff' : '#ffffff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    transform: props.modelValue ? 'translateX(24px)' : 'translateX(0)'
  };
});

// Lever variant styles
const leverWidth = computed(() => 64);
const leverHeight = computed(() => 32);

const leverTrackStyles = computed(() => {
  return {
    backgroundColor: props.modelValue ? props.primaryColor : props.bgColor,
    ...shadowStyles.value
  };
});

const leverKnobStyles = computed(() => {
  return {
    width: '28px',
    height: '28px',
    backgroundColor: props.theme === 'dark' ? '#ffffff' : '#ffffff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
    left: props.modelValue ? '34px' : '2px',
    focusRingColor: props.primaryColor
  };
});
</script>
