<template>
  <!-- Documentation Mode -->
  <div v-if="isDocs" class="DUIMX-docs prose prose-purple max-w-none">
    <div class="mb-6 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4">
      <h2 class="mb-2 text-2xl font-bold text-purple-300">🎯 DUIMX Button</h2>
      <p class="text-purple-200">Versatile, accessible button component with multiple variants, themes, and interactions.</p>
    </div>

    <h3 class="mb-3 text-xl font-semibold text-purple-300">✨ Features</h3>
    <ul class="mb-6 space-y-2 text-purple-200">
      <li>🎨 <strong>Multiple Variants</strong> - Primary, Secondary, Outline, Ghost styles</li>
      <li>🌓 <strong>Theme Adaptive</strong> - Auto-adjusts for light/dark themes</li>
      <li>⚡ <strong>Interactive States</strong> - Hover, focus, active, and disabled states</li>
      <li>♿ <strong>Accessibility</strong> - ARIA labels, keyboard navigation, screen reader support</li>
      <li>🔧 <strong>Fully Customizable</strong> - Colors, sizes, fonts, animations</li>
      <li>📱 <strong>Responsive</strong> - Adapts to different screen sizes</li>
    </ul>

    <h3 class="mb-3 text-xl font-semibold text-purple-300">🛠️ Props</h3>
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
          <tr>
            <td class="border border-purple-500/30 p-2 font-mono">text</td>
            <td class="border border-purple-500/30 p-2">String</td>
            <td class="border border-purple-500/30 p-2">'Click Me'</td>
            <td class="border border-purple-500/30 p-2">Button text content</td>
          </tr>
          <tr>
            <td class="border border-purple-500/30 p-2 font-mono">variant</td>
            <td class="border border-purple-500/30 p-2">String</td>
            <td class="border border-purple-500/30 p-2">'primary'</td>
            <td class="border border-purple-500/30 p-2">Button style variant</td>
          </tr>
          <tr>
            <td class="border border-purple-500/30 p-2 font-mono">disabled</td>
            <td class="border border-purple-500/30 p-2">Boolean</td>
            <td class="border border-purple-500/30 p-2">false</td>
            <td class="border border-purple-500/30 p-2">Disable button interaction</td>
          </tr>
          <tr>
            <td class="border border-purple-500/30 p-2 font-mono">loading</td>
            <td class="border border-purple-500/30 p-2">Boolean</td>
            <td class="border border-purple-500/30 p-2">false</td>
            <td class="border border-purple-500/30 p-2">Show loading state</td>
          </tr>
          <tr>
            <td class="border border-purple-500/30 p-2 font-mono">icon</td>
            <td class="border border-purple-500/30 p-2">String</td>
            <td class="border border-purple-500/30 p-2">''</td>
            <td class="border border-purple-500/30 p-2">Icon class or emoji</td>
          </tr>
          <tr>
            <td class="border border-purple-500/30 p-2 font-mono">roundness</td>
            <td class="border border-purple-500/30 p-2">Number</td>
            <td class="border border-purple-500/30 p-2">8</td>
            <td class="border border-purple-500/30 p-2">Border radius in pixels</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="mb-3 text-xl font-semibold text-purple-300">🎯 Usage Examples</h3>
    <div class="mb-6 space-y-4">
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/50 p-4">
        <h4 class="mb-2 text-lg font-semibold text-purple-300">Basic Button</h4>
        <pre class="text-sm text-purple-200"><code>&lt;DimButton 
  text="Click Me"
  @click="handleClick"
/&gt;</code></pre>
      </div>

      <div class="rounded-lg border border-purple-500/30 bg-slate-800/50 p-4">
        <h4 class="mb-2 text-lg font-semibold text-purple-300">Custom Styled Button</h4>
        <pre class="text-sm text-purple-200"><code>&lt;DimButton 
  text="Custom Button"
  variant="outline"
  :roundness="24"
  primaryColor="#ec4899"
  icon="🚀"
  theme="dark"
  @click="handleAction"
/&gt;</code></pre>
      </div>

      <div class="rounded-lg border border-purple-500/30 bg-slate-800/50 p-4">
        <h4 class="mb-2 text-lg font-semibold text-purple-300">Loading Button</h4>
        <pre class="text-sm text-purple-200"><code>&lt;DimButton 
  text="Save Changes"
  :loading="isLoading"
  :disabled="isLoading"
  @click="saveData"
/&gt;</code></pre>
      </div>
    </div>

    <h3 class="mb-3 text-xl font-semibold text-purple-300">🎨 Variants</h3>
    <div class="mb-6 grid grid-cols-2 gap-4">
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="font-semibold text-purple-300">primary</h4>
        <p class="text-sm text-purple-200">Solid background with primary color</p>
      </div>
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="font-semibold text-purple-300">outline</h4>
        <p class="text-sm text-purple-200">Border with transparent background</p>
      </div>
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="font-semibold text-purple-300">ghost</h4>
        <p class="text-sm text-purple-200">Minimal style with hover effects</p>
      </div>
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="font-semibold text-purple-300">glass</h4>
        <p class="text-sm text-purple-200">Glass morphism effect</p>
      </div>
    </div>

    <div class="mb-6 rounded-lg border border-purple-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4">
      <p class="text-center text-purple-200">
        <strong>🔗 Source Code:</strong>
        <a href="https://github.com/drazzardaq/opensource/blob/master/src/opensource/DimButton.vue" target="_blank" class="text-purple-300 underline transition-colors hover:text-purple-100"> View on GitHub </a>
      </p>
    </div>

    <div class="text-center text-xs text-purple-400 opacity-75">Part of the <strong>DUIMX</strong> component library 🚀</div>
  </div>

  <!-- Normal Component Mode -->
  <div v-else class="relative inline-block">
    <button ref="buttonElement" :class="buttonClasses" :style="buttonStyles" :disabled="disabled || loading" v-bind="ariaAttributes" @click="handleClick" @focus="handleFocus" @blur="handleBlur" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" @keydown="handleKeyDown">
      <!-- Enhanced loading state with accessibility -->
      <span v-if="loading" class="mr-2 inline-flex items-center" role="status" aria-label="Loading" aria-live="polite">
        <svg class="h-4 w-4 animate-spin text-current" fill="none" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" class="opacity-25" />
          <path fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" class="opacity-75" />
        </svg>
        <span class="sr-only">Loading in progress, please wait...</span>
      </span>

      <!-- Icon with proper spacing and positioning -->
      <span 
        v-else-if="icon" 
        :class="{
          'mr-2': iconPosition === 'left' && displayText,
          'ml-2': iconPosition === 'right' && displayText,
          'mb-1': iconPosition === 'top' && displayText,
          'mt-1': iconPosition === 'bottom' && displayText,
        }"
        class="flex-shrink-0" 
        :aria-hidden="true" 
        role="img" 
        :aria-label="`Icon: ${icon}`"
      >
        {{ icon }}
      </span>

      <!-- Button text with overflow protection -->
      <span class="truncate" :title="displayText">
        <slot>{{ displayText }}</slot>
      </span>

      <!-- Hidden accessibility helpers -->
      <span v-if="disabled" id="button-disabled-help" class="sr-only"> This button is currently disabled and cannot be activated </span>

      <!-- Loading announcement for screen readers -->
      <span v-if="loading" class="sr-only" aria-live="assertive"> Action in progress, please wait for completion </span>
    </button>
  </div>
</template>

<script setup>
import { computed, toRefs, shallowRef, watchEffect, onMounted, onBeforeUnmount, ref } from "vue";

// Performance-optimized props with validation and priority system
const props = defineProps({
  // Core styling props (highest priority - global)
  roundness: {
    type: Number,
    default: 8,
    validator: (value) => value >= 0 && value <= 50,
  },
  primaryColor: {
    type: String,
    default: "#6366f1",
    validator: (value) => /^#([0-9A-F]{3}){1,2}$/i.test(value) || /^(rgb|hsl)a?\(/.test(value),
  },
  bgColor: { type: String, default: "#1e293b" }, // Dark theme default
  textColor: { type: String, default: "#e2e8f0" }, // Light text for dark backgrounds
  fontFamily: { type: String, default: "inherit" },
  width: {
    type: Number,
    default: 200,
    validator: (value) => value > 0 && value <= 800,
  },
  height: {
    type: Number,
    default: 48,
    validator: (value) => value > 0 && value <= 200,
  },
  padding: { type: Number, default: 16 },
  margin: { type: Number, default: 8 },
  theme: {
    type: String,
    default: "dark",
    validator: (value) => ["light", "dark", "auto", "system"].includes(value),
  },
  compact: { type: Boolean, default: false },
  isDocs: { type: Boolean, default: false },

  // Button-specific props (component-specific priority)
  text: {
    type: String,
    default: "Click Me",
    validator: (value) => value.length <= 100,
  },
  variant: {
    type: String,
    default: "primary",
    validator: (value) =>
      [
        // Core variants
        "primary", "secondary", "outline", "ghost", "glass", "solid", "link",
        // Status variants
        "danger", "success", "warning",
        // Advanced variants
        "gradient", "glassmorphic", "neon", "neumorphic", "animated", 
        "hover-effects", "ripple", "glow", "shadow", "minimal", "retro"
      ].includes(value),
  },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  
  // Size can refer to predefined sizes OR be used with explicit dimensions
  size: {
    type: String,
    default: "md",
    validator: (value) => ["xs", "sm", "md", "lg", "xl", "custom"].includes(value),
  },
  
  // Font styling
  fontSize: {
    type: Number,
    default: 14,
    validator: (value) => value >= 10 && value <= 32,
  },
  fontWeight: {
    type: [String, Number],
    default: "medium",
    validator: (value) => {
      if (typeof value === 'string') {
        return ["light", "normal", "medium", "semibold", "bold"].includes(value);
      }
      return value >= 100 && value <= 900 && value % 100 === 0;
    },
  },
  
  // Button dimensions (override size when specified)
  buttonWidth: {
    type: [Number, String],
    default: null,
    validator: (value) => {
      if (typeof value === 'number') return value >= 50 && value <= 500;
      if (typeof value === 'string') return ['auto', 'full', 'fit-content'].includes(value);
      return true; // null is valid
    },
  },
  buttonHeight: {
    type: Number,
    default: null,
    validator: (value) => value === null || (value >= 20 && value <= 100),
  },
  
  fullWidth: { type: Boolean, default: false },
  
  // Gradient colors (for gradient variant)
  gradientFrom: {
    type: String,
    default: "#6366f1",
    validator: (value) => /^#([0-9A-F]{3}){1,2}$/i.test(value) || /^(rgb|hsl)a?\(/.test(value),
  },
  gradientTo: {
    type: String,
    default: "#8b5cf6",
    validator: (value) => /^#([0-9A-F]{3}){1,2}$/i.test(value) || /^(rgb|hsl)a?\(/.test(value),
  },
  gradientDirection: {
    type: String,
    default: "135deg",
    validator: (value) => /^\d+deg$/.test(value) || ["to-r", "to-l", "to-t", "to-b", "to-tr", "to-tl", "to-br", "to-bl"].includes(value),
  },
  
  // Content props
  label: {
    type: String,
    default: "",
    validator: (value) => value.length <= 100,
  },
  icon: {
    type: String,
    default: "",
    validator: (value) => value.length <= 10,
  },
  iconPosition: {
    type: String,
    default: "left",
    validator: (value) => ["left", "right", "top", "bottom"].includes(value),
  },
  
  // Imported styles (lowest priority - from Uiverse etc.)
  importedStyles: {
    type: Object,
    default: () => ({}),
  },
  importedVariant: {
    type: String,
    default: null,
  },
});

// Optimized emits with performance tracking
const emit = defineEmits(["click", "focus", "blur", "mouseenter", "mouseleave"]);

// Destructure reactive props for better performance
const { roundness, primaryColor, variant, theme, disabled, loading } = toRefs(props);

// Computed property for button text with priority: slot > label > text > default
const displayText = computed(() => {
  return props.label || props.text || 'Click Me';
});

// Computed property for effective variant (handles imported variants)
const effectiveVariant = computed(() => {
  // Priority: importedVariant > variant prop > default
  return props.importedVariant || props.variant || 'primary';
});

// Computed property for effective dimensions with size presets
const effectiveDimensions = computed(() => {
  // Size presets (when size is not 'custom')
  const sizePresets = {
    xs: { width: 80, height: 28, fontSize: 12, padding: 8 },
    sm: { width: 100, height: 32, fontSize: 13, padding: 12 },
    md: { width: 140, height: 40, fontSize: 14, padding: 16 },
    lg: { width: 180, height: 48, fontSize: 16, padding: 20 },
    xl: { width: 220, height: 56, fontSize: 18, padding: 24 },
  };

  // If explicit dimensions are provided, they override everything
  if (props.buttonWidth !== null || props.buttonHeight !== null || props.size === 'custom') {
    return {
      width: props.fullWidth ? '100%' : (props.buttonWidth || props.width || 140),
      height: props.buttonHeight || props.height || 40,
      fontSize: props.fontSize,
      padding: props.padding,
    };
  }

  // Use size preset if available
  if (sizePresets[props.size]) {
    const preset = sizePresets[props.size];
    return {
      width: props.fullWidth ? '100%' : preset.width,
      height: preset.height,
      fontSize: props.fontSize || preset.fontSize, // Allow fontSize override
      padding: preset.padding,
    };
  }

  // Fallback to props or defaults
  return {
    width: props.fullWidth ? '100%' : (props.buttonWidth || props.width || 140),
    height: props.buttonHeight || props.height || 40,
    fontSize: props.fontSize,
    padding: props.padding,
  };
});

// Enhanced font weight computation
const effectiveFontWeight = computed(() => {
  const weightMap = {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  };
  
  if (typeof props.fontWeight === 'string') {
    return weightMap[props.fontWeight] || '500';
  }
  return props.fontWeight.toString();
});

// Performance optimization: Memoized roundness computation
const roundnessClass = computed(() => {
  const val = roundness.value;
  // Use Map for O(1) lookup instead of multiple conditionals
  const roundnessMap = new Map([
    [0, "rounded-none"],
    [4, "rounded-sm"],
    [8, "rounded"],
    [12, "rounded-lg"],
    [20, "rounded-xl"],
    [50, "rounded-full"],
  ]);

  // Find closest match using binary search approach
  const sortedKeys = Array.from(roundnessMap.keys()).sort((a, b) => a - b);
  let closest = sortedKeys[0];

  for (const key of sortedKeys) {
    if (Math.abs(key - val) < Math.abs(closest - val)) {
      closest = key;
    }
  }

  return roundnessMap.get(closest) || "rounded";
});

// Performance optimization: Cached theme classes
const themeClassCache = new Map();
const themeClasses = computed(() => {
  const themeKey = theme.value;

  if (themeClassCache.has(themeKey)) {
    return themeClassCache.get(themeKey);
  }

  const isDark = themeKey === "dark";
  const classes = {
    bg: isDark ? "bg-slate-800" : "bg-white",
    text: isDark ? "text-slate-200" : "text-gray-900",
    border: isDark ? "border-slate-700" : "border-gray-200",
  };

  themeClassCache.set(themeKey, classes);
  return classes;
});

// Performance optimization: Direct CSS variables without useCssVars
const buttonElement = shallowRef(null);

// Performance optimization: Variant class cache for better memory efficiency
const variantClassCache = new Map([
  // Core variants
  ["primary", ["shadow-lg", "hover:shadow-xl", "bg-primary", "text-white"]],
  ["secondary", ["bg-gray-600", "text-white", "hover:bg-gray-700", "shadow-md"]],
  ["outline", ["border-2", "bg-transparent", "hover:bg-opacity-10", "border-primary", "text-primary"]],
  ["ghost", ["bg-transparent", "hover:bg-opacity-10", "text-primary"]],
  ["glass", ["backdrop-blur-md", "bg-opacity-20", "border", "border-white/20", "bg-primary/20"]],
  ["solid", ["bg-purple-600", "text-white", "hover:bg-purple-700"]],
  ["link", ["bg-transparent", "text-blue-600", "underline", "hover:text-blue-800"]],
  
  // Status variants
  ["danger", ["bg-red-600", "text-white", "hover:bg-red-700"]],
  ["success", ["bg-green-600", "text-white", "hover:bg-green-700"]],
  ["warning", ["bg-yellow-400", "text-black", "hover:bg-yellow-500"]],
  
  // Advanced variants
  ["gradient", ["bg-gradient-to-r", "from-purple-500", "to-pink-500", "text-white", "hover:from-purple-600", "hover:to-pink-600", "shadow-lg"]],
  ["glassmorphic", ["backdrop-blur-xl", "bg-white/10", "border", "border-white/20", "text-white", "shadow-2xl", "hover:bg-white/20"]],
  ["neon", ["border-2", "border-cyan-400", "bg-transparent", "text-cyan-400", "shadow-[0_0_20px_rgba(34,211,238,0.5)]", "hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]"]],
  ["neumorphic", ["bg-gray-200", "text-gray-800", "shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]", "hover:shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]"]],
  ["animated", ["bg-gradient-to-r", "from-blue-500", "to-purple-600", "text-white", "animate-pulse", "hover:animate-none", "shadow-lg"]],
  ["hover-effects", ["bg-indigo-600", "text-white", "transform", "hover:scale-110", "hover:rotate-2", "transition-transform", "duration-300"]],
  ["ripple", ["relative", "overflow-hidden", "bg-blue-600", "text-white", "hover:bg-blue-700"]],
  ["glow", ["bg-purple-600", "text-white", "shadow-[0_0_20px_rgba(147,51,234,0.5)]", "hover:shadow-[0_0_30px_rgba(147,51,234,0.8)]"]],
  ["shadow", ["bg-white", "text-gray-800", "shadow-2xl", "hover:shadow-3xl", "border", "border-gray-200"]],
  ["minimal", ["bg-transparent", "text-gray-700", "border", "border-gray-300", "hover:bg-gray-50"]],
  ["retro", ["bg-orange-400", "text-black", "font-bold", "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]", "hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]", "transform", "hover:translate-x-[2px]", "hover:translate-y-[2px]"]]
]);

// Highly optimized button classes with memoization and priority system
const buttonClasses = computed(() => {
  // Base classes that rarely change - use static array
  const baseClasses = [
    "inline-flex",
    "items-center",
    "justify-center",
    "font-medium",
    "transition-all",
    "duration-200",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-offset-2",
    "select-none", // Prevent text selection for better UX
    roundnessClass.value,
  ];

  // Icon position classes
  const iconClasses = [];
  if (props.icon && props.iconPosition === 'top') {
    iconClasses.push('flex-col');
  } else if (props.icon && props.iconPosition === 'bottom') {
    iconClasses.push('flex-col-reverse');
  } else if (props.icon && props.iconPosition === 'right') {
    iconClasses.push('flex-row-reverse');
  }

  // Size-based classes (when not using custom dimensions)
  const sizeClasses = [];
  if (props.size !== 'custom' && props.buttonWidth === null && props.buttonHeight === null) {
    switch (props.size) {
      case 'xs':
        sizeClasses.push('text-xs', 'px-2', 'py-1');
        break;
      case 'sm':
        sizeClasses.push('text-sm', 'px-3', 'py-1.5');
        break;
      case 'lg':
        sizeClasses.push('text-lg', 'px-6', 'py-3');
        break;
      case 'xl':
        sizeClasses.push('text-xl', 'px-8', 'py-4');
        break;
      default: // md
        sizeClasses.push('text-base', 'px-4', 'py-2');
    }
  }

  // Width classes
  const widthClasses = [];
  if (props.fullWidth) {
    widthClasses.push('w-full');
  }

  // State-dependent classes
  const stateClasses = [];
  if (disabled.value || loading.value) {
    stateClasses.push("opacity-50", "cursor-not-allowed", "pointer-events-none");
  } else {
    stateClasses.push(
      "hover:scale-[1.02]",
      "active:scale-[0.98]",
      "cursor-pointer",
      "hover:shadow-lg",
      "focus:ring-primary/50",
    );
  }

  // Get variant-specific classes from cache (using effectiveVariant)
  const variantClasses = variantClassCache.get(effectiveVariant.value) || variantClassCache.get("primary");

  return [...baseClasses, ...iconClasses, ...sizeClasses, ...widthClasses, ...stateClasses, ...variantClasses];
});

// Enhanced button styles with priority system and imported style merging
const buttonStyles = computed(() => {
  const dimensions = effectiveDimensions.value;
  
  // Base styles (global props have highest priority)
  const baseStyles = {
    fontFamily: props.fontFamily,
    fontSize: `${dimensions.fontSize}px`,
    fontWeight: effectiveFontWeight.value,
    width: typeof dimensions.width === 'string' ? dimensions.width : `${dimensions.width}px`,
    height: `${dimensions.height}px`,
    // Use dimensions padding when using presets, otherwise use global padding
    padding: props.size !== 'custom' && props.buttonWidth === null && props.buttonHeight === null 
      ? `${dimensions.padding}px` 
      : `${props.padding}px`,
    margin: `${props.margin}px`,
  };

  // Variant-specific style overrides (component-specific priority)
  const variantStyleMap = {
    outline: {
      borderColor: primaryColor.value,
      color: primaryColor.value,
      backgroundColor: "transparent",
      borderWidth: "2px",
      borderStyle: "solid",
    },
    ghost: {
      color: primaryColor.value,
      backgroundColor: "transparent",
    },
    glass: {
      backgroundColor: `${primaryColor.value}33`, // 20% opacity
      backdropFilter: "blur(10px)",
      borderColor: `${primaryColor.value}40`, // 25% opacity
      borderWidth: "1px",
      borderStyle: "solid",
      color: props.textColor,
    },
    gradient: {
      background: props.gradientDirection.includes('deg') 
        ? `linear-gradient(${props.gradientDirection}, ${props.gradientFrom}, ${props.gradientTo})`
        : `linear-gradient(${props.gradientDirection.replace('to-', 'to ')}, ${props.gradientFrom}, ${props.gradientTo})`,
      color: "#ffffff",
      border: "none",
    },
    primary: {
      backgroundColor: primaryColor.value,
      color: "#ffffff",
    },
    secondary: {
      backgroundColor: props.theme === 'dark' ? "#4b5563" : "#e5e7eb",
      color: props.theme === 'dark' ? "#ffffff" : "#111827",
    },
    solid: {
      backgroundColor: primaryColor.value,
      color: "#ffffff",
    },
    danger: {
      backgroundColor: "#ef4444",
      color: "#ffffff",
    },
    success: {
      backgroundColor: "#10b981",
      color: "#ffffff",
    },
    warning: {
      backgroundColor: "#f59e0b",
      color: "#000000",
    },
    link: {
      backgroundColor: "transparent",
      color: primaryColor.value,
      textDecoration: "underline",
    },
    neon: {
      backgroundColor: primaryColor.value,
      color: "#ffffff",
      boxShadow: `0 0 20px ${primaryColor.value}80`,
      border: `2px solid ${primaryColor.value}`,
    },
    glassmorphic: {
      backgroundColor: `${primaryColor.value}20`,
      backdropFilter: "blur(10px)",
      border: `1px solid ${primaryColor.value}40`,
      color: props.textColor,
    },
    neumorphic: {
      backgroundColor: props.bgColor,
      color: props.textColor,
      boxShadow: `8px 8px 16px #bebebe, -8px -8px 16px #ffffff`,
    },
    glow: {
      backgroundColor: primaryColor.value,
      color: "#ffffff",
      boxShadow: `0 0 20px ${primaryColor.value}80, 0 0 40px ${primaryColor.value}60`,
    },
    shadow: {
      backgroundColor: "#ffffff",
      color: "#111827",
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      border: "1px solid #e5e7eb",
    },
    minimal: {
      backgroundColor: "transparent",
      color: props.theme === 'dark' ? "#e5e7eb" : "#374151",
      border: `1px solid ${props.theme === 'dark' ? '#374151' : '#d1d5db'}`,
    },
    retro: {
      backgroundColor: "#f97316",
      color: "#000000",
      fontWeight: "bold",
      boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)",
      border: "2px solid #000000",
    },
  };

  // Get variant styles (using effectiveVariant)
  const variantStyles = variantStyleMap[effectiveVariant.value] || variantStyleMap.primary;

  // Merge imported styles (lowest priority - can be overridden by component and global props)
  const importedStyles = props.importedStyles || {};

  // Priority merge: imported < variant < base (global props win)
  return {
    ...importedStyles,
    ...variantStyles,
    ...baseStyles,
  };
});

// Performance optimization: Debounced click handler to prevent spam
let clickTimeout = null;
const handleClick = (event) => {
  if (disabled.value || loading.value) return;

  // Debounce rapid clicks (prevents button spam)
  if (clickTimeout) return;

  clickTimeout = setTimeout(() => {
    clickTimeout = null;
  }, 150);

  // Handle ripple effect for ripple variant
  if (props.variant === "ripple") {
    createRipple(event);
  }

  // Emit with performance tracking
  emit("click", event);

  // Optional: Add haptic feedback for supported devices
  if (navigator.vibrate) {
    navigator.vibrate(10);
  }

  // Accessibility: Announce action to screen readers
  announceToScreenReader(`${props.text} button activated`);
};

// Performance optimization: Event handlers with proper cleanup
const handleFocus = (event) => {
  emit("focus", event);
  announceToScreenReader(`Focused on ${props.text} button`);
};

const handleBlur = (event) => {
  emit("blur", event);
};

const handleMouseEnter = (event) => {
  emit("mouseenter", event);
  // Optional: Preload hover state for performance
  if (!disabled.value && !loading.value) {
    announceToScreenReader(`${props.text} button, ${variant.value} style`, "polite");
  }
};

const handleMouseLeave = (event) => emit("mouseleave", event);

// Accessibility enhancement: Screen reader announcements
const announceToScreenReader = (message, priority = "assertive") => {
  if (typeof window === "undefined") return;

  const announcement = document.createElement("div");
  announcement.setAttribute("aria-live", priority);
  announcement.setAttribute("aria-atomic", "true");
  announcement.className = "sr-only";

  document.body.appendChild(announcement);

  // Use requestAnimationFrame for better performance
  requestAnimationFrame(() => {
    announcement.textContent = message;

    // Clean up after announcement
    setTimeout(() => {
      if (document.body.contains(announcement)) {
        document.body.removeChild(announcement);
      }
    }, 1000);
  });
};

// Accessibility: Enhanced ARIA attributes
const ariaAttributes = computed(() => {
  const attrs = {
    "aria-label": loading.value ? `Loading: ${props.text}` : props.text,
    "aria-pressed": "false", // Can be enhanced for toggle buttons
    "aria-disabled": (disabled.value || loading.value).toString(),
    role: "button",
    tabindex: disabled.value ? "-1" : "0",
  };

  // Add contextual ARIA attributes based on variant
  switch (variant.value) {
    case "primary":
      attrs["aria-description"] = "Primary action button";
      break;
    case "outline":
      attrs["aria-description"] = "Secondary action button with outline style";
      break;
    case "ghost":
      attrs["aria-description"] = "Subtle action button";
      break;
    case "glass":
      attrs["aria-description"] = "Glass morphism style button";
      break;
  }

  if (loading.value) {
    attrs["aria-busy"] = "true";
    attrs["aria-live"] = "polite";
  }

  if (disabled.value) {
    attrs["aria-describedby"] = "button-disabled-help";
  }

  return attrs;
});

// Accessibility: Keyboard navigation enhancement
const handleKeyDown = (event) => {
  // Enhanced keyboard support
  switch (event.key) {
    case "Enter":
    case " ": // Space key
      event.preventDefault();
      handleClick(event);
      break;
    case "Escape":
      // Allow parent components to handle escape
      event.target.blur();
      break;
    default:
      // Let other keys bubble up
      break;
  }
};

const createRipple = (event) => {
  const button = event.currentTarget;
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;
  const rippleElement = document.createElement("span");
  rippleElement.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    left: ${x}px;
    top: ${y}px;
    animation: ripple 0.6s linear;
    pointer-events: none;
  `;
  button.appendChild(rippleElement);
  setTimeout(() => {
    rippleElement.remove();
  }, 600);
};
</script>

<style scoped>
@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

/* Additional hover effects */
.hover\:shadow-\[0_0_20px_\#22d3ee\]:hover {
  box-shadow: 0 0 20px #22d3ee;
}
.hover\:shadow-\[0_0_30px_\#9333ea\]:hover {
  box-shadow: 0 0 30px #9333ea;
}
.hover\:shadow-\[0_8px_0_\#ea580c\]:hover {
  box-shadow: 0 8px 0 #ea580c;
}
.hover\:shadow-\[0_4px_0_\#ea580c\]:hover {
  box-shadow: 0 4px 0 #ea580c;
}
.shadow-\[0_8px_0_\#ea580c\] {
  box-shadow: 0 8px 0 #ea580c;
}
.shadow-\[4px_4px_0_black\] {
  box-shadow: 4px 4px 0 black;
}
.hover\:shadow-\[2px_2px_0_black\]:hover {
  box-shadow: 2px 2px 0 black;
}
</style>
