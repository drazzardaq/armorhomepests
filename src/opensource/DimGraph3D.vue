<template>
  <!-- Documentation Mode -->
  <div v-if="isDocs" class="DUIMX-docs prose prose-purple max-w-none">
    <div class="mb-6 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4">
      <h2 class="mb-2 text-2xl font-bold text-purple-300">📊 DUIMX 3D Graph</h2>
      <p class="text-purple-200">Interactive 3D data visualization with multiple chart types and customization options.</p>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">✨ Features</h3>
    <ul class="mb-6 space-y-2 text-purple-200">
      <li>📊 <strong>Multiple Chart Types</strong> - Bar, line, surface, scatter plots</li>
      <li>🔄 <strong>Interactive Controls</strong> - Rotation, zoom, pan</li>
      <li>🎨 <strong>Customizable Styling</strong> - Colors, gradients, materials</li>
      <li>📱 <strong>Responsive Design</strong> - Adapts to container size</li>
      <li>💫 <strong>Animations</strong> - Smooth data transitions</li>
      <li>🌓 <strong>Theme Support</strong> - Light and dark modes</li>
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
          <tr><td class="border border-purple-500/30 p-2 font-mono">chartType</td><td class="border border-purple-500/30 p-2">String</td><td class="border border-purple-500/30 p-2">'bar'</td><td class="border border-purple-500/30 p-2">Type of 3D chart</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">data</td><td class="border border-purple-500/30 p-2">Array</td><td class="border border-purple-500/30 p-2">[]</td><td class="border border-purple-500/30 p-2">Chart data points</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">interactive</td><td class="border border-purple-500/30 p-2">Boolean</td><td class="border border-purple-500/30 p-2">true</td><td class="border border-purple-500/30 p-2">Enable interaction</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">animated</td><td class="border border-purple-500/30 p-2">Boolean</td><td class="border border-purple-500/30 p-2">true</td><td class="border border-purple-500/30 p-2">Enable animations</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">showAxes</td><td class="border border-purple-500/30 p-2">Boolean</td><td class="border border-purple-500/30 p-2">true</td><td class="border border-purple-500/30 p-2">Show axis lines</td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">📊 Chart Types</h3>
    <div class="mb-6 grid grid-cols-2 gap-4">
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">bar</h4>
        <p class="text-purple-200 text-sm">3D bar chart with height mapping</p>
      </div>
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">surface</h4>
        <p class="text-purple-200 text-sm">3D surface plot with grid</p>
      </div>
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">scatter</h4>
        <p class="text-purple-200 text-sm">3D scatter plot with points</p>
      </div>
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">line</h4>
        <p class="text-purple-200 text-sm">3D line chart with connections</p>
      </div>
    </div>

    <div class="mb-6 rounded-lg border border-purple-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4">
      <p class="text-center text-purple-200">
        <strong>🔗 Source Code:</strong> 
        <a href="https://github.com/drazzardaq/opensource/blob/master/src/opensource/DimGraph3D.vue" 
           target="_blank" 
           class="text-purple-300 hover:text-purple-100 transition-colors underline">
          View on GitHub
        </a>
      </p>
    </div>
  </div>

  <!-- Component Mode -->
  <div v-else class="DUIMX-graph-3d w-full"
       :style="containerStyles">
    
    <!-- 3D Scene Container -->
    <div ref="sceneContainer" 
         class="relative overflow-hidden transition-all duration-300"
         :style="sceneStyles"
         @mousedown="handleMouseDown"
         @mousemove="handleMouseMove"
         @mouseup="handleMouseUp"
         @wheel="handleWheel">
      
      <!-- Canvas for 3D rendering -->
      <canvas ref="canvas" 
              :width="canvasWidth" 
              :height="canvasHeight"
              class="block w-full h-full"></canvas>
      
      <!-- Loading overlay -->
      <div v-if="isLoading" 
           class="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
        <div class="flex items-center gap-2 text-white">
          <div class="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full"></div>
          <span>Loading 3D scene...</span>
        </div>
      </div>
      
      <!-- Controls overlay -->
      <div v-if="showControls && interactive" 
           class="absolute top-2 right-2 flex gap-1">
        <button v-for="type in chartTypes" 
                :key="type"
                :class="['px-2 py-1 text-xs rounded transition-colors', 
                         type === chartType ? 'font-semibold' : 'opacity-70']"
                :style="{ 
                  backgroundColor: type === chartType ? primaryColor : 'rgba(255,255,255,0.1)',
                  color: type === chartType ? (theme === 'dark' ? '#000' : '#fff') : '#fff'
                }"
                @click="changeChartType(type)">
          {{ type }}
        </button>
      </div>
      
      <!-- Info panel -->
      <div v-if="showInfo" 
           class="absolute bottom-2 left-2 p-2 rounded text-xs backdrop-blur-sm"
           :style="{ backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff' }">
        <div>Data Points: {{ displayData.length }}</div>
        <div>Rotation: {{ Math.round(rotation.x) }}°, {{ Math.round(rotation.y) }}°</div>
        <div>Zoom: {{ Math.round(zoom * 100) }}%</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue';

const props = defineProps({
  // Documentation mode
  isDocs: { type: Boolean, default: false },
  
  // Chart configuration
  chartType: { type: String, default: 'bar' }, // bar, surface, scatter, line
  data: { type: Array, default: () => [] },
  interactive: { type: Boolean, default: true },
  animated: { type: Boolean, default: true },
  showAxes: { type: Boolean, default: true },
  showControls: { type: Boolean, default: true },
  showInfo: { type: Boolean, default: true },
  
  // Visual options
  colorScheme: { type: String, default: 'gradient' }, // gradient, solid, rainbow
  wireframe: { type: Boolean, default: false },
  transparency: { type: Number, default: 0.8 }, // 0-1
  
  // Theme and styling
  roundness: { type: Number, default: 16 },
  primaryColor: { type: String, default: '#6366f1' },
  bgColor: { type: String, default: '#1e293b' },
  textColor: { type: String, default: '#e2e8f0' },
  fontFamily: { type: String, default: 'inherit' },
  theme: { type: String, default: 'dark' },
  width: { type: Number, default: 400 },
  height: { type: Number, default: 300 },
  padding: { type: Number, default: 16 },
  margin: { type: Number, default: 16 },
  boxShadow: { type: String, default: '0 4px 6px rgba(0, 0, 0, 0.1)' },
  borderWidth: { type: Number, default: 1 },
  animation: { type: String, default: 'none' }
});

const emit = defineEmits(['chartTypeChange', 'dataHover']);

// Refs
const sceneContainer = ref(null);
const canvas = ref(null);

// State
const isLoading = ref(true);
const isDragging = ref(false);
const lastMousePos = ref({ x: 0, y: 0 });

// 3D scene state
const rotation = ref({ x: 20, y: 45, z: 0 });
const zoom = ref(1);
const offset = ref({ x: 0, y: 0 });

// Chart types
const chartTypes = ['bar', 'surface', 'scatter', 'line'];

// Sample data generation function - separated to avoid hoisting issues
const generateSampleData = () => {
  const data = [];
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      data.push({
        x: i - 7,
        y: j - 7,
        z: Math.sin(i * 0.5) * Math.cos(j * 0.5) * 3 + Math.random() * 2,
        color: `hsl(${(i * j * 10) % 360}, 70%, 60%)`
      });
    }
  }
  return data;
};

// displayData computed property that uses sample data when needed
const displayData = computed(() => {
  // Use provided data or generate sample data if none provided
  if (props.data && props.data.length > 0) {
    return props.data;
  } else {
    return generateSampleData();
  }
});

const containerStyles = computed(() => ({
  fontFamily: props.fontFamily,
  width: `${props.width}px`,
  height: `${props.height}px`,
  margin: `${props.margin}px`,
  padding: `${props.padding}px`
}));

const sceneStyles = computed(() => ({
  backgroundColor: props.bgColor,
  borderRadius: `${props.roundness}px`,
  border: `${props.borderWidth}px solid ${props.primaryColor}20`,
  boxShadow: props.boxShadow,
  width: '100%',
  height: '100%'
}));

const canvasWidth = computed(() => props.width - (props.padding * 2));
const canvasHeight = computed(() => props.height - (props.padding * 2));

// 3D rendering functions (simplified pseudo-3D)
const renderScene = () => {
  if (!canvas.value) return;
  
  const ctx = canvas.value.getContext('2d');
  const centerX = canvasWidth.value / 2;
  const centerY = canvasHeight.value / 2;
  
  // Clear canvas
  ctx.clearRect(0, 0, canvasWidth.value, canvasHeight.value);
  
  // Setup transform
  ctx.save();
  ctx.translate(centerX + offset.value.x, centerY + offset.value.y);
  ctx.scale(zoom.value, zoom.value);
  
  // Render based on chart type
  if (props.chartType === 'bar') {
    renderBarChart(ctx);
  } else if (props.chartType === 'surface') {
    renderSurfaceChart(ctx);
  } else if (props.chartType === 'scatter') {
    renderScatterChart(ctx);
  } else if (props.chartType === 'line') {
    renderLineChart(ctx);
  }
  
  // Render axes if enabled
  if (props.showAxes) {
    renderAxes(ctx);
  }
  
  ctx.restore();
};

const renderBarChart = (ctx) => {
  displayData.value.forEach(point => {
    const projectedX = project3DX(point.x, point.y, point.z);
    const projectedY = project3DY(point.x, point.y, point.z);
    const baseY = project3DY(point.x, point.y, 0);
    
    // Bar color based on scheme
    let color = props.primaryColor;
    if (props.colorScheme === 'gradient') {
      const intensity = (point.z + 5) / 10; // Normalize to 0-1
      color = `hsl(${240 + intensity * 120}, 70%, 60%)`;
    } else if (props.colorScheme === 'rainbow') {
      color = point.color || color;
    }
    
    // Draw bar
    ctx.fillStyle = color;
    ctx.globalAlpha = props.transparency;
    ctx.fillRect(projectedX - 5, projectedY, 10, baseY - projectedY);
    
    // Bar outline
    if (props.wireframe) {
      ctx.strokeStyle = props.textColor;
      ctx.lineWidth = 1;
      ctx.strokeRect(projectedX - 5, projectedY, 10, baseY - projectedY);
    }
  });
  ctx.globalAlpha = 1;
};

const renderSurfaceChart = (ctx) => {
  const gridSize = Math.sqrt(displayData.value.length);
  
  for (let i = 0; i < gridSize - 1; i++) {
    for (let j = 0; j < gridSize - 1; j++) {
      const p1 = displayData.value[i * gridSize + j];
      const p2 = displayData.value[i * gridSize + (j + 1)];
      const p3 = displayData.value[(i + 1) * gridSize + j];
      const p4 = displayData.value[(i + 1) * gridSize + (j + 1)];
      
      if (!p1 || !p2 || !p3 || !p4) continue;
      
      // Create quad
      ctx.beginPath();
      ctx.moveTo(project3DX(p1.x, p1.y, p1.z), project3DY(p1.x, p1.y, p1.z));
      ctx.lineTo(project3DX(p2.x, p2.y, p2.z), project3DY(p2.x, p2.y, p2.z));
      ctx.lineTo(project3DX(p4.x, p4.y, p4.z), project3DY(p4.x, p4.y, p4.z));
      ctx.lineTo(project3DX(p3.x, p3.y, p3.z), project3DY(p3.x, p3.y, p3.z));
      ctx.closePath();
      
      // Color based on average z
      const avgZ = (p1.z + p2.z + p3.z + p4.z) / 4;
      const intensity = (avgZ + 5) / 10;
      ctx.fillStyle = `hsl(${240 + intensity * 120}, 70%, 60%)`;
      ctx.globalAlpha = props.transparency;
      ctx.fill();
      
      if (props.wireframe) {
        ctx.strokeStyle = props.textColor;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
  ctx.globalAlpha = 1;
};

const renderScatterChart = (ctx) => {
  displayData.value.forEach(point => {
    const projectedX = project3DX(point.x, point.y, point.z);
    const projectedY = project3DY(point.x, point.y, point.z);
    const size = 3 + (point.z + 5) / 2; // Size based on z value
    
    ctx.beginPath();
    ctx.arc(projectedX, projectedY, size, 0, Math.PI * 2);
    
    // Color based on z value
    const intensity = (point.z + 5) / 10;
    ctx.fillStyle = `hsl(${240 + intensity * 120}, 70%, 60%)`;
    ctx.globalAlpha = props.transparency;
    ctx.fill();
    
    if (props.wireframe) {
      ctx.strokeStyle = props.textColor;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  });
  ctx.globalAlpha = 1;
};

const renderLineChart = (ctx) => {
  if (displayData.value.length < 2) return;
  
  ctx.strokeStyle = props.primaryColor;
  ctx.lineWidth = 2;
  ctx.globalAlpha = props.transparency;
  
  ctx.beginPath();
  displayData.value.forEach((point, index) => {
    const projectedX = project3DX(point.x, point.y, point.z);
    const projectedY = project3DY(point.x, point.y, point.z);
    
    if (index === 0) {
      ctx.moveTo(projectedX, projectedY);
    } else {
      ctx.lineTo(projectedX, projectedY);
    }
  });
  ctx.stroke();
  ctx.globalAlpha = 1;
};

const renderAxes = (ctx) => {
  ctx.strokeStyle = props.textColor;
  ctx.lineWidth = 1;
  ctx.globalAlpha = 0.5;
  
  // X axis
  ctx.beginPath();
  ctx.moveTo(project3DX(-8, 0, 0), project3DY(-8, 0, 0));
  ctx.lineTo(project3DX(8, 0, 0), project3DY(8, 0, 0));
  ctx.stroke();
  
  // Y axis
  ctx.beginPath();
  ctx.moveTo(project3DX(0, -8, 0), project3DY(0, -8, 0));
  ctx.lineTo(project3DX(0, 8, 0), project3DY(0, 8, 0));
  ctx.stroke();
  
  // Z axis
  ctx.beginPath();
  ctx.moveTo(project3DX(0, 0, -5), project3DY(0, 0, -5));
  ctx.lineTo(project3DX(0, 0, 5), project3DY(0, 0, 5));
  ctx.stroke();
  
  ctx.globalAlpha = 1;
};

// 3D to 2D projection
const project3DX = (x, y, z) => {
  const rotX = rotation.value.x * Math.PI / 180;
  const rotY = rotation.value.y * Math.PI / 180;
  
  // Rotate around Y axis
  const x1 = x * Math.cos(rotY) - z * Math.sin(rotY);
  const z1 = x * Math.sin(rotY) + z * Math.cos(rotY);
  
  // Rotate around X axis
  const y1 = y * Math.cos(rotX) - z1 * Math.sin(rotX);
  
  return x1 * 8; // Scale factor
};

const project3DY = (x, y, z) => {
  const rotX = rotation.value.x * Math.PI / 180;
  const rotY = rotation.value.y * Math.PI / 180;
  
  // Rotate around Y axis
  const z1 = x * Math.sin(rotY) + z * Math.cos(rotY);
  
  // Rotate around X axis
  const y1 = y * Math.cos(rotX) - z1 * Math.sin(rotX);
  const z2 = y * Math.sin(rotX) + z1 * Math.cos(rotX);
  
  return -y1 * 8 - z2 * 2; // Scale and perspective
};

// Event handlers
const handleMouseDown = (e) => {
  if (!props.interactive) return;
  isDragging.value = true;
  lastMousePos.value = { x: e.clientX, y: e.clientY };
};

const handleMouseMove = (e) => {
  if (!props.interactive || !isDragging.value) return;
  
  const deltaX = e.clientX - lastMousePos.value.x;
  const deltaY = e.clientY - lastMousePos.value.y;
  
  rotation.value.y += deltaX * 0.5;
  rotation.value.x += deltaY * 0.5;
  
  lastMousePos.value = { x: e.clientX, y: e.clientY };
  renderScene();
};

const handleMouseUp = () => {
  isDragging.value = false;
};

const handleWheel = (e) => {
  if (!props.interactive) return;
  e.preventDefault();
  
  const delta = e.deltaY * 0.001;
  zoom.value = Math.max(0.1, Math.min(3, zoom.value - delta));
  renderScene();
};

const changeChartType = (type) => {
  emit('chartTypeChange', type);
  renderScene();
};

// Initialize and cleanup
onMounted(async () => {
  await nextTick();
  setTimeout(() => {
    isLoading.value = false;
    renderScene();
  }, 500);
});

// Watch for changes
watch([() => props.chartType, () => props.data, () => props.theme], renderScene);
watch([canvasWidth, canvasHeight], renderScene);

// Animation loop
let animationFrame;
const animate = () => {
  if (props.animated && !isDragging.value) {
    rotation.value.y += 0.5;
    renderScene();
  }
  animationFrame = requestAnimationFrame(animate);
};

onMounted(() => {
  if (props.animated) {
    animate();
  }
});

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
  }
});
</script>
