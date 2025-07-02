<template>
  <!-- Documentation Mode -->
  <div v-if="isDocs" class="DUIMX-docs prose prose-purple max-w-none">
    <div class="mb-6 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4">
      <h2 class="mb-2 text-2xl font-bold text-purple-300">🃏 DUIMX Card</h2>
      <p class="text-purple-200">Versatile card component with multiple variants, glass morphism effects, and full customization support.</p>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">✨ Features</h3>
    <ul class="mb-6 space-y-2 text-purple-200">
      <li>🎨 <strong>Multiple Variants</strong> - Classic, Glass, Modern, Neon, Frosted, Gradient</li>
      <li>🔮 <strong>Glass Morphism</strong> - Beautiful backdrop blur and transparency effects</li>
      <li>⚡ <strong>Interactive States</strong> - Hover effects and smooth animations</li>
      <li>📐 <strong>Flexible Layout</strong> - Adaptable to any content type</li>
      <li>🎯 <strong>Action Support</strong> - Built-in button actions with custom styling</li>
      <li>🔧 <strong>Fully Reactive</strong> - All playground controls work seamlessly</li>
    </ul>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">🎯 Usage Examples</h3>
    <div class="mb-6 space-y-4">
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/50 p-4">
        <h4 class="mb-2 text-lg font-semibold text-purple-300">Basic Card</h4>
        <pre class="text-sm text-purple-200"><code>&lt;DimCard variant="classic"&gt;
  &lt;h3&gt;Card Title&lt;/h3&gt;
  &lt;p&gt;Card content goes here...&lt;/p&gt;
&lt;/DimCard&gt;</code></pre>
      </div>
      
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/50 p-4">
        <h4 class="mb-2 text-lg font-semibold text-purple-300">Glass Morphism Card</h4>
        <pre class="text-sm text-purple-200"><code>&lt;DimCard 
  variant="glass"
  :roundness="24"
  :blurIntensity="16"
  :transparency="0.2"
  :showActions="true"
  theme="dark"
&gt;
  &lt;h3&gt;Glass Card&lt;/h3&gt;
  &lt;p&gt;Beautiful glass effect&lt;/p&gt;
&lt;/DimCard&gt;</code></pre>
      </div>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">🎨 Variants</h3>
    <div class="mb-6 grid grid-cols-2 gap-4">
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">classic</h4>
        <p class="text-purple-200 text-sm">Solid background card</p>
      </div>
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">glass</h4>
        <p class="text-purple-200 text-sm">Glass morphism effect</p>
      </div>
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">modern</h4>
        <p class="text-purple-200 text-sm">Clean modern styling</p>
      </div>
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">neon</h4>
        <p class="text-purple-200 text-sm">Vibrant neon glow</p>
      </div>
    </div>

    <div class="mb-6 rounded-lg border border-purple-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4">
      <p class="text-center text-purple-200">
        <strong>🔗 Source Code:</strong> 
        <a href="https://github.com/drazzardaq/opensource/blob/master/src/opensource/DimCard.vue" 
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
  <div v-else
    ref="cardElement"
    class="dim-card bg-gradient-to-br from-slate-800 via-purple-900 to-slate-900 border border-purple-500/20 shadow-lg flex flex-col items-center justify-center min-h-[200px] relative"
    :class="[
      `variant-${variant}`,
      `animation-${animationEasing.replace(/[^a-zA-Z]/g, '')}`,
      { 
        'glass': variant === 'glass', 
        'modern': variant === 'modern', 
        'neon': variant === 'neon', 
        'frosted': variant === 'frosted', 
        'gradient': variant === 'gradient',
        'is-hovered': isHovered,
        'is-transitioning': isTransitioning,
        'is-visible': isVisible
      }
    ]"
    :style="cardStyle"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @focus="handleMouseEnter"
    @blur="handleMouseLeave"
    tabindex="0"
    role="article"
    :aria-label="`${variantLabel} card component`"
  >
    <!-- Version Overlay -->
    <!-- <div class="absolute top-0 right-0 z-50 bg-purple-600/80 backdrop-blur-sm rounded-bl-lg px-2 py-1 pointer-events-none">
      <span class="text-xs text-white/80">v0.0.1</span>
    </div> -->
    
    <div v-if="variant !== 'classic'" class="glass-overlay" :style="overlayStyle"></div>
    <div class="w-16 h-16 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
      <span class="text-3xl">🃏</span>
    </div>
    <h2 class="text-xl font-bold text-purple-200 mb-2">DimCard <span v-if="variant !== 'classic'">({{ variantLabel }})</span></h2>
    <p class="text-slate-400 text-center mb-4">A modern, flexible card component for layouts, dashboards, and content blocks. Supports all DUIMX Playground props, theming, and glassmorphic variants.</p>
    <slot />
    <div v-if="showActions" class="card-actions mt-4 flex gap-2">
      <button class="action-btn primary">Get Started</button>
      <button class="action-btn secondary">Learn More</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, shallowRef, nextTick, watchEffect } from 'vue';

// Performance-optimized props with validation
const props = defineProps({
  variant: { 
    type: String, 
    default: 'classic',
    validator: (value) => ['classic', 'glass', 'modern', 'neon', 'frosted', 'gradient'].includes(value)
  },
  roundness: { 
    type: Number, 
    default: 16,
    validator: (value) => value >= 0 && value <= 50
  },
  primaryColor: { 
    type: String, 
    default: '#6366f1',
    validator: (value) => /^#([0-9A-F]{3}){1,2}$/i.test(value) || /^(rgb|hsl)a?\(/.test(value)
  },
  bgColor: { type: String, default: '#1e293b' },
  textColor: { type: String, default: '#e2e8f0' },
  fontFamily: { type: String, default: 'inherit' },
  width: { 
    type: Number, 
    default: 320,
    validator: (value) => value > 0 && value <= 1200
  },
  height: { 
    type: Number, 
    default: 180,
    validator: (value) => value > 0 && value <= 800
  },
  padding: { type: Number, default: 24 },
  margin: { type: Number, default: 12 },
  theme: { 
    type: String, 
    default: 'dark',
    validator: (value) => ['light', 'dark', 'auto'].includes(value)
  },
  compact: { type: Boolean, default: false },
  blurIntensity: { 
    type: Number, 
    default: 12,
    validator: (value) => value >= 0 && value <= 30
  },
  transparency: { 
    type: Number, 
    default: 0.3,
    validator: (value) => value >= 0 && value <= 1
  },
  hoverable: { type: Boolean, default: true },
  showBorder: { type: Boolean, default: true },
  showActions: { type: Boolean, default: false },
  isDocs: { type: Boolean, default: false },
  // New animation props
  animationDuration: { 
    type: Number, 
    default: 300,
    validator: (value) => value >= 0 && value <= 2000
  },
  animationEasing: { 
    type: String, 
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    validator: (value) => value.includes('cubic-bezier') || ['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'].includes(value)
  },
  hoverScale: { 
    type: Number, 
    default: 1.05,
    validator: (value) => value >= 0.5 && value <= 2
  },
  hoverRotation: { 
    type: Number, 
    default: 0,
    validator: (value) => value >= -45 && value <= 45
  }
});

// Performance tracking and optimization
const isHovered = ref(false);
const isTransitioning = ref(false);
const cardElement = shallowRef(null);
const intersectionObserver = shallowRef(null);
const isVisible = ref(false);

// Animation performance optimization: Use RAF for smooth updates
let animationFrameId = null;
let hoverTimeout = null;

// Optimized variant label computation with memoization
const variantLabelMap = new Map([
  ['classic', 'Classic'],
  ['glass', 'Glass'],
  ['modern', 'Modern'],
  ['neon', 'Neon'],
  ['frosted', 'Frosted'],
  ['gradient', 'Gradient']
]);

const variantLabel = computed(() => {
  return variantLabelMap.get(props.variant) || 'Custom';
});

// Performance optimization: Direct CSS variables without useCssVars
const applyCssVariables = () => {
  if (cardElement.value) {
    const element = cardElement.value;
    element.style.setProperty('--card-roundness', `${props.roundness}px`);
    element.style.setProperty('--card-primary-color', props.primaryColor);
    element.style.setProperty('--card-bg-color', props.bgColor);
    element.style.setProperty('--card-text-color', props.textColor);
    element.style.setProperty('--card-width', `${props.width}px`);
    element.style.setProperty('--card-height', `${props.height}px`);
    element.style.setProperty('--card-padding', `${props.padding}px`);
    element.style.setProperty('--card-margin', `${props.margin}px`);
    element.style.setProperty('--card-blur-intensity', `${props.blurIntensity}px`);
    element.style.setProperty('--card-transparency', props.transparency);
    element.style.setProperty('--card-animation-duration', `${props.animationDuration}ms`);
    element.style.setProperty('--card-animation-easing', props.animationEasing);
    element.style.setProperty('--card-hover-scale', props.hoverScale);
    element.style.setProperty('--card-hover-rotation', `${props.hoverRotation}deg`);
  }
};

// Watch for prop changes and update CSS variables
watchEffect(() => {
  applyCssVariables();
});

// Highly optimized card styles with reduced computational overhead
const cardStyle = computed(() => {
  const baseStyles = {
    fontFamily: 'var(--card-font-family, inherit)',
    width: 'var(--card-width)',
    height: 'var(--card-height)',
    padding: 'var(--card-padding)',
    margin: 'var(--card-margin)',
    borderRadius: 'var(--card-roundness)',
    transition: `all var(--card-animation-duration) var(--card-animation-easing)`,
    // Hardware acceleration for better performance
    transform: 'translate3d(0, 0, 0)',
    willChange: isHovered.value ? 'transform, box-shadow, filter' : 'auto'
  };

  // Variant-specific optimizations
  const variantStyleMap = {
    classic: {
      backgroundColor: 'var(--card-bg-color)',
      color: 'var(--card-text-color)'
    },
    glass: {
      backgroundColor: 'rgba(30, 41, 59, 0.7)',
      backdropFilter: 'blur(var(--card-blur-intensity))',
      border: props.showBorder ? '1.5px solid color-mix(in srgb, var(--card-primary-color) 25%, transparent)' : 'none'
    },
    modern: {
      backgroundColor: 'rgba(15, 23, 42, 0.9)',
      border: '1px solid rgba(148, 163, 184, 0.1)',
      backdropFilter: 'blur(8px)'
    },
    neon: {
      backgroundColor: 'rgba(30, 41, 59, 0.8)',
      border: '2px solid var(--card-primary-color)',
      boxShadow: isHovered.value 
        ? `0 0 30px color-mix(in srgb, var(--card-primary-color) 60%, transparent)` 
        : `0 0 15px color-mix(in srgb, var(--card-primary-color) 30%, transparent)`
    },
    frosted: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(16px) saturate(180%)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    },
    gradient: {
      background: `linear-gradient(135deg, 
        color-mix(in srgb, var(--card-primary-color) 80%, transparent), 
        color-mix(in srgb, #a21caf 60%, transparent))`,
      backdropFilter: 'blur(var(--card-blur-intensity))'
    }
  };

  return {
    ...baseStyles,
    ...(variantStyleMap[props.variant] || variantStyleMap.classic)
  };
});

// Performance-optimized overlay styles
const overlayStyle = computed(() => {
  if (props.variant === 'classic') return {};
  
  const gradientMap = {
    gradient: 'linear-gradient(135deg, var(--card-primary-color) 0%, #a21caf 100%)',
    neon: 'linear-gradient(135deg, #f472b6 0%, var(--card-primary-color) 100%)',
    default: 'rgba(255, 255, 255, 0.08)'
  };
  
  return {
    position: 'absolute',
    inset: '0',
    borderRadius: 'var(--card-roundness)',
    pointerEvents: 'none',
    background: gradientMap[props.variant] || gradientMap.default,
    opacity: 'var(--card-transparency)',
    zIndex: '0',
    transition: 'opacity var(--card-animation-duration) var(--card-animation-easing)'
  };
});

// Performance optimization: Debounced hover handlers
const handleMouseEnter = () => {
  if (!props.hoverable) return;
  
  // Cancel any pending hover off
  if (hoverTimeout) {
    clearTimeout(hoverTimeout);
    hoverTimeout = null;
  }
  
  // Use RAF for smooth hover animations
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  
  animationFrameId = requestAnimationFrame(() => {
    isHovered.value = true;
    isTransitioning.value = true;
    
    // Clean up transition state after animation
    setTimeout(() => {
      isTransitioning.value = false;
    }, props.animationDuration);
  });
};

const handleMouseLeave = () => {
  if (!props.hoverable) return;
  
  // Debounce hover off to prevent flicker
  hoverTimeout = setTimeout(() => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
    
    animationFrameId = requestAnimationFrame(() => {
      isHovered.value = false;
      isTransitioning.value = true;
      
      setTimeout(() => {
        isTransitioning.value = false;
      }, props.animationDuration);
    });
  }, 50);
};

// Performance optimization: Intersection Observer for lazy animations
onMounted(() => {
  nextTick(() => {
    if (cardElement.value && 'IntersectionObserver' in window) {
      intersectionObserver.value = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isVisible.value = entry.isIntersecting;
            
            // Pause animations when not visible
            if (!entry.isIntersecting && isHovered.value) {
              isHovered.value = false;
            }
          });
        },
        { 
          threshold: 0.1,
          rootMargin: '50px' 
        }
      );
      
      intersectionObserver.value.observe(cardElement.value);
    } else {
      // Fallback for browsers without Intersection Observer
      isVisible.value = true;
    }
  });
});

// Cleanup performance optimizations
onBeforeUnmount(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  
  if (hoverTimeout) {
    clearTimeout(hoverTimeout);
  }
  
  if (intersectionObserver.value) {
    intersectionObserver.value.disconnect();
  }
});
</script>

<style scoped>
/* Performance-optimized card base styles */
.dim-card {
  position: relative;
  /* Hardware acceleration for smooth animations */
  transform: translate3d(0, 0, 0);
  transition: all var(--card-animation-duration) var(--card-animation-easing);
  /* Optimize for animations */
  will-change: transform, box-shadow, filter, opacity;
  /* Prevent layout thrashing */
  contain: layout style paint;
  /* Smooth font rendering */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Enhanced glass overlay performance */
.dim-card .glass-overlay {
  pointer-events: none;
  z-index: 1;
  transition: opacity var(--card-animation-duration) var(--card-animation-easing);
  /* Hardware acceleration */
  transform: translate3d(0, 0, 0);
}

/* Optimized hover effects with GPU acceleration */
.dim-card.is-hovered {
  transform: translate3d(0, -4px, 0) scale(var(--card-hover-scale)) rotate(var(--card-hover-rotation));
  box-shadow: 
    0 20px 40px -12px color-mix(in srgb, var(--card-primary-color) 25%, transparent),
    0 8px 16px -4px rgba(0, 0, 0, 0.1),
    0 0 0 1px color-mix(in srgb, var(--card-primary-color) 10%, transparent);
}

/* Variant-specific hover enhancements */
.dim-card.variant-neon.is-hovered {
  box-shadow: 
    0 0 30px color-mix(in srgb, var(--card-primary-color) 60%, transparent),
    0 0 60px color-mix(in srgb, var(--card-primary-color) 30%, transparent),
    0 20px 40px -12px rgba(0, 0, 0, 0.3);
  filter: brightness(1.1);
}

.dim-card.variant-glass.is-hovered {
  backdrop-filter: blur(calc(var(--card-blur-intensity) + 4px)) saturate(120%);
  border-color: color-mix(in srgb, var(--card-primary-color) 50%, transparent);
}

.dim-card.variant-gradient.is-hovered {
  filter: hue-rotate(15deg) brightness(1.1);
}

.dim-card.variant-frosted.is-hovered {
  backdrop-filter: blur(20px) saturate(200%) brightness(1.1);
  border-color: rgba(255, 255, 255, 0.4);
}

/* Smooth transition states */
.dim-card.is-transitioning {
  transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Focus styles for accessibility */
.dim-card:focus-visible {
  outline: 2px solid var(--card-primary-color);
  outline-offset: 4px;
}

/* Performance optimization: Only animate when visible */
.dim-card:not(.is-visible) {
  will-change: auto;
  transition: none;
}

/* Enhanced action button animations */
.action-btn {
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all var(--card-animation-duration) var(--card-animation-easing);
  /* Hardware acceleration */
  transform: translate3d(0, 0, 0);
  position: relative;
  overflow: hidden;
  border: none;
  cursor: pointer;
}

/* Ripple effect for action buttons */
.action-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.action-btn:hover::before {
  width: 300px;
  height: 300px;
}

.action-btn.primary {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  color: white;
  box-shadow: 
    0 4px 15px -3px rgba(139, 92, 246, 0.4),
    0 2px 4px -1px rgba(139, 92, 246, 0.2);
}

.action-btn.primary:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 
    0 8px 25px -5px rgba(139, 92, 246, 0.5),
    0 4px 8px -2px rgba(139, 92, 246, 0.3);
}

.action-btn.primary:active {
  transform: translateY(0) scale(1.02);
  transition-duration: 0.1s;
}

.action-btn.secondary {
  background: linear-gradient(135deg, #374151, #1f2937);
  color: #a78bfa;
  border: 1px solid rgba(167, 139, 250, 0.3);
}

.action-btn.secondary:hover {
  background: linear-gradient(135deg, #4b5563, #374151);
  border-color: rgba(167, 139, 250, 0.6);
  transform: translateY(-1px) scale(1.02);
  box-shadow: 0 4px 12px -2px rgba(167, 139, 250, 0.3);
}

/* Card entrance animation */
@keyframes cardEnter {
  0% {
    opacity: 0;
    transform: translate3d(0, 20px, 0) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
}

.dim-card.is-visible {
  animation: cardEnter var(--card-animation-duration) var(--card-animation-easing) backwards;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .dim-card,
  .dim-card *,
  .action-btn,
  .action-btn::before {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .dim-card.is-hovered {
    transform: none !important;
  }
  
  .action-btn:hover {
    transform: none !important;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .dim-card {
    border: 2px solid;
    background: Canvas !important;
    color: CanvasText !important;
  }
  
  .dim-card:focus-visible {
    outline: 3px solid Highlight;
  }
  
  .action-btn {
    border: 1px solid ButtonBorder;
    background: ButtonFace !important;
    color: ButtonText !important;
  }
}

/* Print styles */
@media print {
  .dim-card {
    break-inside: avoid;
    background: white !important;
    color: black !important;
    border: 1px solid black !important;
    box-shadow: none !important;
    transform: none !important;
  }
  
  .action-btn {
    display: none;
  }
}

/* Mobile optimizations */
@media (hover: none) and (pointer: coarse) {
  .dim-card {
    /* Reduce animations on touch devices */
    transition-duration: calc(var(--card-animation-duration) * 0.5);
  }
  
  .dim-card.is-hovered {
    /* Subtle hover effect for touch */
    transform: translate3d(0, -2px, 0) scale(1.02);
  }
  
  .action-btn {
    /* Increase touch targets */
    min-height: 44px;
    min-width: 44px;
  }
}
</style>
