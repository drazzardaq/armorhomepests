<template>
  <!-- Advisors Section -->
  <section class="glassy-bg rounded-3xl mx-auto my-16 max-w-7xl shadow-xl p-8 animate-fade-in-up font-body" aria-label="Our Advisors">
    <h1 class="text-3xl md:text-4xl font-heading font-extrabold text-gradient mb-8 text-center">Our Advisors</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <BaseCard 
        v-for="advisor in advisors" 
        :key="advisor.id"
        customClass="frosted-glass-card bg-white/80 rounded-3xl p-6 text-center animate-pop-in focus:outline-none focus:ring-2 focus:ring-accent font-body"
        tabindex="0"
        :aria-label="advisor.name + ', ' + advisor.title"
      >
        <div class="relative w-24 h-24 mx-auto mb-4">
          <img 
            :src="advisor.image" 
            :alt="advisor.name + ' portrait'"
            class="w-full h-full rounded-full object-cover shadow-lg"
            loading="lazy"
          >
        </div>
        <h3 class="text-xl font-ui font-bold text-accent mb-2">{{ advisor.name }}</h3>
        <p class="text-tvp-purple font-ui font-medium mb-3">{{ advisor.title }}</p>
        <p class="text-muted font-body text-sm mb-4">{{ advisor.bio }}</p>
        <div class="flex justify-center space-x-3">
          <a 
            v-if="advisor.linkedin" 
            :href="advisor.linkedin" 
            target="_blank"
            aria-label="LinkedIn profile for {{ advisor.name }}"
            class="text-accent hover:text-accent transition-colors"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a 
            v-if="advisor.twitter" 
            :href="advisor.twitter" 
            target="_blank"
            aria-label="Twitter profile for {{ advisor.name }}"
            class="text-accent hover:text-accent transition-colors"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a 
            v-if="advisor.website" 
            :href="advisor.website" 
            target="_blank"
            aria-label="Website for {{ advisor.name }}"
            class="text-accent hover:text-accent transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9a9 9 0 00-9 9m0 0a9 9 0 009-9" />
            </svg>
          </a>
        </div>
      </BaseCard>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const advisors = ref([
  {
    id: 1,
    name: 'Simon P. Michaux',
    title: 'Principal Advisor of Energy and Minerals',
    bio: 'Associate Professor of geometallurgy at the Geological Survey of Finland (GTK). Expert in mining engineering, circular economy, and industrial recycling. Simon contributes technical detail to TVP’s applied projects, advancing the operationalization of transition methods to a new paradigm of energy and materials.',
    image: 'https://www.simonmichaux.com/wp-content/uploads/2022/09/Simon-Michaux-2022.jpg',
    website: 'https://www.simonmichaux.com/'
  },
  {
    id: 2,
    name: 'Abby Twyman',
    title: 'Humanistic Behavioral Scientist',
    bio: 'M.Ed., BCBA, LBA. Board certified behavior analyst focused on applying the science of behavior to improve lives and organizational outcomes. Envisions a future where all citizens reach their fullest potential through science and technology.',
    image: 'https://www.resourcebasedeconomy.org/wp-content/uploads/sites/2/2018/01/abby_twyman.jpg'
  },
  {
    id: 3,
    name: 'Paolo Maculotti',
    title: 'International Contracts & Legal Counsel',
    bio: 'Legal Counsel and International Contracts/Claims Consultant with 12+ years of expertise in contracts, negotiations, and risk management for Fortune 500 clients. Admitted to the bar in France and Spain. Fluent in English, Spanish, French, and Italian.',
    image: 'https://www.resourcebasedeconomy.org/wp-content/uploads/sites/2/2017/12/paolo_maculotti.png'
  },
  {
    id: 4,
    name: 'Henry D. Schlinger, Jr., Ph.D.',
    title: 'Professor of Psychology',
    bio: 'Professor at California State University, Los Angeles. Ph.D. in psychology (applied behavior analysis). Author of three books and 75+ scholarly articles. Keynote speaker at Jacque Fresco Centennial Celebration.',
    image: 'https://www.resourcebasedeconomy.org/wp-content/uploads/sites/2/2018/09/henry_schlinger.jpeg'
  },
  {
    id: 5,
    name: 'Dr. Elliott Maynard',
    title: 'Global Ecologist & Futurist',
    bio: 'Ph.D. in Consciousness Research. Founder of Arcos Cielos Foundation. Background in global ecology, coral reef ecology, oceanography, and tropical rainforest biology. Author, educator, and accomplished artist.',
    image: 'https://www.resourcebasedeconomy.org/wp-content/uploads/sites/2/2018/10/elliott_maynard.jpg'
  },
  {
    id: 6,
    name: 'Samu Mäntyniemi',
    title: 'Statistician & Decision Analyst',
    bio: 'Ph.D. in Science, University of Helsinki. Senior scientist at the Natural Resources Institute Finland. Specialist in population dynamics, risk analysis, and sustainable resource management.',
    image: 'https://www.resourcebasedeconomy.org/wp-content/uploads/sites/2/2018/12/Samu-M%C3%A4ntyniemi.jpg'
  },
  {
    id: 7,
    name: 'Andrey Zelenovsky',
    title: 'Robotic Process Automation & AI Practitioner',
    bio: 'Industry expert in Robotic Process Automation and AI. Holds degrees in Information and Systems Engineering, Analytical Finance, and a Master’s in Data Science. Works at UiPath, developing automation solutions for S&P 500 companies.',
    image: 'https://www.resourcebasedeconomy.org/wp-content/uploads/sites/2/2019/03/Andrey-Zelenovsky.jpg'
  },
  {
    id: 8,
    name: 'Joseph P. Alexopoulos',
    title: 'Principal, Aequitas Wealth Management',
    bio: 'CFP®, CFE, MBA. Nearly 26 years of experience in wealth management. Former Vice President at Citigroup Private Bank and advisor at Fidelity Investments. Active in METal International.',
    image: 'https://www.resourcebasedeconomy.org/wp-content/uploads/sites/2/2019/04/Joseph-Alexopoulos.jpg'
  },
  {
    id: 9,
    name: 'Alan C. Fenwick',
    title: 'Consultant & Counselor',
    bio: 'Nearly five decades of business experience in program/management, strategic planning, sales/marketing, and new venture analysis. Focused on aerospace, government, and start-up activities. Board Chairman for a non-profit business.',
    image: 'https://www.resourcebasedeconomy.org/wp-content/uploads/sites/2/2019/06/Alan-Fenwick.jpg'
  },
  {
    id: 10,
    name: 'E. Scott Geller',
    title: 'Professor & Director, Center for Applied Behavior Systems',
    bio: 'Alumni Distinguished Professor at Virginia Tech for 50 years. Senior Partner of Safety Performance Solutions. Author of 300+ research articles, 40 books, and 70 book chapters on psychological science and human welfare.',
    image: 'https://www.resourcebasedeconomy.org/wp-content/uploads/sites/2/2019/07/Scott_Geller.jpg'
  }
])
</script>