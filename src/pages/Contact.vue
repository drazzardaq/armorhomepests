<template>
  <!-- <Layout :activeSection="'contact'"> -->
    <section class="frosted-glass-card p-8 flex flex-col gap-8">
      <header>
        <h1 :class="headingClass">Contact & Join</h1>
        <p :class="subheadingClass">Connect with us via WhatsApp or Email</p>
      </header>
      <ContactCTA />
    </section>
  <!-- </Layou -->
</template>

<script setup>
import Layout from '@/layouts/Layout.vue';
import ContactCTA from '@/components/common/ContactCTA.vue';
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