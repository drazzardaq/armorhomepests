<template>
  <div class="editor-pwa flex flex-col w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 bg-gradient-animated opacity-20"></div>
    <div class="absolute inset-0">
      <div class="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div class="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      <div class="absolute bottom-10 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
    </div>
    
    <!-- Modern Header -->
    <header class="relative z-10 p-6 flex items-center justify-between backdrop-blur-sm border-b border-white/10">
      <div class="flex items-center gap-4">
        <div class="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse"></div>
        <span class="font-bold text-xl bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">DUIMX Editor</span>
      </div>
      <div class="flex items-center gap-3">
        <button v-if="hasDocs" @click="toggleDocs" class="flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur border border-purple-500/30 rounded-xl text-purple-200 hover:bg-purple-500/20 transition-all">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Docs
        </button>
        <a href="/playground" class="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Open Playground
        </a>
      </div>
    </header>

    <div class="flex flex-1 relative z-10">
      <!-- Controls Sidebar -->
      <aside v-if="showControls" class="w-72 bg-slate-800/50 backdrop-blur-xl border-r border-purple-500/30 p-6 flex flex-col gap-6 overflow-y-auto">
        <div class="font-bold text-lg text-purple-300 mb-2">Live Controls</div>
        
        <!-- Use UnifiedControls -->
        <UnifiedControls
          :theme="theme"
          :primary-color="primaryColor"
          :font-family="fontFamily"
          :roundness="roundness"
          :width="width"
          :height="height"
          :padding="padding"
          :margin="margin"
          :bg-color="bgColor"
          :text-color="textColor"
          :box-shadow="'md'"
          :border-width="1.5"
          :animation="'none'"
          :export-format="'vue'"
          :copied="copied"
          :show-export-controls="false"
          :show-live-code="true"
          :live-code="editableCode"
          @update:theme="$emit('update:theme', $event)"
          @update:primary-color="$emit('update:primaryColor', $event)"
          @update:font-family="$emit('update:fontFamily', $event)"
          @update:roundness="$emit('update:roundness', $event)"
          @update:width="$emit('update:width', $event)"
          @update:height="$emit('update:height', $event)"
          @update:padding="$emit('update:padding', $event)"
          @update:margin="$emit('update:margin', $event)"
          @update:bg-color="$emit('update:bgColor', $event)"
          @update:text-color="$emit('update:textColor', $event)"
          @update:live-code="editableCode = $event"
          @copy="copyCode"
        />
      </aside>
      <!-- Main Content Area -->
      <main class="flex-1 flex flex-col">
        <section class="flex-1 flex flex-col items-center justify-center p-8">
          <div v-if="!hasComponent" class="w-full max-w-2xl mx-auto flex flex-col items-center justify-center h-full min-h-[400px]">
            <div class="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center border border-purple-500/30">
              <span class="text-4xl">🎨</span>
            </div>
            <h2 class="text-2xl font-bold text-slate-200 mb-2">Welcome to DUIMX Editor</h2>
            <p class="text-slate-400 mb-6 text-center">Create and customize beautiful UI components with live controls and instant preview.</p>
            <a href="/playground" class="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg">
              Open Playground
            </a>
          </div>
          <div v-else class="w-full max-w-4xl mx-auto">
            <div class="bg-slate-800/30 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl">
              <slot :theme="theme" :roundness="roundness" :primaryColor="primaryColor" :padding="padding" :margin="margin" :width="width" :height="height" :bgColor="bgColor" :textColor="textColor" :fontFamily="fontFamily" :code="editableCode" :copyCode="copyCode" />
            </div>
            
            <!-- Live Code Editor Section -->
            <div class="mt-8">
              <LiveCodeEditor 
                :componentName="componentName || 'Component'"
                :initialTemplate="initialTemplate"
                :initialStyle="initialStyle" 
                :initialScript="initialScript"
                @codeChange="onCodeChange"
              />
            </div>
          </div>
        </section>
        
        <!-- Floating Docs Drawer -->
        <transition name="slide">
          <aside v-if="showDocs" class="fixed top-0 right-0 h-full w-[50vw] bg-slate-900/95 backdrop-blur-xl border-l border-purple-500/30 shadow-2xl z-50 p-6 overflow-y-auto">
            <button @click="toggleDocs" class="absolute top-4 left-4 text-slate-400 hover:text-purple-400 text-xl transition-colors">&larr;</button>
            <div class="font-bold text-lg text-purple-300 mb-4 mt-8">Component Documentation</div>
            <div class="prose prose-purple max-w-none text-sm text-slate-300">
              <slot name="docs">
                <div class="text-slate-500 italic">No documentation available for this component.</div>
              </slot>
              <div class="mt-4">
                <a v-if="drawerLink" :href="drawerLink" class="text-purple-400 hover:text-purple-300 underline transition-colors" target="_blank">Go to Docs Section</a>
                <span v-else class="text-slate-500">Docs link not available.</span>
              </div>
            </div>
          </aside>
        </transition>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import LiveCodeEditor from './LiveCodeEditor.vue';
import UnifiedControls from './UnifiedControls.vue';

const props = defineProps({
  theme: { type: String, default: 'light' },
  showDocs: { type: Boolean, default: false },
  roundness: { type: Number, default: 12 },
  primaryColor: { type: String, default: '#8b5cf6' },
  padding: { type: Number, default: 16 },
  margin: { type: Number, default: 8 },
  width: { type: Number, default: 400 },
  height: { type: Number, default: 120 },
  bgColor: { type: String, default: '#1e293b' },
  textColor: { type: String, default: '#e2e8f0' },
  fontFamily: { type: String, default: 'inherit' },
  code: { type: String, default: '' },
  hasComponent: { type: Boolean, default: true },
  hasDocs: { type: Boolean, default: true },
  showControls: { type: Boolean, default: true },
  drawerLink: { type: String, default: '' },
  componentName: { type: String, default: 'Component' },
  initialTemplate: { type: String, default: '' },
  initialStyle: { type: String, default: '' },
  initialScript: { type: String, default: '' }
});

const editableCode = ref(props.code);
const copied = ref(false);
const showDocs = ref(props.showDocs);

function toggleDocs() { 
  showDocs.value = !showDocs.value; 
}

watch(() => props.code, (val) => { 
  if (val) editableCode.value = val; 
});

watch(() => props.showDocs, (val) => { 
  showDocs.value = val; 
});

function copyCode() {
  navigator.clipboard.writeText(editableCode.value);
  copied.value = true;
  setTimeout(() => (copied.value = false), 1200);
}

function onCodeChange(codeData) {
  // Update the quick export code when live editor changes
  editableCode.value = codeData.full;
}

onMounted(() => { 
  if (props.code) editableCode.value = props.code; 
  showDocs.value = props.showDocs; 
});
</script>

<style scoped>
/* Modern Dark Theme Styles */
.bg-gradient-animated {
  background: linear-gradient(-45deg, #8b5cf6, #ec4899, #06b6d4, #10b981);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.editor-select-modern {
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(168, 85, 247, 0.3);
  border-radius: 0.5rem;
  padding: 0.5rem;
  color: rgba(226, 232, 240, 1);
  transition: all 0.2s ease;
}

.editor-select-modern:focus {
  outline: none;
  border-color: rgba(168, 85, 247, 0.6);
  box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
}

.copy-btn-modern {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(30, 41, 59, 0.5);
  color: rgba(168, 85, 247, 1);
  border: 1px solid rgba(168, 85, 247, 0.3);
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.copy-btn-modern:hover {
  background: rgba(168, 85, 247, 0.1);
  border-color: rgba(168, 85, 247, 0.5);
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s cubic-bezier(.4,0,.2,1);
}

.slide-enter-from, .slide-leave-to {
  transform: translateX(100%);
}
</style>
