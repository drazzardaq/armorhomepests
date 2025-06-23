<template>
<div
    :class="[
        'bg-white/80',
        'backdrop-blur-lg',
        'rounded-xl',
        'p-8',
        'border',
        borderColor,
        'token-card',
        'transition-transform',
        'duration-300',
        'hover:scale-105',
        'space-y-4',
        'shadow-xl',
        'focus:outline-none',
        'focus:ring-2',
        'focus:ring-[#00deff]'
    ]"
    :style="{
        background: gradient || 'linear-gradient(135deg, #42386c20 20%, #00deff10 100%)'
    }"
    ref="cardRef"
    tabindex="0"
    :aria-label="name + ' token card'"
>
    <div class="flex items-center justify-between mb-6">
        <h2 :class="['text-2xl', 'font-bold', titleColor, 'drop-shadow-sm']">{{ name }}</h2>
        <span v-if="badge" class="ml-2 px-3 py-1 rounded-full text-xs font-bold" :class="badgeClass">{{ badge }}</span>
        <img :src="icon" :alt="name + ' icon'" class="w-20 h-20 rounded-full bg-white border-4 p-2" :class="iconClass" loading="lazy" />
    </div>
    <div class="space-y-2">
        <div v-if="stats" class="flex justify-between">
            <span class="text-gray-500">{{ stats.split(':')[0] }}:</span>
            <span class="text-black font-semibold">{{ stats.split(':')[1] }}</span>
        </div>
        <div v-if="network" class="flex justify-between">
            <span class="text-gray-500">Network:</span>
            <span class="text-black font-semibold">{{ network }}</span>
        </div>
        <div v-if="type" class="flex justify-between">
            <span class="text-gray-500">Type:</span>
            <span class="text-black font-semibold">{{ type }}</span>
        </div>
        <div v-if="extra" class="flex justify-between items-start flex-col">
            <span class="text-gray-500" v-html="extra.split(':')[0] + ': '" />
            <span class="text-black font-semibold" v-html="addExternalIcon(extra.split(':')[1])" />
        </div>
    </div>
    <div v-if="planetSwiperImages && planetSwiperImages.length" class="flex justify-center my-4">
      <swiper-container
        :slides-per-view="1"
        :space-between="0"
        :navigation="false"
        :pagination="false"
        class="planet-swiper w-24 h-24"
        style="border-radius: 9999px; overflow: hidden;"
      >
        <swiper-slide v-for="(img, i) in planetSwiperImages" :key="i">
          <img :src="img" :alt="`Planet ${i+1}`" class="object-cover w-24 h-24 rounded-full shadow-lg" loading="lazy" />
        </swiper-slide>
      </swiper-container>
    </div>
    <div v-else-if="planetImage" class="flex justify-center my-4">
      <img :src="planetImage" :alt="name + ' planet'" class="w-24 h-24 rounded-full shadow-lg object-cover" loading="lazy" />
    </div>
    <p class="text-gray-700 mt-4">{{ description }}</p>
    <div v-if="details && details.length" class="mt-4">
      <ul class="list-disc ml-3 space-y-1">
        <li v-for="(item, i) in details" :key="i" class="text-gray-700">{{ item }}</li>
      </ul>
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
defineProps({
  name: String,
  icon: String,
  iconClass: {
    type: String,
    default: ''
  },
  borderColor: {
    type: String,
    default: 'border-gray-500/20'
  },
  titleColor: {
    type: String,
    default: 'text-black'
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
  badgeClass: String
});
function addExternalIcon(html) {
  const extIcon = `<svg class='inline w-4 h-4 ml-1 -mt-1 text-[#00deff]' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><path d='M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m5-3h5v5m-10 4L21 3'/></svg>`;
  return html ? html.replace(/<a ([^>]+)>(.*?)<\/a>/g, (match, attrs, text) => {
    if (attrs.includes('target')) {
      return `<a ${attrs}>${text} ${extIcon}</a>`;
    } else {
      return `<a ${attrs} target='_blank'>${text} ${extIcon}</a>`;
    }
  }) : '';
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
