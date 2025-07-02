/**
 * Uiverse.io Integration Service
 * Handles fetching and integrating components from Uiverse.io
 */

class UiverseIntegrationService {
  constructor() {
    this.baseUrl = 'https://uiverse.io';
    this.cache = new Map();
    this.rateLimit = {
      requests: 0,
      lastReset: Date.now(),
      maxRequestsPerMinute: 30
    };
  }

  /**
   * Check rate limiting
   */
  checkRateLimit() {
    const now = Date.now();
    if (now - this.rateLimit.lastReset > 60000) {
      this.rateLimit.requests = 0;
      this.rateLimit.lastReset = now;
    }
    
    if (this.rateLimit.requests >= this.rateLimit.maxRequestsPerMinute) {
      throw new Error('Rate limit exceeded. Please wait before making more requests.');
    }
    
    this.rateLimit.requests++;
  }

  /**
   * Fetch component variants from Uiverse.io
   * @param {string} componentType - Type of component (button, card, input, etc.)
   * @param {number} limit - Maximum number of variants to fetch
   */
  async fetchComponentVariants(componentType, limit = 6) {
    this.checkRateLimit();
    
    const cacheKey = `${componentType}-${limit}`;
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    try {
      // Simulate API call (Uiverse.io doesn't have a public API yet)
      // In a real implementation, you would scrape or use their API
      const variants = await this.mockFetchVariants(componentType, limit);
      
      this.cache.set(cacheKey, variants);
      return variants;
    } catch (error) {
      console.error('Failed to fetch component variants:', error);
      return this.getFallbackVariants(componentType);
    }
  }

  /**
   * Mock implementation - generates realistic variants
   */
  async mockFetchVariants(componentType, limit) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    const variants = this.getComponentVariants(componentType);
    return variants.slice(0, limit);
  }

  /**
   * Get component variants based on type
   */
  getComponentVariants(componentType) {
    const variantDatabase = {
      button: [
        {
          id: 'uv-btn-001',
          name: 'Wise Mule Button (Winner)',
          author: 'whoisyourdeadie',
          likes: 1847,
          category: 'button',
          tags: ['gradient', 'green', 'soft', 'mastery-9'],
          htmlCode: `<button class="wise-mule-btn">
  <span class="btn-text">Get Started</span>
</button>`,
          cssCode: `.wise-mule-btn {
  background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%);
  color: #2d3748;
  border: none;
  padding: 16px 32px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 
    0 4px 15px rgba(132, 250, 176, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.wise-mule-btn:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 8px 25px rgba(132, 250, 176, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.wise-mule-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.wise-mule-btn:hover::before {
  left: 100%;
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/wise-mule-50.png',
          createdAt: '2024-06-15',
          framework: 'html-css'
        },
        {
          id: 'uv-btn-002',
          name: 'Tall Donkey Button (Winner)',
          author: 'marcelodolza',
          likes: 2136,
          category: 'button',
          tags: ['futuristic', 'neon', 'glow', 'mastery-8'],
          htmlCode: `<button class="tall-donkey-btn">
  <span class="btn-content">
    <span class="btn-icon">⚡</span>
    <span class="btn-text">ACTIVATE</span>
  </span>
</button>`,
          cssCode: `.tall-donkey-btn {
  background: linear-gradient(145deg, #1a1a2e, #16213e);
  color: #00f5ff;
  border: 2px solid #00f5ff;
  padding: 14px 28px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 
    0 0 20px rgba(0, 245, 255, 0.3),
    inset 0 0 20px rgba(0, 245, 255, 0.1);
}

.tall-donkey-btn:hover {
  background: linear-gradient(145deg, #0f1419, #1a1a2e);
  box-shadow: 
    0 0 30px rgba(0, 245, 255, 0.6),
    inset 0 0 30px rgba(0, 245, 255, 0.2);
  transform: scale(1.05);
}

.btn-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-icon {
  font-size: 16px;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.tall-donkey-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 245, 255, 0.3), transparent);
  transition: left 0.6s;
}

.tall-donkey-btn:hover::before {
  left: 100%;
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/tall-donkey-80.png',
          createdAt: '2024-05-18',
          framework: 'html-css'
        },
        {
          id: 'uv-btn-003',
          name: 'Morphing Hover Button',
          author: 'icochran10',
          likes: 892,
          category: 'button',
          tags: ['morphing', 'transform', 'creative'],
          htmlCode: `<button class="morphing-btn">
  <span class="btn-text">Hover Me</span>
  <div class="morph-shape"></div>
</button>`,
          cssCode: `.morphing-btn {
  background: #6366f1;
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.morphing-btn:hover {
  border-radius: 8px;
  background: #8b5cf6;
  transform: scale(1.1);
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.4);
}

.morph-shape {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: all 0.4s ease;
}

.morphing-btn:hover .morph-shape {
  transform: translate(-50%, -50%) scale(3);
  border-radius: 0;
}

.btn-text {
  position: relative;
  z-index: 2;
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/morphing-btn.png',
          createdAt: '2024-05-20',
          framework: 'html-css'
        },
        {
          id: 'uv-btn-004',
          name: 'Liquid Fill Button',
          author: 'dexter-st',
          likes: 1456,
          category: 'button',
          tags: ['liquid', 'fill', 'animated'],
          htmlCode: `<button class="liquid-btn">
  <span class="btn-text">Fill Me</span>
  <div class="liquid"></div>
</button>`,
          cssCode: `.liquid-btn {
  background: transparent;
  color: #6366f1;
  border: 2px solid #6366f1;
  padding: 14px 28px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
}

.liquid-btn:hover {
  color: white;
}

.liquid {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0%;
  background: linear-gradient(45deg, #6366f1, #8b5cf6);
  transition: height 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 1;
}

.liquid-btn:hover .liquid {
  height: 100%;
}

.btn-text {
  position: relative;
  z-index: 2;
}

.liquid::before {
  content: '';
  position: absolute;
  top: -10px;
  left: 0;
  width: 100%;
  height: 20px;
  background: inherit;
  border-radius: 50%;
  animation: wave 1.5s infinite ease-in-out;
}

@keyframes wave {
  0%, 100% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/liquid-btn.png',
          createdAt: '2024-05-22',
          framework: 'html-css'
        },
        {
          id: 'uv-btn-005',
          name: 'Particle Burst Button',
          author: 'particle-master',
          likes: 1892,
          category: 'button',
          tags: ['particles', 'burst', 'interactive'],
          htmlCode: `<button class="particle-btn">
  <span class="btn-text">Explode</span>
  <div class="particles">
    <span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span>
  </div>
</button>`,
          cssCode: `.particle-btn {
  background: linear-gradient(135deg, #ff6b6b, #ee5a24);
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.particle-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
}

.particles {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.particles span {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}

.particle-btn:active .particles span {
  animation: burst 0.6s ease-out;
}

.particles span:nth-child(1) { animation-delay: 0s; }
.particles span:nth-child(2) { animation-delay: 0.1s; }
.particles span:nth-child(3) { animation-delay: 0.2s; }
.particles span:nth-child(4) { animation-delay: 0.3s; }
.particles span:nth-child(5) { animation-delay: 0.4s; }
.particles span:nth-child(6) { animation-delay: 0.5s; }
.particles span:nth-child(7) { animation-delay: 0.6s; }
.particles span:nth-child(8) { animation-delay: 0.7s; }

@keyframes burst {
  0% {
    opacity: 1;
    transform: scale(1) translate(0, 0);
  }
  100% {
    opacity: 0;
    transform: scale(0) translate(var(--x, 50px), var(--y, -50px));
  }
}

.particles span:nth-child(1) { --x: 50px; --y: -50px; }
.particles span:nth-child(2) { --x: -50px; --y: -50px; }
.particles span:nth-child(3) { --x: 50px; --y: 50px; }
.particles span:nth-child(4) { --x: -50px; --y: 50px; }
.particles span:nth-child(5) { --x: 70px; --y: 0px; }
.particles span:nth-child(6) { --x: -70px; --y: 0px; }
.particles span:nth-child(7) { --x: 0px; --y: -70px; }
.particles span:nth-child(8) { --x: 0px; --y: 70px; }`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/particle-btn.png',
          createdAt: '2024-05-28',
          framework: 'html-css'
        },
        {
          id: 'uv-btn-006',
          name: 'Neumorphic Soft Button',
          author: 'neuro-ui',
          likes: 723,
          category: 'button',
          tags: ['neumorphism', 'soft', 'minimal'],
          htmlCode: `<button class="neuro-btn">
  <span>Soft Touch</span>
</button>`,
          cssCode: `.neuro-btn {
  background: #e0e5ec;
  color: #4a5568;
  border: none;
  padding: 16px 32px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 
    9px 9px 16px #a3b1c6,
    -9px -9px 16px #ffffff;
}

.neuro-btn:hover {
  box-shadow: 
    6px 6px 12px #a3b1c6,
    -6px -6px 12px #ffffff;
}

.neuro-btn:active {
  box-shadow: 
    inset 4px 4px 8px #a3b1c6,
    inset -4px -4px 8px #ffffff;
}
}

.neon-btn:hover {
  background: rgba(0, 255, 255, 0.1);
  box-shadow: 
    0 0 30px rgba(0, 255, 255, 0.6),
    inset 0 0 30px rgba(0, 255, 255, 0.2);
  transform: scale(1.05);
}

.neon-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.3), transparent);
  transition: all 0.5s;
}

.neon-btn:hover::before {
  left: 100%;
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/btn-002.png',
          createdAt: '2024-01-20',
          framework: 'html-css'
        },
        {
          id: 'uv-btn-003',
          name: 'Glass Morphism Button',
          author: 'glass-designer',
          likes: 1456,
          category: 'button',
          tags: ['glassmorphism', 'modern', 'transparent'],
          htmlCode: `<button class="glass-btn">
  <span>Glass Effect</span>
</button>`,
          cssCode: `.glass-btn {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 16px 32px;
  border-radius: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.glass-btn:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.glass-btn:active {
  transform: translateY(0);
  box-shadow: 
    0 6px 24px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/btn-003.png',
          createdAt: '2024-02-01',
          framework: 'html-css'
        },
        {
          id: 'uv-btn-004',
          name: 'Neumorphic Soft Button',
          author: 'neuro-ui',
          likes: 723,
          category: 'button',
          tags: ['neumorphism', 'soft', 'minimal'],
          htmlCode: `<button class="neuro-btn">
  <span>Soft Touch</span>
</button>`,
          cssCode: `.neuro-btn {
  background: #e2e8f0;
  color: #4a5568;
  border: none;
  padding: 16px 28px;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 
    8px 8px 16px #bebebe,
    -8px -8px 16px #ffffff;
}

.neuro-btn:hover {
  box-shadow: 
    6px 6px 12px #bebebe,
    -6px -6px 12px #ffffff;
  transform: translateY(-1px);
}

.neuro-btn:active {
  box-shadow: 
    inset 4px 4px 8px #bebebe,
    inset -4px -4px 8px #ffffff;
  transform: translateY(0);
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/btn-004.png',
          createdAt: '2024-01-28',
          framework: 'html-css'
        }
      ],
      card: [
        {
          id: 'uv-card-001',
          name: 'Floating Glass Card',
          author: 'card-master',
          likes: 1891,
          category: 'card',
          tags: ['glass', 'floating', 'modern'],
          htmlCode: `<div class="glass-card">
  <h3>Glass Card</h3>
  <p>Beautiful glassmorphism effect with floating animation</p>
</div>`,
          cssCode: `.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 24px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.glass-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.15);
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/card-001.png',
          createdAt: '2024-02-05',
          framework: 'html-css'
        },
        {
          id: 'uv-card-002',
          name: 'Gradient Hover Card',
          author: 'gradient-guru',
          likes: 1234,
          category: 'card',
          tags: ['gradient', 'hover', 'colorful'],
          htmlCode: `<div class="gradient-card">
  <div class="card-content">
    <h3>Gradient Magic</h3>
    <p>Stunning gradient animations on hover</p>
  </div>
</div>`,
          cssCode: `.gradient-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 1px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.gradient-card:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  transform: scale(1.02) rotate(1deg);
}

.card-content {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  padding: 20px;
  color: #333;
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/card-002.png',
          createdAt: '2024-02-10',
          framework: 'html-css'
        },
        {
          id: 'uv-card-003',
          name: 'Neumorphic Profile Card',
          author: 'neuro-cards',
          likes: 987,
          category: 'card',
          tags: ['neumorphism', 'profile', 'soft'],
          htmlCode: `<div class="neuro-card">
  <div class="avatar"></div>
  <h3>John Doe</h3>
  <p>UI/UX Designer</p>
</div>`,
          cssCode: `.neuro-card {
  background: #e0e5ec;
  border-radius: 24px;
  padding: 32px;
  text-align: center;
  color: #666;
  box-shadow: 
    12px 12px 24px #bebebe,
    -12px -12px 24px #ffffff;
  transition: all 0.3s ease;
}

.neuro-card:hover {
  box-shadow: 
    8px 8px 16px #bebebe,
    -8px -8px 16px #ffffff;
  transform: translateY(-2px);
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  margin: 0 auto 16px;
  box-shadow: 
    inset 4px 4px 8px #bebebe,
    inset -4px -4px 8px #ffffff;
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/card-003.png',
          createdAt: '2024-02-12',
          framework: 'html-css'
        },
        {
          id: 'uv-card-004',
          name: 'Interactive Hover Card',
          author: 'Yaya12085',
          likes: 1876,
          category: 'card',
          tags: ['interactive', 'hover', 'transform'],
          htmlCode: `<div class="interactive-card">
  <div class="card-image">
    <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=200&fit=crop" alt="Card Image" />
    <div class="card-overlay">
      <button class="card-action">View Details</button>
    </div>
  </div>
  <div class="card-content">
    <h3 class="card-title">Interactive Design</h3>
    <p class="card-description">Hover to reveal hidden actions and beautiful animations.</p>
    <div class="card-meta">
      <span class="card-tag">UI/UX</span>
      <span class="card-date">Dec 15, 2024</span>
    </div>
  </div>
</div>`,
          cssCode: `.interactive-card {
  width: 300px;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  position: relative;
}

.interactive-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
}

.card-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.interactive-card:hover .card-image img {
  transform: scale(1.1);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.interactive-card:hover .card-overlay {
  opacity: 1;
}

.card-action {
  background: white;
  color: #333;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 600;
  transform: translateY(20px);
  transition: transform 0.3s ease;
  cursor: pointer;
}

.interactive-card:hover .card-action {
  transform: translateY(0);
}

.card-content {
  padding: 20px;
}

.card-title {
  font-size: 18px;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 8px 0;
}

.card-description {
  color: #6b7280;
  font-size: 14px;
  line-height: 1.5;
  margin: 0 0 16px 0;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-tag {
  background: #eff6ff;
  color: #2563eb;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.card-date {
  color: #9ca3af;
  font-size: 12px;
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/card-interactive.png',
          createdAt: '2024-06-10',
          framework: 'html-css'
        },
        {
          id: 'uv-card-005',
          name: 'Pricing Card with Glow',
          author: 'Praashoo7',
          likes: 1234,
          category: 'card',
          tags: ['pricing', 'glow', 'premium'],
          htmlCode: `<div class="pricing-card">
  <div class="pricing-header">
    <div class="pricing-icon">💎</div>
    <h3 class="pricing-title">Premium</h3>
    <div class="pricing-badge">Most Popular</div>
  </div>
  <div class="pricing-amount">
    <span class="currency">$</span>
    <span class="price">29</span>
    <span class="period">/month</span>
  </div>
  <ul class="pricing-features">
    <li class="feature">✓ Unlimited Projects</li>
    <li class="feature">✓ Priority Support</li>
    <li class="feature">✓ Advanced Analytics</li>
    <li class="feature">✓ Custom Integrations</li>
  </ul>
  <button class="pricing-button">Get Started</button>
</div>`,
          cssCode: `.pricing-card {
  width: 280px;
  background: linear-gradient(145deg, #1a1a2e, #16213e);
  border: 1px solid #6366f1;
  border-radius: 20px;
  padding: 30px 25px;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 
    0 10px 30px rgba(99, 102, 241, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.pricing-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(99, 102, 241, 0.1), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.pricing-card:hover::before {
  transform: translateX(100%);
}

.pricing-card:hover {
  transform: translateY(-10px);
  box-shadow: 
    0 20px 50px rgba(99, 102, 241, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.pricing-header {
  margin-bottom: 20px;
  position: relative;
}

.pricing-icon {
  font-size: 40px;
  margin-bottom: 10px;
}

.pricing-title {
  color: white;
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 10px 0;
}

.pricing-badge {
  background: linear-gradient(45deg, #6366f1, #8b5cf6);
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  display: inline-block;
}

.pricing-amount {
  margin-bottom: 30px;
  color: white;
}

.currency {
  font-size: 18px;
  vertical-align: top;
  margin-top: 8px;
}

.price {
  font-size: 48px;
  font-weight: 800;
  color: #6366f1;
}

.period {
  font-size: 16px;
  color: #9ca3af;
}

.pricing-features {
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
}

.feature {
  color: #d1d5db;
  font-size: 14px;
  margin: 12px 0;
  text-align: left;
}

.pricing-button {
  width: 100%;
  background: linear-gradient(45deg, #6366f1, #8b5cf6);
  color: white;
  border: none;
  padding: 15px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pricing-button:hover {
  background: linear-gradient(45deg, #4f46e5, #7c3aed);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/card-pricing.png',
          createdAt: '2024-05-08',
          framework: 'html-css'
        },
        {
          id: 'uv-card-006',
          name: 'Social Media Card',
          author: 'alexruix',
          likes: 987,
          category: 'card',
          tags: ['social', 'profile', 'stats'],
          htmlCode: `<div class="social-card">
  <div class="social-header">
    <div class="social-avatar">
      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" alt="Profile" />
      <div class="online-status"></div>
    </div>
    <div class="social-info">
      <h4 class="social-name">Alex Johnson</h4>
      <p class="social-handle">@alexjohnson</p>
    </div>
    <button class="follow-btn">Follow</button>
  </div>
  <div class="social-stats">
    <div class="stat">
      <span class="stat-number">1.2K</span>
      <span class="stat-label">Posts</span>
    </div>
    <div class="stat">
      <span class="stat-number">15.8K</span>
      <span class="stat-label">Followers</span>
    </div>
    <div class="stat">
      <span class="stat-number">892</span>
      <span class="stat-label">Following</span>
    </div>
  </div>
  <div class="social-bio">
    <p>UI/UX Designer passionate about creating beautiful and functional digital experiences. Currently working at a creative agency.</p>
  </div>
</div>`,
          cssCode: `.social-card {
  width: 320px;
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.1),
    0 1px 2px rgba(0, 0, 0, 0.06);
  border: 1px solid #f3f4f6;
  transition: all 0.3s ease;
}

.social-card:hover {
  box-shadow: 
    0 10px 25px rgba(0, 0, 0, 0.1),
    0 4px 10px rgba(0, 0, 0, 0.05);
  transform: translateY(-2px);
}

.social-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.social-avatar {
  position: relative;
  margin-right: 16px;
}

.social-avatar img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}

.online-status {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 12px;
  height: 12px;
  background: #10b981;
  border: 2px solid white;
  border-radius: 50%;
}

.social-info {
  flex: 1;
}

.social-name {
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 4px 0;
}

.social-handle {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}

.follow-btn {
  background: #6366f1;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;
}

.follow-btn:hover {
  background: #4f46e5;
}

.social-stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 16px 0;
  border-top: 1px solid #f3f4f6;
  border-bottom: 1px solid #f3f4f6;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 18px;
  font-weight: 700;
  color: #1f2937;
}

.stat-label {
  font-size: 12px;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.social-bio p {
  font-size: 14px;
  color: #4b5563;
  line-height: 1.5;
  margin: 0;
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/card-social.png',
          createdAt: '2024-04-15',
          framework: 'html-css'
        }
      ],
      tooltip: [
        {
          id: 'uv-tooltip-001',
          name: 'Glassmorphism Tooltip',
          author: 'tooltip-ninja',
          likes: 654,
          category: 'tooltip',
          tags: ['glass', 'modern', 'blur'],
          htmlCode: `<div class="tooltip-container">
  <button class="tooltip-trigger">Hover me</button>
  <div class="glass-tooltip">
    <span>Glass tooltip with blur effect</span>
    <div class="tooltip-arrow"></div>
  </div>
</div>`,
          cssCode: `.tooltip-container {
  position: relative;
  display: inline-block;
}

.glass-tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 8px 12px;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  transition: all 0.3s ease;
  pointer-events: none;
}

.tooltip-container:hover .glass-tooltip {
  opacity: 1;
  transform: translateX(-50%) translateY(-4px);
}

.tooltip-arrow {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: rgba(255, 255, 255, 0.1);
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/tooltip-001.png',
          createdAt: '2024-02-08',
          framework: 'html-css'
        },
        {
          id: 'uv-tooltip-002',
          name: 'Neon Cyber Tooltip',
          author: 'cyber-ui',
          likes: 432,
          category: 'tooltip',
          tags: ['neon', 'cyberpunk', 'glow'],
          htmlCode: `<div class="tooltip-container">
  <button class="cyber-trigger">SCAN</button>
  <div class="neon-tooltip">
    <span>Cyber tooltip activated</span>
  </div>
</div>`,
          cssCode: `.neon-tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid #00ffff;
  color: #00ffff;
  padding: 8px 12px;
  border-radius: 4px;
  white-space: nowrap;
  opacity: 0;
  transition: all 0.3s ease;
  pointer-events: none;
  text-shadow: 0 0 8px #00ffff;
  box-shadow: 
    0 0 16px rgba(0, 255, 255, 0.3),
    inset 0 0 16px rgba(0, 255, 255, 0.1);
}

.tooltip-container:hover .neon-tooltip {
  opacity: 1;
  transform: translateX(-50%) translateY(-4px);
  box-shadow: 
    0 0 24px rgba(0, 255, 255, 0.5),
    inset 0 0 24px rgba(0, 255, 255, 0.2);
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/tooltip-002.png',
          createdAt: '2024-02-15',
          framework: 'html-css'
        }
      ],
      input: [
        {
          id: 'uv-input-001',
          name: 'Floating Label Input',
          author: 'form-master',
          likes: 1567,
          category: 'input',
          tags: ['floating', 'modern', 'animated'],
          htmlCode: `<div class="floating-input">
  <input type="text" id="email" required>
  <label for="email">Email Address</label>
</div>`,
          cssCode: `.floating-input {
  position: relative;
  margin: 16px 0;
}

.floating-input input {
  width: 100%;
  padding: 16px 12px 8px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  background: transparent;
  font-size: 16px;
  transition: all 0.3s ease;
}

.floating-input input:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.floating-input label {
  position: absolute;
  left: 12px;
  top: 16px;
  font-size: 16px;
  color: #64748b;
  transition: all 0.3s ease;
  pointer-events: none;
}

.floating-input input:focus + label,
.floating-input input:valid + label {
  top: 4px;
  font-size: 12px;
  color: #6366f1;
  font-weight: 600;
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/input-001.png',
          createdAt: '2024-02-18',
          framework: 'html-css'
        },
        {
          id: 'uv-input-002',
          name: 'Glassmorphic Search',
          author: 'search-ui',
          likes: 892,
          category: 'input',
          tags: ['glass', 'search', 'icon'],
          htmlCode: `<div class="glass-search">
  <input type="text" placeholder="Search...">
  <div class="search-icon">🔍</div>
</div>`,
          cssCode: `.glass-search {
  position: relative;
  display: inline-block;
}

.glass-search input {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 12px 16px 12px 44px;
  border-radius: 50px;
  font-size: 14px;
  width: 250px;
  transition: all 0.3s ease;
}

.glass-search input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.glass-search input:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
  width: 300px;
}

.search-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.7);
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/input-002.png',
          createdAt: '2024-02-20',
          framework: 'html-css'
        },
        {
          id: 'uv-input-003',
          name: 'AI Command Input',
          author: 'ai-designer',
          likes: 1567,
          category: 'input',
          tags: ['ai', 'command', 'futuristic'],
          htmlCode: `<div class="ai-input-container">
  <div class="ai-input-wrapper">
    <div class="ai-indicator">
      <div class="ai-pulse"></div>
      <span class="ai-icon">🤖</span>
    </div>
    <input type="text" class="ai-input" placeholder="Ask AI anything..." />
    <button class="ai-send">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M22 2L11 13" stroke="currentColor" stroke-width="2"/>
        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" stroke-width="2"/>
      </svg>
    </button>
  </div>
  <div class="ai-suggestions">
    <span class="suggestion">Generate a React component</span>
    <span class="suggestion">Explain this code</span>
    <span class="suggestion">Optimize performance</span>
  </div>
</div>`,
          cssCode: `.ai-input-container {
  width: 100%;
  max-width: 600px;
  margin: 20px 0;
}

.ai-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  background: linear-gradient(145deg, #1a1a2e, #16213e);
  border: 2px solid transparent;
  background-clip: padding-box;
  border-radius: 16px;
  padding: 4px;
  transition: all 0.3s ease;
}

.ai-input-wrapper::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #6366f1, #8b5cf6, #ec4899);
  background-size: 300% 300%;
  border-radius: 16px;
  z-index: -1;
  animation: ai-border-flow 3s ease-in-out infinite;
}

.ai-input-wrapper:focus-within::before {
  animation-duration: 1s;
}

.ai-indicator {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  position: relative;
}

.ai-pulse {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  top: 16px;
  right: 8px;
  animation: ai-pulse-animation 2s infinite;
}

.ai-icon {
  font-size: 20px;
  margin-right: 8px;
}

.ai-input {
  flex: 1;
  background: transparent;
  border: none;
  color: white;
  font-size: 16px;
  padding: 16px 0;
  outline: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.ai-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.ai-send {
  background: linear-gradient(45deg, #6366f1, #8b5cf6);
  border: none;
  color: white;
  padding: 12px;
  border-radius: 12px;
  margin: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ai-send:hover {
  background: linear-gradient(45deg, #4f46e5, #7c3aed);
  transform: scale(1.05);
}

.ai-suggestions {
  display: flex;
  gap: 8px;
  margin-top: 12px;
  flex-wrap: wrap;
}

.suggestion {
  background: rgba(99, 102, 241, 0.1);
  color: #a5b4fc;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  border: 1px solid rgba(99, 102, 241, 0.3);
  cursor: pointer;
  transition: all 0.2s ease;
}

.suggestion:hover {
  background: rgba(99, 102, 241, 0.2);
  color: #c7d2fe;
  transform: translateY(-1px);
}

@keyframes ai-border-flow {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes ai-pulse-animation {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.3; transform: scale(1.2); }
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/input-ai.png',
          createdAt: '2024-06-15',
          framework: 'html-css'
        },
        {
          id: 'uv-input-004',
          name: 'Neumorphic Search Input',
          author: 'neuro-inputs',
          likes: 1034,
          category: 'input',
          tags: ['neumorphism', 'search', 'soft'],
          htmlCode: `<div class="neuro-search-container">
  <div class="neuro-search-wrapper">
    <div class="neuro-search-icon">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="8" stroke="#9ca3af" stroke-width="2"/>
        <path d="m21 21-4.35-4.35" stroke="#9ca3af" stroke-width="2"/>
      </svg>
    </div>
    <input type="text" class="neuro-search-input" placeholder="Search components..." />
    <button class="neuro-clear">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M18 6L6 18M6 6l12 12" stroke="#9ca3af" stroke-width="2"/>
      </svg>
    </button>
  </div>
</div>`,
          cssCode: `.neuro-search-container {
  width: 100%;
  max-width: 400px;
  margin: 20px 0;
}

.neuro-search-wrapper {
  display: flex;
  align-items: center;
  background: #e0e0e0;
  border-radius: 50px;
  padding: 4px 8px 4px 4px;
  box-shadow: 
    20px 20px 40px #bebebe,
    -20px -20px 40px #ffffff;
  transition: all 0.3s ease;
}

.neuro-search-wrapper:focus-within {
  box-shadow: 
    inset 10px 10px 20px #bebebe,
    inset -10px -10px 20px #ffffff;
}

.neuro-search-icon {
  background: #e0e0e0;
  border-radius: 50%;
  padding: 12px;
  margin-right: 8px;
  box-shadow: 
    8px 8px 16px #bebebe,
    -8px -8px 16px #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.neuro-search-input {
  flex: 1;
  background: transparent;
  border: none;
  font-size: 16px;
  color: #374151;
  outline: none;
  padding: 16px 8px;
}

.neuro-search-input::placeholder {
  color: #9ca3af;
}

.neuro-clear {
  background: #e0e0e0;
  border: none;
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
  box-shadow: 
    4px 4px 8px #bebebe,
    -4px -4px 8px #ffffff;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: scale(0.8);
}

.neuro-search-wrapper:focus-within .neuro-clear {
  opacity: 1;
  transform: scale(1);
}

.neuro-clear:hover {
  box-shadow: 
    inset 4px 4px 8px #bebebe,
    inset -4px -4px 8px #ffffff;
}

.neuro-clear:active {
  transform: scale(0.95);
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/input-neuro.png',
          createdAt: '2024-03-25',
          framework: 'html-css'
        },
        {
          id: 'uv-input-005',
          name: 'Animated Label Input',
          author: 'form-master',
          likes: 876,
          category: 'input',
          tags: ['animated', 'label', 'floating'],
          htmlCode: `<div class="animated-input-container">
  <div class="animated-input-wrapper">
    <input type="text" class="animated-input" id="animatedInput" required />
    <label for="animatedInput" class="animated-label">Enter your email</label>
    <div class="animated-underline"></div>
    <div class="animated-highlight"></div>
  </div>
</div>`,
          cssCode: `.animated-input-container {
  width: 100%;
  max-width: 320px;
  margin: 20px 0;
}

.animated-input-wrapper {
  position: relative;
  margin: 20px 0;
}

.animated-input {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid #e5e7eb;
  font-size: 16px;
  padding: 12px 0 8px 0;
  color: #1f2937;
  outline: none;
  transition: border-color 0.3s ease;
}

.animated-label {
  position: absolute;
  left: 0;
  top: 12px;
  color: #9ca3af;
  font-size: 16px;
  pointer-events: none;
  transition: all 0.3s ease;
  transform-origin: left;
}

.animated-input:focus + .animated-label,
.animated-input:valid + .animated-label {
  transform: translateY(-24px) scale(0.8);
  color: #6366f1;
}

.animated-underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #e5e7eb;
}

.animated-highlight {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.animated-input:focus ~ .animated-highlight {
  width: 100%;
}

.animated-input:focus {
  border-color: transparent;
}

/* Validation styles */
.animated-input:valid {
  border-color: #10b981;
}

.animated-input:valid + .animated-label {
  color: #10b981;
}

.animated-input:valid ~ .animated-highlight {
  background: #10b981;
  width: 100%;
}

/* Error state */
.animated-input:invalid:not(:placeholder-shown) {
  border-color: #ef4444;
}

.animated-input:invalid:not(:placeholder-shown) + .animated-label {
  color: #ef4444;
}

.animated-input:invalid:not(:placeholder-shown) ~ .animated-highlight {
  background: #ef4444;
  width: 100%;
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/input-animated.png',
          createdAt: '2024-02-14',
          framework: 'html-css'
        }
      ],
      loader: [
        {
          id: 'uv-loader-001',
          name: 'Morphing Dots',
          author: 'loader-lord',
          likes: 2145,
          category: 'loader',
          tags: ['dots', 'morphing', 'smooth'],
          htmlCode: `<div class="morphing-loader">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>`,
          cssCode: `.morphing-loader {
  display: flex;
  gap: 8px;
  align-items: center;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #6366f1;
  animation: morphing 1.4s ease-in-out infinite both;
}

.dot:nth-child(1) { animation-delay: -0.32s; }
.dot:nth-child(2) { animation-delay: -0.16s; }

@keyframes morphing {
  0%, 80%, 100% {
    transform: scale(0);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/loader-001.png',
          createdAt: '2024-02-22',
          framework: 'html-css'
        },
        {
          id: 'uv-loader-002',
          name: 'Quantum Spinner',
          author: 'quantum-dev',
          likes: 1876,
          category: 'loader',
          tags: ['spinner', 'quantum', 'glow'],
          htmlCode: `<div class="quantum-spinner">
  <div class="orbit"></div>
  <div class="orbit"></div>
  <div class="orbit"></div>
  <div class="core"></div>
</div>`,
          cssCode: `.quantum-spinner {
  position: relative;
  width: 60px;
  height: 60px;
  margin: 20px;
}

.orbit {
  position: absolute;
  border: 2px solid transparent;
  border-radius: 50%;
  animation: quantum-spin 2s linear infinite;
}

.orbit:nth-child(1) {
  width: 60px;
  height: 60px;
  border-top-color: #6366f1;
  animation-duration: 1.5s;
}

.orbit:nth-child(2) {
  width: 45px;
  height: 45px;
  top: 7.5px;
  left: 7.5px;
  border-right-color: #8b5cf6;
  animation-duration: 2s;
  animation-direction: reverse;
}

.orbit:nth-child(3) {
  width: 30px;
  height: 30px;
  top: 15px;
  left: 15px;
  border-bottom-color: #ec4899;
  animation-duration: 1s;
}

.core {
  position: absolute;
  width: 16px;
  height: 16px;
  top: 22px;
  left: 22px;
  background: radial-gradient(circle, #6366f1, #8b5cf6);
  border-radius: 50%;
  animation: quantum-pulse 2s ease-in-out infinite;
}

@keyframes quantum-spin {
  to { transform: rotate(360deg); }
}

@keyframes quantum-pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.7; }
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/loader-002.png',
          createdAt: '2024-02-25',
          framework: 'html-css'
        }
      ],
      modal: [
        {
          id: 'uv-modal-001',
          name: 'Glassmorphic Modal',
          author: 'modal-master',
          likes: 1456,
          category: 'modal',
          tags: ['glass', 'blur', 'modern'],
          htmlCode: `<div class="glass-modal-overlay">
  <div class="glass-modal">
    <div class="glass-modal-header">
      <h3 class="modal-title">Confirm Action</h3>
      <button class="modal-close">&times;</button>
    </div>
    <div class="glass-modal-body">
      <p>Are you sure you want to proceed with this action? This cannot be undone.</p>
    </div>
    <div class="glass-modal-footer">
      <button class="modal-btn modal-btn-cancel">Cancel</button>
      <button class="modal-btn modal-btn-confirm">Confirm</button>
    </div>
  </div>
</div>`,
          cssCode: `.glass-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: modal-fade-in 0.3s ease;
}

.glass-modal {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 0;
  max-width: 500px;
  width: 90%;
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  animation: modal-slide-up 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  overflow: hidden;
}

.glass-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 24px 0 24px;
}

.modal-title {
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.modal-close {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.glass-modal-body {
  padding: 20px 24px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
}

.glass-modal-footer {
  display: flex;
  gap: 12px;
  padding: 0 24px 24px 24px;
  justify-content: flex-end;
}

.modal-btn {
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.modal-btn-cancel {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.modal-btn-cancel:hover {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.modal-btn-confirm {
  background: linear-gradient(45deg, #6366f1, #8b5cf6);
  color: white;
}

.modal-btn-confirm:hover {
  background: linear-gradient(45deg, #4f46e5, #7c3aed);
  transform: translateY(-1px);
}

@keyframes modal-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes modal-slide-up {
  from { 
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.9) translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translate(-50%, -50%) scale(1) translateY(0);
  }
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/modal-glass.png',
          createdAt: '2024-06-12',
          framework: 'html-css'
        },
        {
          id: 'uv-modal-002',
          name: 'Cyberpunk Modal',
          author: 'cyber-ui',
          likes: 892,
          category: 'modal',
          tags: ['cyberpunk', 'neon', 'futuristic'],
          htmlCode: `<div class="cyber-modal-overlay">
  <div class="cyber-modal">
    <div class="cyber-grid"></div>
    <div class="cyber-modal-header">
      <div class="cyber-title-wrapper">
        <span class="cyber-icon">⚡</span>
        <h3 class="cyber-title">SYSTEM ACCESS</h3>
      </div>
      <button class="cyber-close">✕</button>
    </div>
    <div class="cyber-modal-body">
      <div class="cyber-status">
        <span class="status-indicator"></span>
        <span>CONNECTION ESTABLISHED</span>
      </div>
      <p class="cyber-message">Access granted to secure terminal. Proceed with authentication protocol.</p>
      <div class="cyber-progress">
        <div class="cyber-progress-bar"></div>
      </div>
    </div>
    <div class="cyber-modal-footer">
      <button class="cyber-btn cyber-btn-abort">ABORT</button>
      <button class="cyber-btn cyber-btn-proceed">PROCEED</button>
    </div>
  </div>
</div>`,
          cssCode: `.cyber-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 20, 40, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: cyber-glitch 0.1s ease-in-out 3;
}

.cyber-modal {
  background: linear-gradient(145deg, #0a0a0a, #1a1a2e);
  border: 2px solid #00ff88;
  border-radius: 0;
  max-width: 480px;
  width: 90%;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 0 50px rgba(0, 255, 136, 0.3),
    inset 0 0 50px rgba(0, 255, 136, 0.1);
  animation: cyber-appear 0.5s ease;
}

.cyber-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  z-index: 1;
}

.cyber-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #00ff88;
  position: relative;
  z-index: 2;
}

.cyber-title-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
}

.cyber-icon {
  color: #00ff88;
  font-size: 20px;
  animation: cyber-pulse 2s infinite;
}

.cyber-title {
  color: #00ff88;
  font-family: 'Courier New', monospace;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 2px;
  margin: 0;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
}

.cyber-close {
  background: none;
  border: 1px solid #00ff88;
  color: #00ff88;
  padding: 8px 12px;
  cursor: pointer;
  font-family: 'Courier New', monospace;
  transition: all 0.2s ease;
}

.cyber-close:hover {
  background: #00ff88;
  color: #000;
  box-shadow: 0 0 15px rgba(0, 255, 136, 0.5);
}

.cyber-modal-body {
  padding: 20px;
  position: relative;
  z-index: 2;
}

.cyber-status {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  color: #00ff88;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  letter-spacing: 1px;
}

.status-indicator {
  width: 8px;
  height: 8px;
  background: #00ff88;
  border-radius: 50%;
  animation: cyber-blink 1.5s infinite;
}

.cyber-message {
  color: #ccc;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.6;
  margin: 16px 0;
}

.cyber-progress {
  width: 100%;
  height: 4px;
  background: #333;
  border: 1px solid #00ff88;
  margin: 20px 0;
  overflow: hidden;
}

.cyber-progress-bar {
  height: 100%;
  width: 75%;
  background: linear-gradient(90deg, #00ff88, #00ccff);
  animation: cyber-loading 2s ease-in-out infinite;
}

.cyber-modal-footer {
  display: flex;
  gap: 12px;
  padding: 20px;
  border-top: 1px solid #00ff88;
  justify-content: flex-end;
  position: relative;
  z-index: 2;
}

.cyber-btn {
  padding: 12px 20px;
  border: 1px solid #00ff88;
  background: transparent;
  color: #00ff88;
  font-family: 'Courier New', monospace;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  letter-spacing: 1px;
}

.cyber-btn:hover {
  background: rgba(0, 255, 136, 0.1);
  box-shadow: 0 0 15px rgba(0, 255, 136, 0.3);
}

.cyber-btn-proceed {
  background: #00ff88;
  color: #000;
}

.cyber-btn-proceed:hover {
  background: #00ccff;
  border-color: #00ccff;
  box-shadow: 0 0 20px rgba(0, 204, 255, 0.5);
}

@keyframes cyber-glitch {
  0%, 100% { filter: hue-rotate(0deg); }
  50% { filter: hue-rotate(90deg); }
}

@keyframes cyber-appear {
  from {
    opacity: 0;
    transform: scale(0.8) rotateX(45deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotateX(0deg);
  }
}

@keyframes cyber-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

@keyframes cyber-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes cyber-loading {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/modal-cyber.png',
          createdAt: '2024-05-20',
          framework: 'html-css'
        },
        {
          id: 'uv-modal-003',
          name: 'Minimal Confirmation Modal',
          author: 'clean-ui',
          likes: 1123,
          category: 'modal',
          tags: ['minimal', 'clean', 'simple'],
          htmlCode: `<div class="minimal-modal-overlay">
  <div class="minimal-modal">
    <div class="minimal-icon">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#f59e0b" stroke-width="2"/>
        <path d="M12 8v4M12 16h.01" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </div>
    <h3 class="minimal-title">Are you sure?</h3>
    <p class="minimal-message">This action cannot be undone. All data will be permanently deleted.</p>
    <div class="minimal-actions">
      <button class="minimal-btn minimal-btn-secondary">Cancel</button>
      <button class="minimal-btn minimal-btn-danger">Delete</button>
    </div>
  </div>
</div>`,
          cssCode: `.minimal-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(17, 24, 39, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: minimal-fade-in 0.2s ease;
}

.minimal-modal {
  background: white;
  border-radius: 12px;
  padding: 32px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  box-shadow: 
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  animation: minimal-scale-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.minimal-icon {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}

.minimal-title {
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 12px 0;
}

.minimal-message {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.5;
  margin: 0 0 24px 0;
}

.minimal-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.minimal-btn {
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  min-width: 80px;
}

.minimal-btn-secondary {
  background: #f9fafb;
  color: #374151;
  border: 1px solid #d1d5db;
}

.minimal-btn-secondary:hover {
  background: #f3f4f6;
  border-color: #9ca3af;
}

.minimal-btn-danger {
  background: #ef4444;
  color: white;
}

.minimal-btn-danger:hover {
  background: #dc2626;
  transform: translateY(-1px);
}

@keyframes minimal-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes minimal-scale-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/modal-minimal.png',
          createdAt: '2024-04-18',
          framework: 'html-css'
        }
      ],
      accordion: [
        {
          id: 'uv-accordion-001',
          name: 'Animated FAQ Accordion',
          author: 'fold-master',
          likes: 892,
          category: 'accordion',
          tags: ['faq', 'animated', 'smooth'],
          htmlCode: `<div class="accordion">
  <div class="accordion-item">
    <button class="accordion-header">
      <span>What is this component?</span>
      <svg class="accordion-icon" viewBox="0 0 24 24">
        <path d="M7 10l5 5 5-5z"/>
      </svg>
    </button>
    <div class="accordion-content">
      <p>This is a beautiful animated accordion component.</p>
    </div>
  </div>
</div>`,
          cssCode: `.accordion {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.accordion-item {
  border-bottom: 1px solid #e2e8f0;
}

.accordion-header {
  width: 100%;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
}

.accordion-header:hover {
  background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
}

.accordion-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
  fill: currentColor;
}

.accordion-content {
  padding: 0 20px;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
  background: white;
}

.accordion-item.active .accordion-content {
  max-height: 200px;
  padding: 20px;
}

.accordion-item.active .accordion-icon {
  transform: rotate(180deg);
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/accordion-001.png',
          createdAt: '2024-02-20',
          framework: 'html-css'
        }
      ],
      carousel: [
        {
          id: 'uv-carousel-001',
          name: '3D Rotating Carousel',
          author: 'motion-dev',
          likes: 1543,
          category: 'carousel',
          tags: ['3d', 'rotating', 'perspective'],
          htmlCode: `<div class="carousel-3d">
  <div class="carousel-container">
    <div class="carousel-item active">
      <img src="/api/placeholder/300/200" alt="Slide 1">
    </div>
    <div class="carousel-item">
      <img src="/api/placeholder/300/200" alt="Slide 2">
    </div>
    <div class="carousel-item">
      <img src="/api/placeholder/300/200" alt="Slide 3">
    </div>
  </div>
  <div class="carousel-controls">
    <button class="carousel-btn prev">‹</button>
    <button class="carousel-btn next">›</button>
  </div>
</div>`,
          cssCode: `.carousel-3d {
  perspective: 1000px;
  width: 400px;
  height: 250px;
  position: relative;
  margin: 0 auto;
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
}

.carousel-item {
  position: absolute;
  width: 300px;
  height: 200px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotateY(0deg) translateZ(150px);
  transition: all 0.6s ease;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-item:nth-child(2) {
  transform: translate(-50%, -50%) rotateY(120deg) translateZ(150px);
}

.carousel-item:nth-child(3) {
  transform: translate(-50%, -50%) rotateY(240deg) translateZ(150px);
}

.carousel-controls {
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.carousel-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.3s ease;
}

.carousel-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 5px 15px rgba(99, 102, 241, 0.4);
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/carousel-001.png',
          createdAt: '2024-02-18',
          framework: 'html-css'
        }
      ],
      rating: [
        {
          id: 'uv-rating-001',
          name: 'Animated Emoji Rating',
          author: 'emotion-ui',
          likes: 687,
          category: 'rating',
          tags: ['emoji', 'animated', 'interactive'],
          htmlCode: `<div class="emoji-rating">
  <div class="rating-label">How was your experience?</div>
  <div class="emoji-container">
    <button class="emoji-btn" data-rating="1">😞</button>
    <button class="emoji-btn" data-rating="2">😐</button>
    <button class="emoji-btn" data-rating="3">🙂</button>
    <button class="emoji-btn" data-rating="4">😊</button>
    <button class="emoji-btn" data-rating="5">🤩</button>
  </div>
</div>`,
          cssCode: `.emoji-rating {
  text-align: center;
  padding: 20px;
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.rating-label {
  font-size: 18px;
  font-weight: 600;
  color: #8b4513;
  margin-bottom: 15px;
}

.emoji-container {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.emoji-btn {
  background: none;
  border: none;
  font-size: 32px;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;
  position: relative;
}

.emoji-btn:hover {
  transform: scale(1.3);
  background: rgba(255, 255, 255, 0.3);
}

.emoji-btn:active {
  transform: scale(1.1);
}

.emoji-btn.selected {
  transform: scale(1.4);
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 20px rgba(255, 193, 7, 0.6);
}

.emoji-btn::after {
  content: '';
  position: absolute;
  inset: -5px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.emoji-btn.selected::after {
  opacity: 1;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.1); opacity: 1; }
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/rating-001.png',
          createdAt: '2024-02-16',
          framework: 'html-css'
        }
      ],
      navigation: [
        {
          id: 'uv-nav-001',
          name: 'Morphing Tab Navigation',
          author: 'nav-wizard',
          likes: 1234,
          category: 'navigation',
          tags: ['tabs', 'morphing', 'smooth'],
          htmlCode: `<nav class="morphing-tabs">
  <div class="tab-container">
    <button class="tab-btn active" data-tab="home">Home</button>
    <button class="tab-btn" data-tab="about">About</button>
    <button class="tab-btn" data-tab="services">Services</button>
    <button class="tab-btn" data-tab="contact">Contact</button>
    <div class="tab-indicator"></div>
  </div>
</nav>`,
          cssCode: `.morphing-tabs {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 8px;
  border-radius: 50px;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.tab-container {
  position: relative;
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 40px;
  backdrop-filter: blur(10px);
  overflow: hidden;
}

.tab-btn {
  position: relative;
  padding: 12px 24px;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;
}

.tab-btn:hover {
  color: white;
}

.tab-btn.active {
  color: #667eea;
  font-weight: 600;
}

.tab-indicator {
  position: absolute;
  top: 4px;
  left: 4px;
  bottom: 4px;
  width: calc(25% - 8px);
  background: white;
  border-radius: 32px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1;
}

.tab-container[data-active="about"] .tab-indicator {
  transform: translateX(100%);
}

.tab-container[data-active="services"] .tab-indicator {
  transform: translateX(200%);
}

.tab-container[data-active="contact"] .tab-indicator {
  transform: translateX(300%);
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/nav-001.png',
          createdAt: '2024-02-22',
          framework: 'html-css'
        }
      ],
      progressbar: [
        {
          id: 'uv-progress-001',
          name: 'Liquid Fill Progress Bar',
          author: 'alexruix',
          likes: 1250,
          category: 'progressbar',
          tags: ['liquid', 'animated', 'smooth'],
          htmlCode: `<div class="liquid-progress-container">
  <div class="liquid-progress-bar">
    <div class="liquid-fill" data-progress="75"></div>
    <span class="progress-text">75%</span>
  </div>
</div>`,
          cssCode: `.liquid-progress-container {
  width: 100%;
  max-width: 400px;
  margin: 20px 0;
}

.liquid-progress-bar {
  position: relative;
  width: 100%;
  height: 20px;
  background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 
    inset 0 2px 4px rgba(0, 0, 0, 0.3),
    0 2px 8px rgba(0, 0, 0, 0.2);
}

.liquid-fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 75%;
  background: linear-gradient(90deg, #00d4ff, #0099cc, #00d4ff);
  background-size: 200% 100%;
  border-radius: 25px;
  animation: liquid-flow 3s ease-in-out infinite;
  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.liquid-fill::before {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  background: inherit;
  border-radius: inherit;
  filter: blur(8px);
  opacity: 0.3;
  z-index: -1;
}

.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 12px;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  z-index: 2;
}

@keyframes liquid-flow {
  0%, 100% { background-position: 0% 0%; }
  50% { background-position: 200% 0%; }
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/progress-liquid.png',
          createdAt: '2024-06-20',
          framework: 'html-css'
        },
        {
          id: 'uv-progress-002',
          name: 'Neon Glow Progress Bar',
          author: 'vinodjangid07',
          likes: 892,
          category: 'progressbar',
          tags: ['neon', 'glow', 'cyberpunk'],
          htmlCode: `<div class="neon-progress-container">
  <div class="neon-progress-bar">
    <div class="neon-fill" data-progress="60"></div>
    <div class="neon-overlay"></div>
  </div>
  <span class="neon-text">Loading... 60%</span>
</div>`,
          cssCode: `.neon-progress-container {
  width: 100%;
  max-width: 350px;
  margin: 20px 0;
  font-family: 'Courier New', monospace;
}

.neon-progress-bar {
  position: relative;
  width: 100%;
  height: 16px;
  background: #0a0a0a;
  border: 1px solid #00ff88;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 
    0 0 10px rgba(0, 255, 136, 0.3),
    inset 0 0 10px rgba(0, 0, 0, 0.5);
}

.neon-fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 60%;
  background: linear-gradient(90deg, #00ff88, #00ccff, #00ff88);
  background-size: 200% 100%;
  border-radius: 8px;
  animation: neon-pulse 2s ease-in-out infinite;
  box-shadow: 
    0 0 15px rgba(0, 255, 136, 0.8),
    inset 0 0 15px rgba(0, 255, 136, 0.2);
  transition: width 0.6s ease;
}

.neon-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 8px,
    rgba(0, 255, 136, 0.1) 10px
  );
  animation: scan-line 1.5s linear infinite;
}

.neon-text {
  display: block;
  margin-top: 8px;
  color: #00ff88;
  font-size: 12px;
  font-weight: 600;
  text-shadow: 0 0 8px rgba(0, 255, 136, 0.8);
  letter-spacing: 1px;
}

@keyframes neon-pulse {
  0%, 100% { 
    background-position: 0% 0%;
    box-shadow: 
      0 0 15px rgba(0, 255, 136, 0.8),
      inset 0 0 15px rgba(0, 255, 136, 0.2);
  }
  50% { 
    background-position: 200% 0%;
    box-shadow: 
      0 0 25px rgba(0, 255, 136, 1),
      inset 0 0 25px rgba(0, 255, 136, 0.3);
  }
}

@keyframes scan-line {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/progress-neon.png',
          createdAt: '2024-05-15',
          framework: 'html-css'
        },
        {
          id: 'uv-progress-003',
          name: 'Neumorphic Progress Bar',
          author: 'Nawsome',
          likes: 1456,
          category: 'progressbar',
          tags: ['neumorphism', 'soft', 'minimal'],
          htmlCode: `<div class="neuro-progress-container">
  <div class="neuro-progress-label">
    <span>Progress</span>
    <span class="neuro-percentage">85%</span>
  </div>
  <div class="neuro-progress-bar">
    <div class="neuro-fill" data-progress="85"></div>
  </div>
</div>`,
          cssCode: `.neuro-progress-container {
  width: 100%;
  max-width: 320px;
  margin: 20px 0;
  padding: 20px;
  background: #e0e0e0;
  border-radius: 20px;
  box-shadow: 
    20px 20px 40px #bebebe,
    -20px -20px 40px #ffffff;
}

.neuro-progress-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  color: #666;
  font-size: 14px;
  font-weight: 600;
}

.neuro-percentage {
  color: #4a90e2;
  font-weight: 700;
}

.neuro-progress-bar {
  position: relative;
  width: 100%;
  height: 14px;
  background: #e0e0e0;
  border-radius: 14px;
  box-shadow: 
    inset 8px 8px 16px #bebebe,
    inset -8px -8px 16px #ffffff;
  overflow: hidden;
}

.neuro-fill {
  position: absolute;
  top: 2px;
  left: 2px;
  height: calc(100% - 4px);
  width: calc(85% - 4px);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  box-shadow: 
    4px 4px 8px rgba(102, 126, 234, 0.3),
    -2px -2px 4px rgba(255, 255, 255, 0.8);
  transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.neuro-fill::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  animation: neuro-shine 2s ease-in-out infinite;
}

@keyframes neuro-shine {
  0% { left: -100%; }
  50% { left: 100%; }
  100% { left: 100%; }
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/progress-neuro.png',
          createdAt: '2024-04-10',
          framework: 'html-css'
        },
        {
          id: 'uv-progress-004',
          name: 'Segmented Progress Bar',
          author: 'andrew-demchenk0',
          likes: 734,
          category: 'progressbar',
          tags: ['segmented', 'steps', 'modern'],
          htmlCode: `<div class="segment-progress-container">
  <div class="segment-progress-bar">
    <div class="segment active"></div>
    <div class="segment active"></div>
    <div class="segment active"></div>
    <div class="segment active"></div>
    <div class="segment"></div>
    <div class="segment"></div>
    <div class="segment"></div>
    <div class="segment"></div>
  </div>
  <div class="segment-labels">
    <span>Step 4 of 8</span>
  </div>
</div>`,
          cssCode: `.segment-progress-container {
  width: 100%;
  max-width: 300px;
  margin: 20px 0;
}

.segment-progress-bar {
  display: flex;
  gap: 4px;
  margin-bottom: 10px;
}

.segment {
  flex: 1;
  height: 8px;
  background: #f0f0f0;
  border-radius: 4px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.segment.active {
  background: linear-gradient(45deg, #6366f1, #8b5cf6);
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3);
  transform: scaleY(1.2);
}

.segment.active::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.6),
    transparent
  );
  animation: segment-fill 0.6s ease-out;
}

.segment-labels {
  text-align: center;
  color: #666;
  font-size: 12px;
  font-weight: 500;
}

@keyframes segment-fill {
  0% { left: -100%; }
  100% { left: 100%; }
}

.segment:hover {
  transform: scaleY(1.1);
  background: #e0e0e0;
}

.segment.active:hover {
  transform: scaleY(1.3);
  box-shadow: 0 3px 12px rgba(99, 102, 241, 0.4);
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/progress-segment.png',
          createdAt: '2024-03-28',
          framework: 'html-css'
        },
        {
          id: 'uv-progress-005',
          name: 'Circular Progress Indicator',
          author: 'Shoh2008',
          likes: 998,
          category: 'progressbar',
          tags: ['circular', 'radial', 'animated'],
          htmlCode: `<div class="circular-progress-container">
  <div class="circular-progress" data-progress="70">
    <div class="progress-inner">
      <div class="progress-number">70%</div>
      <div class="progress-label">Complete</div>
    </div>
  </div>
</div>`,
          cssCode: `.circular-progress-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

.circular-progress {
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    #6366f1 0deg,
    #8b5cf6 252deg,
    #f3f4f6 252deg,
    #f3f4f6 360deg
  );
  padding: 8px;
  animation: rotate 3s ease-in-out infinite;
}

.circular-progress::before {
  content: '';
  position: absolute;
  top: 8px;
  left: 8px;
  right: 8px;
  bottom: 8px;
  background: white;
  border-radius: 50%;
  z-index: 1;
}

.progress-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
}

.progress-number {
  font-size: 24px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 4px;
}

.progress-label {
  font-size: 12px;
  color: #6b7280;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Hover effect */
.circular-progress:hover {
  transform: scale(1.05);
  filter: drop-shadow(0 8px 16px rgba(99, 102, 241, 0.3));
  transition: all 0.3s ease;
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/progress-circular.png',
          createdAt: '2024-06-01',
          framework: 'html-css'
        },
        {
          id: 'uv-progress-006',
          name: 'Gradient Wave Progress',
          author: 'mobinkakei',
          likes: 623,
          category: 'progressbar',
          tags: ['wave', 'gradient', 'fluid'],
          htmlCode: `<div class="wave-progress-container">
  <div class="wave-progress-bar">
    <div class="wave-fill" data-progress="45">
      <div class="wave"></div>
      <div class="wave wave2"></div>
    </div>
    <span class="wave-text">45%</span>
  </div>
</div>`,
          cssCode: `.wave-progress-container {
  width: 100%;
  max-width: 280px;
  margin: 20px 0;
}

.wave-progress-bar {
  position: relative;
  width: 100%;
  height: 25px;
  background: linear-gradient(145deg, #f0f0f0, #e0e0e0);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 
    inset 0 2px 4px rgba(0, 0, 0, 0.1),
    0 2px 8px rgba(0, 0, 0, 0.1);
}

.wave-fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 45%;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
  background-size: 300% 300%;
  border-radius: 15px;
  overflow: hidden;
  animation: wave-gradient 4s ease-in-out infinite;
  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.wave {
  position: absolute;
  top: 50%;
  left: 0;
  width: 200%;
  height: 200%;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 40%;
  animation: wave-motion 3s linear infinite;
}

.wave2 {
  animation: wave-motion 3s linear infinite reverse;
  background: rgba(255, 255, 255, 0.2);
  animation-delay: -1.5s;
}

.wave-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 12px;
  font-weight: 700;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  z-index: 2;
}

@keyframes wave-gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes wave-motion {
  0% { transform: translateX(-50%) translateY(-50%) rotate(0deg); }
  100% { transform: translateX(-50%) translateY(-50%) rotate(360deg); }
}`,
          jsCode: ``,
          preview: 'https://uiverse.io/previews/progress-wave.png',
          createdAt: '2024-05-22',
          framework: 'html-css'
        }
      ]
    };

    return variantDatabase[componentType] || [];
  }

  /**
   * Get fallback variants when API fails
   */
  getFallbackVariants(componentType) {
    return [
      {
        id: `fallback-${componentType}-001`,
        name: `${componentType.charAt(0).toUpperCase() + componentType.slice(1)} Variant`,
        author: 'DUIMX',
        likes: 0,
        category: componentType,
        tags: ['fallback'],
        htmlCode: `<div class="fallback-${componentType}">Fallback ${componentType}</div>`,
        cssCode: `.fallback-${componentType} { /* Basic styles */ }`,
        jsCode: '',
        preview: '',
        createdAt: new Date().toISOString().split('T')[0],
        framework: 'html-css'
      }
    ];
  }

  /**
   * Transform Uiverse component to DUIMX format
   */
  transformToVueComponent(variant, componentName) {
    const vueTemplate = this.htmlToVueTemplate(variant.htmlCode);
    const vueScript = this.generateVueScript(componentName, variant);
    const vueStyle = variant.cssCode;

    return {
      name: variant.name,
      author: variant.author,
      id: variant.id,
      template: vueTemplate,
      script: vueScript,
      style: vueStyle,
      props: this.extractPropsFromCode(variant),
      meta: {
        likes: variant.likes,
        tags: variant.tags,
        createdAt: variant.createdAt
      }
    };
  }

  /**
   * Convert HTML to Vue template
   */
  htmlToVueTemplate(html) {
    // Basic HTML to Vue template conversion
    return html
      .replace(/class="/g, ':class="[')
      .replace(/"/g, '\']"')
      .replace(/onclick="/g, '@click="')
      .replace(/onmouseover="/g, '@mouseenter="')
      .replace(/onmouseout="/g, '@mouseleave="');
  }

  /**
   * Generate Vue script section
   */
  generateVueScript(componentName, variant) {
    return `import { ref, computed } from 'vue';

const props = defineProps({
  // Standard DUIMX props
  theme: { type: String, default: 'dark' },
  primaryColor: { type: String, default: '#6366f1' },
  roundness: { type: Number, default: 8 },
  // Component-specific props
  text: { type: String, default: '${variant.name}' }
});

const emit = defineEmits(['click']);

// Reactive state
const isHovered = ref(false);

// Computed properties
const componentClasses = computed(() => {
  return [
    'uiverse-${variant.id}',
    props.theme === 'dark' ? 'dark' : 'light'
  ];
});

// Methods
const handleClick = (event) => {
  emit('click', event);
};`;
  }

  /**
   * Extract props from component code
   */
  extractPropsFromCode(variant) {
    const props = [];
    
    // Basic prop extraction (this could be made more sophisticated)
    if (variant.htmlCode.includes('{{') || variant.htmlCode.includes('v-')) {
      props.push({ name: 'text', type: 'String', default: 'Button Text' });
    }
    
    return props;
  }

  /**
   * Clear cache
   */
  clearCache() {
    this.cache.clear();
  }

  /**
   * Get cache statistics
   */
  getCacheStats() {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys()),
      rateLimit: this.rateLimit
    };
  }
}

// Export singleton instance
export const uiverseService = new UiverseIntegrationService();
export default uiverseService;
