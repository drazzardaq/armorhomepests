<template>
  <div
    :class="['bg-white/80', 'backdrop-blur-lg', 'rounded-xl', 'p-8', 'border', borderColor, 'token-card', 'transition-transform', 'duration-300', 'hover:!scale-[1.01]', 'space-y-4', 'shadow-xl', 'focus:outline-none', 'focus:ring-2', 'focus:ring-[#143395]', 'animate-fade-in-up']"
    :style="{
      background: gradient || 'linear-gradient(135deg, #42386c20 20%, #14339510 100%)',
    }"
    ref="cardRef"
    tabindex="0"
    :aria-label="name + ' token card'"
  >
    <div class="mb-6 flex items-center justify-between">
      <h2 :class="['text-2xl', 'font-bold', titleColor, 'drop-shadow-sm']">{{ name }}</h2>
      <span v-if="badge" class="ml-2 rounded-full px-3 py-1 text-xs font-bold" :class="badgeClass">{{ badge }}</span>
      <img :src="icon" :alt="name + ' icon'" class="h-20 w-20 rounded-full border-4 bg-white p-2" :class="iconClass" loading="lazy" />
    </div>
    <div class="space-y-2">
      <div v-if="stats" class="flex justify-between">
        <span class="text-gray-500">{{ stats.split(":")[0] }}:</span>
        <span class="font-semibold text-black">{{ stats.split(":")[1] }}</span>
      </div>
      <div v-if="network" class="flex justify-between">
        <span class="text-gray-500">Network:</span>
        <span class="font-semibold text-black">{{ network }}</span>
      </div>
      <div v-if="type" class="flex justify-between">
        <span class="text-gray-500">Type:</span>
        <span class="font-semibold text-black">{{ type }}</span>
      </div>
      <div v-if="extra" class="flex flex-col items-start justify-between">
        <span class="text-gray-500" v-html="extra.split(':')[0] + ': '" />
        <span class="font-semibold text-black" v-html="addExternalIcon(extra.split(':')[1])" />
      </div>
    </div>
    <div v-if="planetSwiperImages && planetSwiperImages.length" class="my-4 flex justify-center">
      <swiper-container :slides-per-view="1" :space-between="0" :navigation="false" :pagination="false" class="planet-swiper h-24 w-24" style="border-radius: 9999px; overflow: hidden">
        <swiper-slide v-for="(img, i) in planetSwiperImages" :key="i">
          <img :src="img" :alt="`Planet ${i + 1}`" class="h-24 w-24 rounded-full object-cover shadow-lg" loading="lazy" />
        </swiper-slide>
      </swiper-container>
    </div>
    <div v-else-if="planetImage" class="my-4 flex justify-center">
      <img :src="planetImage" :alt="name + ' planet'" class="h-24 w-24 rounded-full object-cover shadow-lg" loading="lazy" />
    </div>
    <p class="mt-4 text-gray-700">{{ description }}</p>
    <div v-if="details && details.length" class="mt-4">
      <ul class="ml-3 list-disc space-y-1">
        <li v-for="(item, i) in details" :key="i" class="text-gray-700">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
let cardRef = ref(null);
onMounted(() => {
  if (cardRef.value && window.gsap) {
    window.gsap.from(cardRef.value, {
      opacity: 0,
      y: 40,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.1,
    });
  }
});
defineProps({
  name: String,
  icon: String,
  iconClass: {
    type: String,
    default: "",
  },
  borderColor: {
    type: String,
    default: "border-gray-500/20",
  },
  titleColor: {
    type: String,
    default: "text-black",
  },
  stats: String,
  network: String,
  type: String,
  description: String,
  extra: String,
  gradient: String,
  planetImage: String,
  details: Array,
  planetSwiperImages: Array,
  badge: String,
  badgeClass: String,
});
function addExternalIcon(html) {
  const extIcon = `<svg class='inline w-4 h-4 ml-1 -mt-1 text-[#143395]' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><path d='M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m5-3h5v5m-10 4L21 3'/></svg>`;
  return html
    ? html.replace(/<a ([^>]+)>(.*?)<\/a>/g, (match, attrs, text) => {
        if (attrs.includes("target")) {
          return `<a ${attrs}>${text} ${extIcon}</a>`;
        } else {
          return `<a ${attrs} target='_blank'>${text} ${extIcon}</a>`;
        }
      })
    : "";
}
</script>
<style scoped>
.token-card {
  min-height: 380px;
}
.planet-swiper {
  border-radius: 9999px;
  overflow: hidden;
}
</style>

