<template>
  <!-- Dracoscopia & TVP Chain Vision Callout -->
  <section class="glassy-bg border-l-4 border-tvp-blue/60 bg-tvp-blue/5 rounded-2xl shadow-lg mb-12 p-6 animate-fade-in-up max-w-4xl mx-auto" aria-label="Dracoscopia & TVP Chain Vision for Proposals">
    <h2 class="mb-2 text-2xl font-bold text-tvp-blue flex items-center gap-2">
      <svg class="inline-block w-7 h-7 text-tvp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m4 0h-1v-4h-1m-4 0h-1v-4h-1"/></svg>
      Proposal Vision: Dracoscopia & TVP Chain
    </h2>
    <p class="text-gray-800">All proposals for planetary habitats and concepts are designed to be part of the <span class='font-bold text-tvp-blue'>Dracoscopia</span> creative network and validated on the <span class='font-bold text-tvp-blue'>TVP Chain</span> blockchain. This ensures that every idea, from Earth to Mars and beyond, is transparent, collaborative, and future-ready—empowering humanity to thrive among the stars with ethical, decentralized infrastructure.</p>
    <div class="mt-6 text-center">
      <router-link to="/OutpostProposal" class="inline-block rounded-lg bg-gradient-to-r from-tvp-blue via-tvp-teal to-tvp-purple px-6 py-3 text-white font-bold shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-tvp-blue" aria-label="Submit your planetary proposal">Submit Your Planetary Proposal</router-link>
    </div>
  </section>

  <div class="min-h-screen bg-gradient-to-br from-white via-[#f7faff] to-[#eaf6ff] text-black flex flex-col items-center justify-center">
    <div class="max-w-7xl w-full mx-auto p-8 bg-white/80 rounded-3xl shadow-2xl backdrop-blur-2xl">
      <h1 class="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#42386c] via-[#153695] to-[#143395] bg-clip-text text-transparent">Planets of the Solar System</h1>
      <p class="mb-10 text-lg text-center text-gray-700">Explore planetary concepts, sustainable habitats, and future visions for humanity among the stars.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PlanetCard
          v-for="planet in planets"
          :key="planet.name"
          :name="planet.name"
          :description="planet.description"
          :image="planet.image"
          :gradientColors="planet.gradientColors"
          :facts="planet.facts"
        />
      </div>
      <div class="mt-12 text-center">
        <router-link to="/" class="inline-block rounded-lg bg-gradient-to-r from-[#42386c] via-[#153695] to-[#143395] px-6 py-3 text-white font-bold shadow hover:opacity-90">Back to Home</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { headingClass, subheadingClass } from '@/layouts/layoutClasses';
import PlanetCard from '@/components/PlanetCard.vue'
const planets = [
  {
    name: 'Mercury',
    description: 'The smallest and innermost planet in the Solar System, Mercury is a rocky world with extreme temperatures.',
    image: '/images/planets/mercury.jpg',
    gradientColors: ['from-gray-800', 'to-gray-600'],
    facts: [
      'Closest planet to the Sun',
      'No moons or rings',
      'Temperatures range from -180°C to 430°C'
    ]
  },
  {
    name: 'Venus',
    description: 'Often called Earth\'s sister planet, Venus has a thick atmosphere and extreme greenhouse effect.',
    image: '/images/planets/venus.jpg',
    gradientColors: ['from-yellow-700', 'to-orange-600'],
    facts: [
      'Hottest planet in our solar system',
      'Spins backwards compared to most planets',
      'Similar in size to Earth'
    ]
  },
  {
    name: 'Earth',
    description: 'Our home planet, Earth is the only known world to support life, with liquid water and a breathable atmosphere.',
    image: '/images/planets/earth.jpg',
    gradientColors: ['from-blue-600', 'to-green-500'],
    facts: [
      'Only known planet with life',
      'Has one natural satellite (Moon)',
      '71% of surface covered in water'
    ]
  },
  {
    name: 'Mars',
    description: 'The Red Planet has long captured human imagination and is a target for future human exploration.',
    image: '/images/planets/mars.jpg',
    gradientColors: ['from-red-800', 'to-red-600'],
    facts: [
      'Has the largest volcano in the solar system',
      'Two small moons: Phobos and Deimos',
      'Evidence of ancient water flows'
    ]
  },
  {
    name: 'Jupiter',
    description: 'The largest planet in our solar system, Jupiter is a gas giant with a complex system of moons.',
    image: '/images/planets/jupiter.jpg',
    gradientColors: ['from-orange-500', 'to-yellow-400'],
    facts: [
      'More than twice as massive as all other planets combined',
      'Great Red Spot is a giant storm',
      'Has at least 79 moons'
    ]
  },
  {
    name: 'Saturn',
    description: 'Famous for its beautiful ring system, Saturn is a gas giant with fascinating moons.',
    image: '/images/planets/saturn.jpg',
    gradientColors: ['from-yellow-600', 'to-yellow-300'],
    facts: [
      'Most extensive ring system of any planet',
      'Moon Titan has liquid on its surface',
      'Would float in a giant bathtub of water'
    ]
  },
  {
    name: 'Uranus',
    description: 'An ice giant that rotates on its side, Uranus has a unique appearance and composition.',
    image: '/images/planets/uranus.jpg',
    gradientColors: ['from-cyan-500', 'to-blue-400'],
    facts: [
      'Rotates on its side',
      'Discovered in 1781',
      'Has 27 known moons'
    ]
  },
  {
    name: 'Neptune',
    description: 'The windiest planet, Neptune is the most distant planet in our solar system.',
    image: '/images/planets/neptune.jpg',
    gradientColors: ['from-blue-700', 'to-blue-500'],
    facts: [
      'Strongest winds in the solar system',
      'Has 14 known moons',
      'Takes 165 Earth years to orbit the Sun'
    ]
  }
]
</script>

<style scoped>
</style>

<SeoHead
  title="TVP Planets | Sustainable Habitats & Vision"
  description="Discover planetary concepts and sustainable habitats, all designed with the Dracoscopia network and TVP Chain for a transparent, collaborative future."
  keywords="The Venus Project, planets, habitats, Dracoscopia, TVP Chain, sustainability, blockchain, space, infrastructure"
  image="/the-venus-project-circular-city.jpg"
  url="https://www.thevenusproject.com/planets"
  type="website"
  :schema="{
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'TVP Planets',
    'url': 'https://www.thevenusproject.com/planets',
    'description': 'Discover planetary concepts and sustainable habitats, all designed with the Dracoscopia network and TVP Chain for a transparent, collaborative future.'
  }"
/>
