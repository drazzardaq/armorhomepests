<template>
  <Transition name="slide-up">
    <div v-if="showInstallPrompt" class="fixed bottom-4 right-4 bg-crypto-dark/90 p-4 rounded-lg shadow-lg border border-crypto-primary/20 z-50">
      <div class="flex items-center gap-4">
        <div class="text-white">
          <h3 class="text-lg font-bold mb-1">Install The Venus Project App</h3>
          <p class="text-sm text-gray-300">Get the best experience by installing our app</p>
        </div>
        <div class="flex gap-2">
          <button @click="installApp" class="btn-gradient-crypto px-4 py-2 rounded-lg">
            Install
          </button>
          <button @click="dismissPrompt" class="btn-outline-crypto px-4 py-2 rounded-lg">
            Later
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showInstallPrompt = ref(false);
let deferredPrompt = null;

const installApp = async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    }
    deferredPrompt = null;
    showInstallPrompt.value = false;
  }
};

const dismissPrompt = () => {
  showInstallPrompt.value = false;
  localStorage.setItem('pwaInstallDismissed', 'true');
};

onMounted(() => {
  // Check if the app is already installed
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
  if (isStandalone) {
    return;
  }

  // Check if user has previously dismissed the prompt
  const wasDismissed = localStorage.getItem('pwaInstallDismissed');
  if (wasDismissed) {
    return;
  }

  // Listen for beforeinstallprompt event
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showInstallPrompt.value = true;
  });

  // Listen for appinstalled event
  window.addEventListener('appinstalled', () => {
    console.log('App was installed');
    showInstallPrompt.value = false;
  });
});
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease-out;
}

.slide-up-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.btn-gradient-crypto {
  @apply px-4 py-2 bg-gradient-to-r from-crypto-primary to-crypto-accent text-white rounded-lg hover:opacity-90 transition-opacity;
}

.btn-outline-crypto {
  @apply px-4 py-2 border-2 border-crypto-primary text-crypto-primary rounded-lg hover:bg-crypto-primary hover:text-white transition-colors;
}
</style> 