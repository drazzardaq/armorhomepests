<template>
  <div
    class="unified-card group relative flex flex-col min-h-[420px] rounded-2xl shadow-2xl bg-white/80 backdrop-blur-lg border border-white/20 overflow-hidden transition-transform duration-300 hover:scale-[1.03] focus-within:scale-[1.03] animate-pop-in"
    tabindex="0"
    :aria-label="'Proposal card for ' + title"
  >
    <div class="card-gradient-overlay"></div>
    <div class="card-dark-gradient"></div>
    <img :src="img" :alt="title" class="w-48 h-48 object-contain z-10 transition-transform duration-300 group-hover:scale-105 group-focus:scale-105 mx-auto mt-4" />
    <div class="p-6 flex-1 flex flex-col z-20 relative">
      <h3 class="text-2xl font-extrabold text-gradient mb-2">{{ title }}</h3>
      <p class="text-gray-800 mb-4 line-clamp-3">{{ description }}</p>
      <div class="flex flex-wrap gap-2 mb-4">
        <span v-for="tag in tags" :key="tag" class="card-tag">{{ tag }}</span>
      </div>
      <div v-if="realizationPlan || realizationCost || contact" class="mb-2 text-sm text-gray-700">
        <div v-if="realizationPlan" class="mb-1"><strong>Realization Plan:</strong> <span class="whitespace-pre-line">{{ realizationPlan }}</span></div>
        <div v-if="realizationCost" class="mb-1"><strong>Estimated Cost:</strong> <span class="text-tvp-blue font-semibold">{{ realizationCost }}</span></div>
        <div v-if="contact" class="mb-1"><strong>Contact:</strong> <span class="text-tvp-blue font-semibold">{{ contact }}</span></div>
      </div>
      <div class="flex flex-col gap-2 mt-auto">
        <button class="btn-unified-details" @click="$emit('details')" :aria-label="'Show details for ' + title">Details</button>
        <a v-if="link" :href="link" target="_blank" rel="noopener" class="btn-unified-cta" :aria-label="linkText || 'Open link'">{{ linkText || 'Visit' }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  img: String,
  title: String,
  description: String,
  tags: Array,
  link: String,
  linkText: String,
  realizationPlan: String,
  realizationCost: String,
  contact: String
});
defineEmits(['details']);
</script>

<style scoped>
.unified-card {
  position: relative;
  outline: none;
  background: transparent;
  box-shadow: 0 8px 32px 0 rgba(66,56,108,0.10);
}
.unified-card:focus {
  box-shadow: 0 0 0 3px #00deff55;
}
.card-gradient-overlay {
  position: absolute;
  inset: 0;
  z-index: 5;
  pointer-events: none;
  background: linear-gradient(120deg, rgba(0,222,255,0.08) 0%, rgba(66,56,108,0.09) 60%, rgba(255,0,128,0.07) 100%);
  mix-blend-mode: lighten;
  border-radius: 1rem;
  transition: opacity 0.3s;
}
.card-dark-gradient {
  position: absolute;
  inset: 0;
  z-index: 6;
  pointer-events: none;
  background: linear-gradient(120deg,rgba(21,54,149,0.08) 0%,rgba(0,0,0,0.10) 100%);
  border-radius: 1rem;
  transition: opacity 0.3s;
}
.unified-card:hover .card-gradient-overlay,
.unified-card:focus .card-gradient-overlay {
  opacity: 0.92;
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.btn-unified-details {
  background: linear-gradient(90deg, #00deff 0%, #153695 100%);
}
.btn-unified-cta {
  background: linear-gradient(90deg, #42386c 0%, #153695 100%);
}
</style>
