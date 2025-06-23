<template>
  <teleport to="body">
    <transition name="proposal-modal-3d" @enter="onEnter" @leave="onLeave">
      <div v-if="proposal" class="fixed inset-0 z-[9999] flex w-screen h-screen items-center justify-center bg-white/60 backdrop-blur-[6px]" @click.self="closeModal" tabindex="-1" aria-modal="true" role="dialog">
        <div ref="modalRef" class="bg-gradient-to-br from-tvp-teal/10 to-emerald-400/10 bg-white/20 backdrop-blur-2xl rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-0 relative animate-pop-in flex flex-col proposal-modal-3d border border-tvp-blue/10">
          <button class="btn-modal-close absolute top-4 right-4 z-10" @click="closeModal" aria-label="Close">&times;</button>
          <img :src="proposal.img" :alt="proposal.title" class="w-48 h-48 object-cover my-4 mx-auto drop-shadow-md" />
          <div class="p-8 flex-1 flex flex-col">
            <h3 class="text-3xl font-extrabold text-gradient mb-2">{{ proposal.title }}</h3>
            <p class="text-gray-800 mb-4 text-lg">{{ proposal.longDesc || proposal.desc }}</p>
            <div v-if="proposal.realizationPlan" class="mb-2">
              <strong>Realization Plan:</strong><br/></br>
              <div class="text-sm text-gray-800 whitespace-pre-line">{{ proposal.realizationPlan }}</div>
            </div>
            <div v-if="proposal.realizationCost" class="mb-2">
              <strong>Estimated Cost:</strong>
              <span class="text-tvp-blue font-semibold">{{ proposal.realizationCost }}</span>
            </div>
            <div v-if="proposal.contact" class="mb-2">
              <!-- <strong>Contact:</strong><br/></br> -->
              <span class="text-tvp-blue font-semibold">{{ proposal.contact }}</span>
              <a v-if="proposal.contactLink" :href="proposal.contactLink" target="_blank" rel="noopener" class="btn-unified-cta ml-2">Contact</a>
            </div>
            <div class="flex flex-wrap gap-2 mt-4">
              <span v-for="tag in proposal.tags" :key="tag" class="card-tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { ref, watch, onMounted, nextTick } from 'vue';
import gsap from 'gsap';
const emit = defineEmits(['close']);
const props = defineProps({
  proposal: Object
});
const modalRef = ref(null);
function onEnter(el) {
  gsap.fromTo(el.querySelector('.proposal-modal-3d'),
    { opacity: 0, scale: 0.7, rotateY: 30 },
    { opacity: 1, scale: 1, rotateY: 0, duration: 0.7, ease: 'power3.out' }
  );
}
function onLeave(el, done) {
  gsap.to(el.querySelector('.proposal-modal-3d'),
    { opacity: 0, scale: 0.7, rotateY: -30, duration: 0.5, ease: 'power3.in', onComplete: done }
  );
}
// Focus trap for accessibility
watch(() => props.proposal, (val) => {
  if (val) nextTick(() => modalRef.value?.focus());
});
onMounted(() => {
  if (props.proposal) nextTick(() => modalRef.value?.focus());
});
function closeModal() {
  emit('close');
}
</script>

<style scoped>
.proposal-modal-3d {
  outline: none;
}
.proposal-modal-3d:focus {
  box-shadow: 0 0 0 3px #00deff55;
}
.proposal-modal-3d {
  will-change: transform, opacity;
}
.btn-modal-close {
  background: none;
  border: none;
  border-radius: 0.5rem;
  padding: 0.25rem 0.75rem;
  transition: background 0.2s;
}
.btn-modal-close:hover,
.btn-modal-close:focus {
  background: #00deff22;
}
.proposal-modal-3d-enter-active,
.proposal-modal-3d-leave-active {
  transition: none;
}
strong {
  @apply font-semibold text-gray-900;
}
</style>
