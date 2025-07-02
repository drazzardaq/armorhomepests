// playgroundMaps.js
// All static maps, doc templates, and doc generation helpers for Playground

// --- Relevant Controls Map ---
export const getRelevantControlsMap = {
  default: [
    "theme", "primaryColor", "fontFamily", "roundness", "width", "height", "padding", "margin", "bgColor", "textColor", "boxShadow", "borderWidth", "animation", "animationSpeed", "shadowColor", "shadowIntensity", "glowColor", "glowIntensity", "blurAmount", "opacity"
  ],
  DimButton: ["theme", "primaryColor", "fontFamily", "roundness", "padding", "margin", "animation", "shadowColor", "shadowIntensity"],
  DimEnhancedButton: ["theme", "primaryColor", "fontFamily", "roundness", "padding", "margin", "animation", "animationSpeed", "shadowColor", "shadowIntensity", "glowColor", "glowIntensity", "opacity"],
  // ...add all other component-specific control arrays as in the original file...
};

// --- Component Specific Props Map ---
export const getComponentSpecificMap = {
  DimButton: (values) => ({
    // Core button props
    size: values.size || "md",
    variant: values.variant || "primary",
    disabled: values.disabled || false,
    loading: values.loading || false,
    fullWidth: values.fullWidth || false,
    compact: values.compact || false,
    
    // Content props
    icon: values.icon || "",
    iconPosition: values.iconPosition || "left",
    label: values.label || "Click Me",
    text: values.text || "Click Me",
    
    // Font styling
    fontSize: values.fontSize || 14,
    fontWeight: values.fontWeight || "medium",
    
    // Dimensions
    buttonWidth: values.buttonWidth || null,
    buttonHeight: values.buttonHeight || null,
    
    // Gradient props
    gradientFrom: values.gradientFrom || "#6366f1",
    gradientTo: values.gradientTo || "#8b5cf6",
    gradientDirection: values.gradientDirection || "135deg",
    
    // Imported styles (lowest priority)
    importedStyles: values.importedStyles || {},
    importedVariant: values.importedVariant || null,
    importedPrimaryColor: values.importedPrimaryColor || null,
    importedRoundness: values.importedRoundness || null,
    importedPadding: values.importedPadding || null,
  }),
  DimEnhancedButton: (values) => ({
    text: values.text || "Click Me",
    variant: values.variant || "primary",
    disabled: values.disabled || false,
    loading: values.loading || false,
    uiverseVariant: values.uiverseVariant || "none",
    animationType: values.animationType || "hover-lift",
  }),
  // ...add all other component-specific prop functions as in the original file...
};

// --- Component Doc Templates (optional, if you want static markdown blocks) ---
export const getComponentDocTemplates = {
  // e.g. DimButton: "# Button\n...",
};

// --- Doc Generation Helper ---
export function generateComponentDocs(componentName, componentControlConfigs, systemVersion) {
  if (componentName === 'DimButton') {
    return `# DimButton Documentation

## Overview
The DimButton component is a highly customizable, accessible button with multiple variants and interactive states.

## Features
- ✨ **Multiple Variants**: Primary, secondary, outline, ghost, glass, gradient, neon, and more
- 🌓 **Theme Adaptive**: Automatically adjusts for light/dark themes
- ⚡ **Interactive States**: Hover, focus, active, and disabled states
- ♿ **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- 🔧 **Fully Customizable**: Colors, sizes, fonts, animations
- 📱 **Responsive**: Adapts to different screen sizes

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| text | String | 'Click Me' | Button text content |
| variant | String | 'primary' | Button style variant |
| disabled | Boolean | false | Disable button interaction |
| loading | Boolean | false | Show loading state |
| icon | String | '' | Icon class or emoji |
| roundness | Number | 8 | Border radius in pixels |
| primaryColor | String | '#6366f1' | Primary color for theming |
| theme | String | 'light' | Theme variant (light/dark/auto) |

## Variants
- **primary**: Default solid button with primary color
- **secondary**: Gray button for secondary actions
- **outline**: Transparent button with border
- **ghost**: Transparent button without border
- **glass**: Glassmorphic effect with backdrop blur
- **gradient**: Gradient background button
- **neon**: Glowing border effect
- **neumorphic**: Soft shadow depth effect
- **retro**: Old-school pixel art style
- **minimal**: Clean minimal design

## Usage Examples

### Basic Button
\`\`\`vue
<DimButton 
  text="Click Me"
  @click="handleClick"
/>
\`\`\`

### Gradient Button
\`\`\`vue
<DimButton 
  text="Gradient Button"
  variant="gradient"
  :roundness="12"
  @click="handleClick"
/>
\`\`\`

### Loading Button
\`\`\`vue
<DimButton 
  text="Save Changes"
  variant="primary"
  :loading="isLoading"
  @click="saveData"
/>
\`\`\`

## Events
- **@click**: Fired when button is clicked
- **@focus**: Fired when button receives focus
- **@blur**: Fired when button loses focus

## Accessibility
- Full keyboard navigation support
- Screen reader compatible
- ARIA labels and states
- Focus indicators
- High contrast support

---
*Part of the DUIMX component library v${systemVersion}*`;
  }
  
  // Default documentation for other components
  return `# ${componentName} Documentation

This component is part of the DUIMX library v${systemVersion}.

## Features
- Fully customizable styling
- Theme-aware design
- Responsive layout
- Accessibility support

## Props
See the component's prop definitions for available options.

## Usage
\`\`\`vue
<${componentName} />
\`\`\`

---
*Part of the DUIMX component library v${systemVersion}*`;
}
