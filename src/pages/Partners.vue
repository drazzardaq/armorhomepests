<template>
  <Layout :activeSection="'partners'">
    <section class="frosted-glass-card p-8 flex flex-col gap-8">
      <header>
        <h1 :class="headingClass">Partners & Network</h1>
        <p :class="subheadingClass">Our official partners and supporters</p>
      </header>
      <div class="prose prose-invert max-w-none text-lg">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="frosted-glass-card p-8 rounded-2xl shadow-xl flex flex-col items-center min-h-[320px]">
            <img src="/tvp/logo_full_logo_gdt.svg" alt="Global Design Team" class="mb-4 w-24 h-24 rounded-full object-cover border-4 border-blue-400 shadow-lg bg-white" />
            <h3 class="text-2xl font-bold text-blue-200 mb-2">Global Design Team</h3>
            <p class="text-center text-blue-100 mb-2">A worldwide network of designers, engineers, and volunteers collaborating on open-source solutions for TVP and beyond. Join the team and contribute your skills!</p>
            <a href="https://www.thevenusproject.com/participate/teams/" target="_blank" class="mt-2 inline-block px-6 py-2 rounded-lg bg-blue-700 text-white font-bold shadow-lg hover:bg-blue-500 transition">Join the Team</a>
          </div>
          <div class="frosted-glass-card p-8 rounded-2xl shadow-xl flex flex-col items-center min-h-[320px]">
            <img src="/tvp/JFFlogo.png" alt="Jacque Fresco Foundation" class="mb-4 w-24 h-24 rounded-full object-cover border-4 border-yellow-400 shadow-lg" />
            <h3 class="text-2xl font-bold text-yellow-200 mb-2">Jacque Fresco Foundation</h3>
            <p class="text-center text-yellow-100 mb-2">Honoring the legacy of Jacque Fresco, the Foundation supports education, archives, and events to advance the vision of a sustainable, science-based future.</p>
            <a href="https://www.thevenusproject.com/jacque-fresco/" target="_blank" class="mt-2 inline-block px-6 py-2 rounded-lg bg-yellow-700 text-white font-bold shadow-lg hover:bg-yellow-500 transition">Learn More</a>
          </div>
          <div class="frosted-glass-card p-8 rounded-2xl shadow-xl flex flex-col items-center min-h-[320px]">
            <img src="https://www.thevenusproject.com/wp-content/uploads/2023/11/Website-graphics-Partners-B-720x380.png" alt="The Venus Project (Official)" class="mb-4 w-24 h-24 rounded-full object-cover border-4 border-green-400 shadow-lg" />
            <h3 class="text-2xl font-bold text-green-200 mb-2">The Venus Project (Official)</h3>
            <p class="text-center text-green-100 mb-2">The official organization dedicated to a resource-based economy, sustainable city design, and global education. Collaborate on open-source projects, research, and outreach.</p>
            <a href="https://www.thevenusproject.com/" target="_blank" class="mt-2 inline-block px-6 py-2 rounded-lg bg-green-700 text-white font-bold shadow-lg hover:bg-green-500 transition">Visit Website</a>
          </div>
        </div>
        <div class="mt-12 text-center">
          <a href="https://wa.me/38169698442" target="_blank" class="inline-flex items-center gap-2 rounded-lg bg-green-600 px-8 py-4 text-xl font-bold text-white shadow-lg transition-all duration-300 hover:bg-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 inline h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.372.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.455 4.436-9.89 9.893-9.89 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.896 6.994c-.003 5.456-4.438 9.891-9.893 9.891zm8.413-18.306A11.815 11.815 0 0012.05 0C5.495 0 .06 5.435.058 12.086c0 2.13.557 4.213 1.615 6.044L0 24l6.064-1.591a11.876 11.876 0 005.983 1.527h.005c6.554 0 11.89-5.435 11.893-12.086a11.82 11.82 0 00-3.49-8.463z" /></svg>
            Become a Partner – WhatsApp
          </a>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script setup>
import Layout from '@/layouts/Layout.vue';
import { headingClass, subheadingClass } from '@/layouts/layoutClasses';
</script>

<style scoped>
.frosted-glass-card {
  background: rgba(30, 41, 59, 0.7);
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1.5px solid rgba(255, 255, 255, 0.18);
}
</style>
