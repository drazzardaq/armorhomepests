<template>
  <div>
    <!-- Careers Hero -->
    <section class="relative pt-24 bg-cover bg-center" style="background-image: url('@/assets/images/careers-hero.jpg');">
      <div class="absolute inset-0 bg-gradient-to-r from-dark-gray/80 to-dark-gray/60"></div>
      <div class="container-custom relative z-10 py-16 text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">Join Our Team</h1>
        <p class="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-slide-up">
          Build your career with MyArmorHome Pest Control
        </p>
      </div>
    </section>

    <!-- Why Join Us -->
    <section class="py-16 bg-white">
      <div class="container-custom">
        <h2 class="text-3xl font-bold text-center mb-12">Why Join MyArmorHome?</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="benefit in benefits" :key="benefit.title" class="bg-gray-50 p-6 rounded-xl shadow-md hover-lift">
            <div class="text-primary-blue text-3xl mb-4">
              <i :class="benefit.icon"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">{{ benefit.title }}</h3>
            <p class="text-gray-600">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Open Positions -->
    <section class="py-16 bg-gray-50">
      <div class="container-custom">
        <h2 class="text-3xl font-bold text-center mb-12">Open Positions</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="position in positions" :key="position.title" class="bg-white p-6 rounded-xl shadow-md hover-lift">
            <h3 class="text-xl font-bold mb-2">{{ position.title }}</h3>
            <p class="text-gray-600 mb-4">{{ position.location }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tag in position.tags" :key="tag" class="px-3 py-1 bg-primary-blue/10 text-primary-blue rounded-full text-sm">
                {{ tag }}
              </span>
            </div>
            <p class="text-gray-600 mb-4">{{ position.description }}</p>
            <button @click="applyForPosition(position)" class="btn-primary">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Process -->
    <section class="py-16 bg-white">
      <div class="container-custom">
        <h2 class="text-3xl font-bold text-center mb-12">Application Process</h2>
        <div class="max-w-4xl mx-auto">
          <div class="relative">
            <div class="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            <div v-for="(step, index) in applicationSteps" :key="index" class="relative mb-12">
              <div class="flex items-center">
                <div class="w-1/2 pr-8 text-right" :class="{ 'order-2': index % 2 === 1 }">
                  <h3 class="text-xl font-bold mb-2">{{ step.title }}</h3>
                  <p class="text-gray-600">{{ step.description }}</p>
                </div>
                <div class="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold">
                  {{ index + 1 }}
                </div>
                <div class="w-1/2 pl-8" :class="{ 'order-1': index % 2 === 1 }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Employee Testimonials -->
    <section class="py-16 bg-gray-50">
      <div class="container-custom">
        <h2 class="text-3xl font-bold text-center mb-12">What Our Team Says</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="testimonial in employeeTestimonials" :key="testimonial.name" class="bg-white p-6 rounded-xl shadow-md">
            <div class="flex items-center mb-4">
              <img :src="testimonial.image" :alt="testimonial.name" class="w-16 h-16 rounded-full object-cover mr-4">
              <div>
                <h3 class="font-bold">{{ testimonial.name }}</h3>
                <p class="text-gray-600">{{ testimonial.position }}</p>
              </div>
            </div>
            <p class="text-gray-600 italic">"{{ testimonial.quote }}"</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Modal -->
    <div v-if="showApplicationModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-xl p-8 max-w-2xl w-full mx-4">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-2xl font-bold">Apply for {{ selectedPosition?.title }}</h3>
          <button @click="showApplicationModal = false" class="text-gray-500 hover:text-gray-700">
            <i class="fas fa-times text-xl"></i>
          </button>
        </div>
        <form @submit.prevent="submitApplication" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="applicantName" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" 
                id="applicantName" 
                v-model="application.name" 
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                required
              >
            </div>
            <div>
              <label for="applicantEmail" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                id="applicantEmail" 
                v-model="application.email" 
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                required
              >
            </div>
          </div>
          <div>
            <label for="applicantPhone" class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input 
              type="tel" 
              id="applicantPhone" 
              v-model="application.phone" 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              required
            >
          </div>
          <div>
            <label for="applicantResume" class="block text-sm font-medium text-gray-700 mb-1">Resume</label>
            <input 
              type="file" 
              id="applicantResume" 
              @change="handleFileUpload" 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              accept=".pdf,.doc,.docx"
              required
            >
          </div>
          <div>
            <label for="applicantCover" class="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
            <textarea 
              id="applicantCover" 
              v-model="application.coverLetter" 
              rows="4" 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn-primary w-full">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const benefits = [
  {
    icon: 'fas fa-medal',
    title: 'Competitive Benefits',
    description: 'Health insurance, 401(k) matching, paid time off, and more.'
  },
  {
    icon: 'fas fa-graduation-cap',
    title: 'Professional Growth',
    description: 'Ongoing training and opportunities for advancement.'
  },
  {
    icon: 'fas fa-users',
    title: 'Great Team Culture',
    description: 'Work with a supportive and collaborative team.'
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Career Advancement',
    description: 'Clear paths for growth and leadership opportunities.'
  },
  {
    icon: 'fas fa-balance-scale',
    title: 'Work-Life Balance',
    description: 'Flexible schedules and family-friendly policies.'
  },
  {
    icon: 'fas fa-hand-holding-usd',
    title: 'Competitive Pay',
    description: 'Above-market compensation with performance bonuses.'
  }
];

const positions = [
  {
    title: 'Pest Control Technician',
    location: 'Phoenix, AZ',
    tags: ['Full-Time', 'Entry Level', 'Training Provided'],
    description: 'Join our team as a Pest Control Technician. We provide comprehensive training and all necessary equipment.'
  },
  {
    title: 'Sales Representative',
    location: 'Mesa, AZ',
    tags: ['Full-Time', 'Commission', 'Sales Experience'],
    description: 'Drive business growth through consultative sales and customer relationship management.'
  },
  {
    title: 'Service Manager',
    location: 'Scottsdale, AZ',
    tags: ['Full-Time', 'Management', '5+ Years Experience'],
    description: 'Lead a team of technicians and ensure exceptional service delivery.'
  },
  {
    title: 'Customer Service Representative',
    location: 'Phoenix, AZ',
    tags: ['Full-Time', 'Customer Service', 'Communication'],
    description: 'Provide outstanding customer support and handle service scheduling.'
  }
];

const applicationSteps = [
  {
    title: 'Submit Application',
    description: 'Fill out our online application form and upload your resume.'
  },
  {
    title: 'Initial Interview',
    description: 'Meet with our hiring team to discuss your experience and career goals.'
  },
  {
    title: 'Skills Assessment',
    description: 'Complete relevant assessments to evaluate your technical abilities.'
  },
  {
    title: 'Final Interview',
    description: 'Meet with department managers and team members.'
  },
  {
    title: 'Offer & Onboarding',
    description: 'Receive your offer letter and begin the onboarding process.'
  }
];

const employeeTestimonials = [
  {
    name: 'John Smith',
    position: 'Senior Technician',
    image: '@/assets/images/team/john.jpg',
    quote: 'Working at MyArmorHome has been incredibly rewarding. The training and support are outstanding.',
  },
  {
    name: 'Sarah Johnson',
    position: 'Sales Manager',
    image: '@/assets/images/team/sarah.jpg',
    quote: 'The opportunities for growth and the supportive team culture make this a great place to work.',
  },
  {
    name: 'Mike Davis',
    position: 'Service Manager',
    image: '@/assets/images/team/mike.jpg',
    quote: 'Ive grown both professionally and personally since joining MyArmorHome. The benefits are excellent.',
  },
];

const showApplicationModal = ref(false);
const selectedPosition = ref(null);
const application = ref({
  name: '',
  email: '',
  phone: '',
  resume: null,
  coverLetter: ''
});

const applyForPosition = (position) => {
  selectedPosition.value = position;
  showApplicationModal.value = true;
};

const handleFileUpload = (event) => {
  application.value.resume = event.target.files[0];
};

const submitApplication = () => {
  // Here you would typically send the application data to your backend
  console.log('Application submitted:', {
    position: selectedPosition.value,
    ...application.value
  });
  
  // Reset form and close modal
  application.value = {
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: ''
  };
  showApplicationModal.value = false;
};
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