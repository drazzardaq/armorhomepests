<template>
  <div class="uiverse-browser bg-slate-900/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl overflow-hidden shadow-2xl">
    <!-- Header -->
    <div class="bg-slate-800/50 border-b border-purple-500/20 p-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-sm">UV</span>
          </div>
          <h3 class="text-lg font-semibold text-purple-300">Uiverse.io Browser</h3>
        </div>
        <div class="flex items-center gap-2">
          <select v-model="selectedCategory" @change="handleCategoryChange" class="px-3 py-1 bg-slate-700/50 border border-purple-500/30 rounded-lg text-purple-200 text-sm focus:outline-none focus:border-purple-400">
            <option value="button">Buttons</option>
            <option value="card">Cards</option>
            <option value="tooltip">Tooltips</option>
            <option value="input">Inputs</option>
            <option value="loader">Loaders</option>
          </select>
          <button @click="refreshVariants" :disabled="isLoading" class="px-3 py-1 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-lg text-purple-300 text-sm transition-all flex items-center gap-2">
            <span v-if="isLoading" class="inline-flex items-center gap-1">
              <font-awesome-icon :icon="['fas', 'spinner']" class="w-3 h-3 animate-spin" />
              Loading...
            </span>
            <span v-else class="flex items-center gap-1">
              <font-awesome-icon :icon="['fas', 'sync-alt']" class="w-3 h-3" />
              Refresh
            </span>
          </button>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="isLoading && variants.length === 0" class="p-8 text-center">
      <div class="w-12 h-12 flex items-center justify-center mx-auto mb-4">
        <font-awesome-icon :icon="['fas', 'spinner']" class="text-purple-500 text-2xl animate-spin" />
      </div>
      <p class="text-purple-300">Fetching components from Uiverse.io...</p>
      <p class="text-slate-400 text-sm mt-2">This may take a moment</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="p-8 text-center">
      <div class="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <font-awesome-icon :icon="['fas', 'exclamation-triangle']" class="text-red-400 text-xl" />
      </div>
      <p class="text-red-400 mb-2">Failed to fetch components</p>
      <p class="text-slate-400 text-sm mb-4">{{ error }}</p>
      <button @click="refreshVariants" class="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-lg text-red-300 transition-all flex items-center gap-2">
        <font-awesome-icon :icon="['fas', 'redo']" class="w-3 h-3" />
        Try Again
      </button>
    </div>

    <!-- Variants Grid -->
    <div v-else-if="variants.length > 0" class="p-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto custom-scrollbar">
        <div 
          v-for="variant in variants" 
          :key="variant.id"
          class="variant-card bg-slate-800/40 border border-purple-500/20 rounded-xl p-4 hover:border-purple-400/40 transition-all cursor-pointer group"
          @click="selectVariant(variant)"
        >
          <!-- Preview -->
          <div class="preview-area bg-slate-900/50 rounded-lg p-3 mb-3 min-h-[80px] flex items-center justify-center border border-slate-600/30">
            <div v-html="variant.htmlCode" class="preview-component scale-75 origin-center"></div>
          </div>
          
          <!-- Info -->
          <div class="variant-info">
            <h4 class="font-semibold text-purple-200 mb-1 text-sm truncate">{{ variant.name }}</h4>
            <div class="flex items-center gap-2 mb-2">
              <span class="text-xs text-slate-400">by {{ variant.author }}</span>
              <div class="flex items-center gap-1 text-xs text-pink-400">
                <span>❤️</span>
                <span>{{ variant.likes }}</span>
              </div>
            </div>
            <div class="flex flex-wrap gap-1 mb-2">
              <span 
                v-for="tag in variant.tags.slice(0, 3)" 
                :key="tag"
                class="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs"
              >
                {{ tag }}
              </span>
            </div>
          </div>
          
          <!-- Actions -->
          <div class="flex gap-2 mt-3">
            <button 
              @click.stop="previewVariant(variant)"
              class="flex-1 px-3 py-1 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg text-blue-300 text-xs transition-all"
            >
              👁️ Preview
            </button>
            <button 
              @click.stop="importVariant(variant)"
              class="flex-1 px-3 py-1 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded-lg text-green-300 text-xs transition-all"
            >
              📥 Import
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="p-8 text-center">
      <div class="w-12 h-12 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
        <font-awesome-icon :icon="['fas', 'search']" class="text-slate-400 text-xl" />
      </div>
      <p class="text-slate-400">No components found</p>
      <p class="text-slate-500 text-sm mt-1">Try selecting a different category</p>
    </div>

    <!-- Preview Modal -->
    <Teleport to="body">
      <div v-if="previewVariant" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4" @click="closePreview">
        <div class="bg-slate-900 border border-purple-500/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden" @click.stop>
          <!-- Preview Header -->
          <div class="bg-slate-800/50 border-b border-purple-500/20 p-4 flex items-center justify-between">
            <div>
              <h3 class="text-lg font-semibold text-purple-300">{{ selectedVariant?.name }}</h3>
              <p class="text-sm text-slate-400">by {{ selectedVariant?.author }}</p>
            </div>
            <button @click="closePreview" class="text-slate-400 hover:text-purple-300 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <!-- Preview Content -->
          <div class="p-6 max-h-[70vh] overflow-y-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <!-- Live Preview -->
              <div>
                <h4 class="text-sm font-semibold text-purple-300 mb-3">Live Preview</h4>
                <div class="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-600/30 rounded-xl p-6 min-h-[200px] flex items-center justify-center">
                  <div v-html="selectedVariant?.htmlCode" class="preview-component"></div>
                </div>
              </div>
              
              <!-- Code -->
              <div>
                <h4 class="text-sm font-semibold text-purple-300 mb-3">Code</h4>
                <div class="space-y-3">
                  <div>
                    <div class="text-xs text-slate-400 mb-1">HTML</div>
                    <pre class="bg-slate-800/50 border border-slate-600/30 rounded-lg p-3 text-xs text-slate-300 overflow-x-auto"><code>{{ selectedVariant?.htmlCode }}</code></pre>
                  </div>
                  <div>
                    <div class="text-xs text-slate-400 mb-1">CSS</div>
                    <pre class="bg-slate-800/50 border border-slate-600/30 rounded-lg p-3 text-xs text-slate-300 overflow-x-auto max-h-32 overflow-y-auto"><code>{{ selectedVariant?.cssCode }}</code></pre>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Actions -->
            <div class="flex gap-3 mt-6 pt-4 border-t border-slate-700">
              <button 
                @click="copyVariantCode(selectedVariant)"
                class="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg text-blue-300 transition-all flex items-center gap-2"
              >
                <span>📋</span>
                Copy Code
              </button>
              <button 
                @click="importVariant(selectedVariant)"
                class="px-4 py-2 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded-lg text-green-300 transition-all flex items-center gap-2"
              >
                <span>📥</span>
                Import to Playground
              </button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { uiverseService } from '@/composables/UiverseIntegrationService.js';

const props = defineProps({
  selectedComponent: { type: String, default: 'button' }
});

const emit = defineEmits(['variantSelected', 'variantImported']);

// Reactive state
const selectedCategory = ref(props.selectedComponent || 'button');
const variants = ref([]);
const isLoading = ref(false);
const error = ref('');
const selectedVariant = ref(null);
const previewVariant = ref(false);

// Methods
const handleCategoryChange = () => {
  fetchVariants();
};

const fetchVariants = async () => {
  try {
    isLoading.value = true;
    error.value = '';
    
    const fetchedVariants = await uiverseService.fetchComponentVariants(selectedCategory.value, 6);
    variants.value = fetchedVariants;
    
    // Apply styles for preview
    await nextTick();
    injectPreviewStyles();
    
  } catch (err) {
    error.value = err.message;
    console.error('Failed to fetch variants:', err);
  } finally {
    isLoading.value = false;
  }
};

const refreshVariants = () => {
  uiverseService.clearCache();
  fetchVariants();
};

const selectVariant = (variant) => {
  selectedVariant.value = variant;
  previewVariant.value = true;
  emit('variantSelected', variant);
};

const closePreview = () => {
  previewVariant.value = false;
  selectedVariant.value = null;
};

const importVariant = (variant) => {
  // Transform variant to Vue component format
  const vueComponent = uiverseService.transformToVueComponent(variant, selectedCategory.value);
  
  emit('variantImported', {
    variant,
    vueComponent,
    category: selectedCategory.value
  });
  
  // Show success notification
  showNotification(`Imported "${variant.name}" successfully!`, 'success');
  
  closePreview();
};

const copyVariantCode = async (variant) => {
  try {
    const fullCode = `<!-- ${variant.name} by ${variant.author} -->
<!-- HTML -->
${variant.htmlCode}

<!-- CSS -->
<style>
${variant.cssCode}
</style>`;
    
    await navigator.clipboard.writeText(fullCode);
    showNotification('Code copied to clipboard!', 'success');
  } catch (err) {
    showNotification('Failed to copy code', 'error');
  }
};

const injectPreviewStyles = () => {
  // Remove existing preview styles
  const existingStyles = document.querySelectorAll('style[data-uiverse-preview]');
  existingStyles.forEach(style => style.remove());
  
  // Add styles for current variants
  variants.value.forEach(variant => {
    if (variant.cssCode) {
      const styleEl = document.createElement('style');
      styleEl.setAttribute('data-uiverse-preview', variant.id);
      styleEl.textContent = variant.cssCode;
      document.head.appendChild(styleEl);
    }
  });
  
  // Add selected variant styles for preview modal
  if (selectedVariant.value?.cssCode) {
    const styleEl = document.createElement('style');
    styleEl.setAttribute('data-uiverse-preview', 'modal-' + selectedVariant.value.id);
    styleEl.textContent = selectedVariant.value.cssCode;
    document.head.appendChild(styleEl);
  }
};

const showNotification = (message, type = 'info') => {
  // Simple notification - in a real app you'd use a proper notification system
  const notification = document.createElement('div');
  notification.className = `fixed top-4 right-4 px-4 py-2 rounded-lg text-white z-[10000] transition-all ${
    type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500'
  }`;
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
};

// Lifecycle
onMounted(() => {
  fetchVariants();
});

// Watch for component changes
import { watch } from 'vue';
watch(() => props.selectedComponent, (newComponent) => {
  if (newComponent && newComponent !== selectedCategory.value) {
    selectedCategory.value = newComponent;
    fetchVariants();
  }
});
</script>

<style scoped>
.preview-component {
  /* Ensure preview components are properly isolated */
  all: revert;
}

.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(168, 85, 247, 0.3) rgba(51, 65, 85, 0.5);
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(51, 65, 85, 0.5);
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(168, 85, 247, 0.3);
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(168, 85, 247, 0.5);
}

.variant-card:hover .preview-component {
  transform: scale(0.8);
  transition: transform 0.2s ease;
}
</style>
