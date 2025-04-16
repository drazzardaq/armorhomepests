<template>
  <Transition name="slide-up">
    <div v-if="showPrompt" class="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 z-50">
      <div class="bg-white rounded-xl shadow-xl overflow-hidden">
        <div class="p-4 md:p-6 flex flex-col md:flex-row items-center gap-4">
          <div class="flex-shrink-0">
            <img src="/icons/android-chrome-192x192.png" alt="App Icon" class="w-16 h-16 rounded-xl shadow-md">
          </div>
          <div class="flex-grow text-center md:text-left">
            <h3 class="text-lg font-bold text-gray-900 mb-1">Install MyArmorHome</h3>
            <p class="text-gray-600 mb-2">Get quick access to our services and receive instant notifications</p>
            <div class="flex flex-col sm:flex-row gap-2 justify-center md:justify-start">
              <button 
                @click="installPWA" 
                class="btn-gradient-blue px-6 py-2 rounded-lg text-white font-medium hover:shadow-lg transition-all duration-300"
              >
                Install Now
              </button>
              <button 
                @click="closePrompt" 
                class="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-all duration-300"
              >
                Maybe Later
              </button>
            </div>
          </div>
          <button 
            @click="closePrompt" 
            class="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <i class="fas fa-times text-xl"></i>
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showPrompt = ref(false);
let deferredPrompt = null;

const installPWA = async () => {
  if (!deferredPrompt) return;
  
  try {
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    }
  } catch (error) {
    console.error('Error installing PWA:', error);
  }
  
  deferredPrompt = null;
  closePrompt();
};

const closePrompt = () => {
  showPrompt.value = false;
  // Store in localStorage to prevent showing again for 30 days
  localStorage.setItem('pwaPromptDismissed', Date.now().toString());
};

onMounted(() => {
  // Check if prompt was recently dismissed
  const lastDismissed = localStorage.getItem('pwaPromptDismissed');
  const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
  
  if (lastDismissed && parseInt(lastDismissed) > thirtyDaysAgo) {
    return;
  }

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showPrompt.value = true;
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
</style> 