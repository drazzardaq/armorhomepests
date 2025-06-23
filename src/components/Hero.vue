<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-dark-navy via-dark-purple to-dark-navy opacity-90"></div>
    
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full">
        <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-purple/20 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-gold/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </div>

    <!-- Content -->
    <div class="container-custom relative z-10 text-center">
      <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-gold">
          Crypto Trading
        </span>
        <br>
        <span class="text-white">Made Simple</span>
      </h1>
      
      <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in delay-100">
        Trade cryptocurrencies with confidence using our advanced platform. 
        Real-time market data, secure transactions, and expert insights at your fingertips.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-200">
        <button class="btn-gradient-purple">
          Start Trading Now
        </button>
        <button class="btn-outline-white">
          Learn More
        </button>
      </div>

      <!-- Stats -->
      <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in delay-300">
        <div class="text-center">
          <div class="text-3xl md:text-4xl font-bold text-accent-gold mb-2">$1B+</div>
          <div class="text-gray-400">Trading Volume</div>
        </div>
        <div class="text-center">
          <div class="text-3xl md:text-4xl font-bold text-accent-gold mb-2">500K+</div>
          <div class="text-gray-400">Active Users</div>
        </div>
        <div class="text-center">
          <div class="text-3xl md:text-4xl font-bold text-accent-gold mb-2">24/7</div>
          <div class="text-gray-400">Support</div>
        </div>
        <div class="text-center">
          <div class="text-3xl md:text-4xl font-bold text-accent-gold mb-2">99.9%</div>
          <div class="text-gray-400">Uptime</div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </section>
</template>

<script setup>
// Component logic here
</script>

<style scoped>
.animate-pulse {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style> 