<template>
  <!-- Documentation Mode -->
  <div v-if="isDocs" class="DUIMX-docs prose prose-purple max-w-7xl min-w-7xl ">
    <div class="mb-6 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4">
      <h2 class="mb-2 text-2xl font-bold text-purple-300">🏢 DUIMX Admin Dashboard</h2>
      <p class="text-purple-200">Comprehensive admin dashboard with widgets, metrics, charts, and management tools.</p>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">✨ Features</h3>
    <ul class="mb-6 space-y-2 text-purple-200">
      <li>📊 <strong>Analytics Widgets</strong> - KPI cards, charts, and metrics</li>
      <li>📋 <strong>Data Tables</strong> - Sortable, filterable data grids</li>
      <li>🔔 <strong>Real-time Updates</strong> - Live notifications and data</li>
      <li>🎛️ <strong>Control Panels</strong> - System settings and configurations</li>
      <li>👥 <strong>User Management</strong> - User roles and permissions</li>
      <li>📱 <strong>Responsive Layout</strong> - Mobile-first design</li>
    </ul>

    <div class="mb-6 rounded-lg border border-purple-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4">
      <p class="text-center text-purple-200">
        <strong>🔗 Source Code:</strong>
        <a href="https://github.com/drazzardaq/opensource/blob/master/src/opensource/DimAdminDashboard.vue"
          target="_blank" class="text-purple-300 hover:text-purple-100 transition-colors underline">
          View on GitHub
        </a>
      </p>
    </div>
  </div>

  <!-- Component Mode -->
  <div v-else class="DUIMX-admin-dashboard" :style="containerStyles">

    <!-- Dashboard Header -->
    <div class="dashboard-header mb-6 p-4 rounded-lg" :style="headerStyles">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-xl font-bold mb-1" :style="{ color: textColor }">Admin Dashboard</h2>
          <p class="text-sm opacity-75" :style="{ color: textColor }">Welcome back, Administrator</p>
        </div>
        <div class="flex items-center gap-3">
          <div class="notification-icon relative">
            <div class="w-8 h-8 rounded-full flex items-center justify-center"
              :style="{ backgroundColor: primaryColor + '20', color: primaryColor }">
              🔔
            </div>
            <div
              class="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              3
            </div>
          </div>
          <div class="user-avatar w-8 h-8 rounded-full flex items-center justify-center"
            :style="{ backgroundColor: primaryColor, color: '#fff' }">
            A
          </div>
        </div>
      </div>
    </div>

    <!-- KPI Cards Grid -->
    <div class="kpi-grid grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div v-for="kpi in kpiCards" :key="kpi.label" class="kpi-card p-4 rounded-lg transition-all hover:shadow-lg"
        :style="cardStyles">
        <div class="flex items-center justify-between mb-2">
          <div class="text-2xl">{{ kpi.icon }}</div>
          <div class="text-xs px-2 py-1 rounded" :class="kpi.trend === 'up' ? 'text-green-400' : 'text-red-400'"
            :style="{ backgroundColor: kpi.trend === 'up' ? '#10b98120' : '#ef444420' }">
            {{ kpi.trend === 'up' ? '↗' : '↘' }} {{ kpi.change }}%
          </div>
        </div>
        <div class="text-2xl font-bold mb-1" :style="{ color: textColor }">{{ kpi.value }}</div>
        <div class="text-sm opacity-75" :style="{ color: textColor }">{{ kpi.label }}</div>
      </div>
    </div>

    <!-- Charts Section -->
    <div class="charts-section grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <!-- Revenue Chart -->
      <div class="chart-container p-4 rounded-lg" :style="cardStyles">
        <h3 class="text-lg font-semibold mb-4" :style="{ color: textColor }">Revenue Overview</h3>
        <div class="chart-area h-40 relative">
          <svg class="w-full h-full" viewBox="0 0 300 120">
            <!-- Simple line chart -->
            <polyline :points="revenueChartPoints" fill="none" :stroke="primaryColor" stroke-width="2"
              class="drop-shadow" />
            <circle v-for="(point, index) in revenueData" :key="index" :cx="point.x * 300 / 11"
              :cy="120 - (point.y * 100 / 100)" r="3" :fill="primaryColor" />
          </svg>
        </div>
      </div>

      <!-- Activity Feed -->
      <div class="activity-container p-4 rounded-lg" :style="cardStyles">
        <h3 class="text-lg font-semibold mb-4" :style="{ color: textColor }">Recent Activity</h3>
        <div class="activity-feed space-y-3">
          <div v-for="activity in recentActivities" :key="activity.id" class="activity-item flex items-start gap-3">
            <div class="activity-icon w-8 h-8 rounded-full flex items-center justify-center text-sm"
              :style="{ backgroundColor: activity.color + '20', color: activity.color }">
              {{ activity.icon }}
            </div>
            <div class="flex-1">
              <div class="text-sm font-medium" :style="{ color: textColor }">{{ activity.title }}</div>
              <div class="text-xs opacity-75" :style="{ color: textColor }">{{ activity.time }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Data Table -->
    <div class="table-section p-4 rounded-lg" :style="cardStyles">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-semibold" :style="{ color: textColor }">User Management</h3>
        <div class="flex gap-2">
          <button class="px-3 py-1 text-sm rounded transition-colors"
            :style="{ backgroundColor: textColor + '10', color: textColor }">
            Filter
          </button>
          <button class="px-3 py-1 text-sm rounded transition-colors"
            :style="{ backgroundColor: primaryColor, color: theme === 'dark' ? '#000' : '#fff' }">
            Add User
          </button>
        </div>
      </div>

      <div class="table-wrapper overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b" :style="{ borderColor: textColor + '20' }">
              <th class="text-left py-2 px-3 font-medium" :style="{ color: textColor }">Name</th>
              <th class="text-left py-2 px-3 font-medium" :style="{ color: textColor }">Role</th>
              <th class="text-left py-2 px-3 font-medium" :style="{ color: textColor }">Status</th>
              <th class="text-left py-2 px-3 font-medium" :style="{ color: textColor }">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id" class="border-b hover:bg-opacity-50 transition-colors"
              :style="{ borderColor: textColor + '10' }">
              <td class="py-3 px-3">
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded-full flex items-center justify-center text-xs"
                    :style="{ backgroundColor: primaryColor, color: '#fff' }">
                    {{ user.name.charAt(0) }}
                  </div>
                  <span :style="{ color: textColor }">{{ user.name }}</span>
                </div>
              </td>
              <td class="py-3 px-3">
                <span class="px-2 py-1 text-xs rounded"
                  :style="{ backgroundColor: user.roleColor + '20', color: user.roleColor }">
                  {{ user.role }}
                </span>
              </td>
              <td class="py-3 px-3">
                <span class="px-2 py-1 text-xs rounded" :style="{ 
                        backgroundColor: user.status === 'Active' ? '#10b98120' : '#ef444420',
                        color: user.status === 'Active' ? '#10b981' : '#ef4444'
                      }">
                  {{ user.status }}
                </span>
              </td>
              <td class="py-3 px-3">
                <div class="flex gap-1">
                  <button class="text-xs px-2 py-1 rounded transition-colors"
                    :style="{ backgroundColor: primaryColor + '20', color: primaryColor }">
                    Edit
                  </button>
                  <button class="text-xs px-2 py-1 rounded transition-colors"
                    :style="{ backgroundColor: '#ef444420', color: '#ef4444' }">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  // Documentation mode
  isDocs: { type: Boolean, default: false },
  
  // Configuration
  showKPIs: { type: Boolean, default: true },
  showCharts: { type: Boolean, default: true },
  showActivity: { type: Boolean, default: true },
  showUserTable: { type: Boolean, default: true },
  
  // Theme and styling
  roundness: { type: Number, default: 12 },
  primaryColor: { type: String, default: '#6366f1' },
  bgColor: { type: String, default: '#1e293b' },
  textColor: { type: String, default: '#e2e8f0' },
  fontFamily: { type: String, default: 'inherit' },
  theme: { type: String, default: 'dark' },
  width: { type: Number, default: 1024 },
  height: { type: Number, default: 600 },
  padding: { type: Number, default: 24 },
  margin: { type: Number, default: 16 },
  boxShadow: { type: String, default: '0 4px 6px rgba(0, 0, 0, 0.1)' },
  borderWidth: { type: Number, default: 1 },
  animation: { type: String, default: 'none' }
});

// Sample data
const kpiCards = [
  { label: 'Total Users', value: '12,345', icon: '👥', trend: 'up', change: 12 },
  { label: 'Revenue', value: '$45,678', icon: '💰', trend: 'up', change: 8 },
  { label: 'Orders', value: '3,456', icon: '📦', trend: 'down', change: 3 },
  { label: 'Conversion', value: '2.4%', icon: '📈', trend: 'up', change: 15 }
];

const revenueData = [
  { x: 0, y: 30 }, { x: 1, y: 45 }, { x: 2, y: 25 }, { x: 3, y: 60 },
  { x: 4, y: 55 }, { x: 5, y: 70 }, { x: 6, y: 65 }, { x: 7, y: 80 },
  { x: 8, y: 75 }, { x: 9, y: 90 }, { x: 10, y: 85 }, { x: 11, y: 95 }
];

const recentActivities = [
  { id: 1, title: 'New user registered', time: '2 minutes ago', icon: '👤', color: '#10b981' },
  { id: 2, title: 'Order #1234 completed', time: '5 minutes ago', icon: '✅', color: '#6366f1' },
  { id: 3, title: 'Payment received', time: '10 minutes ago', icon: '💳', color: '#f59e0b' },
  { id: 4, title: 'System backup completed', time: '1 hour ago', icon: '💾', color: '#8b5cf6' }
];

const users = [
  { id: 1, name: 'John Doe', role: 'Admin', roleColor: '#ef4444', status: 'Active' },
  { id: 2, name: 'Jane Smith', role: 'Editor', roleColor: '#f59e0b', status: 'Active' },
  { id: 3, name: 'Bob Johnson', role: 'User', roleColor: '#10b981', status: 'Inactive' },
  { id: 4, name: 'Alice Brown', role: 'Manager', roleColor: '#6366f1', status: 'Active' }
];

// Computed styles
const containerStyles = computed(() => ({
  fontFamily: props.fontFamily,
  width: `${props.width}px`,
  minWidth: `${props.width}px`,
  minHeight: `${props.height}px`,
  margin: `${props.margin}px`,
  padding: `${props.padding}px`
}));

const headerStyles = computed(() => ({
  backgroundColor: props.theme === 'dark' ? 'rgba(30, 41, 59, 0.5)' : 'rgba(248, 250, 252, 0.8)',
  border: `${props.borderWidth}px solid ${props.primaryColor}20`,
  borderRadius: `${props.roundness}px`
}));

const cardStyles = computed(() => ({
  backgroundColor: props.bgColor,
  border: `${props.borderWidth}px solid ${props.primaryColor}20`,
  borderRadius: `${props.roundness}px`,
  boxShadow: props.boxShadow
}));

const revenueChartPoints = computed(() => {
  return revenueData.map(point => 
    `${point.x * 300 / 11},${120 - (point.y * 100 / 100)}`
  ).join(' ');
});
</script>
