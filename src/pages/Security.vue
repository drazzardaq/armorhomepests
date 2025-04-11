<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      title="Advanced Security Solutions"
      description="Protect your home and business with our state-of-the-art security systems."
      buttonText="Get a Free Security Assessment"
      buttonLink="/contact"
    />

    <!-- Security Features Section -->
    <section class="py-20 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12 text-dark-gray">Why Choose Our Security Services?</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div class="bg-white rounded-lg shadow-lg p-6 text-center">
            <i class="fas fa-shield-alt text-4xl text-primary-blue mb-4"></i>
            <h3 class="text-xl font-bold mb-2">24/7 Monitoring</h3>
            <p class="text-gray-600">Our systems provide round-the-clock monitoring to ensure your safety at all times.</p>
          </div>
          <div class="bg-white rounded-lg shadow-lg p-6 text-center">
            <i class="fas fa-lock text-4xl text-primary-blue mb-4"></i>
            <h3 class="text-xl font-bold mb-2">Advanced Technology</h3>
            <p class="text-gray-600">We use cutting-edge technology to deliver reliable and efficient security solutions.</p>
          </div>
          <div class="bg-white rounded-lg shadow-lg p-6 text-center">
            <i class="fas fa-user-shield text-4xl text-primary-blue mb-4"></i>
            <h3 class="text-xl font-bold mb-2">Expert Support</h3>
            <p class="text-gray-600">Our team of experts is always ready to assist you with any security concerns.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-gradient-to-br from-primary-blue to-secondary-blue">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-6 text-white">Secure Your Property Today</h2>
        <p class="text-xl mb-8 text-white">Contact us now for a free consultation and personalized security plan.</p>
        <router-link to="/contact" class="btn bg-white text-primary-blue hover:bg-gray-100">Get Started</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const randomUserImages = ref([]);

const fetchRandomUserImages = async () => {
  try {
    const response = await fetch('https://randomuser.me/api/?results=3');
    const data = await response.json();
    randomUserImages.value = data.results.map(user => user.picture.large);
  } catch (error) {
    console.error('Error fetching random user images:', error);
  }
};

onMounted(() => {
  fetchRandomUserImages();

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
  @apply bg-white rounded-lg shadow-lg p-6 text-center;
}

.card i {
  @apply text-4xl text-primary-blue mb-4;
}

.card h3 {
  @apply text-xl font-bold mb-2;
}

.card p {
  @apply text-gray-600;
}
</style>