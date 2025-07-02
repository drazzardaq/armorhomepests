<template>
  <Transition name="slide-up">
    <div v-if="showInstallPrompt" class="fixed bottom-4 right-4 bg-crypto-dark/90 p-4 rounded-lg shadow-lg border border-crypto-primary/20 z-50">
      <div class="flex items-center gap-4">
        <div class="text-white">
          <h3 class="text-lg font-bold mb-1">Reach out on WhatsApp</h3>
          <p class="text-sm text-gray-300">Message me to start!</p>
        </div>
        <div class="flex gap-2">
          <a
            :href="whatsAppLink"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-gradient-crypto px-4 py-2 rounded-lg"
          >
            Message on WhatsApp
          </a>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showInstallPrompt = ref(false);
const whatsAppNumber = '38169698442';
const templateMessage = 'Hello, I would like to get in touch!';
const whatsAppLink = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(templateMessage)}`;


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
