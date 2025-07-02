/**
 * DUIMX Advanced Analytics Dashboard
 * Real-time metrics, performance monitoring, and user interaction analytics
 */

<template>
  <div class="analytics-dashboard">
    <!-- Dashboard Header -->
    <div class="dashboard-header">
      <div class="header-content">
        <div class="header-info">
          <h2 class="dashboard-title">📊 DUIMX Analytics</h2>
          <p class="dashboard-subtitle">Real-time system metrics and performance insights</p>
        </div>
        <div class="header-controls">
          <button @click="refreshData" class="refresh-btn" :disabled="isRefreshing">
            <font-awesome-icon :icon="['fas', 'sync-alt']" :class="{ 'animate-spin': isRefreshing }" />
            {{ isRefreshing ? 'Refreshing...' : 'Refresh' }}
          </button>
          <select v-model="timeRange" @change="updateTimeRange" class="time-range-select">
            <option value="1h">Last Hour</option>
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
          </select>
          <button @click="exportAnalytics" class="export-btn">
            <font-awesome-icon :icon="['fas', 'download']" />
            Export
          </button>
        </div>
      </div>
    </div>

    <!-- Key Metrics Grid -->
    <div class="metrics-grid">
      <div class="metric-card">
        <div class="metric-header">
          <font-awesome-icon :icon="['fas', 'eye']" class="metric-icon" />
          <span class="metric-label">Total Views</span>
        </div>
        <div class="metric-value">{{ formatNumber(metrics.totalViews) }}</div>
        <div class="metric-change" :class="getChangeClass(metrics.viewsChange)">
          <font-awesome-icon :icon="getChangeIcon(metrics.viewsChange)" />
          {{ Math.abs(metrics.viewsChange) }}%
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-header">
          <font-awesome-icon :icon="['fas', 'mouse-pointer']" class="metric-icon" />
          <span class="metric-label">Component Interactions</span>
        </div>
        <div class="metric-value">{{ formatNumber(metrics.interactions) }}</div>
        <div class="metric-change" :class="getChangeClass(metrics.interactionsChange)">
          <font-awesome-icon :icon="getChangeIcon(metrics.interactionsChange)" />
          {{ Math.abs(metrics.interactionsChange) }}%
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-header">
          <font-awesome-icon :icon="['fas', 'tachometer-alt']" class="metric-icon" />
          <span class="metric-label">Avg Performance</span>
        </div>
        <div class="metric-value">{{ metrics.avgPerformance }}ms</div>
        <div class="metric-change" :class="getChangeClass(-metrics.performanceChange)">
          <font-awesome-icon :icon="getChangeIcon(-metrics.performanceChange)" />
          {{ Math.abs(metrics.performanceChange) }}%
        </div>
      </div>

      <div class="metric-card">
        <div class="metric-header">
          <font-awesome-icon :icon="['fas', 'code-branch']" class="metric-icon" />
          <span class="metric-label">Code Exports</span>
        </div>
        <div class="metric-value">{{ formatNumber(metrics.exports) }}</div>
        <div class="metric-change" :class="getChangeClass(metrics.exportsChange)">
          <font-awesome-icon :icon="getChangeIcon(metrics.exportsChange)" />
          {{ Math.abs(metrics.exportsChange) }}%
        </div>
      </div>
    </div>

    <!-- Charts Grid -->
    <div class="charts-grid">
      <!-- Usage Trends Chart -->
      <div class="chart-container">
        <div class="chart-header">
          <h3 class="chart-title">📈 Usage Trends</h3>
          <div class="chart-controls">
            <select v-model="usageChartType" class="chart-select">
              <option value="line">Line Chart</option>
              <option value="bar">Bar Chart</option>
              <option value="area">Area Chart</option>
            </select>
          </div>
        </div>
        <div class="chart-content">
          <canvas ref="usageChart" class="chart-canvas"></canvas>
        </div>
      </div>

      <!-- Component Popularity -->
      <div class="chart-container">
        <div class="chart-header">
          <h3 class="chart-title">🏆 Most Popular Components</h3>
        </div>
        <div class="chart-content">
          <div class="popularity-list">
            <div v-for="(component, index) in popularComponents" :key="component.name" 
                 class="popularity-item" :class="{ 'top-component': index === 0 }">
              <div class="component-rank">{{ index + 1 }}</div>
              <div class="component-info">
                <span class="component-name">{{ component.name }}</span>
                <span class="component-category">{{ component.category }}</span>
              </div>
              <div class="component-stats">
                <span class="usage-count">{{ formatNumber(component.usage) }}</span>
                <div class="usage-bar">
                  <div class="usage-fill" :style="{ width: component.percentage + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Performance Metrics -->
      <div class="chart-container">
        <div class="chart-header">
          <h3 class="chart-title">⚡ Performance Overview</h3>
        </div>
        <div class="chart-content">
          <div class="performance-grid">
            <div class="perf-metric">
              <div class="perf-label">Render Time</div>
              <div class="perf-value">{{ performanceMetrics.renderTime }}ms</div>
              <div class="perf-gauge">
                <div class="gauge-fill" :style="{ width: getGaugeWidth(performanceMetrics.renderTime, 100) + '%' }"></div>
              </div>
            </div>
            <div class="perf-metric">
              <div class="perf-label">Memory Usage</div>
              <div class="perf-value">{{ formatBytes(performanceMetrics.memory) }}</div>
              <div class="perf-gauge">
                <div class="gauge-fill" :style="{ width: getGaugeWidth(performanceMetrics.memory, 50000000) + '%' }"></div>
              </div>
            </div>
            <div class="perf-metric">
              <div class="perf-label">Bundle Size</div>
              <div class="perf-value">{{ formatBytes(performanceMetrics.bundleSize) }}</div>
              <div class="perf-gauge">
                <div class="gauge-fill" :style="{ width: getGaugeWidth(performanceMetrics.bundleSize, 1000000) + '%' }"></div>
              </div>
            </div>
            <div class="perf-metric">
              <div class="perf-label">Load Time</div>
              <div class="perf-value">{{ performanceMetrics.loadTime }}ms</div>
              <div class="perf-gauge">
                <div class="gauge-fill" :style="{ width: getGaugeWidth(performanceMetrics.loadTime, 2000) + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- User Behavior Heatmap -->
      <div class="chart-container full-width">
        <div class="chart-header">
          <h3 class="chart-title">🔥 Interaction Heatmap</h3>
          <div class="chart-controls">
            <button @click="toggleHeatmapMode" class="toggle-btn">
              {{ heatmapMode === 'clicks' ? 'Switch to Hover' : 'Switch to Clicks' }}
            </button>
          </div>
        </div>
        <div class="chart-content">
          <div class="heatmap-container">
            <div class="heatmap-grid">
              <div v-for="(cell, index) in heatmapData" :key="index" 
                   class="heatmap-cell" 
                   :style="{ opacity: cell.intensity }"
                   :title="`${cell.component}: ${cell.count} ${heatmapMode}`">
              </div>
            </div>
            <div class="heatmap-legend">
              <span class="legend-label">Low</span>
              <div class="legend-gradient"></div>
              <span class="legend-label">High</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Real-time Activity Feed -->
    <div class="activity-section">
      <div class="activity-header">
        <h3 class="activity-title">🔴 Real-time Activity</h3>
        <div class="activity-controls">
          <button @click="toggleActivityStream" class="stream-toggle">
            {{ isStreamActive ? 'Pause Stream' : 'Resume Stream' }}
          </button>
          <button @click="clearActivity" class="clear-btn">Clear</button>
        </div>
      </div>
      <div class="activity-feed">
        <div v-for="activity in recentActivity" :key="activity.id" 
             class="activity-item" :class="getActivityClass(activity.type)">
          <div class="activity-icon">
            <font-awesome-icon :icon="getActivityIcon(activity.type)" />
          </div>
          <div class="activity-content">
            <div class="activity-message">{{ activity.message }}</div>
            <div class="activity-meta">
              <span class="activity-time">{{ formatTime(activity.timestamp) }}</span>
              <span class="activity-component">{{ activity.component }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Analytics Export Modal -->
    <div v-if="showExportModal" class="export-modal-overlay" @click="closeExportModal">
      <div class="export-modal" @click.stop>
        <div class="modal-header">
          <h3>📊 Export Analytics Data</h3>
          <button @click="closeExportModal" class="modal-close">×</button>
        </div>
        <div class="modal-content">
          <div class="export-options">
            <label class="export-option">
              <input type="checkbox" v-model="exportOptions.metrics" />
              Key Metrics
            </label>
            <label class="export-option">
              <input type="checkbox" v-model="exportOptions.usage" />
              Usage Data
            </label>
            <label class="export-option">
              <input type="checkbox" v-model="exportOptions.performance" />
              Performance Data
            </label>
            <label class="export-option">
              <input type="checkbox" v-model="exportOptions.activity" />
              Activity Log
            </label>
          </div>
          <div class="export-format">
            <label>Export Format:</label>
            <select v-model="exportFormat">
              <option value="json">JSON</option>
              <option value="csv">CSV</option>
              <option value="pdf">PDF Report</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button @click="closeExportModal" class="cancel-btn">Cancel</button>
          <button @click="performExport" class="export-confirm-btn">Export Data</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, computed, nextTick } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Props
const props = defineProps({
  isDocs: { type: Boolean, default: false },
  theme: { type: String, default: 'dark' },
  autoRefresh: { type: Boolean, default: true },
  refreshInterval: { type: Number, default: 30000 }
});

// Reactive data
const metrics = reactive({
  totalViews: 15420,
  viewsChange: 12.5,
  interactions: 3240,
  interactionsChange: 8.3,
  avgPerformance: 24,
  performanceChange: -5.2,
  exports: 892,
  exportsChange: 15.7
});

const performanceMetrics = reactive({
  renderTime: 16,
  memory: 25600000,
  bundleSize: 485000,
  loadTime: 1240
});

const popularComponents = ref([
  { name: 'DimButton', category: 'Interactive', usage: 5420, percentage: 100 },
  { name: 'DimCard', category: 'Layout', usage: 4180, percentage: 77 },
  { name: 'DimModal', category: 'Overlay', usage: 3560, percentage: 66 },
  { name: 'DimSearchBar', category: 'Input', usage: 2890, percentage: 53 },
  { name: 'DimLoader', category: 'Feedback', usage: 2340, percentage: 43 }
]);

const recentActivity = ref([]);
const heatmapData = ref([]);

// Component state
const isRefreshing = ref(false);
const timeRange = ref('24h');
const usageChartType = ref('line');
const heatmapMode = ref('clicks');
const isStreamActive = ref(true);
const showExportModal = ref(false);

const exportOptions = reactive({
  metrics: true,
  usage: true,
  performance: true,
  activity: false
});

const exportFormat = ref('json');

// Chart references
const usageChart = ref(null);

// Computed properties
const activityCount = computed(() => recentActivity.value.length);

// Methods
const formatNumber = (num) => {
  return new Intl.NumberFormat().format(num);
};

const formatBytes = (bytes) => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  if (bytes === 0) return '0 Bytes';
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
};

const formatTime = (timestamp) => {
  return new Date(timestamp).toLocaleTimeString();
};

const getChangeClass = (change) => {
  return change > 0 ? 'positive' : change < 0 ? 'negative' : 'neutral';
};

const getChangeIcon = (change) => {
  return change > 0 ? ['fas', 'arrow-up'] : change < 0 ? ['fas', 'arrow-down'] : ['fas', 'minus'];
};

const getGaugeWidth = (value, max) => {
  return Math.min((value / max) * 100, 100);
};

const getActivityClass = (type) => {
  const classes = {
    'component-load': 'activity-load',
    'user-interaction': 'activity-interaction',
    'code-export': 'activity-export',
    'performance-alert': 'activity-alert',
    'error': 'activity-error'
  };
  return classes[type] || 'activity-default';
};

const getActivityIcon = (type) => {
  const icons = {
    'component-load': ['fas', 'cube'],
    'user-interaction': ['fas', 'mouse-pointer'],
    'code-export': ['fas', 'download'],
    'performance-alert': ['fas', 'exclamation-triangle'],
    'error': ['fas', 'times-circle']
  };
  return icons[type] || ['fas', 'info-circle'];
};

// Data management
const refreshData = async () => {
  if (isRefreshing.value) return;
  
  isRefreshing.value = true;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Update metrics with simulated data
    updateMetrics();
    updatePerformanceMetrics();
    updatePopularComponents();
    updateHeatmapData();
    
  } catch (error) {
    console.error('Failed to refresh analytics data:', error);
  } finally {
    isRefreshing.value = false;
  }
};

const updateMetrics = () => {
  // Simulate metric changes
  metrics.totalViews += Math.floor(Math.random() * 100);
  metrics.interactions += Math.floor(Math.random() * 20);
  metrics.exports += Math.floor(Math.random() * 5);
  
  // Update change percentages
  metrics.viewsChange = (Math.random() - 0.5) * 20;
  metrics.interactionsChange = (Math.random() - 0.5) * 15;
  metrics.performanceChange = (Math.random() - 0.5) * 10;
  metrics.exportsChange = (Math.random() - 0.5) * 25;
};

const updatePerformanceMetrics = () => {
  performanceMetrics.renderTime = 10 + Math.random() * 20;
  performanceMetrics.memory = 20000000 + Math.random() * 10000000;
  performanceMetrics.loadTime = 800 + Math.random() * 800;
};

const updatePopularComponents = () => {
  popularComponents.value.forEach(component => {
    component.usage += Math.floor(Math.random() * 10);
  });
  
  // Recalculate percentages
  const maxUsage = Math.max(...popularComponents.value.map(c => c.usage));
  popularComponents.value.forEach(component => {
    component.percentage = (component.usage / maxUsage) * 100;
  });
};

const updateHeatmapData = () => {
  heatmapData.value = Array.from({ length: 100 }, (_, index) => ({
    component: `Component-${index % 10}`,
    count: Math.floor(Math.random() * 50),
    intensity: Math.random()
  }));
};

const updateTimeRange = () => {
  refreshData();
};

const toggleHeatmapMode = () => {
  heatmapMode.value = heatmapMode.value === 'clicks' ? 'hover' : 'clicks';
  updateHeatmapData();
};

const addActivity = (type, message, component = '') => {
  const activity = {
    id: Date.now() + Math.random(),
    type,
    message,
    component,
    timestamp: Date.now()
  };
  
  recentActivity.value.unshift(activity);
  
  // Keep only last 50 activities
  if (recentActivity.value.length > 50) {
    recentActivity.value = recentActivity.value.slice(0, 50);
  }
};

const toggleActivityStream = () => {
  isStreamActive.value = !isStreamActive.value;
};

const clearActivity = () => {
  recentActivity.value = [];
};

// Export functionality
const exportAnalytics = () => {
  showExportModal.value = true;
};

const closeExportModal = () => {
  showExportModal.value = false;
};

const performExport = () => {
  const data = {};
  
  if (exportOptions.metrics) {
    data.metrics = { ...metrics };
  }
  
  if (exportOptions.usage) {
    data.popularComponents = [...popularComponents.value];
  }
  
  if (exportOptions.performance) {
    data.performance = { ...performanceMetrics };
  }
  
  if (exportOptions.activity) {
    data.activity = [...recentActivity.value];
  }
  
  // Export based on format
  switch (exportFormat.value) {
    case 'json':
      downloadJSON(data);
      break;
    case 'csv':
      downloadCSV(data);
      break;
    case 'pdf':
      downloadPDF(data);
      break;
  }
  
  closeExportModal();
};

const downloadJSON = (data) => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `DUIMX-analytics-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
};

const downloadCSV = (data) => {
  // Simple CSV implementation
  let csv = 'Metric,Value\n';
  if (data.metrics) {
    Object.entries(data.metrics).forEach(([key, value]) => {
      csv += `${key},${value}\n`;
    });
  }
  
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `DUIMX-analytics-${new Date().toISOString().split('T')[0]}.csv`;
  a.click();
  URL.revokeObjectURL(url);
};

const downloadPDF = (data) => {
  // PDF generation would require a library like jsPDF
  console.log('PDF export would be implemented with jsPDF library');
};

// Simulate real-time activity
const simulateActivity = () => {
  if (!isStreamActive.value) return;
  
  const activities = [
    { type: 'component-load', message: 'Component loaded', component: 'DimButton' },
    { type: 'user-interaction', message: 'User clicked button', component: 'DimButton' },
    { type: 'code-export', message: 'Code exported as Vue SFC', component: 'DimCard' },
    { type: 'performance-alert', message: 'Slow render detected', component: 'DimGraph3D' }
  ];
  
  const randomActivity = activities[Math.floor(Math.random() * activities.length)];
  addActivity(randomActivity.type, randomActivity.message, randomActivity.component);
};

// Lifecycle hooks
onMounted(() => {
  refreshData();
  
  // Set up auto-refresh
  if (props.autoRefresh) {
    setInterval(refreshData, props.refreshInterval);
  }
  
  // Set up activity simulation
  setInterval(simulateActivity, 3000);
  
  // Initialize with some sample activities
  setTimeout(() => {
    addActivity('component-load', 'Playground initialized', 'DUIMX');
    addActivity('user-interaction', 'User selected DimButton', 'DimButton');
  }, 1000);
});
</script>

<style scoped>
.analytics-dashboard {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #e2e8f0;
  padding: 1.5rem;
}

.dashboard-header {
  margin-bottom: 2rem;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.dashboard-title {
  font-size: 2rem;
  font-weight: bold;
  background: linear-gradient(135deg, #8b5cf6, #06b6d4);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
}

.dashboard-subtitle {
  color: #94a3b8;
  margin: 0.25rem 0 0 0;
}

.header-controls {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.refresh-btn, .export-btn, .toggle-btn, .stream-toggle, .clear-btn {
  padding: 0.5rem 1rem;
  border: 1px solid #475569;
  border-radius: 0.5rem;
  background: #334155;
  color: #e2e8f0;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.refresh-btn:hover, .export-btn:hover, .toggle-btn:hover, .stream-toggle:hover, .clear-btn:hover {
  background: #475569;
  border-color: #8b5cf6;
}

.refresh-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.time-range-select, .chart-select {
  padding: 0.5rem;
  border: 1px solid #475569;
  border-radius: 0.5rem;
  background: #334155;
  color: #e2e8f0;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.metric-card {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  border: 1px solid #475569;
  border-radius: 1rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

.metric-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #8b5cf6, #06b6d4);
}

.metric-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.metric-icon {
  color: #8b5cf6;
}

.metric-label {
  color: #94a3b8;
  font-size: 0.875rem;
}

.metric-value {
  font-size: 2rem;
  font-weight: bold;
  color: #e2e8f0;
  margin-bottom: 0.5rem;
}

.metric-change {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
}

.metric-change.positive {
  color: #10b981;
}

.metric-change.negative {
  color: #ef4444;
}

.metric-change.neutral {
  color: #94a3b8;
}

.charts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.chart-container {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  border: 1px solid #475569;
  border-radius: 1rem;
  padding: 1.5rem;
}

.chart-container.full-width {
  grid-column: 1 / -1;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.chart-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #e2e8f0;
  margin: 0;
}

.chart-content {
  min-height: 200px;
}

.chart-canvas {
  width: 100%;
  height: 200px;
}

.popularity-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.popularity-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #1e293b;
  border-radius: 0.5rem;
  border: 1px solid #374151;
  transition: all 0.2s;
}

.popularity-item.top-component {
  border-color: #fbbf24;
  background: linear-gradient(135deg, #fbbf24/10, #1e293b);
}

.popularity-item:hover {
  border-color: #8b5cf6;
  transform: translateY(-2px);
}

.component-rank {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background: #8b5cf6;
  color: white;
  border-radius: 50%;
  font-weight: bold;
}

.component-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.component-name {
  font-weight: 600;
  color: #e2e8f0;
}

.component-category {
  font-size: 0.875rem;
  color: #94a3b8;
}

.component-stats {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
}

.usage-count {
  font-weight: 600;
  color: #06b6d4;
}

.usage-bar {
  width: 100px;
  height: 6px;
  background: #374151;
  border-radius: 3px;
  overflow: hidden;
}

.usage-fill {
  height: 100%;
  background: linear-gradient(90deg, #8b5cf6, #06b6d4);
  transition: width 0.3s ease;
}

.performance-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.perf-metric {
  padding: 1rem;
  background: #1e293b;
  border-radius: 0.5rem;
  border: 1px solid #374151;
}

.perf-label {
  font-size: 0.875rem;
  color: #94a3b8;
  margin-bottom: 0.5rem;
}

.perf-value {
  font-size: 1.25rem;
  font-weight: bold;
  color: #e2e8f0;
  margin-bottom: 0.5rem;
}

.perf-gauge {
  width: 100%;
  height: 4px;
  background: #374151;
  border-radius: 2px;
  overflow: hidden;
}

.gauge-fill {
  height: 100%;
  background: linear-gradient(90deg, #10b981, #fbbf24, #ef4444);
  transition: width 0.3s ease;
}

.heatmap-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.heatmap-grid {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 2px;
  aspect-ratio: 10/10;
}

.heatmap-cell {
  background: #8b5cf6;
  border-radius: 2px;
  transition: opacity 0.3s ease;
}

.heatmap-legend {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
}

.legend-label {
  font-size: 0.875rem;
  color: #94a3b8;
}

.legend-gradient {
  width: 100px;
  height: 10px;
  background: linear-gradient(90deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 1));
  border-radius: 5px;
}

.activity-section {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  border: 1px solid #475569;
  border-radius: 1rem;
  padding: 1.5rem;
}

.activity-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.activity-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #e2e8f0;
  margin: 0;
}

.activity-controls {
  display: flex;
  gap: 0.5rem;
}

.activity-feed {
  max-height: 400px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.activity-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: #1e293b;
  border-radius: 0.5rem;
  border: 1px solid #374151;
  transition: all 0.2s;
}

.activity-item:hover {
  border-color: #8b5cf6;
}

.activity-item.activity-load {
  border-left: 3px solid #06b6d4;
}

.activity-item.activity-interaction {
  border-left: 3px solid #10b981;
}

.activity-item.activity-export {
  border-left: 3px solid #8b5cf6;
}

.activity-item.activity-alert {
  border-left: 3px solid #fbbf24;
}

.activity-item.activity-error {
  border-left: 3px solid #ef4444;
}

.activity-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background: #374151;
  border-radius: 50%;
  color: #94a3b8;
  flex-shrink: 0;
}

.activity-content {
  flex: 1;
}

.activity-message {
  color: #e2e8f0;
  margin-bottom: 0.25rem;
}

.activity-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
  color: #94a3b8;
}

.export-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.export-modal {
  background: #1e293b;
  border: 1px solid #475569;
  border-radius: 1rem;
  min-width: 500px;
  max-width: 600px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #475569;
}

.modal-header h3 {
  margin: 0;
  color: #e2e8f0;
}

.modal-close {
  background: none;
  border: none;
  color: #94a3b8;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  padding: 1.5rem;
}

.export-options {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.export-option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #e2e8f0;
  cursor: pointer;
}

.export-format {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #e2e8f0;
}

.export-format select {
  padding: 0.5rem;
  border: 1px solid #475569;
  border-radius: 0.5rem;
  background: #334155;
  color: #e2e8f0;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1.5rem;
  border-top: 1px solid #475569;
}

.cancel-btn, .export-confirm-btn {
  padding: 0.5rem 1rem;
  border: 1px solid #475569;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
}

.cancel-btn {
  background: #374151;
  color: #e2e8f0;
}

.export-confirm-btn {
  background: #8b5cf6;
  color: white;
  border-color: #8b5cf6;
}

.cancel-btn:hover {
  background: #475569;
}

.export-confirm-btn:hover {
  background: #7c3aed;
}

/* Responsive design */
@media (max-width: 768px) {
  .analytics-dashboard {
    padding: 1rem;
  }
  
  .header-content {
    flex-direction: column;
    align-items: stretch;
  }
  
  .header-controls {
    justify-content: space-between;
  }
  
  .metrics-grid {
    grid-template-columns: 1fr;
  }
  
  .charts-grid {
    grid-template-columns: 1fr;
  }
  
  .export-modal {
    min-width: 90vw;
    margin: 1rem;
  }
}

/* Animations */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
