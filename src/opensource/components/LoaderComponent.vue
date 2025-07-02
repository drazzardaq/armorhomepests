<template>
  <div class="flex items-center justify-center p-8" :style="containerStyles">
    <div :class="loaderClasses" :style="loaderStyles">
      <!-- Spinner -->
      <div v-if="variant === 'spinner'" class="spinner"></div>
      
      <!-- Dots -->
      <div v-else-if="variant === 'dots'" class="dots-loader">
        <div v-for="i in 3" :key="i" class="dot" :style="{ animationDelay: `${(i - 1) * 0.2}s` }"></div>
      </div>
      
      <!-- Pulse -->
      <div v-else-if="variant === 'pulse'" class="pulse-loader">
        <div class="pulse-circle"></div>
        <div class="pulse-circle"></div>
      </div>
      
      <!-- Bars -->
      <div v-else-if="variant === 'bars'" class="bars-loader">
        <div v-for="i in 5" :key="i" class="bar" :style="{ animationDelay: `${(i - 1) * 0.1}s` }"></div>
      </div>
      
      <!-- Circles -->
      <div v-else-if="variant === 'circles'" class="circles-loader">
        <div v-for="i in 4" :key="i" class="circle" :style="{ animationDelay: `${(i - 1) * 0.3}s` }"></div>
      </div>
      
      <!-- Gradient -->
      <div v-else-if="variant === 'gradient'" class="gradient-loader"></div>
      
      <!-- Neon -->
      <div v-else-if="variant === 'neon'" class="neon-loader">
        <div class="neon-ring"></div>
      </div>
      
      <!-- DNA -->
      <div v-else-if="variant === 'dna'" class="dna-loader">
        <div v-for="i in 6" :key="i" class="dna-strand" :style="{ animationDelay: `${(i - 1) * 0.1}s` }"></div>
      </div>
      
      <!-- Wave -->
      <div v-else-if="variant === 'wave'" class="wave-loader">
        <div v-for="i in 5" :key="i" class="wave-bar" :style="{ animationDelay: `${(i - 1) * 0.1}s` }"></div>
      </div>
      
      <!-- Heart -->
      <div v-else-if="variant === 'heart'" class="heart-loader">
        <div class="heart"></div>
      </div>
      
      <!-- 3D Cube -->
      <div v-else-if="variant === 'cube'" class="cube-loader">
        <div class="cube">
          <div class="face front"></div>
          <div class="face back"></div>
          <div class="face right"></div>
          <div class="face left"></div>
          <div class="face top"></div>
          <div class="face bottom"></div>
        </div>
      </div>
      
      <!-- Orbit -->
      <div v-else-if="variant === 'orbit'" class="orbit-loader">
        <div class="orbit">
          <div class="planet"></div>
        </div>
        <div class="orbit orbit-2">
          <div class="planet"></div>
        </div>
        <div class="orbit orbit-3">
          <div class="planet"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: { type: String, default: 'spinner' },
  roundness: { type: Number, default: 8 },
  primaryColor: { type: String, default: '#6366f1' },
  bgColor: { type: String, default: '#ffffff' },
  textColor: { type: String, default: '#1f2937' },
  fontFamily: { type: String, default: 'inherit' },
  width: { type: Number, default: 80 },
  height: { type: Number, default: 80 },
  padding: { type: Number, default: 16 },
  margin: { type: Number, default: 8 },
  theme: { type: String, default: 'light' },
  compact: { type: Boolean, default: false }
});

const containerStyles = computed(() => ({
  padding: `${props.padding}px`,
  margin: `${props.margin}px`
}));

const loaderClasses = computed(() => {
  return `loader-container ${props.variant}-container`;
});

const loaderStyles = computed(() => ({
  width: `${props.width}px`,
  height: `${props.height}px`,
  '--primary-color': props.primaryColor,
  '--bg-color': props.bgColor,
  '--text-color': props.textColor
}));
</script>

<style scoped>
.loader-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Spinner */
.spinner {
  width: 100%;
  height: 100%;
  border: 4px solid rgba(99, 102, 241, 0.1);
  border-left: 4px solid var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Dots */
.dots-loader {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
}

.dot {
  width: 12px;
  height: 12px;
  background: var(--primary-color);
  border-radius: 50%;
  animation: bounce 1.4s ease-in-out infinite both;
}

@keyframes bounce {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}

/* Pulse */
.pulse-loader {
  position: relative;
  width: 100%;
  height: 100%;
}

.pulse-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border: 2px solid var(--primary-color);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: pulse 2s ease-in-out infinite;
}

.pulse-circle:nth-child(2) {
  animation-delay: 1s;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
  }
}

/* Bars */
.bars-loader {
  display: flex;
  gap: 4px;
  align-items: end;
  justify-content: center;
  height: 100%;
}

.bar {
  width: 8px;
  height: 40%;
  background: var(--primary-color);
  animation: bars 1.2s ease-in-out infinite;
}

@keyframes bars {
  0%, 40%, 100% { height: 40%; }
  20% { height: 100%; }
}

/* Circles */
.circles-loader {
  position: relative;
  width: 100%;
  height: 100%;
}

.circle {
  position: absolute;
  width: 20px;
  height: 20px;
  background: var(--primary-color);
  border-radius: 50%;
  animation: circles 1.2s linear infinite;
}

.circle:nth-child(1) { top: 0; left: 50%; transform: translateX(-50%); }
.circle:nth-child(2) { top: 50%; right: 0; transform: translateY(-50%); }
.circle:nth-child(3) { bottom: 0; left: 50%; transform: translateX(-50%); }
.circle:nth-child(4) { top: 50%; left: 0; transform: translateY(-50%); }

@keyframes circles {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

/* Gradient */
.gradient-loader {
  width: 100%;
  height: 100%;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    var(--primary-color) 90deg,
    transparent 180deg
  );
  border-radius: 50%;
  animation: gradient-spin 1s linear infinite;
  position: relative;
}

.gradient-loader::before {
  content: '';
  position: absolute;
  top: 10%;
  left: 10%;
  right: 10%;
  bottom: 10%;
  background: var(--bg-color);
  border-radius: 50%;
}

@keyframes gradient-spin {
  to { transform: rotate(360deg); }
}

/* Neon */
.neon-loader {
  width: 100%;
  height: 100%;
  position: relative;
}

.neon-ring {
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-top: 3px solid #00ffff;
  border-radius: 50%;
  animation: neon-spin 1s linear infinite;
  box-shadow: 
    0 0 10px #00ffff,
    inset 0 0 10px #00ffff;
}

@keyframes neon-spin {
  to { transform: rotate(360deg); }
}

/* DNA */
.dna-loader {
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.dna-strand {
  width: 8px;
  height: 100%;
  background: linear-gradient(to bottom, var(--primary-color), #ec4899);
  border-radius: 4px;
  animation: dna 1.5s ease-in-out infinite;
}

@keyframes dna {
  0%, 100% { transform: scaleY(1) translateY(0); }
  50% { transform: scaleY(0.3) translateY(-20px); }
}

/* Wave */
.wave-loader {
  display: flex;
  gap: 4px;
  align-items: end;
  justify-content: center;
  height: 100%;
}

.wave-bar {
  width: 8px;
  height: 20%;
  background: var(--primary-color);
  border-radius: 4px;
  animation: wave 1s ease-in-out infinite;
}

@keyframes wave {
  0%, 100% { height: 20%; }
  50% { height: 100%; }
}

/* Heart */
.heart-loader {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.heart {
  width: 60px;
  height: 60px;
  background: #e91e63;
  position: relative;
  transform: rotate(-45deg);
  animation: heartbeat 1.2s ease-in-out infinite;
}

.heart::before,
.heart::after {
  content: '';
  width: 60px;
  height: 60px;
  position: absolute;
  left: 30px;
  top: 0;
  background: #e91e63;
  border-radius: 30px;
  transform: rotate(-45deg);
  transform-origin: 0 60px;
}

.heart::after {
  left: 0;
  transform: rotate(45deg);
  transform-origin: 60px 60px;
}

@keyframes heartbeat {
  0%, 100% { transform: rotate(-45deg) scale(1); }
  50% { transform: rotate(-45deg) scale(1.2); }
}

/* 3D Cube */
.cube-loader {
  perspective: 200px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cube {
  position: relative;
  width: 60px;
  height: 60px;
  transform-style: preserve-3d;
  animation: cube-rotate 2s linear infinite;
}

.face {
  position: absolute;
  width: 60px;
  height: 60px;
  background: rgba(99, 102, 241, 0.8);
  border: 2px solid var(--primary-color);
}

.front { transform: rotateY(0deg) translateZ(30px); }
.back { transform: rotateY(180deg) translateZ(30px); }
.right { transform: rotateY(90deg) translateZ(30px); }
.left { transform: rotateY(-90deg) translateZ(30px); }
.top { transform: rotateX(90deg) translateZ(30px); }
.bottom { transform: rotateX(-90deg) translateZ(30px); }

@keyframes cube-rotate {
  to { transform: rotateX(360deg) rotateY(360deg); }
}

/* Orbit */
.orbit-loader {
  position: relative;
  width: 100%;
  height: 100%;
}

.orbit {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 2px solid rgba(99, 102, 241, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.orbit:nth-child(1) {
  width: 80%;
  height: 80%;
  animation: orbit 3s linear infinite;
}

.orbit-2 {
  width: 60%;
  height: 60%;
  animation: orbit 2s linear infinite reverse;
}

.orbit-3 {
  width: 40%;
  height: 40%;
  animation: orbit 1.5s linear infinite;
}

.planet {
  position: absolute;
  top: -4px;
  left: 50%;
  width: 8px;
  height: 8px;
  background: var(--primary-color);
  border-radius: 50%;
  transform: translateX(-50%);
}

@keyframes orbit {
  to { transform: translate(-50%, -50%) rotate(360deg); }
}
</style>
