<template>
  <div :class="layoutClass">
    <main :class="mainClass">
      <header v-if="$route.meta && $route.meta.heading" class="mb-8 mt-1 w-full text-center">
        <h1 :class="headingClass">
          {{ $route.meta.heading }}
        </h1>
        <p v-if="$route.meta.subheading" :class="subheadingClass">{{ $route.meta.subheading }}</p>
      </header>
      <router-view  />
    </main>
   
  </div>
</template>

<script setup>
import { layoutClass, mainClass, headingClass, subheadingClass } from "./layoutClasses";

const props = defineProps({
  activeSection: String,
});
</script>

<style scoped>
.font-inter {
  font-family: "Inter", "Segoe UI", Arial, sans-serif;
}
main {
  min-height: 80vh;
}
@media (max-width: 640px) {
  main {
    padding: 1rem;
    border-radius: 1rem;
  }
}
.text-gradient {
  background: linear-gradient(90deg, #42386c, #153695, #143395);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
