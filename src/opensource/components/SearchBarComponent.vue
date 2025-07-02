<template>
  <div 
    class="search-bar-component"
    :class="[
      `variant-${variant}`,
      `size-${size}`,
      { disabled }
    ]"
  >
    <div class="search-container">
      <div class="search-wrapper">
        <div class="search-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
        </div>
        
        <input
          ref="input"
          v-model="localValue"
          :placeholder="placeholder"
          :disabled="disabled"
          class="search-input"
          @input="handleInput"
          @keydown="handleKeydown"
          @focus="showSuggestionsList = showSuggestions && suggestions.length > 0"
          @blur="hideSuggestions"
        />
        
        <button
          v-if="localValue"
          class="clear-button"
          @click="clearSearch"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
        
        <button
          class="search-button"
          :disabled="disabled || !localValue.trim()"
          @click="handleSearch"
        >
          <svg class="search-btn-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
        </button>
      </div>
      
      <div class="search-border"></div>
    </div>

    <!-- Suggestions Dropdown -->
    <div
      v-if="showSuggestionsList && filteredSuggestions.length > 0"
      class="suggestions-dropdown"
    >
      <div
        v-for="(suggestion, index) in filteredSuggestions"
        :key="index"
        class="suggestion-item"
        :class="{ active: index === activeSuggestionIndex }"
        @mousedown="selectSuggestion(suggestion)"
      >
        <div class="suggestion-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
        </div>
        <span class="suggestion-text">{{ suggestion }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBarComponent',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: 'lakshay-winner',
      validator: value => [
        'lakshay-winner', 'marcelo-runner-up', 'itskrish-third',
        'modern', 'glass', 'neon', 'minimal', 'gradient',
        'cyberpunk', 'neumorphic'
      ].includes(value)
    },
    size: {
      type: String,
      default: 'md',
      validator: value => ['sm', 'md', 'lg'].includes(value)
    },
    placeholder: {
      type: String,
      default: 'Search anything...'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showSuggestions: {
      type: Boolean,
      default: true
    }
  },
  emits: ['update:modelValue', 'search', 'suggestion-select'],
  data() {
    return {
      localValue: this.modelValue,
      showSuggestionsList: false,
      activeSuggestionIndex: -1,
      suggestions: [
        'JavaScript tutorials',
        'Vue.js components',
        'CSS animations',
        'HTML5 features',
        'React hooks',
        'Node.js guides',
        'TypeScript basics',
        'Web design trends',
        'UI/UX patterns',
        'Frontend frameworks'
      ]
    }
  },
  computed: {
    filteredSuggestions() {
      if (!this.localValue.trim()) return this.suggestions.slice(0, 6)
      
      return this.suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(this.localValue.toLowerCase())
      ).slice(0, 6)
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
      
      if (this.showSuggestions && this.localValue.length > 0) {
        this.showSuggestionsList = true
        this.activeSuggestionIndex = -1
      } else {
        this.showSuggestionsList = false
      }
    },
    
    handleKeydown(event) {
      if (event.key === 'Enter') {
        event.preventDefault()
        this.handleSearch()
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
        this.hideSuggestions()
      }
    },
    
    handleSearch() {
      if (this.localValue.trim() && !this.disabled) {
        this.$emit('search', this.localValue.trim())
        this.hideSuggestions()
      }
    },
    
    clearSearch() {
      this.localValue = ''
      this.$emit('update:modelValue', '')
      this.hideSuggestions()
      this.$refs.input.focus()
    },
    
    selectSuggestion(suggestion) {
      this.localValue = suggestion
      this.$emit('update:modelValue', suggestion)
      this.$emit('suggestion-select', suggestion)
      this.showSuggestionsList = false
      this.$refs.input.focus()
    },
    
    hideSuggestions() {
      setTimeout(() => {
        this.showSuggestionsList = false
        this.activeSuggestionIndex = -1
      }, 150)
    }
  }
}
</script>

<style scoped>
.search-bar-component {
  position: relative;
  width: 100%;
  max-width: 600px;
}

.search-container {
  position: relative;
}

.search-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  padding: 4px;
  transition: all 0.3s ease;
}

.search-icon {
  width: 20px;
  height: 20px;
  color: rgba(255, 255, 255, 0.6);
  margin-left: 16px;
  flex-shrink: 0;
}

.search-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 1rem;
  padding: 12px 16px;
  font-family: inherit;
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.clear-button {
  background: none;
  border: none;
  width: 24px;
  height: 24px;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: all 0.2s ease;
  margin-right: 8px;
}

.clear-button:hover {
  color: #fff;
  transform: scale(1.1);
}

.search-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 4px;
}

.search-button:hover:not(:disabled) {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.search-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.search-btn-icon {
  width: 18px;
  height: 18px;
  color: #fff;
}

.search-border {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 25px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05));
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.search-wrapper:focus-within .search-border {
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
  border-radius: 16px;
  margin-top: 8px;
  max-height: 300px;
  overflow-y: auto;
  z-index: 1000;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.suggestion-item {
  display: flex;
  align-items: center;
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

.suggestion-icon {
  width: 16px;
  height: 16px;
  color: rgba(255, 255, 255, 0.5);
  margin-right: 12px;
  flex-shrink: 0;
}

.suggestion-text {
  color: #e2e8f0;
  font-size: 0.9rem;
}

/* Variants */
.variant-lakshay-winner .search-wrapper {
  background: linear-gradient(145deg, rgba(30, 30, 30, 0.9), rgba(50, 50, 50, 0.9));
  border: 2px solid transparent;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
}

.variant-lakshay-winner .search-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
  background-size: 400% 400%;
  border-radius: 28px;
  padding: 2px;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  animation: gradient-flow 3s ease infinite;
}

.variant-lakshay-winner .search-input {
  color: #fff;
  font-weight: 500;
}

.variant-lakshay-winner .search-button {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border-radius: 50%;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
}

.variant-marcelo-runner-up .search-wrapper {
  background: rgba(25, 25, 35, 0.95);
  border: 1px solid rgba(100, 255, 218, 0.3);
  border-radius: 25px;
  box-shadow: 0 0 30px rgba(100, 255, 218, 0.15), inset 0 1px 0 rgba(100, 255, 218, 0.1);
  position: relative;
}

.variant-marcelo-runner-up .search-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #64ffda, transparent);
  animation: scan-line 2s ease-in-out infinite;
  border-radius: 25px 25px 0 0;
}

.variant-marcelo-runner-up .search-input {
  color: #64ffda;
  font-family: 'Courier New', monospace;
}

.variant-marcelo-runner-up .search-icon,
.variant-marcelo-runner-up .clear-button {
  color: #64ffda;
}

.variant-marcelo-runner-up .search-button {
  background: linear-gradient(45deg, #0f3460, #64ffda);
  border: 1px solid #64ffda;
  box-shadow: 0 0 15px rgba(100, 255, 218, 0.3);
}

.variant-itskrish-third .search-wrapper {
  background: linear-gradient(145deg, rgba(15, 15, 15, 0.9), rgba(30, 0, 30, 0.9));
  border: 2px solid transparent;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
}

.variant-itskrish-third .search-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, #ff0080, #00ffff, #ff0080);
  background-size: 400% 400%;
  border-radius: 18px;
  padding: 2px;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  animation: cyberpunk-glow 2s ease-in-out infinite alternate;
}

.variant-itskrish-third .search-input {
  color: #00ffff;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  font-weight: 600;
}

.variant-itskrish-third .search-icon,
.variant-itskrish-third .clear-button {
  color: #00ffff;
}

.variant-itskrish-third .search-button {
  background: linear-gradient(45deg, #ff0080, #00ffff);
  box-shadow: 0 0 20px rgba(255, 0, 128, 0.5);
}

.variant-modern .search-wrapper {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.variant-glass .search-wrapper {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.variant-neon .search-wrapper {
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid rgba(0, 255, 255, 0.3);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
}

.variant-neon .search-button {
  background: linear-gradient(135deg, #00ffff 0%, #0080ff 100%);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
}

.variant-minimal .search-wrapper {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
}

.variant-gradient .search-wrapper {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.variant-cyberpunk .search-wrapper {
  background: linear-gradient(145deg, rgba(15, 15, 15, 0.9), rgba(30, 0, 30, 0.9));
  border: 2px solid #ff0080;
  box-shadow: 0 0 30px rgba(255, 0, 128, 0.3);
}

.variant-cyberpunk .search-input {
  color: #ff0080;
  text-shadow: 0 0 10px rgba(255, 0, 128, 0.5);
}

.variant-neumorphic .search-wrapper {
  background: #2a2a2a;
  border: none;
  border-radius: 25px;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.4), -8px -8px 16px rgba(60, 60, 60, 0.1);
}

.variant-neumorphic .search-wrapper:focus-within {
  box-shadow: inset 8px 8px 16px rgba(0, 0, 0, 0.3), inset -8px -8px 16px rgba(60, 60, 60, 0.1);
}

.variant-neumorphic .search-button {
  background: #2a2a2a;
  border-radius: 50%;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4), -4px -4px 8px rgba(60, 60, 60, 0.1);
  color: #667eea;
}

/* Sizes */
.size-sm .search-wrapper {
  border-radius: 20px;
  padding: 2px;
}

.size-sm .search-input {
  font-size: 0.875rem;
  padding: 8px 12px;
}

.size-sm .search-button {
  width: 32px;
  height: 32px;
  border-radius: 16px;
}

.size-sm .search-icon {
  width: 16px;
  height: 16px;
  margin-left: 12px;
}

.size-sm .search-btn-icon {
  width: 14px;
  height: 14px;
}

.size-lg .search-wrapper {
  border-radius: 35px;
  padding: 6px;
}

.size-lg .search-input {
  font-size: 1.125rem;
  padding: 16px 20px;
}

.size-lg .search-button {
  width: 48px;
  height: 48px;
  border-radius: 24px;
}

.size-lg .search-icon {
  width: 24px;
  height: 24px;
  margin-left: 20px;
}

.size-lg .search-btn-icon {
  width: 20px;
  height: 20px;
}

.disabled {
  opacity: 0.6;
  pointer-events: none;
}

/* Animations */
@keyframes gradient-flow {
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
</style>
