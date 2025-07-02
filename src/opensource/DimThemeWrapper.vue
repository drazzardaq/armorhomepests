<template>
  <!-- Documentation Mode -->
  <div v-if="isDocs" class="DUIMX-docs prose prose-purple max-w-none">
    <div class="mb-6 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4">
      <h2 class="mb-2 text-2xl font-bold text-purple-300">🎨 DUIMX Theme Wrapper</h2>
      <p class="text-purple-200">Flexible container component for consistent theming and layout across your application.</p>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">✨ Features</h3>
    <ul class="mb-6 space-y-2 text-purple-200">
      <li>🎨 <strong>Theme Context</strong> - Provides theme variables to child components</li>
      <li>🌓 <strong>Dynamic Switching</strong> - Live theme switching capabilities</li>
      <li>📦 <strong>Layout Variants</strong> - Card, panel, section, and full-screen layouts</li>
      <li>🔄 <strong>Responsive Design</strong> - Adaptive to screen sizes</li>
      <li>⚡ <strong>CSS Variables</strong> - Exposes theme as CSS custom properties</li>
      <li>🎭 <strong>Animation Support</strong> - Smooth theme transitions</li>
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
          <tr><td class="border border-purple-500/30 p-2 font-mono">variant</td><td class="border border-purple-500/30 p-2">String</td><td class="border border-purple-500/30 p-2">'card'</td><td class="border border-purple-500/30 p-2">Layout variant</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">theme</td><td class="border border-purple-500/30 p-2">String</td><td class="border border-purple-500/30 p-2">'auto'</td><td class="border border-purple-500/30 p-2">Theme mode</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">animated</td><td class="border border-purple-500/30 p-2">Boolean</td><td class="border border-purple-500/30 p-2">true</td><td class="border border-purple-500/30 p-2">Enable animations</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">glassMorphism</td><td class="border border-purple-500/30 p-2">Boolean</td><td class="border border-purple-500/30 p-2">false</td><td class="border border-purple-500/30 p-2">Glass morphism effect</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">bordered</td><td class="border border-purple-500/30 p-2">Boolean</td><td class="border border-purple-500/30 p-2">true</td><td class="border border-purple-500/30 p-2">Show border</td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">🎨 Variants</h3>
    <div class="mb-6 grid grid-cols-2 gap-4">
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">card</h4>
        <p class="text-purple-200 text-sm">Elevated card layout with shadow</p>
      </div>
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">panel</h4>
        <p class="text-purple-200 text-sm">Flat panel with subtle border</p>
      </div>
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">section</h4>
        <p class="text-purple-200 text-sm">Content section with background</p>
      </div>
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">fullscreen</h4>
        <p class="text-purple-200 text-sm">Full viewport layout</p>
      </div>
    </div>

    <div class="mb-6 rounded-lg border border-purple-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4">
      <p class="text-center text-purple-200">
        <strong>🔗 Source Code:</strong> 
        <a href="https://github.com/drazzardaq/opensource/blob/master/src/opensource/DimThemeWrapper.vue" 
           target="_blank" 
           class="text-purple-300 hover:text-purple-100 transition-colors underline">
          View on GitHub
        </a>
      </p>
    </div>
  </div>

  <!-- Component Mode -->
  <div v-else 
       class="DUIMX-theme-wrapper"
       :class="wrapperClasses"
       :style="wrapperStyles">
    <div class="theme-content">
      <slot>
        <div class="sample-content">
          <h3 class="text-lg font-semibold mb-3" :style="{ color: textColor }">Theme Container</h3>
          <p class="text-sm opacity-75 mb-4" :style="{ color: textColor }">
            This is a sample theme wrapper showing how content adapts to different themes and layouts.
          </p>
          
          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="variant in ['card', 'panel', 'section', 'fullscreen']" 
                  :key="variant"
                  class="px-2 py-1 text-xs rounded"
                  :class="{ 'font-semibold': variant === currentVariant }"
                  :style="{ 
                    backgroundColor: variant === currentVariant ? primaryColor + '40' : primaryColor + '20',
                    color: variant === currentVariant ? primaryColor : textColor 
                  }">
              {{ variant }}
            </span>
          </div>

          <div class="space-y-2">
            <div class="w-full h-2 rounded-full overflow-hidden" :style="{ backgroundColor: primaryColor + '20' }">
              <div class="h-full rounded-full transition-all duration-1000" 
                   :style="{ backgroundColor: primaryColor, width: '65%' }"></div>
            </div>
            <div class="w-full h-2 rounded-full overflow-hidden" :style="{ backgroundColor: primaryColor + '20' }">
              <div class="h-full rounded-full transition-all duration-1000" 
                   :style="{ backgroundColor: primaryColor, width: '80%' }"></div>
            </div>
            <div class="w-full h-2 rounded-full overflow-hidden" :style="{ backgroundColor: primaryColor + '20' }">
              <div class="h-full rounded-full transition-all duration-1000" 
                   :style="{ backgroundColor: primaryColor, width: '45%' }"></div>
            </div>
          </div>

          <div class="mt-4 flex gap-2">
            <button class="px-3 py-1 text-sm rounded transition-colors"
                    :style="{ backgroundColor: primaryColor, color: theme === 'dark' ? '#000' : '#fff' }">
              Primary Action
            </button>
            <button class="px-3 py-1 text-sm rounded transition-colors border"
                    :style="{ 
                      borderColor: primaryColor,
                      color: primaryColor,
                      backgroundColor: 'transparent'
                    }">
              Secondary
            </button>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  // Documentation mode
  isDocs: { type: Boolean, default: false },
  
  // Layout and appearance
  variant: { type: String, default: 'card' }, // card, panel, section, fullscreen
  animated: { type: Boolean, default: true },
  glassMorphism: { type: Boolean, default: false },
  bordered: { type: Boolean, default: true },
  elevation: { type: Number, default: 1 }, // 0-5
  
  // Theme and styling
  roundness: { type: Number, default: 16 },
  primaryColor: { type: String, default: '#6366f1' },
  bgColor: { type: String, default: '#1e293b' },
  textColor: { type: String, default: '#e2e8f0' },
  fontFamily: { type: String, default: 'inherit' },
  theme: { type: String, default: 'dark' },
  width: { type: Number, default: 400 },
  height: { type: Number, default: 300 },
  padding: { type: Number, default: 24 },
  margin: { type: Number, default: 16 },
  boxShadow: { type: String, default: '0 4px 6px rgba(0, 0, 0, 0.1)' },
  borderWidth: { type: Number, default: 1 },
  animation: { type: String, default: 'none' }
});

const currentVariant = computed(() => props.variant);

const wrapperClasses = computed(() => {
  const classes = [];
  
  // Animation classes
  if (props.animation === 'bounce') classes.push('animate-bounce');
  else if (props.animation === 'pulse') classes.push('animate-pulse');
  else if (props.animation === 'fade') classes.push('animate-fade-in');
  
  // Variant-specific classes
  if (props.variant === 'fullscreen') {
    classes.push('min-h-screen w-full');
  } else {
    classes.push('max-w-full');
  }
  
  // Transition classes
  if (props.animated) {
    classes.push('transition-all duration-300');
  }
  
  return classes.join(' ');
});

const wrapperStyles = computed(() => {
  const baseStyles = {
    fontFamily: props.fontFamily,
    color: props.textColor,
    borderRadius: `${props.roundness}px`
  };
  
  // Glass morphism effect
  if (props.glassMorphism) {
    return {
      ...baseStyles,
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      padding: `${props.padding}px`,
      margin: `${props.margin}px`,
      width: props.variant === 'fullscreen' ? '100%' : `${props.width}px`,
      minHeight: props.variant === 'fullscreen' ? '100vh' : `${props.height}px`
    };
  }
  
  // Standard variants
  switch (props.variant) {
    case 'card':
      return {
        ...baseStyles,
        backgroundColor: props.bgColor,
        boxShadow: getElevationShadow(),
        border: props.bordered ? `${props.borderWidth}px solid ${props.primaryColor}20` : 'none',
        padding: `${props.padding}px`,
        margin: `${props.margin}px`,
        width: `${props.width}px`,
        minHeight: `${props.height}px`
      };
      
    case 'panel':
      return {
        ...baseStyles,
        backgroundColor: props.bgColor,
        border: props.bordered ? `${props.borderWidth}px solid ${props.primaryColor}30` : 'none',
        padding: `${props.padding}px`,
        margin: `${props.margin}px`,
        width: `${props.width}px`,
        minHeight: `${props.height}px`
      };
      
    case 'section':
      return {
        ...baseStyles,
        backgroundColor: props.theme === 'dark' ? 'rgba(30, 41, 59, 0.5)' : 'rgba(248, 250, 252, 0.8)',
        padding: `${props.padding}px`,
        margin: `${props.margin}px`,
        width: `${props.width}px`,
        minHeight: `${props.height}px`
      };
      
    case 'fullscreen':
      return {
        ...baseStyles,
        backgroundColor: props.bgColor,
        padding: `${props.padding}px`,
        width: '100%',
        minHeight: '100vh'
      };
      
    default:
      return {
        ...baseStyles,
        backgroundColor: props.bgColor,
        padding: `${props.padding}px`,
        margin: `${props.margin}px`,
        width: `${props.width}px`,
        minHeight: `${props.height}px`
      };
  }
});

const getElevationShadow = () => {
  const elevations = {
    0: 'none',
    1: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    2: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
    3: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
    4: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
    5: '0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22)'
  };
  
  return elevations[Math.min(5, Math.max(0, props.elevation))] || elevations[1];
};
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}

.theme-content {
  width: 100%;
  height: 100%;
}

.sample-content {
  width: 100%;
}
</style>
