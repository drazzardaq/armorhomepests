<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="modal-overlay" @click="closeOnOverlay && close()" aria-modal="true" role="dialog" tabindex="-1">
        <div class="modal-container unified-card" @click.stop>
          <div class="modal-header">
            <h3 class="modal-title" id="modal-title">{{ title }}</h3>
            <button class="btn-modal-close" @click="close" aria-label="Close modal">
              <span aria-hidden="true">&times;</span>
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
import { defineProps, defineEmits, onMounted, watch, nextTick } from 'vue';
const props = defineProps({
  isOpen: { type: Boolean, required: true },
  title: { type: String, default: '' },
  closeOnOverlay: { type: Boolean, default: true }
});
const emit = defineEmits(['close']);
function close() { emit('close'); }
// Focus trap for accessibility
let modalRef = null;
onMounted(() => {
  watch(() => props.isOpen, (open) => {
    if (open) nextTick(() => { modalRef?.focus(); });
  });
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(21, 54, 149, 0.18);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-container {
  min-width: 320px;
  max-width: 95vw;
  max-height: 90vh;
  overflow-y: auto;
  outline: none;
  transition: all 0.3s;
  opacity: 1;
  transform: scale(1);
}
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.modal-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #153695;
}
.modal-content {
  margin-bottom: 1rem;
}
.modal-footer {
  text-align: right;
}
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>