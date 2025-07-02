<template>
  <div 
    class="graph-3d-component"
    :class="[
      `variant-${variant}`,
      { 'auto-rotate': autoRotate }
    ]"
    :style="{ '--animation-speed': `${animationSpeed}s` }"
  >
    <div class="graph-container">
      <div class="graph-stage">
        <!-- Grid Lines -->
        <div v-if="showGrid" class="grid-lines">
          <div class="grid-x"></div>
          <div class="grid-y"></div>
          <div class="grid-z"></div>
        </div>
        
        <!-- Data Points -->
        <div class="data-points">
          <div
            v-for="(point, index) in generatedDataPoints"
            :key="index"
            class="data-point"
            :style="{
              '--x': point.x,
              '--y': point.y,
              '--z': point.z,
              '--delay': `${index * 0.1}s`
            }"
          >
            <div class="point-sphere"></div>
            <div class="point-glow"></div>
          </div>
        </div>
        
        <!-- Connecting Lines -->
        <div class="connecting-lines">
          <div
            v-for="(line, index) in connectionLines"
            :key="index"
            class="connection-line"
            :style="{
              '--x1': line.x1,
              '--y1': line.y1,
              '--z1': line.z1,
              '--x2': line.x2,
              '--y2': line.y2,
              '--z2': line.z2,
              '--delay': `${index * 0.05}s`
            }"
          ></div>
        </div>
        
        <!-- Graph Base -->
        <div class="graph-base">
          <div class="base-surface"></div>
          <div class="base-glow"></div>
        </div>
        
        <!-- Floating Particles -->
        <div class="floating-particles">
          <div
            v-for="n in 20"
            :key="n"
            class="particle"
            :style="{ '--delay': `${n * 0.2}s` }"
          ></div>
        </div>
      </div>
      
      <!-- UI Overlay -->
      <div class="ui-overlay">
        <div class="graph-info">
          <div class="info-panel">
            <div class="metric">
              <span class="metric-label">Data Points</span>
              <span class="metric-value">{{ dataPoints }}</span>
            </div>
            <div class="metric">
              <span class="metric-label">Connections</span>
              <span class="metric-value">{{ connectionLines.length }}</span>
            </div>
            <div class="metric">
              <span class="metric-label">Status</span>
              <span class="metric-value status-active">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Graph3DComponent',
  props: {
    variant: {
      type: String,
      default: 'marcelo-winner',
      validator: value => [
        'marcelo-winner', 'omprabhu-runner-up', 'abhay-third',
        'futuristic', 'neon', 'hologram', 'cyber', 'matrix'
      ].includes(value)
    },
    animationSpeed: {
      type: Number,
      default: 1
    },
    dataPoints: {
      type: Number,
      default: 10,
      validator: value => value >= 5 && value <= 20
    },
    showGrid: {
      type: Boolean,
      default: true
    },
    autoRotate: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    generatedDataPoints() {
      const points = []
      for (let i = 0; i < this.dataPoints; i++) {
        points.push({
          x: (Math.random() - 0.5) * 200,
          y: (Math.random() - 0.5) * 200,
          z: (Math.random() - 0.5) * 200,
          value: Math.random() * 100
        })
      }
      return points
    },
    
    connectionLines() {
      const lines = []
      const points = this.generatedDataPoints
      
      for (let i = 0; i < points.length - 1; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const distance = Math.sqrt(
            Math.pow(points[i].x - points[j].x, 2) +
            Math.pow(points[i].y - points[j].y, 2) +
            Math.pow(points[i].z - points[j].z, 2)
          )
          
          // Only connect nearby points
          if (distance < 150) {
            lines.push({
              x1: points[i].x,
              y1: points[i].y,
              z1: points[i].z,
              x2: points[j].x,
              y2: points[j].y,
              z2: points[j].z
            })
          }
        }
      }
      
      return lines
    }
  }
}
</script>

<style scoped>
.graph-3d-component {
  width: 100%;
  height: 400px;
  perspective: 1000px;
  overflow: hidden;
  border-radius: 20px;
  position: relative;
}

.graph-container {
  width: 100%;
  height: 100%;
  position: relative;
  background: radial-gradient(circle at center, rgba(20, 20, 40, 0.9) 0%, rgba(5, 5, 15, 0.95) 100%);
  border-radius: 20px;
  overflow: hidden;
}

.graph-stage {
  width: 300px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateX(20deg) rotateY(0deg);
  transform-style: preserve-3d;
  animation: rotate-stage var(--animation-speed, 3s) linear infinite;
}

.auto-rotate .graph-stage {
  animation-play-state: running;
}

.grid-lines {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}

.grid-x,
.grid-y,
.grid-z {
  position: absolute;
  opacity: 0.3;
}

.grid-x {
  width: 300px;
  height: 300px;
  background: 
    linear-gradient(90deg, transparent 49%, rgba(100, 255, 218, 0.3) 50%, transparent 51%),
    linear-gradient(0deg, transparent 49%, rgba(100, 255, 218, 0.3) 50%, transparent 51%);
  background-size: 30px 30px;
  transform: rotateX(90deg) translateZ(-150px);
}

.grid-y {
  width: 300px;
  height: 300px;
  background: 
    linear-gradient(90deg, transparent 49%, rgba(100, 255, 218, 0.2) 50%, transparent 51%),
    linear-gradient(0deg, transparent 49%, rgba(100, 255, 218, 0.2) 50%, transparent 51%);
  background-size: 30px 30px;
  transform: rotateY(90deg) translateZ(-150px);
}

.grid-z {
  width: 300px;
  height: 300px;
  background: 
    linear-gradient(90deg, transparent 49%, rgba(100, 255, 218, 0.2) 50%, transparent 51%),
    linear-gradient(0deg, transparent 49%, rgba(100, 255, 218, 0.2) 50%, transparent 51%);
  background-size: 30px 30px;
  transform: translateZ(-150px);
}

.data-points {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}

.data-point {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: 
    translate(-50%, -50%) 
    translate3d(calc(var(--x) * 1px), calc(var(--y) * 1px), calc(var(--z) * 1px));
  animation: pulse-point 2s ease-in-out infinite;
  animation-delay: var(--delay);
}

.point-sphere {
  width: 8px;
  height: 8px;
  background: radial-gradient(circle, #64ffda 0%, #0080ff 100%);
  border-radius: 50%;
  position: relative;
  box-shadow: 0 0 20px rgba(100, 255, 218, 0.6);
}

.point-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  background: radial-gradient(circle, rgba(100, 255, 218, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: glow-pulse 3s ease-in-out infinite;
}

.connecting-lines {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}

.connection-line {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1px;
  height: 1px;
  background: linear-gradient(
    to right,
    rgba(100, 255, 218, 0.5),
    rgba(100, 255, 218, 0.1)
  );
  transform-origin: 0 0;
  animation: line-draw 4s ease-in-out infinite;
  animation-delay: var(--delay);
}

.graph-base {
  position: absolute;
  bottom: -150px;
  left: 50%;
  width: 200px;
  height: 200px;
  transform: translateX(-50%) rotateX(90deg);
  transform-style: preserve-3d;
}

.base-surface {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(100, 255, 218, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  border: 2px solid rgba(100, 255, 218, 0.3);
}

.base-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(100, 255, 218, 0.05) 0%, transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: base-pulse 4s ease-in-out infinite;
}

.floating-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}

.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: #64ffda;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: 
    translate(-50%, -50%) 
    translate3d(
      calc((var(--delay) * 100px) - 200px),
      calc((var(--delay) * 80px) - 150px),
      calc((var(--delay) * 60px) - 100px)
    );
  animation: float-particle 6s ease-in-out infinite;
  animation-delay: var(--delay);
  opacity: 0.6;
  box-shadow: 0 0 10px rgba(100, 255, 218, 0.8);
}

.ui-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.graph-info {
  position: absolute;
  top: 20px;
  right: 20px;
}

.info-panel {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.3);
  border-radius: 12px;
  padding: 1rem;
  min-width: 150px;
}

.metric {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.metric:last-child {
  margin-bottom: 0;
}

.metric-label {
  color: #94a3b8;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.metric-value {
  color: #64ffda;
  font-weight: 600;
  font-size: 0.875rem;
}

.status-active {
  color: #22c55e;
}

/* Variant Styles */
.variant-marcelo-winner {
  background: radial-gradient(circle at center, rgba(15, 15, 35, 0.9) 0%, rgba(5, 5, 15, 0.95) 100%);
}

.variant-marcelo-winner .point-sphere {
  background: radial-gradient(circle, #64ffda 0%, #0f3460 100%);
  box-shadow: 0 0 20px rgba(100, 255, 218, 0.8);
}

.variant-omprabhu-runner-up {
  background: radial-gradient(circle at center, rgba(25, 0, 50, 0.9) 0%, rgba(10, 0, 20, 0.95) 100%);
}

.variant-omprabhu-runner-up .point-sphere {
  background: radial-gradient(circle, #ff6b6b 0%, #4ecdc4 100%);
  box-shadow: 0 0 20px rgba(255, 107, 107, 0.6);
}

.variant-omprabhu-runner-up .grid-x,
.variant-omprabhu-runner-up .grid-y,
.variant-omprabhu-runner-up .grid-z {
  background: 
    linear-gradient(90deg, transparent 49%, rgba(255, 107, 107, 0.3) 50%, transparent 51%),
    linear-gradient(0deg, transparent 49%, rgba(255, 107, 107, 0.3) 50%, transparent 51%);
}

.variant-abhay-third {
  background: radial-gradient(circle at center, rgba(30, 0, 30, 0.9) 0%, rgba(15, 0, 15, 0.95) 100%);
}

.variant-abhay-third .point-sphere {
  background: radial-gradient(circle, #ff0080 0%, #00ffff 100%);
  box-shadow: 0 0 20px rgba(255, 0, 128, 0.6);
}

.variant-futuristic .point-sphere {
  background: radial-gradient(circle, #667eea 0%, #764ba2 100%);
  box-shadow: 0 0 25px rgba(102, 126, 234, 0.7);
}

.variant-neon {
  background: radial-gradient(circle at center, rgba(0, 50, 100, 0.9) 0%, rgba(0, 20, 40, 0.95) 100%);
}

.variant-neon .point-sphere {
  background: radial-gradient(circle, #00ffff 0%, #0080ff 100%);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.8);
}

.variant-hologram {
  background: radial-gradient(circle at center, rgba(0, 50, 100, 0.7) 0%, rgba(0, 20, 40, 0.9) 100%);
}

.variant-hologram .point-sphere {
  background: radial-gradient(circle, rgba(0, 200, 255, 0.8) 0%, rgba(0, 100, 200, 0.4) 100%);
  box-shadow: 0 0 25px rgba(0, 200, 255, 0.6);
}

.variant-cyber .point-sphere {
  background: radial-gradient(circle, #39ff14 0%, #00ff00 100%);
  box-shadow: 0 0 20px rgba(57, 255, 20, 0.6);
}

.variant-matrix .point-sphere {
  background: radial-gradient(circle, #00ff41 0%, #008f11 100%);
  box-shadow: 0 0 15px rgba(0, 255, 65, 0.7);
}

/* Animations */
@keyframes rotate-stage {
  from { transform: translate(-50%, -50%) rotateX(20deg) rotateY(0deg); }
  to { transform: translate(-50%, -50%) rotateX(20deg) rotateY(360deg); }
}

@keyframes pulse-point {
  0%, 100% { transform: translate(-50%, -50%) translate3d(calc(var(--x) * 1px), calc(var(--y) * 1px), calc(var(--z) * 1px)) scale(1); }
  50% { transform: translate(-50%, -50%) translate3d(calc(var(--x) * 1px), calc(var(--y) * 1px), calc(var(--z) * 1px)) scale(1.2); }
}

@keyframes glow-pulse {
  0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.5); }
}

@keyframes line-draw {
  0% { opacity: 0; transform: scale(0); }
  50% { opacity: 0.7; transform: scale(1); }
  100% { opacity: 0.3; transform: scale(1); }
}

@keyframes base-pulse {
  0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.1); }
}

@keyframes float-particle {
  0%, 100% { 
    transform: translate(-50%, -50%) translate3d(
      calc((var(--delay) * 100px) - 200px),
      calc((var(--delay) * 80px) - 150px),
      calc((var(--delay) * 60px) - 100px)
    ) scale(1);
    opacity: 0.6;
  }
  50% { 
    transform: translate(-50%, -50%) translate3d(
      calc((var(--delay) * 120px) - 240px),
      calc((var(--delay) * 100px) - 200px),
      calc((var(--delay) * 80px) - 140px)
    ) scale(1.5);
    opacity: 1;
  }
}
</style>
