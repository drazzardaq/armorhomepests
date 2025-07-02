<template>
  <div class="venus-project-content w-full px-0 py-8 max-w-none bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 animate-fade-in text-white min-h-screen">
    <div class="flex flex-col items-center mb-12 px-8 animate-slide-down gap-8">
      <img src="/icon.png" alt="The Venus Project Logo" class="h-auto w-[220px] md:w-[350px] animate-pop-in border-0 bg-white p-2 rounded-xl shadow-lg" />
      <h1 class="text-4xl font-extrabold tracking-tight text-center drop-shadow-lg text-green-200">Relocation & Proposal – The Venus Project Network</h1>
    </div>
    <section class="frosted-glass-card mb-16 px-8 py-8 rounded-2xl shadow-lg animate-fade-in-up max-w-3xl mx-auto">
      <div class="flex flex-col md:flex-row gap-8 items-center">
        <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" alt="Conceptual illustration of relocation and collaboration" class="rounded-2xl shadow-lg w-full max-w-xs object-cover mb-6 md:mb-0" loading="lazy" />
        <div class="flex-1">
          <h2 class="text-2xl font-bold mb-4 text-green-200">My Relocation & Collaboration Proposal</h2>
          <p class="mb-4 text-lg text-green-100">Ready to relocate and join The Venus Project Network, contributing my skills and vision to help build a sustainable, ethical future. Open to direct contact, video calls, and project discussions. If you are part of The Venus Project, Fresco Foundation, or a like-minded network, please reach out directly.</p>
          <ul class="list-disc ml-8 text-lg mb-4 text-green-100">
            <li>Assistance with relocation or remote work</li>
            <li>Invitations to join communities or projects</li>
            <li>Guidance for integrating into new environments</li>
            <li>Mentorship, networking, and support</li>
          </ul>
          <div class="flex flex-col md:flex-row gap-4 mt-4">
            <a href="mailto:dracorisz@outlook.com" class="btn-unified bg-gradient-to-r from-green-700 via-green-600 to-green-500 hover:opacity-90 text-white" aria-label="Contact Me by Email">Contact Me</a>
            <a href="https://TVPOutpost.com/thevenusproject" target="_blank" rel="noopener" class="btn-unified bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:opacity-90 text-white" aria-label="See My Work">See My Work</a>
          </div>
          <div class="mt-8 text-lg text-green-200 font-semibold">
            <span class="inline-block bg-green-900/20 px-4 py-2 rounded-lg shadow">Ready to take action and join a global movement for a better world. Let's build the future together!</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { headingClass, subheadingClass } from '@/layouts/layoutClasses';
// ...existing script...
</script>

<style scoped>
.venus-project-content {
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
}
.btn-unified {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.12);
  transition: all 0.3s;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  outline: none;
}
.btn-unified:focus {
  box-shadow: 0 0 0 3px #38bdf8, 0 2px 8px 0 rgba(0,0,0,0.12);
}
.frosted-glass-card {
  background: rgba(255,255,255,0.20);
  backdrop-filter: blur(16px);
}
</style>

