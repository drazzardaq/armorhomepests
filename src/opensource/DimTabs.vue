<template>
  <!-- Documentation Mode -->
  <div v-if="isDocs" class="DUIMX-docs prose prose-purple max-w-none">
    <div class="mb-6 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4">
      <h2 class="mb-2 text-2xl font-bold text-purple-300">📂 DUIMX Tabs</h2>
      <p class="text-purple-200">Modern tab navigation component with smooth transitions, customizable styles, and keyboard support.</p>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">✨ Features</h3>
    <ul class="mb-6 space-y-2 text-purple-200">
      <li>📋 <strong>Multiple Tabs</strong> - Support for unlimited tab panels</li>
      <li>🎨 <strong>Smooth Transitions</strong> - Elegant content switching animations</li>
      <li>⌨️ <strong>Keyboard Navigation</strong> - Arrow keys and keyboard support</li>
      <li>🎯 <strong>Active Indicators</strong> - Visual active tab highlighting</li>
      <li>♿ <strong>Accessible</strong> - ARIA compliant with screen reader support</li>
      <li>🔧 <strong>Fully Reactive</strong> - Responds to all layout and theme changes</li>
    </ul>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">🎯 Usage Example</h3>
    <div class="mb-6 rounded-lg border border-purple-500/30 bg-slate-800/50 p-4">
      <pre class="text-sm text-purple-200"><code>&lt;DimTabs 
  :tabs="[
    { id: 'tab1', label: 'Overview', content: 'Overview content...' },
    { id: 'tab2', label: 'Details', content: 'Detailed information...' }
  ]"
  :roundness="12"
  primaryColor="#10b981"
  theme="dark"
&gt;&lt;/DimTabs&gt;</code></pre>
    </div>

    <div class="mb-6 rounded-lg border border-purple-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4">
      <p class="text-center text-purple-200">
        <strong>🔗 Source Code:</strong> 
        <a href="https://github.com/drazzardaq/opensource/blob/master/src/opensource/DimTabs.vue" 
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
    ref="cssVariablesRef"
    class="tabs-container relative" 
    :style="containerStyles"
    :class="[
      `tabs-${props.orientation}`,
      `tabs-${props.variant}`,
      { 'tabs-compact': props.compact }
    ]"
  >
    <!-- Version Overlay -->
    <div class="absolute top-0 right-0 z-50 bg-purple-600/80 backdrop-blur-sm rounded-bl-lg px-2 py-1 pointer-events-none">
      <span class="text-xs text-white/80">v0.9.7</span>
    </div>
    
    <!-- Tab Headers -->
    <div 
      ref="tabListRef"
      :class="tabListClasses" 
      role="tablist"
      :aria-orientation="props.orientation"
      :aria-label="props.ariaLabel || 'Tabs'"
    >
      <!-- Animated Indicator -->
      <div 
        v-if="props.variant !== 'pills'"
        ref="indicatorRef"
        class="absolute transition-all duration-300 ease-out pointer-events-none z-10"
        :style="{ backgroundColor: props.primaryColor }"
        :class="{
          'h-0.5 bottom-0': props.orientation === 'horizontal',
          'w-0.5 right-0': props.orientation === 'vertical'
        }"
      />
      
      <button
        v-for="(tab, index) in tabItems"
        :key="`tab-${tab.id}-${index}`"
        @click="changeTab(index)"
        @keydown="handleKeydown"
        class="tab-button relative overflow-hidden"
        :class="[
          'px-4 py-2 font-medium transition-all duration-200 ease-out',
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          roundnessClass,
          activeTab === index ? themeClasses.active : themeClasses.inactive,
          {
            'flex-1': props.stretch,
            'min-w-0': props.scrollable
          }
        ]"
        :style="getTabButtonStyles(index, activeTab === index)"
        :aria-selected="activeTab === index"
        :tabindex="activeTab === index ? 0 : -1"
        role="tab"
        :aria-controls="`tabpanel-${tab.id}`"
        :id="`tab-${tab.id}`"
        :aria-describedby="tab.disabled ? `tab-${tab.id}-disabled` : undefined"
        :disabled="tab.disabled"
      >
        <!-- Tab Icon (if provided) -->
        <span v-if="tab.icon" class="tab-icon mr-2" :class="tab.icon" />
        
        <!-- Tab Label -->
        <span class="tab-label truncate">{{ tab.label }}</span>
        
        <!-- Badge/Count (if provided) -->
        <span 
          v-if="tab.badge || tab.count"
          class="ml-2 px-2 py-0.5 text-xs rounded-full"
          :style="{ 
            backgroundColor: `${props.primaryColor}20`, 
            color: props.primaryColor 
          }"
        >
          {{ tab.badge || tab.count }}
        </span>
        
        <!-- Close Button (if closable) -->
        <button
          v-if="props.closable && tab.canClose"
          @click="closeTab(index, $event)"
          class="ml-2 p-1 rounded hover:bg-red-500/20 transition-colors"
          :aria-label="`Close ${tab.label} tab`"
          tabindex="-1"
        >
          <svg class="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
        
        <!-- Ripple Effect -->
        <span 
          v-if="activeTab === index && props.animated"
          class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          style="animation: shimmer 1.5s ease-in-out infinite;"
        />
        
        <!-- Disabled State Tooltip -->
        <span 
          v-if="tab.disabled"
          :id="`tab-${tab.id}-disabled`"
          class="sr-only"
        >
          This tab is currently disabled. {{ tab.disabledReason || '' }}
        </span>
      </button>
    </div>

    <!-- Tab Panels -->
    <div class="tabs-content relative" :style="contentStyles">
      <Transition 
        :name="props.animated ? 'tab' : ''" 
        mode="out-in"
        @before-leave="isChanging = true"
        @after-enter="isChanging = false"
      >
        <div
          :key="`panel-${activeTab}`"
          :id="`tabpanel-${tabItems[activeTab]?.id}`"
          class="tab-panel"
          :class="[
            themeClasses.panel,
            { 'tab-panel-loading': isChanging }
          ]"
          role="tabpanel"
          :aria-labelledby="`tab-${tabItems[activeTab]?.id}`"
          :aria-hidden="false"
          tabindex="0"
        >
          <!-- Lazy Loading Support -->
          <template v-if="!props.lazy || tabItems[activeTab]?.isLoaded">
            <!-- Slot for custom content -->
            <slot 
              :name="`tab-${tabItems[activeTab]?.id}`"
              :tab="tabItems[activeTab]"
              :index="activeTab"
              :isActive="true"
            >
              <!-- Default content rendering -->
              <div v-if="typeof tabItems[activeTab]?.content === 'string'">
                {{ tabItems[activeTab]?.content }}
              </div>
              <component 
                v-else-if="tabItems[activeTab]?.component"
                :is="tabItems[activeTab].component"
                v-bind="tabItems[activeTab]?.props || {}"
              />
            </slot>
          </template>
          
          <!-- Lazy Loading Placeholder -->
          <div v-else class="flex items-center justify-center py-8 text-gray-500">
            <div class="animate-spin rounded-full h-6 w-6 border-b-2" :style="{ borderColor: props.primaryColor }"></div>
            <span class="ml-2">Loading content...</span>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick, watchEffect } from 'vue';

const props = defineProps({
  roundness: { type: Number, default: 8 },
  primaryColor: { type: String, default: '#6366f1' },
  bgColor: { type: String, default: '#ffffff' },
  textColor: { type: String, default: '#1f2937' },
  fontFamily: { type: String, default: 'inherit' },
  width: { type: Number, default: 500 },
  height: { type: Number, default: 300 },
  padding: { type: Number, default: 16 },
  margin: { type: Number, default: 8 },
  theme: { type: String, default: 'light' },
  compact: { type: Boolean, default: false },
  isDocs: { type: Boolean, default: false },
  
  // Enhanced tabs-specific props
  tabs: { 
    type: Array, 
    default: () => [
      { id: 'overview', label: 'Overview', content: 'Welcome to the overview section. This contains general information about the component.' },
      { id: 'features', label: 'Features', content: 'Here are the key features: Responsive design, Smooth animations, Accessibility support, and more!' },
      { id: 'examples', label: 'Examples', content: 'Check out these practical examples and use cases for the component.' }
    ],
    validator: (tabs) => Array.isArray(tabs) && tabs.length > 0
  },
  orientation: { type: String, default: 'horizontal', validator: value => ['horizontal', 'vertical'].includes(value) },
  variant: { type: String, default: 'default', validator: value => ['default', 'pills', 'underline', 'cards'].includes(value) },
  animated: { type: Boolean, default: true },
  lazy: { type: Boolean, default: false },
  closable: { type: Boolean, default: false },
  defaultTab: { type: [String, Number], default: 0 },
  scrollable: { type: Boolean, default: true },
  centered: { type: Boolean, default: false },
  stretch: { type: Boolean, default: false },
  ariaLabel: { type: String, default: '' },
  preloadAdjacent: { type: Boolean, default: true }
});

const emit = defineEmits(['tab-change', 'tab-close', 'before-leave', 'after-enter']);

// Component refs
const tabsRef = ref(null);
const tabListRef = ref(null);
const indicatorRef = ref(null);
const cssVariablesRef = ref(null);

// Reactive state with optimized performance
const activeTab = ref(0);
const focusedTab = ref(0);
const tabHistory = ref([]);
const isChanging = ref(false);
const observedTabs = ref(new Map());

// CSS variables for manual reactivity (Vue 3.3.0 compatibility)
watchEffect(() => {
  if (cssVariablesRef.value) {
    cssVariablesRef.value.style.setProperty('--primary-color', props.primaryColor);
    cssVariablesRef.value.style.setProperty('--bg-color', props.bgColor);
    cssVariablesRef.value.style.setProperty('--text-color', props.textColor);
    cssVariablesRef.value.style.setProperty('--font-family', props.fontFamily);
    cssVariablesRef.value.style.setProperty('--border-radius', `${props.roundness}px`);
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

// Enhanced theme detection and classes
const themeClasses = computed(() => {
  const isDark = props.theme === 'dark' || 
    (props.theme === 'system' && window.matchMedia?.('(prefers-color-scheme: dark)').matches);
  
  const variantStyles = {
    default: {
      border: isDark ? 'border-slate-600/50' : 'border-gray-200/50',
      active: isDark ? 'text-purple-300 bg-slate-800/80' : 'text-blue-600 bg-blue-50/80',
      inactive: isDark ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/30' : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50/80',
      panel: isDark ? 'bg-slate-900/50 text-slate-200' : 'bg-white/50 text-gray-700'
    },
    pills: {
      border: 'border-transparent',
      active: isDark ? 'text-white bg-purple-600 shadow-lg' : 'text-white bg-blue-600 shadow-lg',
      inactive: isDark ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50' : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100/80',
      panel: isDark ? 'bg-slate-900/50 text-slate-200' : 'bg-white/50 text-gray-700'
    },
    underline: {
      border: isDark ? 'border-slate-600/30' : 'border-gray-200/30',
      active: isDark ? 'text-purple-300 border-b-2 border-purple-400' : 'text-blue-600 border-b-2 border-blue-500',
      inactive: isDark ? 'text-slate-400 hover:text-slate-200' : 'text-gray-600 hover:text-gray-800',
      panel: isDark ? 'bg-slate-900/50 text-slate-200' : 'bg-white/50 text-gray-700'
    },
    cards: {
      border: isDark ? 'border-slate-600/30' : 'border-gray-200/30',
      active: isDark ? 'text-purple-300 bg-slate-800 border border-slate-600 -mb-px' : 'text-blue-600 bg-white border border-gray-200 -mb-px',
      inactive: isDark ? 'text-slate-400 hover:text-slate-200 bg-slate-900/50' : 'text-gray-600 hover:text-gray-800 bg-gray-50',
      panel: isDark ? 'bg-slate-900/50 text-slate-200 border border-slate-600/30' : 'bg-white text-gray-700 border border-gray-200'
    }
  };
  
  return variantStyles[props.variant] || variantStyles.default;
});

// Optimized tab items with lazy loading support
const tabItems = computed(() => {
  return props.tabs.map((tab, index) => ({
    ...tab,
    isActive: index === activeTab.value,
    isLoaded: !props.lazy || 
              index === activeTab.value || 
              tabHistory.value.includes(index) ||
              (props.preloadAdjacent && Math.abs(index - activeTab.value) <= 1),
    canClose: props.closable && props.tabs.length > 1,
    disabled: tab.disabled || false
  }));
});

// Performance-optimized memoized style functions
const styleCache = ref(new Map());

const getTabButtonStyles = computed(() => {
  return (index, isActive) => {
    const cacheKey = `${index}-${isActive}-${props.variant}-${props.primaryColor}-${props.textColor}`;
    
    if (styleCache.value.has(cacheKey)) {
      return styleCache.value.get(cacheKey);
    }
    
    const baseStyles = {
      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: isActive && props.animated ? 'translateY(-1px)' : 'translateY(0)',
      boxShadow: isActive ? `0 4px 12px ${props.primaryColor}20` : 'none',
      willChange: 'transform, box-shadow, background-color'
    };
    
    let variantStyles = {};
    
    switch (props.variant) {
      case 'pills':
        variantStyles = {
          backgroundColor: isActive ? props.primaryColor : 'transparent',
          color: isActive ? '#ffffff' : props.textColor,
          borderRadius: `${props.roundness}px`
        };
        break;
        
      case 'underline':
        variantStyles = {
          borderBottom: isActive ? `2px solid ${props.primaryColor}` : '2px solid transparent',
          color: isActive ? props.primaryColor : props.textColor
        };
        break;
        
      case 'cards':
        variantStyles = {
          backgroundColor: isActive ? `${props.primaryColor}15` : 'transparent',
          color: isActive ? props.primaryColor : props.textColor,
          borderRadius: `${props.roundness}px ${props.roundness}px 0 0`
        };
        break;
        
      default:
        variantStyles = {
          backgroundColor: isActive ? `${props.primaryColor}15` : 'transparent',
          color: isActive ? props.primaryColor : props.textColor
        };
    }
    
    const styles = { ...baseStyles, ...variantStyles };
    styleCache.value.set(cacheKey, styles);
    
    // Clean cache periodically
    if (styleCache.value.size > 50) {
      const entries = Array.from(styleCache.value.entries());
      styleCache.value.clear();
      // Keep recent entries
      entries.slice(-25).forEach(([key, value]) => {
        styleCache.value.set(key, value);
      });
    }
    
    return styles;
  };
});

// Optimized container styles with caching
const containerStylesCache = ref({});
const containerStyles = computed(() => {
  const cacheKey = `${props.fontFamily}-${props.width}-${props.margin}-${props.orientation}`;
  
  if (containerStylesCache.value[cacheKey]) {
    return containerStylesCache.value[cacheKey];
  }
  
  const styles = {
    fontFamily: props.fontFamily,
    maxWidth: props.orientation === 'horizontal' ? `${props.width}px` : 'auto',
    margin: `${props.margin}px`,
    display: props.orientation === 'vertical' ? 'flex' : 'block'
  };
  
  containerStylesCache.value[cacheKey] = styles;
  return styles;
});

// Enhanced content styles
const contentStyles = computed(() => ({
  backgroundColor: props.bgColor,
  color: props.textColor,
  padding: `${props.padding}px`,
  minHeight: `${Math.max(props.height - 60, 100)}px`,
  borderRadius: props.variant === 'cards' ? `0 ${props.roundness}px ${props.roundness}px ${props.roundness}px` : `${props.roundness}px`
}));

// Tab list classes for different orientations and variants
const tabListClasses = computed(() => {
  const classes = ['tabs-header', 'transition-all', 'duration-200'];
  
  if (props.orientation === 'horizontal') {
    classes.push('flex', 'border-b');
    if (props.centered) classes.push('justify-center');
    if (props.stretch) classes.push('w-full');
    if (props.scrollable) classes.push('overflow-x-auto');
  } else {
    classes.push('flex-col', 'border-r', 'min-w-max');
  }
  
  classes.push(themeClasses.value.border);
  return classes;
});

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

// Enhanced tab change functionality
const changeTab = async (newIndex, fromUser = true) => {
  if (newIndex === activeTab.value || isChanging.value || newIndex < 0 || newIndex >= props.tabs.length) {
    return;
  }
  
  const currentTab = activeTab.value;
  const newTab = newIndex;
  
  // Emit before-leave event
  const canLeave = await emit('before-leave', { from: currentTab, to: newTab });
  if (canLeave === false) return;
  
  isChanging.value = true;
  
  // Add to history for lazy loading
  if (!tabHistory.value.includes(newIndex)) {
    tabHistory.value.push(newIndex);
  }
  
  // Update active tab
  activeTab.value = newIndex;
  focusedTab.value = newIndex;
  
  // Update focus for accessibility
  if (fromUser) {
    await nextTick();
    const newTabButton = tabListRef.value?.children[newIndex];
    if (newTabButton) {
      newTabButton.focus();
    }
  }
  
  // Update indicator position
  updateIndicator();
  
  // Announce to screen readers
  const tabLabel = props.tabs[newIndex]?.label || `Tab ${newIndex + 1}`;
  announceToScreenReader(`Switched to ${tabLabel}`);
  
  // Emit events
  emit('tab-change', { from: currentTab, to: newTab, tab: props.tabs[newTab] });
  
  // Wait for animation to complete
  if (props.animated) {
    await new Promise(resolve => setTimeout(resolve, 200));
  }
  
  emit('after-enter', { index: newTab, tab: props.tabs[newTab] });
  isChanging.value = false;
};

// Close tab functionality
const closeTab = async (index, event) => {
  event?.stopPropagation();
  
  if (props.tabs.length <= 1) return;
  
  const canClose = await emit('tab-close', { index, tab: props.tabs[index] });
  if (canClose === false) return;
  
  // If closing active tab, switch to nearest tab
  if (index === activeTab.value) {
    const newIndex = index === props.tabs.length - 1 ? index - 1 : index;
    await changeTab(newIndex, false);
  } else if (index < activeTab.value) {
    activeTab.value -= 1;
    focusedTab.value = activeTab.value;
  }
  
  // Remove from history
  tabHistory.value = tabHistory.value.filter(i => i !== index).map(i => i > index ? i - 1 : i);
  
  announceToScreenReader(`Closed tab ${props.tabs[index]?.label || index + 1}`);
};

// Enhanced keyboard navigation
const handleKeydown = async (event) => {
  const tabs = props.tabs;
  const currentIndex = focusedTab.value;
  
  switch (event.key) {
    case 'ArrowRight':
    case 'ArrowDown':
      event.preventDefault();
      const nextIndex = (currentIndex + 1) % tabs.length;
      if (props.orientation === 'horizontal' || event.key === 'ArrowDown') {
        await changeTab(nextIndex);
      }
      break;
      
    case 'ArrowLeft':
    case 'ArrowUp':
      event.preventDefault();
      const prevIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
      if (props.orientation === 'horizontal' || event.key === 'ArrowUp') {
        await changeTab(prevIndex);
      }
      break;
      
    case 'Home':
      event.preventDefault();
      await changeTab(0);
      break;
      
    case 'End':
      event.preventDefault();
      await changeTab(tabs.length - 1);
      break;
      
    case 'Delete':
    case 'Backspace':
      if (props.closable) {
        event.preventDefault();
        await closeTab(currentIndex);
      }
      break;
      
    case 'Enter':
    case ' ':
      event.preventDefault();
      await changeTab(currentIndex);
      break;
  }
};

// Indicator position update for visual feedback
const updateIndicator = () => {
  if (!indicatorRef.value || !tabListRef.value) return;
  
  const activeButton = tabListRef.value.children[activeTab.value];
  if (!activeButton) return;
  
  const indicator = indicatorRef.value;
  const buttonRect = activeButton.getBoundingClientRect();
  const containerRect = tabListRef.value.getBoundingClientRect();
  
  if (props.orientation === 'horizontal') {
    indicator.style.left = `${activeButton.offsetLeft}px`;
    indicator.style.width = `${activeButton.offsetWidth}px`;
    indicator.style.height = '2px';
    indicator.style.bottom = '0';
  } else {
    indicator.style.top = `${activeButton.offsetTop}px`;
    indicator.style.height = `${activeButton.offsetHeight}px`;
    indicator.style.width = '2px';
    indicator.style.right = '0';
  }
};

// Initialize component
const initializeTabs = () => {
  // Set initial active tab
  if (typeof props.defaultTab === 'string') {
    const index = props.tabs.findIndex(tab => tab.id === props.defaultTab);
    activeTab.value = index !== -1 ? index : 0;
  } else {
    activeTab.value = Math.max(0, Math.min(props.defaultTab, props.tabs.length - 1));
  }
  
  focusedTab.value = activeTab.value;
  tabHistory.value = [activeTab.value];
  
  // Update indicator position
  nextTick(() => {
    updateIndicator();
  });
};

// Resize observer for responsive updates
let resizeObserver = null;

onMounted(() => {
  initializeTabs();
  
  // Set up resize observer for indicator updates
  if (window.ResizeObserver && tabListRef.value) {
    resizeObserver = new ResizeObserver(() => {
      updateIndicator();
    });
    resizeObserver.observe(tabListRef.value);
  }
  
  // Handle window resize
  window.addEventListener('resize', updateIndicator);
});

onUnmounted(() => {
  if (resizeObserver) {
    resizeObserver.disconnect();
  }
  window.removeEventListener('resize', updateIndicator);
  
  // Clear all caches
  containerStylesCache.value = {};
  styleCache.value.clear();
  observedTabs.value.clear();
});

// Watch for tab changes from outside
watch(() => props.tabs, () => {
  // Ensure active tab is still valid
  if (activeTab.value >= props.tabs.length) {
    changeTab(Math.max(0, props.tabs.length - 1), false);
  }
  nextTick(() => updateIndicator());
}, { deep: true });

// Watch for theme/style changes
watch([() => props.primaryColor, () => props.theme, () => props.variant], () => {
  containerStylesCache.value = {};
  nextTick(() => updateIndicator());
});
</script>

<style scoped>
.tabs-container {
  --tabs-border-radius: v-bind('`${roundness}px`');
  --tabs-primary-color: v-bind('primaryColor');
  --tabs-bg-color: v-bind('bgColor');
  --tabs-text-color: v-bind('textColor');
}

/* Tab transitions */
.tab-enter-active,
.tab-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.tab-enter-from {
  opacity: 0;
  transform: translateX(20px) scale(0.95);
}

.tab-leave-to {
  opacity: 0;
  transform: translateX(-20px) scale(0.95);
}

/* Enhanced tab button focus styles */
.tab-button:focus {
  outline: 2px solid rgba(99, 102, 241, 0.4);
  outline-offset: 2px;
  z-index: 10;
}

.tab-button:focus-visible {
  outline: 2px solid var(--tabs-primary-color);
  outline-offset: 2px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .tab-button:focus {
    outline: 3px solid currentColor;
  }
}

/* Enhanced animations */
.tabs-content {
  position: relative;
  overflow: hidden;
}

.tab-panel {
  animation: fadeInUp 0.3s ease-out;
  transform-origin: center top;
}

.tab-panel-loading {
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

/* Shimmer effect for active tabs */
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* Fade in animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(15px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Vertical orientation styles */
.tabs-vertical {
  flex-direction: row;
}

.tabs-vertical .tabs-header {
  flex-direction: column;
  border-right: 1px solid;
  border-bottom: none;
  min-width: 200px;
}

.tabs-vertical .tabs-content {
  flex: 1;
  margin-left: 1rem;
}

/* Compact mode */
.tabs-compact .tab-button {
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
}

/* Scrollable tabs */
.tabs-header.overflow-x-auto {
  scrollbar-width: thin;
  scrollbar-color: var(--tabs-primary-color) transparent;
}

.tabs-header.overflow-x-auto::-webkit-scrollbar {
  height: 4px;
}

.tabs-header.overflow-x-auto::-webkit-scrollbar-track {
  background: transparent;
}

.tabs-header.overflow-x-auto::-webkit-scrollbar-thumb {
  background: var(--tabs-primary-color);
  border-radius: 2px;
}

/* Pills variant specific styles */
.tabs-pills .tab-button {
  margin: 0 0.25rem;
  border-radius: var(--tabs-border-radius);
}

/* Cards variant specific styles */
.tabs-cards .tab-button {
  border: 1px solid transparent;
  border-bottom: none;
  margin-right: 1px;
}

.tabs-cards .tabs-content {
  border: 1px solid;
  border-top: none;
}

/* Responsive design */
@media (max-width: 640px) {
  .tabs-header {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  
  .tab-button {
    white-space: nowrap;
    min-width: max-content;
  }
  
  .tabs-vertical {
    flex-direction: column;
  }
  
  .tabs-vertical .tabs-header {
    flex-direction: row;
    border-right: none;
    border-bottom: 1px solid;
    min-width: auto;
    overflow-x: auto;
  }
  
  .tabs-vertical .tabs-content {
    margin-left: 0;
    margin-top: 1rem;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .tab-enter-active,
  .tab-leave-active,
  .tab-button,
  .tab-panel {
    transition: none !important;
    animation: none !important;
  }
}

/* Dark mode improvements */
@media (prefers-color-scheme: dark) {
  .tabs-container {
    --tabs-bg-color: #1e293b;
    --tabs-text-color: #e2e8f0;
  }
}
</style>
