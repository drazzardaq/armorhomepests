<template>
  <!-- Documentation Mode -->
  <div v-if="isDocs" class="DUIMX-docs prose prose-purple max-w-none">
    <div class="mb-6 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4">
      <h2 class="mb-2 text-2xl font-bold text-purple-300">🔀 DUIMX Toggle Switch</h2>
      <p class="text-purple-200">Modern toggle switch component with smooth animations, customizable styles, and accessibility features.</p>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">✨ Features</h3>
    <ul class="mb-6 space-y-2 text-purple-200">
      <li>🎯 <strong>Binary Toggle</strong> - Clean on/off switching with visual feedback</li>
      <li>🎨 <strong>Smooth Animation</strong> - Fluid toggle transitions</li>
      <li>🎛️ <strong>Custom Styling</strong> - Fully customizable colors and sizes</li>
      <li>📱 <strong>Touch Friendly</strong> - Perfect for mobile interactions</li>
      <li>♿ <strong>Accessible</strong> - Keyboard navigation and screen reader support</li>
      <li>🔧 <strong>Fully Reactive</strong> - Responds to all layout and theme changes</li>
    </ul>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">🎯 Usage Example</h3>
    <div class="mb-6 rounded-lg border border-purple-500/30 bg-slate-800/50 p-4">
      <pre class="text-sm text-purple-200"><code>&lt;DimToggleSwitch 
  v-model="isEnabled"
  label="Enable notifications"
  :showLabel="true"
  primaryColor="#10b981"
  @change="handleToggle"
&gt;&lt;/DimToggleSwitch&gt;</code></pre>
    </div>

    <div class="mb-6 rounded-lg border border-purple-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4">
      <p class="text-center text-purple-200">
        <strong>🔗 Source Code:</strong> 
        <a href="https://github.com/drazzardaq/opensource/blob/master/src/opensource/DimToggleSwitch.vue" 
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
  <div v-else class="toggle-switch-container relative" :style="containerStyles">
    <!-- Version Overlay -->
    <!-- <div class="absolute top-0 right-0 z-50 bg-purple-600/80 backdrop-blur-sm rounded-bl-lg px-2 py-1 pointer-events-none">
      <span class="text-xs text-white/80">v0.0.1</span>
    </div> -->
    
    <!-- Label -->
    <div v-if="label && showLabel" class="toggle-label mb-2 font-medium" :style="labelStyles">
      {{ label }}
    </div>

    <!-- Toggle Switch -->
    <label class="toggle-switch-wrapper inline-flex items-center cursor-pointer" :style="wrapperStyles">
      <input
        v-model="isToggled"
        type="checkbox"
        class="sr-only"
        @change="handleToggle"
        :disabled="disabled"
        :aria-label="label || 'Toggle switch'"
      />
      
      <!-- Switch Track -->
      <div
        class="toggle-track relative transition-all duration-300 ease-in-out"
        :class="[roundnessClass]"
        :style="trackStyles"
      >
        <!-- Switch Thumb -->
        <div
          class="toggle-thumb absolute top-0.5 transition-all duration-300 ease-in-out"
          :class="[roundnessClass]"
          :style="thumbStyles"
        >
          <!-- Optional Icons -->
          <div v-if="showIcons" class="thumb-icon flex items-center justify-center h-full text-xs">
            {{ isToggled ? onIcon : offIcon }}
          </div>
        </div>
        
        <!-- Track Labels -->
        <div v-if="showTrackLabels" class="track-labels absolute inset-0 flex items-center justify-between px-2 text-xs font-medium pointer-events-none">
          <span :style="{ opacity: isToggled ? 0 : 1, color: offLabelColor }">{{ offLabel }}</span>
          <span :style="{ opacity: isToggled ? 1 : 0, color: onLabelColor }">{{ onLabel }}</span>
        </div>
      </div>
      
      <!-- Switch Label (inline) -->
      <span v-if="label && !showLabel" class="toggle-label-inline ml-3 font-medium" :style="labelStyles">
        {{ label }}
      </span>
    </label>

    <!-- Status Text -->
    <div v-if="showStatus" class="toggle-status mt-2 text-sm" :style="statusStyles">
      {{ isToggled ? 'Enabled' : 'Disabled' }}
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
  width: { type: Number, default: 48 },
  height: { type: Number, default: 24 },
  padding: { type: Number, default: 2 },
  margin: { type: Number, default: 8 },
  theme: { type: String, default: 'light' },
  compact: { type: Boolean, default: false },
  isDocs: { type: Boolean, default: false },
  
  // Toggle-specific props
  modelValue: { type: Boolean, default: false },
  label: { type: String, default: '' },
  showLabel: { type: Boolean, default: false },
  showIcons: { type: Boolean, default: false },
  showTrackLabels: { type: Boolean, default: false },
  showStatus: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  onIcon: { type: String, default: '✓' },
  offIcon: { type: String, default: '✗' },
  onLabel: { type: String, default: 'ON' },
  offLabel: { type: String, default: 'OFF' }
});

const emit = defineEmits(['update:modelValue', 'change']);

// Reactive state
const isToggled = ref(props.modelValue);

// Watch for external updates
watch(() => props.modelValue, (newValue) => {
  isToggled.value = newValue;
});

// Computed properties
const roundnessClass = computed(() => {
  if (props.roundness <= 4) return 'rounded-sm';
  if (props.roundness <= 8) return 'rounded';
  if (props.roundness <= 12) return 'rounded-lg';
  if (props.roundness <= 20) return 'rounded-xl';
  return 'rounded-3xl';
});

const containerStyles = computed(() => ({
  fontFamily: props.fontFamily,
  margin: `${props.margin}px`
}));

const wrapperStyles = computed(() => ({
  opacity: props.disabled ? 0.5 : 1,
  cursor: props.disabled ? 'not-allowed' : 'pointer'
}));

const labelStyles = computed(() => ({
  color: props.textColor,
  fontSize: props.compact ? '0.875rem' : '1rem'
}));

const trackStyles = computed(() => ({
  width: `${props.width}px`,
  height: `${props.height}px`,
  backgroundColor: isToggled.value ? props.primaryColor : (props.theme === 'light' ? '#d1d5db' : '#4b5563'),
  border: `1px solid ${isToggled.value ? props.primaryColor : (props.theme === 'light' ? '#9ca3af' : '#6b7280')}`,
  boxShadow: isToggled.value ? `0 0 8px ${props.primaryColor}40` : 'none'
}));

const thumbStyles = computed(() => {
  const thumbSize = props.height - props.padding * 2;
  const thumbPosition = isToggled.value ? props.width - thumbSize - props.padding : props.padding;
  
  return {
    width: `${thumbSize}px`,
    height: `${thumbSize}px`,
    left: `${thumbPosition}px`,
    top: `${props.padding}px`,
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    transform: isToggled.value ? 'scale(1)' : 'scale(0.9)'
  };
});

const statusStyles = computed(() => ({
  color: isToggled.value ? props.primaryColor : (props.textColor + '80'),
  fontWeight: '500'
}));

const onLabelColor = computed(() => 'white');
const offLabelColor = computed(() => props.theme === 'light' ? '#6b7280' : '#9ca3af');

// Methods
const handleToggle = () => {
  if (props.disabled) return;
  
  isToggled.value = !isToggled.value;
  emit('update:modelValue', isToggled.value);
  emit('change', isToggled.value);
};
</script>

<style scoped>
.toggle-switch-wrapper:focus-within .toggle-track {
  outline: 2px solid rgba(99, 102, 241, 0.4);
  outline-offset: 2px;
}

.toggle-track {
  position: relative;
  overflow: hidden;
}

.toggle-thumb {
  background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.track-labels {
  transition: all 0.3s ease;
}

.thumb-icon {
  font-weight: bold;
}
</style>
