<template>
  <div class="flex items-center justify-center p-8">
    <button 
      :class="buttonClasses"
      :style="buttonStyles"
      @click="handleClick"
      @mouseenter="handleHover"
      @mouseleave="handleLeave"
    >
      <span :class="textClasses">
        {{ buttonText }}
      </span>
      <div v-if="variant === 'ripple'" class="ripple-effect" ref="ripple"></div>
    </button>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  variant: { type: String, default: 'gradient' },
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
  compact: { type: Boolean, default: false }
});

const ripple = ref(null);
const isHovered = ref(false);

const buttonText = computed(() => {
  const texts = {
    gradient: '✨ Gradient Magic',
    glassmorphic: '🔮 Glass Button',
    neon: '⚡ Neon Glow',
    neumorphic: '🎛️ Neumorphic',
    animated: '🔄 Animated',
    'hover-effects': '👆 Hover Me',
    ripple: '💧 Ripple Effect',
    glow: '🌟 Glowing',
    shadow: '📦 3D Shadow',
    outline: '⚪ Outlined',
    minimal: '⚫ Minimal',
    retro: '📼 Retro Style'
  };
  return texts[props.variant] || 'Click Me';
});

const buttonClasses = computed(() => {
  const baseClasses = 'relative overflow-hidden font-semibold transition-all duration-300 cursor-pointer select-none';
  
  const variantClasses = {
    gradient: 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transform hover:scale-105 shadow-lg hover:shadow-xl',
    glassmorphic: 'bg-white/20 backdrop-blur-lg border border-white/30 text-white hover:bg-white/30 shadow-xl',
    neon: 'bg-black border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_#22d3ee] transition-all duration-300',
    neumorphic: 'bg-gray-200 text-gray-700 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff]',
    animated: 'bg-gradient-to-r from-green-400 to-blue-500 text-white hover:from-green-500 hover:to-blue-600 animate-pulse hover:animate-none transform hover:rotate-2',
    'hover-effects': 'bg-indigo-500 text-white hover:bg-indigo-600 transform hover:translate-y-[-4px] hover:shadow-2xl',
    ripple: 'bg-blue-500 text-white hover:bg-blue-600 overflow-hidden',
    glow: 'bg-purple-600 text-white hover:shadow-[0_0_30px_#9333ea] transform hover:scale-110',
    shadow: 'bg-orange-500 text-white shadow-[0_8px_0_#ea580c] hover:shadow-[0_4px_0_#ea580c] hover:translate-y-1',
    outline: 'bg-transparent border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white',
    minimal: 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-600',
    retro: 'bg-yellow-400 text-black border-4 border-black hover:bg-yellow-300 shadow-[4px_4px_0_black] hover:shadow-[2px_2px_0_black] hover:translate-x-0.5 hover:translate-y-0.5'
  };
  
  return `${baseClasses} ${variantClasses[props.variant] || variantClasses.gradient}`;
});

const buttonStyles = computed(() => {
  return {
    borderRadius: `${props.roundness}px`,
    fontFamily: props.fontFamily,
    width: `${props.width}px`,
    height: `${props.height}px`,
    padding: `${props.padding}px`,
    margin: `${props.margin}px`,
    fontSize: props.compact ? '14px' : '16px'
  };
});

const textClasses = computed(() => {
  const baseClasses = 'relative z-10';
  
  if (props.variant === 'animated') {
    return `${baseClasses} animate-bounce hover:animate-none`;
  }
  
  return baseClasses;
});

const handleClick = (event) => {
  if (props.variant === 'ripple') {
    createRipple(event);
  }
};

const handleHover = () => {
  isHovered.value = true;
};

const handleLeave = () => {
  isHovered.value = false;
};

const createRipple = (event) => {
  const button = event.currentTarget;
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;
  
  const rippleElement = document.createElement('span');
  rippleElement.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    left: ${x}px;
    top: ${y}px;
    animation: ripple 0.6s linear;
    pointer-events: none;
  `;
  
  button.appendChild(rippleElement);
  
  setTimeout(() => {
    rippleElement.remove();
  }, 600);
};
</script>

<style scoped>
@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

/* Additional hover effects */
.hover\:shadow-\[0_0_20px_\#22d3ee\]:hover {
  box-shadow: 0 0 20px #22d3ee;
}

.hover\:shadow-\[0_0_30px_\#9333ea\]:hover {
  box-shadow: 0 0 30px #9333ea;
}

.hover\:shadow-\[0_8px_0_\#ea580c\]:hover {
  box-shadow: 0 8px 0 #ea580c;
}

.hover\:shadow-\[0_4px_0_\#ea580c\]:hover {
  box-shadow: 0 4px 0 #ea580c;
}

.shadow-\[0_8px_0_\#ea580c\] {
  box-shadow: 0 8px 0 #ea580c;
}

.shadow-\[4px_4px_0_black\] {
  box-shadow: 4px 4px 0 black;
}

.hover\:shadow-\[2px_2px_0_black\]:hover {
  box-shadow: 2px 2px 0 black;
}
</style>
