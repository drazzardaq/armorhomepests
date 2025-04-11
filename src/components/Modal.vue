<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="modal-overlay" @click="closeOnOverlay && close()">
        <div class="modal-container" @click.stop>
          <div class="modal-header">
            <h3 class="modal-title">{{ title }}</h3>
            <button class="modal-close" @click="close">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="modal-content">
            <slot></slot>
          </div>
          <div v-if="$slots.footer" class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  closeOnOverlay: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits(['close']);

const close = () => {
  emit('close');
};
</script>

<style scoped>
.modal-overlay {
  @apply fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50;
}

.modal-container {
  @apply bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto;
}

.modal-header {
  @apply flex items-center justify-between p-4 border-b;
}

.modal-title {
  @apply text-xl font-bold text-gray-800;
}

.modal-close {
  @apply text-gray-500 hover:text-gray-700 focus:outline-none;
}

.modal-content {
  @apply p-4;
}

.modal-footer {
  @apply p-4 border-t flex justify-end space-x-2;
}

/* Transition animations */
.modal-enter-active,
.modal-leave-active {
  @apply transition-opacity duration-300;
}

.modal-enter-from,
.modal-leave-to {
  @apply opacity-0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  @apply transition-all duration-300;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  @apply transform scale-95 opacity-0;
}
</style> 