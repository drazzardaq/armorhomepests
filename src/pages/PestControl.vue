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
        <h2 class="text-4xl h-auto font-bold text-center w-full block text-dark-gray">Common Pests We Control</h2>
        <div class="grid grid-cols-2 gap-4">
          <div v-for="(pest, index) in pests" :key="index" class="pest-item">
            <img :src="pest.image" :alt="pest.name" class="pest-image" />
            <h3>{{ pest.name }}</h3>
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

    <!-- Testimonials Section -->
    <section class="py-20 bg-gradient-to-br from-dark-gray to-gray-800">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12 text-white">What Our Customers Say</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(avatar, index) in randomUserAvatars" :key="index" class="testimonial flex ">
            <img :src="avatar" alt="Random User Avatar" class="w-16 h-16 rounded-full" />
            <div class="ml-4 flex flex-col justify-center">
              <h3 class="text-xl font-semibold text-white">Customer {{ index + 1 }}</h3>
              <p class="text-gray-300">"The service was quick and effective. Highly recommend!"</p>
            </div>
            <!-- <h3 class="text-xl font-semibold text-white">Customer {{ index + 1 }}</h3> -->
            <!-- <p class="text-gray-300">"Great service! The team was professional and effective."</p> -->
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

    <!-- Pest Control Boxes -->
    <!-- <div class="pest-control-container">
      <div class="box" v-for="(item, index) in items" :key="index">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ref } from 'vue';

const randomUserAvatars = ref([]);

const fetchRandomUserAvatars = async () => {
  try {
    const response = await fetch('https://randomuser.me/api/?results=4');
    const data = await response.json();
    randomUserAvatars.value = data.results.map(user => user.picture.large);
  } catch (error) {
    console.error('Error fetching random user avatars:', error);
  }
};

const items = ref([
  { title: 'Box 1', description: 'Description for box 1' },
  { title: 'Box 2', description: 'Description for box 2' },
  { title: 'Box 3', description: 'Description for box 3' },
]);

const pests = ref([
  { name: 'Ants', image: '@/assets/images/ants zoomed.jpg' },
  { name: 'Cockroaches', image: '@/assets/images/scorpion.jpg' },
  { name: 'Mice', image: '@/assets/images/services/rodents.jpg' },
  { name: 'Termites', image: '@/assets/images/mosquito.jpg' },
]);

onMounted(() => {
  fetchRandomUserAvatars();

  // Animate elements when the page loads
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  // Animate the hero content
  const heroContent = document.querySelector('.hero-section-content');
  if (heroContent) {
    tl.from(heroContent.children, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
    });
  }

  // Animate the cards
  const cards = document.querySelectorAll('.card');
  if (cards.length) {
    gsap.from(cards, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.card',
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse',
      },
    });
  }

  // Animate the process steps
  const steps = document.querySelectorAll('.process-step');
  if (steps.length) {
    gsap.from(steps, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.process-step',
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse',
      },
    });
  }
});
</script>

<style scoped>
.hero-section {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
}

.hero-section-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
}

.hero-section-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
}

.hero-section-content {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 768px;
  margin: 0 auto;
  padding: 16px;
}

.hero-section-content h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.hero-section-content p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  @apply ah-[380px] self-center items-center justify-center flex flex-col;
}

.card:hover {
  transform: translateY(-0.5rem);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}

.card-img {
  width: 100%;
  height: 12rem;
  object-fit: cover;
  @apply max-h-[250px];
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

.process-step {
  text-align: center;
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.step-number {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #38a169;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0 auto 1rem;
}

.pest-control-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  justify-content: center;
}

.box {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  width: 300px;
  text-align: center;
  background-color: #f9f9f9;
}

.pest-item {
  text-align: center;
}

.pest-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>