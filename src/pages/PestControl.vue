<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      title="Pest Control Services"
      description="Professional pest control solutions for your home"
      buttonText="Get a Free Quote"
      buttonLink="/contact"
    />

    <!-- Pest Types Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12 text-dark-gray">Common Pests We Control</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card card-hover">
            <img src="/images/ants zoomed.jpg" alt="Ants" class="card-img">
            <div class="card-body">
              <h3 class="card-title">Ant Control</h3>
              <p class="card-text">Effective solutions to eliminate ant infestations and prevent future invasions.</p>
              <router-link to="/contact" class="btn btn-gradient-green">Learn More</router-link>
            </div>
          </div>
          <div class="card card-hover">
            <img src="/images/cockroaclhes.jpg" alt="Cockroaches" class="card-img">
            <div class="card-body">
              <h3 class="card-title">Cockroach Control</h3>
              <p class="card-text">Comprehensive treatments to eradicate cockroaches and keep them from returning.</p>
              <router-link to="/contact" class="btn btn-gradient-green">Learn More</router-link>
            </div>
          </div>
          <div class="card card-hover">
            <img src="/images/house mice mouse.jpg" alt="Rodents" class="card-img">
            <div class="card-body">
              <h3 class="card-title">Rodent Control</h3>
              <p class="card-text">Humane solutions to remove rodents and prevent them from entering your home.</p>
              <router-link to="/contact" class="btn btn-gradient-green">Learn More</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Treatment Process Section -->
    <section class="py-20 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12 text-dark-gray">Our Treatment Process</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="process-step">
            <div class="step-number">1</div>
            <h3 class="text-xl font-bold mb-2">Inspection</h3>
            <p>Thorough assessment of your property to identify pest issues and entry points.</p>
          </div>
          <div class="process-step">
            <div class="step-number">2</div>
            <h3 class="text-xl font-bold mb-2">Treatment Plan</h3>
            <p>Customized solution based on the specific pests and your home's layout.</p>
          </div>
          <div class="process-step">
            <div class="step-number">3</div>
            <h3 class="text-xl font-bold mb-2">Application</h3>
            <p>Professional application of safe, effective treatments to eliminate pests.</p>
          </div>
          <div class="process-step">
            <div class="step-number">4</div>
            <h3 class="text-xl font-bold mb-2">Follow-up</h3>
            <p>Regular inspections and treatments to ensure your home stays pest-free.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-gradient-to-br from-green-600 to-green-800">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-6 text-white">Ready to Eliminate Pests?</h2>
        <p class="text-xl mb-8 text-white">Get a free consultation and quote for your pest control needs.</p>
        <router-link to="/contact" class="btn bg-white text-green-600 hover:bg-gray-100">Contact Us Today</router-link>
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
  
  // Animate the process steps
  const steps = document.querySelectorAll('.process-step')
  if (steps.length) {
    gsap.from(steps, { 
      y: 30, 
      opacity: 0, 
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.process-step',
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

.card-img {
  @apply w-full h-48 object-cover;
}

.card-body {
  @apply p-6;
}

.card-title {
  @apply text-xl font-bold mb-2;
}

.card-text {
  @apply text-gray-600 mb-4;
}

.btn-gradient-green {
  @apply bg-gradient-to-r from-green-600 to-green-800 text-white hover:from-green-800 hover:to-green-600;
}

.process-step {
  @apply text-center p-6 bg-white rounded-lg shadow-md;
}

.step-number {
  @apply w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4;
}
</style> 