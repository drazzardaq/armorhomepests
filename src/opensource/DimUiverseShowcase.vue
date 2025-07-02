<template>
  <!-- Documentation Mode -->
  <div v-if="isDocs" class="DUIMX-docs prose prose-purple max-w-full w-full min-w-[800px] p-6 bg-slate-900/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl">
    <div class="mb-6 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4">
      <h2 class="mb-2 text-2xl font-bold text-purple-300">🌐 DUIMX Uiverse Showcase</h2>
      <p class="text-purple-200">Interactive showcase component that displays Uiverse.io inspired variants with live previews and integration capabilities.</p>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">✨ Features</h3>
    <ul class="mb-6 space-y-2 text-purple-200">
      <li>🎨 <strong>Live Uiverse Variants</strong> - Real-time component browsing and preview</li>
      <li>⚡ <strong>Interactive Grid</strong> - Touch-friendly component gallery</li>
      <li>🔍 <strong>Category Filtering</strong> - Browse by component type</li>
      <li>📋 <strong>One-Click Import</strong> - Direct integration to playground</li>
      <li>💡 <strong>Live Code Preview</strong> - Instant HTML/CSS/JS preview</li>
      <li>🎯 <strong>Smart Search</strong> - Find variants by tags and author</li>
    </ul>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">🎯 Usage</h3>
    <div class="mb-6 rounded-lg border border-purple-500/30 bg-slate-800/50 p-4">
      <pre class="text-sm text-purple-200"><code>&lt;DimUiverseShowcase 
  :category="'button'"
  :limit="6"
  :showSearch="true"
  :showCategories="true"
  @variantSelected="handleSelection"
  @variantImported="handleImport"
/&gt;</code></pre>
    </div>
  </div>
  
  <!-- Normal Component Mode -->
  <div v-else class="uiverse-showcase bg-slate-900/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl overflow-hidden shadow-2xl" :style="showcaseStyles">
    <!-- Header -->
    <div class="bg-slate-800/50 border-b border-purple-500/20 p-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
            <span class="text-white font-bold text-lg">🌐</span>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-purple-300">Uiverse.io Showcase</h3>
            <p class="text-sm text-slate-400">{{ stats.total }} variants • {{ stats.categories }} categories</p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <!-- Category Filter -->
          <select v-if="showCategories" v-model="selectedCategory" @change="handleCategoryChange" 
                  class="px-3 py-2 bg-slate-700/50 border border-purple-500/30 rounded-lg text-purple-200 text-sm focus:outline-none focus:border-purple-400">
            <option value="all">All Categories</option>
            <option v-for="cat in availableCategories" :key="cat" :value="cat">
              {{ cat.charAt(0).toUpperCase() + cat.slice(1) }}s
            </option>
          </select>
          
          <!-- Refresh Button -->
          <button @click="refreshVariants" :disabled="isLoading" 
                  class="px-3 py-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-lg text-purple-300 text-sm transition-all">
            <span v-if="isLoading" class="inline-flex items-center gap-1">
              <div class="w-3 h-3 border border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
              Loading...
            </span>
            <span v-else>🔄 Refresh</span>
          </button>
        </div>
      </div>
      
      <!-- Search Bar -->
      <div v-if="showSearch" class="mt-4">
        <div class="relative">
          <input v-model="searchQuery" @input="handleSearch" 
                 placeholder="Search variants by name, author, or tags..."
                 class="w-full pl-10 pr-4 py-2 bg-slate-700/50 border border-purple-500/30 rounded-lg text-purple-200 placeholder-slate-400 focus:outline-none focus:border-purple-400">
          <div class="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">
            🔍
          </div>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="isLoading && variants.length === 0" class="p-8 text-center">
      <div class="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
      <p class="text-purple-300 text-lg">Fetching Uiverse.io components...</p>
      <p class="text-slate-400 text-sm mt-2">Discovering amazing variants from the community</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="p-8 text-center">
      <div class="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <span class="text-red-400 text-2xl">⚠️</span>
      </div>
      <p class="text-red-400 text-lg mb-2">Failed to load components</p>
      <p class="text-slate-400 text-sm mb-4">{{ error }}</p>
      <button @click="refreshVariants" 
              class="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-lg text-red-300 transition-all">
        Try Again
      </button>
    </div>

    <!-- Variants Grid -->
    <div v-else-if="filteredVariants.length > 0" class="p-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto custom-scrollbar">
        <div v-for="variant in displayedVariants" :key="variant.id"
             class="variant-card bg-slate-800/40 border border-purple-500/20 rounded-xl p-4 hover:border-purple-400/40 transition-all cursor-pointer group"
             @click="selectVariant(variant)">
          
          <!-- Preview Area -->
          <div class="preview-area bg-slate-900/50 rounded-lg p-3 mb-3 min-h-[80px] flex items-center justify-center border border-slate-600/30 relative overflow-hidden">
            <div v-html="variant.htmlCode" class="preview-component scale-75 origin-center"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          
          <!-- Variant Info -->
          <div class="variant-info">
            <h4 class="font-semibold text-purple-200 mb-1 text-sm truncate">{{ variant.name }}</h4>
            <div class="flex items-center gap-2 mb-2">
              <span class="text-xs text-slate-400">by {{ variant.author }}</span>
              <div class="flex items-center gap-1 text-xs text-pink-300">
                <span>❤️</span>
                <span>{{ variant.likes }}</span>
              </div>
            </div>
            
            <!-- Tags -->
            <div class="flex flex-wrap gap-1 mb-2">
              <span v-for="tag in variant.tags.slice(0, 3)" :key="tag"
                    class="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                {{ tag }}
              </span>
            </div>
            
            <!-- Framework Badge -->
            <div class="flex items-center justify-between">
              <span class="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                {{ variant.framework || 'HTML/CSS' }}
              </span>
              <span class="text-xs text-slate-500">{{ formatDate(variant.createdAt) }}</span>
            </div>
          </div>
          
          <!-- Quick Actions -->
          <div class="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <button @click.stop="quickPreview(variant)" 
                    class="flex-1 px-2 py-1 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded text-blue-300 text-xs transition-all">
              👁️ Preview
            </button>
            <button @click.stop="quickImport(variant)" 
                    class="flex-1 px-2 py-1 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded text-green-300 text-xs transition-all">
              📥 Import
            </button>
            <button @click.stop="copyVariantCode(variant)" 
                    class="px-2 py-1 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded text-purple-300 text-xs transition-all">
              📋
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="p-8 text-center">
      <div class="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
        <span class="text-slate-400 text-2xl">🔍</span>
      </div>
      <p class="text-slate-400 text-lg">No variants found</p>
      <p class="text-slate-500 text-sm mt-1">Try adjusting your search or category filter</p>
    </div>

    <!-- Pagination -->
    <div v-if="filteredVariants.length > limit" class="border-t border-purple-500/20 p-4 flex items-center justify-between">
      <span class="text-sm text-slate-400">
        Showing {{ displayedVariants.length }} of {{ filteredVariants.length }} variants
      </span>
      <div class="flex gap-2">
        <button @click="loadMore" v-if="hasMore" 
                class="px-3 py-1 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded text-purple-300 text-sm transition-all">
          Load More
        </button>
        <button @click="showAll" v-if="!showingAll" 
                class="px-3 py-1 bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/30 rounded text-slate-300 text-sm transition-all">
          Show All
        </button>
      </div>
    </div>

    <!-- Stats Footer -->
    <div v-if="variants.length > 0" class="bg-slate-800/30 border-t border-purple-500/10 p-3 text-center">
      <div class="flex justify-center gap-6 text-xs text-slate-400">
        <span>{{ stats.buttons }} Buttons</span>
        <span>{{ stats.cards }} Cards</span>
        <span>{{ stats.inputs }} Inputs</span>
        <span>{{ stats.loaders }} Loaders</span>
        <span>{{ stats.tooltips }} Tooltips</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue';
import { uiverseService } from '@/composables/UiverseIntegrationService.js';

// Props
const props = defineProps({
  // Standard DUIMX props
  roundness: { type: Number, default: 12 },
  primaryColor: { type: String, default: '#6366f1' },
  bgColor: { type: String, default: 'transparent' },
  textColor: { type: String, default: '#e2e8f0' },
  fontFamily: { type: String, default: 'inherit' },
  width: { type: Number, default: 800 },
  height: { type: Number, default: 600 },
  padding: { type: Number, default: 0 },
  margin: { type: Number, default: 0 },
  theme: { type: String, default: 'dark' },
  compact: { type: Boolean, default: false },
  isDocs: { type: Boolean, default: false },
  
  // Showcase-specific props
  category: { type: String, default: 'all' },
  limit: { type: Number, default: 9 },
  showSearch: { type: Boolean, default: true },
  showCategories: { type: Boolean, default: true },
  autoRefresh: { type: Boolean, default: false },
  refreshInterval: { type: Number, default: 30000 }
});

// Emits
const emit = defineEmits(['variantSelected', 'variantImported', 'error']);

// Reactive state
const variants = ref([]);
const filteredVariants = ref([]);
const displayedVariants = ref([]);
const isLoading = ref(false);
const error = ref('');
const searchQuery = ref('');
const selectedCategory = ref(props.category);
const currentPage = ref(1);
const showingAll = ref(false);

// Available categories
const availableCategories = ['button', 'card', 'tooltip', 'input', 'loader'];

// Computed properties
const showcaseStyles = computed(() => ({
  width: props.width ? `${props.width}px` : 'auto',
  height: props.height ? `${props.height}px` : 'auto',
  maxWidth: '100%',
  fontFamily: props.fontFamily
}));

const stats = computed(() => {
  const totalStats = variants.value.reduce((acc, variant) => {
    acc.total++;
    acc[variant.category + 's'] = (acc[variant.category + 's'] || 0) + 1;
    return acc;
  }, { total: 0, categories: 0 });
  
  stats.categories = Object.keys(stats).filter(key => key !== 'total' && key !== 'categories').length;
  return totalStats;
});

const hasMore = computed(() => {
  return displayedVariants.value.length < filteredVariants.value.length;
});

// Methods
const fetchVariants = async () => {
  try {
    isLoading.value = true;
    error.value = '';
    
    // Fetch variants for all categories or specific category
    if (selectedCategory.value === 'all') {
      const allVariants = [];
      for (const cat of availableCategories) {
        const catVariants = await uiverseService.fetchComponentVariants(cat, 20);
        allVariants.push(...catVariants);
      }
      variants.value = allVariants;
    } else {
      variants.value = await uiverseService.fetchComponentVariants(selectedCategory.value, props.limit * 2);
    }
    
    applyFilters();
    
    // Inject styles for preview
    await nextTick();
    injectPreviewStyles();
    
  } catch (err) {
    error.value = err.message;
    emit('error', err);
    console.error('Failed to fetch variants:', err);
  } finally {
    isLoading.value = false;
  }
};

const applyFilters = () => {
  let filtered = [...variants.value];
  
  // Category filter
  if (selectedCategory.value !== 'all') {
    filtered = filtered.filter(v => v.category === selectedCategory.value);
  }
  
  // Search filter
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(v => 
      v.name.toLowerCase().includes(query) ||
      v.author.toLowerCase().includes(query) ||
      v.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }
  
  filteredVariants.value = filtered;
  updateDisplayedVariants();
};

const updateDisplayedVariants = () => {
  if (showingAll.value) {
    displayedVariants.value = filteredVariants.value;
  } else {
    const endIndex = currentPage.value * props.limit;
    displayedVariants.value = filteredVariants.value.slice(0, endIndex);
  }
};

const handleCategoryChange = () => {
  currentPage.value = 1;
  showingAll.value = false;
  fetchVariants();
};

const handleSearch = () => {
  currentPage.value = 1;
  showingAll.value = false;
  applyFilters();
};

const refreshVariants = () => {
  uiverseService.clearCache();
  fetchVariants();
};

const loadMore = () => {
  currentPage.value++;
  updateDisplayedVariants();
};

const showAll = () => {
  showingAll.value = true;
  updateDisplayedVariants();
};

const selectVariant = (variant) => {
  emit('variantSelected', variant);
};

const quickPreview = (variant) => {
  // Open preview modal or detailed view
  selectVariant(variant);
};

const quickImport = (variant) => {
  const transformed = uiverseService.transformToVueComponent(variant, `Uiverse${variant.id}`);
  emit('variantImported', {
    variant,
    transformed,
    category: variant.category
  });
  
  // Show success notification
  showNotification(`Imported "${variant.name}" successfully!`, 'success');
};

const copyVariantCode = async (variant) => {
  try {
    const fullCode = `<!-- ${variant.name} by ${variant.author} -->
<!-- HTML -->
${variant.htmlCode}

<!-- CSS -->
<style>
${variant.cssCode}
</style>

${variant.jsCode ? `<!-- JavaScript -->
<script>
${variant.jsCode}
<\/script>` : ''}`;
    
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
  displayedVariants.value.forEach(variant => {
    if (variant.cssCode) {
      const styleEl = document.createElement('style');
      styleEl.setAttribute('data-uiverse-preview', variant.id);
      styleEl.textContent = variant.cssCode;
      document.head.appendChild(styleEl);
    }
  });
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

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

// Watchers
watch(() => props.category, (newCategory) => {
  selectedCategory.value = newCategory;
  handleCategoryChange();
});

// Lifecycle
onMounted(() => {
  fetchVariants();
  
  // Setup auto-refresh if enabled
  if (props.autoRefresh) {
    setInterval(() => {
      refreshVariants();
    }, props.refreshInterval);
  }
});
</script>

<style scoped>
.preview-component {
  /* Ensure preview components are properly isolated */
  all: revert;
  max-width: 100%;
  max-height: 100%;
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

/* Animation for loading variants */
.variant-card {
  animation: fadeInUp 0.3s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Staggered animation delay */
.variant-card:nth-child(1) { animation-delay: 0.1s; }
.variant-card:nth-child(2) { animation-delay: 0.2s; }
.variant-card:nth-child(3) { animation-delay: 0.3s; }
.variant-card:nth-child(4) { animation-delay: 0.4s; }
.variant-card:nth-child(5) { animation-delay: 0.5s; }
.variant-card:nth-child(6) { animation-delay: 0.6s; }
</style>
