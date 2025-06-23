<template>
  <section class="outpost-proposal py-16 min-h-screen">
    <div class="container mx-auto px-4 mb-16">
      <h2 class="text-4xl font-bold text-black mb-6 text-center drop-shadow-sm">
        Submit New Outpost Proposal
      </h2>
      <div class="mb-8 max-w-3xl mx-auto text-center bg-white/80 backdrop-blur-lg rounded-xl p-6 shadow-xl" ref="introRef" tabindex="0" aria-label="Outpost proposal introduction">
        <h3 class="text-2xl font-semibold mb-2 bg-gradient-to-r from-[#42386c] via-[#153695] to-[#00deff] bg-clip-text text-transparent" style="background-clip:text;-webkit-background-clip:text;">How Outpost Proposals Support the Global Resource Survey</h3>
        <p class="text-lg text-gray-800 mb-4">Contribute your vision for a self-sufficient, circular city. Your proposal helps The Venus Project design a transparent, data-driven resource-based economy.</p>
        <router-link to="/resources" class="inline-block mt-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#42386c] via-[#153695] to-[#00deff] text-white font-bold shadow-lg hover:opacity-90 transition" aria-label="Learn about the Center for Resource Management">Learn about the Center for Resource Management</router-link>
      </div>
      <div class="flex justify-center mb-8">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Circular city concept" class="rounded-2xl shadow-lg w-full max-w-xl object-cover" loading="lazy" />
      </div>
      <div class="proposal-form bg-white/90 backdrop-blur-lg p-8 rounded-xl shadow-xl max-w-4xl mx-auto" ref="formRef" tabindex="0" aria-label="Proposal submission form">
        <!-- Location Selection -->
        <div class="mb-8">
          <h3 class="text-xl font-bold mb-4 text-[#153695]">Select Location</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="location in locations" :key="location.id" 
                 class="location-card p-4 rounded-lg border border-[#153695]/30 hover:border-[#00deff] cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-[#00deff]"
                 :class="{ 'border-[#00deff] bg-[#00deff]/10': selectedLocation === location.id }"
                 @click="selectLocation(location.id)"
                 @keydown.enter="selectLocation(location.id)"
                 tabindex="0"
                 :aria-label="'Select location ' + location.name">
              <img :src="location.image" :alt="location.name + ' image'" class="w-full h-40 object-cover rounded-lg mb-4" loading="lazy" />
              <h4 class="text-lg font-semibold text-[#153695]">{{ location.name }}</h4>
              <p class="text-gray-600 text-sm">{{ location.description }}</p>
            </div>
          </div>
        </div>
        <!-- Proposal Form -->
        <form @submit.prevent="submitProposal" class="space-y-6" aria-label="Outpost proposal form">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="form-group">
              <label class="block text-[#153695] mb-2">Project Name</label>
              <input v-model="form.projectName" type="text" 
                     class="w-full bg-white border border-[#153695]/30 rounded-lg px-4 py-2 text-black focus:ring-2 focus:ring-[#00deff]" aria-label="Project Name">
            </div>
            <div class="form-group">
              <label class="block text-[#153695] mb-2">Timeline (months)</label>
              <input v-model="form.timeline" type="number" min="1" 
                     class="w-full bg-white border border-[#153695]/30 rounded-lg px-4 py-2 text-black focus:ring-2 focus:ring-[#00deff]" aria-label="Timeline in months">
            </div>
          </div>
          <div class="form-group">
            <label class="block text-[#153695] mb-2">Project Description</label>
            <textarea v-model="form.description" rows="4"
                      class="w-full bg-white border border-[#153695]/30 rounded-lg px-4 py-2 text-black focus:ring-2 focus:ring-[#00deff]" aria-label="Project Description"></textarea>
          </div>
          <div class="form-group">
            <label class="block text-[#153695] mb-2">Resource Requirements</label>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div v-for="(req, index) in form.resources" :key="index" 
                   class="resource-item p-3 bg-[#eaf6ff] rounded-lg border border-[#153695]/20">
                <input v-model="req.name" type="text" placeholder="Resource name"
                       class="w-full bg-transparent border-b border-[#153695]/30 mb-2 text-black focus:ring-2 focus:ring-[#00deff]" aria-label="Resource name">
                <input v-model="req.quantity" type="number" placeholder="Quantity"
                       class="w-full bg-transparent border-b border-[#153695]/30 text-black focus:ring-2 focus:ring-[#00deff]" aria-label="Resource quantity">
              </div>
              <button type="button" @click="addResource" 
                      class="h-full border-2 border-dashed border-[#153695]/30 rounded-lg hover:border-[#00deff] transition-colors text-[#153695] font-semibold focus:outline-none focus:ring-2 focus:ring-[#00deff]" aria-label="Add Resource">
                Add Resource
              </button>
            </div>
          </div>
          <div class="form-group">
            <label class="flex items-center space-x-2">
              <input v-model="form.agreeToTerms" type="checkbox" 
                     class="form-checkbox text-[#153695] focus:ring-2 focus:ring-[#00deff]" aria-label="Agree to terms">
              <span class="text-[#153695]">I agree to the Venus Project terms and conditions</span>
            </label>
          </div>
          <div class="flex justify-end space-x-4">
            <button type="button" @click="resetForm" 
                    class="px-6 py-2 rounded-lg border border-[#153695]/30 text-[#153695] hover:bg-[#eaf6ff] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00deff]">
              Reset
            </button>
            <button type="submit" 
                    class="px-6 py-2 rounded-lg bg-gradient-to-r from-[#42386c] via-[#153695] to-[#00deff] text-white font-bold shadow-lg hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-[#00deff]"
                    :disabled="!isFormValid">
              Submit Proposal
            </button>
          </div>
        </form>
      </div>
    </div>
    <!-- Existing Outposts Section -->
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-black mb-12 text-center drop-shadow-sm">
        Current Outposts
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(outpost, index) in outposts" :key="index" class="bg-white/80 backdrop-blur-lg border border-black/10 p-6 rounded-xl hover:scale-105 transition-transform duration-300 shadow-xl focus:outline-none focus:ring-2 focus:ring-[#00deff]" tabindex="0" :aria-label="outpost.name + ' outpost card'" ref="outpostRef">
          <div class="aspect-w-16 aspect-h-9 mb-6">
            <img :src="outpost.image || 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80'" :alt="outpost.name + ' image'" class="rounded-lg object-cover w-full h-full" loading="lazy" />
          </div>
          <h3 class="text-2xl font-bold text-black mb-4">{{ outpost.name }}</h3>
          <p class="text-gray-700 mb-6">{{ outpost.description }}</p>
          <div class="space-y-4">
            <div class="flex items-center text-[#153695]">
              <span class="font-bold mr-2">Location:</span>
              <span>{{ outpost.location }}</span>
            </div>
            <div class="flex items-center text-[#153695]">
              <span class="font-bold mr-2">Capacity:</span>
              <span>{{ outpost.capacity }}</span>
            </div>
            <div class="flex items-center text-[#153695]">
              <span class="font-bold mr-2">Timeline:</span>
              <span>{{ outpost.timeline }}</span>
            </div>
          </div>
          <div class="mt-6 space-y-2">
            <h4 class="text-lg font-semibold text-black">Key Features:</h4>
            <ul class="list-disc list-inside text-gray-800">
              <li v-for="(feature, fIndex) in outpost.features" :key="fIndex" class="ml-4">{{ feature }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- NFT Showcase Section -->
    <div class="mt-16 container mx-auto px-4">
      <h2 class="text-4xl font-bold text-black mb-8 text-center drop-shadow-sm">
        Limited Edition Outpost NFTs
      </h2>
      <p class="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
        Own a piece of the future with exclusive digital collectibles representing our first interplanetary outposts.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div v-for="(nft, index) in nftCollection" :key="index" class="bg-white/80 backdrop-blur-lg border border-black/10 p-6 rounded-xl hover:scale-105 transition-transform duration-300 shadow-xl focus:outline-none focus:ring-2 focus:ring-[#00deff]" tabindex="0" :aria-label="nft.name + ' NFT card'" ref="nftRef">
          <div class="aspect-w-1 aspect-h-1 mb-6 rounded-lg overflow-hidden">
            <img :src="nft.image || 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80'" :alt="nft.name + ' NFT'" class="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" loading="lazy" />
          </div>
          <h3 class="text-2xl font-bold text-black mb-3">{{ nft.name }}</h3>
          <p class="text-gray-700 mb-4">{{ nft.description }}</p>
          <div class="space-y-2">
            <div class="flex justify-between text-[#153695]">
              <span>Edition:</span>
              <span class="font-bold">{{ nft.edition }}</span>
            </div>
            <div class="flex justify-between text-[#153695]">
              <span>Price:</span>
              <span class="font-bold">{{ nft.price }}</span>
            </div>
          </div>
          <button class="mt-6 w-full bg-gradient-to-r from-[#42386c] via-[#153695] to-[#00deff] hover:opacity-90 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#00deff]">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            Mint NFT
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

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

let introRef = ref(null)
let formRef = ref(null)
let outpostRef = ref(null)
let nftRef = ref(null)
onMounted(() => {
  if (window.gsap) {
    if (introRef.value) window.gsap.from(introRef.value, { opacity: 0, y: 40, duration: 0.7, ease: 'power2.out' })
    if (formRef.value) window.gsap.from(formRef.value, { opacity: 0, y: 40, duration: 0.7, delay: 0.2, ease: 'power2.out' })
    if (outpostRef.value) window.gsap.from(outpostRef.value, { opacity: 0, y: 40, duration: 0.7, delay: 0.4, ease: 'power2.out' })
    if (nftRef.value) window.gsap.from(nftRef.value, { opacity: 0, y: 40, duration: 0.7, delay: 0.6, ease: 'power2.out' })
  }
})
</script>

<style scoped>
.outpost-proposal {
  background: linear-gradient(180deg, #fff 0%, #f7faff 60%, #eaf6ff 100%);
  min-height: 100vh;
}
.proposal-form {
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 1rem;
  box-shadow: 0 4px 24px 0 rgba(66,56,108,0.08);
}
.location-card {
  background: rgba(255,255,255,0.7);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
</style>
