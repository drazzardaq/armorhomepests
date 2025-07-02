<template>
  <!-- Documentation Mode -->
  <div v-if="isDocs" class="DUIMX-docs prose prose-purple max-w-none">
    <div class="mb-6 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4">
      <h2 class="mb-2 text-2xl font-bold text-purple-300">⏳ DUIMX Loader</h2>
      <p class="text-purple-200">Elegant loading animations with multiple styles, smooth transitions, and full customization support.</p>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">✨ Features</h3>
    <ul class="mb-6 space-y-2 text-purple-200">
      <li>🎨 <strong>Multiple Animations</strong> - Spin, pulse, bounce, dots, ripple effects</li>
      <li>⚡ <strong>Smooth Performance</strong> - Hardware-accelerated CSS animations</li>
      <li>🎯 <strong>Smart Sizing</strong> - Responsive sizing with compact mode</li>
      <li>🌈 <strong>Custom Colors</strong> - Full color customization with theme support</li>
      <li>🔧 <strong>Flexible</strong> - Use as overlay, inline, or with custom text</li>
      <li>📱 <strong>Responsive</strong> - Adapts to all screen sizes</li>
    </ul>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">🎯 Usage Examples</h3>
    <div class="mb-6 space-y-4">
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/50 p-4">
        <h4 class="mb-2 text-lg font-semibold text-purple-300">Basic Loader</h4>
        <pre class="text-sm text-purple-200"><code>&lt;DimLoader 
  type="spin"
  :size="48"
  primaryColor="#8b5cf6"
/&gt;</code></pre>
      </div>
      
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/50 p-4">
        <h4 class="mb-2 text-lg font-semibold text-purple-300">Loader with Text</h4>
        <pre class="text-sm text-purple-200"><code>&lt;DimLoader 
  type="dots"
  text="Loading..."
  :showText="true"
  theme="dark"
  primaryColor="#10b981"
/&gt;</code></pre>
      </div>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">🎨 Animation Types</h3>
    <div class="mb-6 grid grid-cols-2 gap-4">
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">spin</h4>
        <p class="text-purple-200 text-sm">Classic spinning circle</p>
      </div>
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">pulse</h4>
        <p class="text-purple-200 text-sm">Pulsing circle animation</p>
      </div>
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">dots</h4>
        <p class="text-purple-200 text-sm">Three bouncing dots</p>
      </div>
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">ripple</h4>
        <p class="text-purple-200 text-sm">Expanding ripple effect</p>
      </div>
    </div>

    <div class="mb-6 rounded-lg border border-purple-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4">
      <p class="text-center text-purple-200">
        <strong>🔗 Source Code:</strong> 
        <a href="https://github.com/drazzardaq/opensource/blob/master/src/opensource/DimLoader.vue" 
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
  <div 
    v-else 
    ref="cssVariablesRef"
    class="dim-loader flex items-center justify-center relative" 
    :style="containerStyles"
    :class="[
      `loader-theme-${theme}`,
      `loader-size-${sizeClass}`,
      { 'loader-compact': compact }
    ]"
    role="status"
    :aria-label="ariaLabel"
    :aria-live="isVisible ? 'polite' : 'off'"
  >
    <!-- Version Overlay -->
    <div class="absolute top-0 right-0 z-50 bg-purple-600/80 backdrop-blur-sm rounded-bl-lg px-2 py-1 pointer-events-none">
      <span class="text-xs text-white/80">v0.9.7</span>
    </div>
    
    <!-- Accessibility: Screen reader text -->
    <span class="sr-only">{{ ariaLabel }}</span>
    
    <!-- Enhanced Spin Loader -->
    <div v-if="type === 'spin'" 
         class="loader-spin border-4 border-solid rounded-full"
         :style="spinStyles"
         :class="animationClasses">
    </div>
    
    <!-- Enhanced Pulse Loader -->
    <div v-else-if="type === 'pulse'"
         class="loader-pulse rounded-full"
         :style="pulseStyles"
         :class="animationClasses">
    </div>
    
    <!-- Enhanced Dots Loader -->
    <div v-else-if="type === 'dots'" 
         class="loader-dots flex items-center gap-2"
         :style="{ '--animation-duration': animationDuration }">
      <div v-for="i in dotsCount" :key="i" 
           class="loader-dot rounded-full"
           :style="dotStyles(i)"
           :class="[
             'will-change-transform',
             animationEnabled ? 'animate-bounce-smooth' : ''
           ]">
      </div>
    </div>
    
    <!-- Enhanced Ripple Loader -->
    <div v-else-if="type === 'ripple'" 
         class="loader-ripple relative overflow-hidden" 
         :style="rippleContainerStyles">
      <div v-for="i in rippleCount" :key="i"
           class="absolute border-4 border-solid rounded-full will-change-transform"
           :style="rippleStyles(i)"
           :class="animationEnabled ? 'animate-ripple' : ''">
      </div>
    </div>
    
    <!-- New: Bars Loader -->
    <div v-else-if="type === 'bars'" 
         class="loader-bars flex items-end gap-1"
         :style="{ '--animation-duration': animationDuration }">
      <div v-for="i in barsCount" :key="i"
           class="loader-bar rounded-sm"
           :style="barStyles(i)"
           :class="animationEnabled ? 'animate-bars' : ''">
      </div>
    </div>
    
    <!-- New: Ring Loader -->
    <div v-else-if="type === 'ring'"
         class="loader-ring relative"
         :style="ringContainerStyles">
      <div class="absolute inset-0 border-4 border-solid rounded-full opacity-30"
           :style="{ borderColor: primaryColor }">
      </div>
      <div class="absolute inset-0 border-4 border-solid rounded-full border-t-transparent"
           :style="ringStyles"
           :class="animationEnabled ? 'animate-spin-smooth' : ''">
      </div>
    </div>
    
    <!-- New: Progress Loader -->
    <div v-else-if="type === 'progress'"
         class="loader-progress relative overflow-hidden rounded-full"
         :style="progressContainerStyles">
      <div class="absolute inset-0 rounded-full"
           :style="progressBarStyles"
           :class="animationEnabled ? 'animate-progress' : ''">
      </div>
    </div>
    
    <!-- Loading Text with Enhanced Styling -->
    <div v-if="showText && text" 
         class="loader-text ml-3 text-sm font-medium transition-opacity duration-300"
         :style="textStyles"
         :class="{ 'animate-pulse': animateText }">
      {{ displayText }}
      <span v-if="showDots" class="loader-dots-text">
        <span class="animate-bounce" style="animation-delay: 0s;">.</span>
        <span class="animate-bounce" style="animation-delay: 0.1s;">.</span>
        <span class="animate-bounce" style="animation-delay: 0.2s;">.</span>
      </span>
    </div>
    
    <!-- Progress Percentage (if applicable) -->
    <div v-if="showProgress && typeof progress === 'number'"
         class="loader-progress-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold"
         :style="{ color: textColor }">
      {{ Math.round(progress) }}%
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount, watch, watchEffect } from 'vue';

const props = defineProps({
  roundness: { type: Number, default: 8 },
  primaryColor: { type: String, default: '#6366f1' },
  bgColor: { type: String, default: 'transparent' },
  textColor: { type: String, default: '#1f2937' },
  fontFamily: { type: String, default: 'inherit' },
  width: { type: Number, default: 80 },
  height: { type: Number, default: 80 },
  padding: { type: Number, default: 8 },
  margin: { type: Number, default: 8 },
  theme: { type: String, default: 'light' },
  compact: { type: Boolean, default: false },
  isDocs: { type: Boolean, default: false },
  
  // Enhanced loader-specific props
  type: { 
    type: String, 
    default: 'spin',
    validator: (value) => ['spin', 'pulse', 'dots', 'ripple', 'bars', 'ring', 'progress'].includes(value)
  },
  size: { 
    type: [Number, String], 
    default: 48,
    validator: (value) => {
      if (typeof value === 'string') return ['sm', 'md', 'lg', 'xl'].includes(value);
      return value > 0 && value <= 200;
    }
  },
  text: { type: String, default: 'Loading...' },
  showText: { type: Boolean, default: false },
  speed: { 
    type: String, 
    default: 'normal',
    validator: (value) => ['slow', 'normal', 'fast', 'ultra'].includes(value)
  },
  
  // New props for enhanced functionality
  animateText: { type: Boolean, default: false },
  showDots: { type: Boolean, default: true },
  showProgress: { type: Boolean, default: false },
  progress: { type: Number, default: 0, validator: (value) => value >= 0 && value <= 100 },
  autoHide: { type: Boolean, default: false },
  delay: { type: Number, default: 0 },
  minimumDuration: { type: Number, default: 500 },
  
  // Animation control
  reduceMotion: { type: Boolean, default: false },
  pauseOnHover: { type: Boolean, default: false },
  
  // Customization props
  dotsCount: { type: Number, default: 3, validator: (value) => value >= 2 && value <= 6 },
  rippleCount: { type: Number, default: 2, validator: (value) => value >= 1 && value <= 4 },
  barsCount: { type: Number, default: 5, validator: (value) => value >= 3 && value <= 8 }
});

const emit = defineEmits(['start', 'stop', 'complete']);

// Component refs
const cssVariablesRef = ref(null);
const startTime = ref(null);
const isVisible = ref(false);
const isPaused = ref(false);

// Performance optimization: CSS variables application
watchEffect(() => {
  if (cssVariablesRef.value) {
    const element = cssVariablesRef.value;
    element.style.setProperty('--loader-primary-color', props.primaryColor);
    element.style.setProperty('--loader-bg-color', props.bgColor);
    element.style.setProperty('--loader-text-color', props.textColor);
    element.style.setProperty('--loader-size', typeof props.size === 'number' ? `${props.size}px` : props.size);
    element.style.setProperty('--loader-animation-duration', animationDuration.value);
    element.style.setProperty('--loader-border-radius', `${props.roundness}px`);
  }
});

// Computed properties with memoization
const sizeValue = computed(() => {
  if (typeof props.size === 'string') {
    const sizeMap = { sm: 24, md: 48, lg: 64, xl: 96 };
    return sizeMap[props.size] || 48;
  }
  return props.size;
});

const sizeClass = computed(() => {
  if (typeof props.size === 'string') return props.size;
  if (sizeValue.value <= 24) return 'sm';
  if (sizeValue.value <= 48) return 'md';
  if (sizeValue.value <= 64) return 'lg';
  return 'xl';
});

const animationDuration = computed(() => {
  if (props.reduceMotion) return '0s';
  
  const speedMap = {
    slow: '2s',
    normal: '1s', 
    fast: '0.6s',
    ultra: '0.3s'
  };
  return speedMap[props.speed] || '1s';
});

const animationEnabled = computed(() => {
  return !props.reduceMotion && (!props.pauseOnHover || !isPaused.value);
});

const animationClasses = computed(() => [
  'will-change-transform',
  { 'animation-paused': isPaused.value }
]);

// Container styles with enhanced responsiveness
const containerStyles = computed(() => ({
  fontFamily: props.fontFamily,
  padding: `${props.padding}px`,
  margin: `${props.margin}px`,
  '--loader-size': `${sizeValue.value}px`,
  '--animation-duration': animationDuration.value,
  '--primary-color': props.primaryColor
}));

// Enhanced loader styles with hardware acceleration
const spinStyles = computed(() => ({
  width: `${sizeValue.value}px`,
  height: `${sizeValue.value}px`,
  borderTopColor: props.primaryColor,
  borderRightColor: 'transparent',
  borderBottomColor: 'transparent', 
  borderLeftColor: 'transparent',
  borderWidth: `${Math.max(2, sizeValue.value * 0.08)}px`,
  animationDuration: animationDuration.value,
  willChange: 'transform'
}));

const pulseStyles = computed(() => ({
  width: `${sizeValue.value}px`,
  height: `${sizeValue.value}px`,
  backgroundColor: props.primaryColor,
  animationDuration: animationDuration.value,
  willChange: 'opacity, transform'
}));

const dotStyles = computed(() => {
  return (index) => {
    const dotSize = Math.max(4, sizeValue.value * 0.15);
    return {
      width: `${dotSize}px`,
      height: `${dotSize}px`,
      backgroundColor: props.primaryColor,
      animationDelay: `${(index - 1) * 0.1}s`,
      animationDuration: animationDuration.value,
      willChange: 'transform'
    };
  };
});

const rippleContainerStyles = computed(() => ({
  width: `${sizeValue.value}px`,
  height: `${sizeValue.value}px`
}));

const rippleStyles = computed(() => {
  return (index) => {
    const rippleSize = sizeValue.value * 0.8;
    return {
      width: `${rippleSize}px`,
      height: `${rippleSize}px`,
      borderColor: props.primaryColor,
      borderWidth: `${Math.max(1, sizeValue.value * 0.04)}px`,
      animationDuration: animationDuration.value,
      animationDelay: `${index * 0.2}s`,
      left: '10%',
      top: '10%',
      willChange: 'transform, opacity'
    };
  };
});

// New loader styles
const barStyles = computed(() => {
  return (index) => {
    const barWidth = Math.max(3, sizeValue.value * 0.08);
    const barHeight = sizeValue.value * 0.6;
    return {
      width: `${barWidth}px`,
      height: `${barHeight}px`,
      backgroundColor: props.primaryColor,
      animationDelay: `${(index - 1) * 0.1}s`,
      animationDuration: animationDuration.value,
      willChange: 'transform'
    };
  };
});

const ringContainerStyles = computed(() => ({
  width: `${sizeValue.value}px`,
  height: `${sizeValue.value}px`
}));

const ringStyles = computed(() => ({
  borderColor: props.primaryColor,
  borderWidth: `${Math.max(2, sizeValue.value * 0.08)}px`,
  animationDuration: animationDuration.value,
  willChange: 'transform'
}));

const progressContainerStyles = computed(() => ({
  width: `${sizeValue.value}px`,
  height: `${Math.max(4, sizeValue.value * 0.1)}px`,
  backgroundColor: `${props.primaryColor}20`
}));

const progressBarStyles = computed(() => ({
  width: `${props.progress}%`,
  height: '100%',
  backgroundColor: props.primaryColor,
  transition: 'width 0.3s ease-out'
}));

const textStyles = computed(() => ({
  color: props.textColor,
  fontFamily: props.fontFamily,
  fontSize: props.compact ? '0.75rem' : '0.875rem'
}));

const displayText = computed(() => {
  if (props.showProgress && typeof props.progress === 'number') {
    return `${props.text} ${Math.round(props.progress)}%`;
  }
  return props.text;
});

const ariaLabel = computed(() => {
  if (props.showProgress && typeof props.progress === 'number') {
    return `Loading ${Math.round(props.progress)} percent complete`;
  }
  return props.text || 'Loading';
});

// Lifecycle management
const startLoader = () => {
  if (isVisible.value) return;
  
  startTime.value = Date.now();
  isVisible.value = true;
  emit('start');
};

const stopLoader = () => {
  if (!isVisible.value) return;
  
  const elapsed = Date.now() - (startTime.value || 0);
  const remaining = Math.max(0, props.minimumDuration - elapsed);
  
  setTimeout(() => {
    isVisible.value = false;
    emit('stop');
    
    if (props.progress >= 100) {
      emit('complete');
    }
  }, remaining);
};

// Auto-hide functionality
watch(() => props.progress, (newProgress) => {
  if (props.autoHide && newProgress >= 100) {
    setTimeout(() => {
      stopLoader();
    }, 500);
  }
});

// Hover pause functionality
const handleMouseEnter = () => {
  if (props.pauseOnHover) {
    isPaused.value = true;
  }
};

const handleMouseLeave = () => {
  if (props.pauseOnHover) {
    isPaused.value = false;
  }
};

// Intersection Observer for performance
let intersectionObserver = null;

onMounted(() => {
  // Set up intersection observer for performance
  if ('IntersectionObserver' in window && cssVariablesRef.value) {
    intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startLoader();
          } else {
            // Optional: Pause animations when not visible
          }
        });
      },
      { threshold: 0.1 }
    );
    
    intersectionObserver.observe(cssVariablesRef.value);
  }
  
  // Add event listeners for hover pause
  if (props.pauseOnHover && cssVariablesRef.value) {
    cssVariablesRef.value.addEventListener('mouseenter', handleMouseEnter);
    cssVariablesRef.value.addEventListener('mouseleave', handleMouseLeave);
  }
  
  // Initial start with delay
  if (props.delay > 0) {
    setTimeout(() => {
      startLoader();
    }, props.delay);
  } else {
    startLoader();
  }
});

onBeforeUnmount(() => {
  if (intersectionObserver) {
    intersectionObserver.disconnect();
  }
  
  if (cssVariablesRef.value) {
    cssVariablesRef.value.removeEventListener('mouseenter', handleMouseEnter);
    cssVariablesRef.value.removeEventListener('mouseleave', handleMouseLeave);
  }
});
</script>

<style scoped>
.dim-loader {
  --loader-primary-color: v-bind('primaryColor');
  --loader-size: v-bind('`${sizeValue}px`');
  --animation-duration: v-bind('animationDuration');
}

/* Screen reader only text */
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

/* Enhanced animations with hardware acceleration */
.loader-spin {
  border-style: solid;
  transform: translateZ(0);
}

/* Smooth bounce animation for dots */
.animate-bounce-smooth {
  animation: bounce-smooth var(--animation-duration) ease-in-out infinite;
}

@keyframes bounce-smooth {
  0%, 80%, 100% { 
    transform: translateY(0) translateZ(0); 
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }
  40% { 
    transform: translateY(-8px) translateZ(0); 
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
  }
}

/* Enhanced ripple animation */
.animate-ripple {
  animation: ripple var(--animation-duration) cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes ripple {
  0% {
    transform: scale(0) translateZ(0);
    opacity: 1;
  }
  100% {
    transform: scale(1) translateZ(0);
    opacity: 0;
  }
}

/* New bars animation */
.animate-bars {
  animation: bars var(--animation-duration) ease-in-out infinite;
}

@keyframes bars {
  0%, 40%, 100% {
    transform: scaleY(0.4) translateZ(0);
    animation-timing-function: cubic-bezier(0.11, 0, 0.5, 0);
  }
  20% {
    transform: scaleY(1) translateZ(0);
    animation-timing-function: cubic-bezier(0.5, 0, 0.89, 1);
  }
}

/* Enhanced spin animation */
.animate-spin-smooth {
  animation: spin-smooth var(--animation-duration) linear infinite;
}

@keyframes spin-smooth {
  0% { transform: rotate(0deg) translateZ(0); }
  100% { transform: rotate(360deg) translateZ(0); }
}

/* Progress animation */
.animate-progress {
  animation: progress var(--animation-duration) ease-out;
}

@keyframes progress {
  0% { width: 0%; }
  100% { width: var(--progress-width, 100%); }
}

/* Size variants */
.loader-size-sm {
  --loader-size: 24px;
}

.loader-size-md {
  --loader-size: 48px;
}

.loader-size-lg {
  --loader-size: 64px;
}

.loader-size-xl {
  --loader-size: 96px;
}

/* Compact mode */
.loader-compact {
  --loader-size: calc(var(--loader-size) * 0.75);
}

.loader-compact .loader-text {
  font-size: 0.75rem;
  margin-left: 0.5rem;
}

/* Theme variants */
.loader-theme-dark {
  --loader-bg-color: transparent;
  --loader-text-color: #e2e8f0;
}

.loader-theme-light {
  --loader-bg-color: transparent;
  --loader-text-color: #1f2937;
}

/* Animation pause functionality */
.animation-paused * {
  animation-play-state: paused !important;
}

/* Hover effects */
.dim-loader:hover .loader-text {
  opacity: 0.8;
  transition: opacity 0.2s ease;
}

/* Enhanced dots animation stagger */
.loader-dots .loader-dot:nth-child(1) { 
  animation-delay: 0s; 
}
.loader-dots .loader-dot:nth-child(2) { 
  animation-delay: 0.1s; 
}
.loader-dots .loader-dot:nth-child(3) { 
  animation-delay: 0.2s; 
}
.loader-dots .loader-dot:nth-child(4) { 
  animation-delay: 0.3s; 
}
.loader-dots .loader-dot:nth-child(5) { 
  animation-delay: 0.4s; 
}
.loader-dots .loader-dot:nth-child(6) { 
  animation-delay: 0.5s; 
}

/* Enhanced bars animation stagger */
.loader-bars .loader-bar:nth-child(1) { animation-delay: 0s; }
.loader-bars .loader-bar:nth-child(2) { animation-delay: 0.1s; }
.loader-bars .loader-bar:nth-child(3) { animation-delay: 0.2s; }
.loader-bars .loader-bar:nth-child(4) { animation-delay: 0.3s; }
.loader-bars .loader-bar:nth-child(5) { animation-delay: 0.4s; }
.loader-bars .loader-bar:nth-child(6) { animation-delay: 0.5s; }
.loader-bars .loader-bar:nth-child(7) { animation-delay: 0.6s; }
.loader-bars .loader-bar:nth-child(8) { animation-delay: 0.7s; }

/* Text dots animation */
.loader-dots-text span {
  animation: text-dots 1.4s ease-in-out infinite;
}

@keyframes text-dots {
  0%, 80%, 100% {
    opacity: 0;
    transform: scale(1);
  }
  40% {
    opacity: 1;
    transform: scale(1.2);
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .dim-loader *,
  .dim-loader *::before,
  .dim-loader *::after {
    animation-duration: 0.01s !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01s !important;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .loader-spin {
    border-width: 4px;
    filter: contrast(2);
  }
  
  .loader-dots .loader-dot,
  .loader-bars .loader-bar {
    filter: contrast(2);
  }
}

/* Dark mode enhancements */
@media (prefers-color-scheme: dark) {
  .loader-theme-dark {
    --loader-text-color: #f1f5f9;
  }
}

/* Focus styles for accessibility */
.dim-loader:focus-visible {
  outline: 2px solid var(--loader-primary-color);
  outline-offset: 4px;
  border-radius: 4px;
}

/* Performance optimizations */
.will-change-transform {
  will-change: transform;
}

.will-change-transform.animate-bounce-smooth,
.will-change-transform.animate-spin-smooth,
.will-change-transform.animate-ripple,
.will-change-transform.animate-bars {
  transform: translateZ(0);
  backface-visibility: hidden;
}
</style>
