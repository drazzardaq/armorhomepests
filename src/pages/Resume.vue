<template>
  <!-- <Layout :activeSection="'resume'"> -->
  <section class="venus-project-content min-h-screen w-full max-w-none animate-fade-in px-0 py-8 text-gray-900 md:px-0">
    <div class="frosted-glass-card flex flex-col gap-8 p-8">
      <header>
        <h1 class="headingClass">Personal Commitment</h1>
        <p class="subheadingClass">A lifelong dedication to a better future</p>
      </header>
      <div class="prose prose-invert max-w-none text-lg">
        <div class="mb-8 text-center">
          <h2 class="text-gradient mb-4 text-3xl font-bold">Ready to Relocate & Collaborate</h2>
          <h3 class="mb-2 text-xl font-semibold text-green-600">Open to New Opportunities & Partnerships</h3>
          <p class="mb-2 text-lg">Eager to join The Venus Project or similar initiatives, contribute skills, and help shape a sustainable future. Relocation is welcome, and open to direct contact, video calls, and collaborative discussions.</p>
          <p class="mb-4 text-lg">If you are part of The Venus Project, the Fresco Foundation, or a like-minded community, let's connect and explore how to work together.</p>
          <div class="mt-4 flex flex-col justify-center gap-4 md:flex-row">
            <a href="mailto:dracorisz@outlook.com" class="btn-glass flex items-center gap-2"><font-awesome-icon icon="envelope" />Email Me</a>
            <a href="https://wa.me/38169698442" target="_blank" class="btn-glass flex items-center gap-2"><font-awesome-icon :icon="['fab', 'whatsapp']" />WhatsApp Me</a>
          </div>
          <p class="mt-4 text-sm text-gray-400">I am open to interviews, video meetings, and collaborative planning. Let's connect and make a real impact together.</p>
          <div class="mt-8 text-lg font-semibold text-green-700">
            <span class="inline-block rounded-lg bg-green-100/80 px-4 py-2 shadow">Ready to take action and join a global movement for a better world. Let's build the future together!</span>
          </div>
        </div>
        <!-- My Mission & Alignment (from TheVenusProject.vue) -->
        <div class="mb-8 text-center">
          <h2 class="text-gradient mb-4 text-3xl font-bold">My Mission & Alignment</h2>
          <p class="mb-4 text-lg text-gray-800">I am dedicated to designing and building systems that enhance well-being and align with the carrying capacity of Earth. My work and values are inspired by The Venus Project’s holistic, systems-based approach to solving global issues through science, technology, and collaboration.</p>
          <p class="mb-4 text-lg italic text-blue-700">"No civilization will prevail in the long-term without acknowledging that the enhancement of human wellbeing depends first on its alignment with nature."</p>
        </div>
        
        <!-- Why TVP? / Why Collaborate? -->
        <div class="mb-8 text-center">
          <h2 class="text-gradient mb-4 text-3xl font-bold">Why The Venus Project?</h2>
          <p class="mb-4 text-lg text-gray-800">I believe in a future where technology, science, and compassion work together to create a sustainable, equitable world. The Venus Project’s vision for resource-based economies, circular cities, and global collaboration aligns perfectly with my skills and aspirations. I am ready to contribute, learn, and help lead the way to a better future.</p>
        </div>
        <div class="mx-auto max-w-9xl">
          <div class="flex flex-col items-center gap-8 md:flex-row">
            <div class="flex flex-shrink-0 flex-col items-center">
              <img :src="myImage" alt="My Photo" class="mb-4 h-40 w-40 rounded-full border-4 border-tvp-blue shadow-lg" />
              <h2 class="mb-2 bg-gradient-to-r from-tvp-purple via-tvp-blue to-tvp-teal bg-clip-text text-2xl font-bold text-transparent">Dragoljub</h2>
              <span class="font-semibold text-gray-700">AI Orchestrator & Software Engineer</span>
            </div>
            <div class="flex-1">
              <h3 class="mb-2 text-xl font-semibold">Profile</h3>
              <p class="mb-2 text-lg">Modern technologist with expertise in AI, software, and design. Passionate about building systems for a sustainable, liberated future.</p>
              <ul class="mb-2 ml-8 list-disc text-lg">
                <li>Location: Serbia <span class="ml-2 inline-block rounded bg-emerald-500/70 px-3 py-1 text-sm font-semibold uppercase text-emerald-100">Aiming to Relocate</span></li>
                <li>Birthday: January 17, 1989</li>
                <li>Horoscope: Capricorn</li>
                <li>Chinese Zodiac: Earth Dragon <img src="/tvp/sad.png" alt="Earth Dragon" class="ml-1 inline h-6 w-6 align-middle" /></li>
                <li>Hourly Rate: $50 USD / Hour <span class="ml-2 inline-block rounded bg-crypto-warning/20 px-3 py-1 text-sm font-semibold uppercase text-crypto-warning">Goal $0 Economy Leaving</span></li>
              </ul>
            </div>
          </div>
          <div class="mt-8">
            <BaseButton @click="showAppSection = !showAppSection" color="primary" class="mb-4 w-full">Show Software Team Application & Commitment</BaseButton>
            <transition name="fade">
              <div v-if="showAppSection" class="frosted-glass-card mt-2 rounded-xl p-6 shadow-xl">
                <h2 class="mb-2 text-2xl font-bold text-blue-700">The Venus Project Network - Software Team Application</h2>
                <p class="mb-4 text-lg text-gray-800">I am applying to join The Venus Project Network as a software developer and collaborator. All proposals, intentions, and related content are unified here for clarity and transparency.</p>
                <h3 class="mb-2 text-xl font-semibold text-blue-600">Privacy & Commitment</h3>
                <p class="mb-4 text-gray-700">Your information and proposals are treated with the utmost respect and confidentiality. We are committed to using your data solely for the purpose of evaluating your application and fostering collaboration. No information will be shared outside The Venus Project Network without your explicit consent.</p>
                <div class="flex flex-col gap-6 md:flex-row">
                  <div class="flex-1">
                    <h4 class="mb-1 font-bold text-blue-500">Personal Commitment</h4>
                    <p class="mb-2 text-gray-700">This is a personal dedication to the work and vision of Jacque Fresco and The Venus Project. I am committed to contributing my skills and energy to advance the mission of a sustainable, humane future.</p>
                    <ul class="ml-6 list-disc text-gray-700">
                      <li>Open to relocation and collaboration</li>
                      <li>Ready for interviews, video meetings, and planning</li>
                      <li>Dedicated to ethical, open-source, and human-centered technology</li>
                    </ul>
                  </div>
                  <div class="flex-1">
                    <h4 class="mb-1 font-bold text-blue-500">Contact</h4>
                    <p class="text-gray-700">Email: dracorisz@outlook.com</p>
                    <p class="text-gray-700">Portfolio: <a href="https://TVPOutpost.com/thevenusproject" class="text-blue-400 underline" target="_blank">TVPOutpost.com/thevenusproject</a></p>
                  </div>
                </div>
              </div>
            </transition>
          </div>
          <div class="mt-8">
            <button @click="showPastAI = !showPastAI" class="mb-4 w-full rounded-lg bg-gradient-to-r from-tvp-blue to-tvp-teal px-6 py-3 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:opacity-90">{{ showPastAI ? "Hide" : "Show" }} Before-AI Skills & Experience</button>
            <transition name="fade">
              <div v-if="showPastAI" class="frosted-glass-card mt-2 rounded-xl p-6 shadow-xl">
                <h3 class="mb-4 text-xl font-semibold">Before-AI Skills & Experience</h3>
                <ul class="ml-8 list-disc text-lg">
                  <li>Full Stack Web Development (Vue, React, Node.js, PHP, Laravel, WordPress)</li>
                  <li>UI/UX & Graphic Design (Figma, Adobe Suite, branding, web/mobile design)</li>
                  <li>Blockchain & Smart Contracts (Solidity, Web3, NFT platforms)</li>
                  <li>Project Management & Agile (Scrum, Kanban, remote teams)</li>
                  <li>API Integration & Automation (REST, GraphQL, Zapier, Integromat)</li>
                  <li>Cloud & DevOps (AWS, DigitalOcean, CI/CD, Docker)</li>
                  <li>SEO & Digital Marketing (content, analytics, growth strategy)</li>
                  <li>Technical Writing & Documentation</li>
                  <li>Client Communication & Consulting (Freelancer.com Top Rated, LinkedIn recommendations)</li>
                  <li>Open Source & Community Leadership</li>
                </ul>
                <div class="mt-4 text-sm text-blue-700">
                  <a href="https://www.freelancer.com/u/Dragoljub" target="_blank" class="underline">Freelancer.com Profile</a> |
                  <a href="https://www.linkedin.com/in/drazzardaq/" target="_blank" class="underline">LinkedIn</a>
                </div>
              </div>
            </transition>
          </div>
          <div class="mt-8">
            <h3 class="mb-4 bg-gradient-to-r from-tvp-purple via-tvp-blue to-tvp-teal bg-clip-text text-2xl font-bold text-transparent">Essential AI-BUILDING SKILLS</h3>
            <ul class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <li class="rounded-lg bg-gradient-to-r from-tvp-blue/10 to-tvp-teal/10 p-4 font-semibold text-blue-900 shadow">Strategic Prompt Engineering</li>
              <li class="rounded-lg bg-gradient-to-r from-tvp-blue/10 to-tvp-teal/10 p-4 font-semibold text-blue-900 shadow">AI-Powered Software Creation</li>
              <li class="rounded-lg bg-gradient-to-r from-tvp-blue/10 to-tvp-teal/10 p-4 font-semibold text-blue-900 shadow">Generative Design Mastery</li>
              <li class="rounded-lg bg-gradient-to-r from-tvp-blue/10 to-tvp-teal/10 p-4 font-semibold text-blue-900 shadow">Intelligent Video Production</li>
              <li class="rounded-lg bg-gradient-to-r from-tvp-blue/10 to-tvp-teal/10 p-4 font-semibold text-blue-900 shadow">AI Writing Systems</li>
              <li class="rounded-lg bg-gradient-to-r from-tvp-blue/10 to-tvp-teal/10 p-4 font-semibold text-blue-900 shadow">Orchestrated Content Systems</li>
              <li class="rounded-lg bg-gradient-to-r from-tvp-blue/10 to-tvp-teal/10 p-4 font-semibold text-blue-900 shadow">Business Process Automation</li>
              <li class="rounded-lg bg-gradient-to-r from-tvp-blue/10 to-tvp-teal/10 p-4 font-semibold text-blue-900 shadow">Insight Extraction</li>
              <li class="rounded-lg bg-gradient-to-r from-tvp-blue/10 to-tvp-teal/10 p-4 font-semibold text-blue-900 shadow">Autonomous Agent Development</li>
            </ul>
          </div>
          <!-- Open Source Projects Section -->
          <Proposals :proposals="allProposals" :filters="proposalFilters" />
        </div>
      </div>
    </div>
  </section>
  <!-- </Layout> -->
</template>

<script setup>
import { ref } from "vue";
import Proposals from '@/components/Proposals.vue';
import Layout from "@/layouts/Layout.vue";
import { headingClass, subheadingClass } from "@/layouts/layoutClasses";
import { allProposals, proposalFilters } from '@/assets/proposals.js';
const showResume = ref(false);
const showAppSection = ref(false); // For foldable application section
const myImage = ref("/tvp/prfile.webp"); // Set your image URL here
const showPastAI = ref(false);
</script>

<style scoped>
/* Remove all local glass/frosted/project-card styles. Use only global classes from tvp-global.css. */
.venus-project-content {
  min-height: 80vh;
  max-width: 100vw;
  margin: 0 auto;
  padding:0 !important;
  overflow-x: hidden;
}
/* Animation fixes */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
