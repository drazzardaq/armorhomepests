<template>
  <SeoHead
    title="Tokenomics | The Venus Project"
    description="Explore the purpose, structure, and impact of each token supporting The Venus Project's mission: VENUS Token, Circular City Token, and Resource Token."
    keywords="Tokenomics, Venus Token, Circular City Token, Resource Token, blockchain, sustainability, The Venus Project"
    image="/the-venus-project-circular-city.jpg"
    url="https://www.thevenusproject.com/tokenomics"
    type="website"
    :schema="{
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Tokenomics',
      'url': 'https://www.thevenusproject.com/tokenomics',
      'description': 'Explore the purpose, structure, and impact of each token supporting The Venus Project.'
    }"
  />
  <div class="venus-project-content flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-white via-blue-50/30 to-tvp-blue/10 px-0 pb-8 text-gray-900 md:px-0">
    <section class="mx-auto mb-16 w-full max-w-5xl rounded-3xl bg-white/90 px-8 py-12 shadow-2xl">
      <h1 class="mb-6 text-center text-4xl font-extrabold text-tvp-blue">Tokenomics & Blockchain for Good</h1>
      <p class="mx-auto mb-10 max-w-2xl text-center text-lg text-gray-700">
        The Venus Project leverages blockchain technology to support transparency, collaboration, and global impact. Each token is designed with a unique purpose and structure to further our mission of a sustainable, equitable future.
      </p>
      <div class="grid grid-cols-1 gap-10 md:grid-cols-3">
        <TokenCard
          name="VENUS Token"
          icon="/tvp/sfera-logotip-proekt-venera.jpg"
          borderColor="border-blue-400"
          titleColor="text-blue-700"
          :description="'A digital asset supporting TVP’s global mission. Designed for transparency, collaboration, and real-world impact.'"
          :details="[
            'Governance: Enables community voting on proposals and initiatives.',
            'Utility: Used for access to special events, educational content, and project participation.',
            'Rewards: Earned by contributing to TVP projects and outreach.',
            'Blockchain Layer: Runs on a custom, TVP-dedicated blockchain for maximum transparency and efficiency.',
            'Infrastructure: Validated by TVP-owned machines and a dedicated data center for secure, sustainable operation.'
          ]"
          stats="Supply: 1,000,000,000"
          network="Ethereum / Polygon / TVP Chain"
          type="Utility & Governance"
          gradient="linear-gradient(135deg, #e0e7ef 0%, #14339510 100%)"
        />
        <TokenCard
          name="Circular City Token"
          icon="/tvp/the-venus-project-circular-city.jpg"
          borderColor="border-green-400"
          titleColor="text-green-700"
          :description="'Supports the development and demonstration of circular city prototypes and sustainable urban projects.'"
          :details="[
            'Project Funding: Used to crowdfund and support city prototypes.',
            'Access: Grants holders early access to city blueprints and design sessions.',
            'Recognition: Top contributors featured in project documentation.',
            'Blockchain Layer: Integrated with TVP’s custom blockchain for project tracking and transparency.',
            'Infrastructure: Backed by TVP’s own compute/storage resources.'
          ]"
          stats="Supply: 100,000,000"
          network="Polygon / BNB Chain / TVP Chain"
          type="Project Support"
          gradient="linear-gradient(135deg, #e0ffe7 0%, #00ffb010 100%)"
        />
        <TokenCard
          name="Resource Token"
          icon="/tvp/resource-based-economy-the-venus-project.jpg"
          borderColor="border-purple-400"
          titleColor="text-purple-700"
          :description="'A blockchain-based token for tracking, sharing, and rewarding contributions to open-source sustainability projects.'"
          :details="[
            'Proof of Contribution: Issued for verified work on open-source projects.',
            'Resource Exchange: Used in pilot resource-sharing platforms.',
            'Transparency: Tracks project milestones and impact.',
            'Blockchain Layer: Leverages TVP’s dedicated chain for open-source collaboration.',
            'Infrastructure: Computation and validation run on TVP’s data center.'
          ]"
          stats="Supply: 500,000,000"
          network="Ethereum / Gnosis Chain / TVP Chain"
          type="Contribution & Impact"
          gradient="linear-gradient(135deg, #f8e0ff 0%, #b010ff10 100%)"
        />
      </div>
    </section>
    <section class="mx-auto w-full max-w-5xl rounded-3xl bg-white/80 px-8 py-8 shadow-xl mt-8">
      <h2 class="mb-4 text-2xl font-bold text-tvp-blue">How Tokenomics Supports The Venus Project</h2>
      <ul class="list-disc ml-6 text-lg text-gray-700 space-y-2">
        <li>Enables transparent, decentralized governance and funding for TVP initiatives.</li>
        <li>Rewards meaningful contributions and fosters global collaboration.</li>
        <li>Drives real-world impact through project-based and open-source incentives.</li>
        <li>Connects supporters, volunteers, and experts in a unified digital ecosystem.</li>
      </ul>
    </section>
    <!-- Dracoscopia & TVP Chain Vision Proposal Callout -->
    <section class="glassy-bg border-l-4 border-tvp-blue/60 bg-tvp-blue/5 rounded-2xl shadow-lg mb-12 p-6 animate-fade-in-up max-w-4xl mx-auto" aria-label="Dracoscopia & TVP Chain Vision for Proposals">
      <h2 class="mb-2 text-2xl font-bold text-tvp-blue flex items-center gap-2">
        <svg class="inline-block w-7 h-7 text-tvp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m4 0h-1v-4h-1m-4 0h-1v-4h-1"/></svg>
        Proposal Vision: Dracoscopia & TVP Chain
      </h2>
      <p class="text-gray-800">All proposals and tokenomics initiatives are designed to be part of the <span class='font-bold text-tvp-blue'>Dracoscopia</span> creative network and validated on the <span class='font-bold text-tvp-blue'>TVP Chain</span> blockchain. This ensures that every token, project, and economic model is transparent, collaborative, and future-ready—empowering a sustainable, decentralized future for all. <router-link to="/Proposals" class="text-tvp-blue underline ml-1">See all proposals</router-link> or <router-link to="/community" class="text-tvp-blue underline ml-1">join the community</router-link>.</p>
      <div class="my-6 flex flex-col items-center">
        <!-- Placeholder for future SVG/diagram -->
        <!-- <img src="/images/infra/infra-diagram-placeholder.svg" alt="TVP Decentralized Infrastructure Diagram" class="w-full max-w-md mb-4" /> -->
        <router-link to="/OutpostProposal" class="inline-block rounded-lg bg-gradient-to-r from-tvp-blue via-tvp-teal to-tvp-purple px-6 py-3 text-white font-bold shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-tvp-blue" aria-label="Submit your tokenomics proposal">Submit Your Tokenomics Proposal</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import SeoHead from '@/components/SeoHead.vue';
import TokenCard from '@/components/TokenCard.vue';
</script>

<style scoped>
.venus-project-content {
  min-height: 100vh;
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  padding: 5rem 3rem 3rem 3rem;
  overflow-x: hidden;
  background: linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%);
}
</style>
