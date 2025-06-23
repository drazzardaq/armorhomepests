<template>
  <div class="min-h-screen bg-gradient-to-b from-crypto-dark to-dark-purple">
    <!-- Hero Section -->
    <section class="relative py-20 overflow-hidden">
      <div class="absolute inset-0 bg-black/50 z-10" 
           style="background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://TVPOutpost.com/sa5.png') no-repeat center center; background-size: cover;"></div>
      <div class="relative z-20 container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 text-white">Partnership Opportunities</h1>
          <p class="text-xl text-gray-300 mb-8">
            Join forces with TVPOutpost & Realmsz to create innovative blockchain gaming and NFT experiences.
          </p>
        </div>
      </div>
    </section>

    <!-- Partnership Types -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-crypto-dark/50 p-8 rounded-lg border border-crypto-primary/20">
            <h3 class="text-2xl font-bold text-white mb-4">Technical Integration</h3>
            <p class="text-gray-300 mb-6">Partner with us to integrate your blockchain technology or gaming solutions into our ecosystem.</p>
            <router-link to="/contact" class="text-crypto-primary hover:text-crypto-accent">Learn More →</router-link>
          </div>
          <div class="bg-crypto-dark/50 p-8 rounded-lg border border-crypto-primary/20">
            <h3 class="text-2xl font-bold text-white mb-4">Content Creation</h3>
            <p class="text-gray-300 mb-6">Create unique NFT collections or gaming content for our platforms.</p>
            <router-link to="/contact" class="text-crypto-primary hover:text-crypto-accent">Learn More →</router-link>
          </div>
          <div class="bg-crypto-dark/50 p-8 rounded-lg border border-crypto-primary/20">
            <h3 class="text-2xl font-bold text-white mb-4">Marketing Alliance</h3>
            <p class="text-gray-300 mb-6">Join our marketing network to promote blockchain gaming and NFT initiatives.</p>
            <router-link to="/contact" class="text-crypto-primary hover:text-crypto-accent">Learn More →</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Lead Contact -->
    <section class="py-16 bg-crypto-dark/30">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <div class="mb-8">
            <img src="https://TVPOutpost.com/scopia.png" alt="Rewainde Scopia" class="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-crypto-primary" />
            <h2 class="text-3xl font-bold text-white mb-2">Rewainde Scopia</h2>
            <p class="text-xl text-gray-300 mb-4">Team Lead & Project Director</p>
          </div>
          <div class="space-y-4">
            <a href="mailto:scopia@realmsz.com" class="flex items-center justify-center text-gray-300 hover:text-white transition-colors">
              <font-awesome-icon :icon="['fas', 'envelope']" class="w-6 mr-3" />
              <span>scopia@realmsz.com</span>
            </a>
            <a href="https://bsky.app/profile/TVPOutpost.com" target="_blank" class="flex items-center justify-center text-gray-300 hover:text-white transition-colors">
              🦋
              <span>@TVPOutpost.com</span>
            </a>
            <a href="https://github.com/TVPOutpost" target="_blank" class="flex items-center justify-center text-gray-300 hover:text-white transition-colors">
              <font-awesome-icon :icon="['fab', 'github']" class="w-6 mr-3" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Partnership Benefits -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-white text-center mb-12">Partnership Benefits</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-crypto-dark/50 p-8 rounded-lg border border-crypto-primary/20">
            <h3 class="text-2xl font-bold text-white mb-4">For Partners</h3>
            <ul class="space-y-4 text-gray-300">
              <li class="flex items-start gap-3">
                <font-awesome-icon :icon="['fas', 'check']" class="w-6 text-crypto-primary" />
                <span>Access to our growing user base of NFT collectors and gamers</span>
              </li>
              <li class="flex items-start gap-3">
                <font-awesome-icon :icon="['fas', 'check']" class="w-6 text-crypto-primary" />
                <span>Integration with our blockchain gaming infrastructure</span>
              </li>
              <li class="flex items-start gap-3">
                <font-awesome-icon :icon="['fas', 'check']" class="w-6 text-crypto-primary" />
                <span>Revenue sharing opportunities</span>
              </li>
            </ul>
          </div>
          <div class="bg-crypto-dark/50 p-8 rounded-lg border border-crypto-primary/20">
            <h3 class="text-2xl font-bold text-white mb-4">For Users</h3>
            <ul class="space-y-4 text-gray-300">
              <li class="flex items-start gap-3">
                <font-awesome-icon :icon="['fas', 'check']" class="w-6 text-crypto-primary" />
                <span>Enhanced gaming experiences through partnerships</span>
              </li>
              <li class="flex items-start gap-3">
                <font-awesome-icon :icon="['fas', 'check']" class="w-6 text-crypto-primary" />
                <span>Exclusive access to partner NFT collections</span>
              </li>
              <li class="flex items-start gap-3">
                <font-awesome-icon :icon="['fas', 'check']" class="w-6 text-crypto-primary" />
                <span>Cross-platform benefits and rewards</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <ContactCTA 
      title="Ready to Partner With Us?" 
      description="Let's discuss how we can create value together in the blockchain gaming and NFT space."
      :showButton="true"
      buttonText="Start Discussion"
      buttonLink="/contact"
      variant="partnership"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faCloud, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import ContactCTA from '@/components/common/ContactCTA.vue'

library.add(faEnvelope, faCloud, faCheck, faGithub)
</script>

<style scoped>
.btn-gradient-crypto {
  @apply px-6 py-3 bg-gradient-to-r from-crypto-primary to-crypto-accent text-white rounded-lg hover:opacity-90 transition-opacity;
}
</style> 