<template>
  <div class="custom-color-picker relative">
    <!-- Color Display & Input -->
    <div class="color-display-group">
      <!-- Visual Color Display -->
      <div 
        class="color-display"
        :style="{ backgroundColor: modelValue }"
        @click="togglePicker"
      >
        <div class="color-display-overlay">
          <font-awesome-icon :icon="['fas', 'palette']" class="text-white/80" />
        </div>
      </div>
      
      <!-- Hex Input -->
      <input 
        :value="modelValue" 
        @input="$emit('update:modelValue', $event.target.value)"
        type="text" 
        class="color-input" 
        placeholder="#6366f1"
        maxlength="7"
        pattern="^#[0-9A-Fa-f]{6}$"
      />
      
      <!-- Native Color Picker (Hidden) -->
      <input 
        ref="nativeColorPicker"
        :value="modelValue" 
        @input="$emit('update:modelValue', $event.target.value)"
        type="color" 
        class="hidden"
      />
    </div>

    <!-- Custom Color Picker Dropdown -->
    <Transition name="color-picker">
      <div v-if="showPicker" class="color-picker-dropdown">
        <!-- Preset Colors -->
        <div class="preset-colors">
          <div class="preset-colors-label">Popular Colors</div>
          <div class="preset-colors-grid">
            <div 
              v-for="color in presetColors" 
              :key="color.value"
              class="preset-color"
              :style="{ backgroundColor: color.value }"
              :class="{ 'active': modelValue === color.value }"
              @click="selectColor(color.value)"
              :title="color.name"
            >
              <div v-if="modelValue === color.value" class="preset-color-check">
                <font-awesome-icon :icon="['fas', 'check']" class="text-white text-xs" />
              </div>
            </div>
          </div>
        </div>

        <!-- Color History -->
        <div v-if="colorHistory.length > 0" class="color-history">
          <div class="preset-colors-label">Recent Colors</div>
          <div class="preset-colors-grid">
            <div 
              v-for="(color, index) in colorHistory.slice(0, 8)" 
              :key="`history-${index}`"
              class="preset-color"
              :style="{ backgroundColor: color }"
              :class="{ 'active': modelValue === color }"
              @click="selectColor(color)"
              :title="`Recent: ${color}`"
            >
              <div v-if="modelValue === color" class="preset-color-check">
                <font-awesome-icon :icon="['fas', 'check']" class="text-white text-xs" />
              </div>
            </div>
          </div>
        </div>

        <!-- Gradient Colors -->
        <div class="gradient-colors">
          <div class="preset-colors-label">Gradients</div>
          <div class="gradient-colors-grid">
            <div 
              v-for="gradient in gradientPresets" 
              :key="gradient.name"
              class="gradient-preset"
              :style="{ background: gradient.value }"
              @click="selectColor(gradient.primary)"
              :title="gradient.name"
            >
            </div>
          </div>
        </div>

        <!-- Advanced Controls -->
        <div class="advanced-controls">
          <button 
            @click="openNativePicker"
            class="advanced-btn"
          >
            <font-awesome-icon :icon="['fas', 'eyedropper']" class="mr-2" />
            Advanced Picker
          </button>
          <button 
            @click="randomColor"
            class="advanced-btn"
          >
            <font-awesome-icon :icon="['fas', 'dice']" class="mr-2" />
            Random
          </button>
        </div>
      </div>
    </Transition>

    <!-- Backdrop -->
    <div 
      v-if="showPicker" 
      class="color-picker-backdrop"
      @click="closePicker"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps({
  modelValue: {
    type: String,
    default: '#6366f1'
  }
});

const emit = defineEmits(['update:modelValue']);

const showPicker = ref(false);
const nativeColorPicker = ref(null);
const colorHistory = ref(JSON.parse(localStorage.getItem('DUIMX-color-history') || '[]'));

// Preset color palettes
const presetColors = [
  // Primary colors
  { name: 'Indigo', value: '#6366f1' },
  { name: 'Purple', value: '#8b5cf6' },
  { name: 'Pink', value: '#ec4899' },
  { name: 'Rose', value: '#f43f5e' },
  { name: 'Red', value: '#ef4444' },
  { name: 'Orange', value: '#f97316' },
  { name: 'Amber', value: '#f59e0b' },
  { name: 'Yellow', value: '#eab308' },
  { name: 'Lime', value: '#84cc16' },
  { name: 'Green', value: '#22c55e' },
  { name: 'Emerald', value: '#10b981' },
  { name: 'Teal', value: '#14b8a6' },
  { name: 'Cyan', value: '#06b6d4' },
  { name: 'Sky', value: '#0ea5e9' },
  { name: 'Blue', value: '#3b82f6' },
  { name: 'Violet', value: '#7c3aed' },
  
  // Neutral colors
  { name: 'Gray', value: '#6b7280' },
  { name: 'Slate', value: '#64748b' },
  { name: 'Zinc', value: '#71717a' },
  { name: 'Neutral', value: '#737373' },
  { name: 'Stone', value: '#78716c' },
  
  // Special colors
  { name: 'Black', value: '#000000' },
  { name: 'White', value: '#ffffff' },
  { name: 'Transparent', value: 'transparent' }
];

const gradientPresets = [
  { name: 'Sunset', value: 'linear-gradient(45deg, #ff6b6b, #ffa500)', primary: '#ff6b6b' },
  { name: 'Ocean', value: 'linear-gradient(45deg, #0077be, #00a8cc)', primary: '#0077be' },
  { name: 'Forest', value: 'linear-gradient(45deg, #2d5016, #87a96b)', primary: '#2d5016' },
  { name: 'Purple Rain', value: 'linear-gradient(45deg, #8b5cf6, #ec4899)', primary: '#8b5cf6' },
  { name: 'Fire', value: 'linear-gradient(45deg, #ff4757, #ff9ff3)', primary: '#ff4757' },
  { name: 'Ice', value: 'linear-gradient(45deg, #74b9ff, #0984e3)', primary: '#74b9ff' }
];

const togglePicker = () => {
  showPicker.value = !showPicker.value;
};

const closePicker = () => {
  showPicker.value = false;
};

const selectColor = (color) => {
  // Add to history if it's a new color
  if (!colorHistory.value.includes(color)) {
    colorHistory.value.unshift(color);
    // Keep only last 12 colors
    colorHistory.value = colorHistory.value.slice(0, 12);
    // Save to localStorage
    localStorage.setItem('DUIMX-color-history', JSON.stringify(colorHistory.value));
  }
  
  emit('update:modelValue', color);
  closePicker();
};

const openNativePicker = () => {
  nativeColorPicker.value?.click();
};

const randomColor = () => {
  const randomHex = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  emit('update:modelValue', randomHex);
};

// Close picker on escape key
const handleKeyDown = (event) => {
  if (event.key === 'Escape' && showPicker.value) {
    closePicker();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown);
});
</script>

<style scoped>
.custom-color-picker {
  position: relative;
  z-index: 10;
}

.color-display-group {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.color-display {
  width: 3rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  border: 2px solid rgba(168, 85, 247, 0.3);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.2s ease;
  background-image: 
    linear-gradient(45deg, #ccc 25%, transparent 25%),
    linear-gradient(-45deg, #ccc 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #ccc 75%),
    linear-gradient(-45deg, transparent 75%, #ccc 75%);
  background-size: 8px 8px;
  background-position: 0 0, 0 4px, 4px -4px, -4px 0px;
}

.color-display:hover {
  border-color: rgba(168, 85, 247, 0.6);
  transform: scale(1.05);
}

.color-display-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.1);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.color-display:hover .color-display-overlay {
  opacity: 1;
}

.color-input {
  flex: 1;
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid rgba(168, 85, 247, 0.3);
  border-radius: 0.5rem;
  padding: 0.75rem;
  color: rgba(226, 232, 240, 1);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  transition: all 0.2s ease;
}

.color-input:focus {
  outline: none;
  border-color: rgba(168, 85, 247, 0.6);
  box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
  background: rgba(30, 41, 59, 0.9);
}

.color-picker-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 0.5rem;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(168, 85, 247, 0.3);
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
  z-index: 50;
  min-width: 280px;
}

.color-picker-backdrop {
  position: fixed;
  inset: 0;
  z-index: 40;
}

.preset-colors-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: rgba(168, 85, 247, 1);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.preset-colors-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.preset-color {
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}

.preset-color:hover {
  border-color: rgba(168, 85, 247, 0.6);
  transform: scale(1.1);
}

.preset-color.active {
  border-color: rgba(168, 85, 247, 1);
  box-shadow: 0 0 0 2px rgba(168, 85, 247, 0.3);
}

.preset-color-check {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
}

.gradient-colors {
  margin-bottom: 1rem;
}

.color-history {
  margin-bottom: 1rem;
}

.gradient-colors-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
}

.gradient-preset {
  height: 2.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.2s ease;
}

.gradient-preset:hover {
  border-color: rgba(168, 85, 247, 0.6);
  transform: scale(1.05);
}

.advanced-controls {
  display: flex;
  gap: 0.5rem;
}

.advanced-btn {
  flex: 1;
  padding: 0.5rem 0.75rem;
  background: rgba(168, 85, 247, 0.1);
  border: 1px solid rgba(168, 85, 247, 0.3);
  border-radius: 0.5rem;
  color: rgba(168, 85, 247, 1);
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.advanced-btn:hover {
  background: rgba(168, 85, 247, 0.2);
  border-color: rgba(168, 85, 247, 0.5);
}

/* Transition animations */
.color-picker-enter-active,
.color-picker-leave-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.color-picker-enter-from,
.color-picker-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}
</style>
