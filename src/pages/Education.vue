<template>
  <SeoHead
    title="Education | The Venus Project"
    description="Discover The Venus Project’s educational programs, resources, and outreach for building a sustainable, resource-based future."
    keywords="The Venus Project, education, outreach, learning, sustainability, resource-based economy"
    image="/the-venus-project-circular-city.jpg"
    url="https://www.thevenusproject.com/education"
    type="article"
    :schema="{
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Education',
      'url': 'https://www.thevenusproject.com/education',
      'description': 'Discover The Venus Project’s educational programs, resources, and outreach for building a sustainable, resource-based future.'
    }"
  />
  <section class="education-section animate-fade-in-up glassy-bg glassy-interact mx-auto my-16 w-full max-w-6xl rounded-2xl px-4 py-12 shadow-2xl md:py-16">
    <h1 class="text-gradient mb-6 text-center text-5xl font-extrabold">Education & Outreach</h1>
    <p class="mx-auto mb-10 max-w-3xl text-center text-lg text-gray-700">
      Education is at the heart of The Venus Project’s mission. We offer a range of programs, resources, and events to inspire critical thinking, foster global citizenship, and empower people to co-create a sustainable future.
    </p>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div class="education-card rounded-xl bg-white/80 p-6 shadow-lg">
        <h2 class="mb-2 text-xl font-bold text-tvp-blue">Workshops & Seminars</h2>
        <p class="text-gray-700">Interactive sessions on sustainability, systems thinking, and resource-based economics for all ages and backgrounds.</p>
      </div>
      <div class="education-card rounded-xl bg-white/80 p-6 shadow-lg">
        <h2 class="mb-2 text-xl font-bold text-tvp-blue">Online Courses</h2>
        <p class="text-gray-700">Self-paced and instructor-led courses covering TVP’s concepts, design, and practical solutions for the future.</p>
      </div>
      <div class="education-card rounded-xl bg-white/80 p-6 shadow-lg">
        <h2 class="mb-2 text-xl font-bold text-tvp-blue">School & University Programs</h2>
        <p class="text-gray-700">Customizable educational modules and partnerships for schools, colleges, and universities worldwide.</p>
      </div>
      <div class="education-card rounded-xl bg-white/80 p-6 shadow-lg">
        <h2 class="mb-2 text-xl font-bold text-tvp-blue">Documentaries & Media</h2>
        <p class="text-gray-700">Award-winning documentaries, lectures, and media resources to raise awareness and spark dialogue.</p>
      </div>
      <div class="education-card rounded-xl bg-white/80 p-6 shadow-lg">
        <h2 class="mb-2 text-xl font-bold text-tvp-blue">Community Outreach</h2>
        <p class="text-gray-700">Events, talks, and volunteer opportunities to engage local and global communities in building a better world.</p>
      </div>
      <div class="education-card rounded-xl bg-white/80 p-6 shadow-lg">
        <h2 class="mb-2 text-xl font-bold text-tvp-blue">Open Knowledge</h2>
        <p class="text-gray-700">Free access to articles, research, and learning materials for everyone.</p>
      </div>
    </div>
    <div class="mt-8 flex flex-col items-center gap-4">
      <router-link to="/research" class="btn-glass-cta px-8 py-4 text-lg font-bold" aria-label="Research">Research</router-link>
      <router-link to="/media" class="btn-glass-cta px-8 py-4 text-lg font-bold" aria-label="Media">Media</router-link>
    </div>
  </section>
</template>
<script setup>
import SeoHead from '@/components/SeoHead.vue';
</script>
