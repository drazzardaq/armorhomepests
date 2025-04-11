<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      title="Security Services"
      description="Protecting your home with advanced security solutions"
      buttonText="Get a Free Quote"
      buttonLink="/contact"
    />

    <!-- Security Features Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12 text-dark-gray">Our Security Solutions</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card card-hover">
            <div class="card-body">
              <div class="feature-icon">
                <i class="fas fa-shield-alt"></i>
              </div>
              <h3 class="card-title">Smart Alarm Systems</h3>
              <p class="card-text">AI-powered security systems that learn your habits and provide personalized protection.</p>
              <router-link to="/contact" class="btn btn-gradient">Learn More</router-link>
            </div>
          </div>
          <div class="card card-hover">
            <div class="card-body">
              <div class="feature-icon">
                <i class="fas fa-video"></i>
              </div>
              <h3 class="card-title">Advanced Surveillance</h3>
              <p class="card-text">HD cameras with facial recognition and real-time alerts to your mobile device.</p>
              <router-link to="/contact" class="btn btn-gradient">Learn More</router-link>
            </div>
          </div>
          <div class="card card-hover">
            <div class="card-body">
              <div class="feature-icon">
                <i class="fas fa-mobile-alt"></i>
              </div>
              <h3 class="card-title">Mobile Control</h3>
              <p class="card-text">Control your entire home security ecosystem from anywhere with our intuitive app.</p>
              <router-link to="/contact" class="btn btn-gradient">Learn More</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-gradient-to-br from-primary-blue to-secondary-blue">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-6 text-white">Ready to Secure Your Home?</h2>
        <p class="text-xl mb-8 text-white">Get a free consultation and quote for your home security needs.</p>
        <router-link to="/contact" class="btn bg-white text-primary-blue hover:bg-gray-100">Contact Us Today</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  // Animate elements when the page loads
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  // Animate the hero content
  const heroContent = document.querySelector('.hero-section-content')
  if (heroContent) {
    tl.from(heroContent.children, { 
      y: 30, 
      opacity: 0, 
      duration: 0.8,
      stagger: 0.2
    })
  }
  
  // Animate the cards
  const cards = document.querySelectorAll('.card')
  if (cards.length) {
    gsap.from(cards, { 
      y: 50, 
      opacity: 0, 
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.card',
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      }
    })
  }
})
</script>

<style scoped>
.hero-section {
  @apply relative h-screen flex items-center justify-center;
}

.hero-section-bg {
  @apply absolute inset-0 bg-cover bg-center;
}

.hero-section-overlay {
  @apply absolute inset-0 bg-black bg-opacity-60;
}

.hero-section-content {
  @apply relative z-10 text-center max-w-3xl mx-auto px-4;
}

.hero-section-content h1 {
  @apply text-5xl md:text-6xl font-bold mb-6;
}

.hero-section-content p {
  @apply text-xl mb-8;
}

.card {
  @apply bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300;
}

.card-hover:hover {
  @apply transform -translate-y-2;
}

.card-body {
  @apply p-6;
}

.feature-icon {
  @apply text-4xl text-primary-blue mb-4;
}

.card-title {
  @apply text-xl font-bold mb-2;
}

.card-text {
  @apply text-gray-600 mb-4;
}
</style> 