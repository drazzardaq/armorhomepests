<template>
  <div 
    class="live-code-editor bg-slate-900/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500" 
    :class="{ 
      'fixed inset-4 z-50': isFullscreen,
      'h-[100vh] fixed inset-0 z-50 rounded-none': isExpandedFullView,
      'transform translate-y-full': !isVisible && !isFullscreen && !isExpandedFullView
    }"
  >
    <!-- Editor Header with Tabs -->
    <div class="flex items-center justify-between bg-slate-800/50 border-b border-purple-500/20 p-4">
      <div class="flex items-center gap-3">
        <div class="flex gap-1">
          <div class="w-3 h-3 rounded-full bg-red-500"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div class="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span class="text-slate-300 font-semibold">Live Editor</span>
        <div class="flex items-center gap-2 ml-4">
          <button 
            @click="toggleLivePreview"
            class="px-2 py-1 text-xs rounded-lg transition-all"
            :class="showLivePreview ? 'bg-green-500/20 text-green-300' : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'"
          >
            <font-awesome-icon :icon="['fas', 'eye']" class="w-3 h-3 mr-1" />
            {{ showLivePreview ? 'Live' : 'Preview' }}
          </button>
          <button 
            @click="toggleExpandedView"
            class="px-2 py-1 text-xs bg-slate-700/50 text-slate-300 rounded-lg hover:bg-slate-600/50 transition-all"
          >
            <font-awesome-icon :icon="['fas', isExpandedFullView ? 'compress-arrows-alt' : 'expand-arrows-alt']" class="w-3 h-3 mr-1" />
            {{ isExpandedFullView ? 'Normal' : 'Expand' }}
          </button>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <button 
          v-for="tab in tabs" 
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="[
            'px-3 py-1 rounded-lg text-sm font-medium transition-all',
            activeTab === tab.id 
              ? 'bg-purple-500 text-white' 
              : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
          ]"
        >
          {{ tab.label }}
        </button>
        <button 
          @click="copyCode" 
          class="ml-2 px-3 py-1 bg-slate-700/50 text-slate-300 rounded-lg hover:bg-slate-600/50 transition-all flex items-center gap-1"
          :class="{ 'bg-green-600/50 text-green-200': copied }"
        >
          <font-awesome-icon :icon="['fas', copied ? 'check' : 'copy']" class="w-4 h-4" />
          {{ copied ? 'Copied' : 'Copy' }}
        </button>
        <button 
          @click="toggleFullscreen" 
          class="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-lg hover:bg-slate-600/50 transition-all flex items-center gap-1"
        >
          <font-awesome-icon :icon="['fas', isFullscreen ? 'compress' : 'expand']" class="w-4 h-4" />
          {{ isFullscreen ? 'Exit' : 'Fullscreen' }}
        </button>
      </div>
    </div>

    <!-- Main Content Area -->
    <div class="flex" :class="isFullscreen || isExpandedFullView ? 'h-[calc(100vh-12rem)]' : 'h-96'">
      <!-- Code Editor Panel -->
      <div :class="showLivePreview ? 'w-1/2 border-r border-purple-500/20' : 'w-full'">
        <div class="h-full flex flex-col">
          <!-- Tab Content Area -->
          <div class="flex-1 relative">
            <textarea 
              v-if="activeTab === 'template'"
              v-model="templateCode"
              @input="onCodeChange"
              placeholder="<!-- Vue template code -->"
              class="w-full h-full bg-slate-800/50 text-slate-200 p-4 resize-none border-none font-mono text-sm"
              spellcheck="false"
            ></textarea>
            <textarea 
              v-if="activeTab === 'style'"
              v-model="styleCode"
              @input="onCodeChange"
              placeholder="/* CSS styles */"
              class="w-full h-full bg-slate-800/50 text-slate-200 p-4 resize-none border-none font-mono text-sm"
              spellcheck="false"
            ></textarea>
            <textarea 
              v-if="activeTab === 'script'"
              v-model="scriptCode"
              @input="onCodeChange"
              placeholder="// Vue composition API setup"
              class="w-full h-full bg-slate-800/50 text-slate-200 p-4 resize-none border-none font-mono text-sm"
              spellcheck="false"
            ></textarea>
          </div>
        </div>
      </div>

      <!-- Live Preview Panel -->
      <div v-if="showLivePreview" class="w-1/2 flex flex-col">
        <!-- Preview Header -->
        <div class="bg-slate-800/30 border-b border-purple-500/10 p-2 flex items-center justify-between">
          <span class="text-slate-400 text-sm font-medium">Live Preview</span>
          <div class="flex items-center gap-2">
            <button 
              @click="refreshPreview"
              class="px-2 py-1 text-xs bg-slate-700/50 text-slate-300 rounded hover:bg-slate-600/50 transition-all"
            >
              <font-awesome-icon :icon="['fas', 'sync-alt']" class="w-3 h-3 mr-1" />
              Refresh
            </button>
          </div>
        </div>
        
        <!-- Preview Area -->
        <div class="flex-1 bg-gradient-to-br from-slate-800/30 to-slate-900/30 p-4 overflow-auto">
          <div v-if="previewError" class="text-red-400 text-sm p-4 bg-red-900/20 border border-red-500/20 rounded-lg">
            <div class="font-semibold mb-2 flex items-center gap-2">
              <font-awesome-icon :icon="['fas', 'exclamation-triangle']" class="w-4 h-4" />
              Preview Error:
            </div>
            <div class="font-mono text-xs">{{ previewError }}</div>
          </div>
          <div v-else-if="previewHTML" class="flex items-center justify-center min-h-full">
            <div class="preview-wrapper" v-html="previewHTML"></div>
          </div>
          <div v-else class="flex items-center justify-center min-h-full text-slate-400">
            <div class="text-center">
              <font-awesome-icon :icon="['fas', 'eye']" class="text-4xl mb-2" />
              <div>Live preview will appear here</div>
              <div class="text-xs mt-1">Start editing to see changes</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Code Statistics and Export Options -->
    <div class="bg-slate-800/30 border-t border-purple-500/10 p-3">
      <div class="flex items-center justify-between">
        <span v-if="templateCode.length > 0" class="text-slate-400 text-xs">
          {{ templateCode.split('\n').length }} lines • {{ templateCode.length }} chars
        </span>
        <span v-else class="text-slate-500 text-xs">Code editor • Edit and export your components</span>
        <div class="flex items-center gap-2">
          <button 
            @click="resetCode" 
            class="px-3 py-1 bg-slate-700/50 text-slate-300 rounded text-xs hover:bg-slate-600/50 transition-all flex items-center gap-1"
          >
            <font-awesome-icon :icon="['fas', 'undo']" class="w-3 h-3" />
            Reset
          </button>
          <button 
            @click="exportCode" 
            class="px-3 py-1 bg-purple-500 text-white rounded text-xs hover:bg-purple-600 transition-all flex items-center gap-1"
          >
            <font-awesome-icon :icon="['fas', 'download']" class="w-3 h-3" />
            Export
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps({
  componentName: { type: String, required: true },
  initialTemplate: { type: String, default: '' },
  initialStyle: { type: String, default: '' },
  initialScript: { type: String, default: '' },
  isVisible: { type: Boolean, default: true }
});

const emit = defineEmits(['codeChange', 'toggleFullscreen']);

// Reactive state
const activeTab = ref('template');
const templateCode = ref(props.initialTemplate);
const styleCode = ref(props.initialStyle);
const scriptCode = ref(props.initialScript);
const copied = ref(false);
const isFullscreen = ref(false);
const isExpandedFullView = ref(false);
const showLivePreview = ref(false);
const previewHTML = ref('');
const previewError = ref('');

const tabs = [
  { id: 'template', label: 'Template' },
  { id: 'style', label: 'Styles' },
  { id: 'script', label: 'Script' }
];

const fullCode = computed(() => `<template>
${templateCode.value}
</template>

<script setup>
${scriptCode.value}
<\/script>

<style scoped>
${styleCode.value}
</style>`);

// Watch for prop changes and sync reactive state
watch(() => props.initialTemplate, (val) => { 
  templateCode.value = val; 
  updatePreview();
}, { immediate: true });

watch(() => props.initialStyle, (val) => { 
  styleCode.value = val; 
  updatePreview();
}, { immediate: true });

watch(() => props.initialScript, (val) => { 
  scriptCode.value = val; 
  updatePreview();
}, { immediate: true });

// Debounced code change handler
let codeChangeTimeout;
function onCodeChange() {
  clearTimeout(codeChangeTimeout);
  codeChangeTimeout = setTimeout(() => {
    emit('codeChange', {
      template: templateCode.value,
      style: styleCode.value,
      script: scriptCode.value,
      full: fullCode.value
    });
    
    if (showLivePreview.value) {
      updatePreview();
    }
  }, 300);
}

// Live preview functionality
function updatePreview() {
  if (!showLivePreview.value) return;
  
  try {
    previewError.value = '';
    
    // Create a simple HTML preview from template
    let html = templateCode.value.trim();
    
    if (html) {
      // Apply styles if available
      if (styleCode.value.trim()) {
        html = `<div style="all: initial;">${html}</div>`;
        // Inject styles
        const styleId = 'live-preview-styles';
        let styleEl = document.getElementById(styleId);
        if (!styleEl) {
          styleEl = document.createElement('style');
          styleEl.id = styleId;
          document.head.appendChild(styleEl);
        }
        styleEl.textContent = styleCode.value;
      }
      
      previewHTML.value = html;
    } else {
      previewHTML.value = '';
    }
  } catch (error) {
    previewError.value = error.message;
    previewHTML.value = '';
  }
}

function toggleLivePreview() {
  showLivePreview.value = !showLivePreview.value;
  if (showLivePreview.value) {
    nextTick(() => {
      updatePreview();
    });
  }
}

function toggleExpandedView() {
  isExpandedFullView.value = !isExpandedFullView.value;
}

function refreshPreview() {
  updatePreview();
}

function copyCode() {
  navigator.clipboard.writeText(fullCode.value);
  copied.value = true;
  setTimeout(() => { copied.value = false; }, 2000);
}

function resetCode() {
  templateCode.value = props.initialTemplate;
  styleCode.value = props.initialStyle;
  scriptCode.value = props.initialScript;
  updatePreview();
}

function exportCode() {
  const blob = new Blob([fullCode.value], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${props.componentName}.vue`;
  a.click();
  URL.revokeObjectURL(url);
}

function toggleFullscreen() {
  isFullscreen.value = !isFullscreen.value;
  emit('toggleFullscreen', isFullscreen.value);
}

// Initialize preview on mount
onMounted(() => {
  if (templateCode.value) {
    updatePreview();
  }
});
</script>

<style scoped>
.live-code-editor {
  font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
}

textarea {
  font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
  line-height: 1.4;
  tab-size: 2;
}

textarea:focus {
  outline: none;
  box-shadow: inset 0 0 0 1px rgba(168, 85, 247, 0.3);
}

/* Custom scrollbar for code areas */
textarea::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

textarea::-webkit-scrollbar-track {
  background: rgba(30, 41, 59, 0.5);
}

textarea::-webkit-scrollbar-thumb {
  background: rgba(168, 85, 247, 0.3);
  border-radius: 4px;
}

textarea::-webkit-scrollbar-thumb:hover {
  background: rgba(168, 85, 247, 0.5);
}

/* Preview wrapper styles */
.preview-wrapper {
  max-width: 100%;
  transform-origin: center;
}

/* Ensure preview components don't break layout */
.preview-wrapper * {
  max-width: 100%;
  box-sizing: border-box;
}
</style>
