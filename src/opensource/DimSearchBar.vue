<template>
  <!-- Documentation Mode -->
  <div v-if="isDocs" class="DUIMX-docs prose prose-purple max-w-none">
    <div class="mb-6 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4">
      <h2 class="mb-2 text-2xl font-bold text-purple-300">🔍 DUIMX Search Bar</h2>
      <p class="text-purple-200">A modern, fully reactive search component with auto-suggestions, smart theming, and seamless UX.</p>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">✨ Features</h3>
    <ul class="mb-6 space-y-2 text-purple-200">
      <li>🎨 <strong>Unified Prop Interface</strong> - Consistent with all DUIMX components</li>
      <li>🌓 <strong>Smart Theme Detection</strong> - Auto-adapts based on background color or theme prop</li>
      <li>💡 <strong>Auto-Suggestions</strong> - Real-time filtered suggestions with keyboard navigation</li>
      <li>🎯 <strong>Reactive Controls</strong> - Responds to all layout and style changes instantly</li>
      <li>🔧 <strong>Fully Customizable</strong> - Colors, fonts, sizes, and behavior</li>
      <li>📱 <strong>Mobile Friendly</strong> - Touch-optimized with responsive design</li>
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
          <tr><td class="border border-purple-500/30 p-2 font-mono">placeholder</td><td class="border border-purple-500/30 p-2">String</td><td class="border border-purple-500/30 p-2">'Search anything...'</td><td class="border border-purple-500/30 p-2">Input placeholder text</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">suggestions</td><td class="border border-purple-500/30 p-2">Array</td><td class="border border-purple-500/30 p-2">Default list</td><td class="border border-purple-500/30 p-2">Array of suggestion strings</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">theme</td><td class="border border-purple-500/30 p-2">String</td><td class="border border-purple-500/30 p-2">'light'</td><td class="border border-purple-500/30 p-2">Theme mode (light/dark/system)</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">compact</td><td class="border border-purple-500/30 p-2">Boolean</td><td class="border border-purple-500/30 p-2">false</td><td class="border border-purple-500/30 p-2">Compact size mode</td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">🎯 Usage Examples</h3>
    <div class="mb-6 space-y-4">
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/50 p-4">
        <h4 class="mb-2 text-lg font-semibold text-purple-300">Basic Search Bar</h4>
        <pre class="text-sm text-purple-200"><code>&lt;DimSearchBar 
  placeholder="Search products..."
  @search="handleSearch"
  @input="handleInput"
/&gt;</code></pre>
      </div>
      
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/50 p-4">
        <h4 class="mb-2 text-lg font-semibold text-purple-300">Themed with Custom Suggestions</h4>
        <pre class="text-sm text-purple-200"><code>&lt;DimSearchBar 
  placeholder="Search documentation..."
  theme="dark"
  :roundness="16"
  primaryColor="#10b981"
  bgColor="#1f2937"
  textColor="#f3f4f6"
  :suggestions="['API Reference', 'Components', 'Examples']"
  @search="handleSearch"
  @suggestion-select="handleSuggestion"
/&gt;</code></pre>
      </div>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">🎨 Smart Theming</h3>
    <p class="mb-4 text-purple-200">The search bar automatically detects if your background is dark or light and adjusts its styling accordingly. You can also explicitly set the theme.</p>
    
    <div class="mb-6 rounded-lg border border-purple-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4">
      <p class="text-center text-purple-200">
        <strong>💡 DUIMX Tip:</strong> The search bar becomes reactive to all control changes in the playground - try adjusting the theme, colors, or size!
      </p>
    </div>

    <div class="text-center text-xs text-purple-400 opacity-75">
      Part of the <strong>DUIMX</strong> component library 🚀
    </div>
  </div>
  
  <!-- Normal Component Mode -->
  <div v-else 
    ref="searchBarRef"
    class="dim-search-bar"
    :class="[
      roundnessClass, 
      themeClasses.bg, 
      themeClasses.text, 
      'relative', 
      'transition-all', 
      'duration-200',
      'group',
      { 'opacity-50 cursor-not-allowed': props.disabled },
      { 'ring-2 ring-opacity-50': isFocused },
      { 'scale-105': isFocused && !props.disabled }
    ]"
    :style="searchBarStyles"
  >
    <!-- CSS Variables element -->
    <div ref="cssVariablesRef" class="absolute inset-0 pointer-events-none opacity-0"></div>
    
    <!-- Version Overlay -->
    <div class="absolute top-0 right-0 z-50 bg-purple-600/80 backdrop-blur-sm rounded-bl-lg px-2 py-1 pointer-events-none">
      <span class="text-xs text-white/80">v0.9.7</span>
    </div>
    
    <div class="search-wrapper relative flex items-center">
      <!-- Search Icon with Loading State -->
      <div class="search-icon absolute left-3 z-10 flex items-center justify-center">
        <div v-if="isLoading || props.loading" class="animate-spin">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </div>
        <font-awesome-icon 
          v-else
          :icon="['fas', 'search']" 
          class="w-5 h-5 transition-all duration-200" 
          :class="{ 'text-opacity-60': !isFocused }"
          :style="{ color: props.textColor }" 
        />
      </div>
      
      <!-- Enhanced Search Input -->
      <input
        ref="searchInputRef"
        v-model="searchValue"
        :placeholder="props.placeholder"
        :disabled="props.disabled"
        class="search-input w-full pl-10 pr-20 py-3 bg-transparent border-0 outline-none transition-all duration-200"
        :class="{
          'cursor-not-allowed': props.disabled,
          'text-opacity-60': props.disabled
        }"
        :style="{ 
          fontFamily: props.fontFamily,
          color: props.textColor,
          fontSize: props.compact ? '14px' : '16px'
        }"
        :aria-label="props.placeholder"
        :aria-expanded="showSuggestions"
        :aria-haspopup="true"
        :aria-activedescendant="activeSuggestionIndex >= 0 ? `suggestion-${activeSuggestionIndex}` : null"
        autocomplete="off"
        role="combobox"
        @input="searchValue = $event.target.value"
        @keydown="handleKeydown"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      
      <!-- Clear Button with Animation -->
      <Transition name="fade" mode="out-in">
        <button
          v-if="searchValue && !props.disabled"
          @click="clearSearch"
          class="clear-button absolute right-12 z-10 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-110"
          :style="{ color: props.textColor }"
          aria-label="Clear search"
          type="button"
        >
          <font-awesome-icon :icon="['fas', 'times']" class="w-4 h-4" />
        </button>
      </Transition>
      
      <!-- Enhanced Search Button -->
      <button
        @click="handleSearch"
        :disabled="props.disabled || !searchValue.trim()"
        class="search-button absolute right-2 z-10 p-2 rounded transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50"
        :class="{
          'opacity-50 cursor-not-allowed': props.disabled || !searchValue.trim(),
          'hover:shadow-lg': !props.disabled && searchValue.trim()
        }"
        :style="{ 
          backgroundColor: props.primaryColor, 
          color: 'white',
          '--tw-ring-color': props.primaryColor
        }"
        aria-label="Search"
        type="button"
      >
        <font-awesome-icon :icon="['fas', 'search']" class="w-4 h-4" />
      </button>
    </div>
    
    <!-- Enhanced Search Border Effect -->
    <div 
      class="search-border absolute inset-0 pointer-events-none transition-all duration-300 ease-out"
      :class="[roundnessClass, themeClasses.border]"
      :style="{ 
        border: `${props.borderWidth || 1}px solid ${props.primaryColor}${isFocused ? '80' : '40'}`,
        boxShadow: isFocused ? `0 0 0 3px ${props.primaryColor}20` : 'none',
        transform: isFocused ? 'scale(1.02)' : 'scale(1)'
      }"
    ></div>
    
    <!-- Enhanced Suggestions Dropdown -->
    <Transition name="suggestions" mode="out-in">
      <div
        v-if="showSuggestions && filteredSuggestions.length > 0 && !props.disabled"
        ref="suggestionsRef"
        class="suggestions-dropdown absolute top-full left-0 right-0 mt-2 z-30 max-h-64 overflow-y-auto backdrop-blur-xl"
        :class="[
          roundnessClass, 
          themeClasses.bg, 
          themeClasses.border, 
          'border', 
          'shadow-2xl',
          'ring-1',
          'ring-black',
          'ring-opacity-5'
        ]"
        role="listbox"
        :aria-label="`${filteredSuggestions.length} search suggestions`"
      >
        <div
          v-for="(suggestion, index) in filteredSuggestions"
          :key="`${suggestion.text}-${index}`"
          :id="`suggestion-${index}`"
          class="suggestion-item flex items-center gap-3 px-4 py-3 cursor-pointer transition-all duration-150 border-b border-opacity-10 last:border-0"
          :class="[
            themeClasses.suggestionHover,
            {
              'bg-opacity-80': index === activeSuggestionIndex,
              'ring-2 ring-opacity-50': index === activeSuggestionIndex,
              'scale-[1.02]': index === activeSuggestionIndex
            }
          ]"
          :style="{ 
            backgroundColor: index === activeSuggestionIndex ? `${props.primaryColor}25` : 'transparent',
            color: props.textColor,
            fontFamily: props.fontFamily,
            '--tw-ring-color': index === activeSuggestionIndex ? props.primaryColor : 'transparent'
          }"
          role="option"
          :aria-selected="index === activeSuggestionIndex"
          @mousedown="handleSuggestionClick(suggestion.text)"
          @mouseenter="handleSuggestionMouseEnter(index)"
        >
          <!-- Suggestion Icon -->
          <div class="flex-shrink-0">
            <svg class="w-4 h-4 opacity-60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </div>
          
          <!-- Suggestion Text with Highlighting -->
          <span 
            class="flex-1 truncate"
            v-html="suggestion.highlighted"
          ></span>
          
          <!-- Match Score Badge (Development mode) -->
          <div v-if="$DEV" class="flex-shrink-0 text-xs opacity-40">
            {{ suggestion.score }}
          </div>
        </div>
        
        <!-- No Results Message -->
        <div v-if="searchValue && filteredSuggestions.length === 0" 
             class="px-4 py-3 text-center opacity-60"
             :style="{ color: props.textColor, fontFamily: props.fontFamily }">
          No suggestions found
        </div>
      </div>
    </Transition>
    
    <!-- Screen Reader Announcements -->
    <div class="sr-only" aria-live="polite" aria-atomic="true">
      <span v-if="showSuggestions && filteredSuggestions.length > 0">
        {{ filteredSuggestions.length }} suggestions available. Use arrow keys to navigate.
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick, watchEffect } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps({
  roundness: { type: Number, default: 8 },
  primaryColor: { type: String, default: '#6366f1' },
  bgColor: { type: String, default: '#ffffff' },
  textColor: { type: String, default: '#1f2937' },
  fontFamily: { type: String, default: 'inherit' },
  width: { type: Number, default: 320 },
  height: { type: Number, default: 48 },
  padding: { type: Number, default: 12 },
  margin: { type: Number, default: 8 },
  theme: { type: String, default: 'light' },
  compact: { type: Boolean, default: false },
  borderWidth: { type: Number, default: 1 },
  placeholder: { type: String, default: 'Search anything...' },
  suggestions: { type: Array, default: () => ['JavaScript tutorials', 'Vue.js components', 'React hooks', 'CSS animations', 'Web development'] },
  isDocs: { type: Boolean, default: false },
  // Performance and UX props
  debounceDelay: { type: Number, default: 300 },
  minSearchLength: { type: Number, default: 1 },
  maxSuggestions: { type: Number, default: 8 },
  autoComplete: { type: Boolean, default: true },
  clearOnEscape: { type: Boolean, default: true },
  highlightMatches: { type: Boolean, default: true },
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  autoFocus: { type: Boolean, default: false },
  selectOnTab: { type: Boolean, default: true }
});

const emit = defineEmits(['search', 'input', 'suggestion-select', 'focus', 'blur', 'clear']);

// Component refs
const searchInputRef = ref(null);
const searchBarRef = ref(null);
const suggestionsRef = ref(null);

// Reactive state with optimized performance
const searchValue = ref('');
const showSuggestions = ref(false);
const isFocused = ref(false);
const activeSuggestionIndex = ref(-1);
const isLoading = ref(false);
const searchHistory = ref([]);

// Debounce functionality for better performance
let debounceTimeout = null;

// CSS variables for manual reactivity (Vue 3.3.0 compatibility)
const cssVariablesRef = ref(null);

// Apply CSS variables manually for Vue 3.3.0 compatibility
watchEffect(() => {
  if (cssVariablesRef.value) {
    cssVariablesRef.value.style.setProperty('--primary-color', props.primaryColor);
    cssVariablesRef.value.style.setProperty('--bg-color', props.bgColor);
    cssVariablesRef.value.style.setProperty('--text-color', props.textColor);
    cssVariablesRef.value.style.setProperty('--font-family', props.fontFamily);
    cssVariablesRef.value.style.setProperty('--border-radius', `${props.roundness}px`);
    cssVariablesRef.value.style.setProperty('--width', `${props.width}px`);
    cssVariablesRef.value.style.setProperty('--height', `${props.height}px`);
    cssVariablesRef.value.style.setProperty('--padding', `${props.padding}px`);
    cssVariablesRef.value.style.setProperty('--margin', `${props.margin}px`);
  }
});

// Memoized computed properties for better performance
const roundnessClass = computed(() => {
  const roundnessMap = new Map([
    [0, 'rounded-none'],
    [4, 'rounded-sm'],
    [8, 'rounded'],
    [12, 'rounded-lg'],
    [16, 'rounded-xl'],
    [20, 'rounded-2xl'],
    [32, 'rounded-3xl']
  ]);
  
  const key = [...roundnessMap.keys()].find(threshold => props.roundness <= threshold);
  return roundnessMap.get(key) || 'rounded-3xl';
});

const themeClasses = computed(() => {
  // Enhanced theme detection with system preference support
  const isDark = props.theme === 'dark' || 
    (props.theme === 'system' && window.matchMedia?.('(prefers-color-scheme: dark)').matches) ||
    (props.bgColor && isDarkColor(props.bgColor));
    
  return {
    bg: isDark ? 'bg-slate-800/90' : 'bg-white/90',
    text: isDark ? 'text-slate-200' : 'text-gray-900',
    border: isDark ? 'border-slate-600/50' : 'border-gray-300/50',
    suggestion: isDark ? 'bg-slate-700/50' : 'bg-gray-50/50',
    suggestionHover: isDark ? 'hover:bg-slate-600/50' : 'hover:bg-gray-100/50'
  };
});

// Performance optimized color detection
const colorCache = new Map();
const isDarkColor = (color) => {
  if (colorCache.has(color)) {
    return colorCache.get(color);
  }
  
  try {
    const hex = color.replace('#', '');
    if (hex.length !== 6) return false;
    
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    const isDark = brightness < 128;
    
    colorCache.set(color, isDark);
    return isDark;
  } catch (e) {
    colorCache.set(color, false);
    return false;
  }
};

// Optimized search bar styles with caching
const searchBarStylesCache = ref({});
const searchBarStyles = computed(() => {
  const cacheKey = `${props.bgColor}-${props.textColor}-${props.fontFamily}-${props.width}-${props.height}-${props.padding}-${props.margin}`;
  
  if (searchBarStylesCache.value[cacheKey]) {
    return searchBarStylesCache.value[cacheKey];
  }
  
  const styles = {
    '--primary-color': props.primaryColor,
    '--bg-color': props.bgColor,
    '--text-color': props.textColor,
    '--font-family': props.fontFamily,
    '--border-radius': `${props.roundness}px`,
    '--width': `${props.width}px`,
    '--height': `${Math.max(props.height, 48)}px`,
    '--padding': `${props.padding}px`,
    '--margin': `${props.margin}px`,
    '--border-width': `${props.borderWidth}px`
  };
  
  searchBarStylesCache.value[cacheKey] = styles;
  return styles;
});

// Enhanced filtered suggestions with performance optimization and highlighting
const filteredSuggestions = computed(() => {
  if (!searchValue.value.trim() || searchValue.value.length < props.minSearchLength) {
    return [];
  }
  
  const query = searchValue.value.toLowerCase().trim();
  const filtered = props.suggestions
    .filter(suggestion => suggestion.toLowerCase().includes(query))
    .slice(0, props.maxSuggestions)
    .map(suggestion => ({
      text: suggestion,
      highlighted: props.highlightMatches ? highlightMatch(suggestion, query) : suggestion,
      score: getMatchScore(suggestion, query)
    }))
    .sort((a, b) => b.score - a.score);
    
  return filtered;
});

// Match scoring for better suggestion ranking
const getMatchScore = (text, query) => {
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  
  if (lowerText === lowerQuery) return 100;
  if (lowerText.startsWith(lowerQuery)) return 80;
  if (lowerText.includes(` ${lowerQuery}`)) return 60;
  if (lowerText.includes(lowerQuery)) return 40;
  return 0;
};

// Highlight matched text
const highlightMatch = (text, query) => {
  if (!query) return text;
  
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-800">$1</mark>');
};

// ARIA announcements for accessibility
const announceToScreenReader = (message) => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  setTimeout(() => document.body.removeChild(announcement), 1000);
};

// Debounced search input handler
const handleInputDebounced = (value) => {
  clearTimeout(debounceTimeout);
  
  debounceTimeout = setTimeout(() => {
    if (value !== searchValue.value) return; // Prevent stale updates
    
    emit('input', value);
    
    if (value.length >= props.minSearchLength && props.autoComplete) {
      showSuggestions.value = true;
      
      if (filteredSuggestions.value.length > 0) {
        announceToScreenReader(`${filteredSuggestions.value.length} suggestions available`);
      }
    } else {
      showSuggestions.value = false;
    }
  }, props.debounceDelay);
};

// Enhanced keyboard navigation
const handleKeydown = (event) => {
  const suggestions = filteredSuggestions.value;
  
  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault();
      if (!showSuggestions.value && suggestions.length > 0) {
        showSuggestions.value = true;
        activeSuggestionIndex.value = 0;
      } else {
        activeSuggestionIndex.value = Math.min(
          activeSuggestionIndex.value + 1,
          suggestions.length - 1
        );
      }
      scrollToActiveSuggestion();
      announceActiveSuggestion();
      break;
      
    case 'ArrowUp':
      event.preventDefault();
      activeSuggestionIndex.value = Math.max(activeSuggestionIndex.value - 1, -1);
      scrollToActiveSuggestion();
      announceActiveSuggestion();
      break;
      
    case 'Enter':
      event.preventDefault();
      if (activeSuggestionIndex.value >= 0 && suggestions[activeSuggestionIndex.value]) {
        selectSuggestion(suggestions[activeSuggestionIndex.value].text);
      } else {
        handleSearch();
      }
      break;
      
    case 'Tab':
      if (props.selectOnTab && activeSuggestionIndex.value >= 0 && suggestions[activeSuggestionIndex.value]) {
        event.preventDefault();
        selectSuggestion(suggestions[activeSuggestionIndex.value].text);
      }
      break;
      
    case 'Escape':
      event.preventDefault();
      if (showSuggestions.value) {
        showSuggestions.value = false;
        activeSuggestionIndex.value = -1;
      } else if (props.clearOnEscape && searchValue.value) {
        clearSearch();
      }
      searchInputRef.value?.focus();
      break;
  }
};

// Scroll to active suggestion for better UX
const scrollToActiveSuggestion = () => {
  nextTick(() => {
    if (suggestionsRef.value && activeSuggestionIndex.value >= 0) {
      const activeElement = suggestionsRef.value.children[activeSuggestionIndex.value];
      if (activeElement) {
        activeElement.scrollIntoView({
          block: 'nearest',
          behavior: 'smooth'
        });
      }
    }
  });
};

// Announce active suggestion for screen readers
const announceActiveSuggestion = () => {
  const suggestions = filteredSuggestions.value;
  if (activeSuggestionIndex.value >= 0 && suggestions[activeSuggestionIndex.value]) {
    const suggestion = suggestions[activeSuggestionIndex.value].text;
    announceToScreenReader(`${suggestion}, ${activeSuggestionIndex.value + 1} of ${suggestions.length}`);
  }
};

// Enhanced search functionality
const handleSearch = () => {
  if (searchValue.value.trim() && !props.disabled) {
    const query = searchValue.value.trim();
    
    // Add to search history
    if (!searchHistory.value.includes(query)) {
      searchHistory.value.unshift(query);
      searchHistory.value = searchHistory.value.slice(0, 10); // Keep last 10 searches
    }
    
    emit('search', query);
    showSuggestions.value = false;
    activeSuggestionIndex.value = -1;
    
    announceToScreenReader(`Searching for ${query}`);
  }
};

// Enhanced clear functionality
const clearSearch = () => {
  const previousValue = searchValue.value;
  searchValue.value = '';
  showSuggestions.value = false;
  activeSuggestionIndex.value = -1;
  
  emit('input', '');
  emit('clear', previousValue);
  
  nextTick(() => {
    searchInputRef.value?.focus();
  });
  
  announceToScreenReader('Search cleared');
};

// Enhanced suggestion selection
const selectSuggestion = (suggestion) => {
  searchValue.value = suggestion;
  showSuggestions.value = false;
  activeSuggestionIndex.value = -1;
  
  // Add to search history
  if (!searchHistory.value.includes(suggestion)) {
    searchHistory.value.unshift(suggestion);
    searchHistory.value = searchHistory.value.slice(0, 10);
  }
  
  emit('input', suggestion);
  emit('suggestion-select', suggestion);
  
  nextTick(() => {
    searchInputRef.value?.focus();
  });
  
  announceToScreenReader(`Selected ${suggestion}`);
};

// Enhanced focus handling
const handleFocus = () => {
  if (props.disabled) return;
  
  isFocused.value = true;
  emit('focus');
  
  if (filteredSuggestions.value.length > 0 && props.autoComplete) {
    showSuggestions.value = true;
  }
  
  announceToScreenReader('Search input focused');
};

// Enhanced blur handling with delay for suggestion clicks
const handleBlur = () => {
  setTimeout(() => {
    isFocused.value = false;
    showSuggestions.value = false;
    activeSuggestionIndex.value = -1;
    emit('blur');
  }, 150);
};

// Handle suggestion mouse interaction
const handleSuggestionMouseEnter = (index) => {
  activeSuggestionIndex.value = index;
};

const handleSuggestionClick = (suggestion) => {
  selectSuggestion(suggestion);
};

// Component lifecycle
onMounted(() => {
  if (props.autoFocus && !props.disabled) {
    nextTick(() => {
      searchInputRef.value?.focus();
    });
  }
  
  // Load search history from localStorage
  try {
    const saved = localStorage.getItem('dimSearchBar-history');
    if (saved) {
      searchHistory.value = JSON.parse(saved);
    }
  } catch (e) {
    console.warn('Failed to load search history:', e);
  }
});

onUnmounted(() => {
  // Clear debounce timeout
  clearTimeout(debounceTimeout);
  
  // Save search history to localStorage
  try {
    localStorage.setItem('dimSearchBar-history', JSON.stringify(searchHistory.value));
  } catch (e) {
    console.warn('Failed to save search history:', e);
  }
  
  // Clear color cache
  colorCache.clear();
});

// Watch for external value changes
watch(() => props.loading, (newVal) => {
  isLoading.value = newVal;
});

// Watch for theme changes and update colors
watch([() => props.theme, () => props.primaryColor, () => props.bgColor], () => {
  // Clear style cache when theme changes
  searchBarStylesCache.value = {};
}, { immediate: true });

// Watch search value changes
watch(searchValue, (newValue) => {
  handleInputDebounced(newValue);
});
</script>

<style scoped>
/* Enhanced DimSearchBar Styles */
.dim-search-bar {
  position: relative;
  overflow: visible;
  transform: translateZ(0); /* Hardware acceleration */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.dim-search-bar:hover {
  transform: translateY(-1px) translateZ(0);
}

.search-input {
  font-feature-settings: 'liga' 1, 'kern' 1;
  letter-spacing: 0.025em;
  transition: all 0.2s ease;
}

.search-input::placeholder {
  opacity: 0.6;
  transition: opacity 0.2s ease;
}

.search-input:focus::placeholder {
  opacity: 0.4;
}

.search-input:focus {
  transform: translateX(2px);
}

/* Enhanced button animations */
.clear-button, .search-button {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

.clear-button:hover {
  transform: scale(1.1) rotate(90deg);
}

.search-button:hover:not(:disabled) {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.search-button:active:not(:disabled) {
  transform: scale(0.95);
}

/* Enhanced suggestions dropdown */
.suggestions-dropdown {
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04),
    0 0 0 1px rgba(255, 255, 255, 0.05);
}

.suggestion-item {
  position: relative;
  transform: translateZ(0);
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}

.suggestion-item:hover {
  transform: translateX(4px) translateZ(0);
}

.suggestion-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: var(--primary-color, #6366f1);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.suggestion-item:hover::before,
.suggestion-item[aria-selected="true"]::before {
  opacity: 1;
}

/* Highlighting for matched text */
.suggestion-item :deep(mark) {
  background: rgba(var(--primary-color-rgb, 99, 102, 241), 0.2);
  color: inherit;
  font-weight: 600;
  border-radius: 2px;
  padding: 1px 2px;
}

/* Loading animation */
.search-icon .animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Transitions */
.fade-enter-active, .fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.suggestions-enter-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.suggestions-leave-active {
  transition: all 0.2s ease-in;
}

.suggestions-enter-from {
  opacity: 0;
  transform: translateY(-8px) scale(0.95);
}

.suggestions-leave-to {
  opacity: 0;
  transform: translateY(-4px) scale(0.98);
}

/* Focus states */
.search-input:focus + .search-border {
  transform: scale(1.02);
  box-shadow: 0 0 0 3px rgba(var(--primary-color-rgb, 99, 102, 241), 0.1);
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .suggestion-item {
    border-bottom: 1px solid currentColor;
  }
  
  .search-border {
    border-width: 2px !important;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .dim-search-bar,
  .search-input,
  .suggestion-item,
  .search-button,
  .clear-button,
  .suggestions-dropdown {
    transition: none !important;
    animation: none !important;
    transform: none !important;
  }
  
  .search-input:focus {
    transform: none;
  }
  
  .suggestion-item:hover {
    transform: none;
  }
  
  .clear-button:hover {
    transform: none;
  }
}

/* Screen reader only */
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

/* Dark mode specific enhancements */
@media (prefers-color-scheme: dark) {
  .suggestions-dropdown {
    border-color: rgba(255, 255, 255, 0.1);
    box-shadow: 
      0 20px 25px -5px rgba(0, 0, 0, 0.4),
      0 10px 10px -5px rgba(0, 0, 0, 0.2);
  }
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .search-input {
    font-size: 16px !important; /* Prevent zoom on iOS */
  }
  
  .suggestion-item {
    padding: 12px 16px; /* Larger touch targets */
  }
  
  .suggestions-dropdown {
    max-height: 200px; /* Smaller on mobile */
  }
}

/* Performance optimizations */
.dim-search-bar * {
  backface-visibility: hidden;
  perspective: 1000px;
}

/* CSS variables for theming */
.dim-search-bar {
  --primary-color: #6366f1;
  --primary-color-rgb: 99, 102, 241;
  --bg-color: #ffffff;
  --text-color: #1f2937;
  --border-radius: 8px;
  --transition-duration: 200ms;
}
</style>
