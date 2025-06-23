<template>
  <div class="badges-container flex justify-center gap-10">
    <div v-for="badge in badges" :key="badge.alt" class="badge-item text-center px-20">
      <a v-if="badge.link" :href="badge.link" target="_blank" rel="noopener noreferrer">
        <img :src="badge.src" :alt="badge.alt" class="badge ah-[120px] !object-fill" />
      </a>
      <img v-else :src="badge.src" :alt="badge.alt" class="badge ah-[120px] !object-fill" />
      <p class="badge-text mt-2 text-[8px] leading-2 font-bold uppercase px-10 text-gray-700">{{ badge.text }}</p>
    </div>
  </div>
</template>

<script setup>
const badges = [
  { src: '/badges/bbb-logo-300x300.png', alt: 'BBB Logo', text: 'Click to see BBB Report', link: 'https://www.bbb.org/us/az/mesa/profile/pest-control-services/armor-home-services-pest-control-1126-83003255' },
  { src: '/badges/risk-logo-300x300.png', alt: 'Risk Logo', text: 'We will do a great job or you can fire us!' },
  { src: '/badges/ec-logo-300x300.png', alt: 'EC Logo', text: 'Pet and Kid Safe (Once Dry)' },
  { src: '/badges/vetren-logo-300x300.png', alt: 'Veteran Logo', text: 'All of our Techs are US Military Veterans' },
];
</script>

<style scoped>
.badges-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
  background-color: #f9fafb;
  border-radius: 1rem;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
}

.badge-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 250px;
  text-align: center;
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 0.75rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.badge-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.badge {
  width: 250px;
  height: 250px;
  max-width: 250px;
  max-height: 250px;
  padding: 2.5rem;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.badge:hover {
  transform: scale(1.05);
}

.badge-text {
  text-align: center;
  font-size: 0.875rem;
  color: #374151;
  margin-top: 0.5rem;
}

@media (max-width: 640px) {
  .badges-container {
    flex-direction: column;
    align-items: center;
  }

  .badge {
    width: 250px;
    height: 250px;
  }
}
</style>