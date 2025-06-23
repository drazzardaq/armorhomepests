<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/75 backdrop-blur-sm" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 p-6 text-left align-middle shadow-xl transition-all">
              <div class="relative">
                <!-- Background Image -->
                <div class="absolute inset-0 bg-[url('https://TVPOutpost.com/images/modal-bg.jpg')] bg-cover bg-center opacity-20"></div>
                
                <!-- Content -->
                <div class="relative z-10">
                  <DialogTitle as="h3" class="text-2xl font-bold text-center text-white mb-2">
                    TVPOutpost Accounts
                  </DialogTitle>
                  <div class="text-center mb-8">
                    <p class="text-gray-300">
                      Account system is currently in development.
                      <br/>Join us on Realmsz to get early access!
                    </p>
                  </div>

                  <!-- Realmsz Section -->
                  <div class="bg-white/5 rounded-xl p-6 backdrop-blur-sm mb-6">
                    <div class="flex items-center justify-center mb-4">
                      <img src="https://TVPOutpost.com/images/realmsz-logo.svg" alt="Realmsz" class="h-8" />
                    </div>
                    <p class="text-sm text-gray-300 text-center mb-4">
                      Realmsz is our official partner for early access and exclusive benefits.
                    </p>
                    <a 
                      href="https://realmsz.com/register" 
                      target="_blank"
                      class="block w-full py-3 px-4 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center font-semibold hover:from-purple-500 hover:to-indigo-500 transform hover:scale-[1.02] transition-all duration-300"
                    >
                      Register on Realmsz
                    </a>
                  </div>

                  <!-- Close Button -->
                  <div class="text-center">
                    <button
                      type="button"
                      class="text-gray-400 hover:text-white transition-colors duration-300"
                      @click="closeModal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const isOpen = ref(false)

const openModal = () => {
  isOpen.value = true
}

const closeModal = () => {
  isOpen.value = false
}

defineExpose({
  openModal,
  closeModal
})
</script> 