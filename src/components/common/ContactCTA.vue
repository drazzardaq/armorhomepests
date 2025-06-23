<template>
  <div class="contact-cta" :class="variant">
    <div class="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-blue-200 shadow-xl transition-all duration-300">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="text-center md:text-left">
          <h3 class="text-xl font-bold text-blue-900 mb-2">{{ title }}</h3>
          <p class="text-gray-700">{{ description }}</p>
        </div>
        <div class="flex items-center gap-3 ml-10 flex-col">
          <a href="https://wa.me/38169698442"
             target="_blank"
             class="px-3 py-3 w-[180px] justify-center items-center rounded-lg bg-green-500 text-white font-semibold hover:scale-105 transition-transform duration-300 flex gap-3">
             <font-awesome-icon :icon="['fab','whatsapp']" class="w-5 h-5" />
             
      <span class="ml-2">WhatsApp</span>
    </a>
    <a href="mailto:dracorisz@outlook.com"
    class="px-3 py-3 w-[180px] justify-center items-center rounded-lg bg-blue-500 text-white font-semibold hover:scale-105 transition-transform duration-300 flex gap-3">
    <font-awesome-icon icon="envelope" class="w-5 h-5" />
          
            <span class="ml-2">Email</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
defineProps({
  title: {
    type: String,
    default: 'Ready to connect?'
  },
  description: {
    type: String,
    default: 'Reach out via WhatsApp or email to join, partner, or ask questions.'
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'compact', 'full-width'].includes(value)
  }
})
onMounted(() => {
  gsap.from('.contact-cta', { opacity: 0, y: 40, duration: 1, ease: 'power2.out' })
})
</script>

<style scoped>
.contact-cta.compact {
  max-width: 600px;
  margin: 0 auto;
}

.contact-cta.full-width {
  width: 100%;
}
</style>