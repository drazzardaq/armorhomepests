<template>
  <footer class="footer-glass border-t border-white/30 bg-white/10 py-12 text-blue-50 glass-effect backdrop-blur-xl shadow-lg font-ui" aria-label="Site Footer">
    <div class="mx-auto w-full max-w-7xl flex-nowrap">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div class="space-y-5">
          <router-link to="/" aria-label="The Venus Project Home">
            <img src="/icon-white.png" alt="The Venus Project Icon" class="h-20 w-20 transition-transform" />
          </router-link>
          <p class="mb-4 text-base text-gray-200 font-ui">Presenting a bold, new direction for humanity that entails nothing less than the total redesign of our culture.</p>
          <div class="mx-auto my-5 flex max-w-xl flex-wrap items-start justify-start gap-2">
            <a href="https://www.facebook.com/TheVenusProjectGlobal/" target="_blank" aria-label="Facebook" class="btn-glass-aa flex items-center gap-2"><font-awesome-icon :icon="['fab', 'facebook-f']" class="ml-px mr-2" /></a>
            <a href="https://twitter.com/TheVenusProject" target="_blank" aria-label="Twitter" class="btn-glass-aa flex items-center gap-2"><font-awesome-icon :icon="['fab', 'twitter']" class="mr-2" /></a>
            <a href="https://www.linkedin.com/company/the-venus-project/" target="_blank" aria-label="LinkedIn" class="btn-glass-aa flex items-center gap-2"><font-awesome-icon :icon="['fab', 'linkedin-in']" class="mr-2" /></a>
            <a href="https://www.instagram.com/thevenusproject/" target="_blank" aria-label="Instagram" class="btn-glass-aa flex items-center gap-2"><font-awesome-icon :icon="['fab', 'instagram']" class="mr-2" /></a>
            <a href="https://www.pinterest.com/thevenusproject/" target="_blank" aria-label="Pinterest" class="btn-glass-aa flex items-center gap-2"><font-awesome-icon :icon="['fab', 'pinterest-p']" class="mr-2" /></a>
            <a href="https://www.youtube.com/channel/UCPNMR_iABvyFmc3G9i1r3Lw" target="_blank" aria-label="YouTube" class="btn-glass-aa flex items-center gap-2"><font-awesome-icon :icon="['fab', 'youtube']" class="mr-2" /></a>
          </div>
          <a href="https://www.thevenusproject.com" target="_blank" rel="noopener noreferrer" class="mt-auto inline-flex items-center font-semibold text-gray-200 hover:text-white font-ui">
            Official Website
            <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
        <div>
          <h3 class="mb-4 text-xl font-heading">Quick Links</h3>
          <ul class="space-y-2">
            <li><router-link to="/" class="font-ui font-semibold text-gray-200 hover:text-white">Home</router-link></li>
            <li><router-link to="/about" class="font-ui font-semibold text-gray-200 hover:text-white">About</router-link></li>
            <li><router-link to="/history" class="font-ui font-semibold text-gray-200 hover:text-white">History</router-link></li>
            <!-- <li><router-link to="/mission" class="font-ui font-semibold text-gray-200 hover:text-white">Mission</router-link></li> -->
            <li><router-link to="/solutions" class="font-ui font-semibold text-gray-200 hover:text-white">Solutions</router-link></li>
            <!-- <li><router-link to="/faq" class="font-ui font-semibold text-gray-200 hover:text-white">FAQ</router-link></li> -->
            <li><router-link to="/advisors" class="font-ui font-semibold text-gray-200 hover:text-white">Advisors</router-link></li>
            <li><router-link to="/visit" class="font-ui font-semibold text-gray-200 hover:text-white">Visit</router-link></li>
            <li><router-link to="/projects" class="font-ui font-semibold text-gray-200 hover:text-white">Projects</router-link></li>
          </ul>
        </div>
        <div>
          <h3 class="mb-4 text-xl font-heading">Resources</h3>
          <ul class="space-y-2">
            <li><router-link to="/media" class="font-ui font-semibold text-gray-200 hover:text-white">Media</router-link></li>
            <li><router-link to="/planets" class="font-ui font-semibold text-gray-200 hover:text-white">Planets</router-link></li>
            <li><router-link to="/resources" class="font-ui font-semibold text-gray-200 hover:text-white">Resource Center</router-link></li>
            <li><router-link to="/featuring-activist" class="font-ui font-semibold text-gray-200 hover:text-white">Activist</router-link></li>
            <li><router-link to="/asi-proposal" class="font-ui font-semibold text-gray-200 hover:text-white">ASI Proposal</router-link></li>
            <li><router-link to="/outpostproposal" class="font-ui font-semibold text-gray-200 hover:text-white">Outpost Proposal</router-link></li>
            <li><router-link to="/tokenomics" class="font-ui font-semibold text-gray-200 hover:text-white">Tokenomics</router-link></li>
            <!-- <li><router-link to="/partnerships" class="font-ui font-semibold text-gray-200 hover:text-white">Partnerships</router-link></li> -->
          </ul>
        </div>
        <div>
          <h3 class="mb-4 text-xl font-heading">Collaboration Contact</h3>
          <div class="flex flex-col gap-2">
            <a href="https://wa.me/38169698442" target="_blank" class="flex items-center justify-center gap-2 rounded-lg bg-green-500 px-4 py-2 text-center font-bold !text-white shadow-lg hover:opacity-90 hover:shadow-sm hover:saturate-[1.12] font-ui">
              <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-white mr-2" />
              WhatsApp
            </a>
            <a href="mailto:dracorisz@outlook.com" class="flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-center font-bold !text-white shadow-lg hover:opacity-90 hover:shadow-sm hover:saturate-[1.12] font-ui">
              <font-awesome-icon icon="envelope" class="text-white mr-2" />
              Email
            </a>
            <!-- <a href="/partnerships" class="rounded-lg bg-gradient-to-r from-tvp-purple to-tvp-blue px-4 py-2 text-center font-bold !text-white shadow-lg hover:opacity-90 hover:shadow-sm hover:saturate-[1.12] font-ui">
              <font-awesome-icon icon="handshake" class="text-white mr-2" />
              Become a Partner
            </a> -->
            <a href="/projects" class="rounded-lg bg-gradient-to-r from-tvp-blue to-tvp-teal px-4 py-2 text-center font-bold !text-white shadow-lg hover:opacity-90 hover:shadow-sm hover:saturate-[1.12] font-ui">
              <font-awesome-icon icon="compass" class="text-white mr-2" />
              Explore Projects
            </a>
          </div>
        </div>
      </div>
      <div class="mx-auto mt-10 font-normal font-inter w-full max-w-7xl border-t border-white/20 px-4 py-8 text-center text-gray-200 md:px-0">
      <router-link to="/" aria-label="The Venus Project Home">
        <img src="/the-venus-project-logo.png" alt="The Venus Project Icon" class="mx-auto h-10 w-auto transition-transform" />
      </router-link>

      <div class="mt-2 text-sm">© 2025 The Venus Project | All rights reserved unless otherwise noted.</div>
      <div class="mt-2 text-xs !text-gray-200 !font-inter">
        <a href="https://www.thevenusproject.com/about/contacts/" target="_blank" class="!text-gray-200 !font-inter hover:!text-white">Contact</a> · <a href="https://www.thevenusproject.com/privacy-policy/" target="_blank" class="!font-inter hover:!text-white !text-gray-200">Privacy Policy</a> ·
        <a href="https://www.thevenusproject.com/terms-and-conditions-of-use/" target="_blank" class="!text-gray-200 !font-inter hover:!text-white">Terms</a>
      </div>
      <div class="mx-auto mt-4 max-w-3xl text-xs text-gray-200/70 font-normal font-inter">
        <b>SEO Impact</b>: This site is a non-official Outpost for The Venus Project. Robots (<a href="https://developers.google.com/search/docs/crawling-indexing/robots/intro" target="_blank">robots.txt</a>) are disabled to prevent negative SEO impact on the origin domain due to reused content. SEO can be further optimized if the project is officially approved and relevant to The Venus Project. <br /><br />
        This website is undergoing updates. Some content and features may change.
        <br /><br />
        <span class="font-mono">v1.1.5</span>
      </div>
    </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";

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
  background: linear-gradient(90deg, #2222ff 10%, #1e3a8a 80%);
  color: #111827;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  box-shadow: 0 -4px 24px 0 rgba(66, 56, 108, 0.08);
}

h3,
svg {
  color: #f3f4f6;
}
.btn-glass-aa svg {
  @apply text-current;
}
.btn-glass-aa {
  @apply flex items-center justify-center text-white/80 transition-colors duration-300 hover:text-white;
  font-size: 1.5rem;
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

