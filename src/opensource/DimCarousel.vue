<template>
  <!-- Documentation Mode -->
  <div v-if="isDocs" class="DUIMX-docs prose prose-purple max-w-none">
    <div class="mb-6 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4">
      <h2 class="mb-2 text-2xl font-bold text-purple-300">🎠 DUIMX Carousel</h2>
      <p class="text-purple-200">Modern image carousel with smooth transitions, auto-play, thumbnails, and touch support.</p>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">✨ Features</h3>
    <ul class="mb-6 space-y-2 text-purple-200">
      <li>🖼️ <strong>Image Gallery</strong> - Display multiple images in sequence</li>
      <li>🎨 <strong>Smooth Transitions</strong> - Elegant slide animations</li>
      <li>📱 <strong>Touch Support</strong> - Swipe gestures on mobile devices</li>
      <li>⏯️ <strong>Auto-play</strong> - Optional automatic slideshow mode</li>
      <li>🎯 <strong>Navigation</strong> - Dots, arrows, and thumbnail navigation</li>
      <li>♿ <strong>Accessible</strong> - Keyboard navigation and screen reader support</li>
      <li>🔧 <strong>Fully Reactive</strong> - Responds to all layout and theme changes</li>
    </ul>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">🎯 Usage Example</h3>
    <div class="mb-6 rounded-lg border border-purple-500/30 bg-slate-800/50 p-4">
      <pre class="text-sm text-purple-200"><code>&lt;DimCarousel 
  :images="[
    { src: '/images/slide1.jpg', alt: 'Slide 1' },
    { src: '/images/slide2.jpg', alt: 'Slide 2' }
  ]"
  :autoPlay="true"
  :interval="3000"
  :roundness="12"
  primaryColor="#10b981"
&gt;&lt;/DimCarousel&gt;</code></pre>
    </div>

    <div class="mb-6 rounded-lg border border-purple-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4">
      <p class="text-center text-purple-200">
        <strong>🔗 Source Code:</strong> 
        <a href="https://github.com/drazzardaq/opensource/blob/master/src/opensource/DimCarousel.vue" 
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
    ref="containerElement"
    class="carousel-container relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-purple-500/50" 
    :style="containerStyles" 
    :class="[roundnessClass, themeClasses.container, { 'cursor-grabbing': touchState.isTouching }]"
    :tabindex="props.accessibility ? 0 : -1"
    :role="props.role"
    :aria-label="props.ariaLabel"
    :aria-live="ariaLiveValue"
    :aria-atomic="true"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @keydown="handleKeyDown"
  >
    <!-- Version Display -->
    <div class="absolute top-2 left-2 z-20 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
      <span class="text-xs text-white/80">v0.9.7</span>
    </div>

    <!-- Performance Metrics (Development) -->
    <div v-if="performanceMetrics.fps < 50" class="absolute top-2 right-2 z-20 bg-red-500/80 backdrop-blur-sm rounded-lg px-2 py-1">
      <span class="text-xs text-white">FPS: {{ performanceMetrics.fps }}</span>
    </div>

    <!-- Main Carousel -->
    <div class="carousel-wrapper relative" :style="carouselStyles">
      <div 
        class="carousel-track flex will-change-transform"
        :style="trackStyles"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove" 
        @touchend="handleTouchEnd"
        @click="handleSlideClick"
      >
        <div 
          v-for="(image, index) in carouselImages" 
          :key="image.originalIndex || index"
          class="carousel-slide flex-shrink-0 relative overflow-hidden will-change-transform"
          :style="slideStyles"
          :class="[
            { 'opacity-50 scale-95': props.effect === 'fade' && currentSlide !== index },
            { 'transform-gpu': true }
          ]"
          :data-swiper-slide-index="image.originalIndex || index"
          :aria-hidden="currentSlide === index ? 'false' : 'true'"
          @click="() => handleSlideClick(image.originalIndex || index)"
        >
          <!-- Image Slide -->
          <div v-if="image.src" class="relative w-full h-full">
            <img 
              :src="image.src" 
              :alt="image.alt || `Slide ${(image.originalIndex || index) + 1}`"
              class="w-full h-full object-cover transition-transform duration-700 will-change-transform"
              :class="{ 
                'scale-110 blur-[2px]': hasParallax,
                'transform-gpu': true
              }"
              :loading="props.lazyLoad && Math.abs(currentSlide - index) > props.preloadImages ? 'lazy' : 'eager'"
              @load="preloadImages"
            />
            <div 
              v-if="image.title || image.description"
              class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
            ></div>
            <div 
              v-if="image.title || image.description"
              class="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-500 will-change-transform"
              :class="currentSlide === (image.originalIndex || index) ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'"
            >
              <h3 v-if="image.title" class="text-2xl font-bold mb-2 drop-shadow-lg">{{ image.title }}</h3>
              <p v-if="image.description" class="text-gray-200 drop-shadow-md">{{ image.description }}</p>
              <div v-if="image.stats" class="mt-4 flex gap-4">
                <div v-for="(stat, statIndex) in image.stats" :key="statIndex" class="text-center">
                  <div class="text-lg font-bold text-blue-400">{{ stat.value }}</div>
                  <div class="text-xs text-gray-300">{{ stat.label }}</div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Content Slide -->
          <div 
            v-else
            class="demo-slide flex items-center justify-center text-white font-bold text-2xl relative overflow-hidden will-change-transform"
            :style="{ 
              backgroundColor: image.color || primaryColor, 
              borderRadius: `${roundness}px`,
              ...slideContentStyles
            }"
          >
            <!-- Animated Background Pattern -->
            <div class="absolute inset-0 opacity-20">
              <div 
                v-for="n in 20" 
                :key="n"
                class="absolute w-2 h-2 bg-white rounded-full animate-pulse"
                :style="{
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  animationDelay: Math.random() * 2 + 's'
                }"
              ></div>
            </div>
            <div class="relative z-10">
              {{ image.content || `Slide ${(image.originalIndex || index) + 1}` }}
            </div>
          </div>
        </div>
      </div>

      <!-- Enhanced Navigation Arrows -->
      <button 
        v-if="carouselImages.length > 1 && showArrows"
        @click="previousSlide"
        class="carousel-nav-btn carousel-nav-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-110 focus:scale-110 transition-all duration-300 will-change-transform"
        :style="navBtnStyles"
        :disabled="!props.loop && currentSlide === 0"
        :aria-label="`Previous slide. Current slide ${currentSlideAria}`"
        :tabindex="props.accessibility ? 0 : -1"
      >
        <font-awesome-icon :icon="['fas', 'chevron-left']" class="w-5 h-5" />
      </button>

      <button 
        v-if="carouselImages.length > 1 && showArrows"
        @click="nextSlide"
        class="carousel-nav-btn carousel-nav-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-110 focus:scale-110 transition-all duration-300 will-change-transform"
        :style="navBtnStyles"
        :disabled="!props.loop && currentSlide === carouselImages.length - 1"
        :aria-label="`Next slide. Current slide ${currentSlideAria}`"
        :tabindex="props.accessibility ? 0 : -1"
      >
        <font-awesome-icon :icon="['fas', 'chevron-right']" class="w-5 h-5" />
      </button>

      <!-- Progress Bar -->
      <div v-if="showProgress" class="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
        <div 
          class="h-full bg-white transition-all duration-300 will-change-transform"
          :style="{ width: progressWidth + '%' }"
          role="progressbar"
          :aria-valuenow="currentSlide + 1"
          :aria-valuemin="1"
          :aria-valuemax="carouselImages.length"
          :aria-label="`Slide ${currentSlide + 1} of ${carouselImages.length}`"
        ></div>
      </div>

      <!-- Touch/Swipe Indicator -->
      <div 
        v-if="touchState.isTouching && props.followFinger" 
        class="absolute inset-0 pointer-events-none"
      >
        <div 
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm"
          :style="{
            transform: `translate(-50%, -50%) translateX(${(touchState.currentX - touchState.startX) / 10}px)`
          }"
        >
          {{ touchState.currentX > touchState.startX ? '← Previous' : '→ Next' }}
        </div>
      </div>
    </div>

    <!-- Dots Indicator -->
    <div 
      v-if="carouselImages.length > 1 && showDots" 
      class="carousel-dots flex justify-center space-x-2 mt-4"
      role="tablist"
      :aria-label="'Slide navigation'"
    >
      <button
        v-for="(_, index) in carouselImages"
        :key="index"
        @click="goToSlide(index)"
        class="carousel-dot w-3 h-3 rounded-full transition-all duration-300 focus:ring-2 focus:ring-purple-500/50 focus:outline-none will-change-transform"
        :class="[
          currentSlide === index ? 'opacity-100 scale-125' : 'opacity-50 hover:opacity-75 hover:scale-110'
        ]"
        :style="{
          backgroundColor: currentSlide === index ? primaryColor : textColor + '50'
        }"
        :aria-label="`Go to slide ${index + 1}`"
        :aria-selected="currentSlide === index"
        :tabindex="props.accessibility ? 0 : -1"
        role="tab"
      />
    </div>

    <!-- Auto-play Controls -->
    <div v-if="autoPlay" class="carousel-controls flex justify-center items-center gap-2 mt-2">
      <button
        @click="togglePlayPause"
        class="carousel-play-btn px-3 py-1 text-xs rounded transition-all duration-300 focus:ring-2 focus:ring-purple-500/50 focus:outline-none will-change-transform hover:scale-105"
        :class="themeClasses.playBtn"
        :style="playBtnStyles"
        :aria-label="isPlaying ? 'Pause slideshow' : 'Play slideshow'"
        :tabindex="props.accessibility ? 0 : -1"
      >
        {{ isPlaying ? '⏸️ Pause' : '▶️ Play' }}
      </button>
      
      <!-- Interval Control -->
      <div class="text-xs text-gray-400 opacity-75">
        {{ props.interval / 1000 }}s
      </div>
    </div>

    <!-- Accessibility: Screen Reader Status -->
    <div 
      v-if="props.accessibility"
      class="sr-only" 
      :aria-live="ariaLiveValue"
      :aria-atomic="true"
    >
      Slide {{ currentSlide + 1 }} of {{ carouselImages.length }}.
      {{ carouselImages[currentSlide]?.title || carouselImages[currentSlide]?.alt || `Slide ${currentSlide + 1}` }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, watchEffect, toRefs } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps({
  roundness: { 
    type: Number, 
    default: 8,
    validator: (value) => value >= 0 && value <= 50
  },
  primaryColor: { type: String, default: '#6366f1' },
  bgColor: { type: String, default: '#ffffff' },
  textColor: { type: String, default: '#1f2937' },
  fontFamily: { type: String, default: 'inherit' },
  width: { type: Number, default: 600 },
  height: { type: Number, default: 300 },
  padding: { type: Number, default: 16 },
  margin: { type: Number, default: 8 },
  theme: { type: String, default: 'light' },
  compact: { type: Boolean, default: false },
  isDocs: { type: Boolean, default: false },
  
  // Enhanced Carousel Props
  images: { 
    type: Array, 
    default: () => [
      { 
        title: 'Mars Exploration',
        description: 'Discover the red planet with cutting-edge technology',
        color: '#e53e3e',
        stats: [
          { value: '2.5x', label: 'Gravity' },
          { value: '-63°C', label: 'Avg Temp' }
        ]
      },
      { 
        title: 'Luna Base Alpha',
        description: 'Establishing humanity\'s first permanent lunar settlement',
        color: '#3182ce',
        stats: [
          { value: '1/6', label: 'Earth Gravity' },
          { value: '384K', label: 'km from Earth' }
        ]
      },
      { 
        title: 'Venus Project',
        description: 'Atmospheric transformation and terraforming initiative',
        color: '#d69e2e',
        stats: [
          { value: '460°C', label: 'Surface Temp' },
          { value: '90x', label: 'Earth Pressure' }
        ]
      },
      { 
        title: 'Europa Station',
        description: 'Deep space research facility on Jupiter\'s moon',
        color: '#319795',
        stats: [
          { value: '0.13g', label: 'Gravity' },
          { value: '2km', label: 'Ice Depth' }
        ]
      }
    ]
  },
  autoPlay: { type: Boolean, default: true },
  interval: { 
    type: Number, 
    default: 4000,
    validator: (value) => value >= 1000
  },
  showArrows: { type: Boolean, default: true },
  showDots: { type: Boolean, default: true },
  showProgress: { type: Boolean, default: false },
  hasParallax: { type: Boolean, default: false },
  effect: { 
    type: String, 
    default: 'slide',
    validator: (value) => ['slide', 'fade', 'cube', 'flip', 'coverflow', 'creative'].includes(value)
  },
  pauseOnHover: { type: Boolean, default: true },
  // New touch and performance props
  touchSensitivity: { type: Number, default: 50 },
  virtualScrolling: { type: Boolean, default: false },
  lazyLoad: { type: Boolean, default: true },
  preloadImages: { type: Number, default: 1 },
  keyboard: { type: Boolean, default: true },
  loop: { type: Boolean, default: true },
  centeredSlides: { type: Boolean, default: false },
  slidesPerView: { type: Number, default: 1 },
  spaceBetween: { type: Number, default: 0 },
  grabCursor: { type: Boolean, default: true },
  resistance: { type: Boolean, default: true },
  resistanceRatio: { type: Number, default: 0.85 },
  allowTouchMove: { type: Boolean, default: true },
  followFinger: { type: Boolean, default: true },
  shortSwipes: { type: Boolean, default: true },
  longSwipes: { type: Boolean, default: true },
  longSwipesRatio: { type: Number, default: 0.5 },
  longSwipesMs: { type: Number, default: 300 },
  speed: { type: Number, default: 300 },
  freeMode: { type: Boolean, default: false },
  freeModeMinimumVelocity: { type: Number, default: 0.02 },
  freeModeSticky: { type: Boolean, default: false },
  watchSlidesProgress: { type: Boolean, default: false },
  watchSlidesVisibility: { type: Boolean, default: false },
  preventClicks: { type: Boolean, default: true },
  preventClicksPropagation: { type: Boolean, default: true },
  slideToClickedSlide: { type: Boolean, default: false },
  accessibility: { type: Boolean, default: true },
  role: { type: String, default: 'region' },
  ariaLabel: { type: String, default: 'Image carousel' }
});

const emit = defineEmits([
  'slideChange', 
  'slideChangeTransitionStart', 
  'slideChangeTransitionEnd',
  'sliderMove',
  'beforeInit',
  'init',
  'imagesReady',
  'progress',
  'reach-beginning',
  'reach-end',
  'from-edge',
  'to-edge',
  'touch-start',
  'touch-move', 
  'touch-end',
  'transition-start',
  'transition-end',
  'slide-prev-transition-start',
  'slide-prev-transition-end',
  'slide-next-transition-start',
  'slide-next-transition-end'
]);

// Performance optimized reactive state
const currentSlide = ref(0);
const isPlaying = ref(props.autoPlay);
const isInitialized = ref(false);
const isTransitioning = ref(false);

// Touch state with enhanced gesture tracking
const touchState = ref({
  startX: 0,
  startY: 0,
  currentX: 0,
  currentY: 0,
  startTime: 0,
  isTouching: false,
  isScrolling: null,
  allowTouchCallbacks: true,
  isTouchEvent: false,
  startMoving: false,
  velocityX: 0,
  velocityY: 0
});

// Performance tracking
const performanceMetrics = ref({
  frameCount: 0,
  lastFrameTime: 0,
  fps: 60,
  renderTime: 0,
  interactionLatency: 0
});

// Intersection Observer for visibility
const intersectionObserver = ref(null);
const isVisible = ref(true);

// Cached computed values for performance
const cssVarsCache = ref(new Map());
const styleCache = ref(new Map());

let autoPlayInterval = null;
let animationFrameId = null;
let resizeObserver = null;

// Performance-optimized computed properties with memoization
const roundnessClass = computed(() => {
  const cacheKey = `roundness-${props.roundness}`;
  if (cssVarsCache.value.has(cacheKey)) {
    return cssVarsCache.value.get(cacheKey);
  }
  
  let className = '';
  if (props.roundness <= 4) className = 'rounded-sm';
  else if (props.roundness <= 8) className = 'rounded';
  else if (props.roundness <= 12) className = 'rounded-lg';
  else if (props.roundness <= 20) className = 'rounded-xl';
  else className = 'rounded-3xl';
  
  cssVarsCache.value.set(cacheKey, className);
  return className;
});

const themeClasses = computed(() => {
  const cacheKey = `theme-${props.theme}`;
  if (styleCache.value.has(cacheKey)) {
    return styleCache.value.get(cacheKey);
  }
  
  const classes = props.theme === 'light' ? {
    navBtn: 'bg-white text-gray-800 hover:bg-gray-100',
    playBtn: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    container: 'bg-white text-gray-900',
    slide: 'bg-white'
  } : {
    navBtn: 'bg-slate-800 text-white hover:bg-slate-700',
    playBtn: 'bg-slate-800 text-white hover:bg-slate-700',
    container: 'bg-slate-900 text-white',
    slide: 'bg-slate-800'
  };
  
  styleCache.value.set(cacheKey, classes);
  return classes;
});

const carouselImages = computed(() => {
  // Add virtual scrolling support
  if (props.virtualScrolling && props.images.length > 10) {
    const start = Math.max(0, currentSlide.value - 2);
    const end = Math.min(props.images.length, currentSlide.value + 3);
    return props.images.slice(start, end).map((img, index) => ({
      ...img,
      originalIndex: start + index,
      isVirtual: true
    }));
  }
  return props.images.map((img, index) => ({ ...img, originalIndex: index }));
});

// Enhanced container styles with CSS variables for performance
const containerElement = ref(null);
const containerStyles = computed(() => {
  const styles = {
    fontFamily: props.fontFamily,
    maxWidth: `${props.width}px`,
    margin: `${props.margin}px`,
    backgroundColor: props.bgColor,
    cursor: props.grabCursor ? 'grab' : 'default',
    '--carousel-primary-color': props.primaryColor,
    '--carousel-bg-color': props.bgColor,
    '--carousel-text-color': props.textColor,
    '--carousel-roundness': `${props.roundness}px`,
    '--carousel-speed': `${props.speed}ms`,
    '--carousel-space-between': `${props.spaceBetween}px`
  };
  
  if (touchState.value.isTouching && props.grabCursor) {
    styles.cursor = 'grabbing';
  }
  
  return styles;
});

const carouselStyles = computed(() => ({
  height: `${props.height}px`,
  perspective: props.effect === 'cube' ? '1000px' : 'none',
  transformStyle: props.effect === 'cube' ? 'preserve-3d' : 'flat'
}));

const slideStyles = computed(() => {
  const baseStyles = {
    height: `${props.height}px`,
    width: props.slidesPerView > 1 ? `${100 / props.slidesPerView}%` : '100%',
    marginRight: props.spaceBetween > 0 ? `${props.spaceBetween}px` : '0'
  };
  
  // Apply 3D effects based on current slide position
  if (props.effect === 'cube' || props.effect === 'coverflow') {
    baseStyles.transformStyle = 'preserve-3d';
    baseStyles.backfaceVisibility = 'hidden';
  }
  
  return baseStyles;
});

const trackStyles = computed(() => {
  const baseTransform = `translateX(-${currentSlide.value * (100 / props.slidesPerView)}%)`;
  let transform = baseTransform;
  
  // Touch interaction transform
  if (touchState.value.isTouching && props.followFinger) {
    const progress = (touchState.value.currentX - touchState.value.startX) / containerElement.value?.offsetWidth || 0;
    const resistance = props.resistance ? 
      Math.sign(progress) * Math.pow(Math.abs(progress), props.resistanceRatio) : progress;
    transform = `translateX(calc(-${currentSlide.value * (100 / props.slidesPerView)}% + ${resistance * 100}%))`;
  }
  
  // Effect-specific transforms
  switch (props.effect) {
    case 'fade':
      return { opacity: 1 };
    case 'cube':
      return {
        transform: `${transform} rotateX(0deg) rotateY(0deg)`,
        transformStyle: 'preserve-3d'
      };
    case 'coverflow':
      return {
        transform: `${transform} perspective(1000px)`,
        transformStyle: 'preserve-3d'
      };
    default:
      return {
        transform,
        transition: isTransitioning.value || touchState.value.isTouching ? 
          `transform ${props.speed}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)` : 'none'
      };
  }
});

const slideContentStyles = computed(() => ({
  width: props.centeredSlides ? '90%' : '100%',
  height: props.centeredSlides ? '90%' : '100%',
  margin: props.centeredSlides ? 'auto' : '0'
}));

const navBtnStyles = computed(() => ({
  backgroundColor: props.theme === 'light' ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.7)',
  backdropFilter: 'blur(10px)',
  border: `1px solid ${props.primaryColor}30`,
  borderRadius: `${props.roundness / 2}px`,
  padding: `${props.padding / 2}px`,
  color: props.theme === 'light' ? props.textColor : 'white',
  transition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  transform: 'scale(1)',
  willChange: 'transform, opacity'
}));

const playBtnStyles = computed(() => ({
  backgroundColor: `${props.primaryColor}20`,
  border: `1px solid ${props.primaryColor}30`,
  color: props.textColor,
  borderRadius: `${props.roundness / 3}px`,
  transition: 'all 0.2s ease'
}));

const progressWidth = computed(() => {
  if (carouselImages.value.length === 0) return 0;
  return ((currentSlide.value + 1) / carouselImages.value.length) * 100;
});

// Enhanced accessibility computed
const ariaLiveValue = computed(() => {
  return isPlaying.value ? 'off' : 'polite';
});

const currentSlideAria = computed(() => {
  return `${currentSlide.value + 1} of ${carouselImages.value.length}`;
});

// Performance-optimized carousel methods with enhanced touch support
const updatePerformanceMetrics = () => {
  const now = performance.now();
  if (performanceMetrics.value.lastFrameTime) {
    const deltaTime = now - performanceMetrics.value.lastFrameTime;
    performanceMetrics.value.fps = Math.round(1000 / deltaTime);
    performanceMetrics.value.frameCount++;
  }
  performanceMetrics.value.lastFrameTime = now;
};

const nextSlide = () => {
  if (isTransitioning.value) return;
  
  const startTime = performance.now();
  isTransitioning.value = true;
  
  const nextIndex = props.loop 
    ? (currentSlide.value + 1) % carouselImages.value.length
    : Math.min(currentSlide.value + 1, carouselImages.value.length - 1);
  
  goToSlide(nextIndex);
  
  performanceMetrics.value.interactionLatency = performance.now() - startTime;
  
  emit('slide-next-transition-start', { 
    activeIndex: currentSlide.value,
    previousIndex: currentSlide.value === 0 ? carouselImages.value.length - 1 : currentSlide.value - 1
  });
};

const previousSlide = () => {
  if (isTransitioning.value) return;
  
  const startTime = performance.now();
  isTransitioning.value = true;
  
  const prevIndex = props.loop
    ? currentSlide.value === 0 ? carouselImages.value.length - 1 : currentSlide.value - 1
    : Math.max(currentSlide.value - 1, 0);
  
  goToSlide(prevIndex);
  
  performanceMetrics.value.interactionLatency = performance.now() - startTime;
  
  emit('slide-prev-transition-start', {
    activeIndex: currentSlide.value,
    previousIndex: currentSlide.value === carouselImages.value.length - 1 ? 0 : currentSlide.value + 1
  });
};

const goToSlide = (index, speed = props.speed) => {
  if (index === currentSlide.value || isTransitioning.value) return;
  
  const previousIndex = currentSlide.value;
  
  emit('slideChangeTransitionStart', { 
    activeIndex: index, 
    previousIndex,
    direction: index > previousIndex ? 'next' : 'prev'
  });
  
  emit('transition-start');
  
  currentSlide.value = index;
  
  // Trigger transition end after animation
  setTimeout(() => {
    isTransitioning.value = false;
    emit('slideChangeTransitionEnd', { 
      activeIndex: index, 
      previousIndex,
      direction: index > previousIndex ? 'next' : 'prev'
    });
    emit('slideChange', { 
      index, 
      slide: carouselImages.value[index], 
      isFirst: index === 0,
      isLast: index === carouselImages.value.length - 1
    });
    emit('transition-end');
    
    // Check if at beginning or end
    if (index === 0) emit('reach-beginning');
    if (index === carouselImages.value.length - 1) emit('reach-end');
    
  }, speed);
  
  updatePerformanceMetrics();
};

const togglePlayPause = () => {
  isPlaying.value = !isPlaying.value;
  if (isPlaying.value) {
    startAutoPlay();
  } else {
    stopAutoPlay();
  }
};

// Enhanced touch handling with gesture recognition
const handleTouchStart = (e) => {
  if (!props.allowTouchMove) return;
  
  const touch = e.touches[0];
  const now = Date.now();
  
  touchState.value = {
    ...touchState.value,
    startX: touch.clientX,
    startY: touch.clientY,
    currentX: touch.clientX,
    currentY: touch.clientY,
    startTime: now,
    isTouching: true,
    isScrolling: null,
    allowTouchCallbacks: true,
    isTouchEvent: true,
    startMoving: false,
    velocityX: 0,
    velocityY: 0
  };
  
  emit('touch-start', { 
    startX: touch.clientX, 
    startY: touch.clientY,
    target: e.target 
  });
  
  if (props.pauseOnHover && isPlaying.value) {
    stopAutoPlay();
  }
};

const handleTouchMove = (e) => {
  if (!props.allowTouchMove || !touchState.value.isTouching) return;
  
  const touch = e.touches[0];
  const deltaX = touch.clientX - touchState.value.startX;
  const deltaY = touch.clientY - touchState.value.startY;
  const now = Date.now();
  const timeDelta = now - touchState.value.startTime;
  
  // Calculate velocity
  const velocityX = deltaX / timeDelta;
  const velocityY = deltaY / timeDelta;
  
  touchState.value = {
    ...touchState.value,
    currentX: touch.clientX,
    currentY: touch.clientY,
    velocityX,
    velocityY,
    startMoving: true
  };
  
  // Determine scroll direction
  if (touchState.value.isScrolling === null && Math.abs(deltaX) > Math.abs(deltaY)) {
    touchState.value.isScrolling = false; // horizontal
  } else if (touchState.value.isScrolling === null) {
    touchState.value.isScrolling = true; // vertical
  }
  
  // Prevent vertical scrolling when horizontal swiping
  if (!touchState.value.isScrolling && Math.abs(deltaX) > 10) {
    e.preventDefault();
  }
  
  emit('touch-move', { 
    currentX: touch.clientX, 
    currentY: touch.clientY,
    deltaX,
    deltaY,
    velocityX,
    velocityY
  });
  
  emit('sliderMove', {
    percentage: (deltaX / (containerElement.value?.offsetWidth || 1)) * 100
  });
};

const handleTouchEnd = (e) => {
  if (!props.allowTouchMove || !touchState.value.isTouching) return;
  
  const deltaX = touchState.value.currentX - touchState.value.startX;
  const deltaY = touchState.value.currentY - touchState.value.startY;
  const timeDelta = Date.now() - touchState.value.startTime;
  const absDeltaX = Math.abs(deltaX);
  const absDeltaY = Math.abs(deltaY);
  
  // Calculate if this was a swipe
  const isSwipe = timeDelta < props.longSwipesMs && absDeltaX > props.touchSensitivity;
  const isLongSwipe = timeDelta >= props.longSwipesMs && absDeltaX > containerElement.value?.offsetWidth * props.longSwipesRatio;
  
  let shouldSlide = false;
  
  if (props.shortSwipes && isSwipe) {
    shouldSlide = true;
  } else if (props.longSwipes && isLongSwipe) {
    shouldSlide = true;
  } else if (props.freeMode && Math.abs(touchState.value.velocityX) > props.freeModeMinimumVelocity) {
    shouldSlide = true;
  }
  
  if (shouldSlide && !touchState.value.isScrolling) {
    if (deltaX > 0) {
      previousSlide();
    } else {
      nextSlide();
    }
  }
  
  // Reset touch state
  touchState.value = {
    ...touchState.value,
    isTouching: false,
    startMoving: false,
    isScrolling: null,
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0
  };
  
  emit('touch-end', { 
    deltaX, 
    deltaY, 
    timeDelta,
    velocityX: touchState.value.velocityX,
    velocityY: touchState.value.velocityY
  });
  
  // Restart autoplay if it was paused
  if (props.pauseOnHover && props.autoPlay && !isPlaying.value) {
    startAutoPlay();
  }
};

// Keyboard navigation
const handleKeyDown = (e) => {
  if (!props.keyboard || !props.accessibility) return;
  
  switch (e.key) {
    case 'ArrowLeft':
    case 'ArrowUp':
      e.preventDefault();
      previousSlide();
      break;
    case 'ArrowRight':
    case 'ArrowDown':
      e.preventDefault();
      nextSlide();
      break;
    case 'Home':
      e.preventDefault();
      goToSlide(0);
      break;
    case 'End':
      e.preventDefault();
      goToSlide(carouselImages.value.length - 1);
      break;
    case ' ':
      e.preventDefault();
      togglePlayPause();
      break;
    case 'Escape':
      e.preventDefault();
      if (isPlaying.value) {
        stopAutoPlay();
      }
      break;
  }
};

// Mouse events for better desktop interaction
const handleMouseEnter = () => {
  if (props.pauseOnHover && isPlaying.value) {
    stopAutoPlay();
  }
};

const handleMouseLeave = () => {
  if (props.pauseOnHover && props.autoPlay) {
    startAutoPlay();
  }
};

const handleSlideClick = (index) => {
  if (props.slideToClickedSlide && index !== currentSlide.value) {
    goToSlide(index);
  }
};

// Enhanced autoplay with visibility API support
const startAutoPlay = () => {
  if (!props.autoPlay || carouselImages.value.length <= 1 || !isVisible.value) return;
  
  stopAutoPlay(); // Clear any existing interval
  
  autoPlayInterval = setInterval(() => {
    if (isVisible.value && !touchState.value.isTouching) {
      nextSlide();
    }
  }, props.interval);
  
  isPlaying.value = true;
};

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
  }
  isPlaying.value = false;
};

// Image preloading for performance
const preloadImages = () => {
  if (!props.lazyLoad) return;
  
  const currentIndex = currentSlide.value;
  const toPreload = [];
  
  // Preload current slide and adjacent slides
  for (let i = -props.preloadImages; i <= props.preloadImages; i++) {
    const index = currentIndex + i;
    if (index >= 0 && index < carouselImages.value.length) {
      toPreload.push(carouselImages.value[index]);
    }
  }
  
  toPreload.forEach(image => {
    if (image.src && !image.preloaded) {
      const img = new Image();
      img.onload = () => {
        image.preloaded = true;
      };
      img.src = image.src;
    }
  });
};

// Intersection Observer for performance
const setupIntersectionObserver = () => {
  if (!window.IntersectionObserver) return;
  
  intersectionObserver.value = new IntersectionObserver((entries) => {
    const [entry] = entries;
    isVisible.value = entry.isIntersecting;
    
    if (entry.isIntersecting) {
      if (props.autoPlay) startAutoPlay();
      preloadImages();
    } else {
      stopAutoPlay();
    }
  }, {
    threshold: 0.1
  });
  
  if (containerElement.value) {
    intersectionObserver.value.observe(containerElement.value);
  }
};

// Resize observer for responsive behavior
const setupResizeObserver = () => {
  if (!window.ResizeObserver) return;
  
  resizeObserver = new ResizeObserver((entries) => {
    // Clear caches on resize
    cssVarsCache.value.clear();
    styleCache.value.clear();
    
    // Trigger reactivity
    nextTick(() => {
      emit('resize', {
        width: entries[0].contentRect.width,
        height: entries[0].contentRect.height
      });
    });
  });
  
  if (containerElement.value) {
    resizeObserver.observe(containerElement.value);
  }
};

// Enhanced lifecycle with performance optimizations
onMounted(() => {
  emit('beforeInit');
  
  nextTick(() => {
    isInitialized.value = true;
    
    // Setup observers
    setupIntersectionObserver();
    setupResizeObserver();
    
    // Add event listeners
    if (containerElement.value) {
      containerElement.value.addEventListener('keydown', handleKeyDown);
      containerElement.value.addEventListener('mouseenter', handleMouseEnter);
      containerElement.value.addEventListener('mouseleave', handleMouseLeave);
      
      // Make container focusable for keyboard navigation
      containerElement.value.setAttribute('tabindex', '0');
    }
    
    // Start autoplay if enabled
    if (props.autoPlay && isPlaying.value) {
      startAutoPlay();
    }
    
    // Preload initial images
    preloadImages();
    
    emit('init');
    emit('imagesReady');
  });
});

onUnmounted(() => {
  // Cleanup
  stopAutoPlay();
  
  if (intersectionObserver.value) {
    intersectionObserver.value.disconnect();
  }
  
  if (resizeObserver) {
    resizeObserver.disconnect();
  }
  
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  
  // Remove event listeners
  if (containerElement.value) {
    containerElement.value.removeEventListener('keydown', handleKeyDown);
    containerElement.value.removeEventListener('mouseenter', handleMouseEnter);
    containerElement.value.removeEventListener('mouseleave', handleMouseLeave);
  }
});

// Apply CSS variables manually for Vue 3.3.0 compatibility
watchEffect(() => {
  if (!containerElement.value) return;
  
  const element = containerElement.value;
  element.style.setProperty('--carousel-primary-color', props.primaryColor);
  element.style.setProperty('--carousel-bg-color', props.bgColor);
  element.style.setProperty('--carousel-text-color', props.textColor);
  element.style.setProperty('--carousel-roundness', `${props.roundness}px`);
  element.style.setProperty('--carousel-speed', `${props.speed}ms`);
  element.style.setProperty('--carousel-space-between', `${props.spaceBetween}px`);
});
</script>

<style scoped>
/* Performance-optimized carousel styles with GPU acceleration */
.carousel-container {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  will-change: transform;
  contain: layout style paint;
  isolation: isolate;
}

.carousel-wrapper {
  will-change: transform;
  contain: layout style paint;
}

.carousel-track {
  will-change: transform;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  perspective: 1000px;
}

.carousel-slide {
  will-change: transform, opacity;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  contain: layout style paint;
}

/* Enhanced navigation buttons with better accessibility */
.carousel-nav-btn {
  will-change: transform, opacity;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  user-select: none;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  min-width: 44px;
  min-height: 44px;
}

.carousel-nav-btn:hover {
  transform: scale(1.1) translateZ(0);
}

.carousel-nav-btn:active {
  transform: scale(0.95) translateZ(0);
}

.carousel-nav-btn:focus-visible {
  outline: 2px solid var(--carousel-primary-color, #6366f1);
  outline-offset: 2px;
}

.carousel-nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
  transform: scale(1) translateZ(0);
}

/* Enhanced dots with better touch targets */
.carousel-dot {
  cursor: pointer;
  will-change: transform, opacity;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  border: none;
  outline: none;
  min-width: 24px;
  min-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.carousel-dot::before {
  content: '';
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: inherit;
  transition: inherit;
}

.carousel-dot:hover {
  transform: scale(1.2) translateZ(0);
}

.carousel-dot:focus-visible {
  outline: 2px solid var(--carousel-primary-color, #6366f1);
  outline-offset: 2px;
}

.carousel-dot:active {
  transform: scale(0.9) translateZ(0);
}

/* Play button enhancements */
.carousel-play-btn {
  will-change: transform;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;
  min-height: 32px;
  font-weight: 500;
}

.carousel-play-btn:focus-visible {
  outline: 2px solid var(--carousel-primary-color, #6366f1);
  outline-offset: 2px;
}

.carousel-play-btn:active {
  transform: scale(0.95) translateZ(0);
}

/* Demo slide enhancements */
.demo-slide {
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  will-change: transform;
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

/* Performance optimizations */
.transform-gpu {
  transform: translateZ(0);
  will-change: transform;
}

/* Touch feedback */
.carousel-container.cursor-grabbing {
  cursor: grabbing !important;
}

.carousel-container.cursor-grabbing * {
  cursor: grabbing !important;
  user-select: none !important;
}

/* Loading states */
.carousel-slide[aria-hidden="true"] {
  visibility: hidden;
  pointer-events: none;
}

.carousel-slide img[loading="lazy"] {
  transition: opacity 0.3s ease;
}

.carousel-slide img[loading="lazy"]:not([src]) {
  opacity: 0;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .carousel-track,
  .carousel-slide,
  .carousel-nav-btn,
  .carousel-dot,
  .carousel-play-btn {
    transition: none !important;
    animation: none !important;
  }
  
  .demo-slide .animate-pulse {
    animation: none !important;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .carousel-nav-btn {
    border: 2px solid currentColor !important;
    background-color: ButtonFace !important;
    color: ButtonText !important;
  }
  
  .carousel-dot {
    border: 2px solid currentColor !important;
  }
  
  .carousel-play-btn {
    border: 2px solid currentColor !important;
    background-color: ButtonFace !important;
    color: ButtonText !important;
  }
}

/* Dark mode optimizations */
@media (prefers-color-scheme: dark) {
  .carousel-container {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
}

/* Mobile touch optimizations */
@media (hover: none) and (pointer: coarse) {
  .carousel-nav-btn {
    min-width: 48px;
    min-height: 48px;
  }
  
  .carousel-dot {
    min-width: 32px;
    min-height: 32px;
  }
  
  .carousel-dot::before {
    width: 16px;
    height: 16px;
  }
}

/* Screen reader only content */
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

/* 3D effects for cube transition */
.carousel-track[data-effect="cube"] .carousel-slide {
  transform-origin: center center;
}

.carousel-track[data-effect="cube"] .carousel-slide:nth-child(even) {
  transform: rotateY(90deg) translateZ(var(--carousel-width, 300px));
}

.carousel-track[data-effect="cube"] .carousel-slide:nth-child(odd) {
  transform: rotateY(-90deg) translateZ(var(--carousel-width, 300px));
}

/* Coverflow effect */
.carousel-track[data-effect="coverflow"] .carousel-slide {
  transform-origin: center center;
}

.carousel-track[data-effect="coverflow"] .carousel-slide:not(.active) {
  transform: perspective(1000px) rotateY(45deg) scale(0.8);
  opacity: 0.7;
}

/* Fade effect */
.carousel-track[data-effect="fade"] .carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.carousel-track[data-effect="fade"] .carousel-slide:not(.active) {
  opacity: 0;
  pointer-events: none;
}

/* CSS variables for dynamic theming */
.carousel-container {
  --carousel-border-radius: var(--carousel-roundness, 8px);
  --carousel-transition-speed: var(--carousel-speed, 300ms);
  --carousel-gap: var(--carousel-space-between, 0px);
}
</style>
