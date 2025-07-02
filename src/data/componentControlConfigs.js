// Only provide control configs for the four core components
const componentControlConfigs = {
  DimButton: {
    variant: {
      type: 'select',
      options: [
        'primary', 'secondary', 'outline', 'ghost', 'glass', 'solid', 'link',
        'danger', 'success', 'warning',
        'gradient', 'glassmorphic', 'neon', 'neumorphic', 'animated', 'hover-effects', 'ripple', 'glow', 'shadow', 'minimal', 'retro'
      ],
      default: 'primary',
    },
    size: {
      type: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'custom'],
      default: 'md',
    },
    fontSize: {
      type: 'number',
      min: 10,
      max: 32,
      step: 1,
      default: 14,
    },
    fontWeight: {
      type: 'select',
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
      default: 'medium',
    },
    buttonWidth: {
      type: 'number',
      min: 50,
      max: 500,
      step: 10,
      default: null,
      nullable: true,
    },
    buttonHeight: {
      type: 'number',
      min: 20,
      max: 100,
      step: 2,
      default: null,
      nullable: true,
    },
    disabled: { 
      type: 'boolean', 
      default: false 
    },
    loading: { 
      type: 'boolean', 
      default: false 
    },
    fullWidth: { 
      type: 'boolean', 
      default: false 
    },
    compact: { 
      type: 'boolean', 
      default: false 
    },
    icon: {
      type: 'text',
      default: '',
      placeholder: 'e.g., 🚀 or fas fa-rocket'
    },
    iconPosition: {
      type: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      default: 'left',
    },
    label: {
      type: 'text',
      default: 'Click Me',
      placeholder: 'Button text'
    },
    gradientFrom: {
      type: 'color',
      default: '#6366f1',
      placeholder: 'Start color for gradient'
    },
    gradientTo: {
      type: 'color',
      default: '#8b5cf6',
      placeholder: 'End color for gradient'
    },
    gradientDirection: {
      type: 'select',
      options: ['135deg', '90deg', '45deg', '0deg', 'to-r', 'to-l', 'to-t', 'to-b'],
      default: '135deg',
    },
  },
  DimCarousel: {
    effect: { type: 'select', options: ['slide', 'fade', 'zoom'], default: 'slide' },
    autoplay: { type: 'boolean', default: true },
  },
  DimModal: {
    animation: { type: 'select', options: ['fade', 'slide', 'zoom', 'bounce'], default: 'fade' },
    isOpen: { type: 'boolean', default: true },
  },
  DimAccordion: {
    expandMultiple: { type: 'boolean', default: false },
  },
};

export default componentControlConfigs;
