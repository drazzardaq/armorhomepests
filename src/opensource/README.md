# DUIMX Component Library

A comprehensive Vue 3 component library featuring modern, accessible, and highly customizable UI components with integrated Uiverse.io variants.

## 🚀 Overview

DUIMX (pronounced "dra-see-uhm") is a cutting-edge Vue 3 component library designed for modern web applications. It combines the power of Vue 3's Composition API with beautiful, accessible components inspired by the best designs from Uiverse.io.

## ✨ Features

- **25+ Production-Ready Components** - From buttons to complex dashboards
- **Uiverse.io Integration** - Beautiful variants inspired by the community
- **Full Accessibility** - WCAG 2.1 AA compliant with keyboard navigation
- **TypeScript Support** - Complete type definitions for better DX
- **Customizable Themes** - Light, dark, and custom theme support
- **Mobile-First Design** - Responsive across all screen sizes
- **Vue 3 Optimized** - Built with Composition API and modern patterns

## 🎨 Component Categories

### Interactive Components
- **DimButton** - Multi-variant button with animations
- **DimEnhancedButton** - Uiverse.io inspired buttons with special effects
- **DimModal** - Accessible modal dialogs with backdrop options
- **DimTooltip** - Smart positioning tooltips with 6 visual variants
- **DimToggleSwitch** - Modern toggle switches with iOS/Material variants
- **DimNeumorphicToggle** - Soft UI toggle with neumorphic design
- **DimThemeSwitch** - Theme switcher with smooth transitions

### Layout Components
- **DimCard** - Flexible card layouts with multiple variants
- **DimGlassCard** - Glass morphism cards with backdrop blur
- **DimCardReveal** - Cards with hover reveal effects
- **DimUserProfileCard** - Social media style profile cards
- **DimTabs** - Accessible tab navigation
- **DimAccordion** - Collapsible content panels

### Input Components
- **DimSearchBar** - Advanced search with filtering
- **DimAIPromptInput** - Specialized AI interaction input
- **DimGlassMorphicSlider** - Modern range sliders
- **DimSliderDemo** - Customizable value sliders
- **DimEmojiRating** - Interactive emoji-based ratings

### Feedback Components
- **DimLoader** - Loading animations with multiple types
- **DimProgressBar** - Progress indicators with animations
- **DimAnimatedIcon** - Dynamic icon animations

### Data Components
- **DimGraph3D** - 3D data visualization
- **DimCarousel** - Image/content carousels
- **DimAdminDashboard** - Complete dashboard layouts

### Utility Components
- **DimUiverseShowcase** - Uiverse.io variant browser
- **DimThemeWrapper** - Theme context provider

## 🛠 Installation

```bash
# Clone the repository
git clone https://github.com/drazzardaq/outpost.git

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📖 Usage

### Basic Component Usage

```vue
<template>
  <div>
    <!-- Basic Button -->
    <DimButton 
      text="Click Me" 
      variant="primary"
      :roundness="12"
      primaryColor="#6366f1"
    />
    
    <!-- Enhanced Button with Uiverse Variant -->
    <DimEnhancedButton 
      text="Special Effect"
      uiverseVariant="neon-glow"
      :glowIntensity="2"
    />
    
    <!-- Smart Tooltip -->
    <DimTooltip 
      text="This is helpful information"
      variant="glass"
      position="auto"
    >
      <button>Hover for tooltip</button>
    </DimTooltip>
    
    <!-- Glass Card -->
    <DimGlassCard 
      title="Glass Effect"
      :hoverable="true"
    >
      <p>Beautiful glass morphism design</p>
    </DimGlassCard>
  </div>
</template>

<script setup>
import { 
  DimButton, 
  DimEnhancedButton, 
  DimTooltip, 
  DimGlassCard 
} from '@/opensource';
</script>
```

### Universal Props

All DUIMX components support these universal props:

```typescript
interface UniversalProps {
  // Theme & Colors
  theme?: 'light' | 'dark';
  primaryColor?: string;
  bgColor?: string;
  textColor?: string;
  
  // Layout & Spacing
  roundness?: number;
  width?: number;
  height?: number;
  padding?: number;
  margin?: number;
  
  // Typography
  fontFamily?: string;
  
  // Effects
  boxShadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  borderWidth?: number;
  animation?: 'none' | 'hover-lift' | 'pulse' | 'glow';
  animationSpeed?: 'slow' | 'normal' | 'fast';
  shadowColor?: string;
  shadowIntensity?: number;
  glowColor?: string;
  glowIntensity?: number;
  blurAmount?: number;
  opacity?: number;
}
```

## 🎯 Component-Specific Props

### DimButton
```typescript
interface DimButtonProps extends UniversalProps {
  text?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  iconPosition?: 'left' | 'right';
}
```

### DimTooltip
```typescript
interface DimTooltipProps extends UniversalProps {
  text?: string;
  variant?: 'default' | 'glass' | 'neon' | 'gradient' | 'neumorphic' | 'minimal';
  position?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
  trigger?: 'hover' | 'click' | 'focus';
  arrow?: boolean;
  delay?: number;
  maxWidth?: number;
  disabled?: boolean;
}
```

### DimModal
```typescript
interface DimModalProps extends UniversalProps {
  isOpen?: boolean;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  persistent?: boolean;
  centered?: boolean;
  backdrop?: 'blur' | 'dark' | 'light';
  closeOnOverlay?: boolean;
}
```

## 🌟 Uiverse.io Integration

DUIMX features deep integration with Uiverse.io designs:

### Enhanced Button Variants
```vue
<DimEnhancedButton 
  uiverseVariant="unlucky-sheep"
  text="Hover Effect"
/>

<DimEnhancedButton 
  uiverseVariant="neon-glow"
  text="Cyberpunk Style"
/>

<DimEnhancedButton 
  uiverseVariant="glass-morph"
  text="Glass Effect"
/>
```

### Uiverse Showcase Component
```vue
<DimUiverseShowcase 
  category="button"
  :limit="9"
  :showSearch="true"
  @variantSelected="handleSelection"
  @variantImported="handleImport"
/>
```

## 🎨 Theming

### Custom Theme Configuration
```vue
<script setup>
import { provide } from 'vue';

// Provide custom theme
provide('theme', {
  primaryColor: '#8b5cf6',
  backgroundColor: '#1e1b4b',
  textColor: '#f8fafc',
  borderRadius: 16,
  fontFamily: 'Inter, sans-serif'
});
</script>
```

### CSS Custom Properties
```css
:root {
  --dim-primary: #6366f1;
  --dim-bg: #ffffff;
  --dim-text: #1f2937;
  --dim-border-radius: 12px;
  --dim-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
```

## ♿ Accessibility

All components follow WCAG 2.1 AA guidelines:

- **Keyboard Navigation** - Full keyboard support with logical tab order
- **Screen Reader Support** - Proper ARIA labels and descriptions
- **High Contrast** - Meets contrast ratio requirements
- **Focus Management** - Clear focus indicators and logical flow
- **Semantic HTML** - Proper semantic structure

### Accessibility Examples
```vue
<!-- Button with ARIA -->
<DimButton 
  text="Save Document"
  :aria-label="'Save the current document'"
  :aria-describedby="'save-help'"
/>

<!-- Tooltip with ARIA -->
<DimTooltip 
  text="This action cannot be undone"
  :aria-live="'polite'"
>
  <DimButton text="Delete" variant="danger" />
</DimTooltip>
```

## 🚀 Performance

DUIMX is optimized for performance:

- **Tree Shaking** - Import only components you use
- **Lazy Loading** - Components load on demand
- **Minimal Bundle Size** - Optimized for production builds
- **CSS-in-JS Optimization** - Efficient style management
- **Vue 3 Reactivity** - Leverages Vue 3's optimized reactivity

## 🧪 Testing

### Component Testing
```javascript
import { mount } from '@vue/test-utils';
import { DimButton } from '@/opensource';

describe('DimButton', () => {
  it('renders with correct text', () => {
    const wrapper = mount(DimButton, {
      props: { text: 'Test Button' }
    });
    expect(wrapper.text()).toBe('Test Button');
  });
  
  it('emits click event', async () => {
    const wrapper = mount(DimButton);
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
```

## 📱 Responsive Design

All components are mobile-first and responsive:

```vue
<!-- Responsive Card -->
<DimCard 
  :width="{ xs: 300, sm: 400, md: 500, lg: 600 }"
  :padding="{ xs: 12, md: 20 }"
/>

<!-- Adaptive Button -->
<DimButton 
  :size="{ xs: 'sm', md: 'md', lg: 'lg' }"
  text="Responsive Button"
/>
```

## 🔧 Development

### Project Structure
```
src/opensource/
├── components/          # Shared component utilities
├── DimButton.vue       # Button component
├── DimCard.vue         # Card component
├── DimModal.vue        # Modal component
├── DimTooltip.vue      # Tooltip component
├── ...                 # Other components
├── README.md           # This file
└── index.js            # Component exports
```

### Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-component`
3. Follow the component development standards
4. Add tests and documentation
5. Submit a pull request

### Component Development Standards

1. **Naming Convention**: Use `Dim*` prefix for all components
2. **Universal Props**: Support all universal props
3. **Accessibility**: Follow WCAG 2.1 AA guidelines
4. **Documentation**: Include comprehensive prop documentation
5. **Testing**: Add unit tests for all functionality
6. **Mobile-First**: Design for mobile, enhance for desktop

## 📄 License

MIT License - see [LICENSE.md](./LICENSE.md) for details.

## 🤝 Community

- **GitHub**: [drazzardaq/outpost](https://github.com/drazzardaq/outpost)
- **Playground**: [Live Demo](https://outpost.drazzardaq.com/playground)
- **Uiverse Integration**: [Browse Variants](https://uiverse.io)

## 🔮 Roadmap

### v0.9.7 - Real Uiverse.io API
- Direct Uiverse.io API integration
- Real-time variant fetching
- Community component sharing

### v1.2.0 - Advanced Features
- AI-powered component generation
- Design token system
- Multi-framework support (React, Angular)

### v2.0.0 - Enterprise
- Team collaboration features
- Advanced analytics
- Cloud synchronization

---

**DUIMX** - Building the future of Vue.js component development, one component at a time.

Made with ❤️ by the DUIMX Team
