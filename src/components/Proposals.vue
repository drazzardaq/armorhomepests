<template>
  <section class="proposals-section animate-fade-in-up mb-12 md:mb-16 max-w-7xl w-full mx-auto glassy-bg rounded-2xl shadow-2xl px-4 py-10 md:py-16 glassy-interact">
    <h2 class="text-gradient mb-6 text-4xl font-extrabold text-center">Featured Projects & Proposals</h2>
    <div class="category-bar sticky top-0 z-20 mb-8 flex gap-3 overflow-x-auto rounded-xl bg-white/70 px-2 py-2 shadow" role="tablist" aria-label="Proposal Categories">
      <button v-for="cat in filters" :key="cat" :class="['category-pill', { active: selectedFilter === cat }]" @click="selectedFilter = cat" :aria-selected="selectedFilter === cat" role="tab" tabindex="0">{{ cat }}</button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="(proposal, idx) in filteredProposals" :key="proposal.title" class="frosted-glass-card proposal-card rounded-2xl shadow-xl p-0 overflow-hidden relative group flex flex-col transition-transform duration-300 hover:scale-[1.025] hover:shadow-2xl focus-within:scale-[1.025] focus-within:shadow-2xl" :tabindex="0" :aria-expanded="expandedIdx === idx" @keydown.enter="toggleExpand(idx)" @keydown.space.prevent="toggleExpand(idx)" @click.self="toggleExpand(idx)" role="button">
        <div class="proposal-gradient-overlay"></div>
        <img :src="proposal.img" :alt="proposal.title" class="w-full h-48 object-cover rounded-t-2xl relative z-10 transition-transform duration-300 group-hover:scale-105 group-focus:scale-105" />
        <div class="p-6 flex-1 flex flex-col relative z-20">
          <h3 class="text-xl font-bold text-blue-900 mb-2">{{ proposal.title }}</h3>
          <p class="text-gray-700 mb-4 line-clamp-3" v-if="expandedIdx !== idx">{{ proposal.desc }}</p>
          <p class="text-gray-700 mb-4" v-else>{{ proposal.longDesc || proposal.desc }}</p>
          <div class="flex flex-wrap gap-2 mt-auto">
            <span v-for="tag in proposal.tags" :key="tag" class="inline-block rounded bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700">{{ tag }}</span>
          </div>
          <button class="mt-4 btn-glass-cta w-fit self-end" @click.stop="toggleExpand(idx)" :aria-label="expandedIdx === idx ? 'Collapse details' : 'Expand details'">
            <span v-if="expandedIdx === idx">Show Less</span>
            <span v-else>Learn More</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
const props = defineProps({
  proposals: Array,
  filters: Array
});
const selectedFilter = ref('All');
const expandedIdx = ref(null);
const filteredProposals = computed(() => {
  if (selectedFilter.value === 'All') return props.proposals;
  return props.proposals.filter(p => p.tags.includes(selectedFilter.value));
});
function toggleExpand(idx) {
  expandedIdx.value = expandedIdx.value === idx ? null : idx;
}
</script>

<style scoped>
.proposal-card {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  outline: none;
}
.proposal-card:focus {
  box-shadow: 0 0 0 3px #00deff55;
}
.proposal-gradient-overlay {
  position: absolute;
  inset: 0;
  z-index: 5;
  pointer-events: none;
  background: linear-gradient(120deg, rgba(0,222,255,0.08) 0%, rgba(66,56,108,0.09) 60%, rgba(255,0,128,0.07) 100%);
  mix-blend-mode: lighten;
  border-radius: 1rem;
  transition: opacity 0.3s;
}
.proposal-card:hover .proposal-gradient-overlay,
.proposal-card:focus .proposal-gradient-overlay {
  opacity: 0.92;
}
.category-bar {
  background: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 1rem;
  border-radius: 1.25rem;
  box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.15);
  margin-bottom: 2rem;
}
.category-pill {
  background: transparent;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-weight: 500;
  color: #42386c;
  border: 1px solid transparent;
  transition:
    background 0.3s,
    color 0.3s,
    border-color 0.3s;
  white-space: nowrap;
}
.category-pill:hover {
  background: rgba(66, 56, 108, 0.05);
  color: #153695;
}
.category-pill.active {
  background: linear-gradient(90deg, #00deff 0%, #153695 100%);
  color: #fff;
  border-color: transparent;
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
