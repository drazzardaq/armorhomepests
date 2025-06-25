<template>
  <div class="relative w-full overflow-hidden rounded-2xl glass-effect shadow-lg">
    <!-- Testimonials Container -->
    <div 
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div 
        v-for="(testimonial, index) in testimonials" 
        :key="index"
        class="w-full flex-shrink-0 px-4"
      >
        <div class="bg-white/10 glass-effect rounded-2xl shadow-lg p-6 md:p-8 hover-lift backdrop-blur-md border border-white/10">
          <div class="flex items-center gap-4 mb-6">
            <img 
              :src="randomUserAvatars[index]" 
              :alt="testimonial.name"
              class="w-16 h-16 rounded-full object-cover border-2 border-crypto-primary/40 shadow-soft"
            >
            <div>
              <h4 class="text-xl font-heading text-white drop-shadow-lg">{{ testimonial.name }}</h4>
              <p class="text-crypto-primary font-ui">{{ testimonial.location }}</p>
            </div>
          </div>
          <div class="flex gap-1 mb-4">
            <i 
              v-for="star in 5" 
              :key="star"
              class="fas fa-star text-yellow-400"
            ></i>
          </div>
          <p class="text-white/90 text-lg mb-4 font-ui">{{ testimonial.text }}</p>
          <div class="flex items-center gap-2 text-crypto-primary">
            <i class="fas fa-quote-left"></i>
            <span class="text-sm font-ui">Verified Customer</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Navigation Arrows -->
    <button 
      @click="prev"
      class="absolute left-4 top-1/2 -translate-y-1/2 glass-effect border border-white/20 text-white p-3 rounded-full shadow-lg hover:bg-crypto-primary/60 transition-all duration-200"
      :class="{ 'opacity-50 cursor-not-allowed': currentIndex === 0 }"
    >
      <i class="fas fa-chevron-left"></i>
    </button>
    <button 
      @click="next"
      class="absolute right-4 top-1/2 -translate-y-1/2 glass-effect border border-white/20 text-white p-3 rounded-full shadow-lg hover:bg-crypto-primary/60 transition-all duration-200"
      :class="{ 'opacity-50 cursor-not-allowed': currentIndex === testimonials.length - 1 }"
    >
      <i class="fas fa-chevron-right"></i>
    </button>
    <!-- Dots Navigation -->
    <div class="flex justify-center gap-2 mt-8">
      <button 
        v-for="(_, index) in testimonials" 
        :key="index"
        @click="goToSlide(index)"
        class="w-2 h-2 rounded-full transition-all duration-200"
        :class="currentIndex === index ? 'bg-crypto-primary scale-125 shadow-soft' : 'bg-white/30 hover:bg-crypto-primary/60'"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  testimonials: {
    type: Array,
    required: true
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  interval: {
    type: Number,
    default: 6000
  }
});

const currentIndex = ref(0);
let autoplayInterval;

const randomUserAvatars = ref([]);

const fetchRandomUserAvatars = async () => {
  try {
    const response = await fetch('https://randomuser.me/api/?results=5');
    const data = await response.json();
    randomUserAvatars.value = data.results.map(user => user.picture.large);
  } catch (error) {
    console.error('Error fetching random user avatars:', error);
  }
};

const next = () => {
  if (currentIndex.value < props.testimonials.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
};

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = props.testimonials.length - 1;
  }
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

const startAutoplay = () => {
  if (props.autoplay) {
    autoplayInterval = setInterval(next, props.interval);
  }
};

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }
};

onMounted(() => {
  startAutoplay();
  fetchRandomUserAvatars();
});

onUnmounted(() => {
  stopAutoplay();
});
</script>

<style scoped>
.testimonial-enter-active,
.testimonial-leave-active {
  transition: all 0.5s ease;
}

.testimonial-enter-from,
.testimonial-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>