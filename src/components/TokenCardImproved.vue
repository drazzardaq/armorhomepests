<template>
  <div class="group rounded-xl border border-black/10 bg-white/80 backdrop-blur-lg p-6 transition-all duration-300 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#00deff] shadow-xl" tabindex="0" :aria-label="token.name + ' token card'" ref="cardRef">
    <div class="mb-4 flex items-center justify-between">
      <div class="flex items-center">
        <div class="relative">
          <div class="mr-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#42386c] via-[#153695] to-[#00deff]">
            <span class="text-xl font-bold text-white">{{ token.symbol.charAt(0) }}</span>
          </div>
          <div v-if="token.trending" class="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-500">
            <svg class="h-2 w-2 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 14l5-5 5 5z" />
            </svg>
          </div>
        </div>
        <div>
          <h3 class="text-xl font-bold text-black transition-colors group-hover:text-[#153695]">{{ token.name }}</h3>
          <p class="text-sm text-gray-500">{{ token.symbol }} 3 Rank #{{ token.rank }}</p>
        </div>
      </div>
      <div class="text-right">
        <p class="text-2xl font-bold text-black">${{ token.price }}</p>
        <p :class="['flex items-center justify-end text-sm font-semibold', token.change >= 0 ? 'text-green-500' : 'text-red-500']">
          <svg :class="['mr-1 h-3 w-3', token.change >= 0 ? 'rotate-0' : 'rotate-180']" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 14l5-5 5 5z" />
          </svg>
          {{ Math.abs(token.change) }}%
        </p>
      </div>
    </div>
    <div class="mb-4 flex h-16 items-center justify-center rounded-lg bg-[#00deff]/10">
      <svg class="h-full w-full text-[#00deff]/30" viewBox="0 0 200 50" preserveAspectRatio="none">
        <polyline fill="none" stroke="currentColor" stroke-width="2" :points="generateChartPoints()" />
      </svg>
    </div>
    <div class="mb-4 grid grid-cols-2 gap-4">
      <div class="rounded-lg bg-[#42386c]/10 p-3">
        <p class="mb-1 text-xs text-gray-500">Market Cap</p>
        <p class="font-semibold text-black">${{ formatNumber(token.marketCap) }}</p>
      </div>
      <div class="rounded-lg bg-[#153695]/10 p-3">
        <p class="mb-1 text-xs text-gray-500">24h Volume</p>
        <p class="font-semibold text-black">${{ formatNumber(token.volume) }}</p>
      </div>
    </div>
    <div class="mb-4 space-y-2">
      <div class="flex justify-between text-sm">
        <span class="text-gray-500">Circulating Supply:</span>
        <span class="text-black">{{ formatNumber(token.circulatingSupply) }} {{ token.symbol }}</span>
      </div>
      <div class="flex justify-between text-sm">
        <span class="text-gray-500">Total Supply:</span>
        <span class="text-black">{{ formatNumber(token.totalSupply) }} {{ token.symbol }}</span>
      </div>
    </div>
    <div class="flex justify-end mt-4">
      <button class="px-4 py-2 rounded-lg bg-gradient-to-r from-[#42386c] via-[#153695] to-[#00deff] text-white font-bold shadow hover:opacity-90 transition" aria-label="View details for {{ token.name }}">
        View Details
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
let cardRef = ref(null)
onMounted(() => {
  if (cardRef.value && window.gsap) {
    window.gsap.from(cardRef.value, {
      opacity: 0,
      y: 40,
      duration: 0.7,
      ease: 'power2.out',
      stagger: 0.1
    })
  }
})

const props = defineProps({
  token: {
    type: Object,
    required: true,
  },
});

const formatNumber = (num) => {
  if (num >= 1e12) {
    return (num / 1e12).toFixed(1) + "T";
  } else if (num >= 1e9) {
    return (num / 1e9).toFixed(1) + "B";
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(1) + "M";
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(1) + "K";
  }
  return num.toString();
};

const generateChartPoints = () => {
  // Generate simple chart points for demonstration
  const points = [];
  const baseY = 25;
  const amplitude = 15;

  for (let i = 0; i <= 20; i++) {
    const x = (i / 20) * 200;
    const y = baseY + Math.sin(i * 0.5) * amplitude + (Math.random() - 0.5) * 5;
    points.push(`${x},${y}`);
  }

  return points.join(" ");
};
</script>
