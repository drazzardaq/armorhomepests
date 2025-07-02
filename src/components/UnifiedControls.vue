<template>
  <div class="unified-controls space-y-4 !pr-5 !pl-3">
    <!-- Theme Controls -->
    <div class="control-group">
      <button @click="toggleSection('theme')" class="control-section-header">
        <span class="flex items-center gap-2">
          <font-awesome-icon :icon="['fas', 'palette']" class="w-4 h-4" />
          <!-- Theme & Style -->
           General Styles
        </span>
        <font-awesome-icon :icon="['fas', 'chevron-down']" class="control-chevron" :class="{ 'rotate-180': !collapsedSections.theme }" />
      </button>
      <div v-show="!collapsedSections.theme" class="control-section-content">
        <!-- <div>
          <label class="control-label">Theme</label>
          <select :value="theme" @change="updateValue('theme', $event.target.value)" class="control-select">
            <option value="light">☀️ Light</option>
            <option value="dark">🌙 Dark</option>
            <option value="system">🖥️ System</option>
          </select>
        </div> -->
        <div>
          <label class="control-label">Primary Color</label>
          <CustomColorPicker :modelValue="primaryColor" @update:modelValue="updateValue('primaryColor', $event)" />
        </div>
        <div v-if="isControlRelevant('colors')">
          <label class="control-label">Background Color</label>
          <CustomColorPicker :modelValue="bgColor" @update:modelValue="updateValue('bgColor', $event)" />
        </div>
        <div v-if="isControlRelevant('colors')">
          <label class="control-label">Text Color</label>
          <CustomColorPicker :modelValue="textColor" @update:modelValue="updateValue('textColor', $event)" />
        </div>
        <div>
          <label class="control-label">Font Family</label>
          <select :value="fontFamily" @change="updateValue('fontFamily', $event.target.value)" class="control-select">
            <option value="inherit">Default</option>
            <option value="'Inter', sans-serif">Inter</option>
            <option value="'DooM', sans-serif">DooM</option>
            <option value="'Hanzel Normal', sans-serif">Hanzel Normal</option>
            <option value="'Halcion', sans-serif">Halcion</option>
            <option value="monospace">Monospace</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Layout Controls -->
    <div v-if="isControlRelevant('layout')" class="control-group">
      <button @click="toggleSection('layout')" class="control-section-header">
        <span class="flex items-center gap-2">
          <font-awesome-icon :icon="['fas', 'ruler-combined']" class="w-4 h-4" />
          Layout & Spacing
        </span>
        <font-awesome-icon :icon="['fas', 'chevron-down']" class="control-chevron" :class="{ 'rotate-180': !collapsedSections.layout }" />
      </button>
      <div v-show="!collapsedSections.layout" class="control-section-content">
        <div>
          <label class="control-label">Roundness: {{ roundness }}px</label>
          <input :value="roundness" @input="updateNumericValue('roundness', $event.target.value, 0, 64)" type="range" min="0" max="64" class="control-range" />
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="control-label">Width</label>
            <input :value="width" @input="updateNumericValue('width', $event.target.value, 50, 1200)" type="number" class="control-input" />
          </div>
          <div>
            <label class="control-label">Height</label>
            <input :value="height" @input="updateNumericValue('height', $event.target.value, 30, 800)" type="number" class="control-input" />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="control-label">Padding</label>
            <input :value="padding" @input="updateNumericValue('padding', $event.target.value, 0, 100)" type="number" class="control-input" />
          </div>
          <div>
            <label class="control-label">Margin</label>
            <input :value="margin" @input="updateNumericValue('margin', $event.target.value, 0, 100)" type="number" class="control-input" />
          </div>
        </div>
      </div>
    </div>

    <!-- Advanced Style Controls -->
    <div v-if="isControlRelevant('style')" class="control-group">
      <button @click="toggleSection('style')" class="control-section-header">
        <span class="flex items-center gap-2">
          <font-awesome-icon :icon="['fas', 'magic-wand-sparkles']" class="w-4 h-4" />
          Advanced Effects
        </span>
        <font-awesome-icon :icon="['fas', 'chevron-down']" class="control-chevron" :class="{ 'rotate-180': !collapsedSections.style }" />
      </button>
      <div v-show="!collapsedSections.style" class="control-section-content">
        <div>
          <label class="control-label">Animation</label>
          <select :value="animation" @change="updateValue('animation', $event.target.value)" class="control-select">
            <option value="none">🚫 None</option>
            <option value="bounce">🏀 Bounce</option>
            <option value="pulse">💓 Pulse</option>
            <option value="wiggle">🪱 Wiggle</option>
            <option value="spin">🌀 Spin</option>
            <option value="float">🎈 Float</option>
            <option value="glow">✨ Glow</option>
            <option value="shake">📳 Shake</option>
            <option value="flip">🔄 Flip</option>
            <option value="zoom">🔍 Zoom</option>
            <option value="elastic">🎪 Elastic</option>
          </select>
        </div>
        <div>
          <label class="control-label">Shadow Intensity: {{ shadowIntensity }}</label>
          <input :value="shadowIntensity" @input="updateValueDebounced('shadowIntensity', parseFloat($event.target.value))" type="range" min="0" max="2" step="0.1" class="control-range" />
        </div>
        <div>
          <label class="control-label">Glow Intensity: {{ glowIntensity }}</label>
          <input :value="glowIntensity" @input="updateValueDebounced('glowIntensity', parseFloat($event.target.value))" type="range" min="0" max="3" step="0.1" class="control-range" />
        </div>
        <div>
          <label class="control-label">Opacity: {{ Math.round(opacity * 100) }}%</label>
          <input :value="opacity" @input="updateValueDebounced('opacity', parseFloat($event.target.value))" type="range" min="0" max="1" step="0.01" class="control-range" />
        </div>
      </div>
    </div>

    <!-- Component-Specific Controls -->
    <div v-if="selectedComponent && componentPropConfigs[selectedComponent]" class="control-group">
      <button @click="toggleSection('specific')" class="control-section-header">
        <span class="flex items-center gap-2">
          <font-awesome-icon :icon="['fas', 'cog']" class="w-4 h-4" />
          {{ selectedComponent }} Properties
        </span>
        <font-awesome-icon :icon="['fas', 'chevron-down']" class="control-chevron" :class="{ 'rotate-180': !collapsedSections.specific }" />
      </button>
      <div v-show="!collapsedSections.specific" class="control-section-content">
        <div v-for="(config, propName) in componentPropConfigs[selectedComponent]" :key="propName" class="space-y-2">
          <!-- Text Input -->
          <div v-if="config.type === 'text'">
            <label class="control-label">{{ propName }}</label>
            <input 
              :value="componentSpecificProps[propName] || config.default" 
              @input="updateComponentSpecific(propName, $event.target.value)"
              type="text" 
              class="control-input" 
              :placeholder="config.default"
            />
          </div>
          
          <!-- Select Dropdown -->
          <div v-else-if="config.type === 'select'">
            <label class="control-label">{{ propName }}</label>
            <select 
              :value="componentSpecificProps[propName] || config.default"
              @change="updateComponentSpecific(propName, $event.target.value)"
              class="control-select"
            >
              <option v-for="option in config.options" :key="option" :value="option">{{ option }}</option>
            </select>
          </div>
          
          <!-- Boolean Toggle -->
          <div v-else-if="config.type === 'boolean'" class="flex items-center justify-between">
            <label class="control-label">{{ propName }}</label>
            <input 
              :checked="componentSpecificProps[propName] !== undefined ? componentSpecificProps[propName] : config.default"
              @change="updateComponentSpecific(propName, $event.target.checked)"
              type="checkbox" 
              class="control-checkbox"
            />
          </div>
          
          <!-- Number Input -->
          <div v-else-if="config.type === 'number'">
            <label class="control-label">{{ propName }}: {{ componentSpecificProps[propName] || config.default }}</label>
            <input 
              :value="componentSpecificProps[propName] || config.default"
              @input="updateComponentSpecific(propName, parseFloat($event.target.value))"
              type="range" 
              :min="config.min || 0"
              :max="config.max || 100"
              :step="config.step || 1"
              class="control-range"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Export Controls -->
    <div v-if="showExportControls" class="control-group">
      <button @click="toggleSection('export')" class="control-section-header">
        <span class="flex items-center gap-2">
          <font-awesome-icon :icon="['fas', 'download']" class="w-4 h-4" />
          Export & Actions
        </span>
        <font-awesome-icon :icon="['fas', 'chevron-down']" class="control-chevron" :class="{ 'rotate-180': !collapsedSections.export }" />
      </button>
      <div v-show="!collapsedSections.export" class="control-section-content">
        <div>
          <label class="control-label">Export Format</label>
          <select :value="exportFormat" @change="updateValue('exportFormat', $event.target.value)" class="control-select">
            <option value="vue">📄 Vue SFC</option>
            <option value="html">🌐 HTML</option>
            <option value="css">🎨 CSS</option>
            <option value="tailwind">🚀 Tailwind</option>
          </select>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <button @click="$emit('copy')" class="control-btn bg-purple-600 hover:bg-purple-700">
            <font-awesome-icon :icon="['fas', copied ? 'check' : 'copy']" class="w-4 h-4 mr-2" />
            {{ copied ? 'Copied!' : 'Copy Code' }}
          </button>
          <button @click="$emit('reset')" class="control-btn bg-gray-600 hover:bg-gray-700">
            <font-awesome-icon :icon="['fas', 'undo']" class="w-4 h-4 mr-2" />
            Reset All
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import CustomColorPicker from './CustomColorPicker.vue';

// Props
const props = defineProps({
  theme: { type: String, default: 'light' },
  primaryColor: { type: String, default: '#6366f1' },
  fontFamily: { type: String, default: 'inherit' },
  roundness: { type: Number, default: 12 },
  width: { type: Number, default: 400 },
  height: { type: Number, default: 120 },
  padding: { type: Number, default: 16 },
  margin: { type: Number, default: 8 },
  bgColor: { type: String, default: '#ffffff' },
  textColor: { type: String, default: '#22292f' },
  boxShadow: { type: String, default: 'md' },
  borderWidth: { type: Number, default: 1 },
  animation: { type: String, default: 'none' },
  animationSpeed: { type: String, default: 'normal' },
  shadowColor: { type: String, default: '#000000' },
  shadowIntensity: { type: Number, default: 1 },
  glowColor: { type: String, default: '#6366f1' },
  glowIntensity: { type: Number, default: 0 },
  blurAmount: { type: Number, default: 0 },
  opacity: { type: Number, default: 1 },
  exportFormat: { type: String, default: 'vue' },
  previewBg: { type: String, default: 'dark' },
  showExportControls: { type: Boolean, default: true },
  showLiveCode: { type: Boolean, default: false },
  liveCode: { type: String, default: '' },
  copied: { type: Boolean, default: false },
  
  // Context-aware props
  relevantControls: { type: Array, default: () => [] },
  componentSpecificProps: { type: Object, default: () => ({}) },
  selectedComponent: { type: String, default: '' }
});

// Enhanced emit events with standardized format for all DUIMX components
const emit = defineEmits([
  // Core style and theme properties
  'update:theme', 'update:primaryColor', 'update:fontFamily',
  'update:roundness', 'update:width', 'update:height', 'update:padding', 'update:margin',
  'update:bgColor', 'update:textColor', 'update:boxShadow', 'update:borderWidth', 
  
  // Animation and effects properties
  'update:animation', 'update:animationSpeed', 'update:shadowColor', 'update:shadowIntensity',
  'update:glowColor', 'update:glowIntensity', 'update:blurAmount', 'update:opacity',
  
  // Export and preview properties
  'update:exportFormat', 'update:previewBg', 'update:liveCode', 'update:componentSpecific',
  
  // Component actions
  'reset', 'togglePreview', 'copy', 'cleanup', 'error', 'ready'
]);

// Optimized reactive state
const collapsedSections = ref({
  theme: false,
  layout: false,
  style: true, // Start with advanced style collapsed
  specific: false, // Start with component-specific section collapsed
  export: false
});

// Performance optimization: Debounced update functions
let updateTimeouts = {};

const updateValue = (prop, value) => {
  emit(`update:${prop}`, value);
};

const updateValueDebounced = (prop, value, delay = 150) => {
  // Clear existing timeout for this prop
  if (updateTimeouts[prop]) {
    clearTimeout(updateTimeouts[prop]);
  }
  
  // Set new timeout
  updateTimeouts[prop] = setTimeout(() => {
    emit(`update:${prop}`, value);
    delete updateTimeouts[prop];
  }, delay);
};

const updateNumericValue = (prop, value, min = 0, max = 1000) => {
  const numValue = Math.max(min, Math.min(max, parseFloat(value) || 0));
  updateValueDebounced(prop, numValue, 100);
};

const updateComponentSpecific = (prop, value) => {
  const newValues = { [prop]: value };
  emit('update:componentSpecific', newValues);
};

// Optimized section toggle
const toggleSection = (section) => {
  collapsedSections.value[section] = !collapsedSections.value[section];
};

// Computed properties for better performance
const isControlRelevant = computed(() => (controlName) => {
  return props.relevantControls.length === 0 || props.relevantControls.includes(controlName);
});

// Component configurations
const componentPropConfigs = computed(() => ({
  // Interactive Components
  DimEnhancedButton: {
    variant: { type: 'select', options: ['primary', 'secondary', 'success', 'danger'], default: 'primary' },
    disabled: { type: 'boolean', default: false },
    loading: { type: 'boolean', default: false },
    animationType: { type: 'select', options: ['none', 'hover-lift', 'pulse', 'glow'], default: 'hover-lift' },
    size: { type: 'select', options: ['sm', 'md', 'lg', 'xl'], default: 'md' },
    icon: { type: 'select', options: ['none', 'arrow', 'plus', 'check', 'star'], default: 'none' },
    fullWidth: { type: 'boolean', default: false }
  },
  DimButton: {
    size: { type: 'select', options: ['sm', 'md', 'lg', 'xl'], default: 'md' },
    variant: { type: 'select', options: ['solid', 'outline', 'ghost', 'gradient'], default: 'solid' },
    disabled: { type: 'boolean', default: false },
    loading: { type: 'boolean', default: false },
    icon: { type: 'select', options: ['none', 'left', 'right'], default: 'none' }
  },
  DimModal: {
    size: { type: 'select', options: ['sm', 'md', 'lg', 'xl', 'full'], default: 'md' },
    backdrop: { type: 'select', options: ['blur', 'dark', 'light'], default: 'blur' },
    closeOnOverlay: { type: 'boolean', default: true },
    showCloseButton: { type: 'boolean', default: true },
    animation: { type: 'select', options: ['fade', 'slide', 'zoom', 'bounce'], default: 'fade' }
  },
  DimTooltip: {
    position: { type: 'select', options: ['top', 'right', 'bottom', 'left'], default: 'top' },
    delay: { type: 'number', default: 300, min: 0, max: 1000 },
    variant: { type: 'select', options: ['default', 'light', 'dark'], default: 'default' }
  },
  DimToggleSwitch: {
    size: { type: 'select', options: ['sm', 'md', 'lg'], default: 'md' },
    color: { type: 'select', options: ['default', 'success', 'info', 'warning', 'danger'], default: 'default' },
    disabled: { type: 'boolean', default: false },
    label: { type: 'select', options: ['none', 'left', 'right'], default: 'right' }
  },
  DimNeumorphicToggle: {
    checked: { type: 'boolean', default: false },
    size: { type: 'select', options: ['sm', 'md', 'lg'], default: 'md' },
    disabled: { type: 'boolean', default: false }
  },
  DimThemeSwitch: {
    iconOnly: { type: 'boolean', default: true },
    showLabel: { type: 'boolean', default: false }
  },
  
  // Layout Components
  DimCard: {
    variant: { type: 'select', options: ['default', 'glass', 'neumorphic', 'gradient', 'bordered'], default: 'default' },
    hoverable: { type: 'boolean', default: true },
    elevated: { type: 'boolean', default: false },
    header: { type: 'boolean', default: false },
    footer: { type: 'boolean', default: false }
  },
  DimGlassCard: {
    blurAmount: { type: 'number', default: 5, min: 0, max: 20 },
    border: { type: 'boolean', default: true },
    hoverable: { type: 'boolean', default: true }
  },
  DimCardReveal: {
    direction: { type: 'select', options: ['up', 'down', 'left', 'right'], default: 'up' },
    revealOnHover: { type: 'boolean', default: false }
  },
  DimTabs: {
    variant: { type: 'select', options: ['default', 'pills', 'underlined', 'bordered'], default: 'default' },
    animated: { type: 'boolean', default: true }
  },
  DimAccordion: {
    variant: { type: 'select', options: ['default', 'bordered', 'filled'], default: 'default' },
    expandMultiple: { type: 'boolean', default: false }
  },
  
  // Input Components  
  DimSearchBar: {
    rounded: { type: 'boolean', default: true },
    variant: { type: 'select', options: ['default', 'glass', 'solid', 'bordered'], default: 'default' },
    showIcon: { type: 'boolean', default: true }
  },
  DimAIPromptInput: {
    showSubmit: { type: 'boolean', default: true },
    showSuggestions: { type: 'boolean', default: true },
    placeholder: { type: 'select', options: ['default', 'creative', 'technical', 'custom'], default: 'default' }
  },
  DimGlassMorphicSlider: {
    min: { type: 'number', default: 0, min: 0, max: 100 },
    max: { type: 'number', default: 100, min: 0, max: 1000 },
    showLabels: { type: 'boolean', default: true },
    showValue: { type: 'boolean', default: true }
  },
  DimSliderDemo: {
    min: { type: 'number', default: 0, min: 0, max: 100 },
    max: { type: 'number', default: 100, min: 0, max: 1000 },
    step: { type: 'number', default: 1, min: 0.1, max: 10 }
  },
  DimEmojiRating: {
    count: { type: 'number', default: 5, min: 3, max: 10 },
    showLabels: { type: 'boolean', default: true },
    animated: { type: 'boolean', default: true }
  },
  
  // Feedback Components
  DimLoader: {
    type: { type: 'select', options: ['spinner', 'dots', 'pulse', 'ring'], default: 'spinner' },
    size: { type: 'select', options: ['sm', 'md', 'lg', 'xl'], default: 'md' },
    overlay: { type: 'boolean', default: false }
  },
  DimProgressBar: {
    value: { type: 'number', default: 50, min: 0, max: 100 },
    showLabel: { type: 'boolean', default: true },
    striped: { type: 'boolean', default: false },
    animated: { type: 'boolean', default: false }
  },
  DimAnimatedIcon: {
    name: { type: 'select', options: ['check', 'error', 'warning', 'info', 'loading'], default: 'check' },
    loop: { type: 'boolean', default: false }
  },
  
  // Data Components
  DimCarousel: {
    autoplay: { type: 'boolean', default: false },
    interval: { type: 'number', default: 3000, min: 1000, max: 10000 },
    arrows: { type: 'boolean', default: true },
    dots: { type: 'boolean', default: true },
    effect: { type: 'select', options: ['slide', 'fade', 'zoom'], default: 'slide' }
  },
  DimGraph3D: {
    chartType: { type: 'select', options: ['bar', 'surface', 'scatter', 'line'], default: 'bar' },
    wireframe: { type: 'boolean', default: false },
    animated: { type: 'boolean', default: true },
    interactive: { type: 'boolean', default: true },
    showAxes: { type: 'boolean', default: true },
    colorScheme: { type: 'select', options: ['gradient', 'solid', 'rainbow'], default: 'gradient' }
  },
  DimMovieBrowser: {
    pageSize: { type: 'number', default: 20, min: 10, max: 50 },
    searchOnMount: { type: 'boolean', default: true },
    showGenreFilter: { type: 'boolean', default: true }
  },
  DimDashboard: {
    layout: { type: 'select', options: ['default', 'grid', 'masonry'], default: 'default' },
    widgets: { type: 'number', default: 4, min: 1, max: 8 },
    dataRefreshInterval: { type: 'number', default: 30, min: 0, max: 120 }
  }
}));

// Enhanced cleanup function to handle all resources
const cleanup = () => {
  // Clear all debounced update timeouts
  Object.values(updateTimeouts).forEach(timeout => clearTimeout(timeout));
  updateTimeouts = {};
  
  // Remove any event listeners created by this component
  // (In case we add any in the future)
  
  // Signal that component is unmounting
  emit('cleanup');
};

// Properly handle component lifecycle
onUnmounted(cleanup);
</script>

<style scoped>
/* Optimized CSS Classes */
.control-section-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #d8b4fe;
  transition: color 0.2s;
}

.control-section-header:hover {
  color: #e9d5ff;
}

.control-section-content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.control-chevron {
  width: 0.75rem;
  height: 0.75rem;
  transition: transform 0.2s;
}

.control-label {
  margin-bottom: 0.25rem;
  display: block;
  font-size: 0.75rem;
  color: #94a3b8;
}

.control-select, .control-input {
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid rgba(147, 51, 234, 0.3);
  background-color: rgba(51, 65, 85, 0.5);
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  color: #e2e8f0;
  transition: all 0.2s;
}

.control-select:focus, .control-input:focus {
  border-color: rgba(147, 51, 234, 0.6);
  outline: none;
}

.control-color {
  width: 2.5rem;
  height: 2rem;
  border-radius: 0.375rem;
  border: 1px solid rgba(147, 51, 234, 0.3);
  background-color: transparent;
  cursor: pointer;
}

.control-color-group {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.control-range {
  width: 100%;
  height: 0.5rem;
  background-color: #374151;
  border-radius: 0.5rem;
  appearance: none;
  cursor: pointer;
}

.control-range::-webkit-slider-thumb {
  appearance: none;
  width: 1rem;
  height: 1rem;
  background-color: #8b5cf6;
  border-radius: 50%;
  cursor: pointer;
}

.control-checkbox {
  width: 1rem;
  height: 1rem;
  color: #8b5cf6;
  background-color: #374151;
  border-color: #4b5563;
  border-radius: 0.25rem;
}

.control-checkbox:focus {
  box-shadow: 0 0 0 2px #8b5cf6;
}

.control-btn {
  padding: 0.5rem 1rem;
  font-size: 0.7rem;
  text-transform: uppercase;
  font-weight: 500;
  color: white;
  border-radius: 0.5rem;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.control-btn:hover {
  transform: scale(1.05);
}
</style>
