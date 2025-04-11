<template>
  <div>
    <!-- Service Hero -->
    <section class="relative pt-24 bg-cover bg-center" :style="{ backgroundImage: `url('${service.heroImage}')` }">
      <div class="absolute inset-0 bg-gradient-to-r from-dark-gray/80 to-dark-gray/60"></div>
      <div class="container-custom relative z-10 py-16 text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">{{ service.title }}</h1>
        <p class="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-slide-up">
          {{ service.description }}
        </p>
        <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style="animation-delay: 0.2s">
          <a href="tel:480-839-3333" class="btn-primary flex items-center justify-center gap-2">
            <i class="fas fa-phone-alt"></i>
            Call Now: 480-839-3333
          </a>
          <router-link to="/contact" class="btn-secondary">
            Get a Quote
          </router-link>
        </div>
      </div>
    </section>

    <!-- Service Overview -->
    <section class="py-16 bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6">Overview</h2>
            <p class="text-gray-600 mb-6">{{ service.overview }}</p>
            <ul class="space-y-4">
              <li v-for="(feature, index) in service.features" :key="index" class="flex items-start gap-3">
                <i class="fas fa-check-circle text-primary-blue mt-1"></i>
                <span class="text-gray-700">{{ feature }}</span>
              </li>
            </ul>
          </div>
          <div class="relative rounded-xl overflow-hidden shadow-lg">
            <img :src="service.overviewImage" :alt="service.title" class="w-full h-full object-cover">
          </div>
        </div>
      </div>
    </section>

    <!-- Service Process -->
    <section class="py-16 bg-gray-50">
      <div class="container-custom">
        <h2 class="text-3xl font-bold text-center mb-12">Our Process</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(step, index) in service.process" :key="index" class="bg-white rounded-xl p-6 shadow-md hover-lift">
            <div class="text-primary-blue text-4xl mb-4">
              <i :class="step.icon"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">{{ step.title }}</h3>
            <p class="text-gray-600">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Image Gallery -->
    <section class="py-16 bg-white">
      <div class="container-custom">
        <h2 class="text-3xl font-bold text-center mb-12">Gallery</h2>
        <ImageSlider :slides="service.gallery" />
      </div>
    </section>

    <!-- Pricing -->
    <section class="py-16 bg-gray-50">
      <div class="container-custom">
        <h2 class="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(plan, index) in service.pricing" :key="index" class="bg-white rounded-xl p-6 shadow-lg hover-lift">
            <h3 class="text-2xl font-bold mb-4">{{ plan.name }}</h3>
            <div class="text-3xl font-bold text-primary-blue mb-6">{{ plan.price }}</div>
            <ul class="space-y-3 mb-6">
              <li v-for="(feature, fIndex) in plan.features" :key="fIndex" class="flex items-start gap-3">
                <i class="fas fa-check text-primary-blue mt-1"></i>
                <span class="text-gray-700">{{ feature }}</span>
              </li>
            </ul>
            <a href="tel:480-839-3333" class="btn-primary w-full text-center">Get Started</a>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="container-custom py-16">
      <h2 class="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div class="max-w-3xl mx-auto">
        <div v-for="(faq, index) in service.faqs" :key="index" class="mb-4">
          <button 
            @click="toggleFaq(index)" 
            class="w-full text-left bg-white shadow-md rounded-lg p-4 focus:outline-none flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
          >
            <h3 class="text-lg font-bold">{{ faq.question }}</h3>
            <i :class="['fas', activeFaq === index ? 'fa-chevron-up' : 'fa-chevron-down', 'text-primary-blue']"></i>
          </button>
          <div v-show="activeFaq === index" class="p-4 text-gray-600 bg-gray-50 rounded-b-lg">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gray-100 py-16">
      <div class="container-custom text-center">
        <h2 class="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us today for a free consultation and quote. Our team is ready to help you keep your home pest-free.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:480-839-3333" class="btn-primary flex items-center justify-center gap-2">
            <i class="fas fa-phone-alt"></i>
            Call Now: 480-839-3333
          </a>
          <router-link to="/contact" class="btn-secondary">
            Contact Us
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import ImageSlider from '@/components/ImageSlider.vue';

const route = useRoute();
const activeFaq = ref(null);

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index;
};

// This would typically come from an API or store
const service = {
  title: 'General Pest Control',
  description: 'Comprehensive pest control solutions for your home or business',
  heroImage: '@/assets/images/services/general-pest.jpg',
  overview: 'Our general pest control service provides comprehensive protection against common household pests. We use proven methods and eco-friendly treatments to ensure your home stays pest-free.',
  features: [
    'Treatment for ants, roaches, spiders, and more',
    'Eco-friendly solutions safe for pets and children',
    'Regular maintenance and monitoring',
    'Satisfaction guaranteed',
    'Licensed and insured technicians'
  ],
  overviewImage: '@/assets/images/services/general-pest.jpg',
  process: [
    {
      icon: 'fas fa-search',
      title: 'Inspection',
      description: 'Thorough inspection of your property to identify pest issues'
    },
    {
      icon: 'fas fa-clipboard-list',
      title: 'Assessment',
      description: 'Detailed assessment and customized treatment plan'
    },
    {
      icon: 'fas fa-spray-can',
      title: 'Treatment',
      description: 'Professional application of safe and effective treatments'
    },
    {
      icon: 'fas fa-check-double',
      title: 'Follow-up',
      description: 'Regular monitoring and maintenance to ensure long-term results'
    }
  ],
  gallery: [
    {
      image: '@/assets/images/services/general-pest.jpg',
      title: 'General Pest Control',
      description: "Comprehensive solutions for all common household pests"
    },
    {
      image: '@/assets/images/services/scorpion.jpg',
      title: 'Scorpion Control',
      description: "Specialized treatments for Arizona's most dangerous pests"
    },
    {
      image: '@/assets/images/services/rodents.jpg',
      title: 'Rodent Control',
      description: "Effective and humane solutions for mice and rats"
    }
  ],
  pricing: [
    {
      name: 'Basic',
      price: '$49/month',
      features: [
        'Quarterly treatments',
        'Basic pest control',
        'Emergency service',
        '30-day guarantee'
      ]
    },
    {
      name: 'Standard',
      price: '$79/month',
      features: [
        'Monthly treatments',
        'Advanced pest control',
        'Priority service',
        '60-day guarantee'
      ]
    },
    {
      name: 'Premium',
      price: '$99/month',
      features: [
        'Bi-weekly treatments',
        'Complete pest control',
        '24/7 emergency service',
        '90-day guarantee'
      ]
    }
  ],
  faqs: [
    {
      question: "How often do you treat for pests?",
      answer: "We offer flexible treatment schedules based on your needs. Our standard service includes monthly treatments, but we can customize this based on your specific situation."
    },
    {
      question: "Are your treatments safe for pets?",
      answer: "Yes, all our treatments are pet-friendly and environmentally safe. We use products that are effective against pests while being safe for your family and pets."
    },
    {
      question: "What happens if I still see pests after treatment?",
      answer: "We offer a satisfaction guarantee. If you still see pests after our treatment, we'll return to address the issue at no additional cost."
    }
  ]
};

onMounted(() => {
  // Here you would typically fetch the service details based on the route parameter
  console.log('Service ID:', route.params.id);
});
</script>

<style scoped>
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
</style> 