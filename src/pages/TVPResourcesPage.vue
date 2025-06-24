<template>
  <SeoHead
    title="TVP Resource Hub | Books, Documentaries & Knowledge"
    description="Access The Venus Project’s curated resource hub: documentaries, books, articles, and research on sustainability and the resource-based economy."
    keywords="The Venus Project, resources, documentaries, books, articles, research, sustainability, knowledge base"
    image="/the-venus-project-circular-city.jpg"
    url="https://www.thevenusproject.com/resources"
    type="website"
    :schema="{
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'TVP Resource Hub',
      'url': 'https://www.thevenusproject.com/resources',
      'description': 'A curated collection of resources about The Venus Project and sustainability.'
    }"
  />

  <div class="venus-project-content space-y-16 w-full">
    <!-- Hero Section -->
    <section class="glassy-bg py-16 text-center max-w-3xl mx-auto rounded-2xl shadow-lg animate-fade-in-up">
      <h1 class="mb-6 text-4xl font-extrabold tracking-tight text-green-200 drop-shadow-lg">Resource Hub</h1>
      <p class="mx-auto max-w-2xl text-xl text-green-100">Access our comprehensive collection of educational materials, documentaries, books, and research papers about The Venus Project and resource-based economy.</p>
    </section>

    <!-- Search and Filter -->
    <section class="glassy-bg mx-auto max-w-4xl rounded-2xl shadow-lg p-8 animate-fade-in-up">
      <div class="mb-8 flex flex-col gap-4 md:flex-row">
        <div class="flex-1">
          <input v-model="searchQuery" type="text" placeholder="Search resources..." class="w-full rounded-lg border border-blue-200 bg-white/60 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none" />
        </div>
        <select v-model="selectedType" class="rounded-lg border border-blue-200 bg-white/60 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none">
          <option value="">All Types</option>
          <option value="video">Videos</option>
          <option value="book">Books</option>
          <option value="article">Articles</option>
          <option value="presentation">Presentations</option>
        </select>
      </div>
    </section>

    <!-- Resources Grid -->
    <section>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <BaseCard v-for="resource in filteredResources" :key="resource.id" customClass="frosted-glass-card group cursor-pointer rounded-xl p-6 transition-all duration-300 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-xl" @click="openResource(resource)" tabindex="0" :aria-label="'Open resource: ' + resource.title">
          <!-- Card content here -->
          <div class="mb-4 flex items-center">
            <div :class="['mr-4 flex h-12 w-12 items-center justify-center rounded-lg', resource.type === 'video' ? 'bg-red-600' : resource.type === 'book' ? 'bg-green-600' : resource.type === 'article' ? 'bg-blue-600' : 'bg-purple-600']">
              <!-- SVG icons as before -->
              <svg v-if="resource.type === 'video'" class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              <svg v-else-if="resource.type === 'book'" class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              <svg v-else-if="resource.type === 'article'" class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              <svg v-else class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <div>
              <h2 class="font-semibold text-white transition-colors group-hover:text-green-200">{{ resource.title }}</h2>
              <p class="text-sm capitalize text-green-100">{{ resource.type }}</p>
            </div>
          </div>
          <p class="mb-3 text-sm text-green-100">{{ resource.description }}</p>
          <div class="flex items-center justify-between text-xs text-green-200">
            <span>{{ resource.duration || resource.pages || resource.length }}</span>
            <span>{{ resource.category }}</span>
          </div>
        </BaseCard>
      </div>
    </section>

    <!-- Featured Collections -->
    <section class="glassy-bg max-w-5xl mx-auto rounded-2xl shadow-lg p-8 animate-fade-in-up">
      <h2 class="mb-8 text-center text-3xl font-bold text-green-200">Featured Collections</h2>
      <div class="grid gap-8 md:grid-cols-3">
        <div v-for="collection in collections" :key="collection.id" class="frosted-glass-card rounded-lg p-6 transition-colors hover:bg-white/20">
          <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
            <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="collection.icon" />
            </svg>
          </div>
          <h3 class="mb-3 text-xl font-bold text-white">{{ collection.title }}</h3>
          <p class="mb-4 text-green-100">{{ collection.description }}</p>
          <div class="flex items-center justify-between">
            <span class="text-sm text-green-200">{{ collection.itemCount }} items</span>
            <BaseButton color="primary" class="btn-unified w-full">Explore →</BaseButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Educational Programs -->
    <section class="frosted-glass-card rounded-2xl bg-white/5 p-8 max-w-4xl mx-auto animate-fade-in-up">
      <h2 class="mb-6 text-center text-3xl font-bold text-green-200">Educational Programs</h2>
      <div class="grid gap-8 md:grid-cols-2">
        <div>
          <h3 class="mb-4 text-xl font-semibold text-green-100">Online Courses</h3>
          <ul class="space-y-3">
            <li class="flex items-center">
              <div class="mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
              <span class="text-green-100">Introduction to Resource-Based Economy</span>
            </li>
            <li class="flex items-center">
              <div class="mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
              <span class="text-green-100">Sustainable City Design Principles</span>
            </li>
            <li class="flex items-center">
              <div class="mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
              <span class="text-green-100">Automation and Society</span>
            </li>
            <li class="flex items-center">
              <div class="mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
              <span class="text-green-100">Environmental Systems Thinking</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="mb-4 text-xl font-semibold text-green-100">Workshops & Seminars</h3>
          <ul class="space-y-3">
            <li class="flex items-center">
              <div class="mr-3 h-2 w-2 rounded-full bg-green-500"></div>
              <span class="text-green-100">Monthly Virtual Seminars</span>
            </li>
            <li class="flex items-center">
              <div class="mr-3 h-2 w-2 rounded-full bg-green-500"></div>
              <span class="text-green-100">Design Thinking Workshops</span>
            </li>
            <li class="flex items-center">
              <div class="mr-3 h-2 w-2 rounded-full bg-green-500"></div>
              <span class="text-green-100">Student Research Programs</span>
            </li>
            <li class="flex items-center">
              <div class="mr-3 h-2 w-2 rounded-full bg-green-500"></div>
              <span class="text-green-100">Educator Training Sessions</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-8 text-center">
        <BaseButton color="primary" class="btn-unified w-full">Enroll Now</BaseButton>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { headingClass, subheadingClass } from '@/layouts/layoutClasses';

const searchQuery = ref("");
const selectedType = ref("");
const resources = ref([
  {
    id: 1,
    title: "Future by Design",
    description: "Documentary exploring Jacque Fresco's vision for a sustainable future.",
    type: "video",
    duration: "83 min",
    category: "Documentary",
    url: "https://example.com/future-by-design",
  },
  {
    id: 2,
    title: "The Best That Money Can't Buy",
    description: "Jacque Fresco's book outlining the principles of a resource-based economy.",
    type: "book",
    pages: "168 pages",
    category: "Economics",
    url: "https://example.com/best-money-cant-buy",
  },
  {
    id: 3,
    title: "Resource-Based Economy",
    description: "Comprehensive article explaining the fundamentals of RBE.",
    type: "article",
    length: "15 min read",
    category: "Economics",
    url: "https://example.com/rbe-article",
  },
  {
    id: 4,
    title: "Designing the Future",
    description: "Interactive presentation on sustainable city design.",
    type: "presentation",
    length: "45 slides",
    category: "Urban Planning",
    url: "https://example.com/designing-future",
  },
  {
    id: 5,
    title: "Paradise or Oblivion",
    description: "Documentary examining humanity's choice between sustainability and collapse.",
    type: "video",
    duration: "57 min",
    category: "Documentary",
    url: "https://example.com/paradise-oblivion",
  },
  {
    id: 6,
    title: "Everything You Know Is Wrong",
    description: "Book challenging conventional thinking about society and economics.",
    type: "book",
    pages: "200 pages",
    category: "Philosophy",
    url: "https://example.com/everything-wrong",
  },
  {
    id: 7,
    title: "Automation and Society",
    description: "Research paper on the impact of automation on employment.",
    type: "article",
    length: "20 min read",
    category: "Technology",
    url: "https://example.com/automation-society",
  },
  {
    id: 8,
    title: "Circular Cities Workshop",
    description: "Interactive workshop materials for understanding circular city design.",
    type: "presentation",
    length: "60 slides",
    category: "Education",
    url: "https://example.com/circular-cities",
  },
]);
const filteredResources = computed(() => {
  return resources.value.filter(resource => {
    const matchesSearch = searchQuery.value === '' ||
      resource.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesType = selectedType.value === '' || resource.type === selectedType.value;
    return matchesSearch && matchesType;
  });
});
const openResource = (resource) => {
  window.open(resource.url, "_blank");
};

const collections = ref([
  {
    id: 1,
    title: "Jacque Fresco Archive",
    description: "Complete collection of Jacque Fresco's lectures, interviews, and writings.",
    itemCount: 127,
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    id: 2,
    title: "Design Documentation",
    description: "Technical drawings, blueprints, and specifications for Venus Project designs.",
    itemCount: 89,
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    id: 3,
    title: "Research Papers",
    description: "Academic research and studies related to resource-based economy principles.",
    itemCount: 45,
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
]);
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
.glassy-bg {
  background: rgba(255,255,255,0.10);
  backdrop-filter: blur(8px);
}
.frosted-glass-card {
  background: rgba(255,255,255,0.20);
  backdrop-filter: blur(16px);
}
</style>
