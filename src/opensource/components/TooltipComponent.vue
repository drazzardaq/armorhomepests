<template>
  <div class="flex items-center justify-center p-8" :style="containerStyles">
    <div class="relative inline-block">
      <!-- Trigger Button -->
      <button 
        :class="triggerClasses"
        :style="triggerStyles"
        @mouseenter="showTooltip"
        @mouseleave="hideTooltip"
        @focus="showTooltip"
        @blur="hideTooltip"
      >
        {{ triggerText }}
      </button>
      
      <!-- Tooltip -->
      <transition :name="transitionName">
        <div 
          v-if="visible"
          :class="tooltipClasses"
          :style="tooltipStyles"
          role="tooltip"
        >
          <!-- Arrow -->
          <div v-if="hasArrow" :class="arrowClasses" :style="arrowStyles"></div>
          
          <!-- Content -->
          <div v-if="variant === 'rich'" class="rich-content">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                🎉
              </div>
              <div>
                <div class="font-semibold text-sm">{{ tooltipTitle }}</div>
                <div class="text-xs opacity-75">Premium Feature</div>
              </div>
            </div>
            <p class="text-xs">{{ tooltipText }}</p>
            <div class="flex gap-2 mt-3">
              <button class="px-2 py-1 bg-purple-500 text-white text-xs rounded hover:bg-purple-600">
                Learn More
              </button>
              <button class="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded hover:bg-gray-300">
                Dismiss
              </button>
            </div>
          </div>
          
          <div v-else-if="variant === 'multiline'" class="text-center">
            <div class="font-semibold mb-1">{{ tooltipTitle }}</div>
            <div class="text-xs leading-relaxed">{{ tooltipText }}</div>
            <div class="text-xs opacity-75 mt-1">{{ tooltipSubtext }}</div>
          </div>
          
          <div v-else>
            {{ tooltipText }}
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  variant: { type: String, default: 'basic' },
  roundness: { type: Number, default: 8 },
  primaryColor: { type: String, default: '#6366f1' },
  bgColor: { type: String, default: '#ffffff' },
  textColor: { type: String, default: '#1f2937' },
  fontFamily: { type: String, default: 'inherit' },
  width: { type: Number, default: 300 },
  height: { type: Number, default: 200 },
  padding: { type: Number, default: 16 },
  margin: { type: Number, default: 8 },
  theme: { type: String, default: 'light' },
  compact: { type: Boolean, default: false }
});

const visible = ref(false);
let hideTimeout = null;

const showTooltip = () => {
  clearTimeout(hideTimeout);
  if (props.variant === 'delay') {
    setTimeout(() => {
      visible.value = true;
    }, 500);
  } else {
    visible.value = true;
  }
};

const hideTooltip = () => {
  if (props.variant === 'interactive') {
    hideTimeout = setTimeout(() => {
      visible.value = false;
    }, 300);
  } else {
    visible.value = false;
  }
};

const triggerText = computed(() => {
  const texts = {
    basic: 'Hover for Basic Tooltip',
    arrow: 'Tooltip with Arrow',
    animated: 'Animated Tooltip',
    gradient: 'Gradient Tooltip',
    neon: 'Neon Tooltip',
    glassmorphic: 'Glass Tooltip',
    shadow: 'Shadow Tooltip',
    multiline: 'Multi-line Tooltip',
    rich: 'Rich Content Tooltip',
    positioning: 'Position Demo',
    delay: 'Delayed Tooltip',
    interactive: 'Interactive Tooltip'
  };
  return texts[props.variant] || 'Hover Me';
});

const tooltipTitle = computed(() => {
  const titles = {
    rich: 'Awesome Feature!',
    multiline: 'Multi-line Title',
    positioning: 'Dynamic Position'
  };
  return titles[props.variant] || 'Tooltip';
});

const tooltipText = computed(() => {
  const texts = {
    basic: 'This is a basic tooltip',
    arrow: 'Tooltip with a pointing arrow',
    animated: 'Smooth animated tooltip',
    gradient: 'Beautiful gradient background',
    neon: 'Glowing neon effect',
    glassmorphic: 'Frosted glass appearance',
    shadow: 'Elevated with shadow',
    multiline: 'This tooltip spans multiple lines and provides more detailed information about the feature.',
    rich: 'This tooltip contains rich content with buttons and interactive elements.',
    positioning: 'This tooltip adjusts its position dynamically',
    delay: 'This tooltip appears after a delay',
    interactive: 'You can interact with this tooltip'
  };
  return texts[props.variant] || 'Tooltip content';
});

const tooltipSubtext = computed(() => {
  return 'Additional context or information';
});

const hasArrow = computed(() => {
  return ['arrow', 'gradient', 'shadow', 'positioning'].includes(props.variant);
});

const transitionName = computed(() => {
  const transitions = {
    animated: 'slide-fade',
    gradient: 'bounce',
    neon: 'glow',
    default: 'fade'
  };
  return transitions[props.variant] || transitions.default;
});

const containerStyles = computed(() => ({
  padding: `${props.padding}px`,
  margin: `${props.margin}px`
}));

const triggerClasses = computed(() => {
  const baseClasses = 'px-4 py-2 font-medium transition-all duration-200 cursor-pointer';
  const variantClasses = {
    basic: 'bg-blue-500 text-white hover:bg-blue-600',
    arrow: 'bg-green-500 text-white hover:bg-green-600',
    animated: 'bg-purple-500 text-white hover:bg-purple-600 transform hover:scale-105',
    gradient: 'bg-gradient-to-r from-pink-500 to-orange-500 text-white hover:from-pink-600 hover:to-orange-600',
    neon: 'bg-black border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black',
    glassmorphic: 'bg-white/20 backdrop-blur border border-white/30 text-gray-800 hover:bg-white/30',
    shadow: 'bg-indigo-500 text-white hover:bg-indigo-600 shadow-lg hover:shadow-xl',
    multiline: 'bg-gray-600 text-white hover:bg-gray-700',
    rich: 'bg-purple-600 text-white hover:bg-purple-700',
    positioning: 'bg-teal-500 text-white hover:bg-teal-600',
    delay: 'bg-yellow-500 text-black hover:bg-yellow-600',
    interactive: 'bg-red-500 text-white hover:bg-red-600'
  };
  
  return `${baseClasses} ${variantClasses[props.variant] || variantClasses.basic}`;
});

const triggerStyles = computed(() => ({
  borderRadius: `${props.roundness}px`,
  fontFamily: props.fontFamily
}));

const tooltipClasses = computed(() => {
  const baseClasses = 'absolute z-50 px-3 py-2 text-sm whitespace-nowrap pointer-events-none';
  const positionClasses = getPositionClasses();
  const variantClasses = {
    basic: 'bg-gray-800 text-white',
    arrow: 'bg-gray-800 text-white',
    animated: 'bg-gray-800 text-white',
    gradient: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white',
    neon: 'bg-black border-2 border-cyan-400 text-cyan-400 shadow-[0_0_20px_#22d3ee]',
    glassmorphic: 'bg-white/20 backdrop-blur border border-white/30 text-gray-800',
    shadow: 'bg-white text-gray-800 shadow-2xl border',
    multiline: 'bg-gray-800 text-white whitespace-normal max-w-xs',
    rich: 'bg-white text-gray-800 shadow-xl border whitespace-normal min-w-[250px] pointer-events-auto',
    positioning: 'bg-gray-800 text-white',
    delay: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
    interactive: 'bg-white text-gray-800 shadow-xl border pointer-events-auto'
  };
  
  return `${baseClasses} ${positionClasses} ${variantClasses[props.variant] || variantClasses.basic}`;
});

const tooltipStyles = computed(() => ({
  borderRadius: `${props.roundness}px`,
  fontFamily: props.fontFamily
}));

const arrowClasses = computed(() => {
  const baseClasses = 'absolute w-0 h-0';
  const arrowPosition = 'top-full left-1/2 transform -translate-x-1/2';
  const variantClasses = {
    arrow: 'border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800',
    gradient: 'border-l-4 border-r-4 border-t-4 border-transparent border-t-purple-500',
    shadow: 'border-l-4 border-r-4 border-t-4 border-transparent border-t-white',
    positioning: 'border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800'
  };
  
  return `${baseClasses} ${arrowPosition} ${variantClasses[props.variant] || ''}`;
});

const arrowStyles = computed(() => ({}));

const getPositionClasses = () => {
  if (props.variant === 'positioning') {
    // Dynamic positioning logic could go here
    return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2';
  }
  return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2';
};
</script>

<style scoped>
/* Transition Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px) translateY(-50%);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-out 0.3s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0) translateX(-50%) translateY(-100%);
  }
  50% {
    transform: scale(1.1) translateX(-50%) translateY(-100%);
  }
  100% {
    transform: scale(1) translateX(-50%) translateY(-100%);
  }
}

@keyframes bounce-out {
  from {
    transform: scale(1) translateX(-50%) translateY(-100%);
  }
  to {
    transform: scale(0) translateX(-50%) translateY(-100%);
  }
}

.glow-enter-active,
.glow-leave-active {
  transition: all 0.3s ease;
}

.glow-enter-from,
.glow-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-100%) scale(0.8);
  box-shadow: 0 0 0 #22d3ee;
}

/* Rich content styling */
.rich-content {
  max-width: none;
}

/* Interactive tooltip hover effects */
.pointer-events-auto:hover {
  transform: translateX(-50%) translateY(-100%) scale(1.02);
  transition: transform 0.2s ease;
}
</style>
