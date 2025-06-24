<template>
  <div class="venus-project-content min-h-screen w-full max-w-none animate-fade-in bg-white bg-gradient-to-br from-gray-50/50 via-gray-900/10 to-gray-950 px-0 py-8 text-black md:px-0">
    <!-- Hero Section -->
    <section class="mb-12 flex animate-slide-down flex-col items-center gap-8 px-8">
      <h1 class="text-center text-4xl font-extrabold tracking-tight text-gradient drop-shadow-lg md:text-left">
        Partnerships & Proposals – The Venus Project
      </h1>
      <p class="text-lg text-gray-700 max-w-2xl text-center">
        Join forces with The Venus Project to co-create a sustainable, ethical, and innovative future. Explore partnership opportunities, submit proposals, and become part of a global movement for positive change.
      </p>
    </section>

    <!-- Partnership Types & Benefits -->
    <section class="mb-16 rounded-xl bg-gradient-to-br from-blue-900/80 to-gray-900/80 px-8 py-8 shadow-2xl">
      <h2 class="mb-8 text-3xl font-bold text-blue-200 text-center">Partnership Opportunities</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PartnershipTypeCard
          title="Technical Integration"
          description="Integrate your technology, research, or solutions into our ecosystem."
          link="https://wa.me/38169698442"
        />
        <PartnershipTypeCard
          title="Content & Education"
          description="Collaborate on educational content, open-source projects, or digital art for global impact."
          link="https://wa.me/38169698442"
        />
        <PartnershipTypeCard
          title="Community & Outreach"
          description="Join our network to promote sustainability, youth engagement, and ethical innovation."
          link="https://wa.me/38169698442"
        />
      </div>
      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="frosted-glass-card p-8 rounded-lg">
          <h3 class="text-2xl font-bold text-blue-400 mb-4">For Partners</h3>
          <ul class="list-disc ml-6 text-lg text-gray-700 space-y-2">
            <li>Access to a global, mission-driven community</li>
            <li>Integration with our open-source, blockchain, and digital platforms</li>
            <li>Co-branding and outreach opportunities</li>
            <li>Shared knowledge, resources, and support</li>
          </ul>
        </div>
        <div class="frosted-glass-card p-8 rounded-lg">
          <h3 class="text-2xl font-bold text-blue-400 mb-4">For Participants</h3>
          <ul class="list-disc ml-6 text-lg text-gray-700 space-y-2">
            <li>Enhanced learning and collaboration experiences</li>
            <li>Exclusive access to partner content and events</li>
            <li>Opportunities for youth leadership and digital engagement</li>
            <li>Cross-platform rewards and recognition</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Major Proposals Section -->
    <section class="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8" id="major-proposals">
      <!-- Placeholder for Major Proposals Content -->
      <div class="rounded-lg bg-white p-6 shadow-md">
        <h3 class="text-xl font-semibold text-gray-800 mb-4">Upcoming Major Proposals</h3>
        <p class="text-gray-600">
          Stay tuned for our upcoming major proposals where we will outline our key initiatives and projects.
        </p>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="mb-16">
      <ContactCTA
        title="Ready to Partner or Propose?"
        description="Reach out to discuss partnership opportunities or submit your proposal."
        variant="default"
      />
    </section>
  </div>
</template>

<script setup>
import PartnershipTypeCard from '@/components/partnerships/PartnershipTypeCard.vue';
import ContactCTA from '@/components/common/ContactCTA.vue';
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(90deg, #42386c 0%, #153695 50%, #143395 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.venus-project-content {
  min-height: 100vh;
  /* width: 100vw; */
  max-width: 100vw;
  margin: 0;
  /* padding: 5rem 3rem 3rem 3rem; */
  overflow-x: hidden;
  background: linear-gradient(135deg, #f8fafc 0%, #23294611 100%);
}
.frosted-glass-card {
  background: rgba(255,255,255,0.7);
  backdrop-filter: blur(16px) saturate(180%);
  border: 1.5px solid rgba(66,56,108,0.15);
  box-shadow: 0 8px 32px 0 rgba(31,38,135,0.15);
}
</style>
