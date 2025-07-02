<template>
  <!-- Documentation Mode -->
  <div v-if="isDocs" class="DUIMX-docs prose prose-purple max-w-none">
    <div class="mb-6 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4">
      <h2 class="mb-2 text-2xl font-bold text-purple-300">👤 DUIMX User Profile Card</h2>
      <p class="text-purple-200">Modern, responsive user profile card with multiple layouts and customization options.</p>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">✨ Features</h3>
    <ul class="mb-6 space-y-2 text-purple-200">
      <li>🎨 <strong>Multiple Layouts</strong> - Compact, standard, expanded variants</li>
      <li>🌓 <strong>Theme Adaptive</strong> - Auto-adjusts for light/dark themes</li>
      <li>🖼️ <strong>Avatar Support</strong> - Image, initials, or placeholder</li>
      <li>🏷️ <strong>Badge System</strong> - Status indicators and role badges</li>
      <li>🔗 <strong>Social Links</strong> - Social media integration</li>
      <li>📱 <strong>Responsive Design</strong> - Mobile-first approach</li>
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
          <tr><td class="border border-purple-500/30 p-2 font-mono">name</td><td class="border border-purple-500/30 p-2">String</td><td class="border border-purple-500/30 p-2">'John Doe'</td><td class="border border-purple-500/30 p-2">User's full name</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">username</td><td class="border border-purple-500/30 p-2">String</td><td class="border border-purple-500/30 p-2">'@johndoe'</td><td class="border border-purple-500/30 p-2">Username or handle</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">bio</td><td class="border border-purple-500/30 p-2">String</td><td class="border border-purple-500/30 p-2">'Software Engineer'</td><td class="border border-purple-500/30 p-2">User bio or title</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">avatar</td><td class="border border-purple-500/30 p-2">String</td><td class="border border-purple-500/30 p-2">''</td><td class="border border-purple-500/30 p-2">Avatar image URL</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">variant</td><td class="border border-purple-500/30 p-2">String</td><td class="border border-purple-500/30 p-2">'standard'</td><td class="border border-purple-500/30 p-2">Card layout variant</td></tr>
          <tr><td class="border border-purple-500/30 p-2 font-mono">status</td><td class="border border-purple-500/30 p-2">String</td><td class="border border-purple-500/30 p-2">'online'</td><td class="border border-purple-500/30 p-2">User status indicator</td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-semibold text-purple-300 mb-3">🎨 Variants</h3>
    <div class="mb-6 grid grid-cols-2 gap-4">
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">compact</h4>
        <p class="text-purple-200 text-sm">Minimal layout for tight spaces</p>
      </div>
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">standard</h4>
        <p class="text-purple-200 text-sm">Balanced information display</p>
      </div>
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">expanded</h4>
        <p class="text-purple-200 text-sm">Full feature set with stats</p>
      </div>
      <div class="rounded-lg border border-purple-500/30 bg-slate-800/30 p-3">
        <h4 class="text-purple-300 font-semibold">glass</h4>
        <p class="text-purple-200 text-sm">Glass morphism effect</p>
      </div>
    </div>

    <div class="mb-6 rounded-lg border border-purple-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4">
      <p class="text-center text-purple-200">
        <strong>🔗 Source Code:</strong> 
        <a href="https://github.com/drazzardaq/opensource/blob/master/src/opensource/DimUserProfileCard.vue" 
           target="_blank" 
           class="text-purple-300 hover:text-purple-100 transition-colors underline">
          View on GitHub
        </a>
      </p>
    </div>
  </div>

  <!-- Component Mode -->
  <div v-else class="DUIMX-user-profile-card w-full max-w-sm">
    <!-- Compact Variant -->
    <div v-if="variant === 'compact'" 
         class="flex items-center gap-3 rounded-lg p-3 transition-all duration-300 hover:shadow-lg"
         :class="cardClasses"
         :style="cardStyles">
      <div class="relative">
        <img v-if="avatar" 
             :src="avatar" 
             :alt="name"
             class="h-10 w-10 rounded-full object-cover" />
        <div v-else 
             class="flex h-10 w-10 items-center justify-center rounded-full font-semibold"
             :style="{ backgroundColor: primaryColor + '40', color: primaryColor }">
          {{ initials }}
        </div>
        <div v-if="showStatus" 
             class="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2"
             :class="statusClasses"
             :style="{ borderColor: bgColor }"></div>
      </div>
      <div class="flex-1 min-w-0">
        <h3 class="truncate font-semibold" :style="{ color: textColor }">{{ name }}</h3>
        <p class="truncate text-sm opacity-75" :style="{ color: textColor }">{{ username }}</p>
      </div>
    </div>

    <!-- Standard Variant -->
    <div v-else-if="variant === 'standard'" 
         class="rounded-lg p-4 transition-all duration-300 hover:shadow-lg"
         :class="cardClasses"
         :style="cardStyles">
      <div class="flex items-center gap-4 mb-3">
        <div class="relative">
          <img v-if="avatar" 
               :src="avatar" 
               :alt="name"
               class="h-16 w-16 rounded-full object-cover" />
          <div v-else 
               class="flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold"
               :style="{ backgroundColor: primaryColor + '40', color: primaryColor }">
            {{ initials }}
          </div>
          <div v-if="showStatus" 
               class="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2"
               :class="statusClasses"
               :style="{ borderColor: bgColor }"></div>
        </div>
        <div class="flex-1 min-w-0">
          <h3 class="text-lg font-semibold mb-1" :style="{ color: textColor }">{{ name }}</h3>
          <p class="text-sm opacity-75 mb-1" :style="{ color: textColor }">{{ username }}</p>
          <p class="text-sm opacity-60" :style="{ color: textColor }">{{ bio }}</p>
        </div>
      </div>
      
      <div v-if="showActions" class="flex gap-2 pt-2 border-t border-opacity-20" :style="{ borderColor: textColor }">
        <button class="flex-1 py-2 px-3 rounded text-sm font-medium transition-colors"
                :style="{ backgroundColor: primaryColor + '20', color: primaryColor }"
                @click="$emit('follow')">
          Follow
        </button>
        <button class="flex-1 py-2 px-3 rounded text-sm font-medium transition-colors"
                :style="{ backgroundColor: textColor + '10', color: textColor }"
                @click="$emit('message')">
          Message
        </button>
      </div>
    </div>

    <!-- Expanded Variant -->
    <div v-else-if="variant === 'expanded'" 
         class="rounded-lg p-6 transition-all duration-300 hover:shadow-lg"
         :class="cardClasses"
         :style="cardStyles">
      <div class="text-center mb-4">
        <div class="relative inline-block mb-3">
          <img v-if="avatar" 
               :src="avatar" 
               :alt="name"
               class="h-20 w-20 rounded-full object-cover mx-auto" />
          <div v-else 
               class="flex h-20 w-20 items-center justify-center rounded-full text-2xl font-bold mx-auto"
               :style="{ backgroundColor: primaryColor + '40', color: primaryColor }">
            {{ initials }}
          </div>
          <div v-if="showStatus" 
               class="absolute bottom-0 right-0 h-5 w-5 rounded-full border-2"
               :class="statusClasses"
               :style="{ borderColor: bgColor }"></div>
        </div>
        <h3 class="text-xl font-bold mb-1" :style="{ color: textColor }">{{ name }}</h3>
        <p class="text-sm opacity-75 mb-2" :style="{ color: textColor }">{{ username }}</p>
        <p class="text-sm opacity-60" :style="{ color: textColor }">{{ bio }}</p>
      </div>

      <div v-if="showStats" class="grid grid-cols-3 gap-4 mb-4 text-center">
        <div v-for="stat in stats" :key="stat.label" class="py-2">
          <div class="text-lg font-bold" :style="{ color: primaryColor }">{{ stat.value }}</div>
          <div class="text-xs opacity-75" :style="{ color: textColor }">{{ stat.label }}</div>
        </div>
      </div>

      <div v-if="showActions" class="space-y-2">
        <button class="w-full py-3 px-4 rounded font-medium transition-colors"
                :style="{ backgroundColor: primaryColor, color: theme === 'dark' ? '#000' : '#fff' }"
                @click="$emit('follow')">
          Follow
        </button>
        <button class="w-full py-2 px-4 rounded font-medium transition-colors"
                :style="{ backgroundColor: textColor + '10', color: textColor }"
                @click="$emit('message')">
          Send Message
        </button>
      </div>
    </div>

    <!-- Glass Variant -->
    <div v-else-if="variant === 'glass'" 
         class="rounded-xl p-4 backdrop-blur-md border transition-all duration-300 hover:shadow-lg"
         :style="glassStyles">
      <div class="flex items-center gap-4 mb-3">
        <div class="relative">
          <img v-if="avatar" 
               :src="avatar" 
               :alt="name"
               class="h-14 w-14 rounded-full object-cover" />
          <div v-else 
               class="flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold"
               :style="{ backgroundColor: 'rgba(255,255,255,0.2)', color: '#fff' }">
            {{ initials }}
          </div>
          <div v-if="showStatus" 
               class="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white/50"
               :class="statusClasses"></div>
        </div>
        <div class="flex-1 min-w-0">
          <h3 class="text-lg font-semibold mb-1 text-white">{{ name }}</h3>
          <p class="text-sm text-white/80 mb-1">{{ username }}</p>
          <p class="text-sm text-white/60">{{ bio }}</p>
        </div>
      </div>
      
      <div v-if="showActions" class="flex gap-2 pt-2">
        <button class="flex-1 py-2 px-3 rounded text-sm font-medium bg-white/20 text-white hover:bg-white/30 transition-colors"
                @click="$emit('follow')">
          Follow
        </button>
        <button class="flex-1 py-2 px-3 rounded text-sm font-medium bg-white/10 text-white hover:bg-white/20 transition-colors"
                @click="$emit('message')">
          Message
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  // Documentation mode
  isDocs: { type: Boolean, default: false },
  
  // User data
  name: { type: String, default: 'John Doe' },
  username: { type: String, default: '@johndoe' },
  bio: { type: String, default: 'Software Engineer & UI/UX Designer' },
  avatar: { type: String, default: '' },
  
  // Appearance
  variant: { type: String, default: 'standard' }, // compact, standard, expanded, glass
  status: { type: String, default: 'online' }, // online, offline, away, busy
  
  // Display options
  showStatus: { type: Boolean, default: true },
  showActions: { type: Boolean, default: true },
  showStats: { type: Boolean, default: true },
  
  // Stats (for expanded variant)
  stats: { 
    type: Array, 
    default: () => [
      { label: 'Following', value: '1.2K' },
      { label: 'Followers', value: '3.4K' },
      { label: 'Posts', value: '127' }
    ]
  },
  
  // Theme and styling
  roundness: { type: Number, default: 16 },
  primaryColor: { type: String, default: '#6366f1' },
  bgColor: { type: String, default: '#1e293b' },
  textColor: { type: String, default: '#e2e8f0' },
  fontFamily: { type: String, default: 'inherit' },
  theme: { type: String, default: 'dark' },
  width: { type: Number, default: 320 },
  height: { type: Number, default: 180 },
  padding: { type: Number, default: 24 },
  margin: { type: Number, default: 12 },
  boxShadow: { type: String, default: '0 4px 6px rgba(0, 0, 0, 0.1)' },
  borderWidth: { type: Number, default: 1 },
  animation: { type: String, default: 'none' }
});

const emit = defineEmits(['follow', 'message']);

const initials = computed(() => {
  return props.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
});

const cardClasses = computed(() => {
  const classes = [];
  
  if (props.animation === 'bounce') classes.push('animate-bounce');
  else if (props.animation === 'pulse') classes.push('animate-pulse');
  else if (props.animation === 'spin') classes.push('animate-spin');
  
  return classes.join(' ');
});

const cardStyles = computed(() => {
  return {
    backgroundColor: props.bgColor,
    color: props.textColor,
    borderRadius: `${props.roundness}px`,
    fontFamily: props.fontFamily,
    maxWidth: `${props.width}px`,
    boxShadow: props.boxShadow,
    border: `${props.borderWidth}px solid ${props.primaryColor}20`,
    margin: `${props.margin}px`,
    padding: `${props.padding}px`
  };
});

const glassStyles = computed(() => {
  return {
    background: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: '1px',
    borderRadius: `${props.roundness}px`,
    fontFamily: props.fontFamily,
    maxWidth: `${props.width}px`,
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    margin: `${props.margin}px`,
    padding: `${props.padding}px`
  };
});

const statusClasses = computed(() => {
  const statusMap = {
    online: 'bg-green-400',
    offline: 'bg-gray-400',
    away: 'bg-yellow-400',
    busy: 'bg-red-400'
  };
  
  return statusMap[props.status] || statusMap.online;
});
</script>
