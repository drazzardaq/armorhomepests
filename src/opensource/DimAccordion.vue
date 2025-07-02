<template>
  <!-- Documentation Mode -->
  <div v-if="isDocs" class="DUIMX-docs prose prose-purple max-w-none">
    <div class="mb-6 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4">
      <h2 class="mb-2 text-2xl font-bold text-purple-300">📁 DUIMX Accordion</h2>
      <p class="text-purple-200">Collapsible content component with smooth animations, multiple items, and full customization.</p>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">✨ Features</h3>
    <ul class="mb-6 space-y-2 text-purple-200">
      <li>📂 <strong>Multiple Items</strong> - Support for multiple collapsible sections</li>
      <li>🎨 <strong>Smooth Animations</strong> - Elegant expand/collapse transitions</li>
      <li>⚡ <strong>Fast Toggle</strong> - Instant open/close with keyboard support</li>
      <li>🎯 <strong>Single/Multi Mode</strong> - Allow one or multiple panels open</li>
      <li>♿ <strong>Accessible</strong> - ARIA compliant with keyboard navigation</li>
      <li>🔧 <strong>Fully Reactive</strong> - Responds to all layout and theme changes</li>
    </ul>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">🎯 Usage Example</h3>
    <div class="mb-6 rounded-lg border border-purple-500/30 bg-slate-800/50 p-4">
      <pre class="text-sm text-purple-200"><code>&lt;DimAccordion 
  :items="[
    { title: 'Section 1', content: 'Content for section 1' },
    { title: 'Section 2', content: 'Content for section 2' }
  ]"
  :roundness="12"
  primaryColor="#10b981"
  :allowMultiple="false"
  theme="dark"
&gt;&lt;/DimAccordion&gt;</code></pre>
    </div>

    <div class="mb-6 rounded-lg border border-purple-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4">
      <p class="text-center text-purple-200">
        <strong>🔗 Source Code:</strong> 
        <a href="https://github.com/drazzardaq/opensource/blob/master/src/opensource/DimAccordion.vue" 
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
    class="accordion-container"
    :style="containerStyles"
    :class="[
      `accordion-theme-${theme}`,
      `accordion-variant-${variant}`,
      { 'accordion-compact': compact }
    ]"
    role="region"
    :aria-label="ariaLabel || 'Accordion content'"
  >
    <!-- Version Overlay -->
    <div class="absolute top-0 right-0 z-50 bg-purple-600/80 backdrop-blur-sm rounded-bl-lg px-2 py-1 pointer-events-none">
      <span class="text-xs text-white/80">v0.9.7</span>
    </div>

    <div 
      v-for="(item, index) in accordionItems" 
      :key="`accordion-item-${item.id || index}`"
      class="accordion-item relative transition-all duration-300"
      :class="[
        roundnessClass, 
        themeClasses.border,
        {
          'accordion-item-expanded': isExpanded(index),
          'accordion-item-disabled': item.disabled,
          'accordion-item-first': index === 0,
          'accordion-item-last': index === accordionItems.length - 1
        }
      ]"
      :style="itemStyles(index)"
      :data-index="index"
    >
      <!-- Accordion Header -->
      <button
        ref="headerRefs"
        @click="toggleItem(index, $event)"
        @keydown="handleKeyDown($event, index)"
        class="accordion-header w-full flex items-center justify-between text-left transition-all duration-200"
        :class="[
          themeClasses.header, 
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          {
            'accordion-header-expanded': isExpanded(index),
            'cursor-not-allowed opacity-50': item.disabled
          }
        ]"
        :style="headerStyles(index)"
        :aria-expanded="isExpanded(index)"
        :aria-controls="`accordion-content-${index}`"
        :id="`accordion-header-${index}`"
        :disabled="item.disabled"
        :aria-describedby="item.description ? `accordion-desc-${index}` : undefined"
        type="button"
      >
        <!-- Icon (if provided) -->
        <div v-if="item.icon || showIcons" class="flex items-center">
          <span v-if="item.icon" class="accordion-icon mr-3" :class="item.icon"></span>
          <font-awesome-icon 
            v-else-if="showIcons"
            :icon="item.iconName || ['fas', 'folder']"
            class="mr-3 w-4 h-4 text-current opacity-70"
          />
        </div>

        <!-- Title Content -->
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between">
            <span class="accordion-title font-medium truncate" :class="titleClasses">
              {{ item.title }}
            </span>
            
            <!-- Badge/Status -->
            <span 
              v-if="item.badge || item.status"
              class="accordion-badge ml-2 px-2 py-0.5 text-xs rounded-full whitespace-nowrap"
              :style="badgeStyles(item)"
            >
              {{ item.badge || item.status }}
            </span>
          </div>
          
          <!-- Description -->
          <p 
            v-if="item.description && showDescriptions"
            :id="`accordion-desc-${index}`"
            class="accordion-description text-sm opacity-70 mt-1 truncate"
          >
            {{ item.description }}
          </p>
        </div>

        <!-- Expand/Collapse Indicator -->
        <div class="accordion-indicator ml-4 flex items-center">
          <!-- Custom indicator or default chevron -->
          <component
            v-if="customIndicator"
            :is="customIndicator"
            :expanded="isExpanded(index)"
            :item="item"
            :index="index"
          />
          <font-awesome-icon 
            v-else
            :icon="['fas', indicatorIcon]"
            class="w-4 h-4 transition-transform duration-200 will-change-transform"
            :class="{ 
              'rotate-180': isExpanded(index) && indicatorIcon === 'chevron-down',
              'rotate-90': isExpanded(index) && indicatorIcon === 'chevron-right'
            }"
          />
        </div>
      </button>
      
      <!-- Accordion Content with Enhanced Transitions -->
      <Transition 
        :name="animationStyle"
        @before-enter="onBeforeEnter"
        @enter="onEnter" 
        @after-enter="onAfterEnter"
        @before-leave="onBeforeLeave"
        @leave="onLeave"
        @after-leave="onAfterLeave"
      >
        <div 
          v-show="isExpanded(index)"
          :id="`accordion-content-${index}`"
          class="accordion-content overflow-hidden"
          :class="[
            themeClasses.content,
            { 'accordion-content-lazy': lazy && !item.loaded }
          ]"
          :style="contentStyles(index)"
          role="region"
          :aria-labelledby="`accordion-header-${index}`"
          tabindex="-1"
        >
          <div 
            class="accordion-content-inner transition-all duration-200"
            :style="contentInnerStyles"
          >
            <!-- Lazy Loading Support -->
            <template v-if="!lazy || item.loaded">
              <!-- Slot for custom content -->
              <slot 
                :name="`item-${index}`"
                :item="item"
                :index="index"
                :expanded="isExpanded(index)"
              >
                <!-- Default content rendering -->
                <div v-if="typeof item.content === 'string'" v-html="item.content"></div>
                <component 
                  v-else-if="item.component"
                  :is="item.component"
                  v-bind="item.props || {}"
                />
                <div v-else class="text-gray-500 italic">No content available</div>
              </slot>
            </template>
            
            <!-- Lazy Loading Placeholder -->
            <div v-else class="flex items-center justify-center py-4">
              <div class="animate-spin rounded-full h-4 w-4 border-b-2" :style="{ borderColor: primaryColor }"></div>
              <span class="ml-2 text-sm">Loading content...</span>
            </div>
          </div>
        </div>
      </Transition>
    </div>

    <!-- Empty State -->
    <div 
      v-if="accordionItems.length === 0"
      class="accordion-empty text-center py-8 text-gray-500"
      :style="{ fontFamily }"
    >
      <font-awesome-icon :icon="['fas', 'inbox']" class="w-8 h-8 mb-2 opacity-50" />
      <p>No accordion items available</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, watchEffect, onMounted, onUnmounted } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps({
  roundness: { type: Number, default: 8 },
  primaryColor: { type: String, default: '#6366f1' },
  bgColor: { type: String, default: '#ffffff' },
  textColor: { type: String, default: '#1f2937' },
  fontFamily: { type: String, default: 'inherit' },
  width: { type: Number, default: 400 },
  height: { type: Number, default: 48 },
  padding: { type: Number, default: 12 },
  margin: { type: Number, default: 8 },
  theme: { type: String, default: 'light' },
  variant: { type: String, default: 'default' },
  compact: { type: Boolean, default: false },
  isDocs: { type: Boolean, default: false },
  
  // Accordion-specific props
  items: { 
    type: Array, 
    default: () => [
      { title: 'Getting Started', content: 'Learn the basics of using this component library.' },
      { title: 'Advanced Features', content: 'Explore advanced customization options and features.' },
      { title: 'API Reference', content: 'Complete reference of all available props and methods.' }
    ]
  },
  allowMultiple: { type: Boolean, default: false },
  lazy: { type: Boolean, default: false },
  showIcons: { type: Boolean, default: false },
  showDescriptions: { type: Boolean, default: true },
  indicatorIcon: { type: String, default: 'chevron-down' },
  animationStyle: { type: String, default: 'accordion' },
  customIndicator: { type: Object, default: null },
  ariaLabel: { type: String, default: '' },
  initialOpen: { type: Array, default: () => [0] },
  disabled: { type: Boolean, default: false },
  performance: { type: Boolean, default: true }
});

// Emits
const emit = defineEmits(['toggle', 'expand', 'collapse', 'loaded']);

// Reactive state
const openItems = ref([...props.initialOpen]);
const headerRefs = ref([]);
const cssVariablesRef = ref(null);
const loadedItems = ref(new Set());
const animationStates = ref(new Map());

// Performance monitoring
const performanceMetrics = ref({
  toggleTime: 0,
  animationCount: 0,
  lastUpdate: Date.now()
});

// Computed properties with memoization
const roundnessClass = computed(() => {
  if (props.roundness <= 4) return 'rounded-sm';
  if (props.roundness <= 8) return 'rounded';
  if (props.roundness <= 12) return 'rounded-lg';
  if (props.roundness <= 20) return 'rounded-xl';
  return 'rounded-3xl';
});

const themeClasses = computed(() => {
  const themes = {
    light: {
      border: 'border-gray-200',
      header: 'bg-gray-50 text-gray-900 hover:bg-gray-100',
      content: 'bg-white text-gray-700'
    },
    dark: {
      border: 'border-slate-600',
      header: 'bg-slate-800 text-white hover:bg-slate-700',
      content: 'bg-slate-900 text-slate-200'
    },
    glass: {
      border: 'border-white/20',
      header: 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20',
      content: 'bg-white/5 backdrop-blur-sm text-white/90'
    },
    neon: {
      border: 'border-purple-500/30',
      header: 'bg-purple-900/20 text-purple-100 hover:bg-purple-800/30',
      content: 'bg-purple-950/20 text-purple-50'
    }
  };
  return themes[props.theme] || themes.light;
});

const accordionItems = computed(() => {
  return props.items.map((item, index) => ({
    ...item,
    id: item.id || `accordion-item-${index}`,
    loaded: !props.lazy || loadedItems.value.has(index)
  }));
});

const containerStyles = computed(() => ({
  fontFamily: props.fontFamily,
  maxWidth: `${props.width}px`,
  margin: `${props.margin}px`,
  '--accordion-primary': props.primaryColor,
  '--accordion-bg': props.bgColor,
  '--accordion-text': props.textColor,
  '--accordion-padding': `${props.padding}px`,
  '--accordion-roundness': `${props.roundness}px`
}));

const itemStyles = computed(() => (index) => ({
  marginBottom: `${props.margin / 2}px`,
  transform: `translateZ(0)`, // Force hardware acceleration
  '--item-index': index
}));

const headerStyles = computed(() => (index) => ({
  backgroundColor: props.theme === 'light' ? props.bgColor : props.primaryColor,
  color: props.textColor,
  padding: `${props.padding}px`,
  transform: `translateZ(0)`, // Hardware acceleration
  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
}));

const contentStyles = computed(() => (index) => ({
  backgroundColor: props.bgColor,
  color: props.textColor,
  paddingLeft: `${props.padding}px`,
  paddingRight: `${props.padding}px`,
  paddingBottom: `${props.padding}px`
}));

const contentInnerStyles = computed(() => ({
  transform: `translateZ(0)`, // Hardware acceleration
  minHeight: props.compact ? '1rem' : '2rem'
}));

const titleClasses = computed(() => ({
  'text-sm': props.compact,
  'text-base': !props.compact
}));

// Apply CSS variables manually for Vue 3.3.0 compatibility
watchEffect(() => {
  if (cssVariablesRef.value && typeof window !== 'undefined') {
    const element = cssVariablesRef.value;
    Object.entries(containerStyles.value).forEach(([key, value]) => {
      if (key.startsWith('--')) {
        element.style.setProperty(key, value);
      }
    });
  }
});

// Utility methods
const isExpanded = (index) => openItems.value.includes(index);

const badgeStyles = (item) => ({
  backgroundColor: item.badgeColor || props.primaryColor,
  color: item.badgeTextColor || '#ffffff'
});

// Enhanced toggle with performance tracking
const toggleItem = async (index, event) => {
  if (props.disabled || accordionItems.value[index]?.disabled) return;
  
  const startTime = performance.now();
  
  try {
    const wasExpanded = isExpanded(index);
    
    if (props.allowMultiple) {
      const itemIndex = openItems.value.indexOf(index);
      if (itemIndex === -1) {
        openItems.value.push(index);
        emit('expand', { index, item: accordionItems.value[index] });
      } else {
        openItems.value.splice(itemIndex, 1);
        emit('collapse', { index, item: accordionItems.value[index] });
      }
    } else {
      const currentlyOpen = [...openItems.value];
      openItems.value = wasExpanded ? [] : [index];
      
      if (wasExpanded) {
        emit('collapse', { index, item: accordionItems.value[index] });
      } else {
        emit('expand', { index, item: accordionItems.value[index] });
        // Close others
        currentlyOpen.forEach(i => {
          if (i !== index) {
            emit('collapse', { index: i, item: accordionItems.value[i] });
          }
        });
      }
    }
    
    // Lazy loading
    if (props.lazy && !loadedItems.value.has(index) && !wasExpanded) {
      await nextTick();
      loadedItems.value.add(index);
      emit('loaded', { index, item: accordionItems.value[index] });
    }
    
    emit('toggle', { 
      index, 
      expanded: isExpanded(index), 
      item: accordionItems.value[index],
      event 
    });
    
    // Performance tracking
    if (props.performance) {
      const endTime = performance.now();
      performanceMetrics.value.toggleTime = endTime - startTime;
      performanceMetrics.value.animationCount++;
      performanceMetrics.value.lastUpdate = Date.now();
    }
    
  } catch (error) {
    console.error('DimAccordion: Toggle error:', error);
  }
};

// Enhanced keyboard navigation
const handleKeyDown = (event, index) => {
  const { key, ctrlKey, shiftKey } = event;
  
  switch (key) {
    case 'Enter':
    case ' ':
      event.preventDefault();
      toggleItem(index, event);
      break;
      
    case 'ArrowDown':
      event.preventDefault();
      focusNextItem(index);
      break;
      
    case 'ArrowUp':
      event.preventDefault();
      focusPreviousItem(index);
      break;
      
    case 'Home':
      event.preventDefault();
      focusItem(0);
      break;
      
    case 'End':
      event.preventDefault();
      focusItem(accordionItems.value.length - 1);
      break;
      
    // Advanced shortcuts
    case 'a':
      if (ctrlKey) {
        event.preventDefault();
        expandAll();
      }
      break;
      
    case 'c':
      if (ctrlKey) {
        event.preventDefault();
        collapseAll();
      }
      break;
      
    case 'Escape':
      if (shiftKey) {
        collapseAll();
      }
      break;
  }
};

const focusItem = (index) => {
  if (headerRefs.value[index]) {
    headerRefs.value[index].focus();
  }
};

const focusNextItem = (currentIndex) => {
  const nextIndex = (currentIndex + 1) % accordionItems.value.length;
  focusItem(nextIndex);
};

const focusPreviousItem = (currentIndex) => {
  const prevIndex = currentIndex === 0 ? accordionItems.value.length - 1 : currentIndex - 1;
  focusItem(prevIndex);
};

// Bulk operations
const expandAll = () => {
  if (props.allowMultiple) {
    openItems.value = accordionItems.value.map((_, index) => index);
    emit('expand', { all: true });
  }
};

const collapseAll = () => {
  openItems.value = [];
  emit('collapse', { all: true });
};

// Animation event handlers
const onBeforeEnter = (el) => {
  el.style.height = '0';
  el.style.overflow = 'hidden';
  animationStates.value.set(el, 'entering');
};

const onEnter = (el) => {
  el.style.height = el.scrollHeight + 'px';
  el.style.transition = 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
};

const onAfterEnter = (el) => {
  el.style.height = 'auto';
  el.style.overflow = 'visible';
  animationStates.value.delete(el);
};

const onBeforeLeave = (el) => {
  el.style.height = el.scrollHeight + 'px';
  el.style.overflow = 'hidden';
  animationStates.value.set(el, 'leaving');
};

const onLeave = (el) => {
  el.offsetHeight; // Force reflow
  el.style.height = '0';
  el.style.transition = 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
};

const onAfterLeave = (el) => {
  el.style.overflow = 'visible';
  animationStates.value.delete(el);
};

// Lifecycle
onMounted(() => {
  // Initialize lazy loading for initially open items
  if (props.lazy) {
    openItems.value.forEach(index => {
      loadedItems.value.add(index);
    });
  }
});

onUnmounted(() => {
  // Cleanup
  animationStates.value.clear();
  loadedItems.value.clear();
});
</script>

<style scoped>
/* Container and Layout */
.accordion-container {
  position: relative;
  isolation: isolate;
  width: 100%;
  contain: layout style;
}

/* Theme variants */
.accordion-theme-glass {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.accordion-theme-neon {
  box-shadow: 0 0 20px var(--accordion-primary, #6366f1)33;
}

.accordion-variant-minimal .accordion-item {
  border: none;
  box-shadow: none;
  background: transparent;
}

.accordion-variant-elevated .accordion-item {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transform: translateZ(0);
}

.accordion-variant-floating .accordion-item {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  transform: translateY(-2px) translateZ(0);
}

/* Item States */
.accordion-item {
  overflow: hidden;
  border: 1px solid var(--border-color, #e5e7eb);
  background: var(--accordion-bg, #ffffff);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, box-shadow;
  contain: layout style;
}

.accordion-item:hover {
  transform: translateY(-1px) translateZ(0);
  box-shadow: 0 4px 12px -2px rgba(0, 0, 0, 0.1);
}

.accordion-item-expanded {
  border-color: var(--accordion-primary, #6366f1);
  box-shadow: 0 0 0 1px var(--accordion-primary, #6366f1)33;
}

.accordion-item-disabled {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
}

.accordion-item-first {
  border-top-left-radius: var(--accordion-roundness, 8px);
  border-top-right-radius: var(--accordion-roundness, 8px);
}

.accordion-item-last {
  border-bottom-left-radius: var(--accordion-roundness, 8px);
  border-bottom-right-radius: var(--accordion-roundness, 8px);
}

/* Compact mode */
.accordion-compact .accordion-header {
  padding: calc(var(--accordion-padding, 12px) * 0.75);
}

.accordion-compact .accordion-content-inner {
  padding: calc(var(--accordion-padding, 12px) * 0.75);
}

/* Header */
.accordion-header {
  position: relative;
  width: 100%;
  background: transparent;
  border: none;
  cursor: pointer;
  user-select: none;
  will-change: background-color, transform;
  contain: layout style;
}

.accordion-header:focus {
  outline: 2px solid var(--accordion-primary, #6366f1);
  outline-offset: -2px;
  z-index: 10;
}

.accordion-header:focus-visible {
  outline: 2px solid var(--accordion-primary, #6366f1);
  outline-offset: -2px;
}

.accordion-header-expanded {
  background-color: var(--accordion-primary, #6366f1)11;
}

/* Icon and Indicator */
.accordion-icon {
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.accordion-indicator {
  flex-shrink: 0;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
}

/* Title and Description */
.accordion-title {
  font-weight: 500;
  transition: color 0.2s ease;
}

.accordion-description {
  font-size: 0.875rem;
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

/* Badge */
.accordion-badge {
  font-size: 0.75rem;
  font-weight: 600;
  background: var(--accordion-primary, #6366f1);
  color: white;
  border-radius: 9999px;
  transition: all 0.2s ease;
}

/* Content Area */
.accordion-content {
  overflow: hidden;
  will-change: height;
  contain: layout style;
}

.accordion-content-inner {
  padding: var(--accordion-padding, 12px);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.accordion-content-lazy {
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

/* Animations */
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* Enhanced transitions */
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
  transform: translateY(-10px);
}

.accordion-enter-to,
.accordion-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* Slide animation */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  height: 0 !important;
  opacity: 0;
  transform: translateX(-20px);
}

/* Fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease;
  overflow: hidden;
}

.fade-enter-from,
.fade-leave-to {
  height: 0 !important;
  opacity: 0;
}

/* Empty state */
.accordion-empty {
  padding: 2rem;
  text-align: center;
  color: var(--accordion-text, #6b7280);
  font-style: italic;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .accordion-item {
    border-width: 2px;
  }
  
  .accordion-header:focus {
    outline-width: 3px;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .accordion-item,
  .accordion-header,
  .accordion-indicator,
  .accordion-content-inner,
  .accordion-enter-active,
  .accordion-leave-active,
  .slide-enter-active,
  .slide-leave-active,
  .fade-enter-active,
  .fade-leave-active {
    transition: none !important;
    animation: none !important;
  }
  
  .accordion-content-lazy {
    animation: none;
  }
}

/* Print styles */
@media print {
  .accordion-item {
    box-shadow: none;
    border: 1px solid #000;
  }
  
  .accordion-content {
    max-height: none !important;
    overflow: visible !important;
  }
}

/* Performance optimizations */
.accordion-item,
.accordion-header,
.accordion-content {
  backface-visibility: hidden;
  perspective: 1000px;
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .accordion-header {
    padding: calc(var(--accordion-padding, 12px) * 0.8);
  }
  
  .accordion-content-inner {
    padding: calc(var(--accordion-padding, 12px) * 0.8);
  }
  
  .accordion-title {
    font-size: 0.9rem;
  }
  
  .accordion-description {
    font-size: 0.8rem;
  }
}
</style>
