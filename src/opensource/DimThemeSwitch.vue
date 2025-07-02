<template>
  <!-- Documentation Mode -->
  <div v-if="isDocs" class="DUIMX-docs prose prose-purple max-w-none">
    <div class="mb-6 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4">
      <h2 class="mb-2 text-2xl font-bold text-purple-300">🌓 DUIMX Theme Switch</h2>
      <p class="text-purple-200">Modern theme toggle component with smooth animations, multiple styles, and system preference detection.</p>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">✨ Features</h3>
    <ul class="mb-6 space-y-2 text-purple-200">
      <li>🌙 <strong>Dark/Light Toggle</strong> - Smooth theme switching with animations</li>
      <li>🖥️ <strong>System Detection</strong> - Auto-detect system theme preference</li>
      <li>🎨 <strong>Custom Icons</strong> - Configurable light/dark mode icons</li>
      <li>⚡ <strong>Smooth Transitions</strong> - Elegant animation between states</li>
      <li>📱 <strong>Touch Friendly</strong> - Perfect for mobile interactions</li>
      <li>♿ <strong>Accessible</strong> - Keyboard navigation and ARIA support</li>
      <li>🔧 <strong>Fully Reactive</strong> - Responds to all layout and theme changes</li>
    </ul>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">🎯 Usage Example</h3>
    <div class="mb-6 rounded-lg border border-purple-500/30 bg-slate-800/50 p-4">
      <pre class="text-sm text-purple-200"><code>&lt;DimThemeSwitch 
  v-model="currentTheme"
  :includeSystem="true"
  lightIcon="☀️"
  darkIcon="🌙"
  systemIcon="🖥️"
  @change="handleThemeChange"
&gt;&lt;/DimThemeSwitch&gt;</code></pre>
    </div>

    <div class="mb-6 rounded-lg border border-purple-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4">
      <p class="text-center text-purple-200">
        <strong>🔗 Source Code:</strong> 
        <a href="https://github.com/drazzardaq/opensource/blob/master/src/opensource/DimThemeSwitch.vue" 
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
  <div v-else class="theme-switch-container" :style="containerStyles">
    <!-- Multi-option Theme Switch -->
    <div v-if="includeSystem" class="theme-options flex items-center gap-1" :style="optionsStyles">
      <button
        v-for="themeOption in themeOptions"
        :key="themeOption.value"
        @click="selectTheme(themeOption.value)"
        class="theme-option transition-all duration-200"
        :class="[
          roundnessClass,
          { 'active': currentTheme === themeOption.value }
        ]"
        :style="themeOptionStyles(themeOption.value)"
        :aria-label="`Switch to ${themeOption.label} theme`"
        :aria-pressed="currentTheme === themeOption.value"
      >
        <span class="theme-icon" :style="iconStyles">{{ themeOption.icon }}</span>
        <span v-if="!compact" class="theme-label ml-2 text-xs">{{ themeOption.label }}</span>
      </button>
    </div>

    <!-- Toggle Switch -->
    <div v-else class="theme-toggle-switch relative" :style="toggleStyles">
      <input
        :id="`theme-toggle-${$attrs.id || 'default'}`"
        v-model="isDarkMode"
        type="checkbox"
        class="sr-only"
        @change="toggleTheme"
        :aria-label="`Switch to ${isDarkMode ? 'light' : 'dark'} theme`"
      />
      <label
        :for="`theme-toggle-${$attrs.id || 'default'}`"
        class="toggle-label flex items-center justify-between cursor-pointer transition-all duration-300"
        :class="roundnessClass"
        :style="toggleLabelStyles"
      >
        <!-- Light Icon -->
        <span class="toggle-icon light-icon transition-all duration-300" :style="lightIconStyles">
          {{ lightIcon }}
        </span>
        
        <!-- Toggle Button -->
        <div class="toggle-button absolute transition-all duration-300" :style="toggleButtonStyles">
          <span class="toggle-current-icon" :style="currentIconStyles">
            {{ isDarkMode ? darkIcon : lightIcon }}
          </span>
        </div>
        
        <!-- Dark Icon -->
        <span class="toggle-icon dark-icon transition-all duration-300" :style="darkIconStyles">
          {{ darkIcon }}
        </span>
      </label>
    </div>

    <!-- Theme Label -->
    <div v-if="showLabel" class="theme-label-text mt-2 text-center text-sm" :style="labelTextStyles">
      {{ getCurrentThemeLabel() }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';

const props = defineProps({
  roundness: { type: Number, default: 8 },
  primaryColor: { type: String, default: '#6366f1' },
  bgColor: { type: String, default: '#ffffff' },
  textColor: { type: String, default: '#1f2937' },
  fontFamily: { type: String, default: 'inherit' },
  width: { type: Number, default: 120 },
  height: { type: Number, default: 40 },
  padding: { type: Number, default: 4 },
  margin: { type: Number, default: 8 },
  theme: { type: String, default: 'light' },
  compact: { type: Boolean, default: false },
  isDocs: { type: Boolean, default: false },
  
  // Theme switch specific props
  modelValue: { type: String, default: 'light' },
  includeSystem: { type: Boolean, default: false },
  lightIcon: { type: String, default: '☀️' },
  darkIcon: { type: String, default: '🌙' },
  systemIcon: { type: String, default: '🖥️' },
  showLabel: { type: Boolean, default: false }
});

const emit = defineEmits(['update:modelValue', 'change']);

// Reactive state
const currentTheme = ref(props.modelValue);
const isDarkMode = ref(props.modelValue === 'dark');

// Watch for external updates
watch(() => props.modelValue, (newValue) => {
  currentTheme.value = newValue;
  isDarkMode.value = newValue === 'dark';
});

// Computed properties
const roundnessClass = computed(() => {
  if (props.roundness <= 4) return 'rounded-sm';
  if (props.roundness <= 8) return 'rounded';
  if (props.roundness <= 12) return 'rounded-lg';
  if (props.roundness <= 20) return 'rounded-xl';
  return 'rounded-3xl';
});

const themeOptions = computed(() => [
  { value: 'light', label: 'Light', icon: props.lightIcon },
  { value: 'dark', label: 'Dark', icon: props.darkIcon },
  { value: 'system', label: 'System', icon: props.systemIcon }
]);

const containerStyles = computed(() => ({
  fontFamily: props.fontFamily,
  margin: `${props.margin}px`
}));

const optionsStyles = computed(() => ({
  backgroundColor: props.theme === 'light' ? '#f3f4f6' : '#374151',
  padding: `${props.padding}px`,
  borderRadius: `${props.roundness}px`
}));

const themeOptionStyles = (themeValue) => ({
  padding: props.compact ? '0.25rem 0.5rem' : '0.5rem 0.75rem',
  backgroundColor: currentTheme.value === themeValue ? props.primaryColor : 'transparent',
  color: currentTheme.value === themeValue ? 'white' : props.textColor,
  border: 'none',
  borderRadius: `${props.roundness * 0.75}px`,
  cursor: 'pointer',
  fontSize: props.compact ? '0.75rem' : '0.875rem'
});

const toggleStyles = computed(() => ({
  width: `${props.width}px`,
  height: `${props.height}px`
}));

const toggleLabelStyles = computed(() => ({
  width: '100%',
  height: '100%',
  backgroundColor: props.theme === 'light' ? '#e5e7eb' : '#4b5563',
  padding: `${props.padding}px`,
  position: 'relative'
}));

const toggleButtonStyles = computed(() => ({
  width: `${props.height - props.padding * 2}px`,
  height: `${props.height - props.padding * 2}px`,
  backgroundColor: 'white',
  borderRadius: `${props.roundness}px`,
  left: isDarkMode.value ? `${props.width - props.height + props.padding}px` : `${props.padding}px`,
  top: `${props.padding}px`,
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const iconStyles = computed(() => ({
  fontSize: props.compact ? '1rem' : '1.25rem'
}));

const lightIconStyles = computed(() => ({
  opacity: isDarkMode.value ? '0.5' : '1',
  fontSize: props.compact ? '0.875rem' : '1rem'
}));

const darkIconStyles = computed(() => ({
  opacity: isDarkMode.value ? '1' : '0.5',
  fontSize: props.compact ? '0.875rem' : '1rem'
}));

const currentIconStyles = computed(() => ({
  fontSize: props.compact ? '0.75rem' : '1rem'
}));

const labelTextStyles = computed(() => ({
  color: props.textColor,
  fontSize: props.compact ? '0.75rem' : '0.875rem'
}));

// Methods
const selectTheme = (themeValue) => {
  currentTheme.value = themeValue;
  isDarkMode.value = themeValue === 'dark';
  emit('update:modelValue', themeValue);
  emit('change', themeValue);
};

const toggleTheme = () => {
  const newTheme = isDarkMode.value ? 'dark' : 'light';
  currentTheme.value = newTheme;
  emit('update:modelValue', newTheme);
  emit('change', newTheme);
};

const getCurrentThemeLabel = () => {
  const option = themeOptions.value.find(opt => opt.value === currentTheme.value);
  return option ? option.label : 'Unknown';
};

const detectSystemTheme = () => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
};

// Lifecycle
onMounted(() => {
  if (currentTheme.value === 'system') {
    const systemTheme = detectSystemTheme();
    isDarkMode.value = systemTheme === 'dark';
  }
  
  // Listen for system theme changes
  if (typeof window !== 'undefined' && window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
      if (currentTheme.value === 'system') {
        isDarkMode.value = e.matches;
      }
    });
  }
});
</script>

<style scoped>
.theme-option:hover {
  transform: scale(1.05);
}

.theme-option:focus {
  outline: 2px solid rgba(99, 102, 241, 0.4);
  outline-offset: 2px;
}

.theme-option.active {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.toggle-label:focus-within {
  outline: 2px solid rgba(99, 102, 241, 0.4);
  outline-offset: 2px;
}

.toggle-button {
  transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.toggle-icon {
  z-index: 1;
  position: relative;
  pointer-events: none;
}

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
</style>
