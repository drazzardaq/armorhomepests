<template>
  <div>
    <!-- About Hero -->
    <section class="relative pt-24 bg-cover bg-center" style="background-image: url('@/assets/images/about-hero.jpg');">
      <div class="absolute inset-0 bg-gradient-to-r from-dark-gray/80 to-dark-gray/60"></div>
      <div class="container-custom relative z-10 py-16 text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">About HomeGuard</h1>
        <p class="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-slide-up">
          Protecting Arizona homes and businesses since 2010
        </p>
      </div>
    </section>

    <!-- Mission Statement -->
    <section class="py-16 bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6">Our Mission</h2>
            <p class="text-gray-600 mb-6">
              At HomeGuard, we're committed to providing exceptional pest control and security services to protect what matters most to you. Our veteran-led team brings years of experience and dedication to every job.
            </p>
            <div class="grid grid-cols-2 gap-6">
              <div class="text-center p-4 bg-gray-50 rounded-lg">
                <div class="text-3xl font-bold text-primary-blue mb-2">13+</div>
                <div class="text-gray-600">Years Experience</div>
              </div>
              <div class="text-center p-4 bg-gray-50 rounded-lg">
                <div class="text-3xl font-bold text-primary-blue mb-2">10k+</div>
                <div class="text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
          <div class="relative rounded-xl overflow-hidden shadow-lg">
            <img src="@/assets/images/about-mission.jpg" alt="Our Mission" class="w-full h-full object-cover">
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="py-16 bg-gray-50">
      <div class="container-custom">
        <h2 class="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-xl shadow-md hover-lift">
            <div class="text-primary-blue text-4xl mb-4">
              <i class="fas fa-heart"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Customer First</h3>
            <p class="text-gray-600">We prioritize your satisfaction and peace of mind above all else.</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md hover-lift">
            <div class="text-primary-blue text-4xl mb-4">
              <i class="fas fa-shield-alt"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Reliability</h3>
            <p class="text-gray-600">Consistent, dependable service you can count on every time.</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md hover-lift">
            <div class="text-primary-blue text-4xl mb-4">
              <i class="fas fa-leaf"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Sustainability</h3>
            <p class="text-gray-600">Eco-friendly solutions that protect both your home and our environment.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="py-16 bg-white">
      <div class="container-custom">
        <h2 class="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="member in team" :key="member.name" class="bg-white rounded-xl overflow-hidden shadow-lg hover-lift">
            <img :src="member.image" :alt="member.name" class="w-full h-64 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-1">{{ member.name }}</h3>
              <p class="text-primary-blue mb-4">{{ member.position }}</p>
              <p class="text-gray-600 mb-4">{{ member.bio }}</p>
              <div class="flex gap-4">
                <a v-if="member.linkedin" :href="member.linkedin" class="text-gray-400 hover:text-primary-blue">
                  <i class="fab fa-linkedin"></i>
                </a>
                <a v-if="member.twitter" :href="member.twitter" class="text-gray-400 hover:text-primary-blue">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gray-100 py-16">
      <div class="container-custom text-center">
        <h2 class="text-3xl font-bold mb-6">Join Our Team</h2>
        <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
          We're always looking for talented individuals to join our growing team. Check out our current openings.
        </p>
        <a href="https://employee.myarmorhome.com/" target="_blank" class="btn-primary">
          View Careers
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
const team = [
  {
    name: 'John Smith',
    position: 'Founder & CEO',
    image: '@/assets/images/team/john.jpg',
    bio: 'Veteran with 20+ years of experience in pest control and business management.',
    linkedin: 'https://linkedin.com/in/johnsmith'
  },
  {
    name: 'Sarah Johnson',
    position: 'Operations Manager',
    image: '@/assets/images/team/sarah.jpg',
    bio: 'Expert in streamlining operations and ensuring customer satisfaction.',
    linkedin: 'https://linkedin.com/in/sarahjohnson'
  },
  {
    name: 'Mike Rodriguez',
    position: 'Lead Technician',
    image: '@/assets/images/team/mike.jpg',
    bio: 'Certified pest control specialist with 15 years of field experience.',
    linkedin: 'https://linkedin.com/in/mikerodriguez'
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