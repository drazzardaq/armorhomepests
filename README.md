# DUIMX UI System v1.0.6

DUIMX (Draconic Component UI Interactive Interface Modern) is a pre## 🎮 Playground

The Playground (`src/pages/Playground.vue`) is a modern, full-featured environment featuring:

### 🎯 Featured Components Display
When no component is selected, see interactive preview cards for:
- **DimButton**: Modern button with hover effects
- **DimCard**: Responsive card layout  
- **DimSearchBar**: Advanced search interface

Each card shows quick stats and allows instant selection.

### 🎛️ Context-Aware Controls
- **Smart Property Panels**: Only shows relevant controls for selected component
- **Component-Specific Props**: Dynamic properties based on element type
- **Real-Time Updates**: Live preview updates as you adjust properties
- **Collapsible Sections**: Organized control groups for better UX

### 📝 Live Code Editor
- **Multi-Tab Interface**: Template, Style, and Script editing
- **Syntax Highlighting**: Vue SFC syntax support
- **Real-Time Preview**: See changes instantly
- **Error Handling**: Clear error messages with debugging info
- **Fullscreen Mode**: Immersive editing experience

### 📚 Documentation System
- **Auto-Generated Docs**: Comprehensive documentation for each component
- **Props Reference**: Complete property listings with types and defaults
- **Usage Examples**: Basic and advanced implementation examples
- **Variant Showcase**: Multiple design variations
- **Accessibility Info**: ARIA compliance and keyboard navigation details

### 🔧 Export & Integration
- **Multiple Formats**: Vue SFC, HTML, CSS, Tailwind code generation
- **Copy to Clipboard**: One-click code copying
- **Live Export**: Real-time code generation as you customize
- **Clean Output**: Production-ready code with proper formatting

### 📱 Responsive Design
- **Mobile-First**: Optimized for all screen sizes
- **Adaptive Layout**: Sidebar collapses on smaller screens
- **Touch-Friendly**: Large touch targets and smooth interactions
- **Progressive Enhancement**: Works without JavaScript

### 🔍 Advanced Features
- **Component Search**: Quick filtering by name or category
- **Deep Linking**: URL-based component selection
- **Theme Persistence**: Remembers your preferences
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Complete accessibility compliance

### How to Use

1. **🔍 Browse Components**: Use the search bar or browse by category
2. **🎨 Customize**: Adjust properties using the context-aware controls
3. **✏️ Edit Code**: Open the live editor to modify component code
4. **📋 Copy/Export**: Export your customized code in multiple formats
5. **📖 Learn**: Use the docs drawer for detailed component information
6. **🔗 Share**: Use deep links to share specific configurations3 + Tailwind CSS component library and interactive Playground. It is designed for rapid prototyping, beautiful webapps, and seamless UI/UX development.

## 🚀 Version 1.0.6 Features

### ✅ Core Features
- **28+ Modern, Interactive Components**: All elements follow a unified `Dim*` naming pattern (e.g., `DimButton`, `DimCard`, `DimTooltip`)
- **Live Interactive Playground**: Instantly preview, edit, and customize components with real-time controls and code editing
- **Responsive, Polished UI**: Inspired by Uiverse.io and TailwindCSS.com, with glassmorphism, gradients, and smooth transitions
- **Context-Aware Control System**: Smart controls that adapt to each component type
- **Featured Components Showcase**: Interactive preview cards when no component is selected

### 🎯 Advanced Playground Tools
- **Live Code Editor**: Real-time Vue SFC editing with syntax highlighting
- **Copy/Export System**: Generate Vue, HTML, CSS, and Tailwind code
- **Component-Specific Controls**: Dynamic property panels for each element
- **Search/Filter**: Quick component discovery with category filtering
- **Documentation System**: Auto-generated docs with props, examples, and variants
- **Responsive Design**: Works beautifully on all screen sizes

### 🏗️ Technical Architecture
- **External CSS System**: Modular stylesheet architecture for better maintainability
- **Context-Aware Controls**: Dynamic control generation based on component type
- **Component Configuration System**: Unified prop definitions with smart defaults
- **Live Preview Engine**: Advanced Vue 3 composition API integration
- **Responsive Documentation**: Left overlay system with mobile optimization

## 🎨 Component Library

All components are located in `src/opensource/` and use the `Dim*` prefix. Components are organized by category:

### 🔄 Interactive Components
- `DimButton` — Modern button variants with animations
- `DimModal` — Responsive modal dialogs
- `DimTooltip` — Advanced tooltip styles with positioning
- `DimToggleSwitch` — Smooth toggle switches
- `DimNeumorphicToggle` — Neumorphic design toggles
- `DimThemeSwitch` — Theme switching component

### 📦 Layout Components
- `DimCard` — Responsive card layouts
- `DimGlassCard` — Glass morphism cards
- `DimCardReveal` — Cards with reveal effects
- `DimUserProfileCard` — User profile displays
- `DimTabs` — Tab navigation systems
- `DimAccordion` — Collapsible content sections

### 📝 Input Components
- `DimSearchBar` — Advanced search interfaces
- `DimAIPromptInput` — AI-focused input fields
- `DimGlassMorphicSlider` — Glass morphic range sliders
- `DimSliderDemo` — Interactive range controls
- `DimEmojiRating` — Emoji-based rating systems

### 📊 Feedback Components
- `DimLoader` — Loading animations and spinners
- `DimProgressBar` — Progress indicators
- `DimAnimatedIcon` — Animated icon displays

### 📈 Data Components
- `DimGraph3D` — 3D data visualization
- `DimCarousel` — Image and content carousels
- `DimAdminDashboard` — Dashboard layouts

### 🛠️ Utility Components
- `DimThemeWrapper` — Theme container wrapper
- `DimComingSoon` — Placeholder for future components

### 🔧 Universal Props
Each component supports these common properties:
```vue
// Styling Props
:roundness="12"           // Border radius (0-50px)
:primaryColor="#6366f1"   // Primary color (hex/rgb/css)
:bgColor="#ffffff"        // Background color
:textColor="#22292f"      // Text color
:fontFamily="inherit"     // Font family

// Layout Props
:width="400"              // Component width (px)
:height="120"             // Component height (px)  
:padding="16"             // Internal padding (px)
:margin="8"               // External margin (px)

// Advanced Props
:boxShadow="md"           // Shadow intensity
:borderWidth="1.5"        // Border width (px)
:animation="none"         // Animation type
:shadowColor="#000000"    // Custom shadow color
:shadowIntensity="1"      // Shadow intensity (0-5)
:glowColor="#6366f1"      // Glow effect color
:glowIntensity="0"        // Glow intensity (0-5)
:blurAmount="0"           // Backdrop blur (0-20px)
:opacity="1"              // Component opacity (0-1)

// Theme Props
:theme="dark"             // Theme mode (light/dark)
:compact="false"          // Compact mode toggle
```

## Playground

The Playground (`src/pages/Playground.vue`) is a modern, full-featured environment to:
- **Preview**: See any component live with your chosen props and theme
- **Edit**: Modify code in real time and see instant updates
- **Copy/Export**: Grab ready-to-use code for your project
- **Search/Filter**: Quickly find any component
- **Docs Drawer**: View usage and prop documentation for each element
- **Responsive Layout**: Works beautifully on all screen sizes

### How to Use

1. **Browse Components**: Use the search/filter bar to find a component.
2. **Customize**: Adjust props (color, size, roundness, etc.) with intuitive controls.
3. **Edit Code**: Open the “See Code” section to edit the component’s code live.
4. **Copy/Export**: Use the copy button to export your customized code.
5. **Docs**: Open the docs drawer for usage and prop details.

## 🏗️ Project Structure

```
outpost/
├── src/
│   ├── components/           # Core system components
│   │   ├── DraCUIIEditor.vue    # Main editor interface
│   │   ├── LiveCodeEditor.vue   # Live code editing system
│   │   ├── UnifiedControls.vue  # Context-aware control panels
│   │   └── ...
│   ├── opensource/          # DUIMX component library
│   │   ├── DimButton.vue       # Interactive button component
│   │   ├── DimCard.vue         # Card layout component  
│   │   ├── DimModal.vue        # Modal dialog component
│   │   ├── DimSearchBar.vue    # Search interface component
│   │   ├── DimLoader.vue       # Loading animation component
│   │   ├── DimComingSoon.vue   # Placeholder component
│   │   └── ...                 # 28+ total components
│   ├── pages/
│   │   └── Playground.vue      # Main playground interface
│   ├── styles/
│   │   ├── playground.css      # External playground styles
│   │   └── ...
│   └── ...
├── files/                   # Archive of obsolete components
├── public/                  # Static assets
├── README.md               # This documentation
├── package.json            # Project dependencies
└── ...
```

### 🎯 Key Files
- **`src/pages/Playground.vue`** — Main playground interface with component selection
- **`src/components/DraCUIIEditor.vue`** — Editor wrapper with controls integration  
- **`src/components/LiveCodeEditor.vue`** — Real-time Vue SFC editor
- **`src/components/UnifiedControls.vue`** — Context-aware property controls
- **`src/styles/playground.css`** — External styles for better maintainability
- **`src/opensource/Dim*.vue`** — All DUIMX components

## 🚀 Getting Started

### Installation
```bash
# Clone the repository
git clone [repository-url]
cd outpost

# Install dependencies  
npm install
# or
pnpm install

# Start development server
npm run dev
# or  
pnpm dev
```

### Quick Start
1. **🌐 Open Playground**: Navigate to `/playground` in your browser
2. **🎨 Select Component**: Choose from 28+ available components
3. **⚙️ Customize**: Use context-aware controls to modify properties
4. **✏️ Edit Code**: Open live editor for advanced customization
5. **📋 Export**: Copy generated code to your project

### Integration
```vue
<!-- Import DUIMX components -->
<template>
  <DimButton 
    text="Hello World"
    :roundness="12"
    primaryColor="#6366f1"
    variant="primary"
    @click="handleClick"
  />
</template>

<script setup>
import DimButton from '@/opensource/DimButton.vue'

function handleClick() {
  console.log('Button clicked!')
}
</script>
```

## 🎯 Development Workflow

### Adding New Components
1. **📁 Create Component**: Add to `src/opensource/` using `Dim*` naming
2. **🏷️ Register Element**: Update playground element definitions  
3. **🎛️ Add Controls**: Define component-specific properties
4. **📖 Document**: Include comprehensive documentation
5. **🧪 Test**: Verify in playground environment

### Component Structure
```vue
<template>
  <!-- Component template with proper props binding -->
</template>

<script setup>
// Define props with defaults and validation
const props = defineProps({
  // Universal props
  theme: { type: String, default: 'dark' },
  roundness: { type: Number, default: 12 },
  primaryColor: { type: String, default: '#6366f1' },
  
  // Component-specific props
  text: { type: String, default: 'Click Me' },
  variant: { type: String, default: 'primary' }
})

// Define emits
const emit = defineEmits(['click', 'update:modelValue'])
</script>

<style scoped>
/* Component-specific styles */
</style>
```

## 🧩 Advanced Features

### Context-Aware Control System
The playground automatically generates appropriate controls based on component type:

```javascript
// Control configuration example
const buttonControls = {
  text: { type: 'text', default: 'Click Me' },
  variant: { type: 'select', options: ['primary', 'secondary', 'outline'] },
  disabled: { type: 'boolean', default: false },
  loading: { type: 'boolean', default: false }
}
```

### Live Preview Engine
- **🔄 Real-time Updates**: Changes reflect immediately
- **⚡ Vue 3 Integration**: Full composition API support
- **🛠️ Error Handling**: Graceful error recovery
- **🎨 Style Injection**: Dynamic CSS application

### Export System
Generate code in multiple formats:
- **Vue SFC**: Complete single-file component
- **HTML**: Vanilla HTML with inline styles  
- **CSS**: Extracted stylesheets
- **Tailwind**: Utility-first CSS classes

## 🗺️ Roadmap

### 🎯 Version 1.1.0 (Next Release)
- **🌐 Uiverse.io Integration**: Real component variants from Uiverse.io
- **⭐ Favorites System**: Save and organize preferred components  
- **🎨 Theme Persistence**: Remember user preferences across sessions
- **🔍 Advanced Search**: Filter by category, complexity, and features
- **📱 Mobile App**: Progressive Web App with offline support

### 🚀 Version 1.2.0 (Future)
- **🤝 Community Features**: Share custom components and configurations
- **🎯 Component Generator**: AI-powered component creation
- **📊 Analytics**: Usage statistics and popular components
- **🔌 Plugin System**: Extensible architecture for custom controls
- **🎨 Design Tokens**: Advanced theming with design system integration

### 🌟 Version 2.0.0 (Long-term)
- **🏢 Enterprise Features**: Team collaboration and component libraries
- **🔄 Framework Support**: React, Angular, and Svelte adapters
- **☁️ Cloud Sync**: Cross-device synchronization
- **🤖 AI Integration**: Smart component suggestions and optimization
- **📈 Advanced Analytics**: Performance monitoring and optimization

## 📈 Version History

### v1.0.6 (Current) - Playground Modernization
- ✅ Featured components showcase with interactive preview cards
- ✅ Context-aware control system with component-specific properties  
- ✅ External CSS architecture for better maintainability
- ✅ Enhanced live code editor with multi-tab interface
- ✅ Comprehensive documentation system with auto-generation
- ✅ Advanced export functionality (Vue, HTML, CSS, Tailwind)
- ✅ Responsive design optimization for all screen sizes
- ✅ Improved error handling and user feedback systems

### v1.0.5 - Core System Stabilization
- ✅ 28+ DUIMX components with unified `Dim*` naming
- ✅ Basic playground functionality with real-time preview
- ✅ Component prop controls and customization
- ✅ Search and filter system for component discovery
- ✅ Basic documentation and usage examples

### v1.0.0-1.0.4 - Foundation & Initial Development
- ✅ Project setup with Vue 3 + Vite + Tailwind CSS
- ✅ Basic component library structure
- ✅ Initial playground interface
- ✅ Core component implementations

## 🤝 Contributing

We welcome contributions! Here's how to get involved:

### 🐛 Bug Reports
- **🔍 Search Existing**: Check if the issue already exists
- **📝 Detailed Description**: Include steps to reproduce
- **🖼️ Screenshots**: Visual issues benefit from images
- **🌍 Environment**: Browser, OS, and version information

### 💡 Feature Requests  
- **🎯 Clear Use Case**: Explain the problem being solved
- **📋 Detailed Specification**: Mock-ups and requirements
- **🔗 Related Issues**: Link to similar requests
- **🏷️ Priority Level**: Indicate importance and urgency
- **🎓 Tutorial Components**: We're planning an `InteractiveTutorial` component for guided user onboarding - contributions welcome!

### 🔧 Code Contributions
1. **🍴 Fork**: Create your own copy of the repository
2. **🌿 Branch**: Create a feature branch (`git checkout -b feature/amazing-feature`)
3. **💻 Code**: Follow existing patterns and conventions
4. **🧪 Test**: Verify in the playground environment
5. **📝 Document**: Update README and component docs
6. **📤 Submit**: Create a pull request with detailed description

### 📋 Development Guidelines
- **🏷️ Naming**: Use `Dim*` prefix for all components
- **🎨 Styling**: Follow Tailwind CSS patterns and playground theme
- **♿ Accessibility**: Ensure ARIA compliance and keyboard navigation
- **📱 Responsive**: Test on multiple screen sizes
- **🧩 Props**: Include universal props support
- **📖 Documentation**: Add comprehensive docs and examples

## 📜 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **🌟 Vue.js**: Amazing reactive framework
- **🎨 Tailwind CSS**: Utility-first CSS framework  
- **🎭 Uiverse.io**: Inspiration for component design
- **🚀 Vite**: Lightning-fast build tool
- **👥 Community**: Contributors and users who make this possible

---

**DUIMX v1.0.6** - Built with ❤️ for the Vue.js community

🌐 [Website](/) | 🎮 [Playground](/playground) | 📖 [Docs](/docs) | 🐛 [Issues](issues) | 🤝 [Contributing](contributing)