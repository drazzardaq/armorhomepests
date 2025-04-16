<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[400px] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-black/50 z-10"></div>
      <div class="relative z-20 w-full h-full">
        <img src="/images/image.png" alt="Contact Us" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div class="text-center text-white px-4">
            <h1 class="text-5xl md:text-7xl font-bold mb-6">Contact Us</h1>
            <p class="text-xl md:text-3xl font-bold text-white/90 mb-8 max-w-3xl mx-auto">Get in touch with our team</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="py-16 bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 class="text-3xl font-bold mb-6">Send Us a Message</h2>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    required
                  >
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    required
                  >
                </div>
              </div>
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="form.phone" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                >
              </div>
              <div>
                <label for="service" class="block text-sm font-medium text-gray-700 mb-1">Service Interest</label>
                <select 
                  id="service" 
                  v-model="form.service" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="general">General Pest Control</option>
                  <option value="scorpion">Scorpion Control</option>
                  <option value="rodents">Rodent Control</option>
                  <option value="mosquito">Mosquito Reduction</option>
                  <option value="commercial">Commercial Pest Control</option>
                  <option value="bedbugs">Bed Bug Control</option>
                </select>
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  rows="4" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
          <div>
            <h2 class="text-3xl font-bold mb-6">Contact Information</h2>
            <div class="space-y-8">
              <div class="flex items-start gap-4">
                <div class="text-primary-blue text-2xl">
                  <i class="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-1">Phone</h3>
                  <a href="tel:480-839-3333" class="text-gray-600 hover:text-primary-blue">480-839-3333</a>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="text-primary-blue text-2xl">
                  <i class="fas fa-envelope"></i>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-1">Email</h3>
                  <a href="mailto:info@myarmorhome.com" class="text-gray-600 hover:text-primary-blue">info@myarmorhome.com</a>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="text-primary-blue text-2xl">
                  <i class="fas fa-clock"></i>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-1">Business Hours</h3>
                  <p class="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p class="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                  <p class="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Office Locations -->
    <section class="py-16 bg-gray-50">
      <div class="container-custom">
        <h2 class="text-3xl font-bold text-center mb-12">Our Office Locations</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="location in locations" :key="location.city" class="bg-white rounded-xl p-6 shadow-md hover-lift">
            <h3 class="text-xl font-bold mb-2">{{ location.city }}</h3>
            <p class="text-gray-600 mb-4">{{ location.address }}</p>
            <div class="flex items-center gap-2 text-primary-blue">
              <i class="fas fa-map-marker-alt"></i>
              <a :href="location.mapLink" target="_blank" class="hover:underline">View on Map</a>
            </div>
          </div>
        </div>
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
  </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
});

const activeFaq = ref(null);

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index;
};

const handleSubmit = () => {
  // Here you would typically send the form data to your backend
  console.log('Form submitted:', form.value);
  // Reset form
  form.value = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  };
};

const locations = [
  {
    city: 'Phoenix',
    address: '123 Main Street, Phoenix, AZ 85001',
    mapLink: 'https://maps.google.com/?q=123+Main+Street+Phoenix+AZ'
  },
  {
    city: 'Mesa',
    address: '456 Center Street, Mesa, AZ 85201',
    mapLink: 'https://maps.google.com/?q=456+Center+Street+Mesa+AZ'
  },
  {
    city: 'Scottsdale',
    address: '789 North Street, Scottsdale, AZ 85251',
    mapLink: 'https://maps.google.com/?q=789+North+Street+Scottsdale+AZ'
  }
];

const faqs = [
  {
    question: "How quickly can you respond to a service request?",
    answer: "We typically respond to service requests within 24 hours. For emergency situations, we offer same-day service in most cases."
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes, we offer free consultations and quotes for all our services. Contact us to schedule a convenient time."
  },
  {
    question: "What areas do you service?",
    answer: "We service the entire Phoenix metropolitan area, including Phoenix, Mesa, Scottsdale, Tempe, and surrounding communities."
  },
  {
    question: "Are your services covered by insurance?",
    answer: "Yes, we are fully licensed and insured. Our insurance coverage protects both our technicians and your property."
  }
];
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