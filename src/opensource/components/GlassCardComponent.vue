<template>
  <div 
    class="glass-card-component"
    :class="[
      `variant-${variant}`,
      { hoverable, 'show-border': showBorder }
    ]"
    :style="cardStyle"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Header Slot -->
    <div v-if="$slots.header" class="card-header">
      <slot name="header" />
    </div>

    <!-- Default Content -->
    <div class="card-content">
      <slot>
        <div class="default-content">
          <div class="card-icon">{{ variantData.icon }}</div>
          <h3 class="card-title">{{ variantData.title }}</h3>
          <p class="card-description">{{ variantData.description }}</p>
          
          <!-- Demo stats for certain variants -->
          <div v-if="variant === 'modern'" class="card-stats">
            <div class="stat-item">
              <span class="stat-value">99%</span>
              <span class="stat-label">Performance</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">4.9</span>
              <span class="stat-label">Rating</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">12K</span>
              <span class="stat-label">Users</span>
            </div>
          </div>
        </div>
      </slot>
    </div>

    <!-- Footer Slot -->
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer" />
    </div>

    <!-- Default actions for demo -->
    <div v-if="!$slots.footer && !$slots.default" class="card-actions">
      <button class="action-btn primary">Get Started</button>
      <button class="action-btn secondary">Learn More</button>
    </div>

    <!-- Glass overlay for enhanced effect -->
    <div class="glass-overlay" :style="overlayStyle"></div>
  </div>
</template>

<script>
export default {
  name: 'GlassCardComponent',
  props: {
    variant: {
      type: String,
      default: 'classic',
      validator: value => ['classic', 'modern', 'neon', 'frosted', 'gradient'].includes(value)
    },
    blurIntensity: {
      type: Number,
      default: 12
    },
    transparency: {
      type: Number,
      default: 0.3
    },
    borderRadius: {
      type: Number,
      default: 16
    },
    hoverable: {
      type: Boolean,
      default: true
    },
    showBorder: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isHovered: false
    }
  },
  computed: {
    variantData() {
      const variants = {
        classic: {
          title: 'Classic Glass',
          description: 'Clean and elegant glassmorphism design with subtle transparency and backdrop blur effects.',
          icon: '💎'
        },
        modern: {
          title: 'Modern Glass',
          description: 'Contemporary glass card with enhanced visual effects and interactive elements for modern interfaces.',
          icon: '🚀'
        },
        neon: {
          title: 'Neon Glass',
          description: 'Futuristic glass card with vibrant neon accents and glowing borders for sci-fi aesthetics.',
          icon: '⚡'
        },
        frosted: {
          title: 'Frosted Glass',
          description: 'Heavy frosted effect with increased blur for a softer, more ethereal appearance.',
          icon: '❄️'
        },
        gradient: {
          title: 'Gradient Glass',
          description: 'Dynamic gradient backgrounds combined with glass effects for colorful, vibrant designs.',
          icon: '🌈'
        }
      }
      
      return variants[this.variant] || variants.classic
    },
    
    cardStyle() {
      const baseStyle = {
        borderRadius: `${this.borderRadius}px`,
        backdropFilter: `blur(${this.blurIntensity}px)`,
        border: this.showBorder ? this.getBorderStyle() : 'none',
        transform: this.isHovered && this.hoverable ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: this.getBoxShadow()
      }
      
      return {
        ...baseStyle,
        ...this.getVariantStyle()
      }
    },
    
    overlayStyle() {
      return {
        opacity: this.isHovered && this.hoverable ? 1 : 0,
        background: this.getOverlayBackground()
      }
    }
  },
  
  methods: {
    getVariantStyle() {
      const styles = {
        classic: {
          background: `rgba(255, 255, 255, ${this.transparency})`
        },
        modern: {
          background: `linear-gradient(135deg, 
            rgba(99, 102, 241, ${this.transparency * 0.8}) 0%, 
            rgba(139, 92, 246, ${this.transparency * 0.6}) 100%)`
        },
        neon: {
          background: `rgba(0, 20, 40, ${this.transparency + 0.2})`,
          boxShadow: `0 0 30px rgba(0, 255, 255, ${this.transparency}), 
                      0 8px 32px rgba(0, 0, 0, 0.3)`
        },
        frosted: {
          background: `rgba(255, 255, 255, ${this.transparency * 0.6})`,
          backdropFilter: `blur(${this.blurIntensity * 1.5}px) saturate(180%)`
        },
        gradient: {
          background: `linear-gradient(135deg, 
            rgba(255, 0, 150, ${this.transparency * 0.7}) 0%, 
            rgba(0, 204, 255, ${this.transparency * 0.5}) 50%, 
            rgba(255, 204, 0, ${this.transparency * 0.6}) 100%)`
        }
      }
      
      return styles[this.variant] || styles.classic
    },
    
    getBorderStyle() {
      const borderStyles = {
        classic: '1px solid rgba(255, 255, 255, 0.3)',
        modern: '1px solid rgba(139, 92, 246, 0.4)',
        neon: '1px solid rgba(0, 255, 255, 0.6)',
        frosted: '1px solid rgba(255, 255, 255, 0.2)',
        gradient: '2px solid transparent'
      }
      
      return borderStyles[this.variant] || borderStyles.classic
    },
    
    getBoxShadow() {
      const shadows = {
        classic: this.isHovered && this.hoverable 
          ? '0 20px 40px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)'
          : '0 8px 25px rgba(0, 0, 0, 0.1)',
        modern: this.isHovered && this.hoverable
          ? '0 25px 50px rgba(139, 92, 246, 0.3), 0 0 0 1px rgba(139, 92, 246, 0.2)'
          : '0 10px 30px rgba(139, 92, 246, 0.2)',
        neon: `0 0 30px rgba(0, 255, 255, ${this.transparency}), 0 8px 32px rgba(0, 0, 0, 0.3)`,
        frosted: this.isHovered && this.hoverable
          ? '0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.2)'
          : '0 8px 25px rgba(0, 0, 0, 0.08)',
        gradient: this.isHovered && this.hoverable
          ? '0 25px 50px rgba(255, 0, 150, 0.2), 0 0 0 2px rgba(255, 204, 0, 0.3)'
          : '0 10px 30px rgba(255, 0, 150, 0.15)'
      }
      
      return shadows[this.variant] || shadows.classic
    },
    
    getOverlayBackground() {
      const overlays = {
        classic: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        modern: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(99, 102, 241, 0.05))',
        neon: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(0, 255, 255, 0.05))',
        frosted: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08))',
        gradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))'
      }
      
      return overlays[this.variant] || overlays.classic
    }
  }
}
</script>

<style scoped>
.glass-card-component {
  position: relative;
  padding: 2rem;
  max-width: 400px;
  min-height: 280px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.glass-card-component.hoverable {
  cursor: pointer;
}

.card-header {
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-footer {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.default-content {
  text-align: center;
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  color: inherit;
}

.card-description {
  font-size: 0.875rem;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
  opacity: 0.9;
}

.card-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-item {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.75rem;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.card-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.5rem;
  justify-content: center;
}

.action-btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.action-btn.primary {
  background: rgba(255, 255, 255, 0.9);
  color: #1f2937;
}

.action-btn.primary:hover {
  background: rgba(255, 255, 255, 1);
  transform: translateY(-1px);
}

.action-btn.secondary {
  background: rgba(255, 255, 255, 0.1);
  color: inherit;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.action-btn.secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px);
}

.glass-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  border-radius: inherit;
  transition: all 0.4s ease;
}

/* Variant-specific styles */
.variant-classic {
  color: #1f2937;
}

.variant-modern {
  color: #ffffff;
}

.variant-neon {
  color: #00ffff;
}

.variant-neon .card-title {
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}

.variant-neon .action-btn.primary {
  background: rgba(0, 255, 255, 0.2);
  color: #00ffff;
  border: 1px solid rgba(0, 255, 255, 0.5);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
}

.variant-neon .action-btn.primary:hover {
  background: rgba(0, 255, 255, 0.3);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
}

.variant-frosted {
  color: #374151;
}

.variant-gradient {
  color: #ffffff;
}

.variant-gradient .card-title {
  background: linear-gradient(135deg, #ff0096, #00ccff, #ffcc00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Responsive design */
@media (max-width: 640px) {
  .glass-card-component {
    max-width: 100%;
    padding: 1.5rem;
    min-height: 240px;
  }
  
  .card-actions {
    flex-direction: column;
  }
  
  .action-btn {
    width: 100%;
  }
}
</style>
