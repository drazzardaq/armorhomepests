<template>
  <footer class="footer-glass border-t border-white/30 bg-white py-12 text-blue-50 backdrop-blur-md">
    <div class="mx-auto max-w-7xl px-4">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div class="space-y-4">
          <router-link to="/" aria-label="The Venus Project Home">
            <img src="/icon-white.png" alt="The Venus Project Icon" class="h-20 w-20 transition-transform" />
          </router-link>
          <p class="mb-4 text-gray-50">Presenting a bold, new direction for humanity that entails nothing less than the total redesign of our culture.</p>
          <div class="flex space-x-4">
            <a href="https://facebook.com/TheVenusProject" target="_blank" aria-label="Facebook" class="transition hover:text-tvp-blue focus:outline-none focus:ring-2 focus:ring-tvp-blue"><font-awesome-icon :icon="['fab', 'facebook-f']" size="xl" /></a>
            <a href="https://www.youtube.com/user/thevenusprojectmedia" target="_blank" aria-label="YouTube" class="transition hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"><font-awesome-icon :icon="['fab', 'youtube']" size="xl" /></a>
            <a href="https://www.instagram.com/thevenusproject/" target="_blank" aria-label="Instagram" class="transition hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-400"><font-awesome-icon :icon="['fab', 'instagram']" size="xl" /></a>
            <a href="https://twitter.com/TheVenusProject" target="_blank" aria-label="Twitter/X" class="transition hover:text-tvp-teal focus:outline-none focus:ring-2 focus:ring-tvp-teal"><font-awesome-icon :icon="['fab', 'x-twitter']" size="xl" /></a>
          </div>
        </div>

        <div>
          <h3 class="mb-4 text-xl font-bold">Main Pages</h3>
          <ul class="space-y-2">
            <li><router-link to="/" class="font-semibold text-gray-50 hover:text-white">Home</router-link></li>
            <li><router-link to="/about" class="font-semibold text-gray-50 hover:text-white">About</router-link></li>
            <li><router-link to="/history" class="font-semibold text-gray-50 hover:text-white">History</router-link></li>
            <li><router-link to="/mission" class="font-semibold text-gray-50 hover:text-white">Mission</router-link></li>
            <li><router-link to="/solutions" class="font-semibold text-gray-50 hover:text-white">Solutions</router-link></li>
            <li><router-link to="/faq" class="font-semibold text-gray-50 hover:text-white">FAQ</router-link></li>
            <li><router-link to="/advisors" class="font-semibold text-gray-50 hover:text-white">Advisors</router-link></li>
            <li><router-link to="/visit" class="font-semibold text-gray-50 hover:text-white">Visit</router-link></li>
            <li><router-link to="/projects" class="font-semibold text-gray-50 hover:text-white">Projects</router-link></li>
            <li><router-link to="/partnerships" class="font-semibold text-gray-50 hover:text-white">Partnerships</router-link></li>
            <li><router-link to="/contact" class="font-semibold text-gray-50 hover:text-white">Contact</router-link></li>
          </ul>
        </div>
        <div>
          <h3 class="mb-4 text-xl font-bold">Resources</h3>
          <ul class="space-y-2">
            <li><router-link to="/media" class="font-semibold text-gray-50 hover:text-white">Media</router-link></li>
            <li><router-link to="/resources" class="font-semibold text-gray-50 hover:text-white">Resource Center</router-link></li>
            <li><router-link to="/planets" class="font-semibold text-gray-50 hover:text-white">Planets</router-link></li>
            <li><router-link to="/relocation-proposal" class="font-semibold text-gray-50 hover:text-white">Relocation Proposal</router-link></li>
            <li><router-link to="/featuring-activist" class="font-semibold text-gray-50 hover:text-white">Activist</router-link></li>
            <li><router-link to="/asi-proposal" class="font-semibold text-gray-50 hover:text-white">ASI Proposal</router-link></li>
            <li><router-link to="/outpostproposal" class="font-semibold text-gray-50 hover:text-white">Outpost Proposal</router-link></li>
            <li><router-link to="/projects" class="font-semibold text-gray-50 hover:text-white">Tokenomics</router-link></li>
            <li>
              <a href="https://www.thevenusproject.com" target="_blank" rel="noopener noreferrer" class="inline-flex items-center font-semibold text-gray-50 hover:text-white">
                Official Site
                <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <h3 class="mb-4 text-xl font-bold">Collaboration Contact</h3>
            <div class="flex flex-col gap-2">
              <a href="https://wa.me/38169698442" target="_blank" class="flex items-center justify-center gap-2 rounded-lg bg-green-500 px-4 py-2 text-center font-bold !text-white shadow-lg hover:opacity-90 hover:shadow-sm hover:saturate-[1.12]">
                <font-awesome-icon :icon="['fab', 'whatsapp']" size="xl" class="!text-white" />
                WhatsApp
              </a>
              <a href="mailto:dracorisz@outlook.com" class="flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-center font-bold !text-white shadow-lg hover:opacity-90 hover:shadow-sm hover:saturate-[1.12]">
                <font-awesome-icon :icon="['fas', 'envelope']" size="xl" class="!text-white" />
                Email
              </a>
              <a href="/partnerships" class="rounded-lg bg-gradient-to-r from-tvp-purple to-tvp-blue px-4 py-2 text-center font-bold !text-white shadow-lg hover:opacity-90 hover:shadow-sm hover:saturate-[1.12]">Become a Partner</a>
              <a href="/projects" class="rounded-lg bg-gradient-to-r from-tvp-blue to-tvp-teal px-4 py-2 text-center font-bold !text-white shadow-lg hover:opacity-90 hover:shadow-sm hover:saturate-[1.12]">Explore Projects</a>
              <p class="mt-2 text-xs text-gray-500">
                <a href="/resume" class="underline hover:text-blue-300">Resume & Personal Commitment</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Resources & Proposals Row -->
      <h3 class="mb-4 text-xl font-bold">Proposals & Initiatives</h3>
      <div class="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
        <div class="animate-fade-in-up flex flex-col items-center gap-4">
          <div v-for="(proposal, _) in visibleProposals" :key="proposal.title" class="group flex w-full max-w-2xl cursor-pointer items-center rounded-xl bg-white/10 p-3 shadow transition hover:bg-white/20" @click="openProposalModal(proposal)" tabindex="0" :aria-label="'Open details for ' + proposal.title">
            <img :src="proposal.img" :alt="proposal.title" class="mr-4 h-16 w-16 rounded-xl border border-tvp-blue/20 object-cover shadow transition group-hover:scale-105" />
            <div class="flex flex-1 flex-col">
              <span class="text-gradient mb-1 text-lg font-bold">{{ proposal.title }}</span>
              <span class="line-clamp-2 text-sm text-gray-200">{{ proposal.desc }}</span>
            </div>
          </div>
          <button v-if="footerProposals.length > visibleProposals.length" @click="loadMoreProposals" class="mt-2 text-sm text-blue-200 underline hover:text-white focus:outline-none">Load More</button>
        </div>
        <ProposalModal v-if="openProposal" :proposal="openProposal" @close="closeProposalModal" />
      </div>
    </div>
    <!-- Footer base row -->
    <div class="mx-auto mt-10 w-full max-w-6xl border-t border-white/20 px-4 py-8 text-center text-gray-50 md:px-0">
      <router-link to="/" aria-label="The Venus Project Home">
        <img src="/the-venus-project-logo.png" alt="The Venus Project Icon" class="mx-auto h-10 w-auto transition-transform" />
      </router-link>
      <div class="mx-auto my-5 flex max-w-xl flex-wrap justify-center gap-4">
        <a href="https://www.facebook.com/TheVenusProjectGlobal/" target="_blank" class="btn-glass-aa flex items-center gap-2"><font-awesome-icon :icon="['fab', 'facebook-f']" class="mr-2" />Facebook</a>
        <a href="https://twitter.com/TheVenusProject" target="_blank" class="btn-glass-aa flex items-center gap-2"><font-awesome-icon :icon="['fab', 'twitter']" class="mr-2" />Twitter</a>
        <a href="https://www.linkedin.com/company/the-venus-project/" target="_blank" class="btn-glass-aa flex items-center gap-2"><font-awesome-icon :icon="['fab', 'linkedin-in']" class="mr-2" />LinkedIn</a>
        <a href="https://www.instagram.com/thevenusproject/" target="_blank" class="btn-glass-aa flex items-center gap-2"><font-awesome-icon :icon="['fab', 'instagram']" class="mr-2" />Instagram</a>
        <a href="https://www.pinterest.com/thevenusproject/" target="_blank" class="btn-glass-aa flex items-center gap-2"><font-awesome-icon :icon="['fab', 'pinterest-p']" class="mr-2" />Pinterest</a>
        <a href="https://www.youtube.com/channel/UCPNMR_iABvyFmc3G9i1r3Lw" target="_blank" class="btn-glass-aa flex items-center gap-2"><font-awesome-icon :icon="['fab', 'youtube']" class="mr-2" />YouTube</a>
      </div>
      <div class="mt-2 text-sm">© 2025 The Venus Project | All rights reserved unless otherwise noted.</div>
      <div class="mt-2 text-xs !text-gray-50">
        <a href="https://www.thevenusproject.com/about/contacts/" target="_blank" class="text-gray-50">Contact</a> · <a href="https://www.thevenusproject.com/privacy-policy/" target="_blank" class="text-gray-50">Privacy Policy</a> ·
        <a href="https://www.thevenusproject.com/terms-and-conditions-of-use/" target="_blank" class="text-gray-50">Terms</a>
      </div>
      <div class="mt-4 text-xs italic text-gray-300">
        Robots are disabled here to prevent negative SEO impact on the origin domain due to reused content. SEO can be further optimized if the project is officially approved and relevant to The Venus Project Nonprofit. This website is undergoing updates. Some content and features may change.
        <span class="ml-2 font-mono">v1.1.3</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { allProposals } from "@/assets/proposals.js";
import ProposalModal from "./ProposalModal.vue";
// Show all proposals in the footer proposals section
const footerProposals = allProposals;

// Modal state for proposal modal
const openProposal = ref(null);
function openProposalModal(proposal) {
  openProposal.value = proposal;
}
function closeProposalModal() {
  openProposal.value = null;
}

// Pagination state
const visibleProposals = ref(footerProposals.slice(0, 3)); // Show first 3 proposals initially
function loadMoreProposals() {
  const nextIndex = visibleProposals.value.length;
  const nextProposals = footerProposals.slice(nextIndex, nextIndex + 3);
  visibleProposals.value.push(...nextProposals);
}

onMounted(() => {
  gsap.from(".footer-glass", { y: 60, opacity: 0, duration: 1, ease: "power2.out" });
  if (window.gsap) {
    window.gsap.from(".frosted-glass-card", {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.7,
      ease: "power2.out",
    });
  }
});
</script>

<style scoped>
.footer-glass {
  background: linear-gradient(to bottom, #1e3a8acc 80%, #1e3a8a 100%);
  color: #111827;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  box-shadow: 0 -4px 24px 0 rgba(66, 56, 108, 0.08);
}

h3,
svg {
  color: #f3f4f6;
}
.btn-glass-aa {
  border-radius: 0.5rem;
  background: linear-gradient(to right, #7c3aed, #1e3a8a);
  padding: 0.5rem 1rem;
  font-weight: 600;
  color: #fff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}
.frosted-glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.75rem;
  padding: 1rem;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}
</style>

