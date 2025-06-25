<template>
  <section
    class="section glass-effect relative overflow-hidden"
    v-motion="motionProps"
    :style="parallaxStyle"
    ref="sectionRef"
    :initial="{ opacity: 0, y: 40 }"
    :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }"
  >
    <slot />
    <div v-if="parallaxImage" class="absolute inset-0 -z-10">
      <img :src="parallaxImage" class="w-full h-full object-cover opacity-30" alt="Parallax background" />
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useMotion } from '@vueuse/motion'

const props = defineProps({
  parallaxImage: String,
  parallaxStrength: {
    type: Number,
    default: 0.2,
  },
  animate: {
    type: Boolean,
    default: true,
  },
})

const sectionRef = ref(null)
const { motionProps } = useMotion(sectionRef)

// Simple parallax effect using scroll position
const parallaxStyle = computed(() => {
  if (!props.parallaxImage) return {}
  // fallback: use window scrollY for a simple parallax
  if (typeof window !== 'undefined') {
    const y = window.scrollY * (props.parallaxStrength || 0.2)
    return { transform: `translateY(${y}px)` }
  }
  return {}
})
</script>

<style scoped>
.section {
  min-height: 400px;
}
</style>
