<template>
  <!-- Documentation Mode -->
  <div v-if="isDocs" class="DUIMX-docs prose prose-purple max-w-none">
    <div class="mb-6 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4">
      <h2 class="mb-2 text-2xl font-bold text-purple-300">💬 DUIMX Tooltip</h2>
      <p class="text-purple-200">Smart, accessible tooltip component with multiple positions, smooth animations, and full customization.</p>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">✨ Features</h3>
    <ul class="mb-6 space-y-2 text-purple-200">
      <li>🎯 <strong>Smart Positioning</strong> - Auto-adjusts position to stay in viewport</li>
      <li>🎨 <strong>Multiple Styles</strong> - Classic, modern, glass morphism variants</li>
      <li>⚡ <strong>Smooth Animations</strong> - Fade, slide, and scale transitions</li>
      <li>📱 <strong>Touch Friendly</strong> - Works on mobile with tap interactions</li>
      <li>♿ <strong>Accessible</strong> - ARIA compliant with keyboard support</li>
      <li>🔧 <strong>Fully Reactive</strong> - Responds to all layout and theme changes</li>
    </ul>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">🎯 Usage Example</h3>
    <div class="mb-6 rounded-lg border border-purple-500/30 bg-slate-800/50 p-4">
      <pre class="text-sm text-purple-200"><code>&lt;DimTooltip 
  text="This is a helpful tooltip!"
  position="top"
  theme="dark"
  :roundness="12"
  primaryColor="#10b981"
&gt;
  &lt;button&gt;Hover me&lt;/button&gt;
&lt;/DimTooltip&gt;</code></pre>
    </div>

    <div class="mb-6 rounded-lg border border-purple-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4">
      <p class="text-center text-purple-200">
        <strong>🔗 Source Code:</strong> 
        <a href="https://github.com/drazzardaq/opensource/blob/master/src/opensource/DimTooltip.vue" 
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
  <div v-else class="tooltip-container relative inline-block">
    <!-- Version Overlay -->
    <div class="absolute top-0 right-0 z-50 bg-purple-600/80 backdrop-blur-sm rounded-bl-lg px-2 py-1 pointer-events-none">
      <span class="text-xs text-white/80">v0.9.7</span>
    </div>
    
    <div 
      ref="triggerRef"
      @mouseenter="handleTriggerMouseEnter"
      @mouseleave="handleTriggerMouseLeave"
      @focus="handleTriggerFocus"
      @blur="handleTriggerBlur"
      @click="handleTriggerClick"
      @contextmenu="handleTriggerContextMenu"
      class="tooltip-trigger cursor-pointer"
      tabindex="0"
      :aria-describedby="showTooltip ? `tooltip-${Date.now()}` : undefined"
      role="button"
      :aria-expanded="showTooltip"
    >
      <slot>
        <button 
          :class="[roundnessClass, 'px-4 py-2 font-medium transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 transform-gpu']"
          :style="triggerStyles"
          type="button"
        >
          {{ triggerText || 'Hover me' }}
        </button>
      </slot>
    </div>
    
    <!-- Tooltip Portal -->
    <Teleport :to="teleportTo" :disabled="!portal">
      <Transition 
        :name="animationClasses" 
        appear
        @before-enter="onBeforeEnter"
        @enter="onEnter"
        @after-enter="onAfterEnter"
        @before-leave="onBeforeLeave"
        @leave="onLeave"
        @after-leave="onAfterLeave"
      >
        <div
          v-if="showTooltip"
          ref="tooltipRef"
          :id="`tooltip-${Date.now()}`"
          :class="[
            'tooltip-content', 
            'fixed', 
            'px-3', 
            'py-2', 
            'text-sm', 
            'font-medium',
            'select-none',
            roundnessClass,
            variantClasses,
            {
              'pointer-events-none': !interactive,
              'pointer-events-auto': interactive,
              'cursor-default': interactive
            }
          ]"
          :style="tooltipStyles"
          @mouseenter="handleTooltipMouseEnter"
          @mouseleave="handleTooltipMouseLeave"
          role="tooltip"
          :aria-live="persistent ? 'polite' : 'assertive'"
        >
          <!-- Content slot for advanced content -->
          <slot name="content">
            {{ text || 'Tooltip content' }}
          </slot>
          
          <!-- Arrow -->
          <div 
            v-if="arrow"
            ref="arrowRef"
            class="tooltip-arrow"
            :style="arrowStyles"
          ></div>
          
          <!-- Close button for persistent tooltips -->
          <button
            v-if="persistent && (trigger === 'click' || trigger === 'manual')"
            @click="hide"
            class="absolute top-1 right-1 w-4 h-4 flex items-center justify-center rounded-full text-xs opacity-60 hover:opacity-100 transition-opacity"
            :style="{ color: props.textColor }"
            type="button"
            aria-label="Close tooltip"
          >
            ×
          </button>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, watch, onMounted, onUnmounted, watchEffect } from 'vue';

const props = defineProps({
  roundness: { type: Number, default: 8 },
  primaryColor: { type: String, default: '#6366f1' },
  bgColor: { type: String, default: '#1f2937' },
  textColor: { type: String, default: '#ffffff' },
  fontFamily: { type: String, default: 'inherit' },
  width: { type: Number, default: 300 },
  height: { type: Number, default: 200 },
  padding: { type: Number, default: 16 },
  margin: { type: Number, default: 8 },
  theme: { type: String, default: 'dark' },
  compact: { type: Boolean, default: false },
  isDocs: { type: Boolean, default: false },
  
  // Enhanced Tooltip-specific props
  text: { type: String, default: 'Tooltip content' },
  position: { type: String, default: 'auto' }, // auto, top, bottom, left, right, top-start, top-end, etc.
  variant: { type: String, default: 'default' }, // default, glass, neon, gradient, neumorphic, minimal, floating
  trigger: { type: String, default: 'hover' }, // hover, click, focus, manual, contextmenu
  arrow: { type: Boolean, default: true },
  delay: { type: Number, default: 0 },
  hideDelay: { type: Number, default: 100 },
  offset: { type: Number, default: 12 },
  triggerText: { type: String, default: '' },
  maxWidth: { type: Number, default: 280 },
  disabled: { type: Boolean, default: false },
  persistent: { type: Boolean, default: false },
  interactive: { type: Boolean, default: false },
  zIndex: { type: Number, default: 9999 },
  animation: { type: String, default: 'fade' }, // fade, slide, scale, bounce, flip
  boundary: { type: String, default: 'viewport' }, // viewport, window, parent
  fallbackPlacements: { type: Array, default: () => ['top', 'bottom', 'right', 'left'] },
  smart: { type: Boolean, default: true },
  portal: { type: Boolean, default: true },
  teleportTo: { type: String, default: 'body' }
});

// Enhanced emits
const emit = defineEmits(['show', 'hide', 'toggle', 'position-change', 'click-outside', 'escape']);

// Core reactive state
const showTooltip = ref(false);
const tooltipRef = ref(null);
const triggerRef = ref(null);
const cssVariablesRef = ref(null);
const arrowRef = ref(null);

// Position and sizing state
const calculatedPosition = ref({ x: 0, y: 0, placement: 'top' });
const tooltipDimensions = ref({ width: 0, height: 0 });
const isPositioning = ref(false);
const currentPlacement = ref(props.position);

// Performance tracking
const performanceMetrics = ref({
  positionTime: 0,
  showTime: 0,
  calculations: 0,
  lastUpdate: Date.now()
});

// Timers and observers
let showTimeout = null;
let hideTimeout = null;
let resizeObserver = null;
let intersectionObserver = null;
let mutationObserver = null;

// Memoized computed properties for performance
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

const variantClasses = computed(() => {
  const base = 'shadow-lg backdrop-blur-sm border transition-all duration-200 will-change-transform';
  
  const variants = {
    glass: `${base} bg-white/10 backdrop-blur-lg border-white/20 text-white shadow-xl`,
    neon: `${base} bg-black border-2 border-cyan-400 text-cyan-400 shadow-[0_0_20px_#22d3ee,0_0_40px_#22d3ee33]`,
    gradient: `${base} bg-gradient-to-r from-purple-500 to-pink-500 text-white border-purple-400/30 shadow-purple-500/25`,
    neumorphic: `${base} bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 shadow-[8px_8px_16px_#00000020,-8px_-8px_16px_#ffffff40] dark:shadow-[8px_8px_16px_#00000040,-8px_-8px_16px_#ffffff10]`,
    minimal: `${base} bg-gray-900/95 text-white border-gray-600 shadow-sm backdrop-blur-sm`,
    floating: `${base} bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white shadow-2xl transform-gpu`,
    default: props.theme === 'light' 
      ? `${base} bg-white border-gray-200 text-gray-900 shadow-lg`
      : `${base} bg-slate-800 border-slate-600 text-white shadow-lg`
  };
  
  return variants[props.variant] || variants.default;
});

const triggerStyles = computed(() => ({
  backgroundColor: props.primaryColor,
  color: 'white',
  fontFamily: props.fontFamily,
  transform: 'translateZ(0)' // Hardware acceleration
}));

const tooltipStyles = computed(() => {
  const styles = {
    fontFamily: props.fontFamily,
    maxWidth: `${props.maxWidth}px`,
    padding: `${Math.max(props.padding / 2, 8)}px ${props.padding}px`,
    zIndex: props.zIndex,
    transform: 'translateZ(0)', // Hardware acceleration
    '--tooltip-primary': props.primaryColor,
    '--tooltip-bg': props.bgColor,
    '--tooltip-text': props.textColor
  };
  
  // Position styles
  const { x, y } = calculatedPosition.value;
  styles.left = `${x}px`;
  styles.top = `${y}px`;
  
  // Apply variant-specific styles
  if (props.variant === 'default' || props.variant === 'minimal') {
    styles.backgroundColor = props.bgColor;
    styles.color = props.textColor;
  }
  
  return styles;
});

const arrowStyles = computed(() => {
  if (!props.arrow) return { display: 'none' };
  
  const size = 8;
  const placement = currentPlacement.value;
  const styles = {
    position: 'absolute',
    width: 0,
    height: 0,
    borderStyle: 'solid',
    transform: 'translateZ(0)',
    zIndex: props.zIndex + 1
  };
  
  const arrowColor = getArrowColor();
  
  // Enhanced arrow positioning with placement variants
  const placements = {
    'top': {
      borderWidth: `${size}px ${size}px 0 ${size}px`,
      borderColor: `${arrowColor} transparent transparent transparent`,
      bottom: `-${size}px`,
      left: '50%',
      transform: 'translateX(-50%)'
    },
    'top-start': {
      borderWidth: `${size}px ${size}px 0 ${size}px`,
      borderColor: `${arrowColor} transparent transparent transparent`,
      bottom: `-${size}px`,
      left: `${size * 2}px`
    },
    'top-end': {
      borderWidth: `${size}px ${size}px 0 ${size}px`,
      borderColor: `${arrowColor} transparent transparent transparent`,
      bottom: `-${size}px`,
      right: `${size * 2}px`
    },
    'bottom': {
      borderWidth: `0 ${size}px ${size}px ${size}px`,
      borderColor: `transparent transparent ${arrowColor} transparent`,
      top: `-${size}px`,
      left: '50%',
      transform: 'translateX(-50%)'
    },
    'bottom-start': {
      borderWidth: `0 ${size}px ${size}px ${size}px`,
      borderColor: `transparent transparent ${arrowColor} transparent`,
      top: `-${size}px`,
      left: `${size * 2}px`
    },
    'bottom-end': {
      borderWidth: `0 ${size}px ${size}px ${size}px`,
      borderColor: `transparent transparent ${arrowColor} transparent`,
      top: `-${size}px`,
      right: `${size * 2}px`
    },
    'left': {
      borderWidth: `${size}px 0 ${size}px ${size}px`,
      borderColor: `transparent transparent transparent ${arrowColor}`,
      right: `-${size}px`,
      top: '50%',
      transform: 'translateY(-50%)'
    },
    'left-start': {
      borderWidth: `${size}px 0 ${size}px ${size}px`,
      borderColor: `transparent transparent transparent ${arrowColor}`,
      right: `-${size}px`,
      top: `${size * 2}px`
    },
    'left-end': {
      borderWidth: `${size}px 0 ${size}px ${size}px`,
      borderColor: `transparent transparent transparent ${arrowColor}`,
      right: `-${size}px`,
      bottom: `${size * 2}px`
    },
    'right': {
      borderWidth: `${size}px ${size}px ${size}px 0`,
      borderColor: `transparent ${arrowColor} transparent transparent`,
      left: `-${size}px`,
      top: '50%',
      transform: 'translateY(-50%)'
    },
    'right-start': {
      borderWidth: `${size}px ${size}px ${size}px 0`,
      borderColor: `transparent ${arrowColor} transparent transparent`,
      left: `-${size}px`,
      top: `${size * 2}px`
    },
    'right-end': {
      borderWidth: `${size}px ${size}px ${size}px 0`,
      borderColor: `transparent ${arrowColor} transparent transparent`,
      left: `-${size}px`,
      bottom: `${size * 2}px`
    }
  };
  
  return { ...styles, ...(placements[placement] || placements.top) };
});

const animationClasses = computed(() => {
  const animations = {
    fade: 'tooltip-fade',
    slide: 'tooltip-slide',
    scale: 'tooltip-scale',
    bounce: 'tooltip-bounce',
    flip: 'tooltip-flip'
  };
  return animations[props.animation] || animations.fade;
});

// Apply CSS variables manually for Vue 3.3.0 compatibility
watchEffect(() => {
  if (cssVariablesRef.value && typeof window !== 'undefined') {
    const element = cssVariablesRef.value;
    const vars = {
      '--tooltip-primary': props.primaryColor,
      '--tooltip-bg': props.bgColor,
      '--tooltip-text': props.textColor,
      '--tooltip-padding': `${props.padding}px`,
      '--tooltip-roundness': `${props.roundness}px`
    };
    
    Object.entries(vars).forEach(([key, value]) => {
      element.style.setProperty(key, value);
    });
  }
});

// Helper functions with performance optimizations
const getArrowColor = () => {
  const colors = {
    glass: 'rgba(255, 255, 255, 0.1)',
    neon: '#000000',
    gradient: '#8b5cf6',
    neumorphic: props.theme === 'dark' ? '#374151' : '#e5e7eb',
    minimal: '#111827',
    floating: props.theme === 'dark' ? '#374151' : '#ffffff',
    default: props.bgColor
  };
  return colors[props.variant] || colors.default;
};

// Enhanced smart positioning algorithm
const calculateOptimalPosition = () => {
  if (!triggerRef.value || !tooltipRef.value || props.disabled) return;
  
  const startTime = performance.now();
  isPositioning.value = true;
  
  try {
    const trigger = triggerRef.value;
    const tooltip = tooltipRef.value;
    
    // Get accurate dimensions
    const triggerRect = trigger.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
      scrollX: window.scrollX,
      scrollY: window.scrollY
    };
    
    // Store tooltip dimensions for future calculations
    tooltipDimensions.value = {
      width: tooltipRect.width,
      height: tooltipRect.height
    };
    
    let bestPosition = null;
    let bestScore = -1;
    let placementsToTry = [];
    
    // Determine placements to try
    if (props.position === 'auto' && props.smart) {
      placementsToTry = [...props.fallbackPlacements];
    } else if (props.position !== 'auto') {
      placementsToTry = [props.position, ...props.fallbackPlacements];
    } else {
      placementsToTry = ['top', 'bottom', 'right', 'left'];
    }
    
    // Test each placement
    placementsToTry.forEach(placement => {
      const position = calculatePositionForPlacement(placement, triggerRect, tooltipRect, viewport);
      const score = calculatePositionScore(position, tooltipRect, viewport);
      
      if (score > bestScore) {
        bestScore = score;
        bestPosition = { ...position, placement };
      }
    });
    
    if (bestPosition) {
      calculatedPosition.value = bestPosition;
      currentPlacement.value = bestPosition.placement;
      
      // Emit position change event
      if (currentPlacement.value !== props.position) {
        emit('position-change', {
          requested: props.position,
          actual: currentPlacement.value,
          position: bestPosition
        });
      }
    }
    
    // Performance tracking
    const endTime = performance.now();
    performanceMetrics.value.positionTime = endTime - startTime;
    performanceMetrics.value.calculations++;
    performanceMetrics.value.lastUpdate = Date.now();
    
  } catch (error) {
    console.error('DimTooltip: Position calculation error:', error);
  } finally {
    isPositioning.value = false;
  }
};

const calculatePositionForPlacement = (placement, triggerRect, tooltipRect, viewport) => {
  const offset = props.offset;
  let x = 0;
  let y = 0;
  
  switch (placement) {
    case 'top':
      x = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);
      y = triggerRect.top - tooltipRect.height - offset;
      break;
    case 'top-start':
      x = triggerRect.left;
      y = triggerRect.top - tooltipRect.height - offset;
      break;
    case 'top-end':
      x = triggerRect.right - tooltipRect.width;
      y = triggerRect.top - tooltipRect.height - offset;
      break;
    case 'bottom':
      x = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);
      y = triggerRect.bottom + offset;
      break;
    case 'bottom-start':
      x = triggerRect.left;
      y = triggerRect.bottom + offset;
      break;
    case 'bottom-end':
      x = triggerRect.right - tooltipRect.width;
      y = triggerRect.bottom + offset;
      break;
    case 'left':
      x = triggerRect.left - tooltipRect.width - offset;
      y = triggerRect.top + (triggerRect.height / 2) - (tooltipRect.height / 2);
      break;
    case 'left-start':
      x = triggerRect.left - tooltipRect.width - offset;
      y = triggerRect.top;
      break;
    case 'left-end':
      x = triggerRect.left - tooltipRect.width - offset;
      y = triggerRect.bottom - tooltipRect.height;
      break;
    case 'right':
      x = triggerRect.right + offset;
      y = triggerRect.top + (triggerRect.height / 2) - (tooltipRect.height / 2);
      break;
    case 'right-start':
      x = triggerRect.right + offset;
      y = triggerRect.top;
      break;
    case 'right-end':
      x = triggerRef.right + offset;
      y = triggerRect.bottom - tooltipRect.height;
      break;
  }
  
  return { x: x + viewport.scrollX, y: y + viewport.scrollY };
};

const calculatePositionScore = (position, tooltipRect, viewport) => {
  let score = 100;
  
  // Check viewport bounds
  if (position.x < 0) score -= Math.abs(position.x);
  if (position.y < 0) score -= Math.abs(position.y);
  if (position.x + tooltipRect.width > viewport.width) {
    score -= (position.x + tooltipRect.width - viewport.width);
  }
  if (position.y + tooltipRect.height > viewport.height) {
    score -= (position.y + tooltipRect.height - viewport.height);
  }
  
  // Prefer positions that keep tooltip fully visible
  if (position.x >= 8 && position.y >= 8 && 
      position.x + tooltipRect.width <= viewport.width - 8 && 
      position.y + tooltipRect.height <= viewport.height - 8) {
    score += 50;
  }
  
  return score;
};

// Enhanced event handlers with debouncing
const showTooltipWithDelay = () => {
  if (props.disabled) return;
  
  clearTimeout(hideTimeout);
  
  const showFn = () => {
    showTooltip.value = true;
    emit('show');
    performanceMetrics.value.showTime = Date.now();
  };
  
  if (props.delay > 0) {
    showTimeout = setTimeout(showFn, props.delay);
  } else {
    showFn();
  }
};

const hideTooltipWithDelay = () => {
  if (props.persistent) return;
  
  clearTimeout(showTimeout);
  hideTimeout = setTimeout(() => {
    showTooltip.value = false;
    emit('hide');
  }, props.hideDelay);
};

const handleTriggerClick = (event) => {
  if (props.trigger === 'click') {
    const wasShown = showTooltip.value;
    showTooltip.value = !showTooltip.value;
    emit('toggle', { shown: showTooltip.value, event });
    
    if (showTooltip.value && !wasShown) {
      emit('show');
    } else if (!showTooltip.value && wasShown) {
      emit('hide');
    }
  }
};

const handleTriggerMouseEnter = () => {
  if (props.trigger === 'hover') {
    showTooltipWithDelay();
  }
};

const handleTriggerMouseLeave = () => {
  if (props.trigger === 'hover' && !props.interactive) {
    hideTooltipWithDelay();
  }
};

const handleTriggerFocus = () => {
  if (props.trigger === 'focus' || props.trigger === 'hover') {
    showTooltipWithDelay();
  }
};

const handleTriggerBlur = () => {
  if (props.trigger === 'focus' || (props.trigger === 'hover' && !props.interactive)) {
    hideTooltipWithDelay();
  }
};

const handleTriggerContextMenu = (event) => {
  if (props.trigger === 'contextmenu') {
    event.preventDefault();
    showTooltip.value = true;
    emit('show');
  }
};

// Interactive tooltip handlers
const handleTooltipMouseEnter = () => {
  if (props.interactive) {
    clearTimeout(hideTimeout);
  }
};

const handleTooltipMouseLeave = () => {
  if (props.interactive) {
    hideTooltipWithDelay();
  }
};

// Global event handlers
const handleDocumentClick = (event) => {
  if (showTooltip.value && props.trigger === 'click') {
    const target = event.target;
    if (!triggerRef.value?.contains(target) && !tooltipRef.value?.contains(target)) {
      showTooltip.value = false;
      emit('hide');
      emit('click-outside', event);
    }
  }
};

const handleDocumentKeydown = (event) => {
  if (showTooltip.value && event.key === 'Escape') {
    showTooltip.value = false;
    emit('hide');
    emit('escape', event);
  }
};

const handleWindowResize = () => {
  if (showTooltip.value) {
    // Debounced repositioning
    clearTimeout(hideTimeout);
    calculateOptimalPosition();
  }
};

// Watchers with performance optimizations
watch(showTooltip, async (visible) => {
  if (visible) {
    await nextTick();
    calculateOptimalPosition();
    
    // Setup observers for dynamic positioning
    if (props.smart && !intersectionObserver) {
      setupObservers();
    }
  } else {
    cleanupObservers();
  }
});

// Observer setup for dynamic repositioning
const setupObservers = () => {
  if (typeof window === 'undefined') return;
  
  // Intersection Observer for viewport changes
  if (window.IntersectionObserver && !intersectionObserver) {
    intersectionObserver = new IntersectionObserver(() => {
      if (showTooltip.value) {
        calculateOptimalPosition();
      }
    }, { threshold: [0, 1] });
    
    if (triggerRef.value) {
      intersectionObserver.observe(triggerRef.value);
    }
  }
  
  // Resize Observer for element size changes
  if (window.ResizeObserver && !resizeObserver) {
    resizeObserver = new ResizeObserver(() => {
      if (showTooltip.value) {
        calculateOptimalPosition();
      }
    });
    
    if (triggerRef.value) {
      resizeObserver.observe(triggerRef.value);
    }
  }
  
  // Mutation Observer for DOM changes
  if (window.MutationObserver && !mutationObserver) {
    mutationObserver = new MutationObserver(() => {
      if (showTooltip.value) {
        calculateOptimalPosition();
      }
    });
    
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class']
    });
  }
};

const cleanupObservers = () => {
  if (intersectionObserver) {
    intersectionObserver.disconnect();
    intersectionObserver = null;
  }
  
  if (resizeObserver) {
    resizeObserver.disconnect();
    resizeObserver = null;
  }
  
  if (mutationObserver) {
    mutationObserver.disconnect();
    mutationObserver = null;
  }
};

// Public API methods (exposed via defineExpose)
const show = () => {
  showTooltip.value = true;
  emit('show');
};

const hide = () => {
  showTooltip.value = false;
  emit('hide');
};

const toggle = () => {
  showTooltip.value = !showTooltip.value;
  emit('toggle', { shown: showTooltip.value });
};

const updatePosition = () => {
  if (showTooltip.value) {
    calculateOptimalPosition();
  }
};

// Animation event handlers for enhanced transitions
const onBeforeEnter = (el) => {
  // Set initial state for custom animations
  if (props.animation === 'flip') {
    el.style.transformOrigin = 'center bottom';
  }
};

const onEnter = (el) => {
  // Force reflow for smooth animations
  el.offsetHeight;
};

const onAfterEnter = (el) => {
  // Cleanup after enter animation
  el.style.transformOrigin = '';
};

const onBeforeLeave = (el) => {
  // Prepare for leave animation
  if (props.animation === 'flip') {
    el.style.transformOrigin = 'center bottom';
  }
};

const onLeave = (el) => {
  // Force reflow during leave
  el.offsetHeight;
};

const onAfterLeave = (el) => {
  // Cleanup after leave animation
  el.style.transformOrigin = '';
  calculatedPosition.value = { x: 0, y: 0, placement: 'top' };
};

// Lifecycle hooks
onMounted(() => {
  if (typeof window !== 'undefined') {
    document.addEventListener('click', handleDocumentClick, true);
    document.addEventListener('keydown', handleDocumentKeydown);
    window.addEventListener('resize', handleWindowResize, { passive: true });
    window.addEventListener('scroll', handleWindowResize, { passive: true });
  }
});

onUnmounted(() => {
  // Cleanup timers
  clearTimeout(showTimeout);
  clearTimeout(hideTimeout);
  
  // Cleanup observers
  cleanupObservers();
  
  // Remove event listeners
  if (typeof window !== 'undefined') {
    document.removeEventListener('click', handleDocumentClick, true);
    document.removeEventListener('keydown', handleDocumentKeydown);
    window.removeEventListener('resize', handleWindowResize);
    window.removeEventListener('scroll', handleWindowResize);
  }
});

// Expose public API
defineExpose({
  show,
  hide,
  toggle,
  updatePosition,
  isVisible: computed(() => showTooltip.value),
  position: computed(() => calculatedPosition.value),
  metrics: computed(() => performanceMetrics.value)
});
</script>

<style scoped>
/* Container */
.tooltip-container {
  position: relative;
  display: inline-block;
  isolation: isolate;
}

/* Trigger */
.tooltip-trigger {
  outline: none;
}

.tooltip-trigger:focus-visible {
  outline: 2px solid var(--tooltip-primary, #6366f1);
  outline-offset: 2px;
  border-radius: var(--tooltip-roundness, 8px);
}

/* Tooltip Content */
.tooltip-content {
  position: fixed;
  z-index: 9999;
  max-width: 280px;
  white-space: normal;
  word-wrap: break-word;
  transform: translateZ(0); /* Hardware acceleration */
  will-change: transform, opacity;
  contain: layout style;
  user-select: none;
  line-height: 1.4;
  
  /* Default shadow for depth */
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06),
    0 0 0 1px rgba(0, 0, 0, 0.05);
}

.tooltip-content.pointer-events-auto {
  user-select: text;
}

/* Arrow */
.tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  z-index: 10000;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
}

/* Animation Variants */
/* Fade Animation */
.tooltip-fade-enter-active,
.tooltip-fade-leave-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.tooltip-fade-enter-from,
.tooltip-fade-leave-to {
  opacity: 0;
  transform: translateZ(0) scale(0.95);
}

.tooltip-fade-enter-to,
.tooltip-fade-leave-from {
  opacity: 1;
  transform: translateZ(0) scale(1);
}

/* Slide Animation */
.tooltip-slide-enter-active,
.tooltip-slide-leave-active {
  transition: all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.tooltip-slide-enter-from,
.tooltip-slide-leave-to {
  opacity: 0;
  transform: translateZ(0) translateY(-8px);
}

.tooltip-slide-enter-to,
.tooltip-slide-leave-from {
  opacity: 1;
  transform: translateZ(0) translateY(0);
}

/* Scale Animation */
.tooltip-scale-enter-active,
.tooltip-scale-leave-active {
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.tooltip-scale-enter-from,
.tooltip-scale-leave-to {
  opacity: 0;
  transform: translateZ(0) scale(0.8);
}

.tooltip-scale-enter-to,
.tooltip-scale-leave-from {
  opacity: 1;
  transform: translateZ(0) scale(1);
}

/* Bounce Animation */
.tooltip-bounce-enter-active {
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.tooltip-bounce-leave-active {
  transition: all 0.2s ease-in;
}

.tooltip-bounce-enter-from,
.tooltip-bounce-leave-to {
  opacity: 0;
  transform: translateZ(0) scale(0.3);
}

.tooltip-bounce-enter-to,
.tooltip-bounce-leave-from {
  opacity: 1;
  transform: translateZ(0) scale(1);
}

/* Flip Animation */
.tooltip-flip-enter-active,
.tooltip-flip-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.tooltip-flip-enter-from,
.tooltip-flip-leave-to {
  opacity: 0;
  transform: translateZ(0) rotateX(-90deg);
  transform-origin: center bottom;
}

.tooltip-flip-enter-to,
.tooltip-flip-leave-from {
  opacity: 1;
  transform: translateZ(0) rotateX(0deg);
  transform-origin: center bottom;
}

/* Variant-specific enhancements */
.tooltip-content:has(.tooltip-arrow) {
  /* Additional shadow for arrows */
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.07));
}

/* Glass variant enhancements */
.tooltip-content.bg-white\/10 {
  backdrop-filter: blur(12px) saturate(1.2);
  -webkit-backdrop-filter: blur(12px) saturate(1.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Neon variant enhancements */
.tooltip-content:has([class*="border-cyan"]) {
  animation: neonGlow 2s ease-in-out infinite alternate;
}

@keyframes neonGlow {
  from {
    box-shadow: 
      0 0 5px #22d3ee,
      0 0 10px #22d3ee,
      0 0 15px #22d3ee,
      0 0 20px #22d3ee;
  }
  to {
    box-shadow: 
      0 0 10px #22d3ee,
      0 0 20px #22d3ee,
      0 0 30px #22d3ee,
      0 0 40px #22d3ee;
  }
}

/* Gradient variant */
.tooltip-content:has([class*="from-purple"]) {
  background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
  background-size: 200% 200%;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Floating variant */
.tooltip-content[class*="shadow-2xl"] {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateZ(0) translateY(0px); }
  50% { transform: translateZ(0) translateY(-2px); }
}

/* Neumorphic variant */
.tooltip-content[style*="shadow-"]:not([class*="shadow-"]) {
  background: linear-gradient(145deg, #f0f0f0, #cacaca);
  transition: all 0.3s ease;
}

.tooltip-content[style*="shadow-"]:not([class*="shadow-"]):hover {
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
}

/* Dark theme neumorphic */
@media (prefers-color-scheme: dark) {
  .tooltip-content[style*="shadow-"]:not([class*="shadow-"]) {
    background: linear-gradient(145deg, #2d3748, #1a202c);
  }
  
  .tooltip-content[style*="shadow-"]:not([class*="shadow-"]):hover {
    background: linear-gradient(145deg, #1a202c, #2d3748);
  }
}

/* Interactive tooltip enhancements */
.tooltip-content.pointer-events-auto {
  cursor: default;
  user-select: text;
}

.tooltip-content.pointer-events-auto:hover {
  transform: translateZ(0) scale(1.02);
  transition: transform 0.2s ease;
}

/* Close button styling */
.tooltip-content button[aria-label="Close tooltip"] {
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  transition: all 0.2s ease;
}

.tooltip-content button[aria-label="Close tooltip"]:hover {
  background: rgba(0, 0, 0, 0.2);
  transform: scale(1.1);
}

/* Responsive design */
@media (max-width: 768px) {
  .tooltip-content {
    max-width: 90vw;
    font-size: 0.875rem;
    padding: 0.5rem 0.75rem;
  }
  
  .tooltip-arrow {
    /* Slightly smaller arrows on mobile */
    transform: scale(0.9);
  }
}

/* High contrast mode */
@media (prefers-contrast: high) {
  .tooltip-content {
    border: 2px solid currentColor;
    box-shadow: none;
  }
  
  .tooltip-trigger:focus-visible {
    outline-width: 3px;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .tooltip-fade-enter-active,
  .tooltip-fade-leave-active,
  .tooltip-slide-enter-active,
  .tooltip-slide-leave-active,
  .tooltip-scale-enter-active,
  .tooltip-scale-leave-active,
  .tooltip-bounce-enter-active,
  .tooltip-bounce-leave-active,
  .tooltip-flip-enter-active,
  .tooltip-flip-leave-active {
    transition: opacity 0.2s ease !important;
    transform: none !important;
  }
  
  .tooltip-content,
  .tooltip-content:hover,
  .tooltip-content[class*="shadow-2xl"] {
    animation: none !important;
    transform: translateZ(0) !important;
  }
  
  .tooltip-content:has([class*="border-cyan"]) {
    animation: none !important;
  }
}

/* Print styles */
@media print {
  .tooltip-content {
    position: static !important;
    display: inline !important;
    background: transparent !important;
    color: inherit !important;
    box-shadow: none !important;
    border: 1px solid #000 !important;
    font-size: 0.8rem !important;
  }
  
  .tooltip-arrow {
    display: none !important;
  }
  
  .tooltip-trigger {
    text-decoration: underline;
  }
}

/* Focus management */
.tooltip-content:focus-within {
  outline: 2px solid var(--tooltip-primary, #6366f1);
  outline-offset: 2px;
}

/* Performance optimizations */
.tooltip-content,
.tooltip-arrow,
.tooltip-trigger {
  backface-visibility: hidden;
  perspective: 1000px;
}

/* CSS containment for performance */
.tooltip-container {
  contain: layout style;
}

.tooltip-content {
  contain: layout style paint;
}
</style>
