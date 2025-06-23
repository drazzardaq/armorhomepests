<template>
  <SeoHead
    title="Media & Documentaries | The Venus Project"
    description="Watch documentaries, lectures, and media about The Venus Project’s vision for a sustainable, resource-based future."
    keywords="The Venus Project, media, documentaries, lectures, videos, sustainability, future"
    image="/the-venus-project-circular-city.jpg"
    url="https://www.thevenusproject.com/media"
    type="article"
    :schema="{
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Media & Documentaries',
      'url': 'https://www.thevenusproject.com/media',
      'description': 'Watch documentaries, lectures, and media about The Venus Project’s vision for a sustainable, resource-based future.'
    }"
  />
  <section class="media-section animate-fade-in-up glassy-bg glassy-interact mx-auto my-16 w-full max-w-6xl rounded-2xl px-4 py-12 shadow-2xl md:py-16">
    <h1 class="text-gradient mb-6 text-center text-5xl font-extrabold">Media & Documentaries</h1>
    <p class="mx-auto mb-10 max-w-3xl text-center text-lg text-gray-700">
      Explore a curated collection of documentaries, lectures, and media resources about The Venus Project, sustainability, and the future of civilization.
    </p>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div class="media-card rounded-xl bg-white/80 p-6 shadow-lg">
        <h2 class="mb-2 text-xl font-bold text-tvp-blue">The Choice is Ours</h2>
        <p class="text-gray-700">A comprehensive documentary on TVP's vision, values, and solutions.</p>
        <a href="https://www.youtube.com/watch?v=Yb5ivvcTvRQ" target="_blank" class="btn-glass-cta mt-2">Watch</a>
      </div>
      <div class="media-card rounded-xl bg-white/80 p-6 shadow-lg">
        <h2 class="mb-2 text-xl font-bold text-tvp-blue">Paradise or Oblivion</h2>
        <p class="text-gray-700">A documentary on the root causes of social problems and TVP's solutions.</p>
        <a href="https://www.youtube.com/watch?v=KphWsnhZ4Ag" target="_blank" class="btn-glass-cta mt-2">Watch</a>
      </div>
      <div class="media-card rounded-xl bg-white/80 p-6 shadow-lg">
        <h2 class="mb-2 text-xl font-bold text-tvp-blue">Designing the Future</h2>
        <p class="text-gray-700">A short film about TVP's design process and vision.</p>
        <a href="https://www.youtube.com/watch?v=_z0Pia5GwSA" target="_blank" class="btn-glass-cta mt-2">Watch</a>
      </div>
      <div class="media-card rounded-xl bg-white/80 p-6 shadow-lg">
        <h2 class="mb-2 text-xl font-bold text-tvp-blue">TVP YouTube Channel</h2>
        <p class="text-gray-700">Explore all documentaries, lectures, and news.</p>
        <a href="https://www.youtube.com/@TheVenusProjectGlobal" target="_blank" class="btn-glass-cta mt-2">Visit Channel</a>
      </div>
      <div class="media-card rounded-xl bg-white/80 p-6 shadow-lg">
        <h2 class="mb-2 text-xl font-bold text-tvp-blue">Jacque Fresco Lectures</h2>
        <p class="text-gray-700">A playlist of lectures by Jacque Fresco, founder of The Venus Project.</p>
        <a href="https://www.youtube.com/playlist?list=PLziCaCLfGaWmW41Er_O63il5HF2StnXC4" target="_blank" class="btn-glass-cta mt-2">Watch</a>
      </div>
      <div class="media-card rounded-xl bg-white/80 p-6 shadow-lg">
        <h2 class="mb-2 text-xl font-bold text-tvp-blue">Open Source Movie DB</h2>
        <p class="text-gray-700">Explore more documentaries and films about sustainability and the future.</p>
        <a href="https://www.themoviedb.org/" target="_blank" class="btn-glass-cta mt-2">Explore</a>
      </div>
      <div class="media-card rounded-xl bg-white/80 p-6 shadow-lg">
        <h2 class="mb-2 text-xl font-bold text-tvp-blue">Future by Design</h2>
        <p class="text-gray-700">A feature-length documentary exploring Jacque Fresco’s life, work, and vision for a sustainable future.</p>
        <a href="https://www.youtube.com/watch?v=O6ayb02bwp0" target="_blank" class="btn-glass-cta mt-2">Watch</a>
      </div>
      <div class="media-card rounded-xl bg-white/80 p-6 shadow-lg">
        <h2 class="mb-2 text-xl font-bold text-tvp-blue">Circular City Animation</h2>
        <p class="text-gray-700">A visual tour of TVP’s circular city concept, showing how design, technology, and ecology integrate.</p>
        <a href="https://www.youtube.com/watch?v=KphWsnhZ4Ag" target="_blank" class="btn-glass-cta mt-2">Watch</a>
      </div>
      <div class="media-card rounded-xl bg-white/80 p-6 shadow-lg">
        <h2 class="mb-2 text-xl font-bold text-tvp-blue">TVP Media Library</h2>
        <p class="text-gray-700">Access a full archive of TVP’s media, including interviews, news, and educational content.</p>
        <a href="https://www.thevenusproject.com/media-library/" target="_blank" class="btn-glass-cta mt-2">Browse Library</a>
      </div>
    </div>
    <div class="mt-8 flex flex-col items-center gap-4">
      <router-link to="/research" class="btn-glass-cta px-8 py-4 text-lg font-bold" aria-label="Research">Research</router-link>
      <router-link to="/education" class="btn-glass-cta px-8 py-4 text-lg font-bold" aria-label="Education">Education</router-link>
    </div>
  </section>
</template>
<script setup>
import SeoHead from '@/components/SeoHead.vue';
</script>
