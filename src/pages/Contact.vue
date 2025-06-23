<template>
  <!-- <Layout :activeSection="'contact'"> -->
    <section class="glassy-bg rounded-3xl shadow-xl p-8 flex flex-col gap-8 animate-fade-in-up" aria-label="Contact & Join">
      <header>
        <h1 class="text-3xl md:text-4xl font-extrabold text-gradient mb-2">Contact & Join</h1>
        <p class="text-lg text-gray-800 mb-4">Connect with us via WhatsApp or Email</p>
      </header>
      <ContactCTA />
    </section>
  <!-- </Layou -->
</template>

<script setup>
import ContactCTA from '@/components/common/ContactCTA.vue';
</script>