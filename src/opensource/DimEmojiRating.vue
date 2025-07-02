<template>
  <!-- Documentation Mode -->
  <div v-if="isDocs" class="DUIMX-docs prose prose-purple max-w-none">
    <div class="mb-6 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4">
      <h2 class="mb-2 text-2xl font-bold text-purple-300">😊 DUIMX Emoji Rating</h2>
      <p class="text-purple-200">Interactive emoji-based rating component with hover effects, animations, and customizable emoji sets.</p>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">✨ Features</h3>
    <ul class="mb-6 space-y-2 text-purple-200">
      <li>😀 <strong>Emoji Ratings</strong> - Fun and intuitive emoji-based rating system</li>
      <li>🎨 <strong>Hover Effects</strong> - Interactive preview on hover</li>
      <li>⚡ <strong>Smooth Animations</strong> - Engaging transitions and feedback</li>
      <li>🎯 <strong>Custom Emoji Sets</strong> - Use different emoji themes</li>
      <li>📱 <strong>Touch Friendly</strong> - Perfect for mobile interactions</li>
      <li>♿ <strong>Accessible</strong> - Keyboard navigation and ARIA support</li>
      <li>🔧 <strong>Fully Reactive</strong> - Responds to all layout and theme changes</li>
    </ul>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">🎯 Usage Example</h3>
    <div class="mb-6 rounded-lg border border-purple-500/30 bg-slate-800/50 p-4">
      <pre class="text-sm text-purple-200"><code>&lt;DimEmojiRating 
  v-model="rating"
  :emojis="['😡', '😞', '😐', '😊', '🤩']"
  :labels="['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']"
  :showLabel="true"
  theme="dark"
&gt;&lt;/DimEmojiRating&gt;</code></pre>
    </div>

    <div class="mb-6 rounded-lg border border-purple-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4">
      <p class="text-center text-purple-200">
        <strong>🔗 Source Code:</strong> 
        <a href="https://github.com/drazzardaq/opensource/blob/master/src/opensource/DimEmojiRating.vue" 
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
  <div v-else class="emoji-rating-container" :style="containerStyles">
    <!-- Title -->
    <div v-if="title" class="rating-title mb-4 text-center font-medium" :style="titleStyles">
      {{ title }}
    </div>

    <!-- Emoji Rating -->
    <div class="emoji-rating flex justify-center items-center gap-2" :style="ratingStyles">
      <button
        v-for="(emoji, index) in ratingEmojis"
        :key="index"
        @click="selectRating(index + 1)"
        @mouseenter="hoverRating = index + 1"
        @mouseleave="hoverRating = 0"
        @keydown="handleKeydown"
        class="emoji-button transition-all duration-200 focus:outline-none"
        :class="[
          'rounded-full',
          { 'animate-bounce': currentRating === index + 1 && justSelected }
        ]"
        :style="emojiButtonStyles(index + 1)"
        :aria-label="`Rate ${index + 1} out of ${ratingEmojis.length}${labels[index] ? ': ' + labels[index] : ''}`"
        :aria-pressed="currentRating === index + 1"
        tabindex="0"
      >
        <span class="emoji-icon" :style="emojiIconStyles">{{ emoji }}</span>
      </button>
    </div>

    <!-- Rating Label -->
    <div v-if="showLabel && (currentRating > 0 || hoverRating > 0)" class="rating-label mt-3 text-center transition-all duration-200" :style="labelStyles">
      {{ getCurrentLabel() }}
    </div>

    <!-- Rating Value Display -->
    <div v-if="showValue" class="rating-value mt-2 text-center text-sm" :style="valueStyles">
      {{ currentRating }}/{{ ratingEmojis.length }}
    </div>

    <!-- Reset Button -->
    <div v-if="showReset && currentRating > 0" class="rating-reset mt-3 text-center">
      <button 
        @click="resetRating"
        class="reset-btn px-3 py-1 text-xs rounded transition-all"
        :style="resetBtnStyles"
      >
        🔄 Reset
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  roundness: { type: Number, default: 8 },
  primaryColor: { type: String, default: '#6366f1' },
  bgColor: { type: String, default: '#ffffff' },
  textColor: { type: String, default: '#1f2937' },
  fontFamily: { type: String, default: 'inherit' },
  width: { type: Number, default: 350 },
  height: { type: Number, default: 120 },
  padding: { type: Number, default: 16 },
  margin: { type: Number, default: 8 },
  theme: { type: String, default: 'light' },
  compact: { type: Boolean, default: false },
  isDocs: { type: Boolean, default: false },
  
  // Rating-specific props
  modelValue: { type: Number, default: 0 },
  emojis: { 
    type: Array, 
    default: () => ['😡', '😞', '😐', '😊', '🤩']
  },
  labels: { 
    type: Array, 
    default: () => ['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']
  },
  title: { type: String, default: 'How was your experience?' },
  showLabel: { type: Boolean, default: true },
  showValue: { type: Boolean, default: false },
  showReset: { type: Boolean, default: true }
});

const emit = defineEmits(['update:modelValue', 'change']);

// Reactive state
const currentRating = ref(props.modelValue);
const hoverRating = ref(0);
const justSelected = ref(false);

// Watch for external updates
watch(() => props.modelValue, (newValue) => {
  currentRating.value = newValue;
});

// Computed properties
const ratingEmojis = computed(() => props.emojis);

const containerStyles = computed(() => ({
  fontFamily: props.fontFamily,
  maxWidth: `${props.width}px`,
  margin: `${props.margin}px`,
  padding: `${props.padding}px`,
  backgroundColor: props.bgColor,
  borderRadius: `${props.roundness}px`
}));

const titleStyles = computed(() => ({
  color: props.textColor,
  fontSize: props.compact ? '1rem' : '1.25rem'
}));

const ratingStyles = computed(() => ({
  gap: props.compact ? '0.5rem' : '0.75rem'
}));

const emojiButtonStyles = (index) => ({
  padding: props.compact ? '0.5rem' : '0.75rem',
  fontSize: props.compact ? '1.5rem' : '2rem',
  backgroundColor: getEmojiBackground(index),
  border: `2px solid ${getEmojiBorder(index)}`,
  borderRadius: '50%',
  cursor: 'pointer',
  transform: getEmojiTransform(index),
  boxShadow: getEmojiShadow(index)
});

const emojiIconStyles = computed(() => ({
  display: 'block',
  lineHeight: 1
}));

const labelStyles = computed(() => ({
  color: props.primaryColor,
  fontSize: props.compact ? '0.875rem' : '1rem',
  fontWeight: '500'
}));

const valueStyles = computed(() => ({
  color: props.textColor + '80'
}));

const resetBtnStyles = computed(() => ({
  backgroundColor: props.theme === 'light' ? '#f3f4f6' : '#374151',
  color: props.textColor,
  border: `1px solid ${props.primaryColor}30`,
  borderRadius: `${props.roundness / 2}px`
}));

// Helper methods
const getEmojiBackground = (index) => {
  const isSelected = currentRating.value === index;
  const isHovered = hoverRating.value === index;
  
  if (isSelected || isHovered) {
    return props.primaryColor + '20';
  }
  return props.theme === 'light' ? '#f9fafb' : '#1f2937';
};

const getEmojiBorder = (index) => {
  const isSelected = currentRating.value === index;
  const isHovered = hoverRating.value === index;
  
  if (isSelected) return props.primaryColor;
  if (isHovered) return props.primaryColor + '60';
  return props.theme === 'light' ? '#e5e7eb' : '#374151';
};

const getEmojiTransform = (index) => {
  const isSelected = currentRating.value === index;
  const isHovered = hoverRating.value === index;
  
  if (isSelected || isHovered) return 'scale(1.1)';
  return 'scale(1)';
};

const getEmojiShadow = (index) => {
  const isSelected = currentRating.value === index;
  
  if (isSelected) {
    return `0 4px 12px ${props.primaryColor}40`;
  }
  return '0 2px 4px rgba(0, 0, 0, 0.1)';
};

const getCurrentLabel = () => {
  const index = (hoverRating.value || currentRating.value) - 1;
  return props.labels[index] || '';
};

// Methods
const selectRating = (rating) => {
  currentRating.value = rating;
  justSelected.value = true;
  
  // Reset animation after a short delay
  setTimeout(() => {
    justSelected.value = false;
  }, 600);
  
  emit('update:modelValue', rating);
  emit('change', rating);
};

const resetRating = () => {
  currentRating.value = 0;
  hoverRating.value = 0;
  emit('update:modelValue', 0);
  emit('change', 0);
};

const handleKeydown = (event) => {
  const maxRating = ratingEmojis.value.length;
  
  if (event.key >= '1' && event.key <= maxRating.toString()) {
    selectRating(parseInt(event.key));
  } else if (event.key === 'Escape' || event.key === 'Backspace') {
    resetRating();
  } else if (event.key === 'ArrowLeft' && currentRating.value > 1) {
    selectRating(currentRating.value - 1);
  } else if (event.key === 'ArrowRight' && currentRating.value < maxRating) {
    selectRating(currentRating.value + 1);
  }
};
</script>

<style scoped>
.emoji-button:hover {
  transform: scale(1.1);
}

.emoji-button:focus {
  outline: 2px solid rgba(99, 102, 241, 0.4);
  outline-offset: 2px;
}

.emoji-button:active {
  transform: scale(0.95);
}

@keyframes bounce {
  0%, 100% { transform: scale(1.1); }
  50% { transform: scale(1.2); }
}

.animate-bounce {
  animation: bounce 0.6s ease-in-out;
}

.rating-label {
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.reset-btn:hover {
  opacity: 0.8;
  transform: scale(1.05);
}
</style>
