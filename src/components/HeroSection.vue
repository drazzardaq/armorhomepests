<template>
  <section class="relative min-h-[600px] flex items-center">
    <!-- Background Image -->
    <div 
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style="background-image: url('/images/hero2.png');"
    ></div>
    
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/50"></div>
    
    <!-- Content -->
    <div class="container-custom relative z-10 text-white">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        Professional Pest Control Services
      </h1>
      <p class="text-xl md:text-2xl mb-8 max-w-2xl">
        Protect your home and family with our comprehensive pest control solutions. 
        Licensed, insured, and guaranteed to keep your home pest-free.
      </p>
      <div class="flex flex-col sm:flex-row gap-4">
        <a href="tel:480-839-3333" class="btn-primary flex items-center justify-center gap-2">
          <i class="fas fa-phone-alt"></i>
          Call Now: 480-839-3333
        </a>
        <router-link to="/services" class="btn-secondary">
          Our Services
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    default: 'Get Started'
  },
  buttonLink: {
    type: String,
    default: '/contact'
  }
});
</script>

<style scoped>
.btn-outline-white {
  @apply inline-flex items-center justify-center px-6 py-3 rounded-medium font-medium transition-all duration-300 border-2 border-white text-white hover:bg-white hover:text-dark-gray;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out forwards;
  opacity: 0;
}
</style> 