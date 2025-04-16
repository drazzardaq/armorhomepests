<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[650px] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-black/50 z-10"></div>
      <div class="relative z-20 w-full h-full">
        <div class="slider-container">
          <div
            v-for="(slide, index) in slides"
            :key="index"
            class="slider-slide"
          >
            <img :src="slide.image" :alt="slide.alt" />
          </div>
        </div>
      </div>
    </section>

    <!-- Services Categories -->
    <section class="py-12 bg-gray-50">
      <div class="container-custom">
        <div class="flex flex-col md:flex-row gap-6 justify-center mb-12">
          <router-link to="/pest-control" class="category-card bg-white rounded-xl shadow-md p-6 flex-1 max-w-md hover-lift">
            <div class="text-primary-blue text-4xl mb-4">
              <i class="fas fa-bug"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Pest Control</h3>
            <p class="text-gray-600 mb-4">Comprehensive pest control solutions for homes and businesses.</p>
            <span class="text-primary-blue font-medium flex items-center gap-2">
              Learn More <i class="fas fa-arrow-right"></i>
            </span>
          </router-link>
          
          <router-link to="/security" class="category-card bg-white rounded-xl shadow-md p-6 flex-1 max-w-md hover-lift">
            <div class="text-primary-blue text-4xl mb-4">
              <i class="fas fa-shield-alt"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Security Systems</h3>
            <p class="text-gray-600 mb-4">Advanced security solutions to protect your home and family.</p>
            <span class="text-primary-blue font-medium flex items-center gap-2">
              Learn More <i class="fas fa-arrow-right"></i>
            </span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Featured Services Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">Featured Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(service, index) in featuredServices" :key="index" class="card card-hover">
            <img :src="service.image" :alt="service.title" class="card-img">
            <div class="card-body">
              <h3 class="card-title">{{ service.title }}</h3>
              <p class="card-text">{{ service.description }}</p>
              <router-link :to="service.link" class="btn btn-gradient-green">Learn More</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services List -->
    <section class="container-custom py-16">
      <h2 class="text-3xl font-bold text-center mb-12">Our Pest Control Services</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Service Block: General Pest Control -->
        <div id="general" class="card-hover rounded-xl overflow-hidden shadow-lg bg-white group">
          <div class="relative overflow-hidden">
            <img src="@/assets/images/services/general-pest.jpg" alt="Ants" class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-dark-gray/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">General Pest Control</h3>
            <p class="text-gray-600 mb-4">We cover roaches, ants, spiders, and more with proven methods.</p>
            <router-link to="/services#general" class="btn-gradient-blue inline-block">Learn More</router-link>
          </div>
        </div>
        
        <!-- Service Block: Scorpion Control -->
        <div id="scorpion" class="card-hover rounded-xl overflow-hidden shadow-lg bg-white group">
          <div class="relative overflow-hidden">
            <img src="@/assets/images/services/scorpion.jpg" alt="Scorpions" class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-dark-gray/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">Scorpion Control</h3>
            <p class="text-gray-600 mb-4">Specialized treatments for scorpion infestations in Arizona.</p>
            <router-link to="/services#scorpion" class="btn-gradient-blue inline-block">Learn More</router-link>
          </div>
        </div>
        
        <!-- Service Block: Rodent Control -->
        <div id="rodents" class="card-hover rounded-xl overflow-hidden shadow-lg bg-white group">
          <div class="relative overflow-hidden">
            <img src="@/assets/images/services/rodents.jpg" alt="Mice" class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-dark-gray/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">Rodent Control</h3>
            <p class="text-gray-600 mb-4">Effective and safe solutions to eliminate mice and rats.</p>
            <router-link to="/services#rodents" class="btn-gradient-blue inline-block">Learn More</router-link>
          </div>
        </div>
        
        <!-- Service Block: Mosquito Reduction -->
        <div id="mosquito" class="card-hover rounded-xl overflow-hidden shadow-lg bg-white group">
          <div class="relative overflow-hidden">
            <img src="@/assets/images/services/mosquito.jpg" alt="Mosquitoes" class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-dark-gray/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">Mosquito Reduction</h3>
            <p class="text-gray-600 mb-4">Keep your outdoor spaces mosquito-free.</p>
            <router-link to="/services#mosquito" class="btn-gradient-blue inline-block">Learn More</router-link>
          </div>
        </div>
        
        <!-- Service Block: Commercial Pest Control -->
        <div id="commercial" class="card-hover rounded-xl overflow-hidden shadow-lg bg-white group">
          <div class="relative overflow-hidden">
            <img src="@/assets/images/services/commercial.jpg" alt="Commercial" class="w-full ah-[200px] object-cover transition-transform duration-300 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-dark-gray/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">Commercial Pest Control</h3>
            <p class="text-gray-600 mb-4">Comprehensive solutions for businesses.</p>
            <router-link to="/services#commercial" class="btn-gradient-blue inline-block">Learn More</router-link>
          </div>
        </div>
        
        <!-- Service Block: Bed Bug Control -->
        <div id="bedbugs" class="card-hover rounded-xl overflow-hidden shadow-lg bg-white group">
          <div class="relative overflow-hidden">
            <img src="@/assets/images/services/bedbugs.jpg" alt="Bed Bugs" class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-dark-gray/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">Bed Bug Control</h3>
            <p class="text-gray-600 mb-4">Complete eradication of bed bug infestations.</p>
            <router-link to="/services#bedbugs" class="btn-gradient-blue inline-block">Learn More</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Unique Selling Points -->
    <section class="bg-gradient-to-r from-primary-blue to-secondary-blue py-16 text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl font-bold mb-8">Why Choose MyArmorHome?</h2>
        <p class="mb-12 max-w-3xl mx-auto text-white/90">
          We offer reliable, veteran-led pest control services with no long-term contracts. 
          Our team is dedicated to providing exceptional service and ensuring your home is pest-free.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-6 bg-white/10 backdrop-blur-sm rounded-xl hover-lift">
            <div class="text-white text-4xl mb-4">
              <i class="fas fa-shield-alt"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Licensed & Insured</h3>
            <p class="text-white/80">Our technicians are fully licensed and insured for your peace of mind.</p>
          </div>
          
          <div class="p-6 bg-white/10 backdrop-blur-sm rounded-xl hover-lift">
            <div class="text-white text-4xl mb-4">
              <i class="fas fa-clock"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">No Long-Term Contracts</h3>
            <p class="text-white/80">We believe in earning your business every month, not locking you into contracts.</p>
          </div>
          
          <div class="p-6 bg-white/10 backdrop-blur-sm rounded-xl hover-lift">
            <div class="text-white text-4xl mb-4">
              <i class="fas fa-leaf"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Eco-Friendly Options</h3>
            <p class="text-white/80">We offer environmentally safe treatments that are effective and pet-friendly.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-16 bg-gray-50">
      <div class="container-custom">
        <h2 class="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <TestimonialsSlider :testimonials="testimonials" />
        <!-- <div v-for="(avatar, index) in randomUserAvatars" :key="index" class="testimonial"> -->
          <!-- <img :src="avatar" alt="Random User Avatar" class="w-16 h-16 rounded-full" /> -->
          <!-- ...existing testimonial content... -->
        <!-- </div> -->
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="container-custom py-16">
      <h2 class="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div class="max-w-3xl mx-auto">
        <div v-for="(faq, index) in faqs" :key="index" class="mb-4">
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
    
    <!-- Call to Action -->
    <section class="py-20 bg-gradient-to-br from-green-600 to-green-800">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-6 text-white">Ready to Protect Your Home?</h2>
        <p class="text-xl mb-8 text-white">Contact us today for a free consultation and quote.</p>
        <router-link to="/contact" class="btn bg-white text-green-600 hover:bg-gray-100">Contact Us Today</router-link>
      </div>
    </section>

    <!-- Team Showcase Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">Meet Our Clients</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(user, index) in team" :key="index" class="text-center">
            <img :src="user.picture" :alt="user.name" class="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 class="text-xl font-bold">{{ user.name }}</h3>
            <!-- <p class="text-gray-600">{{ user.email }}</p> -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ImageSlider from '@/components/ImageSlider.vue';
import TestimonialsSlider from '@/components/TestimonialsSlider.vue';

const activeFaq = ref(null);

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index;
};

const featuredSlides = [
  {
    image: '@/assets/images/services/general-pest.jpg',
    title: 'General Pest Control',
    description: 'Comprehensive solutions for all common household pests'
  },
  {
    image: '@/assets/images/scorpion.jpg',
    title: 'Scorpion Control',
    description: 'Specialized treatments for Arizonas most dangerous pests'
  },
  {
    image: '@/assets/images/services/rodents.jpg',
    title: 'Rodent Control',
    description: 'Effective and humane solutions for mice and rats'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Phoenix, AZ',
    avatar: '@/assets/images/testimonials/avatar1.jpg',
    text: "MyArmorHome has been amazing! They're professional, thorough, and have completely eliminated our pest problems. Highly recommend!"
  },
  {
    name: 'Michael Rodriguez',
    location: 'Mesa, AZ',
    avatar: '@/assets/images/testimonials/avatar2.jpg',
    text: "The team is knowledgeable and friendly. They explained everything clearly and left our home spotless. Great service!"
  },
  {
    name: 'Emily Thompson',
    location: 'Scottsdale, AZ',
    avatar: '@/assets/images/testimonials/avatar3.jpg',
    text: "We've tried other pest control companies, but MyArmorHome is by far the best. They're reliable and effective."
  }
];

const faqs = [
  {
    question: "What areas do you serve?",
    answer: "We serve the entire Phoenix metropolitan area and surrounding regions."
  },
  {
    question: "Are your treatments safe for pets?",
    answer: "Yes, all our treatments are pet-friendly and environmentally safe."
  },
  {
    question: "Do you offer emergency services?",
    answer: "Yes, we offer 24/7 emergency pest control services."
  },
  {
    question: "How often should I schedule pest control services?",
    answer: "We recommend monthly treatments for optimal pest prevention, but we can customize a schedule based on your specific needs."
  },
  {
    question: "What pests do you treat?",
    answer: "We treat a wide range of pests including ants, roaches, spiders, scorpions, rodents, and more. Contact us for a specific pest issue."
  },
  {
    question: "Do you offer warranties on your services?",
    answer: "Yes, we offer a satisfaction guarantee on all our services. If you're not completely satisfied, we'll return to address the issue at no additional cost."
  }
];

const slides = ref([
  { image: '/images/slider/slide1.jpg', alt: 'Slide 1' },
  { image: '/images/slider/slide2.jpg', alt: 'Slide 2' },
  { image: '/images/slider/slide3.jpg', alt: 'Slide 3' },
]);

const featuredServices = [
  {
    image: '/src/assets/images/services/commercial.jpg',
    title: 'Commercial Pest Control',
    description: 'Comprehensive solutions for businesses.',
    link: '/services/commercial',
  },
  {
    image: '/src/assets/images/mosquito.jpg',
    title: 'Mosquito Reduction',
    description: 'Keep your outdoor spaces mosquito-free.',
    link: '/services/mosquito',
  },
  {
    image: '/src/assets/images/scorpion.jpg',
    title: 'Scorpion Control',
    description: 'Specialized treatments for scorpion infestations.',
    link: '/services/scorpion',
  },
];

const currentSlide = ref(0);

const goToSlide = (index) => {
  currentSlide.value = index;
};

onMounted(() => {
  setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.value.length;
  }, 5000);
});

const team = ref([]);

const fetchTeam = async () => {
  try {
    const response = await fetch('https://randomuser.me/api/?results=6');
    const data = await response.json();
    team.value = data.results.map(user => ({
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      picture: user.picture.large
    }));
  } catch (error) {
    console.error('Error fetching team data:', error);
  }
};

onMounted(fetchTeam);

const randomUserAvatars = ref([]);

const fetchRandomUserAvatars = async () => {
  try {
    const response = await fetch('https://randomuser.me/api/?results=3');
    const data = await response.json();
    randomUserAvatars.value = data.results.map(user => user.picture.large);
  } catch (error) {
    console.error('Error fetching random user avatars:', error);
  }
};

onMounted(fetchRandomUserAvatars);
</script>

<style scoped>
.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.category-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.slider-container {
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 300px;
}

.slider-slide {
  flex: 0 0 100%;
  transition: transform 0.5s ease-in-out;
}

slider-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card {
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-0.5rem);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}

.card-img {
  width: 100%;
  height: 12rem;
  object-fit: cover;
}

.card-body {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.card-text {
  color: #4a5568;
  margin-bottom: 1rem;
}

.btn-gradient-green {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(to right, #38a169, #2f855a);
  color: white;
  text-align: center;
  border-radius: 0.375rem;
  transition: background 0.3s ease;
}

.btn-gradient-green:hover {
  background: linear-gradient(to right, #2f855a, #38a169);
}
</style>