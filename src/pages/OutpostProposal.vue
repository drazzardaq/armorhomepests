<template>
  <section class="outpost-proposal min-h-screen py-16">
    <div class="container mx-auto mb-16 px-4">
      <h2 class="mb-6 text-center text-4xl font-bold text-black drop-shadow-sm">Submit New Outpost Proposal</h2>
      <div class="mx-auto mb-8 max-w-7xl rounded-xl bg-white/80 p-6 text-center shadow-xl backdrop-blur-lg" ref="introRef" tabindex="0" aria-label="Outpost proposal introduction">
        <h3 class="mb-2 bg-gradient-to-r from-[#42386c] via-[#153695] to-[#143395] bg-clip-text text-2xl font-semibold text-transparent" style="background-clip: text; -webkit-background-clip: text">How Outpost Proposals Support the Global Resource Survey</h3>
        <p class="mb-4 text-lg text-gray-800">Contribute your vision for a self-sufficient, circular city. Your proposal helps The Venus Project design a transparent, data-driven resource-based economy.</p>
        <router-link to="/resources" class="mt-2 inline-block rounded-lg bg-gradient-to-r from-[#42386c] via-[#153695] to-[#143395] px-6 py-3 font-bold text-white shadow-lg transition hover:opacity-90" aria-label="Learn about the Center for Resource Management">Learn about the Center for Resource Management</router-link>
      </div>
      <div class="proposal-form mx-auto max-w-7xl rounded-xl bg-white/90 p-8 shadow-xl backdrop-blur-lg" ref="formRef" tabindex="0" aria-label="Proposal submission form">
        <div class="mb-8">
          <h3 class="mb-4 text-xl font-bold text-[#153695]">Select Location</h3>

          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div v-for="location in locations" :key="location.id" class="location-card cursor-pointer rounded-lg border border-[#153695]/30 p-4 transition-all hover:border-[#143395] focus:outline-none focus:ring-2 focus:ring-[#143395]" :class="{ 'border-[#143395] bg-[#143395]/10': selectedLocation === location.id }" @click="selectLocation(location.id)" @keydown.enter="selectLocation(location.id)" tabindex="0" :aria-label="'Select location ' + location.name">
              <img :src="location.image" :alt="location.name + ' image'" class="mb-4 h-40 w-full rounded-lg object-cover" loading="lazy" />
              <h4 class="text-sm font-semibold text-[#153695]">{{ location.name }}</h4>
              <p class="text-sm text-gray-600">{{ location.description }}</p>
            </div>
          </div>
        </div>
        <!-- Proposal Form -->
        <form @submit.prevent="submitProposal" class="space-y-6" aria-label="Outpost proposal form">
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div class="form-group">
              <label class="mb-2 block text-[#153695]">Project Name</label>
              <input v-model="form.projectName" type="text" class="w-full rounded-lg border border-[#153695]/30 bg-white px-4 py-2 text-black focus:ring-2 focus:ring-[#143395]" aria-label="Project Name" />
            </div>
            <div class="form-group">
              <label class="mb-2 block text-[#153695]">Timeline (months)</label>
              <input v-model="form.timeline" type="number" min="1" class="w-full rounded-lg border border-[#153695]/30 bg-white px-4 py-2 text-black focus:ring-2 focus:ring-[#143395]" aria-label="Timeline in months" />
            </div>
          </div>
          <div class="form-group">
            <label class="mb-2 block text-[#153695]">Project Description</label>
            <textarea v-model="form.description" rows="4" class="w-full rounded-lg border border-[#153695]/30 bg-white px-4 py-2 text-black focus:ring-2 focus:ring-[#143395]" aria-label="Project Description"></textarea>
          </div>
          <div class="form-group">
            <label class="mb-2 block text-[#153695]">Resource Requirements</label>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div v-for="(req, index) in form.resources" :key="index" class="resource-item rounded-lg border border-[#153695]/20 bg-[#eaf6ff] p-3">
                <input v-model="req.name" type="text" placeholder="Resource name" class="mb-2 w-full border-b border-[#153695]/30 bg-transparent text-black focus:ring-2 focus:ring-[#143395]" aria-label="Resource name" />
                <input v-model="req.quantity" type="number" placeholder="Quantity" class="w-full border-b border-[#153695]/30 bg-transparent text-black focus:ring-2 focus:ring-[#143395]" aria-label="Resource quantity" />
              </div>
              <button type="button" @click="addResource" class="h-full rounded-lg border-2 border-dashed border-[#153695]/30 font-semibold text-[#153695] transition-colors hover:border-[#143395] focus:outline-none focus:ring-2 focus:ring-[#143395]" aria-label="Add Resource">Add Resource</button>
            </div>
          </div>
          <div class="form-group">
            <label class="mb-2 block text-[#153695]">How does your proposal utilize the network and TVP Blockhain?</label>
            <textarea v-model="form.tvpChainIntegration" rows="3" class="w-full rounded-lg border border-[#153695]/30 bg-white px-4 py-2 text-black focus:ring-2 focus:ring-[#143395]" aria-label="TVP Blockchain integration" required></textarea>
          </div>
          <div class="form-group">
            <label class="flex items-center space-x-2">
              <input v-model="form.agreeToTerms" type="checkbox" class="form-checkbox text-[#153695] focus:ring-2 focus:ring-[#143395]" aria-label="Agree to terms" />
              <span class="text-[#153695]">I agree to The Venus Project Terms & Cnditions</span>
            </label>
          </div>
          <div class="flex justify-end space-x-4">
            <button type="button" @click="resetForm" class="rounded-lg border border-[#153695]/30 px-6 py-2 text-[#153695] transition-colors hover:bg-[#eaf6ff] focus:outline-none focus:ring-2 focus:ring-[#143395]">Reset</button>
            <button type="submit" class="rounded-lg bg-gradient-to-r from-[#42386c] via-[#153695] to-[#143395] px-6 py-2 font-bold text-white shadow-lg transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#143395]" :disabled="!isFormValid">Submit Proposal</button>
          </div>
        </form>
      </div>
    </div>
    <!-- Existing Outposts Section -->
    <div class="container mx-auto max-w-7xl ">
      <h2 class="mb-12 text-center text-4xl font-bold text-black drop-shadow-sm">Current Outposts</h2>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="(outpost, index) in outposts" :key="index" class="rounded-xl border border-black/10 bg-white/80 p-6 shadow-xl backdrop-blur-lg transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#143395]" tabindex="0" :aria-label="outpost.name + ' outpost card'" ref="outpostRef">
          <img :src="outpost.image" :alt="outpost.name + ' image'" class="mb-4 h-40 w-full rounded-lg object-cover" loading="lazy" />
          <h3 class="mb-4 text-2xl font-bold text-black">{{ outpost.name }}</h3>
          <p class="mb-6 text-gray-700">{{ outpost.description }}</p>
          <ul class="mb-4 ml-6 list-disc text-sm text-gray-600">
            <li><strong>Location:</strong> {{ outpost.location }}</li>
            <li><strong>Capacity:</strong> {{ outpost.capacity }}</li>
            <li><strong>Timeline:</strong> {{ outpost.timeline }}</li>
          </ul>
          <ul class="space-y-1 text-sm text-gray-700">
            <li v-for="feature in outpost.features" :key="feature">• {{ feature }}</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- NFT Showcase Section -->
    <!-- <div class="container mx-auto mt-16 px-4">
      <h2 class="mb-8 text-center text-4xl font-bold text-black drop-shadow-sm">Limited Edition Outpost NFTs</h2>
      <p class="mx-auto mb-12 max-w-7xl text-center text-gray-700">Own a piece of the future with exclusive digital collectibles representing our first interplanetary outposts.</p>
      <div class="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
        <div v-for="(nft, index) in nftCollection" :key="index" class="rounded-xl border border-black/10 bg-white/80 p-6 shadow-xl backdrop-blur-lg transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#143395]" tabindex="0" :aria-label="nft.name + ' NFT card'" ref="nftRef">
          <img :src="nft.image" :alt="nft.name + ' image'" class="mb-4 h-60 w-full rounded-lg object-cover" loading="lazy" />
          <h3 class="mb-3 text-2xl font-bold text-black">{{ nft.name }}</h3>
          <p class="mb-4 text-gray-700">{{ nft.description }}</p>
          <div class="flex items-center justify-between text-sm text-gray-600">
            <span>Edition: {{ nft.edition }}</span>
            <span>Price: {{ nft.price }}</span>
          </div>
          <button class="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#42386c] via-[#153695] to-[#143395] px-6 py-3 font-bold text-white transition-colors duration-300 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#143395]">Reserve NFT</button>
        </div>
      </div>
    </div> -->
    <!-- Partnerships & Network Section -->
    <div class="container mx-auto max-w-7xl mt-20 ">
      <h2 class="mb-8 text-center text-4xl font-bold text-black drop-shadow-sm">Partners & Network</h2>
      <div class="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div class="frosted-glass-card flex min-h-[320px] flex-col items-center rounded-2xl p-8 shadow-xl">
          <img src="/icon.png" alt="Global Design Team" class="mb-4 h-24 w-24 rounded-full bg-white object-cover shadow-lg" />
          <h3 class="mb-2 text-xl text-center font-bold text-blue-700">Global Design Team</h3>
          <p class="mb-2 text-center text-blue-800">A worldwide network of designers, engineers, and volunteers collaborating on open-source solutions for TVP and beyond. Join the team and contribute your skills!</p>
          <a href="https://thevenusproject.typeform.com/to/qzJg3FZ6?fbclid=PAZXh0bgNhZW0CMTEAAaeYQ-GNp30fD8VPeqrJE1_OVKeIQb5UF3Nu8Uefs4Dn3jW-N3T1zuA7ArYfvg_aem_LE6QifUPOXRkKHWQ9yRfPQ&typeform-source=l.instagram.com" target="_blank" class="mt-auto inline-block rounded-lg bg-blue-700 px-6 py-2 font-bold text-white shadow-lg transition hover:bg-blue-500">Join the Team</a>
        </div>
        <div class="frosted-glass-card flex min-h-[320px] flex-col items-center rounded-2xl p-8 shadow-xl">
          <!-- <img src="@/assets/images/tvp/JFFlogo2.png" alt="Jacque Fresco Foundation" class="mb-4 h-10 invert w-auto" /> -->
          <img src="@/assets/images/tvp/JFFlogo.png" alt="Jacque Fresco Foundation" class="mb-4 h-24 w-24" />
          <h3 class="mb-2 text-xl text-center font-bold text-yellow-700">Jacque Fresco Foundation</h3>
          <p class="mb-2 text-center text-yellow-800">Honoring the legacy of Jacque Fresco, the Foundation supports education, archives, and events to advance the vision of a sustainable, science-based future.</p>
          <a href="https://www.frescofoundation.org/" target="_blank" class="mt-auto inline-block rounded-lg bg-yellow-700 px-6 py-2 font-bold text-white shadow-lg transition hover:bg-yellow-500">Learn More</a>
        </div>
        <div class="frosted-glass-card flex min-h-[320px] flex-col items-center rounded-2xl p-8 shadow-xl">
          <img src="/icon-white.png" alt="The Venus Project Logo" class="mb-4 h-24 w-24 rounded-full drop-shadow-xl object-cover invert" />
          <h3 class="mb-2 text-xl text-center font-bold text-green-700">The Venus Project</h3>
          <p class="mb-2 text-center text-green-800">The official organization dedicated to a resource-based economy, sustainable city design, and global education. Collaborate on open-source projects, research, and outreach.</p>
          <a href="https://www.thevenusproject.com/" target="_blank" class="mt-2autoinline-block rounded-lg bg-emerald-700 px-6 py-2 font-bold text-white shadow-lg transition hover:bg-green-500">Visit Website</a>
        </div>
      </div>
    </div>
    <!-- Partnership Opportunities Section -->
    <div class="container mx-auto mt-20 max-w-7xl">
      <h2 class="mb-8 text-center text-4xl font-bold text-black drop-shadow-sm">Partnership Opportunities</h2>
      <div class="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div class="frosted-glass-card rounded-lg p-8">
          <h3 class="mb-4 text-2xl font-bold text-[#153695]">Technical Integration</h3>
          <p class="mb-6 text-gray-700">Integrate your technology, research, or solutions into our ecosystem.</p>
        </div>
        <div class="frosted-glass-card rounded-lg p-8">
          <h3 class="mb-4 text-2xl font-bold text-[#153695]">Content & Education</h3>
          <p class="mb-6 text-gray-700">Collaborate on educational content, open-source projects, or digital art for global impact.</p>
        </div>
        <div class="frosted-glass-card rounded-lg p-8">
          <h3 class="mb-4 text-2xl font-bold text-[#153695]">Community & Outreach</h3>
          <p class="mb-6 text-gray-700">Join our network to promote sustainability, youth engagement, and ethical innovation.</p>
        </div>
      </div>
      <div class="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div class="frosted-glass-card rounded-lg p-8">
          <h3 class="mb-4 text-2xl font-bold text-blue-700">For Partners</h3>
          <ul class="ml-6 list-disc space-y-2 text-lg text-gray-700">
            <li>Access to a global, mission-driven community</li>
            <li>Integration with our open-source, blockchain, and digital platforms</li>
            <li>Co-branding and outreach opportunities</li>
            <li>Shared knowledge, resources, and support</li>
          </ul>
        </div>
        <div class="frosted-glass-card rounded-lg p-8">
          <h3 class="mb-4 text-2xl font-bold text-blue-700">For Participants</h3>
          <ul class="ml-6 list-disc space-y-2 text-lg text-gray-700">
            <li>Enhanced learning and collaboration experiences</li>
            <li>Exclusive access to partner content and events</li>
            <li>Opportunities for youth leadership and digital engagement</li>
            <li>Cross-platform rewards and recognition</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Platform Features Section -->
    <div class="container mx-auto mt-10 max-w-7xl">
      <h2 class="mb-8 text-center text-4xl font-bold text-black drop-shadow-sm">Platform Features</h2>
      <div class="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <TokenCard name="TVP Token" icon="/icon.png" iconClass="border-green-700" borderColor="border-green-400/40" titleColor="text-blue-400" stats="Total Supply: 1,000,000,000 TVP" network="Venus Blockchain" type="Governance & Utility" description="The primary token of the ecosystem, used for governance, NFT purchases, and platform fees. TVP is the core governance and utility token for The Venus Project ecosystem. Holders can participate in proposals, vote, and pay for platform services." gradient="linear-gradient(135deg, #2563eb 0%, #1e293b 100%)" :details="['Governance: Vote on proposals and platform changes', 'Utility: Pay for services, NFTs, and platform fees', 'Supply: 1,000,000,000 TVP', 'Network: Venus Blockchain', 'Open source: Yes']" badge="Awaiting Approval" badgeClass="bg-yellow-600 text-white" />
        <TokenCard name="VENUS Token" icon="/icon.png" iconClass="border-pink-400" borderColor="border-pink-400/40" titleColor="text-pink-400" stats="Type: Staking Rewards" network="Venus Blockchain" type="Staking Rewards" description="Earned through staking TVP tokens, VENUS provides enhanced governance rights and exclusive platform benefits. VENUS is the reward and incentive token, with a focus on community engagement and platform growth." gradient="linear-gradient(135deg, #ec489966 0%, #f472b666 100%)" :details="['Earned by staking TVP', 'Enhanced governance rights', 'Exclusive platform benefits', 'Network: Venus Blockchain', 'Open source: Yes']" badge="Awaiting Approval" badgeClass="bg-yellow-600 text-white" />
        <TokenCard name="JFF Token" icon="/JFFlogo.png" iconClass="'border-gray-500 grayscale contrast-200'" borderColor="'border-gray-400/40'" titleColor="'text-gray-400'" stats="Type: Legacy & Knowledge" network="Venus Blockchain" type="Legacy & Knowledge" description="JFF is the token of the Jacque Fresco Foundation, honoring the legacy of Jacque Fresco. It unlocks exclusive knowledge, digital archives, and participation in educational initiatives and events dedicated to advancing the vision of a sustainable, scientifically-grounded future." gradient="linear-gradient(135deg, #d1d5db55 0%, #6b728555 100%)" :details="['Access to Jacque Fresco Foundation archives', 'Educational content', 'Special events']" extra="<span class='font-bold text-green-400'>Proposal</span>: Access to Jacque Fresco Foundation archives, educational content, and special events." badge="Proposal" badgeClass="bg-green-700 text-white" />
        <TokenCard name="JFF Token" icon="/JFFlogo.png" iconClass="'border-gray-500 grayscale contrast-200'" borderColor="'border-gray-400/40'" titleColor="'text-gray-400'" stats="Type: Legacy & Knowledge" network="Venus Blockchain" type="Legacy & Knowledge" description="JFF is the token of the Jacque Fresco Foundation, honoring the legacy of Jacque Fresco. It unlocks exclusive knowledge, digital archives, and participation in educational initiatives and events dedicated to advancing the vision of a sustainable, scientifically-grounded future." gradient="linear-gradient(135deg, #d1d5db55 0%, #6b728555 100%)" :details="['Access to Jacque Fresco Foundation archives', 'Educational content', 'Special events']" extra="<span class='font-bold text-green-400'>Proposal</span>: Access to Jacque Fresco Foundation archives, educational content, and special events." badge="Proposal" badgeClass="bg-green-700 text-white" />
      </div>
    </div>

    <!-- Community Section -->
    <div class="container mx-auto mb-20 mt-20 px-4 text-center">
      <h2 class="mb-8 text-center text-4xl font-bold text-black drop-shadow-sm">Let's Reach Further and Build Community</h2>
      <p class="mx-auto mb-12 max-w-7xl text-xl text-gray-700">Join our mission to create a sustainable future. Connect with like-minded individuals and contribute to our shared vision.</p>
    </div>
    <!-- The Venus Project Blockchain Vision Proposal Callout -->
    <section class="glassy-bg animate-fade-in-up mx-auto mb-12 max-w-7xl rounded-2xl border-l-4 border-tvp-blue/60 bg-tvp-blue/5 p-6 shadow-lg" aria-label="The Venus Project Blockchain Vision for Proposals">
      <h2 class="mb-2 flex items-center gap-2 text-2xl font-bold text-tvp-blue">
        <svg class="inline-block h-7 w-7 text-tvp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m4 0h-1v-4h-1m-4 0h-1v-4h-1" /></svg>
        Proposal Vision: The Venus Project Blockchain
      </h2>
      <p class="text-gray-800">All proposals and new initiatives are designed to be part of thecreative network of activsts and volunteers validated on the <span class="font-bold text-tvp-blue">The Venus Project Blockchain</span>. This ensures that every idea, from sustainable cities to planetary habitats, is transparent, collaborative, and future-ready—empowering humanity to build a legacy of ethical, decentralized progress.</p>
      <div class="mt-6 text-center">
        <router-link to="/OutpostProposal" class="inline-block rounded-lg bg-gradient-to-r from-tvp-blue via-tvp-teal/20 bg-tvp-blue  to-tvp-purple px-6 py-3 font-bold !text-white shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-tvp-blue" aria-label="Submit your proposal">Submit Your Proposal</router-link>
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import TokenCard from "@/components/TokenCard.vue";
const locations = [
  {
    id: 1,
    name: "Venus Research Station Alpha",
    description: "Primary research and development facility for atmospheric processing",
    image: "/planets/venus.webp",
  },
  {
    id: 2,
    name: "Mars Colony Beta",
    description: "Terraforming and sustainable habitat development center",
    image: "/planets/mars.png",
  },
  {
    id: 3,
    name: "Lunar Base Gamma",
    description: "Resource extraction and processing facility",
    image: "/planets/moon.jpg",
  },
  {
    id: 4,
    name: "Europa Outpost Delta",
    description: "Exploration hub for subsurface ocean research and analysis",
    image: "/planets/europa.png",
  },
];

const selectedLocation = ref(null);
const form = ref({
  projectName: "",
  timeline: null,
  description: "",
  resources: [{ name: "", quantity: null }],
  agreeToTerms: false,
});

const isFormValid = computed(() => {
  return form.value.projectName && form.value.timeline && form.value.description && form.value.resources.every((r) => r.name && r.quantity) && form.value.agreeToTerms && selectedLocation.value;
});

function selectLocation(id) {
  selectedLocation.value = id;
}

function addResource() {
  form.value.resources.push({ name: "", quantity: null });
}

function resetForm() {
  form.value = {
    projectName: "",
    timeline: null,
    description: "",
    resources: [{ name: "", quantity: null }],
    agreeToTerms: false,
  };
  selectedLocation.value = null;
}

function submitProposal() {
  if (isFormValid.value) {
    // TODO: Implement proposal submission
    console.log("Submitting proposal:", {
      location: selectedLocation.value,
      ...form.value,
    });
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
    features: ["Advanced life support systems", "Helium-3 mining facility", "Spacecraft assembly bay", "Research laboratories"],
  },
  {
    name: "Martian Base Prime",
    description: "First permanent human settlement on Mars, focused on terraforming operations.",
    image: "/images/outposts/mars-base.jpg",
    location: "Mars - Valles Marineris",
    capacity: "500 personnel",
    timeline: "2030-2035",
    features: ["Atmospheric processing plant", "Greenhouse complexes", "Water extraction facility", "Power generation hub"],
  },
  {
    name: "Venus Cloud City",
    description: "Floating research and operations center in Venus's upper atmosphere.",
    image: "/images/outposts/venus-station.jpg",
    location: "Venus - Upper Atmosphere",
    capacity: "100 personnel",
    timeline: "2035-2040",
    features: ["Atmospheric research labs", "Carbon capture systems", "Weather monitoring station", "Solar power arrays"],
  },
];

const nftCollection = [
  {
    name: "Lunar Gateway Alpha - Genesis",
    description: "The first-ever digital representation of humanity's permanent lunar outpost, featuring unique architectural details and construction plans.",
    image: "/nft1.jpg",
    edition: "1 of 100",
    price: "0.5 ETH",
  },
  {
    name: "Mars Base Prime - Foundation",
    description: "A detailed visualization of the first Martian settlement, complete with terraforming infrastructure and habitat modules.",
    image: "/nft2.jpg",
    edition: "1 of 50",
    price: "1.0 ETH",
  },
];

let introRef = ref(null);
let formRef = ref(null);
let outpostRef = ref(null);
let nftRef = ref(null);
onMounted(() => {
  if (window.gsap) {
    if (introRef.value) window.gsap.from(introRef.value, { opacity: 0, y: 40, duration: 0.7, ease: "power2.out" });
    if (formRef.value) window.gsap.from(formRef.value, { opacity: 0, y: 40, duration: 0.7, delay: 0.2, ease: "power2.out" });
    if (outpostRef.value) window.gsap.from(outpostRef.value, { opacity: 0, y: 40, duration: 0.7, delay: 0.4, ease: "power2.out" });
    if (nftRef.value) window.gsap.from(nftRef.value, { opacity: 0, y: 40, duration: 0.7, delay: 0.6, ease: "power2.out" });
  }
});
</script>

<style scoped>
.outpost-proposal {
  background: linear-gradient(180deg, #fff 0%, #f7faff 60%, #eaf6ff 100%);
  min-height: 100vh;
}
.proposal-form {
  /* Frosted glass effect using Tailwind classes */
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px) saturate(180%);
  border-radius: 1rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.location-card {
  /* Frosted glass effect using Tailwind classes */
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px) saturate(180%);
  border-radius: 1rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.glassy-bg {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
}
</style>
