<template>
  <!-- Documentation Mode -->
  <div v-if="isDocs" class="DUIMX-docs prose prose-purple max-w-none">
    <div class="mb-6 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4">
      <h2 class="mb-2 text-2xl font-bold text-purple-300">📊 DUIMX Dashboard</h2>
      <p class="text-purple-200">A comprehensive dashboard showcasing multiple DUIMX components working together in harmony.</p>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">✨ Features</h3>
    <ul class="mb-6 space-y-2 text-purple-200">
      <li>📈 <strong>Live Statistics</strong> - Real-time component usage metrics</li>
      <li>🎯 <strong>Interactive Widgets</strong> - Buttons, toggles, progress bars, and more</li>
      <li>🔍 <strong>Search Integration</strong> - Built-in search functionality</li>
      <li>🎬 <strong>Media Browser</strong> - Embedded movie browser</li>
      <li>⚙️ <strong>Control Panel</strong> - Theme switching and settings</li>
      <li>📱 <strong>Responsive Layout</strong> - Adapts to all screen sizes</li>
    </ul>

    <div class="mb-6 rounded-lg border border-purple-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4">
      <p class="text-center text-purple-200">
        <strong>🚀 Use Case:</strong> Perfect for admin panels, analytics dashboards, or showcasing multiple UI components
      </p>
    </div>
  </div>

  <!-- Component Mode -->
  <div v-else class="dashboard-container" :style="containerStyles">
    <!-- Version Display -->
    <!-- <div class="absolute top-2 left-2 z-20 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
      <span class="text-xs text-white/80">v0.0.1</span>
    </div> -->

    <!-- Dashboard Header -->
    <div class="dashboard-header">
      <div class="flex items-center gap-4">
        <div class="dashboard-logo">
          <span class="text-2xl">📊</span>
        </div>
        <div>
          <h1 class="text-xl font-bold text-white">DUIMX Dashboard</h1>
          <p class="text-sm text-gray-400">Component Library Showcase</p>
        </div>
      </div>
      
      <!-- Header Controls -->
      <div class="flex items-center gap-3">
        <DimSearchBar 
          :width="200" 
          :height="36"
          :roundness="roundness"
          :primaryColor="primaryColor"
          :theme="theme"
          placeholder="Search anything..."
          class="header-search"
        />
        <DimThemeSwitch 
          :theme="theme"
          :primaryColor="primaryColor"
          @update:theme="$emit('update:theme', $event)"
        />
      </div>
    </div>

    <!-- Dashboard Grid -->
    <div class="dashboard-grid">
      <!-- Statistics Cards -->
      <div class="stats-row">
        <DimCard 
          v-for="stat in statistics" 
          :key="stat.label"
          :width="200"
          :height="120"
          :roundness="roundness"
          :primaryColor="primaryColor"
          :theme="theme"
          variant="glass"
          class="stat-card"
        >
          <div class="stat-content">
            <div class="stat-icon">{{ stat.icon }}</div>
            <div class="stat-info">
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </DimCard>
      </div>

      <!-- Interactive Controls Section -->
      <div class="controls-section">
        <h3 class="section-title">🎮 Interactive Controls</h3>
        <div class="controls-grid">
          <!-- Button Showcase -->
          <div class="control-group">
            <h4 class="control-title">Buttons</h4>
            <div class="button-row">
              <DimButton 
                :roundness="roundness"
                :primaryColor="primaryColor"
                :theme="theme"
                :width="120"
                :height="40"
              >
                Standard
              </DimButton>
              <DimEnhancedButton
                :roundness="roundness"
                :primaryColor="primaryColor"
                :theme="theme"
                :width="120"
                :height="40"
                animationType="hover-lift"
              >
                Enhanced
              </DimEnhancedButton>
            </div>
          </div>

          <!-- Toggle Controls -->
          <div class="control-group">
            <h4 class="control-title">Toggles</h4>
            <div class="toggle-row">
              <DimToggleSwitch 
                :theme="theme"
                :primaryColor="primaryColor"
                v-model="toggleState1"
              />
              <DimNeumorphicToggle
                :theme="theme"
                :primaryColor="primaryColor"
                v-model="toggleState2"
              />
            </div>
          </div>

          <!-- Progress Indicators -->
          <div class="control-group">
            <h4 class="control-title">Progress</h4>
            <div class="progress-row">
              <DimProgressBar
                :value="progressValue"
                :theme="theme"
                :primaryColor="primaryColor"
                :width="200"
                :showLabel="true"
                :animated="true"
              />
              <DimLoader
                type="spin"
                :size="32"
                :primaryColor="primaryColor"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Media Browser Section -->
      <div class="media-section">
        <h3 class="section-title">🎬 Media Browser</h3>
        <DimMovieBrowser
          :width="width - 40"
          :height="400"
          :roundness="roundness"
          :primaryColor="primaryColor"
          :theme="theme"
          :pageSize="8"
          compact
        />
      </div>

      <!-- Data Visualization -->
      <div class="visualization-section">
        <h3 class="section-title">📈 Data Visualization</h3>
        <div class="viz-grid">
          <DimGraph3D
            :width="300"
            :height="200"
            :theme="theme"
            :primaryColor="primaryColor"
            :animated="true"
          />
          <div class="metrics-panel">
            <h4 class="control-title">System Metrics</h4>
            <div class="metrics-list">
              <div v-for="metric in systemMetrics" :key="metric.name" class="metric-item">
                <span class="metric-name">{{ metric.name }}</span>
                <DimProgressBar
                  :value="metric.value"
                  :width="120"
                  :height="8"
                  :theme="theme"
                  :primaryColor="metric.color"
                  :showLabel="false"
                />
                <span class="metric-value">{{ metric.value }}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- User Interaction Panel -->
      <div class="interaction-section">
        <h3 class="section-title">👤 User Interaction</h3>
        <div class="interaction-grid">
          <DimUserProfileCard
            :width="250"
            :theme="theme"
            :primaryColor="primaryColor"
            :roundness="roundness"
          />
          <div class="interaction-controls">
            <DimEmojiRating
              :theme="theme"
              :primaryColor="primaryColor"
              v-model="userRating"
            />
            <DimTooltip
              text="This dashboard showcases all DUIMX components working together!"
              position="top"
              :theme="theme"
            >
              <DimButton
                :theme="theme"
                :primaryColor="primaryColor"
                :width="150"
                :height="36"
              >
                Hover for Info
              </DimButton>
            </DimTooltip>
          </div>
        </div>
      </div>
    </div>

    <!-- Dashboard Footer -->
    <div class="dashboard-footer">
      <div class="footer-stats">
        <span class="footer-stat">{{ components.length }} Components</span>
        <span class="footer-stat">{{ activeUsers }} Active Users</span>
        <span class="footer-stat">v{{ version }}</span>
      </div>
      <div class="footer-actions">
        <button @click="refreshDashboard" class="refresh-btn">
          🔄 Refresh
        </button>
        <button @click="exportData" class="export-btn">
          📊 Export
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import DimButton from './DimButton.vue';
import DimEnhancedButton from './DimEnhancedButton.vue';
import DimCard from './DimCard.vue';
import DimSearchBar from './DimSearchBar.vue';
import DimThemeSwitch from './DimThemeSwitch.vue';
import DimToggleSwitch from './DimToggleSwitch.vue';
import DimNeumorphicToggle from './DimNeumorphicToggle.vue';
import DimProgressBar from './DimProgressBar.vue';
import DimLoader from './DimLoader.vue';
import DimMovieBrowser from './DimMovieBrowser.vue';
import DimGraph3D from './DimGraph3D.vue';
import DimUserProfileCard from './DimUserProfileCard.vue';
import DimEmojiRating from './DimEmojiRating.vue';
import DimTooltip from './DimTooltip.vue';

const props = defineProps({
  // Universal DUIMX Props
  roundness: { type: Number, default: 12 },
  primaryColor: { type: String, default: '#6366f1' },
  bgColor: { type: String, default: '#1e293b' },
  textColor: { type: String, default: '#e2e8f0' },
  fontFamily: { type: String, default: 'inherit' },
  width: { type: Number, default: 1000 },
  height: { type: Number, default: 800 },
  padding: { type: Number, default: 24 },
  margin: { type: Number, default: 8 },
  theme: { type: String, default: 'dark' },
  compact: { type: Boolean, default: false },
  isDocs: { type: Boolean, default: false },
  
  // Dashboard-specific props
  refreshInterval: { type: Number, default: 30000 },
  showMetrics: { type: Boolean, default: true },
  showMediaBrowser: { type: Boolean, default: true }
});

const emit = defineEmits(['update:theme', 'refresh', 'export']);

// Reactive state
const toggleState1 = ref(true);
const toggleState2 = ref(false);
const progressValue = ref(75);
const userRating = ref(4);
const activeUsers = ref(142);
const version = ref('1.1.0');

// Dashboard data
const statistics = ref([
  { icon: '🎨', label: 'Components', value: '30+', color: '#8b5cf6' },
  { icon: '👥', label: 'Users', value: '1.2K', color: '#10b981' },
  { icon: '⚡', label: 'Performance', value: '98%', color: '#f59e0b' },
  { icon: '🚀', label: 'Uptime', value: '99.9%', color: '#ef4444' }
]);

const systemMetrics = ref([
  { name: 'CPU Usage', value: 45, color: '#8b5cf6' },
  { name: 'Memory', value: 67, color: '#10b981' },
  { name: 'Storage', value: 23, color: '#f59e0b' },
  { name: 'Network', value: 89, color: '#ef4444' }
]);

const components = ref([
  'Button', 'Card', 'Modal', 'Tooltip', 'SearchBar', 'ProgressBar',
  'Loader', 'Toggle', 'Carousel', 'MovieBrowser', 'Graph3D', 'UserProfile'
]);

// Computed properties
const containerStyles = computed(() => ({
  fontFamily: props.fontFamily,
  width: `${props.width}px`,
  minHeight: `${props.height}px`,
  padding: `${props.padding}px`,
  margin: `${props.margin}px`,
  backgroundColor: props.bgColor,
  color: props.textColor,
  borderRadius: `${props.roundness}px`
}));

// Methods
const refreshDashboard = () => {
  // Simulate data refresh
  progressValue.value = Math.floor(Math.random() * 100);
  activeUsers.value = Math.floor(Math.random() * 1000) + 100;
  
  systemMetrics.value.forEach(metric => {
    metric.value = Math.floor(Math.random() * 100);
  });
  
  emit('refresh');
};

const exportData = () => {
  const data = {
    statistics: statistics.value,
    metrics: systemMetrics.value,
    timestamp: new Date().toISOString()
  };
  
  console.log('Exporting dashboard data:', data);
  emit('export', data);
};

// Auto-refresh simulation
let refreshTimer;

onMounted(() => {
  if (props.refreshInterval > 0) {
    refreshTimer = setInterval(refreshDashboard, props.refreshInterval);
  }
});

// Cleanup
import { onUnmounted } from 'vue';
onUnmounted(() => {
  if (refreshTimer) {
    clearInterval(refreshTimer);
  }
});
</script>

<style scoped>
.dashboard-container {
  position: relative;
  background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
  border: 1px solid rgba(148, 163, 184, 0.2);
  overflow: hidden;
}

.dashboard-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background: rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(148, 163, 184, 0.2);
  backdrop-filter: blur(10px);
}

.dashboard-logo {
  width: 3rem;
  height: 3rem;
  background: linear-gradient(45deg, #8b5cf6, #ec4899);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-search {
  min-width: 200px;
}

.dashboard-grid {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.stat-card {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
}

.stat-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}

.stat-icon {
  font-size: 2rem;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}

.stat-label {
  font-size: 0.875rem;
  color: #94a3b8;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(139, 92, 246, 0.3);
}

.controls-section {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 1.5rem;
}

.controls-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.control-group {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 0.75rem;
  padding: 1rem;
}

.control-title {
  font-size: 1rem;
  font-weight: 500;
  color: #d8b4fe;
  margin-bottom: 0.75rem;
}

.button-row, .toggle-row, .progress-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.media-section, .visualization-section, .interaction-section {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 1.5rem;
}

.viz-grid, .interaction-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  align-items: start;
}

.metrics-panel {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 0.75rem;
  padding: 1rem;
}

.metrics-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.metric-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
}

.metric-name {
  width: 80px;
  color: #94a3b8;
}

.metric-value {
  width: 40px;
  text-align: right;
  color: white;
  font-weight: 500;
}

.interaction-controls {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.dashboard-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background: rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(148, 163, 184, 0.2);
}

.footer-stats {
  display: flex;
  gap: 1.5rem;
}

.footer-stat {
  font-size: 0.875rem;
  color: #94a3b8;
}

.footer-actions {
  display: flex;
  gap: 0.75rem;
}

.refresh-btn, .export-btn {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  background: rgba(139, 92, 246, 0.2);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 0.5rem;
  color: #d8b4fe;
  cursor: pointer;
  transition: all 0.2s;
}

.refresh-btn:hover, .export-btn:hover {
  background: rgba(139, 92, 246, 0.3);
  transform: translateY(-1px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .dashboard-header {
    flex-direction: column;
    gap: 1rem;
  }
  
  .stats-row {
    grid-template-columns: 1fr;
  }
  
  .controls-grid, .viz-grid, .interaction-grid {
    grid-template-columns: 1fr;
  }
  
  .header-search {
    min-width: 100%;
  }
}
</style>
