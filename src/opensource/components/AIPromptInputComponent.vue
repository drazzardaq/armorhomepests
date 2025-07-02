<template>
  <div 
    class="ai-prompt-input-component"
    :class="[
      `variant-${variant}`,
      `size-${size}`,
      `theme-${theme}`,
      { disabled, 'has-button': hasButton }
    ]"
  >
    <div class="input-container">
      <div class="input-wrapper">
        <div class="input-field-wrapper">
          <textarea
            ref="textarea"
            v-model="localValue"
            :placeholder="placeholder"
            :disabled="disabled"
            :maxlength="maxLength"
            class="prompt-input"
            @input="handleInput"
            @keydown="handleKeydown"
            @focus="handleFocus"
            @blur="handleBlur"
          />
          
          <!-- Character Count -->
          <div v-if="showCharacterCount" class="character-count">
            {{ localValue.length }}{{ maxLength ? `/${maxLength}` : '' }}
          </div>
        </div>
        
        <button
          v-if="hasButton"
          class="send-button"
          :disabled="disabled || !localValue.trim()"
          @click="handleSubmit"
        >
          <svg class="send-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
          <span class="send-text">Send</span>
        </button>
      </div>
      
      <!-- Enhanced animated border -->
      <div class="input-border"></div>
      <div class="input-glow"></div>
    </div>

    <!-- Enhanced Suggestions Dropdown -->
    <transition name="suggestions">
      <div
        v-if="showSuggestionsList && filteredSuggestions.length > 0"
        class="suggestions-dropdown"
      >
        <div class="suggestions-header">
          <span class="suggestions-title">Suggestions</span>
          <span class="suggestions-count">{{ filteredSuggestions.length }}</span>
        </div>
        <div
          v-for="(suggestion, index) in filteredSuggestions"
          :key="index"
          class="suggestion-item"
          :class="{ active: index === activeSuggestionIndex }"
          @mousedown="selectSuggestion(suggestion)"
          @mouseenter="activeSuggestionIndex = index"
        >
          <div class="suggestion-icon">💡</div>
          <span class="suggestion-text">{{ suggestion }}</span>
          <div class="suggestion-arrow">→</div>
        </div>
      </div>
    </transition>

    <!-- Voice Input Button (for voice-activated variant) -->
    <button
      v-if="variant === 'voice-activated'"
      class="voice-button"
      :class="{ recording: isRecording }"
      @click="toggleVoiceRecording"
    >
      <svg class="mic-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'AIPromptInputComponent',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: 'cobp-winner',
      validator: value => [
        'cobp-winner', 'ashton-runner-up', 'selfmade-third', 'zain-animated',
        'themrsami-glass', 'chase-neon', 'aegis-cyberpunk', 'modern', 'glass', 
        'neon', 'minimal', 'gradient', 'cyberpunk', 'neumorphic', 'retro-ai', 
        'hologram', 'particle-effect', 'liquid-morphic', 'terminal-style', 'voice-activated'
      ].includes(value)
    },
    size: {
      type: String,
      default: 'md',
      validator: value => ['sm', 'md', 'lg', 'xl'].includes(value)
    },
    theme: {
      type: String,
      default: 'dark',
      validator: value => ['dark', 'light', 'cyberpunk', 'neon'].includes(value)
    },
    placeholder: {
      type: String,
      default: 'Ask AI anything...'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showSuggestions: {
      type: Boolean,
      default: true
    },
    hasButton: {
      type: Boolean,
      default: true
    },
    showCharacterCount: {
      type: Boolean,
      default: false
    },
    maxLength: {
      type: Number,
      default: null
    }
  },
  emits: ['update:modelValue', 'submit', 'suggestion-select', 'focus', 'blur'],
  data() {
    return {
      localValue: this.modelValue,
      showSuggestionsList: false,
      activeSuggestionIndex: -1,
      isRecording: false,
      suggestions: [
        'Write a creative story about...',
        'Explain the concept of...',
        'Generate a list of ideas for...',
        'Create a summary of...',
        'Help me understand...',
        'Write code to...',
        'Design a solution for...',
        'Analyze the data about...',
        'Compare and contrast...',
        'Create a plan for...',
        'Generate an image of...',
        'Translate this text...',
        'Debug this code...',
        'Optimize this process...',
        'Create a marketing strategy for...'
      ]
    }
  },
  computed: {
    filteredSuggestions() {
      if (!this.localValue.trim()) return this.suggestions.slice(0, 5)
      
      return this.suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(this.localValue.toLowerCase())
      ).slice(0, 5)
    }
  },
  watch: {
    modelValue(newValue) {
      this.localValue = newValue
    }
  },
  methods: {
    handleInput() {
      this.$emit('update:modelValue', this.localValue)
      this.autoResize()
      
      if (this.showSuggestions && this.localValue.length > 0) {
        this.showSuggestionsList = true
        this.activeSuggestionIndex = -1
      } else {
        this.showSuggestionsList = false
      }
    },
    
    handleKeydown(event) {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault()
        this.handleSubmit()
      } else if (event.key === 'ArrowDown' && this.showSuggestionsList) {
        event.preventDefault()
        this.activeSuggestionIndex = Math.min(
          this.activeSuggestionIndex + 1,
          this.filteredSuggestions.length - 1
        )
      } else if (event.key === 'ArrowUp' && this.showSuggestionsList) {
        event.preventDefault()
        this.activeSuggestionIndex = Math.max(this.activeSuggestionIndex - 1, -1)
      } else if (event.key === 'Tab' && this.showSuggestionsList && this.activeSuggestionIndex >= 0) {
        event.preventDefault()
        this.selectSuggestion(this.filteredSuggestions[this.activeSuggestionIndex])
      } else if (event.key === 'Escape') {
        this.showSuggestionsList = false
        this.activeSuggestionIndex = -1
      }
    },

    handleFocus() {
      this.$emit('focus')
      if (this.showSuggestions && this.suggestions.length > 0) {
        this.showSuggestionsList = true
      }
    },

    handleBlur() {
      this.$emit('blur')
      // Delay hiding to allow suggestion clicks
      setTimeout(() => {
        this.showSuggestionsList = false
        this.activeSuggestionIndex = -1
      }, 150)
    },
    
    handleSubmit() {
      if (!this.localValue.trim() || this.disabled) return
      
      this.$emit('submit', this.localValue.trim())
      this.localValue = ''
      this.$emit('update:modelValue', '')
      this.showSuggestionsList = false
    },
    
    selectSuggestion(suggestion) {
      this.localValue = suggestion
      this.$emit('update:modelValue', suggestion)
      this.$emit('suggestion-select', suggestion)
      this.showSuggestionsList = false
      this.activeSuggestionIndex = -1
      this.$refs.textarea.focus()
    },
    
    autoResize() {
      this.$nextTick(() => {
        const textarea = this.$refs.textarea
        if (textarea) {
          textarea.style.height = 'auto'
          textarea.style.height = textarea.scrollHeight + 'px'
        }
      })
    },

    toggleVoiceRecording() {
      if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        if (!this.isRecording) {
          this.startVoiceRecognition()
        } else {
          this.stopVoiceRecognition()
        }
      } else {
        alert('Speech recognition is not supported in this browser.')
      }
    },

    startVoiceRecognition() {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      this.recognition = new SpeechRecognition()
      
      this.recognition.continuous = true
      this.recognition.interimResults = true
      this.recognition.lang = 'en-US'
      
      this.recognition.onstart = () => {
        this.isRecording = true
      }
      
      this.recognition.onresult = (event) => {
        let finalTranscript = ''
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript
          }
        }
        if (finalTranscript) {
          this.localValue = finalTranscript
          this.$emit('update:modelValue', finalTranscript)
        }
      }
      
      this.recognition.onerror = () => {
        this.isRecording = false
      }
      
      this.recognition.onend = () => {
        this.isRecording = false
      }
      
      this.recognition.start()
    },

    stopVoiceRecognition() {
      if (this.recognition) {
        this.recognition.stop()
        this.isRecording = false
      }
    }
  },
  mounted() {
    this.autoResize()
  }
}
</script>

<style scoped>
.ai-prompt-input-component {
  position: relative;
  width: 100%;
  max-width: 600px;
}

.input-container {
  position: relative;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: flex-end;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 4px;
  transition: all 0.3s ease;
}

.prompt-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 1rem;
  line-height: 1.5;
  padding: 12px 16px;
  resize: none;
  min-height: 48px;
  max-height: 120px;
  font-family: inherit;
}

.prompt-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.send-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 12px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 4px;
}

.send-button:hover:not(:disabled) {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.send-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.send-icon {
  width: 18px;
  height: 18px;
  color: #fff;
}

.input-border {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05));
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.input-wrapper:focus-within .input-border {
  opacity: 1;
}

.suggestions-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(30, 30, 30, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  margin-top: 8px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.suggestion-item {
  padding: 12px 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.suggestion-item:last-child {
  border-bottom: none;
}

.suggestion-item:hover,
.suggestion-item.active {
  background: rgba(255, 255, 255, 0.1);
}

.suggestion-text {
  color: #e2e8f0;
  font-size: 0.9rem;
}

/* Variants */
.variant-modern .input-wrapper {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.variant-glass .input-wrapper {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.variant-neon .input-wrapper {
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid rgba(0, 255, 255, 0.3);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
}

.variant-neon .send-button {
  background: linear-gradient(135deg, #00ffff 0%, #0080ff 100%);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
}

.variant-minimal .input-wrapper {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

.variant-gradient .input-wrapper {
  background: linear-gradient(135deg, rgba(667, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* New Uiverse.io inspired variants */
.variant-cobp-winner .input-wrapper {
  background: linear-gradient(145deg, rgba(25, 25, 25, 0.9) 0%, rgba(40, 40, 40, 0.9) 100%);
  border: 2px solid transparent;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.variant-cobp-winner .input-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 18px;
  padding: 2px;
  background: linear-gradient(45deg, #667eea, #764ba2, #667eea);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  animation: border-spin 3s linear infinite;
}

.variant-cobp-winner .prompt-input {
  background: transparent;
  color: #fff;
  font-weight: 500;
}

.variant-cobp-winner .prompt-input::placeholder {
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.variant-cobp-winner .send-button {
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  position: relative;
  overflow: hidden;
}

.variant-cobp-winner .send-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s;
}

.variant-cobp-winner .send-button:hover::before {
  left: 100%;
}

.variant-ashton-runner-up .input-wrapper {
  background: rgba(33, 33, 33, 0.95);
  border: 1px solid #444;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
}

.variant-ashton-runner-up .input-wrapper::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57);
  background-size: 400% 400%;
  border-radius: 27px;
  z-index: -1;
  animation: gradient-shift 4s ease infinite;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.variant-ashton-runner-up .input-wrapper:focus-within::before {
  opacity: 1;
}

.variant-ashton-runner-up .prompt-input {
  color: #fff;
  font-weight: 400;
  letter-spacing: 0.5px;
}

.variant-ashton-runner-up .prompt-input::placeholder {
  color: #999;
  font-style: italic;
}

.variant-ashton-runner-up .send-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.variant-ashton-runner-up .send-button:hover:not(:disabled) {
  transform: scale(1.1) rotate(15deg);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
}

.variant-selfmade-third .input-wrapper {
  background: rgba(15, 15, 35, 0.9);
  border: 1px solid rgba(100, 255, 218, 0.3);
  border-radius: 15px;
  box-shadow: 0 0 30px rgba(100, 255, 218, 0.1), inset 0 1px 0 rgba(100, 255, 218, 0.1);
  position: relative;
}

.variant-selfmade-third .input-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #64ffda, transparent);
  animation: scan-line 2s ease-in-out infinite;
}

.variant-selfmade-third .prompt-input {
  color: #64ffda;
  font-family: 'Courier New', monospace;
  font-weight: 500;
}

.variant-selfmade-third .prompt-input::placeholder {
  color: rgba(100, 255, 218, 0.5);
}

.variant-selfmade-third .send-button {
  background: linear-gradient(45deg, #0f3460, #64ffda);
  border: 1px solid #64ffda;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(100, 255, 218, 0.3);
}

.variant-selfmade-third .send-button:hover:not(:disabled) {
  box-shadow: 0 0 25px rgba(100, 255, 218, 0.6);
  background: linear-gradient(45deg, #64ffda, #0f3460);
}

.variant-cyberpunk .input-wrapper {
  background: linear-gradient(145deg, rgba(15, 15, 15, 0.9), rgba(30, 0, 30, 0.9));
  border: 2px solid transparent;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
}

.variant-cyberpunk .input-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, #ff0080, #00ffff, #ff0080);
  background-size: 400% 400%;
  border-radius: 10px;
  padding: 2px;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  animation: cyberpunk-glow 2s ease-in-out infinite alternate;
}

.variant-cyberpunk .prompt-input {
  color: #00ffff;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  font-weight: 600;
}

.variant-cyberpunk .send-button {
  background: linear-gradient(45deg, #ff0080, #00ffff);
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(255, 0, 128, 0.5);
}

.variant-neumorphic .input-wrapper {
  background: #2a2a2a;
  border: none;
  border-radius: 20px;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.4), -8px -8px 16px rgba(60, 60, 60, 0.1);
}

.variant-neumorphic .input-wrapper:focus-within {
  box-shadow: inset 8px 8px 16px rgba(0, 0, 0, 0.3), inset -8px -8px 16px rgba(60, 60, 60, 0.1);
}

.variant-neumorphic .send-button {
  background: #2a2a2a;
  border-radius: 50%;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4), -4px -4px 8px rgba(60, 60, 60, 0.1);
  color: #667eea;
}

.variant-neumorphic .send-button:hover:not(:disabled) {
  box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.3), inset -4px -4px 8px rgba(60, 60, 60, 0.1);
}

.variant-retro-ai .input-wrapper {
  background: linear-gradient(145deg, rgba(20, 20, 20, 0.9), rgba(40, 20, 60, 0.9));
  border: 2px solid #ff6b35;
  border-radius: 25px;
  box-shadow: 0 0 30px rgba(255, 107, 53, 0.3);
  position: relative;
}

.variant-retro-ai .input-wrapper::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(255, 107, 53, 0.3);
  animation: scan-line-retro 3s linear infinite;
}

.variant-retro-ai .prompt-input {
  color: #ff6b35;
  font-family: 'Courier New', monospace;
  text-shadow: 0 0 10px rgba(255, 107, 53, 0.5);
}

.variant-retro-ai .send-button {
  background: linear-gradient(45deg, #ff6b35, #f7931e);
  border: 1px solid #ff6b35;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(255, 107, 53, 0.4);
}

.variant-hologram .input-wrapper {
  background: rgba(0, 50, 100, 0.1);
  border: 1px solid rgba(0, 200, 255, 0.3);
  border-radius: 20px;
  box-shadow: 0 0 40px rgba(0, 200, 255, 0.2);
  position: relative;
  backdrop-filter: blur(10px);
}

.variant-hologram .input-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(0, 200, 255, 0.1) 50%,
    transparent 70%
  );
  animation: hologram-shift 3s ease-in-out infinite;
  border-radius: 18px;
}

.variant-hologram .prompt-input {
  color: #00c8ff;
  text-shadow: 0 0 8px rgba(0, 200, 255, 0.6);
  font-weight: 300;
  letter-spacing: 1px;
}

.variant-hologram .send-button {
  background: linear-gradient(45deg, rgba(0, 200, 255, 0.2), rgba(0, 100, 200, 0.4));
  border: 1px solid #00c8ff;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 200, 255, 0.4);
  backdrop-filter: blur(5px);
}

/* Animations */
@keyframes border-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes scan-line {
  0%, 100% { transform: translateX(-100%); opacity: 0; }
  50% { transform: translateX(100%); opacity: 1; }
}

@keyframes cyberpunk-glow {
  0% { background-position: 0% 50%; filter: hue-rotate(0deg); }
  100% { background-position: 100% 50%; filter: hue-rotate(90deg); }
}

@keyframes scan-line-retro {
  0% { transform: translateY(-100px); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(100px); opacity: 0; }
}

@keyframes hologram-shift {
  0%, 100% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
}

/* Sizes */
.size-sm .prompt-input {
  font-size: 0.875rem;
  padding: 8px 12px;
  min-height: 36px;
}

.size-sm .send-button {
  width: 32px;
  height: 32px;
}

.size-sm .send-icon {
  width: 14px;
  height: 14px;
}

.size-lg .prompt-input {
  font-size: 1.125rem;
  padding: 16px 20px;
  min-height: 56px;
}

.size-lg .send-button {
  width: 48px;
  height: 48px;
}

.size-lg .send-icon {
  width: 20px;
  height: 20px;
}

.disabled {
  opacity: 0.6;
  pointer-events: none;
}
</style>
