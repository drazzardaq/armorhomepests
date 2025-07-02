<template>
  <section class="outpost-proposal py-16 bg-gradient-to-b from-dark-purple to-dark-navy">
    <!-- Proposal Form Section -->
    <div class="container mx-auto px-4 mb-16">
      <h2 class="text-4xl font-bold text-white mb-12 text-center">
        Submit New Outpost Proposal
      </h2>
      
      <div class="proposal-form bg-gradient-to-br from-blue-900/80 to-gray-900/80 p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
        <!-- Location Selection -->
        <div class="mb-8">
          <h3 class="text-xl font-bold mb-4 text-blue-300">Select Location</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="location in locations" :key="location.id" 
                 class="location-card p-4 rounded-lg border border-blue-500/30 hover:border-blue-400 cursor-pointer transition-all"
                 :class="{ 'border-blue-400 bg-blue-900/40': selectedLocation === location.id }"
                 @click="selectLocation(location.id)">
              <img :src="location.image" :alt="location.name" class="w-full h-48 object-cover rounded-lg mb-4">
              <h4 class="text-lg font-semibold text-blue-200">{{ location.name }}</h4>
              <p class="text-gray-400 text-sm">{{ location.description }}</p>
            </div>
          </div>
        </div>

        <!-- Proposal Form -->
        <form @submit.prevent="submitProposal" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="form-group">
              <label class="block text-blue-200 mb-2">Project Name</label>
              <input v-model="form.projectName" type="text" 
                     class="w-full bg-blue-900/30 border border-blue-500/30 rounded-lg px-4 py-2 text-white">
            </div>
            <div class="form-group">
              <label class="block text-blue-200 mb-2">Timeline (months)</label>
              <input v-model="form.timeline" type="number" min="1" 
                     class="w-full bg-blue-900/30 border border-blue-500/30 rounded-lg px-4 py-2 text-white">
            </div>
          </div>

          <div class="form-group">
            <label class="block text-blue-200 mb-2">Project Description</label>
            <textarea v-model="form.description" rows="4"
                      class="w-full bg-blue-900/30 border border-blue-500/30 rounded-lg px-4 py-2 text-white"></textarea>
          </div>

          <div class="form-group">
            <label class="block text-blue-200 mb-2">Resource Requirements</label>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div v-for="(req, index) in form.resources" :key="index" 
                   class="resource-item p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
                <input v-model="req.name" type="text" placeholder="Resource name"
                       class="w-full bg-transparent border-b border-blue-500/30 mb-2 text-white">
                <input v-model="req.quantity" type="number" placeholder="Quantity"
                       class="w-full bg-transparent border-b border-blue-500/30 text-white">
              </div>
              <button type="button" @click="addResource" 
                      class="h-full border-2 border-dashed border-blue-500/30 rounded-lg hover:border-blue-400 transition-colors">
                Add Resource
              </button>
            </div>
          </div>

          <div class="form-group">
            <label class="flex items-center space-x-2">
              <input v-model="form.agreeToTerms" type="checkbox" 
                     class="form-checkbox text-blue-500">
              <span class="text-blue-200">I agree to the Venus Project terms and conditions</span>
            </label>
          </div>

          <div class="flex justify-end space-x-4">
            <button type="button" @click="resetForm" 
                    class="px-6 py-2 rounded-lg border border-blue-500/30 text-blue-200 hover:bg-blue-900/40 transition-colors">
              Reset
            </button>
            <button type="submit" 
                    class="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors"
                    :disabled="!isFormValid">
              Submit Proposal
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Existing Outposts Section -->
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-white mb-12 text-center">
        Current Outposts
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(outpost, index) in outposts" 
             :key="index" 
             class="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
          <div class="aspect-w-16 aspect-h-9 mb-6">
            <img :src="outpost.image" :alt="outpost.name" class="rounded-lg object-cover w-full h-full">
          </div>
          
          <h3 class="text-2xl font-bold text-white mb-4">{{ outpost.name }}</h3>
          <p class="text-gray-300 mb-6">{{ outpost.description }}</p>
          
          <div class="space-y-4">
            <div class="flex items-center text-blue-400">
              <span class="font-bold mr-2">Location:</span>
              <span>{{ outpost.location }}</span>
            </div>
            <div class="flex items-center text-blue-400">
              <span class="font-bold mr-2">Capacity:</span>
              <span>{{ outpost.capacity }}</span>
            </div>
            <div class="flex items-center text-blue-400">
              <span class="font-bold mr-2">Timeline:</span>
              <span>{{ outpost.timeline }}</span>
            </div>
          </div>
          
          <div class="mt-6 space-y-2">
            <h4 class="text-lg font-semibold text-white">Key Features:</h4>
            <ul class="list-disc list-inside text-gray-300">
              <li v-for="(feature, fIndex) in outpost.features" 
                  :key="fIndex" 
                  class="ml-4">
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <!-- NFT Showcase Section -->
    <div class="mt-16 container mx-auto px-4">
      <h2 class="text-4xl font-bold text-white mb-8 text-center">
        Limited Edition Outpost NFTs
      </h2>
      <p class="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
        Own a piece of humanity's future with these exclusive digital collectibles representing our first interplanetary outposts.
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div v-for="(nft, index) in nftCollection" 
             :key="index"
             class="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-xl backdrop-blur-sm
                    border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300
                    hover:shadow-2xl hover:shadow-blue-500/20">
          <div class="aspect-w-1 aspect-h-1 mb-6 rounded-lg overflow-hidden">
            <img :src="nft.image" :alt="nft.name" 
                 class="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500">
          </div>
          
          <h3 class="text-2xl font-bold text-white mb-3">{{ nft.name }}</h3>
          <p class="text-gray-300 mb-4">{{ nft.description }}</p>
          
          <div class="space-y-2">
            <div class="flex justify-between text-blue-400">
              <span>Edition:</span>
              <span class="font-bold">{{ nft.edition }}</span>
            </div>
            <div class="flex justify-between text-blue-400">
              <span>Price:</span>
              <span class="font-bold">{{ nft.price }}</span>
            </div>
          </div>
          
          <button class="mt-6 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg
                         transition-colors duration-300 flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            Mint NFT
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const locations = [
  {
    id: 1,
    name: 'Venus Research Station Alpha',
    description: 'Primary research and development facility for atmospheric processing',
    image: '/images/planets/venus.jpg'
  },
  {
    id: 2,
    name: 'Mars Colony Beta',
    description: 'Terraforming and sustainable habitat development center',
    image: '/images/planets/mars.jpg'
  },
  {
    id: 3,
    name: 'Lunar Base Gamma',
    description: 'Resource extraction and processing facility',
    image: '/images/planets/moon.jpg'
  }
]

const selectedLocation = ref(null)
const form = ref({
  projectName: '',
  timeline: null,
  description: '',
  resources: [
    { name: '', quantity: null }
  ],
  agreeToTerms: false
})

const isFormValid = computed(() => {
  return form.value.projectName &&
         form.value.timeline &&
         form.value.description &&
         form.value.resources.every(r => r.name && r.quantity) &&
         form.value.agreeToTerms &&
         selectedLocation.value
})

function selectLocation(id) {
  selectedLocation.value = id
}

function addResource() {
  form.value.resources.push({ name: '', quantity: null })
}

function resetForm() {
  form.value = {
    projectName: '',
    timeline: null,
    description: '',
    resources: [{ name: '', quantity: null }],
    agreeToTerms: false
  }
  selectedLocation.value = null
}

function submitProposal() {
  if (isFormValid.value) {
    // TODO: Implement proposal submission
    console.log('Submitting proposal:', {
      location: selectedLocation.value,
      ...form.value
    })
  }
}

const outposts = [
  {
    name: "Lunar Gateway Alpha",
    description: "Primary lunar outpost serving as a gateway for Mars missions and deep space exploration.",
    image: "/images/outposts/lunar-gateway.jpg",
    location: "Moon - South Pole",
    capacity: "200 personnel",
    timeline: "2025-2030",
    features: [
      "Advanced life support systems",
      "Helium-3 mining facility",
      "Spacecraft assembly bay",
      "Research laboratories"
    ]
  },
  {
    name: "Martian Base Prime",
    description: "First permanent human settlement on Mars, focused on terraforming operations.",
    image: "/images/outposts/mars-base.jpg",
    location: "Mars - Valles Marineris",
    capacity: "500 personnel",
    timeline: "2030-2035",
    features: [
      "Atmospheric processing plant",
      "Greenhouse complexes",
      "Water extraction facility",
      "Power generation hub"
    ]
  },
  {
    name: "Venus Cloud City",
    description: "Floating research and operations center in Venus's upper atmosphere.",
    image: "/images/outposts/venus-station.jpg",
    location: "Venus - Upper Atmosphere",
    capacity: "100 personnel",
    timeline: "2035-2040",
    features: [
      "Atmospheric research labs",
      "Carbon capture systems",
      "Weather monitoring station",
      "Solar power arrays"
    ]
  }
]

const nftCollection = [
  {
    name: "Lunar Gateway Alpha - Genesis",
    description: "The first-ever digital representation of humanity's permanent lunar outpost, featuring unique architectural details and construction plans.",
    image: "/nft1.jpg",
    edition: "1 of 100",
    price: "0.5 ETH"
  },
  {
    name: "Mars Base Prime - Foundation",
    description: "A detailed visualization of the first Martian settlement, complete with terraforming infrastructure and habitat modules.",
    image: "/nft2.jpg",
    edition: "1 of 50",
    price: "1.0 ETH"
  }
]
</script>

<style scoped>
.outpost-proposal {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%);
    pointer-events: none;
  }
}

.location-card {
  background: rgba(30, 58, 138, 0.1);
  backdrop-filter: blur(8px);
}

.location-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.form-checkbox {
  @apply rounded border-blue-500/30 text-blue-500 focus:ring-blue-500;
}

input[type="text"],
input[type="number"],
textarea {
  @apply focus:ring-2 focus:ring-blue-500 focus:border-transparent;
  background: rgba(30, 58, 138, 0.1);
  backdrop-filter: blur(8px);
}

button:disabled {
  @apply opacity-50 cursor-not-allowed;
}

.aspect-w-1 {
  position: relative;
  padding-bottom: 100%;
}

.aspect-w-1 > img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* NFT Card Glow Effect */
.bg-gradient-to-br:hover {
  box-shadow: 0 0 30px rgba(59, 130, 246, 0.2);
}
</style>
