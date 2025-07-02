<template>
  <!-- Documentation Mode -->
  <div v-if="isDocs" class="DUIMX-docs prose prose-purple max-w-none">
    <div class="mb-6 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4">
      <h2 class="mb-2 text-2xl font-bold text-purple-300">📈 DUIMX Progress Bar</h2>
      <p class="text-purple-200">Modern progress indicators with animations, labels, and multiple visual styles for any loading scenario.</p>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">✨ Features</h3>
    <ul class="mb-6 space-y-2 text-purple-200">
      <li>📊 <strong>Multiple Styles</strong> - Linear, circular, stepped progress indicators</li>
      <li>🎨 <strong>Gradient Support</strong> - Beautiful gradient fills and animations</li>
      <li>📱 <strong>Responsive Design</strong> - Adapts to container size</li>
      <li>⚡ <strong>Smooth Animations</strong> - Eased transitions and loading effects</li>
      <li>🏷️ <strong>Custom Labels</strong> - Show percentage, custom text, or hide labels</li>
      <li>🎯 <strong>Accessible</strong> - ARIA compliant with screen reader support</li>
    </ul>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">🎯 Usage Examples</h3>
    <div class="mb-6 space-y-4">
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/50 p-4">
        <h4 class="mb-2 text-lg font-semibold text-purple-300">Basic Progress Bar</h4>
        <pre class="text-sm text-purple-200"><code>&lt;DimProgressBar 
  :value="75"
  :max="100"
  :showLabel="true"
  primaryColor="#8b5cf6"
/&gt;</code></pre>
      </div>
      
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/50 p-4">
        <h4 class="mb-2 text-lg font-semibold text-purple-300">Animated with Custom Label</h4>
        <pre class="text-sm text-purple-200"><code>&lt;DimProgressBar 
  :value="progressValue"
  :animated="true"
  label="Uploading files..."
  variant="gradient"
  theme="dark"
/&gt;</code></pre>
      </div>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">🎨 Variants</h3>
    <div class="mb-6 grid grid-cols-2 gap-4">
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">basic</h4>
        <p class="text-purple-200 text-sm">Simple solid color bar</p>
      </div>
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">gradient</h4>
        <p class="text-purple-200 text-sm">Beautiful gradient fill</p>
      </div>
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">striped</h4>
        <p class="text-purple-200 text-sm">Animated stripes pattern</p>
      </div>
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">glow</h4>
        <p class="text-purple-200 text-sm">Glowing progress effect</p>
      </div>
    </div>

    <div class="mb-6 rounded-lg border border-purple-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4">
      <p class="text-center text-purple-200">
        <strong>🔗 Source Code:</strong> 
        <a href="https://github.com/drazzardaq/opensource/blob/master/src/opensource/DimProgressBar.vue" 
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
  <div v-else ref="cssVariablesRef" class="dim-progress-bar relative" :style="containerStyles">
    <!-- Version Overlay -->
    <div class="absolute top-0 right-0 z-50 bg-purple-600/80 backdrop-blur-sm rounded-bl-lg px-2 py-1 pointer-events-none">
      <span class="text-xs text-white/80">v0.9.7</span>
    </div>
    
    <!-- Multi-Progress Container -->
    <div v-if="type === 'multi'" class="space-y-2">
      <div v-for="(item, index) in multiValues" 
           :key="`progress-${index}`"
           class="multi-progress-item"
           :style="multiProgressStyles(index)">
        
        <!-- Multi-Progress Label -->
        <div v-if="showLabel" 
             class="flex justify-between items-center mb-1 text-sm font-medium"
             :style="{ color: textColor, fontFamily }">
          <span>{{ item.label || `Progress ${index + 1}` }}</span>
          <span>{{ Math.round((item.value / max) * 100) }}%</span>
        </div>
        
        <!-- Multi-Progress Bar -->
        <div class="progress-container relative overflow-hidden" 
             :class="[roundnessClass, themeClasses.bg]"
             :style="progressContainerStyles"
             role="progressbar"
             :aria-valuenow="item.value"
             :aria-valuemin="0"
             :aria-valuemax="max"
             :aria-label="`${item.label}: ${Math.round((item.value / max) * 100)}%`">
          
          <div class="progress-fill h-full transition-all duration-700 ease-out"
               :class="progressFillClasses(index)"
               :style="multiProgressFillStyles(item, index)">
            <div v-if="variant === 'striped'" 
                 class="progress-stripes absolute inset-0"></div>
            <div v-if="showGlow" 
                 class="progress-glow absolute inset-0"></div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Circular Progress -->
    <div v-else-if="type === 'circular'" class="circular-progress relative">
      <svg class="progress-ring transform -rotate-90" 
           :width="circularSize" 
           :height="circularSize"
           :style="{ filter: showGlow ? `drop-shadow(0 0 8px ${primaryColor}66)` : 'none' }">
        
        <!-- Background Circle -->
        <circle class="progress-ring-background"
                :cx="circularSize / 2"
                :cy="circularSize / 2"
                :r="circularRadius"
                :stroke="bgColor"
                :stroke-width="strokeWidth"
                fill="transparent" />
        
        <!-- Progress Circle -->
        <circle class="progress-ring-progress transition-all duration-700 ease-out"
                :cx="circularSize / 2"
                :cy="circularSize / 2"
                :r="circularRadius"
                :stroke="progressStroke"
                :stroke-width="strokeWidth"
                :stroke-dasharray="circularCircumference"
                :stroke-dashoffset="circularOffset"
                :stroke-linecap="roundness > 8 ? 'round' : 'butt'"
                fill="transparent" />
        
        <!-- Gradient Definition for Circular -->
        <defs v-if="variant === 'gradient'">
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" :stop-color="primaryColor" />
            <stop offset="100%" :stop-color="secondaryColor || adjustColorLightness(primaryColor, 20)" />
          </linearGradient>
        </defs>
      </svg>
      
      <!-- Circular Label -->
      <div v-if="showLabel" 
           class="absolute inset-0 flex items-center justify-center text-center"
           :style="{ color: textColor, fontFamily }">
        <div>
          <div class="text-lg font-bold">{{ percentage }}%</div>
          <div v-if="label" class="text-xs opacity-70">{{ label }}</div>
        </div>
      </div>
    </div>
    
    <!-- Stepped Progress -->
    <div v-else-if="type === 'stepped'" class="stepped-progress">
      <!-- Steps Container -->
      <div class="flex items-center justify-between mb-2" 
           :style="{ width: `${width}px` }">
        <div v-for="step in steps" 
             :key="`step-${step.id}`"
             class="step-item flex-1 relative"
             :class="{ 'step-completed': step.value <= value, 'step-active': step.value === value }">
          
          <!-- Step Circle -->
          <div class="step-circle mx-auto mb-1 rounded-full border-2 transition-all duration-300"
               :class="stepCircleClasses(step)"
               :style="stepCircleStyles(step)">
            <div class="w-3 h-3 rounded-full transition-all duration-300"
                 :style="stepIndicatorStyles(step)"></div>
          </div>
          
          <!-- Step Label -->
          <div v-if="step.label" 
               class="text-xs text-center font-medium"
               :style="{ color: step.value <= value ? primaryColor : textColor }">
            {{ step.label }}
          </div>
          
          <!-- Step Connector -->
          <div v-if="step.id < steps.length" 
               class="step-connector absolute top-3 left-1/2 h-0.5 transition-all duration-300"
               :class="{ 'bg-primary': step.value < value }"
               :style="stepConnectorStyles(step)"></div>
        </div>
      </div>
    </div>
    
    <!-- Linear Progress (Default) -->
    <div v-else class="linear-progress">
      <!-- Label (above) -->
      <div v-if="showLabel && labelPosition === 'top'" 
           class="progress-label mb-2 text-sm font-medium flex justify-between items-center"
           :style="{ color: textColor, fontFamily }">
        <span>{{ displayLabel }}</span>
        <span v-if="showPercentage">{{ percentage }}%</span>
      </div>
      
      <!-- Progress Container -->
      <div class="progress-container relative overflow-hidden" 
           :class="[roundnessClass, themeClasses.bg]"
           :style="progressContainerStyles"
           role="progressbar"
           :aria-valuenow="value"
           :aria-valuemin="0"
           :aria-valuemax="max"
           :aria-label="ariaLabel">
        
        <!-- Progress Fill -->
        <div class="progress-fill h-full transition-all duration-700 ease-out"
             :class="progressFillClasses()"
             :style="progressFillStyles">
          
          <!-- Indeterminate Animation -->
          <div v-if="indeterminate" 
               class="indeterminate-bar absolute inset-0"></div>
          
          <!-- Striped Pattern -->
          <div v-if="variant === 'striped'" 
               class="progress-stripes absolute inset-0"></div>
          
          <!-- Glow Effect -->
          <div v-if="showGlow" 
               class="progress-glow absolute inset-0"></div>
          
          <!-- Particle Trail -->
          <div v-if="variant === 'particles'" 
               class="progress-particles absolute inset-0"></div>
        </div>
        
        <!-- Milestone Markers -->
        <div v-if="milestones.length > 0" class="milestone-container absolute inset-0">
          <div v-for="milestone in milestones" 
               :key="`milestone-${milestone.value}`"
               class="milestone-marker absolute top-0 bottom-0 w-0.5 bg-white/70"
               :style="{ left: `${(milestone.value / max) * 100}%` }"
               :title="milestone.label">
            <div class="milestone-tooltip absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 
                        bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              {{ milestone.label }}
            </div>
          </div>
        </div>
        
        <!-- Percentage Text (inside) -->
        <div v-if="showLabel && labelPosition === 'inside'" 
             class="absolute inset-0 flex items-center justify-center text-xs font-bold text-white mix-blend-difference">
          {{ displayLabel }}
        </div>
      </div>
      
      <!-- Label (below) -->
      <div v-if="showLabel && labelPosition === 'bottom'" 
           class="progress-label mt-2 text-sm font-medium flex justify-between items-center"
           :style="{ color: textColor, fontFamily }">
        <span>{{ displayLabel }}</span>
        <span v-if="showPercentage">{{ percentage }}%</span>
      </div>
      
      <!-- Status Message -->
      <div v-if="statusMessage" 
           class="status-message mt-1 text-xs"
           :class="statusMessageClasses"
           :style="{ fontFamily }">
        {{ statusMessage }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick, watchEffect } from 'vue';

const props = defineProps({
  roundness: { type: Number, default: 8 },
  primaryColor: { type: String, default: '#6366f1' },
  bgColor: { type: String, default: '#e5e7eb' },
  textColor: { type: String, default: '#1f2937' },
  fontFamily: { type: String, default: 'inherit' },
  width: { type: Number, default: 320 },
  height: { type: Number, default: 24 },
  padding: { type: Number, default: 8 },
  margin: { type: Number, default: 8 },
  theme: { type: String, default: 'light' },
  compact: { type: Boolean, default: false },
  isDocs: { type: Boolean, default: false },
  
  // Enhanced Progress-specific props
  value: { type: Number, default: 50 },
  max: { type: Number, default: 100 },
  label: { type: String, default: '' },
  showLabel: { type: Boolean, default: true },
  showPercentage: { type: Boolean, default: true },
  labelPosition: { type: String, default: 'inside' }, // top, inside, bottom
  variant: { type: String, default: 'basic' }, // basic, gradient, striped, glow, neon, particles
  animated: { type: Boolean, default: true },
  indeterminate: { type: Boolean, default: false },
  
  // Progress types
  type: { type: String, default: 'linear' }, // linear, circular, stepped, multi
  
  // Circular progress props
  circularSize: { type: Number, default: 120 },
  strokeWidth: { type: Number, default: 8 },
  
  // Multi-progress props
  multiValues: { 
    type: Array, 
    default: () => [
      { label: 'Progress 1', value: 60, color: '#6366f1' },
      { label: 'Progress 2', value: 30, color: '#8b5cf6' },
      { label: 'Progress 3', value: 80, color: '#ec4899' }
    ]
  },
  
  // Stepped progress props
  steps: {
    type: Array,
    default: () => [
      { id: 1, label: 'Start', value: 0 },
      { id: 2, label: 'Progress', value: 50 },
      { id: 3, label: 'Complete', value: 100 }
    ]
  },
  
  // Status and milestones
  status: { type: String, default: 'normal' }, // normal, success, warning, error
  statusMessage: { type: String, default: '' },
  milestones: { type: Array, default: () => [] },
  
  // Visual enhancements
  showGlow: { type: Boolean, default: false },
  secondaryColor: { type: String, default: '#ec4899' },
  smooth: { type: Boolean, default: true },
  
  // Performance
  performance: { type: Boolean, default: true }
});

// Enhanced emits
const emit = defineEmits(['update:value', 'complete', 'milestone', 'status-change']);

// Core reactive state
const cssVariablesRef = ref(null);
const animatedValue = ref(props.value);
const isAnimating = ref(false);
let animationFrame = null;

// Performance metrics
const performanceMetrics = ref({
  updateTime: 0,
  frameCount: 0,
  lastUpdate: Date.now()
});

// Memoized computed properties
const roundnessClass = computed(() => {
  const r = props.roundness;
  if (r <= 2) return 'rounded-none';
  if (r <= 4) return 'rounded-sm';
  if (r <= 8) return 'rounded';
  if (r <= 12) return 'rounded-lg';
  if (r <= 16) return 'rounded-xl';
  if (r <= 24) return 'rounded-2xl';
  return 'rounded-3xl';
});

const themeClasses = computed(() => {
  const themes = {
    light: { bg: 'bg-gray-200' },
    dark: { bg: 'bg-slate-700' },
    glass: { bg: 'bg-white/10 backdrop-blur-sm border border-white/20' },
    neon: { bg: 'bg-black border border-cyan-400/30' }
  };
  return themes[props.theme] || themes.light;
});

const containerStyles = computed(() => ({
  fontFamily: props.fontFamily,
  padding: `${props.padding}px`,
  margin: `${props.margin}px`,
  width: `${props.width}px`,
  '--progress-primary': props.primaryColor,
  '--progress-secondary': props.secondaryColor,
  '--progress-bg': props.bgColor,
  '--progress-text': props.textColor
}));

const progressContainerStyles = computed(() => ({
  height: `${props.height}px`,
  backgroundColor: props.theme === 'light' ? '#e5e7eb' : '#475569',
  transform: 'translateZ(0)' // Hardware acceleration
}));

const percentage = computed(() => Math.min(Math.max((animatedValue.value / props.max) * 100, 0), 100));

const progressFillStyles = computed(() => {
  const styles = {
    width: `${percentage.value}%`,
    transition: props.smooth ? 'width 0.7s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
    transform: 'translateZ(0)' // Hardware acceleration
  };

  // Variant-specific styling
  switch (props.variant) {
    case 'basic':
      styles.backgroundColor = props.primaryColor;
      break;
    case 'gradient':
      styles.background = `linear-gradient(90deg, ${props.primaryColor}, ${props.secondaryColor})`;
      break;
    case 'glow':
      styles.backgroundColor = props.primaryColor;
      styles.boxShadow = `0 0 12px ${props.primaryColor}66, inset 0 1px 0 rgba(255,255,255,0.3)`;
      break;
    case 'neon':
      styles.backgroundColor = props.primaryColor;
      styles.boxShadow = `0 0 20px ${props.primaryColor}, 0 0 40px ${props.primaryColor}66`;
      break;
    case 'striped':
      styles.backgroundColor = props.primaryColor;
      break;
    case 'particles':
      styles.backgroundColor = props.primaryColor;
      styles.position = 'relative';
      styles.overflow = 'hidden';
      break;
  }

  return styles;
});

// Circular progress computed properties
const circularRadius = computed(() => (props.circularSize - props.strokeWidth) / 2);
const circularCircumference = computed(() => 2 * Math.PI * circularRadius.value);
const circularOffset = computed(() => {
  const progressRatio = percentage.value / 100;
  return circularCircumference.value * (1 - progressRatio);
});

const progressStroke = computed(() => {
  if (props.variant === 'gradient') return 'url(#progressGradient)';
  return props.primaryColor;
});

// Multi-progress computed properties
const multiProgressStyles = computed(() => (index) => ({
  marginBottom: index < props.multiValues.length - 1 ? '8px' : '0'
}));

const multiProgressFillStyles = computed(() => (item, index) => {
  const itemPercentage = Math.min(Math.max((item.value / props.max) * 100, 0), 100);
  return {
    width: `${itemPercentage}%`,
    backgroundColor: item.color || props.primaryColor,
    transition: 'width 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'translateZ(0)'
  };
});

// Stepped progress computed properties
const stepCircleClasses = computed(() => (step) => {
  const isCompleted = step.value <= props.value;
  const isActive = step.value === props.value;
  
  return {
    'border-primary': isCompleted || isActive,
    'border-gray-300': !isCompleted && !isActive,
    'bg-primary': isCompleted,
    'bg-white': !isCompleted
  };
});

const stepCircleStyles = computed(() => (step) => {
  const isCompleted = step.value <= props.value;
  const isActive = step.value === props.value;
  
  return {
    width: '24px',
    height: '24px',
    borderColor: isCompleted || isActive ? props.primaryColor : '#d1d5db',
    backgroundColor: isCompleted ? props.primaryColor : 'white'
  };
});

const stepIndicatorStyles = computed(() => (step) => {
  const isCompleted = step.value <= props.value;
  return {
    backgroundColor: isCompleted ? 'white' : 'transparent'
  };
});

const stepConnectorStyles = computed(() => (step) => {
  const isCompleted = step.value < props.value;
  return {
    width: 'calc(100% - 24px)',
    backgroundColor: isCompleted ? props.primaryColor : '#d1d5db',
    transform: 'translateX(12px)'
  };
});

// Progress fill classes
const progressFillClasses = computed(() => (index = 0) => {
  const classes = [];
  
  if (props.animated) {
    if (props.indeterminate) classes.push('animate-pulse');
    if (props.variant === 'basic') classes.push('animate-pulse');
  }
  
  if (props.variant === 'striped') classes.push('progress-striped');
  if (props.variant === 'glow') classes.push('progress-glow');
  if (props.variant === 'neon') classes.push('progress-neon');
  if (props.variant === 'particles') classes.push('progress-particles');
  
  return classes;
});

// Status and display computed properties
const displayLabel = computed(() => {
  if (props.label) return props.label;
  if (props.indeterminate) return 'Loading...';
  return `${Math.round(percentage.value)}%`;
});

const ariaLabel = computed(() => {
  if (props.label) return `${props.label}: ${Math.round(percentage.value)}%`;
  return `Progress: ${Math.round(percentage.value)}%`;
});

const statusMessageClasses = computed(() => {
  const statusColors = {
    normal: 'text-gray-600',
    success: 'text-green-600',
    warning: 'text-yellow-600',
    error: 'text-red-600'
  };
  return statusColors[props.status] || statusColors.normal;
});

// Apply CSS variables manually for Vue 3.3.0 compatibility
watchEffect(() => {
  if (cssVariablesRef.value && typeof window !== 'undefined') {
    const element = cssVariablesRef.value;
    const vars = {
      '--progress-primary': props.primaryColor,
      '--progress-secondary': props.secondaryColor,
      '--progress-bg': props.bgColor,
      '--progress-text': props.textColor,
      '--progress-width': `${props.width}px`,
      '--progress-height': `${props.height}px`,
      '--progress-roundness': `${props.roundness}px`
    };
    
    Object.entries(vars).forEach(([key, value]) => {
      element.style.setProperty(key, value);
    });
  }
});

// Utility functions
const adjustColorLightness = (color, percent) => {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
};

// Enhanced animation with RAF
const animateToValue = (targetValue) => {
  if (!props.smooth || targetValue === animatedValue.value) return;
  
  const startTime = performance.now();
  const startValue = animatedValue.value;
  const duration = 700; // ms
  
  isAnimating.value = true;
  
  const animate = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function (cubic-bezier)
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    
    animatedValue.value = startValue + (targetValue - startValue) * easeProgress;
    
    if (progress < 1) {
      animationFrame = requestAnimationFrame(animate);
    } else {
      isAnimating.value = false;
      animatedValue.value = targetValue;
      
      // Emit completion event
      if (targetValue >= props.max) {
        emit('complete', { value: targetValue, percentage: percentage.value });
      }
      
      // Performance tracking
      if (props.performance) {
        performanceMetrics.value.updateTime = performance.now() - startTime;
        performanceMetrics.value.frameCount++;
        performanceMetrics.value.lastUpdate = Date.now();
      }
    }
  };
  
  animationFrame = requestAnimationFrame(animate);
};

// Watchers
watch(() => props.value, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    animateToValue(newValue);
    
    // Check milestones
    props.milestones.forEach(milestone => {
      if (oldValue < milestone.value && newValue >= milestone.value) {
        emit('milestone', { milestone, value: newValue, percentage: percentage.value });
      }
    });
    
    emit('update:value', newValue);
  }
}, { immediate: true });

watch(() => props.status, (newStatus, oldStatus) => {
  if (newStatus !== oldStatus) {
    emit('status-change', { status: newStatus, previousStatus: oldStatus });
  }
});

// Public API methods
const setValue = (value) => {
  animateToValue(Math.min(Math.max(value, 0), props.max));
};

const increment = (amount = 1) => {
  setValue(animatedValue.value + amount);
};

const decrement = (amount = 1) => {
  setValue(animatedValue.value - amount);
};

const reset = () => {
  setValue(0);
};

const complete = () => {
  setValue(props.max);
};

// Lifecycle
onMounted(() => {
  animatedValue.value = props.value;
});

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
  }
});

// Expose public API
defineExpose({
  setValue,
  increment,
  decrement,
  reset,
  complete,
  currentValue: computed(() => animatedValue.value),
  percentage: computed(() => percentage.value),
  isAnimating: computed(() => isAnimating.value),
  metrics: computed(() => performanceMetrics.value)
});
</script>

<style scoped>
/* Container and Base Styles */
.dim-progress-bar {
  contain: layout style;
  isolation: isolate;
}

/* Linear Progress Container */
.progress-container {
  position: relative;
  background-color: var(--progress-bg, #e5e7eb);
  border-radius: var(--progress-roundness, 8px);
  overflow: hidden;
  will-change: transform;
  contain: layout style;
}

.progress-fill {
  position: relative;
  height: 100%;
  background-color: var(--progress-primary, #6366f1);
  border-radius: inherit;
  transition: width 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: width, transform;
  contain: layout style paint;
  transform: translateZ(0); /* Hardware acceleration */
}

/* Variant: Striped */
.progress-striped {
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 20px 20px;
  animation: progressStripes 1s linear infinite;
}

.progress-stripes {
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%
  );
  background-size: 16px 16px;
  animation: moveStripes 1s linear infinite;
}

/* Variant: Glow */
.progress-glow {
  position: relative;
  box-shadow: 
    0 0 8px var(--progress-primary, #6366f1)66,
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.progress-glow::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  animation: progressShine 2s ease-in-out infinite;
  border-radius: inherit;
}

/* Variant: Neon */
.progress-neon {
  background: var(--progress-primary, #6366f1);
  box-shadow: 
    0 0 5px var(--progress-primary, #6366f1),
    0 0 10px var(--progress-primary, #6366f1),
    0 0 20px var(--progress-primary, #6366f1),
    inset 0 0 10px rgba(255, 255, 255, 0.1);
  animation: neonPulse 2s ease-in-out infinite alternate;
}

/* Variant: Particles */
.progress-particles {
  position: relative;
  overflow: hidden;
}

.progress-particles::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
    radial-gradient(circle at 60% 30%, rgba(255, 255, 255, 0.6) 1px, transparent 1px),
    radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.4) 1px, transparent 1px);
  background-size: 30px 10px, 20px 8px, 25px 12px;
  animation: particleFlow 3s linear infinite;
  opacity: 0.7;
}

/* Indeterminate Progress */
.indeterminate-bar {
  background: linear-gradient(
    90deg,
    transparent,
    var(--progress-primary, #6366f1),
    transparent
  );
  background-size: 40% 100%;
  animation: indeterminateFlow 1.5s ease-in-out infinite;
}

/* Circular Progress */
.circular-progress {
  position: relative;
  display: inline-block;
}

.progress-ring {
  transform: rotate(-90deg);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.progress-ring-progress {
  transition: stroke-dashoffset 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: stroke-dashoffset;
}

/* Multi-Progress */
.multi-progress-item {
  margin-bottom: 8px;
}

.multi-progress-item:last-child {
  margin-bottom: 0;
}

/* Stepped Progress */
.stepped-progress {
  width: 100%;
}

.step-item {
  position: relative;
  z-index: 1;
}

.step-circle {
  width: 24px;
  height: 24px;
  border: 2px solid #d1d5db;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 2;
}

.step-completed .step-circle {
  border-color: var(--progress-primary, #6366f1);
  background: var(--progress-primary, #6366f1);
  transform: scale(1.1);
}

.step-active .step-circle {
  border-color: var(--progress-primary, #6366f1);
  box-shadow: 0 0 0 4px var(--progress-primary, #6366f1)33;
  animation: stepPulse 2s ease-in-out infinite;
}

.step-connector {
  position: absolute;
  top: 50%;
  left: calc(50% + 12px);
  height: 2px;
  background: #d1d5db;
  transform: translateY(-50%);
  width: calc(100% - 24px);
  z-index: 1;
  transition: background-color 0.3s ease;
}

.step-completed + .step-item .step-connector {
  background: var(--progress-primary, #6366f1);
}

/* Milestones */
.milestone-container {
  pointer-events: none;
}

.milestone-marker {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background: rgba(255, 255, 255, 0.8);
  z-index: 10;
}

.milestone-tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
}

.milestone-marker:hover .milestone-tooltip {
  opacity: 1;
}

/* Status Indicators */
.status-message {
  font-size: 0.75rem;
  margin-top: 0.25rem;
  transition: color 0.2s ease;
}

/* Animations */
@keyframes progressStripes {
  0% { background-position: 0 0; }
  100% { background-position: 20px 0; }
}

@keyframes moveStripes {
  0% { background-position: 0 0; }
  100% { background-position: 16px 0; }
}

@keyframes progressShine {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(0%); }
  100% { transform: translateX(100%); }
}

@keyframes neonPulse {
  0% {
    box-shadow: 
      0 0 5px var(--progress-primary, #6366f1),
      0 0 10px var(--progress-primary, #6366f1),
      0 0 20px var(--progress-primary, #6366f1);
  }
  100% {
    box-shadow: 
      0 0 10px var(--progress-primary, #6366f1),
      0 0 20px var(--progress-primary, #6366f1),
      0 0 40px var(--progress-primary, #6366f1);
  }
}

@keyframes particleFlow {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes indeterminateFlow {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(0%); }
  100% { transform: translateX(100%); }
}

@keyframes stepPulse {
  0%, 100% { transform: scale(1.1); }
  50% { transform: scale(1.2); }
}

/* Gradient Animation */
@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.progress-fill[style*="linear-gradient"] {
  background-size: 200% 200%;
  animation: gradientMove 3s ease infinite;
}

/* Theme-specific styles */
.dim-progress-bar[class*="theme-dark"] .progress-container {
  background-color: #475569;
}

.dim-progress-bar[class*="theme-glass"] .progress-container {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.dim-progress-bar[class*="theme-neon"] .progress-container {
  background: #000000;
  border: 1px solid rgba(34, 211, 238, 0.3);
  box-shadow: 0 0 10px rgba(34, 211, 238, 0.2);
}

/* Responsive Design */
@media (max-width: 768px) {
  .stepped-progress .step-circle {
    width: 20px;
    height: 20px;
  }
  
  .stepped-progress .step-connector {
    width: calc(100% - 20px);
    left: calc(50% + 10px);
  }
  
  .milestone-tooltip {
    font-size: 0.6875rem;
    padding: 0.125rem 0.375rem;
  }
  
  .circular-progress {
    transform: scale(0.8);
  }
}

/* High Contrast Mode */
@media (prefers-contrast: high) {
  .progress-container {
    border: 2px solid currentColor;
  }
  
  .progress-fill {
    border: 1px solid currentColor;
  }
  
  .step-circle {
    border-width: 3px;
  }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  .progress-fill,
  .progress-ring-progress,
  .step-circle,
  .step-connector {
    transition: none !important;
  }
  
  .progress-striped,
  .progress-stripes,
  .progress-glow::after,
  .progress-neon,
  .progress-particles::before,
  .indeterminate-bar,
  .step-active .step-circle {
    animation: none !important;
  }
}

/* Print Styles */
@media print {
  .progress-container {
    background: #f0f0f0 !important;
    border: 1px solid #000;
  }
  
  .progress-fill {
    background: #000 !important;
    box-shadow: none !important;
  }
  
  .milestone-tooltip,
  .status-message {
    display: none;
  }
}

/* Performance optimizations */
.progress-fill,
.progress-ring,
.step-circle,
.milestone-marker {
  backface-visibility: hidden;
  perspective: 1000px;
}

/* Focus indicators for accessibility */
.progress-container:focus {
  outline: 2px solid var(--progress-primary, #6366f1);
  outline-offset: 2px;
}

.step-circle:focus {
  outline: 2px solid var(--progress-primary, #6366f1);
  outline-offset: 2px;
}
</style>
