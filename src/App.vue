<template>
  <div class="min-h-screen bg-white text-black">
    <router-view />
    <PWAInstallPrompt />
  </div>
</template>

<script setup>
import PWAInstallPrompt from "@/components/PWAInstallPrompt.vue";
</script>

<style>
@import "@/assets/css/main.css";
@import "@/assets/css/tvp-global.css";
/* TVP UI/UX Standardization */
.tvp-btn,
.tvp-card,
.tvp-footer {
  font-family: "Inter", "Segoe UI", Arial, sans-serif;
  letter-spacing: 0.01em;
}

.tvp-btn {
  box-shadow: 0 2px 8px 0 rgba(30, 41, 59, 0.08);
  border-radius: 0.75rem;
  font-weight: 600;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}

.tvp-card {
  border-radius: 1.25rem;
  box-shadow: 0 4px 24px 0 rgba(30, 41, 59, 0.1);
  padding: 2rem;
  border: 1.5px solid #e0e7ef;
  background: #fff;
}

.tvp-footer {
  border-top: 2px solid #2563eb22;
  background: linear-gradient(90deg, #181a20 0, #232946 100%);
  color: #e0e7ef;
}

/* Card hover effect */
.tvp-card:hover {
  box-shadow: 0 8px 32px 0 rgba(30, 41, 59, 0.16);
}

/* Button focus/active states */
.tvp-btn:focus-visible {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}

/* Remove default button outline */
button:focus {
  outline: none;
}

/* Responsive adjustments */
@media (max-width: 700px) {
  .tvp-card {
    padding: 1.25rem;
  }
}
</style>
