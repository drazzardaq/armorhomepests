<template>
  <!-- Documentation Mode -->
  <div v-if="isDocs" class="DUIMX-docs prose prose-purple max-w-none">
    <div class="mb-6 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4">
      <h2 class="mb-2 text-2xl font-bold text-purple-300">🌟 DUIMX Enhanced Button</h2>
      <p class="text-purple-200">Next-generation button component with Uiverse.io inspired variants, advanced animations, and full DUIMX integration.</p>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">✨ Features</h3>
    <ul class="mb-6 space-y-2 text-purple-200">
      <li>🎨 <strong>Uiverse.io Variants</strong> - Curated community-inspired designs</li>
      <li>⚡ <strong>Advanced Animations</strong> - Hover, focus, ripple, and glow effects</li>
      <li>🌓 <strong>Theme Adaptive</strong> - Seamless light/dark mode integration</li>
      <li>♿ <strong>Accessibility Plus</strong> - Enhanced ARIA, keyboard navigation, and screen reader support</li>
      <li>🔧 <strong>DUIMX Compatible</strong> - Full playground integration with live controls</li>
      <li>📱 <strong>Mobile Optimized</strong> - Touch-friendly with haptic feedback simulation</li>
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
          <tr><td class="border border-purple-500/30 p-2 font-mono">text</td><td class="border border-purple-500/30 p-2">String</td><td class="border border-purple-500/30 p-2">'Click Me'</td><td class="border border-purple-500/30 p-2">Button text content</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">variant</td><td class="border border-purple-500/30 p-2">String</td><td class="border border-purple-500/30 p-2">'primary'</td><td class="border border-purple-500/30 p-2">Style variant</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">uiverseVariant</td><td class="border border-purple-500/30 p-2">String</td><td class="border border-purple-500/30 p-2">'none'</td><td class="border border-purple-500/30 p-2">Uiverse.io inspired design</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">animationType</td><td class="border border-purple-500/30 p-2">String</td><td class="border border-purple-500/30 p-2">'hover-lift'</td><td class="border border-purple-500/30 p-2">Animation style</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">glowIntensity</td><td class="border border-purple-500/30 p-2">Number</td><td class="border border-purple-500/30 p-2">0</td><td class="border border-purple-500/30 p-2">Glow effect strength (0-3)</td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">🎨 Uiverse.io Variants</h3>
    <div class="mb-6 grid grid-cols-2 gap-4">
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">unlucky-sheep</h4>
        <p class="text-purple-200 text-sm">Modern button with smooth hover animation</p>
      </div>
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">neon-glow</h4>
        <p class="text-purple-200 text-sm">Cyberpunk-inspired glowing button</p>
      </div>
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">glass-morph</h4>
        <p class="text-purple-200 text-sm">Glass morphism with backdrop blur</p>
      </div>
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">neumorphic-soft</h4>
        <p class="text-purple-200 text-sm">Soft neumorphic design</p>
      </div>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">🎯 Usage Examples</h3>
    <div class="mb-6 space-y-4">
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/50 p-4">
        <h4 class="mb-2 text-lg font-semibold text-purple-300">Uiverse.io Style Button</h4>
        <pre class="text-sm text-purple-200"><code>&lt;DimEnhancedButton 
  text="Get Started"
  uiverseVariant="unlucky-sheep"
  animationType="hover-lift"
  :glowIntensity="2"
  @click="handleClick"
/&gt;</code></pre>
      </div>
      
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/50 p-4">
        <h4 class="mb-2 text-lg font-semibold text-purple-300">Neon Gaming Button</h4>
        <pre class="text-sm text-purple-200"><code>&lt;DimEnhancedButton 
  text="⚡ POWER UP"
  uiverseVariant="neon-glow"
  primaryColor="#00ffff"
  animationType="pulse-glow"
  :glowIntensity="3"
  theme="dark"
  @click="powerUp"
/&gt;</code></pre>
      </div>
    </div>
  </div>
  
  <!-- Normal Component Mode -->
  <div v-else class="relative inline-block">
    <!-- Version Display -->
    <!-- <div class="absolute -top-2 -right-2 z-20 bg-gradient-to-r from-purple-500 to-pink-500 backdrop-blur-sm rounded-full px-2 py-1 shadow-lg">
      <span class="text-xs text-white font-mono font-bold">v0.0.1</span>
    </div> -->
    
    <button
      ref="buttonRef"
      :class="buttonClasses"
      :style="buttonStyles"
      :disabled="disabled || loading"
      @click="handleClick"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @focus="handleFocus"
      @blur="handleBlur"
      @mousedown="handleMouseDown"
      @mouseup="handleMouseUp"
    :aria-label="ariaLabel"
    :aria-busy="loading"
  >
    <!-- Loading Spinner -->
    <span v-if="loading" class="loading-spinner flex items-center gap-2" aria-hidden="true">
      <font-awesome-icon :icon="['fas', 'spinner']" class="animate-spin h-4 w-4" />
      <span>Loading...</span>
    </span>
    
    <!-- Icon -->
    <span v-else-if="icon && iconPosition === 'left'" class="button-icon icon-left flex items-center" aria-hidden="true">
      <font-awesome-icon :icon="['fas', icon]" class="h-4 w-4" />
    </span>
    
    <!-- Button Text -->
    <span class="button-text" :class="{ 'ml-2': (loading || (icon && iconPosition === 'left')), 'mr-2': (icon && iconPosition === 'right') }">
      {{ text }}
    </span>
    
    <!-- Right Icon -->
    <span v-if="icon && iconPosition === 'right'" class="button-icon icon-right flex items-center" aria-hidden="true">
      <font-awesome-icon :icon="['fas', icon]" class="h-4 w-4" />
    </span>
    
    <!-- Ripple Effect -->
    <span v-if="animationType === 'ripple'" ref="rippleRef" class="ripple-container" aria-hidden="true"></span>
    
    <!-- Glow Effect -->
    <div v-if="glowIntensity > 0" class="glow-effect" :style="glowStyles" aria-hidden="true"></div>
    
    <!-- Particle Effect (for special variants) -->
    <div v-if="uiverseVariant === 'particle-burst'" class="particle-container" aria-hidden="true">
      <div v-for="i in 6" :key="i" class="particle" :style="getParticleStyle(i)"></div>
    </div>
    </button>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps({
  // Standard DUIMX Props
  roundness: { type: Number, default: 8 },
  primaryColor: { type: String, default: '#6366f1' },
  bgColor: { type: String, default: '#ffffff' },
  textColor: { type: String, default: '#1f2937' },
  fontFamily: { type: String, default: 'inherit' },
  width: { type: Number, default: 200 },
  height: { type: Number, default: 48 },
  padding: { type: Number, default: 16 },
  margin: { type: Number, default: 8 },
  theme: { type: String, default: 'light' },
  compact: { type: Boolean, default: false },
  isDocs: { type: Boolean, default: false },
  
  // Enhanced Button Props
  text: { type: String, default: 'Click Me' },
  variant: { type: String, default: 'primary' },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  icon: { type: String, default: '' },
  iconPosition: { type: String, default: 'left' }, // left, right
  ariaLabel: { type: String, default: '' },
  
  // Uiverse.io Integration Props
  uiverseVariant: { 
    type: String, 
    default: 'none',
    validator: (value) => [
      'none', 'unlucky-sheep', 'neon-glow', 'glass-morph', 
      'neumorphic-soft', 'particle-burst', 'gradient-wave'
    ].includes(value)
  },
  
  // Animation Props
  animationType: { 
    type: String, 
    default: 'hover-lift',
    validator: (value) => [
      'none', 'hover-lift', 'pulse', 'glow', 'ripple', 
      'bounce', 'shake', 'pulse-glow', 'rotate', 'scale'
    ].includes(value)
  },
  glowIntensity: { type: Number, default: 0, validator: (value) => value >= 0 && value <= 3 },
  
  // Advanced Styling
  shadowColor: { type: String, default: '#000000' },
  shadowIntensity: { type: Number, default: 1 },
  blurAmount: { type: Number, default: 0 },
  opacity: { type: Number, default: 1 }
});

const emit = defineEmits(['click', 'focus', 'blur', 'mouseenter', 'mouseleave']);

// Refs
const buttonRef = ref(null);
const rippleRef = ref(null);

// State
const isHovered = ref(false);
const isFocused = ref(false);
const isPressed = ref(false);

// Computed Properties
const roundnessClass = computed(() => {
  if (props.roundness <= 4) return 'rounded-sm';
  if (props.roundness <= 8) return 'rounded';
  if (props.roundness <= 12) return 'rounded-lg';
  if (props.roundness <= 20) return 'rounded-xl';
  return 'rounded-3xl';
});

const buttonClasses = computed(() => {
  const base = [
    'dim-enhanced-button',
    'relative', 'inline-flex', 'items-center', 'justify-center',
    'font-medium', 'transition-all', 'duration-300', 'ease-out',
    'focus:outline-none', 'focus:ring-2', 'focus:ring-offset-2',
    roundnessClass.value,
    `variant-${props.variant}`,
    `uiverse-${props.uiverseVariant}`,
    `animation-${props.animationType}`
  ];

  // State classes
  if (props.disabled || props.loading) {
    base.push('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
  } else {
    base.push('cursor-pointer');
  }

  if (isPressed.value) {
    base.push('is-pressed');
  }

  if (isHovered.value) {
    base.push('is-hovered');
  }

  if (isFocused.value) {
    base.push('is-focused');
  }

  // Variant-specific classes
  switch (props.variant) {
    case 'outline':
      base.push('border-2', 'bg-transparent');
      break;
    case 'ghost':
      base.push('bg-transparent');
      break;
    case 'glass':
      base.push('backdrop-blur-md', 'bg-opacity-20', 'border', 'border-white/20');
      break;
    default: // primary
      base.push('shadow-md', 'hover:shadow-lg');
  }

  // Animation classes
  if (props.animationType !== 'none' && !props.disabled && !props.loading) {
    switch (props.animationType) {
      case 'hover-lift':
        base.push('hover:transform', 'hover:-translate-y-1');
        break;
      case 'pulse':
        base.push('hover:animate-pulse');
        break;
      case 'bounce':
        base.push('hover:animate-bounce');
        break;
      case 'scale':
        base.push('hover:scale-105', 'active:scale-95');
        break;
    }
  }

  return base;
});

const buttonStyles = computed(() => {
  const styles = {
    fontFamily: props.fontFamily,
    width: `${props.width}px`,
    height: `${props.height}px`,
    padding: `${props.padding}px`,
    margin: `${props.margin}px`,
    opacity: props.opacity
  };

  // Apply colors based on variant and uiverse variant
  if (props.uiverseVariant !== 'none') {
    Object.assign(styles, getUiverseStyles());
  } else {
    switch (props.variant) {
      case 'outline':
        styles.borderColor = props.primaryColor;
        styles.color = props.primaryColor;
        styles.backgroundColor = 'transparent';
        break;
      case 'ghost':
        styles.color = props.primaryColor;
        styles.backgroundColor = 'transparent';
        break;
      case 'glass':
        styles.backgroundColor = `${props.primaryColor}33`;
        styles.color = props.textColor;
        styles.borderColor = `${props.primaryColor}44`;
        styles.backdropFilter = `blur(${props.blurAmount}px)`;
        break;
      default: // primary
        styles.backgroundColor = props.primaryColor;
        styles.color = '#ffffff';
    }
  }

  // Shadow effects
  if (props.shadowIntensity > 0) {
    const intensity = Math.min(props.shadowIntensity, 3);
    const shadowOffset = 2 * intensity;
    const shadowBlur = 8 * intensity;
    styles.boxShadow = `0 ${shadowOffset}px ${shadowBlur}px ${props.shadowColor}40`;
  }

  return styles;
});

const getUiverseStyles = () => {
  switch (props.uiverseVariant) {
    case 'unlucky-sheep':
      return {
        background: `linear-gradient(135deg, ${props.primaryColor}, ${adjustColor(props.primaryColor, -20)})`,
        color: '#ffffff',
        borderRadius: '12px',
        boxShadow: `0 4px 15px ${props.primaryColor}40`,
        transform: 'perspective(1px) translateZ(0)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      };
    
    case 'neon-glow':
      return {
        background: 'rgba(0, 0, 0, 0.8)',
        color: props.primaryColor || '#00ffff',
        border: `2px solid ${props.primaryColor || '#00ffff'}`,
        borderRadius: '8px',
        textShadow: `0 0 10px ${props.primaryColor || '#00ffff'}`,
        boxShadow: `0 0 20px ${props.primaryColor || '#00ffff'}40, inset 0 0 20px ${props.primaryColor || '#00ffff'}20`
      };
    
    case 'glass-morph':
      return {
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '16px',
        color: props.textColor,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
      };
    
    case 'neumorphic-soft':
      const baseColor = props.theme === 'dark' ? '#2d3748' : '#e2e8f0';
      return {
        background: baseColor,
        color: props.textColor,
        borderRadius: '20px',
        boxShadow: `8px 8px 16px ${adjustColor(baseColor, -10)}, -8px -8px 16px ${adjustColor(baseColor, 10)}`,
        border: 'none'
      };
    
    default:
      return {};
  }
};

const glowStyles = computed(() => {
  if (props.glowIntensity === 0) return {};
  
  const intensity = Math.min(props.glowIntensity, 3);
  const glowSize = 20 * intensity;
  const glowOpacity = 0.3 * intensity;
  
  return {
    position: 'absolute',
    inset: `-${glowSize}px`,
    background: `radial-gradient(circle, ${props.primaryColor}${Math.round(glowOpacity * 255).toString(16)} 0%, transparent 70%)`,
    borderRadius: 'inherit',
    zIndex: -1,
    filter: 'blur(10px)',
    animation: props.animationType === 'pulse-glow' ? 'pulse-glow 2s infinite' : 'none'
  };
});

// Helper Functions
const adjustColor = (color, amount) => {
  // Simple color adjustment utility
  const num = parseInt(color.replace('#', ''), 16);
  const amt = Math.round(2.55 * amount);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
};

const getParticleStyle = (index) => {
  const angle = (360 / 6) * index;
  return {
    '--particle-angle': `${angle}deg`,
    animationDelay: `${index * 0.1}s`
  };
};

// Event Handlers
const handleClick = (event) => {
  if (props.disabled || props.loading) return;
  
  if (props.animationType === 'ripple') {
    createRippleEffect(event);
  }
  
  emit('click', event);
};

const handleMouseEnter = (event) => {
  isHovered.value = true;
  emit('mouseenter', event);
};

const handleMouseLeave = (event) => {
  isHovered.value = false;
  emit('mouseleave', event);
};

const handleFocus = (event) => {
  isFocused.value = true;
  emit('focus', event);
};

const handleBlur = (event) => {
  isFocused.value = false;
  emit('blur', event);
};

const handleMouseDown = () => {
  isPressed.value = true;
};

const handleMouseUp = () => {
  isPressed.value = false;
};

const createRippleEffect = (event) => {
  if (!rippleRef.value) return;
  
  const button = buttonRef.value;
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;
  
  const ripple = document.createElement('span');
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  ripple.classList.add('ripple');
  
  rippleRef.value.appendChild(ripple);
  
  setTimeout(() => {
    if (ripple.parentNode) {
      ripple.parentNode.removeChild(ripple);
    }
  }, 600);
};
</script>

<style scoped>
.dim-enhanced-button {
  overflow: hidden;
  transform-style: preserve-3d;
  will-change: transform;
}

/* Variant Styles */
.variant-primary {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.variant-primary:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.variant-outline:hover {
  background-color: rgba(var(--primary-rgb), 0.1);
}

.variant-ghost:hover {
  background-color: rgba(var(--primary-rgb), 0.1);
}

/* Uiverse.io Variant Styles */
.uiverse-unlucky-sheep:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 8px 25px rgba(var(--primary-rgb), 0.4);
}

.uiverse-neon-glow:hover {
  box-shadow: 0 0 30px currentColor, inset 0 0 30px rgba(255, 255, 255, 0.1);
  animation: neon-pulse 1.5s infinite alternate;
}

.uiverse-glass-morph:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
}

.uiverse-neumorphic-soft:active {
  box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.3), 
              inset -4px -4px 8px rgba(255, 255, 255, 0.3);
}

/* Animation Styles */
.animation-hover-lift:hover:not(:disabled) {
  transform: translateY(-2px);
}

.animation-scale:hover:not(:disabled) {
  transform: scale(1.05);
}

.animation-scale:active:not(:disabled) {
  transform: scale(0.95);
}

/* Loading Spinner */
.loading-spinner {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Ripple Effect */
.ripple-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: inherit;
  pointer-events: none;
}

.ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  transform: scale(0);
  animation: ripple-effect 0.6s linear;
  pointer-events: none;
}

/* Particle Effects */
.particle-container {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: currentColor;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  opacity: 0;
  animation: particle-burst 0.8s ease-out;
}

/* State Styles */
.is-pressed {
  transform: scale(0.98);
}

.is-focused {
  outline: 2px solid rgba(var(--primary-rgb), 0.5);
  outline-offset: 2px;
}

/* Keyframe Animations */
@keyframes ripple-effect {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

@keyframes neon-pulse {
  0% {
    text-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor;
  }
  100% {
    text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor;
  }
}

@keyframes pulse-glow {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
}

@keyframes particle-burst {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(var(--particle-angle)) translateX(0);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) rotate(var(--particle-angle)) translateX(50px);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .dim-enhanced-button {
    min-height: 44px; /* Touch target minimum */
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .dim-enhanced-button {
    border: 2px solid currentColor;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .dim-enhanced-button {
    transition: none;
    animation: none;
  }
  
  .dim-enhanced-button * {
    animation: none;
    transition: none;
  }
}
</style>
