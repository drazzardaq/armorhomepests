<template>
  <!-- The Venus Project Blockchain Vision Callout -->
  <section class="glassy-bg border-l-4 border-accent/60 bg-accent/5 rounded-2xl shadow-lg  mt-16 mb-5 p-6 animate-fade-in-up max-w-4xl mx-auto font-body" aria-label="The Venus Project Blockchain Vision for Proposals">
    <h2 class="mb-2 text-2xl font-heading font-bold text-accent flex items-center gap-2">
      <img src="/proposal-icon.svg" alt="The Venus Project Icon" class="h-16 w-16" />
      Proposal Vision
    </h2>
    <p class="text-muted font-body">All proposals for planetary habitats and concepts are designed to be part of the creative network of activist and volunteers.</p>
    <div class="mt-6 text-center">
      <router-link to="/OutpostProposal" class="inline-block rounded-xl bg-gradient-to-r from-navy via-accent to-tvp-purple px-6 py-3 !text-white font-ui font-bold shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-accent" aria-label="Submit your planetary proposal">Submit Planetary Proposal</router-link>
    </div>
  </section>
  <div class="min-h-screen bg-primary text-background flex flex-col items-center justify-center font-body">
    <div class="max-w-7xl w-full mx-auto p-8 bg-white/80 rounded-3xl shadow-2xl backdrop-blur-2xl">
      <h1 class="text-4xl font-heading font-bold mb-8 text-center bg-gradient-to-r from-tvp-purple via-tvp-blue to-tvp-teal bg-clip-text text-transparent">Planets of the Solar System</h1>
      <p class="mb-10 text-lg text-center text-muted font-body">Explore planetary concepts, sustainable habitats, and future visions for humanity among the stars.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      <!-- <div class="mt-12 text-center">
        <router-link to="/" class="inline-block rounded-xl bg-gradient-to-r from-tvp-purple via-tvp-blue to-tvp-teal px-6 py-3 text-white font-ui font-bold shadow hover:opacity-90">Back to Home</router-link>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import PlanetCard from '@/components/PlanetCard.vue'
const planets = [
  {
    name: 'Mercury',
    description: 'The smallest and innermost planet in the Solar System, Mercury is a rocky world with extreme temperatures.',
    image: '/planets/mercury.webp',
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
    image: '/planets/venus.webp',
    gradientColors: ['from-yellow-700', 'to-orange-600'],
    facts: [
      'Hottest planet in our solar system',
      'Spins backwards compared to most planets',
      'Similar in size to Earth'
    ]
  },
  {
    name: 'Earth',
    description: 'Earth is the only known world to support life, with liquid water and a breathable atmosphere.',
    image: '/planets/Earth.jpg',
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
    image: '/planets/mars.png',
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
    image: '/planets/jupiter.png',
    gradientColors: ['from-orange-500', 'to-yellow-400'],
    facts: [
      'The most massive planet in our solar system',
      'Great Red Spot is a giant storm',
      'Has at least 79 moons'
    ]
  },
  {
    name: 'Saturn',
    description: 'Famous for its beautiful ring system, Saturn is a gas giant with fascinating moons.',
    image: '/planets/Saturn.jpg',
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
    image: '/planets/uranus.png',
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
    image: '/planets/neptune.jpg',
    gradientColors: ['from-blue-700', 'to-blue-500'],
    facts: [
      'Strongest winds in the solar system',
      'Has 14 known moons',
      'Takes 165 Earth years to orbit the Sun'
    ]
  }
]
</script>

