<template>
  <!-- Documentation Mode -->
  <div v-if="isDocs" class="DUIMX-docs prose prose-purple max-w-none">
    <div class="mb-6 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4">
      <h2 class="mb-2 text-2xl font-bold text-purple-300">🔄 DUIMX Animated Icon</h2>
      <p class="text-purple-200">Dynamic animated icon component with various animation effects, customizable triggers, and interactive states.</p>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">✨ Features</h3>
    <ul class="mb-6 space-y-2 text-purple-200">
      <li>🎭 <strong>Multiple Animations</strong> - Spin, bounce, pulse, shake, and more</li>
      <li>🎯 <strong>Trigger Options</strong> - Hover, click, or continuous animations</li>
      <li>🎨 <strong>Icon Variants</strong> - Support for SVG icons, emoji, and custom content</li>
      <li>⚡ <strong>Performance Optimized</strong> - Efficient CSS animations</li>
      <li>📱 <strong>Touch Friendly</strong> - Works perfectly on mobile devices</li>
      <li>♿ <strong>Accessible</strong> - Proper ARIA labels and keyboard support</li>
      <li>🔧 <strong>Fully Reactive</strong> - Responds to all layout and theme changes</li>
    </ul>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">🎯 Usage Example</h3>
    <div class="mb-6 rounded-lg border border-purple-500/30 bg-slate-800/50 p-4">
      <pre class="text-sm text-purple-200"><code>&lt;DimAnimatedIcon 
  icon="🔄"
  animation="spin"
  trigger="hover"
  :size="48"
  primaryColor="#10b981"
  theme="dark"
&gt;&lt;/DimAnimatedIcon&gt;</code></pre>
    </div>

    <div class="mb-6 rounded-lg border border-purple-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4">
      <p class="text-center text-purple-200">
        <strong>🔗 Source Code:</strong> 
        <a href="https://github.com/drazzardaq/opensource/blob/master/src/opensource/DimAnimatedIcon.vue" 
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
  <div v-else class="animated-icon-container" :style="containerStyles">
    <div
      ref="iconElement"
      class="animated-icon-wrapper inline-flex items-center justify-center cursor-pointer transition-all"
      :class="[
        roundnessClass,
        themeClasses,
        animationClass,
        { 'animate-active': isAnimating }
      ]"
      :style="iconWrapperStyles"
      @click="handleClick"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @keydown="handleKeydown"
      :tabindex="clickable ? 0 : -1"
      :aria-label="ariaLabel"
      role="button"
    >
      <!-- SVG Icon -->
      <svg 
        v-if="iconType === 'svg'"
        class="animated-icon-svg"
        :style="iconStyles"
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" :d="getSvgPath()" />
      </svg>
      
      <!-- Emoji Icon -->
      <span 
        v-else-if="iconType === 'emoji'"
        class="animated-icon-emoji"
        :style="iconStyles"
      >
        {{ icon }}
      </span>
      
      <!-- Custom Content -->
      <div 
        v-else
        class="animated-icon-custom"
        :style="iconStyles"
      >
        <slot>{{ icon }}</slot>
      </div>
    </div>
    
    <!-- Optional Label -->
    <div v-if="label" class="icon-label mt-2 text-center text-sm" :style="labelStyles">
      {{ label }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  roundness: { type: Number, default: 8 },
  primaryColor: { type: String, default: '#6366f1' },
  bgColor: { type: String, default: '#ffffff' },
  textColor: { type: String, default: '#1f2937' },
  fontFamily: { type: String, default: 'inherit' },
  width: { type: Number, default: 48 },
  height: { type: Number, default: 48 },
  padding: { type: Number, default: 8 },
  margin: { type: Number, default: 8 },
  theme: { type: String, default: 'light' },
  compact: { type: Boolean, default: false },
  isDocs: { type: Boolean, default: false },
  
  // Icon-specific props
  icon: { type: String, default: '⚡' },
  animation: { 
    type: String, 
    default: 'pulse',
    validator: (value) => ['spin', 'bounce', 'pulse', 'shake', 'wobble', 'swing', 'flash', 'none'].includes(value)
  },
  trigger: { 
    type: String, 
    default: 'hover',
    validator: (value) => ['hover', 'click', 'continuous', 'none'].includes(value)
  },
  size: { type: Number, default: 24 },
  label: { type: String, default: '' },
  clickable: { type: Boolean, default: true },
  ariaLabel: { type: String, default: 'Animated icon' }
});

const emit = defineEmits(['click', 'animationStart', 'animationEnd']);

// Reactive state
const isAnimating = ref(props.trigger === 'continuous');
const iconElement = ref(null);

// Computed properties
const iconType = computed(() => {
  if (props.icon.includes('<svg') || getSvgPath()) return 'svg';
  if (/[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/u.test(props.icon)) return 'emoji';
  return 'custom';
});

const roundnessClass = computed(() => {
  if (props.roundness <= 4) return 'rounded-sm';
  if (props.roundness <= 8) return 'rounded';
  if (props.roundness <= 12) return 'rounded-lg';
  if (props.roundness <= 20) return 'rounded-xl';
  return 'rounded-3xl';
});

const themeClasses = computed(() => {
  if (props.theme === 'light') {
    return 'bg-gray-50 text-gray-800 hover:bg-gray-100';
  }
  return 'bg-slate-800 text-white hover:bg-slate-700';
});

const animationClass = computed(() => {
  if (props.trigger === 'continuous' || isAnimating.value) {
    return `animate-${props.animation}`;
  }
  return '';
});

const containerStyles = computed(() => ({
  fontFamily: props.fontFamily,
  margin: `${props.margin}px`
}));

const iconWrapperStyles = computed(() => ({
  width: `${props.width}px`,
  height: `${props.height}px`,
  padding: `${props.padding}px`,
  backgroundColor: props.bgColor,
  color: props.textColor,
  border: `2px solid ${props.primaryColor}30`,
  boxShadow: isAnimating.value ? `0 0 20px ${props.primaryColor}40` : '0 2px 4px rgba(0, 0, 0, 0.1)'
}));

const iconStyles = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size}px`,
  fontSize: iconType.value === 'emoji' ? `${props.size}px` : 'inherit',
  color: props.primaryColor
}));

const labelStyles = computed(() => ({
  color: props.textColor,
  fontSize: props.compact ? '0.75rem' : '0.875rem'
}));

// Methods
const getSvgPath = () => {
  const svgPaths = {
    '⚡': 'M13 10V3L4 14h7v7l9-11h-7z',
    '🔄': 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    '❤️': 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
    '⭐': 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
    '🎯': 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  };
  return svgPaths[props.icon] || svgPaths['⚡'];
};

const handleClick = () => {
  if (!props.clickable) return;
  
  if (props.trigger === 'click') {
    triggerAnimation();
  }
  
  emit('click');
};

const handleMouseEnter = () => {
  if (props.trigger === 'hover') {
    triggerAnimation();
  }
};

const handleMouseLeave = () => {
  if (props.trigger === 'hover') {
    stopAnimation();
  }
};

const handleKeydown = (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    handleClick();
  }
};

const triggerAnimation = () => {
  isAnimating.value = true;
  emit('animationStart');
  
  // Stop animation after duration (except for continuous)
  if (props.trigger !== 'continuous') {
    setTimeout(() => {
      stopAnimation();
    }, getAnimationDuration());
  }
};

const stopAnimation = () => {
  if (props.trigger !== 'continuous') {
    isAnimating.value = false;
    emit('animationEnd');
  }
};

const getAnimationDuration = () => {
  const durations = {
    spin: 1000,
    bounce: 1000,
    pulse: 1000,
    shake: 500,
    wobble: 1000,
    swing: 1000,
    flash: 500
  };
  return durations[props.animation] || 1000;
};
</script>

<style scoped>
.animated-icon-wrapper:focus {
  outline: 2px solid rgba(99, 102, 241, 0.4);
  outline-offset: 2px;
}

/* Animation Classes */
.animate-spin {
  animation: spin 1s linear infinite;
}

.animate-bounce {
  animation: bounce 1s ease-in-out infinite;
}

.animate-pulse {
  animation: pulse 2s ease-in-out infinite;
}

.animate-shake {
  animation: shake 0.5s ease-in-out;
}

.animate-wobble {
  animation: wobble 1s ease-in-out;
}

.animate-swing {
  animation: swing 1s ease-in-out;
}

.animate-flash {
  animation: flash 1s ease-in-out;
}

/* Keyframe Animations */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-25%); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
  20%, 40%, 60%, 80% { transform: translateX(2px); }
}

@keyframes wobble {
  0%, 100% { transform: rotate(0deg); }
  15% { transform: rotate(-5deg); }
  30% { transform: rotate(4deg); }
  45% { transform: rotate(-3deg); }
  60% { transform: rotate(2deg); }
  75% { transform: rotate(-1deg); }
}

@keyframes swing {
  0%, 100% { transform: rotate(0deg); transform-origin: center top; }
  20% { transform: rotate(15deg); }
  40% { transform: rotate(-10deg); }
  60% { transform: rotate(5deg); }
  80% { transform: rotate(-5deg); }
}

@keyframes flash {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.animate-active {
  transform-origin: center;
}
</style>
