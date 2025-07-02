<template>
  <!-- Documentation Mode -->
  <div v-if="isDocs" class="DUIMX-docs prose prose-purple max-w-none">
    <div class="mb-6 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4">
      <h2 class="mb-2 text-2xl font-bold text-purple-300">🪟 DUIMX Modal</h2>
      <p class="text-purple-200">A fully customizable, accessible modal dialog component with backdrop blur, animations, and theme support.</p>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">✨ Features</h3>
    <ul class="mb-6 space-y-2 text-purple-200">
      <li>🎨 <strong>Unified Prop Interface</strong> - Consistent with all DUIMX components</li>
      <li>🌓 <strong>Smart Theme Detection</strong> - Auto-adapts to light/dark themes</li>
      <li>🎭 <strong>Smooth Animations</strong> - Built-in fade and scale transitions</li>
      <li>♿ <strong>Accessibility</strong> - ARIA labels, focus trap, and keyboard navigation</li>
      <li>🔧 <strong>Fully Customizable</strong> - Colors, sizes, fonts, and spacing</li>
      <li>📱 <strong>Responsive</strong> - Works perfectly on all screen sizes</li>
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
          <tr><td class="border border-purple-500/30 p-2 font-mono">isOpen</td><td class="border border-purple-500/30 p-2">Boolean</td><td class="border border-purple-500/30 p-2">false</td><td class="border border-purple-500/30 p-2">Controls modal visibility</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">title</td><td class="border border-purple-500/30 p-2">String</td><td class="border border-purple-500/30 p-2">''</td><td class="border border-purple-500/30 p-2">Modal title text</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">content</td><td class="border border-purple-500/30 p-2">String</td><td class="border border-purple-500/30 p-2">''</td><td class="border border-purple-500/30 p-2">Default content text</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">closeOnOverlay</td><td class="border border-purple-500/30 p-2">Boolean</td><td class="border border-purple-500/30 p-2">true</td><td class="border border-purple-500/30 p-2">Close when clicking backdrop</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">roundness</td><td class="border border-purple-500/30 p-2">Number</td><td class="border border-purple-500/30 p-2">16</td><td class="border border-purple-500/30 p-2">Border radius in pixels</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">theme</td><td class="border border-purple-500/30 p-2">String</td><td class="border border-purple-500/30 p-2">'dark'</td><td class="border border-purple-500/30 p-2">Color theme (light/dark/system)</td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">🎯 Usage Examples</h3>
    <div class="mb-6 space-y-4">
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/50 p-4">
        <h4 class="mb-2 text-lg font-semibold text-purple-300">Basic Modal</h4>
        <pre class="text-sm text-purple-200"><code>&lt;DimModal 
  :isOpen="showModal"
  title="Welcome!"
  content="This is a basic modal example."
  @close="showModal = false"
/&gt;</code></pre>
      </div>
      
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/50 p-4">
        <h4 class="mb-2 text-lg font-semibold text-purple-300">Custom Styled Modal</h4>
        <pre class="text-sm text-purple-200"><code>&lt;DimModal 
  :isOpen="showModal"
  title="Custom Modal"
  :roundness="24"
  primaryColor="#ec4899"
  bgColor="#1e293b"
  textColor="#e2e8f0"
  theme="dark"
  @close="showModal = false"
&gt;
  &lt;template&gt;
    &lt;p&gt;Custom content goes here!&lt;/p&gt;
    &lt;button @click="handleAction"&gt;Action Button&lt;/button&gt;
  &lt;/template&gt;
  &lt;template #footer&gt;
    &lt;button @click="showModal = false"&gt;Close&lt;/button&gt;
  &lt;/template&gt;
&lt;/DimModal&gt;</code></pre>
      </div>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">🎨 Theming</h3>
    <p class="mb-4 text-purple-200">The modal automatically adapts to your theme preference and provides consistent styling across your application.</p>
    
    <div class="mb-6 rounded-lg border border-purple-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4">
      <p class="text-center text-purple-200">
        <strong>💡 DUIMX Tip:</strong> Use the theme prop to match your app's design system, or let it auto-detect based on your background colors!
      </p>
    </div>

    <div class="text-center text-xs text-purple-400 opacity-75">
      Part of the <strong>DUIMX</strong> component library 🚀
    </div>
  </div>
  
  <!-- Normal Component Mode -->
  <div v-else>
    <!-- Trigger Button (for playground demonstration) -->
    <button 
      v-if="!isOpen"
      @click="openModal"
      :style="triggerButtonStyle"
      class="modal-trigger-btn"
    >
      {{ triggerText || 'Open Modal' }}
    </button>

    <!-- Modal Overlay and Content -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="isModalOpen" class="modal-overlay" @click="closeOnOverlay && closeModal" aria-modal="true" role="dialog" tabindex="-1">
          <div 
            ref="modalRef"
            class="modal-container"
            :class="[roundnessClass, themeClasses.bg, themeClasses.text, 'shadow-2xl', 'animate-in', 'fade-in-0', 'zoom-in-95']"
            :style="modalStyles"
            @click.stop
          >
            <div class="modal-header" :style="{ fontFamily }">
              <!-- Version Display -->
              <!-- <div class="absolute -top-3 -right-3 bg-purple-500/80 backdrop-blur-sm rounded-full px-2 py-1 z-10">
                <span class="text-xs text-white font-mono">v0.0.1</span>
              </div> -->
              
              <h3 class="text-xl font-bold">{{ title || 'Modal Title' }}</h3>
              <button 
                class="btn-modal-close hover:opacity-70 transition-opacity"
                :style="{ color: textColor }"
                @click="closeModal" 
                aria-label="Close modal"
              >
                <font-awesome-icon :icon="['fas', 'times']" class="w-4 h-4" />
              </button>
            </div>
            <div class="modal-content">
              <slot>
                <p>{{ content || 'Modal content goes here. This is a demonstration of the DUIMX modal component with full customization support.' }}</p>
              </slot>
            </div>
            <div v-if="$slots.footer || showDefaultFooter" class="modal-footer">
              <slot name="footer">
                <div class="default-footer" v-if="showDefaultFooter">
                  <button 
                    @click="closeModal"
                    :style="{ 
                      background: 'transparent', 
                      color: textColor, 
                      border: `1px solid ${textColor}`,
                      borderRadius: `${roundness * 0.5}px`,
                      padding: '8px 16px',
                      cursor: 'pointer'
                    }"
                    class="footer-btn-cancel"
                  >
                    Cancel
                  </button>
                  <button 
                    @click="handleConfirm"
                    :style="{ 
                      background: primaryColor, 
                      color: 'white', 
                      border: 'none',
                      borderRadius: `${roundness * 0.5}px`,
                      padding: '8px 16px',
                      cursor: 'pointer',
                      marginLeft: '8px'
                    }"
                    class="footer-btn-confirm"
                  >
                    Confirm
                  </button>
                </div>
              </slot>
            </div>
          </div>
      </div>
    </Transition>
  </Teleport>
  </div>
</template>

<script setup>
import { computed, defineProps, defineEmits, onMounted, onBeforeUnmount, watch, nextTick, ref, shallowRef, watchEffect } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps({
  roundness: { 
    type: Number, 
    default: 16,
    validator: (value) => value >= 0 && value <= 50
  },
  primaryColor: { 
    type: String, 
    default: '#6366f1',
    validator: (value) => /^#([0-9A-F]{3}){1,2}$/i.test(value) || /^(rgb|hsl)a?\(/.test(value)
  },
  bgColor: { type: String, default: '#1e293b' },
  textColor: { type: String, default: '#e2e8f0' },
  fontFamily: { type: String, default: 'inherit' },
  width: { 
    type: Number, 
    default: 400,
    validator: (value) => value > 0 && value <= 1200
  },
  height: { 
    type: Number, 
    default: 240,
    validator: (value) => value > 0 && value <= 800
  },
  padding: { type: Number, default: 24 },
  margin: { type: Number, default: 12 },
  theme: { 
    type: String, 
    default: 'dark',
    validator: (value) => ['light', 'dark', 'auto'].includes(value)
  },
  compact: { type: Boolean, default: false },
  isOpen: { type: Boolean, default: false },
  title: { type: String, default: '' },
  content: { type: String, default: '' },
  closeOnOverlay: { 
    type: Boolean, 
    default: true 
  },
  isDocs: { type: Boolean, default: false },
  triggerText: { type: String, default: 'Open Modal' },
  showDefaultFooter: { type: Boolean, default: true },
  // Enhanced focus management props
  autoFocus: { type: Boolean, default: true },
  returnFocus: { type: Boolean, default: true },
  trapFocus: { type: Boolean, default: true },
  closeOnEscape: { type: Boolean, default: true },
  // Animation props
  animationDuration: {
    type: Number,
    default: 300,
    validator: (value) => value >= 0 && value <= 1000
  },
  backdropBlur: {
    type: Number,
    default: 4,
    validator: (value) => value >= 0 && value <= 20
  }
});

const emit = defineEmits(['close', 'confirm', 'open', 'escape-pressed', 'backdrop-click']);

// Enhanced Focus Management System
const modalRef = shallowRef(null);
const overlayRef = shallowRef(null);
const triggerRef = shallowRef(null);
const previousActiveElement = shallowRef(null);
const focusableElements = shallowRef([]);
const firstFocusableElement = shallowRef(null);
const lastFocusableElement = shallowRef(null);
const focusTrapActive = ref(false);

// Internal state
const internalOpen = ref(false);
const isAnimating = ref(false);

// Performance optimization: CSS variables application
const applyCssVariables = () => {
  if (modalRef.value) {
    const element = modalRef.value;
    element.style.setProperty('--modal-primary-color', props.primaryColor);
    element.style.setProperty('--modal-bg-color', props.bgColor);
    element.style.setProperty('--modal-text-color', props.textColor);
    element.style.setProperty('--modal-width', `${props.width}px`);
    element.style.setProperty('--modal-height', `${props.height}px`);
    element.style.setProperty('--modal-padding', `${props.padding}px`);
    element.style.setProperty('--modal-margin', `${props.margin}px`);
    element.style.setProperty('--modal-roundness', `${props.roundness}px`);
    element.style.setProperty('--modal-animation-duration', `${props.animationDuration}ms`);
    element.style.setProperty('--modal-backdrop-blur', `${props.backdropBlur}px`);
  }
};

// Watch for prop changes and update CSS variables
watchEffect(() => {
  applyCssVariables();
});

// Advanced focus trap implementation
const getFocusableElements = () => {
  if (!modalRef.value) return [];
  
  const focusableSelectors = [
    'button:not([disabled])',
    'input:not([disabled])',
    'textarea:not([disabled])',
    'select:not([disabled])',
    'a[href]',
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable="true"]'
  ];
  
  return Array.from(modalRef.value.querySelectorAll(focusableSelectors.join(',')))
    .filter(element => {
      // Additional checks for visibility and accessibility
      const style = window.getComputedStyle(element);
      return style.display !== 'none' && 
             style.visibility !== 'hidden' && 
             !element.hasAttribute('aria-hidden');
    });
};

const updateFocusableElements = () => {
  focusableElements.value = getFocusableElements();
  firstFocusableElement.value = focusableElements.value[0];
  lastFocusableElement.value = focusableElements.value[focusableElements.value.length - 1];
};

const trapFocus = (event) => {
  if (!props.trapFocus || !focusTrapActive.value) return;
  
  const { key, shiftKey } = event;
  
  if (key !== 'Tab') return;
  
  // If no focusable elements, prevent tabbing
  if (focusableElements.value.length === 0) {
    event.preventDefault();
    return;
  }
  
  // Handle forward tab from last element
  if (!shiftKey && document.activeElement === lastFocusableElement.value) {
    event.preventDefault();
    firstFocusableElement.value?.focus();
    return;
  }
  
  // Handle backward tab from first element
  if (shiftKey && document.activeElement === firstFocusableElement.value) {
    event.preventDefault();
    lastFocusableElement.value?.focus();
    return;
  }
};

// Enhanced keyboard event handling
const handleKeyDown = (event) => {
  const { key } = event;
  
  switch (key) {
    case 'Escape':
      if (props.closeOnEscape) {
        event.preventDefault();
        emit('escape-pressed', event);
        closeModal();
      }
      break;
    case 'Tab':
      trapFocus(event);
      break;
    default:
      break;
  }
};

// Modal lifecycle management
const openModal = () => {
  if (internalOpen.value || isAnimating.value) return;
  
  // Store previous focus for restoration
  if (props.returnFocus) {
    previousActiveElement.value = document.activeElement;
  }
  
  isAnimating.value = true;
  internalOpen.value = true;
  
  nextTick(() => {
    updateFocusableElements();
    
    if (props.autoFocus) {
      // Focus the modal container or first focusable element
      const elementToFocus = firstFocusableElement.value || modalRef.value;
      elementToFocus?.focus();
    }
    
    // Activate focus trap after DOM update
    setTimeout(() => {
      focusTrapActive.value = props.trapFocus;
      isAnimating.value = false;
    }, 50);
  });
  
  // Add global event listeners
  document.addEventListener('keydown', handleKeyDown);
  
  // Prevent body scroll
  document.body.style.overflow = 'hidden';
  
  emit('open');
};

const closeModal = () => {
  if (!internalOpen.value || isAnimating.value) return;
  
  isAnimating.value = true;
  focusTrapActive.value = false;
  
  // Remove global event listeners
  document.removeEventListener('keydown', handleKeyDown);
  
  // Restore body scroll
  document.body.style.overflow = '';
  
  // Restore focus to previous element
  if (props.returnFocus && previousActiveElement.value) {
    // Use RAF to ensure DOM has updated
    requestAnimationFrame(() => {
      previousActiveElement.value?.focus();
      previousActiveElement.value = null;
    });
  }
  
  // Close after animation
  setTimeout(() => {
    internalOpen.value = false;
    isAnimating.value = false;
  }, props.animationDuration);
  
  emit('close');
};

// Handle backdrop clicks
const handleBackdropClick = (event) => {
  if (event.target === overlayRef.value && props.closeOnOverlay) {
    emit('backdrop-click', event);
    closeModal();
  }
};

// Enhanced action handlers
const handleClose = () => {
  closeModal();
};

const handleConfirm = () => {
  emit('confirm');
  closeModal();
};

// Watch for external open/close changes
watch(() => props.isOpen, (newValue) => {
  if (newValue && !internalOpen.value) {
    openModal();
  } else if (!newValue && internalOpen.value) {
    closeModal();
  }
}, { immediate: true });

// Cleanup on unmount
onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeyDown);
  document.body.style.overflow = '';
  
  if (previousActiveElement.value) {
    previousActiveElement.value.focus();
  }
});

// Internal modal state
const isModalOpen = ref(false);

const triggerButtonStyle = computed(() => ({
  background: props.primaryColor,
  color: 'white',
  border: 'none',
  borderRadius: `${props.roundness}px`,
  padding: `${props.padding * 0.5}px ${props.padding}px`,
  cursor: 'pointer',
  fontFamily: props.fontFamily,
  fontSize: '16px',
  fontWeight: '500',
  transition: 'all 0.2s ease',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
}));

const roundnessClass = computed(() => {
  if (props.roundness <= 4) return 'rounded-sm';
  if (props.roundness <= 8) return 'rounded';
  if (props.roundness <= 12) return 'rounded-lg';
  if (props.roundness <= 20) return 'rounded-xl';
  return 'rounded-3xl';
});

const themeClasses = computed(() => {
  if (props.theme === 'light') {
    return {
      bg: 'bg-white',
      text: 'text-gray-900',
      border: 'border-gray-200'
    };
  }
  return {
    bg: 'bg-slate-800',
    text: 'text-slate-200',
    border: 'border-slate-700'
  };
});

const modalStyles = computed(() => ({
  backgroundColor: props.bgColor,
  color: props.textColor,
  fontFamily: props.fontFamily,
  width: `${props.width}px`,
  minHeight: `${props.height}px`,
  padding: `${props.padding}px`,
  margin: `${props.margin}px`,
  maxWidth: '95vw',
  maxHeight: '90vh',
  overflow: 'auto'
}));
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-trigger-btn {
  transition: all 0.2s ease;
}

.modal-trigger-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.modal-trigger-btn:active {
  transform: translateY(0);
}

.default-footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.footer-btn-cancel,
.footer-btn-confirm {
  transition: all 0.2s ease;
}

.footer-btn-cancel:hover {
  opacity: 0.8;
}

.footer-btn-confirm:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.modal-container {
  position: relative;
  outline: none;
  transition: all 0.3s ease;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.modal-content {
  margin-bottom: 1rem;
}

.modal-footer {
  text-align: right;
}

.btn-modal-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  padding: 0.25rem;
  line-height: 1;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.animate-in {
  animation: animate-in 0.3s ease-out;
}

.fade-in-0 {
  animation: fade-in 0.3s ease-out;
}

.zoom-in-95 {
  animation: zoom-in 0.3s ease-out;
}

@keyframes animate-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes zoom-in {
  from { transform: scale(0.95); }
  to { transform: scale(1); }
}
</style>
