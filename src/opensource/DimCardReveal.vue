<template>
  <!-- Documentation Mode -->
  <div v-if="isDocs" class="DUIMX-docs prose prose-purple max-w-none">
    <div class="mb-6 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4">
      <h2 class="mb-2 text-2xl font-bold text-purple-300">✨ DUIMX Card Reveal</h2>
      <p class="text-purple-200">Interactive card component with smooth reveal animations and hover effects.</p>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">✨ Features</h3>
    <ul class="mb-6 space-y-2 text-purple-200">
      <li>🎭 <strong>Multiple Reveal Types</strong> - Flip, slide, fade, zoom, and overlay</li>
      <li>🎨 <strong>Customizable Content</strong> - Front and back content areas</li>
      <li>⚡ <strong>Smooth Animations</strong> - Hardware-accelerated transitions</li>
      <li>🎯 <strong>Trigger Options</strong> - Hover, click, or manual control</li>
      <li>🎪 <strong>3D Effects</strong> - Perspective and transform animations</li>
      <li>📱 <strong>Touch Support</strong> - Mobile-friendly interactions</li>
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
          <tr><td class="border border-purple-500/30 p-2 font-mono">revealType</td><td class="border border-purple-500/30 p-2">String</td><td class="border border-purple-500/30 p-2">'flip'</td><td class="border border-purple-500/30 p-2">Animation type</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">trigger</td><td class="border border-purple-500/30 p-2">String</td><td class="border border-purple-500/30 p-2">'hover'</td><td class="border border-purple-500/30 p-2">Reveal trigger</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">frontContent</td><td class="border border-purple-500/30 p-2">String</td><td class="border border-purple-500/30 p-2">'Front'</td><td class="border border-purple-500/30 p-2">Front side content</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">backContent</td><td class="border border-purple-500/30 p-2">String</td><td class="border border-purple-500/30 p-2">'Back'</td><td class="border border-purple-500/30 p-2">Back side content</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">duration</td><td class="border border-purple-500/30 p-2">Number</td><td class="border border-purple-500/30 p-2">600</td><td class="border border-purple-500/30 p-2">Animation duration (ms)</td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">🎭 Reveal Types</h3>
    <div class="mb-6 grid grid-cols-2 gap-4">
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">flip</h4>
        <p class="text-purple-200 text-sm">3D flip animation on hover</p>
      </div>
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">slide</h4>
        <p class="text-purple-200 text-sm">Sliding overlay reveal</p>
      </div>
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">fade</h4>
        <p class="text-purple-200 text-sm">Cross-fade transition</p>
      </div>
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">zoom</h4>
        <p class="text-purple-200 text-sm">Scale-based reveal</p>
      </div>
    </div>

    <div class="mb-6 rounded-lg border border-purple-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4">
      <p class="text-center text-purple-200">
        <strong>🔗 Source Code:</strong> 
        <a href="https://github.com/drazzardaq/opensource/blob/master/src/opensource/DimCardReveal.vue" 
           target="_blank" 
           class="text-purple-300 hover:text-purple-100 transition-colors underline">
          View on GitHub
        </a>
      </p>
    </div>
  </div>

  <!-- Component Mode -->
  <div v-else class="DUIMX-card-reveal"
       :style="containerStyles">
    
    <!-- Flip Type -->
    <div v-if="revealType === 'flip'"
         class="card-flip-container"
         :style="flipContainerStyles"
         @mouseenter="handleTrigger('enter')"
         @mouseleave="handleTrigger('leave')"
         @click="handleTrigger('click')">
      
      <div class="card-flip-inner"
           :class="{ 'flipped': isRevealed }"
           :style="flipInnerStyles">
        <!-- Front -->
        <div class="card-flip-front" :style="cardFaceStyles">
          <div class="content-wrapper" :style="contentStyles">
            <slot name="front">
              <div class="text-center">
                <div class="text-4xl mb-4">🎭</div>
                <h3 class="text-lg font-semibold mb-2" :style="{ color: textColor }">{{ frontContent }}</h3>
                <p class="text-sm opacity-75" :style="{ color: textColor }">
                  Hover or click to reveal more content
                </p>
              </div>
            </slot>
          </div>
        </div>
        
        <!-- Back -->
        <div class="card-flip-back" :style="cardFaceStyles">
          <div class="content-wrapper" :style="contentStyles">
            <slot name="back">
              <div class="text-center">
                <div class="text-4xl mb-4">✨</div>
                <h3 class="text-lg font-semibold mb-2" :style="{ color: textColor }">{{ backContent }}</h3>
                <p class="text-sm opacity-75" :style="{ color: textColor }">
                  Hidden content revealed! You can put anything here.
                </p>
                <button class="mt-3 px-4 py-2 rounded text-sm font-medium transition-colors"
                        :style="{ backgroundColor: primaryColor, color: theme === 'dark' ? '#000' : '#fff' }">
                  Learn More
                </button>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>

    <!-- Slide Type -->
    <div v-else-if="revealType === 'slide'"
         class="card-slide-container relative overflow-hidden"
         :style="slideContainerStyles"
         @mouseenter="handleTrigger('enter')"
         @mouseleave="handleTrigger('leave')"
         @click="handleTrigger('click')">
      
      <!-- Base content -->
      <div class="slide-base" :style="cardFaceStyles">
        <div class="content-wrapper" :style="contentStyles">
          <slot name="front">
            <div class="text-center">
              <div class="text-4xl mb-4">📜</div>
              <h3 class="text-lg font-semibold mb-2" :style="{ color: textColor }">{{ frontContent }}</h3>
              <p class="text-sm opacity-75" :style="{ color: textColor }">
                Slide reveal card
              </p>
            </div>
          </slot>
        </div>
      </div>
      
      <!-- Sliding overlay -->
      <div class="slide-overlay absolute inset-0 transition-transform"
           :class="{ 'translate-y-0': isRevealed, 'translate-y-full': !isRevealed }"
           :style="slideOverlayStyles">
        <div class="content-wrapper" :style="contentStyles">
          <slot name="back">
            <div class="text-center">
              <div class="text-4xl mb-4">🎯</div>
              <h3 class="text-lg font-semibold mb-2 text-white">{{ backContent }}</h3>
              <p class="text-sm opacity-90 text-white mb-3">
                Revealed content with sliding animation
              </p>
              <button class="px-4 py-2 rounded text-sm font-medium bg-white/20 text-white hover:bg-white/30 transition-colors">
                Action
              </button>
            </div>
          </slot>
        </div>
      </div>
    </div>

    <!-- Fade Type -->
    <div v-else-if="revealType === 'fade'"
         class="card-fade-container relative"
         :style="fadeContainerStyles"
         @mouseenter="handleTrigger('enter')"
         @mouseleave="handleTrigger('leave')"
         @click="handleTrigger('click')">
      
      <!-- Front content -->
      <div class="fade-front transition-opacity"
           :class="{ 'opacity-0': isRevealed, 'opacity-100': !isRevealed }"
           :style="cardFaceStyles">
        <div class="content-wrapper" :style="contentStyles">
          <slot name="front">
            <div class="text-center">
              <div class="text-4xl mb-4">🌫️</div>
              <h3 class="text-lg font-semibold mb-2" :style="{ color: textColor }">{{ frontContent }}</h3>
              <p class="text-sm opacity-75" :style="{ color: textColor }">
                Fade transition effect
              </p>
            </div>
          </slot>
        </div>
      </div>
      
      <!-- Back content -->
      <div class="fade-back absolute inset-0 transition-opacity"
           :class="{ 'opacity-100': isRevealed, 'opacity-0': !isRevealed }"
           :style="cardFaceStyles">
        <div class="content-wrapper" :style="contentStyles">
          <slot name="back">
            <div class="text-center">
              <div class="text-4xl mb-4">🎨</div>
              <h3 class="text-lg font-semibold mb-2" :style="{ color: textColor }">{{ backContent }}</h3>
              <p class="text-sm opacity-75" :style="{ color: textColor }">
                Smooth fade reveal effect
              </p>
            </div>
          </slot>
        </div>
      </div>
    </div>

    <!-- Zoom Type -->
    <div v-else-if="revealType === 'zoom'"
         class="card-zoom-container relative overflow-hidden"
         :style="zoomContainerStyles"
         @mouseenter="handleTrigger('enter')"
         @mouseleave="handleTrigger('leave')"
         @click="handleTrigger('click')">
      
      <!-- Base content -->
      <div class="zoom-base transition-transform"
           :class="{ 'scale-110': isRevealed, 'scale-100': !isRevealed }"
           :style="cardFaceStyles">
        <div class="content-wrapper" :style="contentStyles">
          <slot name="front">
            <div class="text-center">
              <div class="text-4xl mb-4">🔍</div>
              <h3 class="text-lg font-semibold mb-2" :style="{ color: textColor }">{{ frontContent }}</h3>
              <p class="text-sm opacity-75" :style="{ color: textColor }">
                Zoom effect on reveal
              </p>
            </div>
          </slot>
        </div>
      </div>
      
      <!-- Zoom overlay -->
      <div class="zoom-overlay absolute inset-0 flex items-center justify-center transition-all"
           :class="{ 'opacity-100 scale-100': isRevealed, 'opacity-0 scale-50': !isRevealed }"
           :style="zoomOverlayStyles">
        <div class="content-wrapper text-center">
          <slot name="back">
            <div class="text-center">
              <div class="text-4xl mb-4">⭐</div>
              <h3 class="text-lg font-semibold mb-2 text-white">{{ backContent }}</h3>
              <p class="text-sm opacity-90 text-white">
                Zoomed reveal content
              </p>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  // Documentation mode
  isDocs: { type: Boolean, default: false },
  
  // Reveal configuration
  revealType: { type: String, default: 'flip' }, // flip, slide, fade, zoom
  trigger: { type: String, default: 'hover' }, // hover, click, manual
  duration: { type: Number, default: 600 },
  
  // Content
  frontContent: { type: String, default: 'Front Side' },
  backContent: { type: String, default: 'Back Side' },
  
  // State
  revealed: { type: Boolean, default: false },
  
  // Theme and styling
  roundness: { type: Number, default: 16 },
  primaryColor: { type: String, default: '#6366f1' },
  bgColor: { type: String, default: '#1e293b' },
  textColor: { type: String, default: '#e2e8f0' },
  fontFamily: { type: String, default: 'inherit' },
  theme: { type: String, default: 'dark' },
  width: { type: Number, default: 300 },
  height: { type: Number, default: 200 },
  padding: { type: Number, default: 24 },
  margin: { type: Number, default: 16 },
  boxShadow: { type: String, default: '0 4px 6px rgba(0, 0, 0, 0.1)' },
  borderWidth: { type: Number, default: 1 },
  animation: { type: String, default: 'none' }
});

const emit = defineEmits(['reveal', 'hide', 'toggle']);

const isRevealed = ref(props.revealed);

const handleTrigger = (type) => {
  if (props.trigger === 'hover') {
    if (type === 'enter') {
      isRevealed.value = true;
      emit('reveal');
    } else if (type === 'leave') {
      isRevealed.value = false;
      emit('hide');
    }
  } else if (props.trigger === 'click' && type === 'click') {
    isRevealed.value = !isRevealed.value;
    emit('toggle', isRevealed.value);
    if (isRevealed.value) emit('reveal');
    else emit('hide');
  }
};

const containerStyles = computed(() => ({
  fontFamily: props.fontFamily,
  width: `${props.width}px`,
  height: `${props.height}px`,
  margin: `${props.margin}px`
}));

const cardFaceStyles = computed(() => ({
  backgroundColor: props.bgColor,
  borderRadius: `${props.roundness}px`,
  border: `${props.borderWidth}px solid ${props.primaryColor}20`,
  boxShadow: props.boxShadow,
  width: '100%',
  height: '100%'
}));

const contentStyles = computed(() => ({
  padding: `${props.padding}px`,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

// Flip specific styles
const flipContainerStyles = computed(() => ({
  perspective: '1000px',
  width: '100%',
  height: '100%'
}));

const flipInnerStyles = computed(() => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  transformStyle: 'preserve-3d',
  transition: `transform ${props.duration}ms ease-in-out`
}));

// Slide specific styles
const slideContainerStyles = computed(() => ({
  borderRadius: `${props.roundness}px`,
  width: '100%',
  height: '100%'
}));

const slideOverlayStyles = computed(() => ({
  background: `linear-gradient(135deg, ${props.primaryColor}, ${props.primaryColor}dd)`,
  borderRadius: `${props.roundness}px`,
  transition: `transform ${props.duration}ms ease-in-out`
}));

// Fade specific styles
const fadeContainerStyles = computed(() => ({
  borderRadius: `${props.roundness}px`,
  width: '100%',
  height: '100%'
}));

// Zoom specific styles
const zoomContainerStyles = computed(() => ({
  borderRadius: `${props.roundness}px`,
  width: '100%',
  height: '100%'
}));

const zoomOverlayStyles = computed(() => ({
  background: `linear-gradient(135deg, ${props.primaryColor}dd, ${props.primaryColor}aa)`,
  borderRadius: `${props.roundness}px`,
  transition: `all ${props.duration}ms ease-in-out`
}));
</script>

<style scoped>
.card-flip-inner {
  transform-style: preserve-3d;
}

.card-flip-inner.flipped {
  transform: rotateY(180deg);
}

.card-flip-front,
.card-flip-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.card-flip-back {
  transform: rotateY(180deg);
}

.content-wrapper {
  width: 100%;
  height: 100%;
}
</style>
