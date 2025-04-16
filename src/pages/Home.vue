<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
    <!-- Hero Section Slider -->
    <section class="relative h-[650px] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-black/50 z-10"></div>
      <div class="relative z-20 w-full h-full">
        <div class="slider-container relative w-full h-full">
          <div
            v-for="(slide, index) in slides"
            :key="index"
            class="slider-slide absolute inset-0 transition-opacity duration-1000"
            :class="{ 'opacity-100': currentSlide === index, 'opacity-0': currentSlide !== index }"
          >
            <img :src="slide.image" :alt="slide.alt" class="w-full h-full object-cover brightness-50" />
            <div class="absolute inset-0 bg-black/10 flex items-center justify-center">
              <div class="text-center text-white px-4">
                <h1 class="text-5xl md:text-7xl font-bold mb-6 text-white">{{ slide.title }}</h1>
                <p class="text-xl md:text-3xl font-bold text-white/90 mb-8 max-w-3xl mx-auto">{{ slide.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Navigation Dots -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          <button
            v-for="(slide, index) in slides"
            :key="index"
            class="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all duration-300 brightness-50 ring-0"
            :class="{ 'bg-white': currentSlide === index }"
            @click="goToSlide(index)"
          ></button>
        </div>
      </div>
    </section>

    <!-- Featured Section -->
    <section class="py-20 bg-gradient-to-r from-gray-100 to-gray-200">
      <div class="container mx-auto px-4 text-center">
        <!-- <img src="/src/assets/feat.png" alt="Featured" class="mx-auto mb-8 max-w-md rounded-lg shadow-lg" /> -->
        <h2 class="text-4xl font-bold mb-4 text-gray-800">Why Choose Us?</h2>
        <p class="text-lg text-gray-600 mb-8">
          We provide top-notch pest control services with a focus on safety, efficiency, and customer satisfaction. Our team of experts is dedicated to keeping your home and business pest-free.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 class="text-2xl font-semibold mb-2 text-primary-blue">Expert Technicians</h3>
            <p class="text-gray-600">Our certified professionals use the latest techniques to ensure effective pest control.</p>
          </div>
          <div class="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 class="text-2xl font-semibold mb-2 text-primary-blue">Eco-Friendly Solutions</h3>
            <p class="text-gray-600">We prioritize environmentally safe methods to protect your family and pets.</p>
          </div>
          <div class="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 class="text-2xl font-semibold mb-2 text-primary-blue">Guaranteed Results</h3>
            <p class="text-gray-600">We stand by our work with a satisfaction guarantee for all our services.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Security Services Section -->
    <section class="py-20 bg-gradient-to-br from-primary-blue to-secondary-blue text-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">Intelligent Security Solutions</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Smart Alarm Systems"
            description="AI-powered security systems that learn your habits and provide personalized protection."
            icon="fas fa-shield-alt"
            link="/security"
            @click="openServiceModal('smart-alarm')"
          />
          <ServiceCard
            title="Advanced Surveillance"
            description="HD cameras with facial recognition and real-time alerts to your mobile device."
            icon="fas fa-video"
            link="/security"
            @click="openServiceModal('surveillance')"
          />
          <ServiceCard
            title="Seamless Integration"
            description="Control your entire home security ecosystem from anywhere with our intuitive app."
            icon="fas fa-mobile-alt"
            link="/security"
            @click="openServiceModal('integration')"
          />
        </div>
      </div>
    </section>

    <!-- Pest Control Section -->
    <section class="py-20 bg-dark-gray">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12 text-white">Comprehensive Pest Control</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Targeted Insect Control"
            description="Precision treatments that eliminate pests while being safe for your family and pets."
            image="images/termite.jpeg"
            link="/pest-control"
            buttonClass="btn-gradient-green"
            @click="openServiceModal('insect-control')"
          />
          <ServiceCard
            title="Advanced Rodent Management"
            description="Humane solutions that prevent rodents from entering your home in the first place."
            image="images/rat.jpeg"
            link="/pest-control"
            buttonClass="btn-gradient-green"
            @click="openServiceModal('rodent-control')"
          />
          <ServiceCard
            title="Bird Control"
            description="Professional solutions to protect your property from bird-related damage and health hazards."
            image="images/pigeon-capture-phoenix-az_orig.jpeg"
            link="/pest-control"
            buttonClass="btn-gradient-green"
            @click="openServiceModal('bird-control')"
          />
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-gradient-to-br from-dark-gray to-accent-blue">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12 text-white">What Our Neighbors Say</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <TestimonialCard
            name="Mike Banks"
            image="https://randomuser.me/api/portraits/men/4.jpg"
            text="Hands-free install! It makes me feel more comfortable having a system that has a great reputation"
          />
          <TestimonialCard
            name="Amanda Collins"
            image="https://randomuser.me/api/portraits/women/5.jpg"
            text="Best customer service!"
          />
          <TestimonialCard
            name="Ethan Jones"
            image="https://randomuser.me/api/portraits/men/6.jpg"
            text="Nate was amazing! He got my family and I protected"
          />
          <TestimonialCard
            name="Cynthia Wolf"
            image="https://randomuser.me/api/portraits/women/7.jpg"
            text="Being able to have cameras on my front door is a game changer"
          />
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <CallToAction
      title="Smart Home Security Package"
      description="Get 20% off your first service when you mention this promotion! Experience the future of home security today."
      buttonText="Get Your Free Quote"
      buttonLink="/contact"
      legalInfo="*Offer valid for new customers only. Cannot be combined with other promotions."
    />

    <!-- Our Certifications Section -->
    <section class="py-12 bg-gray-50">
      <h2 class="text-3xl font-bold text-center mb-6">Our Certifications</h2>
      <Badges />
    </section>

    <!-- Service Detail Modals -->
    <ServiceDetailModal
      v-if="activeModal === 'smart-alarm'"
      :is-open="activeModal === 'smart-alarm'"
      title="Smart Alarm Systems"
      image="images/service.png"
      description="Our AI-powered smart alarm systems learn your daily routines and adapt to provide personalized protection. With advanced sensors and machine learning algorithms, our systems can distinguish between normal household activity and potential security threats."
      :features="[
        'Motion sensors with pet immunity',
        'Smart door and window sensors',
        'Mobile app control and monitoring',
        'Voice command integration',
        'Automated lighting control',
        'Emergency response integration'
      ]"
      @close="closeServiceModal"
    />

    <ServiceDetailModal
      v-if="activeModal === 'surveillance'"
      :is-open="activeModal === 'surveillance'"
      title="Advanced Surveillance"
      image="images/service.png"
      description="Our HD surveillance cameras with facial recognition technology provide real-time alerts to your mobile device. Monitor your home from anywhere with our secure, encrypted video feed."
      :features="[
        '1080p HD video quality',
        'Night vision capabilities',
        'Motion detection with alerts',
        'Facial recognition technology',
        'Cloud storage options',
        'Two-way audio communication'
      ]"
      @close="closeServiceModal"
    />

    <ServiceDetailModal
      v-if="activeModal === 'integration'"
      :is-open="activeModal === 'integration'"
      title="Seamless Integration"
      image="images/service.png"
      description="Control your entire home security ecosystem from anywhere with our intuitive mobile app. Our systems integrate with popular smart home platforms, allowing you to create a fully connected home environment."
      :features="[
        'Mobile app for iOS and Android',
        'Real-time notifications',
        'Remote arming and disarming',
        'Integration with smart home platforms',
        'Custom automation rules',
        'Energy-saving features'
      ]"
      @close="closeServiceModal"
    />

    <ServiceDetailModal
      v-if="activeModal === 'insect-control'"
      :is-open="activeModal === 'insect-control'"
      title="Targeted Insect Control"
      image="images/service.png"
      description="Our precision treatments target common household pests like ants, cockroaches, and spiders, using methods that are safe for your family and pets. We focus on eliminating the source of the problem, not just the symptoms."
      :features="[
        'Eco-friendly treatment options',
        'Targeted application methods',
        'Safe for children and pets',
        'Long-lasting protection',
        'Identification of entry points',
        'Prevention recommendations'
      ]"
      @close="closeServiceModal"
    />

    <ServiceDetailModal
      v-if="activeModal === 'rodent-control'"
      :is-open="activeModal === 'rodent-control'"
      title="Advanced Rodent Management"
      image="images/service.png"
      description="We use humane methods to remove rodents from your home, focusing on prevention to keep them from returning. Our comprehensive approach includes sealing entry points and implementing deterrent strategies."
      :features="[
        'Humane trapping methods',
        'Entry point identification and sealing',
        'Exclusion techniques',
        'Sanitation recommendations',
        'Follow-up inspections',
        'Prevention strategies'
      ]"
      @close="closeServiceModal"
    />

    <ServiceDetailModal
      v-if="activeModal === 'bird-control'"
      :is-open="activeModal === 'bird-control'"
      title="Bird Control"
      image="/images/pigeon-capture-phoenix-az_orig.jpeg"
      description="Birds, bird droppings, and nesting materials carry transmittable diseases and ectoparasites. Bird nests can host bird mites. Bird droppings can contaminate standing bodies of water, such as pools, and spas, etc.. Bird droppings are acidic and can strip paint from your car, and home. Reducing, and or eliminating conducive conditions is the first step of any bird management program. Call today to schedule your free Bird inspection and assessment."
      :features="[
        'Professional bird control solutions',
        'Safe and effective deterrent methods',
        'Regular inspections and maintenance',
        'Customized protection plans',
        'Documentation of treatments',
        'Guaranteed satisfaction'
      ]"
      @close="closeServiceModal"
    />

    <SecurityCTA />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TestimonialCard from '@/components/TestimonialCard.vue';
import ServiceCard from '@/components/ServiceCard.vue';
import HeroSection from '@/components/HeroSection.vue';
import CallToAction from '@/components/CallToAction.vue';
import ServiceDetailModal from '@/components/ServiceDetailModal.vue';
import SecurityCTA from '@/components/SecurityCTA.vue';
import Badges from '@/components/Badges.vue';

const activeModal = ref(null);

const openServiceModal = (serviceId) => {
  activeModal.value = serviceId;
};

const closeServiceModal = () => {
  activeModal.value = null;
};

const slides = [
  {
    image: '/images/service.png',
    alt: 'Slide 1',
    title: 'Expert Home Security',
    description: 'Protecting your home with professional, eco-friendly pest management services.',
  },
  {
    image: '/images/s22.png',
    alt: 'Slide 2',
    title: 'Eco-Friendly Solutions',
    description: 'We prioritize environmentally safe methods to protect your family and pets.',
  },
  {
    image: '/images/slider/3.jpg',
    alt: 'Slide 3',
    title: 'Year-Round Protection',
    description: 'Comprehensive pest control for every season.',
  },
];

const currentSlide = ref(0);

const goToSlide = (index) => {
  currentSlide.value = index;
};

onMounted(() => {
  setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length;
  }, 5000);
});
</script>

<style scoped>
.hero-section {
  @apply relative h-screen flex items-center justify-center text-white;
}

.hero-section-bg {
  @apply absolute inset-0 bg-cover bg-center;
}

.hero-section-overlay {
  @apply absolute inset-0 bg-black bg-opacity-50;
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

.card-img {
  @apply w-full h-48 object-cover;
}

.card-title {
  @apply text-xl font-bold mb-2;
}

.card-text {
  @apply text-gray-600 mb-4;
}

.feature-icon {
  @apply text-4xl text-primary-blue mb-4;
}

.testimonial-card {
  @apply bg-white rounded-lg shadow-lg p-6;
}

.testimonial-author {
  @apply text-lg;
}

.testimonial-text {
  @apply text-gray-800 italic;
}

.special-offer {
  @apply bg-white rounded-lg shadow-lg;
}

.legal-info {
  @apply text-sm text-gray-400 mt-4;
}

.slider-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.slider-slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.slider-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slider-slide .text-center {
  z-index: 20;
}

.slider-slide.opacity-100 {
  opacity: 1;
}
</style>