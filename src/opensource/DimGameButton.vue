<template>
  <!-- Documentation Mode -->
  <div v-if="isDocs" class="DUIMX-docs prose prose-purple max-w-none">
    <div class="mb-6 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4">
      <h2 class="mb-2 text-2xl font-bold text-purple-300">🎮 DUIMX Game Button</h2>
      <p class="text-purple-200">Gaming-inspired button component with neon effects, 3D transforms, and vibrant game-themed styles.</p>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">✨ Features</h3>
    <ul class="mb-6 space-y-2 text-purple-200">
      <li>🎮 <strong>Gaming Aesthetic</strong> - Perfect for game UIs and gaming-themed applications</li>
      <li>🌟 <strong>Neon Effects</strong> - Vibrant glowing borders and text effects</li>
      <li>🎭 <strong>Multiple Styles</strong> - Cyber, Retro, Arcade, Neon, Fantasy variants</li>
      <li>🔊 <strong>Audio Feedback</strong> - Optional sound effects on interaction (click, hover)</li>
      <li>🎬 <strong>Press Effects</strong> - 3D transform with realistic press animations</li>
      <li>✨ <strong>Particle Effects</strong> - Optional particle bursts on click</li>
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
          <tr><td class="border border-purple-500/30 p-2 font-mono">text</td><td class="border border-purple-500/30 p-2">String</td><td class="border border-purple-500/30 p-2">'PLAY'</td><td class="border border-purple-500/30 p-2">Button text content</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">variant</td><td class="border border-purple-500/30 p-2">String</td><td class="border border-purple-500/30 p-2">'cyber'</td><td class="border border-purple-500/30 p-2">Button style variant</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">glowIntensity</td><td class="border border-purple-500/30 p-2">Number</td><td class="border border-purple-500/30 p-2">2</td><td class="border border-purple-500/30 p-2">Intensity of glow effect (0-3)</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">enableSound</td><td class="border border-purple-500/30 p-2">Boolean</td><td class="border border-purple-500/30 p-2">false</td><td class="border border-purple-500/30 p-2">Enable sound effects</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">enableParticles</td><td class="border border-purple-500/30 p-2">Boolean</td><td class="border border-purple-500/30 p-2">true</td><td class="border border-purple-500/30 p-2">Enable particle effects</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">pressDepth</td><td class="border border-purple-500/30 p-2">Number</td><td class="border border-purple-500/30 p-2">4</td><td class="border border-purple-500/30 p-2">3D press depth in pixels</td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">🎮 Game Button Variants</h3>
    <div class="mb-6 grid grid-cols-2 gap-4">
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">cyber</h4>
        <p class="text-purple-200 text-sm">Modern cyberpunk style with neon edges</p>
      </div>
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">retro</h4>
        <p class="text-purple-200 text-sm">Pixelated retro arcade style</p>
      </div>
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">fantasy</h4>
        <p class="text-purple-200 text-sm">Medieval fantasy RPG style</p>
      </div>
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">neon</h4>
        <p class="text-purple-200 text-sm">Pure neon glow with vibrant colors</p>
      </div>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">🎯 Usage Examples</h3>
    <div class="mb-6 space-y-4">
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/50 p-4">
        <h4 class="mb-2 text-lg font-semibold text-purple-300">Basic Game Button</h4>
        <pre class="text-sm text-purple-200"><code>&lt;DimGameButton 
  text="START GAME"
  @click="startGame"
/&gt;</code></pre>
      </div>
      
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/50 p-4">
        <h4 class="mb-2 text-lg font-semibold text-purple-300">Neon Arcade Button</h4>
        <pre class="text-sm text-purple-200"><code>&lt;DimGameButton 
  text="INSERT COIN"
  variant="retro"
  primaryColor="#00ffff"
  :glowIntensity="3"
  :enableSound="true"
  @click="insertCoin"
/&gt;</code></pre>
      </div>
    </div>

    <div class="mb-6 rounded-lg border border-purple-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4">
      <p class="text-center text-purple-200">
        <strong>🔗 Inspired by:</strong> 
        <a href="https://uiverse.io/theleaderofenemy/calm-frog-37" 
           target="_blank" 
           class="text-purple-300 hover:text-purple-100 transition-colors underline">
          Uiverse.io Game Button Challenge
        </a>
      </p>
    </div>
  </div>
  
  <!-- Normal Component Mode -->
  <div v-else class="relative inline-block">
    <!-- Version Display -->
    <div class="absolute -top-2 -right-2 z-10 bg-gradient-to-r from-purple-500 to-pink-500 backdrop-blur-sm rounded-full px-2 py-1">
      <span class="text-xs text-white font-mono font-bold">v0.9.7</span>
    </div>
    
    <!-- Game Button -->
    <button
      ref="buttonRef"
      :class="buttonClasses"
      :style="buttonStyles"
      @click="handleClick"
      @mousedown="handleMouseDown"
      @mouseup="handleMouseUp"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <!-- Base Button with 3D Effect -->
      <span class="button-base"></span>
      
      <!-- Button Face with Text -->
      <span class="button-face">
        <span v-if="loading" class="loading-spinner"></span>
        <span v-else-if="icon" class="button-icon">{{ icon }}</span>
        <span class="button-text">{{ text }}</span>
      </span>
      
      <!-- Glow Effect -->
      <span v-if="glowIntensity > 0" class="button-glow"></span>
      
      <!-- Particles Container -->
      <span v-if="enableParticles" class="particles-container" ref="particlesRef"></span>
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted, nextTick } from 'vue';

const props = defineProps({
  // Standard DUIMX Props
  roundness: { type: Number, default: 8 },
  primaryColor: { type: String, default: '#00ffff' },
  bgColor: { type: String, default: '#0f1218' },
  textColor: { type: String, default: '#ffffff' },
  fontFamily: { type: String, default: 'inherit' },
  width: { type: Number, default: 180 },
  height: { type: Number, default: 60 },
  padding: { type: Number, default: 16 },
  margin: { type: Number, default: 8 },
  theme: { type: String, default: 'dark' },
  compact: { type: Boolean, default: false },
  isDocs: { type: Boolean, default: false },
  
  // Button-specific props
  text: { type: String, default: 'PLAY NOW' },
  variant: { 
    type: String, 
    default: 'cyber',
    validator: value => ['cyber', 'retro', 'fantasy', 'neon', 'arcade'].includes(value)
  },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  icon: { type: String, default: '' },
  
  // Game button specific props
  glowIntensity: { type: Number, default: 2, validator: value => value >= 0 && value <= 3 },
  enableSound: { type: Boolean, default: false },
  enableParticles: { type: Boolean, default: true },
  pressDepth: { type: Number, default: 4, validator: value => value >= 0 && value <= 10 },
});

const emit = defineEmits(['click']);

// Refs
const buttonRef = ref(null);
const particlesRef = ref(null);

// States
const isHovered = ref(false);
const isPressed = ref(false);

// Sound Effects
const playSound = (type) => {
  if (!props.enableSound) return;
  
  const sounds = {
    hover: 'hover-beep.mp3',
    click: 'click-blip.mp3',
  };
  
  try {
    const sound = new Audio(`/sounds/game-ui/${sounds[type]}`);
    sound.volume = 0.5;
    sound.play();
  } catch (e) {
    console.warn('Sound failed to play:', e);
  }
};

// Particle Effects
const createParticles = () => {
  if (!props.enableParticles || !particlesRef.value) return;
  
  const count = 12;
  const container = particlesRef.value;
  
  // Clear existing particles
  container.innerHTML = '';
  
  // Create new particles
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('span');
    const size = Math.random() * 4 + 2;
    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 50 + 50;
    
    particle.className = 'particle';
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = props.primaryColor;
    particle.style.setProperty('--angle', angle);
    particle.style.setProperty('--velocity', velocity);
    
    container.appendChild(particle);
    
    // Auto-remove particles
    setTimeout(() => {
      if (particle.parentNode === container) {
        container.removeChild(particle);
      }
    }, 1000);
  }
};

// Button Classes
const buttonClasses = computed(() => {
  const base = [
    'dim-game-button',
    `variant-${props.variant}`,
    'relative'
  ];
  
  // State classes
  if (props.disabled || props.loading) {
    base.push('disabled');
  }
  
  if (isHovered.value) {
    base.push('hovered');
  }
  
  if (isPressed.value) {
    base.push('pressed');
  }
  
  // Glow intensity classes
  if (props.glowIntensity > 0) {
    base.push(`glow-intensity-${Math.ceil(props.glowIntensity)}`);
  }
  
  return base;
});

// Button Styles
const buttonStyles = computed(() => {
  // Calculate appropriate colors
  const bgColorValue = props.variant === 'retro' ? '#000000' : props.bgColor;
  const textColorValue = props.variant === 'neon' ? props.primaryColor : props.textColor;
  
  const styles = {
    // Base styles
    '--primary-color': props.primaryColor,
    '--bg-color': bgColorValue,
    '--text-color': textColorValue,
    '--press-depth': `${props.pressDepth}px`,
    '--glow-intensity': props.glowIntensity,
    '--button-width': `${props.width}px`,
    '--button-height': `${props.height}px`,
    
    // Core styles
    fontFamily: props.fontFamily,
    width: `${props.width}px`,
    height: `${props.height}px`,
    borderRadius: `${props.roundness}px`,
    margin: `${props.margin}px`,
  };
  
  // Variant-specific styling
  switch (props.variant) {
    case 'retro':
      styles.fontFamily = "'Press Start 2P', monospace";
      styles['--shadow-color'] = props.primaryColor;
      break;
    
    case 'fantasy':
      styles.fontFamily = "'MedievalSharp', cursive";
      styles['--shadow-color'] = 'rgba(255, 215, 0, 0.7)';
      break;
      
    case 'neon':
      styles['--glow-blur'] = '8px';
      styles['--shadow-color'] = props.primaryColor;
      break;
      
    case 'arcade':
      styles.fontFamily = "'Bungee', cursive";
      styles['--shadow-color'] = 'rgba(255, 255, 255, 0.5)';
      break;
      
    // cyber is default
    default:
      styles['--shadow-color'] = props.primaryColor;
  }
  
  return styles;
});

// Event Handlers
const handleClick = (e) => {
  if (props.disabled || props.loading) return;
  
  playSound('click');
  createParticles();
  emit('click', e);
};

const handleMouseDown = () => {
  if (props.disabled || props.loading) return;
  isPressed.value = true;
};

const handleMouseUp = () => {
  if (props.disabled || props.loading) return;
  isPressed.value = false;
};

const handleMouseEnter = () => {
  if (props.disabled || props.loading) return;
  isHovered.value = true;
  playSound('hover');
};

const handleMouseLeave = () => {
  if (props.disabled || props.loading) return;
  isHovered.value = false;
  isPressed.value = false;
};

// Cleanup
onUnmounted(() => {
  if (particlesRef.value) {
    particlesRef.value.innerHTML = '';
  }
});
</script>

<style scoped>
/* Base Game Button Styling */
.dim-game-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: visible;
  transform: translateY(0);
  transition: transform 0.15s ease, filter 0.3s ease;
  user-select: none;
}

.dim-game-button:focus {
  outline: none;
}

/* Button Face and Base */
.button-base {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background-color: var(--shadow-color);
  transform: translateY(var(--press-depth));
  z-index: 1;
}

.button-face {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-color);
  color: var(--text-color);
  border-radius: inherit;
  border: 2px solid var(--primary-color);
  transform: translateY(0);
  transition: transform 0.15s ease, box-shadow 0.2s ease;
  z-index: 2;
}

.button-text {
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: text-shadow 0.3s ease;
}

.button-glow {
  position: absolute;
  inset: -4px;
  border-radius: inherit;
  opacity: 0.6;
  filter: blur(calc(var(--glow-intensity) * 4px));
  background: transparent;
  border: 2px solid var(--primary-color);
  z-index: 0;
  pointer-events: none;
  transition: opacity 0.3s ease, filter 0.3s ease;
}

/* Loading Spinner */
.loading-spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: var(--primary-color);
  animation: spin 1s linear infinite;
}

/* State Styles */
.dim-game-button.hovered .button-glow {
  opacity: 0.9;
}

.dim-game-button.pressed .button-face {
  transform: translateY(calc(var(--press-depth) * 0.8));
}

.dim-game-button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  filter: grayscale(40%);
}

/* Particles */
.particles-container {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 10;
}

.particle {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  opacity: 1;
  transform: translate(-50%, -50%);
  animation: particle-burst 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

/* Variant: Cyber */
.variant-cyber .button-face {
  background: linear-gradient(170deg, rgba(30, 41, 59, 1) 0%, rgba(15, 23, 42, 1) 100%);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1) inset;
}

.variant-cyber .button-text {
  background: linear-gradient(to bottom, var(--text-color), rgba(255, 255, 255, 0.7));
  background-clip: text;
  -webkit-background-clip: text;
  text-shadow: 0 0 8px var(--primary-color);
}

.variant-cyber.hovered .button-face {
  box-shadow: 0 0 20px rgba(var(--primary-color-rgb), 0.5) inset;
}

/* Variant: Retro */
.variant-retro .button-face {
  border: 3px solid var(--primary-color);
  box-shadow: 0 0 0 1px #000 inset, 0 0 0 2px var(--primary-color) inset;
  image-rendering: pixelated;
}

.variant-retro .button-text {
  font-size: 0.9rem;
  letter-spacing: 0px;
  text-shadow: 2px 2px 0px #000;
}

.variant-retro.hovered .button-text {
  animation: pixel-shake 0.2s infinite;
}

/* Variant: Fantasy */
.variant-fantasy .button-face {
  background: linear-gradient(to bottom, #372922, #211914);
  border: 2px solid #9b8b70;
  box-shadow: 0 0 0 1px #211914 inset, 0 0 5px rgba(255, 215, 0, 0.5) inset;
}

.variant-fantasy .button-text {
  color: #fedc7c;
  text-shadow: 0 1px 1px #000;
}

.variant-fantasy.hovered .button-face {
  background: linear-gradient(to bottom, #43322a, #2a201a);
}

/* Variant: Neon */
.variant-neon .button-face {
  background-color: #10071a;
  border: 2px solid var(--primary-color);
  box-shadow: 0 0 5px var(--primary-color) inset;
  backdrop-filter: blur(2px);
}

.variant-neon .button-text {
  text-shadow: 0 0 5px var(--primary-color), 0 0 15px var(--primary-color);
}

.variant-neon .button-glow {
  opacity: 0.8;
  filter: blur(8px);
}

.variant-neon.hovered .button-text {
  text-shadow: 0 0 8px var(--primary-color), 0 0 20px var(--primary-color);
}

/* Keyframes */
@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes particle-burst {
  from {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(0deg) translateX(0);
  }
  to {
    opacity: 0;
    transform: translate(-50%, -50%) 
      rotate(calc(var(--angle) * 180deg / 3.14159)) 
      translateX(calc(var(--velocity) * 1px));
  }
}

@keyframes pixel-shake {
  0% { transform: translate(0, 0); }
  25% { transform: translate(-1px, 1px); }
  50% { transform: translate(1px, -1px); }
  75% { transform: translate(-1px, -1px); }
  100% { transform: translate(1px, 1px); }
}

/* Responsive Design */
@media (max-width: 768px) {
  .button-text {
    font-size: 0.9em;
  }
  
  .dim-game-button {
    min-width: 120px;
    min-height: 50px;
  }
}

/* Prefers reduced motion */
@media (prefers-reduced-motion: reduce) {
  .dim-game-button, .button-face, .button-text, .button-glow {
    transition: none;
  }
  
  .loading-spinner, .particle {
    animation: none;
  }
  
  .variant-retro.hovered .button-text {
    animation: none;
  }
}
</style>
