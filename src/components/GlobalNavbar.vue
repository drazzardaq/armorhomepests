<template>
  <nav class="fixed left-0 right-0 top-0 z-50 transition-all duration-500 ease-in-out" :class="[isCollapsed ? '-translate-y-full transform' : 'translate-y-0 transform', isPlaygroundPage ? 'border-b border-purple-500/20 bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-xl' : 'border-b border-gray-200 bg-white/95 backdrop-blur-xl']">
    <div class=" mx-auto" :class="isPlaygroundPage ? 'max-w-full' : 'max-w-7xl'">
    <!-- Navbar Content -->
    <div class="px-4 py-3">
      <div class="flex items-center justify-between">
        <!-- Logo and Brand -->
        <div class="flex items-center gap-3">
          <router-link to="/" class="group flex items-center gap-2">
            <img src="@/assets/images/Google.png" alt="DUIMX Logo" class="h-12 w-12 rounded-full transition-transform group-hover:scale-[1.15]" />
            <img src="@/assets/images/icon2.png" alt="DUIMX Logo" class="h-12 w-12 rounded-full transition-transform group-hover:scale-[1.15]" />
            
            <!-- <div>
              <h1 class="text-lg font-bold transition-all" :class="isPlaygroundPage ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent' : 'text-gray-800'">DUIMX</h1>
              <div class="text-xs opacity-70 transition-all" :class="isPlaygroundPage ? 'text-purple-300' : 'text-gray-600'">v{{ version }}</div>
            </div> -->
          </router-link>
        </div>

        <!-- Navigation Links -->
        <div class="hidden mx-auto items-center gap-6 md:flex" style="z-index:99999; position:relative;">
          <router-link v-for="link in navigationLinks" :key="link.name" :to="link.path" class="text-sm font-medium transition-all duration-200" :class="[isPlaygroundPage ? '!text-purple-200 hover:!text-white' : 'text-gray-700 hover:text-gray-900', $route.path === link.path ? (isPlaygroundPage ? 'text-purple-100' : 'text-blue-600') : '']">
            {{ link.label }}
          </router-link>
        </div>

        <!-- Social & Action Buttons -->
        <div class="hidden items-center gap-3 md:flex ml-auto " :class="isPlaygroundPage ? 'mr-3' : '-mr-3'" style="z-index:99999; position:relative;">            <!-- WhatsApp Button with hover text -->
            <div class="relative group"
               @mouseover="hoveredButton = 'whatsapp'"
               @mouseleave="hoveredButton = ''">
              <a href="https://wa.me/38169698442?text=Hello%20from%20DUIMX%20project!" target="_blank" rel="noopener noreferrer" class="rounded-lg p-2 transition-all !duration-300 flex items-center relative overflow-hidden" :class="[
                isPlaygroundPage ? 'bg-green-500/20 !text-green-300 hover:bg-green-500/30' : 'bg-green-100 !text-green-600 hover:bg-green-200',
                hoveredButton === 'whatsapp' ? 'pr-24' : 'pr-2'
              ]" title="Contact via WhatsApp">
              <font-awesome-icon :icon="['fab', 'whatsapp']" class="h-4 w-4 relative z-10" />
              <transition name="fade-slide" mode="out-in">
                <span
                v-if="hoveredButton === 'whatsapp'"
                class="absolute left-5 pl-3 text-sm font-medium whitespace-nowrap z-0"
                >Message</span>
              </transition>
              </a>
            </div>

            <!-- Twitter/X Button -->
            <div class="relative group"
               @mouseover="hoveredButton = 'twitter'"
               @mouseleave="hoveredButton = ''">
              <a href="https://x.com/drazzardaq" target="_blank" rel="noopener noreferrer" class="rounded-lg p-2 transition-all !duration-300 flex items-center relative overflow-hidden" :class="[
                isPlaygroundPage ? 'bg-slate-500/20 !text-slate-300 hover:bg-slate-500/30' : 'bg-slate-950 !text-slate-50 hover:bg-slate-950',
                hoveredButton === 'twitter' ? 'pr-24' : 'pr-2'
              ]" title="Connect on X">
              <font-awesome-icon :icon="['fab', 'x-twitter']" class="h-4 w-4 ml-px relative z-10" />
              <transition name="fade-slide" mode="out-in">
                <span
                v-if="hoveredButton === 'twitter'"
                class="absolute left-5 pl-3 text-sm font-medium whitespace-nowrap z-0"
                >Connect</span>
              </transition>
              </a>
            </div>

            <!-- GitHub Sponsors Button -->
            <div class="relative group"
               @mouseover="hoveredButton = 'github'"
               @mouseleave="hoveredButton = ''">
              <a href="https://github.com/sponsors/drazzardaq" target="_blank" rel="noopener noreferrer" class="rounded-lg p-2 transition-all !duration-300 flex items-center relative overflow-hidden" :class="[
                isPlaygroundPage ? 'bg-pink-500/20 !text-pink-300 hover:bg-pink-500/30' : 'bg-pink-100 !text-pink-600 hover:bg-pink-100/70',
                hoveredButton === 'github' ? 'pr-24' : 'pr-2'
              ]" title="Support on GitHub Sponsors">
              <font-awesome-icon :icon="['fas', 'heart']" class="h-4 w-4 relative z-10" />
              <transition name="fade-slide" mode="out-in">
                <span
                v-if="hoveredButton === 'github'"
                class="absolute left-5 pl-3 text-sm font-medium whitespace-nowrap z-0"
                >Sponsor</span>
              </transition>
              </a>
            </div>

        </div>

        <!-- Mobile Menu Button & Collapse Toggle -->
        <div class="flex items-center gap-2">
          <!-- Collapse Toggle (only on playground) -->
          <button v-if="isPlaygroundPage" @click="toggleCollapse" class="rounded-lg bg-purple-500/20 p-2 text-purple-300 transition-all hover:bg-purple-500/30" :title="isCollapsed ? 'Show Navbar' : 'Hide Navbar'">
            <font-awesome-icon :icon="['fas', isCollapsed ? 'chevron-down' : 'chevron-up']" class="h-4 w-4 transition-transform duration-300" />
          </button>

          <!-- Mobile Menu Toggle -->
          <button @click="toggleMobileMenu" class="rounded-lg p-2 transition-all md:hidden" :class="isPlaygroundPage ? 'bg-purple-500/20 text-purple-300 hover:bg-purple-500/30' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'">
            <font-awesome-icon :icon="['fas', 'bars']" class="h-5 w-5" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="showMobileMenu" class="mt-4 border-t py-4 transition-all md:hidden" :class="isPlaygroundPage ? 'border-purple-500/20' : 'border-gray-200'">
        <div class="flex flex-col gap-3">
          <router-link v-for="link in navigationLinks" :key="link.name" :to="link.path" @click="showMobileMenu = false" class="py-2 text-sm font-medium transition-all" :class="[isPlaygroundPage ? 'text-purple-200 hover:text-purple-100' : 'text-gray-700 hover:text-gray-900', $route.path === link.path ? (isPlaygroundPage ? 'text-purple-100' : 'text-blue-600') : '']">
            {{ link.label }}
          </router-link>
        </div>
      </div>
    </div>

    <!-- Collapsed State Handle -->
    <div v-if="isCollapsed && isPlaygroundPage" class="absolute left-1/2 top-full z-50 -translate-x-1/2 -translate-y-1 transform">
      <button @click="toggleCollapse" class="flex items-center gap-2 rounded-b-xl border border-t-0 border-purple-400/30 bg-gradient-to-r from-purple-500/90 to-pink-500/90 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-xl transition-all duration-300 hover:from-purple-600/90 hover:to-pink-600/90">
        <svg class="h-4 w-4 animate-bounce" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <span>DUIMX v{{ version }}</span>
        <svg class="h-4 w-4 animate-bounce" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
</div>
  </nav>
  <!-- Spacer to prevent content from hiding under fixed navbar -->
  <div v-if="!isCollapsed" class="h-16"></div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import packageJson from "../../package.json";

const route = useRoute();
const router = useRouter();

// Reactive state
const isCollapsed = ref(false);
const showMobileMenu = ref(false);
const hoveredButton = ref('');
const version = ref(packageJson.version);

// Computed properties
const isPlaygroundPage = computed(() => route.name === "Playground");

const navigationLinks = [
  { name: "Resume", label: "Resume", path: "/" },
  { name: "Playground", label: "Playground", path: "/playground" },
  { name: "TVPPlanets", label: "Planets", path: "/planets" },
  { name: "OutpostProposal", label: "Outpost", path: "/outpostproposal" },
];

// Methods
function toggleCollapse() {
  isCollapsed.value = !isCollapsed.value;
  // Store preference in localStorage
  localStorage.setItem("navbar-collapsed", isCollapsed.value);
}

function toggleMobileMenu() {
  showMobileMenu.value = !showMobileMenu.value;
}

// Auto-collapse on playground page after delay
watch(isPlaygroundPage, (newVal) => {
  if (newVal) {
    // Auto-collapse after 3 seconds on playground
    setTimeout(() => {
      if (route.name === "Playground") {
        isCollapsed.value = true;
      }
    }, 3000);
  } else {
    // Always show navbar on other pages
    isCollapsed.value = false;
  }
});

// Close mobile menu when route changes
watch(
  () => route.path,
  () => {
    showMobileMenu.value = false;
  },
);

// Initialize from localStorage
onMounted(() => {
  const savedState = localStorage.getItem("navbar-collapsed");
  if (savedState && isPlaygroundPage.value) {
    isCollapsed.value = savedState === "true";
  }
});
</script>

<style scoped>
/* Smooth transitions for all navbar elements */
nav * {
  transition: all 0.3s ease;
}

/* Add subtle glow effect for playground theme */
.playground-glow {
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.1);
}

/* Animation for the collapsed handle */
@keyframes gentle-bounce {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-2px);
  }
}

.animate-gentle-bounce {
  animation: gentle-bounce 2s ease-in-out infinite;
}

.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-slide-enter-active {
  opacity: 1;
  transform: translateX(0px);
}

.fade-slide-leave-active {
  opacity: 0;
  transform: translateX(10px);
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(-10px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

@media print {
  nav {
    display: none; /* Hide navbar during print */
  }
  body {
    margin-top: 0 !important; /* Remove top margin for print */
  }
  .h-16 {
    height: 0 !important; /* Remove spacer height for print */
  }
  
}
</style>
