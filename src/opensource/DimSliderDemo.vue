<template>
  <!-- Documentation Mode -->
  <div v-if="isDocs" class="DUIMX-docs prose prose-purple max-w-none">
    <div class="mb-6 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4">
      <h2 class="mb-2 text-2xl font-bold text-purple-300">📊 DUIMX Range Slider</h2>
      <p class="text-purple-200">Modern range slider component with precise value control, visual feedback, and customizable styling.</p>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">✨ Features</h3>
    <ul class="mb-6 space-y-2 text-purple-200">
      <li>🎯 <strong>Precise Control</strong> - Smooth value selection with visual feedback</li>
      <li>📊 <strong>Range Display</strong> - Real-time value indication</li>
      <li>🎨 <strong>Custom Styling</strong> - Fully customizable track and thumb</li>
      <li>⌨️ <strong>Keyboard Support</strong> - Arrow keys for fine adjustments</li>
      <li>📱 <strong>Touch Friendly</strong> - Works perfectly on mobile devices</li>
      <li>♿ <strong>Accessible</strong> - ARIA compliant with screen reader support</li>
      <li>🔧 <strong>Fully Reactive</strong> - Responds to all layout and theme changes</li>
    </ul>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">🎯 Usage Example</h3>
    <div class="mb-6 rounded-lg border border-purple-500/30 bg-slate-800/50 p-4">
      <pre class="text-sm text-purple-200"><code>&lt;DimSliderDemo 
  v-model="value"
  :min="0"
  :max="100"
  :step="1"
  label="Volume"
  :showValue="true"
  primaryColor="#10b981"
  theme="dark"
&gt;&lt;/DimSliderDemo&gt;</code></pre>
    </div>

    <div class="mb-6 rounded-lg border border-purple-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4">
      <p class="text-center text-purple-200">
        <strong>🔗 Source Code:</strong> 
        <a href="https://github.com/drazzardaq/opensource/blob/master/src/opensource/DimSliderDemo.vue" 
           target="_blank" 
           class="text-purple-300 hover:text-purple-100 transition-colors underline">
          View on GitHub
        </a>
      </p>
    </div>

    <div class="text-center text-xs text-purple-400 opacity-75">
      Part of the <strong>DUIMX</strong> component library 🚀
    </div>
  </div>
  
  <!-- Normal Component Mode -->
  <div v-else class="slider-container" :style="containerStyles">
    <!-- Label -->
    <div v-if="label" class="slider-label mb-2 font-medium" :style="labelStyles">
      {{ label }}
      <span v-if="showValue" class="slider-value ml-2 px-2 py-1 text-xs rounded" :style="valueStyles">
        {{ sliderValue }}{{ unit }}
      </span>
    </div>

    <!-- Slider -->
    <div class="slider-wrapper relative" :style="wrapperStyles">
      <input
        v-model="sliderValue"
        type="range"
        :min="min"
        :max="max"
        :step="step"
        class="slider-input w-full h-6 appearance-none cursor-pointer focus:outline-none"
        :style="sliderStyles"
        @input="handleInput"
        @keydown="handleKeydown"
        :aria-label="label || 'Range slider'"
        :aria-valuemin="min"
        :aria-valuemax="max"
        :aria-valuenow="sliderValue"
      />
      
      <!-- Custom Track -->
      <div class="slider-track absolute top-1/2 left-0 right-0 transform -translate-y-1/2 pointer-events-none" :style="trackStyles">
        <div class="slider-progress" :style="progressStyles"></div>
      </div>
      
      <!-- Custom Thumb -->
      <div 
        class="slider-thumb absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 pointer-events-none transition-all duration-200"
        :style="thumbStyles"
      >
        <div v-if="showThumbValue" class="thumb-tooltip absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs rounded whitespace-nowrap" :style="tooltipStyles">
          {{ sliderValue }}{{ unit }}
        </div>
      </div>
    </div>

    <!-- Min/Max Labels -->
    <div v-if="showMinMax" class="slider-labels flex justify-between mt-1 text-xs" :style="labelsStyles">
      <span>{{ min }}{{ unit }}</span>
      <span>{{ max }}{{ unit }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  roundness: { type: Number, default: 8 },
  primaryColor: { type: String, default: '#6366f1' },
  bgColor: { type: String, default: '#ffffff' },
  textColor: { type: String, default: '#1f2937' },
  fontFamily: { type: String, default: 'inherit' },
  width: { type: Number, default: 300 },
  height: { type: Number, default: 48 },
  padding: { type: Number, default: 16 },
  margin: { type: Number, default: 8 },
  theme: { type: String, default: 'light' },
  compact: { type: Boolean, default: false },
  isDocs: { type: Boolean, default: false },
  
  // Slider-specific props
  modelValue: { type: Number, default: 50 },
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  step: { type: Number, default: 1 },
  label: { type: String, default: 'Range Slider' },
  unit: { type: String, default: '' },
  showValue: { type: Boolean, default: true },
  showThumbValue: { type: Boolean, default: false },
  showMinMax: { type: Boolean, default: true }
});

const emit = defineEmits(['update:modelValue']);

// Reactive state
const sliderValue = ref(props.modelValue);

// Watch for external updates
watch(() => props.modelValue, (newValue) => {
  sliderValue.value = newValue;
});

// Computed properties
const containerStyles = computed(() => ({
  fontFamily: props.fontFamily,
  maxWidth: `${props.width}px`,
  margin: `${props.margin}px`,
  padding: `${props.padding}px`
}));

const labelStyles = computed(() => ({
  color: props.textColor,
  fontSize: props.compact ? '0.875rem' : '1rem'
}));

const valueStyles = computed(() => ({
  backgroundColor: props.primaryColor + '20',
  color: props.primaryColor,
  border: `1px solid ${props.primaryColor}40`
}));

const wrapperStyles = computed(() => ({
  height: '24px'
}));

const sliderStyles = computed(() => ({
  background: 'transparent',
  borderRadius: `${props.roundness}px`
}));

const trackStyles = computed(() => ({
  height: '8px',
  backgroundColor: props.theme === 'light' ? '#e5e7eb' : '#374151',
  borderRadius: `${props.roundness}px`
}));

const progressStyles = computed(() => {
  const percentage = ((sliderValue.value - props.min) / (props.max - props.min)) * 100;
  return {
    width: `${percentage}%`,
    height: '100%',
    backgroundColor: props.primaryColor,
    borderRadius: `${props.roundness}px`,
    transition: 'width 0.2s ease'
  };
});

const thumbStyles = computed(() => {
  const percentage = ((sliderValue.value - props.min) / (props.max - props.min)) * 100;
  return {
    left: `${percentage}%`,
    width: '20px',
    height: '20px',
    backgroundColor: 'white',
    border: `3px solid ${props.primaryColor}`,
    borderRadius: '50%',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    cursor: 'pointer'
  };
});

const tooltipStyles = computed(() => ({
  backgroundColor: props.primaryColor,
  color: 'white',
  borderRadius: `${props.roundness / 2}px`,
  fontSize: '0.75rem'
}));

const labelsStyles = computed(() => ({
  color: props.textColor + '80'
}));

// Methods
const handleInput = () => {
  emit('update:modelValue', Number(sliderValue.value));
};

const handleKeydown = (event) => {
  let newValue = Number(sliderValue.value);
  
  if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
    newValue = Math.max(props.min, newValue - props.step);
  } else if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
    newValue = Math.min(props.max, newValue + props.step);
  } else if (event.key === 'Home') {
    newValue = props.min;
  } else if (event.key === 'End') {
    newValue = props.max;
  } else {
    return;
  }
  
  event.preventDefault();
  sliderValue.value = newValue;
  emit('update:modelValue', newValue);
};
</script>

<style scoped>
.slider-input {
  background: transparent;
}

.slider-input::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  border: 3px solid currentColor;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.slider-input::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  border: 3px solid currentColor;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.slider-input:focus {
  outline: 2px solid rgba(99, 102, 241, 0.4);
  outline-offset: 2px;
}

.slider-thumb:hover {
  transform: translate(-50%, -50%) scale(1.1);
}

@keyframes pulse-thumb {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  50% { transform: translate(-50%, -50%) scale(1.1); }
}

.slider-input:active + .slider-track + .slider-thumb {
  animation: pulse-thumb 0.3s ease-in-out;
}
</style>
