<template>
  <nav class="navbar fixed top-0 z-50 w-full glass-effect bg-white/80 backdrop-blur-md shadow-lg border-b border-white/30 font-ui">
    <div class="mx-auto max-w-7xl w-full py-0">
      <div class="flex flex-col items-center justify-center w-full">
        <div class="mx-auto flex w-full max-w-9xl items-center gap-3 py-3">
          <router-link to="/" aria-label="The Venus Project Home">
            <img src="@/assets/images/Outpost-logo.png" alt="The Venus Project Icon" class="h-10 md:h-14 w-auto transition-transform" />
          </router-link>
          <!-- Desktop Menu -->
          <div class="!flex ml-auto gap-8 text-lg font-medium items-center justify-center">
            <div v-for="item in navItems" :key="item.label" class="block nav-item">
              <component :is="item.external ? 'a' : 'router-link'" v-bind="item.external ? { href: item.to, target: '_blank', rel: 'noopener', 'aria-label': item.ariaLabel || item.label } : { to: item.to, 'aria-label': item.ariaLabel || item.label, 'aria-current': isActive(item) ? 'page' : undefined }" :class="['nav-link flex items-center gap-2 rounded-md px-2 py-1 transition-all duration-200', isActive(item) ? 'active-link' : item.class || 'hover:text-tvp-teal']">
                <i v-if="item.icon" :class="item.icon"></i>
                {{ item.label }}
                <svg v-if="item.external" class="mb-1 inline h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m5-3h5v5m-10 4L21 3" /></svg>
              </component>
            </div>
          </div>
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="menu-button rounded-md p-2 hover:bg-tvp-blue/10 lg:hidden" :aria-expanded="mobileMenuOpen" aria-controls="mobile-menu" aria-label="Open main menu">
            <i v-if="!mobileMenuOpen" class="fas fa-bars h-6 w-6"></i>
            <i v-else class="fas fa-times h-6 w-6"></i>
          </button>
          <!-- Mobile Menu -->
          <Transition name="mobile-menu">
            <div v-show="mobileMenuOpen" id="mobile-menu" class="mobile-menu mt-2 py-2 lg:hidden">
              <ul class="space-y-1 px-2 pb-3 pt-2">
                <li v-for="item in navItems" :key="item.label">
                  <component :is="item.external ? 'a' : 'router-link'" v-bind="item.external ? { href: item.to, target: '_blank', rel: 'noopener', 'aria-label': item.ariaLabel || item.label } : { to: item.to, 'aria-label': item.ariaLabel || item.label, 'aria-current': isActive(item) ? 'page' : undefined }" :class="['block rounded-md px-3 py-2 text-base font-medium transition-all duration-200', isActive(item) ? 'bg-tvp-blue/10 text-tvp-blue' : item.class || 'text-tvp-purple hover:bg-tvp-blue/10 hover:text-tvp-blue']" @click="mobileMenuOpen = false">
                    <div class="flex items-center justify-between">
                      <span><i v-if="item.icon" :class="item.icon"></i> {{ item.label }}</span>
                    </div>
                  </component>
                </li>
              </ul>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import gsap from "gsap";

const route = useRoute();
const mobileMenuOpen = ref(false);

const navItems = [
  { label: "About", to: "/about", icon: "info-circle" },
  { label: "Projects", to: "/projects", icon: "fa-cubes" },
  { label: "City", to: "/city", icon: "city" },
  { label: "Donate", to: "https://www.thevenusproject.com/donate-page/", external: true, class: "contact-btn", icon: "fas fa-envelope" },
];

function isActive(item) {
  if (item.external) return false;
  return route.path === item.to || (item.to !== "/" && route.path.startsWith(item.to + "/"));
}

onMounted(() => {
  gsap.from(".navbar", { y: -60, opacity: 0, duration: 1, ease: "power2.out" });
});
</script>

<style scoped>
.navbar {
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border-bottom: 1px solid rgba(66,56,108,0.10);
  box-shadow: 0 4px 24px 0 rgba(66,56,108,0.10);
}
.nav-link {
  color: #42386c;
  font-weight: 600;
  letter-spacing: 0.01em;
  background: none;
}
.nav-link.active-link {
  background: linear-gradient(90deg, #42386c, #153695, #143395);
  color: #fff !important;
  box-shadow: 0 2px 8px 0 rgba(0,222,255,0.08);
}
.nav-link.contact-btn {
  background: linear-gradient(90deg, #143395, #153695);
  color: #fff !important;
  border-radius: 0.5rem;
  padding: 0.5rem 1.25rem;
  margin-left: 0.5rem;
  font-weight: 700;
  box-shadow: 0 2px 8px 0 rgba(0,222,255,0.12);
  transition: background 0.2s, color 0.2s;
}
.nav-link.contact-btn:hover, .nav-link.contact-btn:focus {
  background: linear-gradient(90deg, #153695, #143395);
  color: #fff !important;
}
.menu-button {
  background: rgba(255,255,255,0.7);
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 0.375rem;
  padding: 0.5rem;
  transition: background 0.2s, transform 0.2s;
}
.menu-button:hover {
  background: rgba(0,222,255,0.08);
}
.mobile-menu {
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 0.5rem;
  box-shadow: 0 4px 24px 0 rgba(66,56,108,0.15);
}
.mobile-menu .nav-link {
  color: #42386c;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
}
.mobile-menu .nav-link:hover {
  background: rgba(0,222,255,0.08);
}
.mobile-menu .nav-link.active-link {
  background: transparent;
  color: #153695 !important;
}
/* .nav-item {
  width: 144px;
  margin: auto;
} */
@media (min-width: 1024px) {
  .navbar {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
  .nav-link {
    padding: 0.5rem 1rem;
  }
  .nav-link.contact-btn {
    padding: 0.5rem 1.5rem;
  }
  .menu-button {
    display: none;
  }
}
</style>

