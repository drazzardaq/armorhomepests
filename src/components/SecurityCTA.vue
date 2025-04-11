<template>
  <section class="bg-gradient-to-r from-primary-blue to-secondary-blue py-12 md:py-16">
    <div class="container-custom">
      <div class="flex flex-col md:flex-row items-center justify-between gap-8">
        <div class="text-center md:text-left">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Secure Your Home Today
          </h2>
          <p class="text-lg text-white/90 mb-6">
            Get professional security solutions tailored to your needs. Our experts are ready to help.
          </p>
          <div class="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="tel:480-839-3333" 
              class="btn-phone flex items-center gap-2 text-lg font-semibold"
            >
              <i class="fas fa-phone-alt"></i>
              480-839-3333
            </a>
            <span class="text-white/80">|</span>
            <span class="text-white font-medium">Free Quote Available</span>
          </div>
        </div>
        
        <div class="flex-shrink-0">
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div class="text-white mb-4">
              <i class="fas fa-shield-alt text-4xl mb-3"></i>
              <h3 class="text-xl font-semibold">24/7 Protection</h3>
            </div>
            <ul class="text-white/90 space-y-2 text-left">
              <li class="flex items-center gap-2">
                <i class="fas fa-check text-green-400"></i>
                Professional Installation
              </li>
              <li class="flex items-center gap-2">
                <i class="fas fa-check text-green-400"></i>
                Smart Home Integration
              </li>
              <li class="flex items-center gap-2">
                <i class="fas fa-check text-green-400"></i>
                Remote Monitoring
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No props or state needed for this component
</script>

<style scoped>
.btn-phone {
  @apply bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1;
}

/* Add a subtle pulse animation to the phone number */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.btn-phone {
  animation: pulse 2s infinite;
}
</style> 