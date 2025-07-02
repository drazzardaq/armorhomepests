<template>
  <!-- Documentation Mode -->
  <div v-if="isDocs" class="DUIMX-docs prose prose-purple max-w-none">
    <div class="mb-6 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4">
      <h2 class="mb-2 text-2xl font-bold text-purple-300">🤖 DUIMX AI Prompt Input</h2>
      <p class="text-purple-200">Advanced AI prompt input with smart suggestions, syntax highlighting, and conversation context.</p>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">✨ Features</h3>
    <ul class="mb-6 space-y-2 text-purple-200">
      <li>🤖 <strong>AI Integration</strong> - Built for AI conversation interfaces</li>
      <li>💡 <strong>Smart Suggestions</strong> - Context-aware prompt completions</li>
      <li>🎨 <strong>Syntax Highlighting</strong> - Color-coded prompt elements</li>
      <li>📝 <strong>Template System</strong> - Pre-built prompt templates</li>
      <li>🔄 <strong>Multi-turn Context</strong> - Conversation history support</li>
      <li>⚡ <strong>Real-time Validation</strong> - Prompt optimization hints</li>
    </ul>

    <div class="mb-6 rounded-lg border border-purple-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4">
      <p class="text-center text-purple-200">
        <strong>🔗 Source Code:</strong> 
        <a href="https://github.com/drazzardaq/opensource/blob/master/src/opensource/DimAIPromptInput.vue" 
           target="_blank" 
           class="text-purple-300 hover:text-purple-100 transition-colors underline">
          View on GitHub
        </a>
      </p>
    </div>
  </div>

  <!-- Component Mode -->
  <div v-else class="DUIMX-ai-prompt-input" :style="containerStyles">
    <div class="prompt-container" :style="promptContainerStyles">
      <div class="prompt-header mb-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-green-400"></div>
            <span class="text-sm font-medium" :style="{ color: textColor }">AI Assistant</span>
          </div>
          <div class="flex gap-1">
            <button v-for="template in quickTemplates" 
                    :key="template"
                    class="px-2 py-1 text-xs rounded transition-colors"
                    :style="{ backgroundColor: primaryColor + '20', color: primaryColor }"
                    @click="insertTemplate(template)">
              {{ template }}
            </button>
          </div>
        </div>
      </div>
      
      <div class="relative">
        <textarea
          v-model="promptText"
          :placeholder="placeholder"
          class="w-full resize-none transition-all duration-200 focus:outline-none"
          :style="textareaStyles"
          :rows="rows"
          @input="handleInput"
          @keydown="handleKeydown"
          @focus="isFocused = true"
          @blur="isFocused = false"
        ></textarea>
        
        <!-- Suggestions overlay -->
        <div v-if="showSuggestions && suggestions.length" 
             class="absolute top-full left-0 right-0 mt-1 rounded shadow-lg border z-10"
             :style="suggestionsStyles">
          <div v-for="(suggestion, index) in suggestions" 
               :key="index"
               class="px-3 py-2 cursor-pointer transition-colors"
               :class="{ 'opacity-75': index === selectedSuggestion }"
               :style="{ 
                 backgroundColor: index === selectedSuggestion ? primaryColor + '20' : 'transparent',
                 color: textColor 
               }"
               @click="applySuggestion(suggestion)">
            <div class="font-medium">{{ suggestion.title }}</div>
            <div class="text-xs opacity-75">{{ suggestion.description }}</div>
          </div>
        </div>
      </div>
      
      <div class="prompt-footer mt-3 flex items-center justify-between">
        <div class="flex items-center gap-2 text-xs" :style="{ color: textColor + '80' }">
          <span>{{ characterCount }}/{{ maxLength }} chars</span>
          <span v-if="tokenCount">• {{ tokenCount }} tokens</span>
          <span v-if="promptScore" :class="getScoreClass()">• Score: {{ promptScore }}/100</span>
        </div>
        
        <div class="flex gap-2">
          <button class="px-3 py-1 text-xs rounded transition-colors flex items-center gap-1"
                  :style="{ backgroundColor: textColor + '10', color: textColor }"
                  @click="clearPrompt">
            <font-awesome-icon :icon="['fas', 'times']" class="w-3 h-3" />
            Clear
          </button>
          <button class="px-3 py-1 text-xs rounded transition-colors flex items-center gap-1"
                  :style="{ backgroundColor: primaryColor, color: theme === 'dark' ? '#000' : '#fff' }"
                  @click="submitPrompt"
                  :disabled="!promptText.trim()">
            <font-awesome-icon :icon="['fas', 'paper-plane']" class="w-3 h-3" />
            Send
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps({
  // Documentation mode
  isDocs: { type: Boolean, default: false },
  
  // Configuration
  placeholder: { type: String, default: 'Describe what you want the AI to help you with...' },
  maxLength: { type: Number, default: 2000 },
  rows: { type: Number, default: 4 },
  showSuggestions: { type: Boolean, default: true },
  showTokenCount: { type: Boolean, default: true },
  showPromptScore: { type: Boolean, default: true },
  
  // Content
  modelValue: { type: String, default: '' },
  
  // Theme and styling
  roundness: { type: Number, default: 12 },
  primaryColor: { type: String, default: '#6366f1' },
  bgColor: { type: String, default: '#1e293b' },
  textColor: { type: String, default: '#e2e8f0' },
  fontFamily: { type: String, default: 'inherit' },
  theme: { type: String, default: 'dark' },
  width: { type: Number, default: 500 },
  height: { type: Number, default: 200 },
  padding: { type: Number, default: 16 },
  margin: { type: Number, default: 16 },
  boxShadow: { type: String, default: '0 4px 6px rgba(0, 0, 0, 0.1)' },
  borderWidth: { type: Number, default: 1 },
  animation: { type: String, default: 'none' }
});

const emit = defineEmits(['update:modelValue', 'submit', 'suggest']);

// State
const promptText = ref(props.modelValue);
const isFocused = ref(false);
const selectedSuggestion = ref(-1);

// Quick templates
const quickTemplates = ['Explain', 'Summarize', 'Code', 'Creative'];

// Sample suggestions
const suggestions = ref([
  { title: 'Explain a concept', description: 'Get detailed explanations' },
  { title: 'Write code', description: 'Generate programming solutions' },
  { title: 'Summarize text', description: 'Create concise summaries' },
  { title: 'Creative writing', description: 'Generate creative content' }
]);

// Computed properties
const characterCount = computed(() => promptText.value.length);
const tokenCount = computed(() => props.showTokenCount ? Math.ceil(promptText.value.length / 4) : null);
const promptScore = computed(() => {
  if (!props.showPromptScore) return null;
  // Simple scoring based on length and keywords
  const length = promptText.value.length;
  const hasKeywords = /\b(please|help|explain|show|create)\b/i.test(promptText.value);
  const score = Math.min(100, Math.max(0, (length / 10) + (hasKeywords ? 20 : 0)));
  return Math.round(score);
});

const containerStyles = computed(() => ({
  fontFamily: props.fontFamily,
  width: `${props.width}px`,
  margin: `${props.margin}px`
}));

const promptContainerStyles = computed(() => ({
  backgroundColor: props.bgColor,
  borderRadius: `${props.roundness}px`,
  border: `${props.borderWidth}px solid ${props.primaryColor}20`,
  boxShadow: props.boxShadow,
  padding: `${props.padding}px`
}));

const textareaStyles = computed(() => ({
  backgroundColor: 'transparent',
  color: props.textColor,
  borderRadius: `${props.roundness * 0.5}px`,
  border: `1px solid ${isFocused.value ? props.primaryColor : props.textColor + '20'}`,
  padding: '12px',
  fontFamily: props.fontFamily
}));

const suggestionsStyles = computed(() => ({
  backgroundColor: props.bgColor,
  borderColor: props.primaryColor + '30',
  borderRadius: `${props.roundness * 0.5}px`
}));

// Methods
const handleInput = () => {
  emit('update:modelValue', promptText.value);
  // Simple suggestion trigger
  if (promptText.value.length > 3) {
    selectedSuggestion.value = -1;
  }
};

const handleKeydown = (e) => {
  if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
    e.preventDefault();
    submitPrompt();
  } else if (e.key === 'Tab') {
    e.preventDefault();
    if (suggestions.value.length > 0) {
      applySuggestion(suggestions.value[0]);
    }
  }
};

const insertTemplate = (template) => {
  const templates = {
    'Explain': 'Please explain ',
    'Summarize': 'Summarize the following: ',
    'Code': 'Write code to ',
    'Creative': 'Write a creative story about '
  };
  promptText.value = templates[template] || '';
  emit('update:modelValue', promptText.value);
};

const applySuggestion = (suggestion) => {
  promptText.value = suggestion.title + ': ';
  emit('update:modelValue', promptText.value);
  emit('suggest', suggestion);
};

const clearPrompt = () => {
  promptText.value = '';
  emit('update:modelValue', '');
};

const submitPrompt = () => {
  if (promptText.value.trim()) {
    emit('submit', promptText.value.trim());
  }
};

const getScoreClass = () => {
  const score = promptScore.value;
  if (score >= 80) return 'text-green-400';
  if (score >= 60) return 'text-yellow-400';
  return 'text-red-400';
};

// Watch for prop changes
watch(() => props.modelValue, (newValue) => {
  promptText.value = newValue;
});
</script>
