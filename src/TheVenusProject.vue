<template>
  <div class="venus-project-content dark min-h-screen w-full max-w-none animate-fade-in bg-white bg-gradient-to-br from-gray-50/50 via-gray-900/10 to-gray-950 px-0 py-8 text-white md:px-0">
    <!-- SEO & Metadata -->
    <head>
      <title>The Venus Project Outpost | A New World Begins Here</title>
      <meta name="description" content="The Venus Project Outpost: Advancing a sustainable, future-focused society through science, technology, and design. Explore solutions, research, education, and join the movement for a better world." />
      <meta name="keywords" content="Venus Project, sustainability, future, science, technology, circular city, research, education, solutions, Jacque Fresco" />
      <!-- Open Graph -->
      <meta property="og:title" content="The Venus Project Outpost | A New World Begins Here" />
      <meta property="og:description" content="Advancing a sustainable, future-focused society through science, technology, and design. Explore solutions, research, education, and join the movement for a better world." />
      <meta property="og:image" content="/the-venus-project-circular-city.jpg" />
      <meta property="og:url" content="https://yourdomain.com/" />
      <meta property="og:type" content="website" />
      <!-- Twitter Card -->
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="The Venus Project Outpost | A New World Begins Here" />
      <meta name="twitter:description" content="Advancing a sustainable, future-focused society through science, technology, and design." />
      <meta name="twitter:image" content="/the-venus-project-circular-city.jpg" />
      <!-- Schema.org -->
      <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "The Venus Project Outpost",
          "url": "https://yourdomain.com/",
          "logo": "/logo.png",
          "sameAs": [
            "https://www.thevenusproject.com/",
            "https://twitter.com/thevenusproject",
            "https://facebook.com/thevenusproject",
            "https://youtube.com/user/thevenusprojectmedia"
          ],
          "description": "Advancing a sustainable, future-focused society through science, technology, and design."
        }
      </script>
    </head>
    <!-- TVP Header Image (NEW) -->
    <div class="animate-pop-in mb-6 flex w-full justify-center">
      <img src="https://www.thevenusproject.com/wp-content/uploads/2023/11/tvp-header-image-back-home-scaled.jpg" alt="The Venus Project Header" class="w-full max-w-5xl rounded-2xl border-4 border-blue-900 object-cover shadow-2xl" />
    </div>
    <!-- Header & Logos -->
    <div class="mb-12 flex animate-slide-down flex-col items-center gap-8 px-8">
      <!-- <img src="https://www.thevenusproject.com/wp-content/uploads/2015/11/tvp_header_logo_mirror-300x66.jpg" alt="The Venus Project Logo" class="h-[66px] w-[300px] animate-pop-in border-0 grayscale brightness-[0.9]" /> -->

      <!-- Venus Project Logo -->
      <img src="@/assets/tvp-logo.svg" alt="The Venus Project Logo" class="animate-pop-in h-auto w-[350px] border-0 bg-white !fill-white p-2 !text-white brightness-100" />
      <!-- Partner SVG Logos (imported from assets) -->

      <h1 class="text-center text-4xl font-extrabold tracking-tight text-blue-200 drop-shadow-lg md:text-left">The Venus Project - Software Team Application</h1>
    </div>
    <!-- TVP Media Slider Section (IMPROVED) -->
    <section class="bg-gray-900 py-16">
      <div class="w-fill container">
        <h2 class="mb-8 text-center text-3xl font-bold text-blue-200 drop-shadow md:text-4xl">The Venus Project Media</h2>
        <swiper-container :slides-per-view="1" :space-between="0" :navigation="true" :pagination="{ clickable: true }" class="tvp-slider-full">
          <swiper-slide>
            <div class="relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/40 to-gray-900/40 shadow-2xl md:h-[520px]">
              <img src="https://www.thevenusproject.com/wp-content/uploads/2023/11/tvp-header-image-back-home-scaled.jpg" alt="TVP Home & Vision" class="absolute inset-0 z-0 h-full w-full scale-105 object-cover opacity-90" />
              <div class="absolute inset-0 z-10 bg-gradient-to-br from-blue-900/40 to-gray-900/40 opacity-60"></div>
              <div class="relative z-20 w-full text-center">
                <span class="inline-block rounded-xl bg-white/10 px-6 py-3 text-2xl font-bold text-blue-200 shadow-xl drop-shadow-lg backdrop-blur">A New World Begins Here</span>
                <p class="mt-2 text-lg text-blue-100">Explore the vision, values, and innovations of The Venus Project for a sustainable, harmonious future.</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/40 to-gray-900/40 shadow-2xl md:h-[520px]">
              <img src="/tvp/The-Venus-Project-concept-city-3.jpg" alt="Concept City" class="absolute inset-0 z-0 h-full w-full scale-105 object-cover opacity-90" />
              <div class="absolute inset-0 z-10 bg-gradient-to-br from-purple-900/40 to-gray-900/40 opacity-60"></div>
              <div class="relative z-20 w-full text-center">
                <span class="inline-block rounded-xl bg-white/10 px-6 py-3 text-2xl font-bold text-purple-200 shadow-xl drop-shadow-lg backdrop-blur">Concept City</span>
                <p class="mt-2 text-lg text-purple-100">A city designed for people and planet, integrating technology, nature, and community.</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-200/40 to-gray-900/40 shadow-2xl md:h-[520px]">
              <img src="/tvp/sfera-logotip-proekt-venera.jpg" alt="Sfera Logotip" class="absolute inset-0 z-0 h-full w-full scale-105 object-cover opacity-90" />
              <div class="absolute inset-0 z-10 bg-gradient-to-br from-yellow-200/40 to-gray-900/40 opacity-60"></div>
              <div class="relative z-20 w-full text-center">
                <span class="inline-block rounded-xl bg-white/10 px-6 py-3 text-2xl font-bold text-yellow-700 shadow-xl drop-shadow-lg backdrop-blur">Global Identity</span>
                <p class="mt-2 text-lg text-yellow-900">A symbol of unity, innovation, and planetary stewardship.</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-green-900/40 to-gray-900/40 shadow-2xl md:h-[520px]">
              <img src="/tvp/gpe.png" alt="Global Pledge Event" class="absolute inset-0 z-0 h-full w-full scale-105 object-cover opacity-90" />
              <div class="absolute inset-0 z-10 bg-gradient-to-br from-green-900/40 to-gray-900/40 opacity-60"></div>
              <div class="relative z-20 w-full text-center">
                <span class="inline-block rounded-xl bg-white/10 px-6 py-3 text-2xl font-bold text-green-200 shadow-xl drop-shadow-lg backdrop-blur">Global Pledge Event</span>
                <p class="mt-2 text-lg text-green-100">Join the movement for a sustainable, equitable future for all.</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-800/40 to-gray-900/40 shadow-2xl md:h-[520px]">
              <img src="/tvp/the-venus-project-circular-city.jpg" alt="Circular City" class="absolute inset-0 z-0 h-full w-full scale-105 object-cover opacity-90" />
              <div class="absolute inset-0 z-10 bg-gradient-to-br from-blue-800/40 to-gray-900/40 opacity-60"></div>
              <div class="relative z-20 w-full text-center">
                <span class="inline-block rounded-xl bg-white/10 px-6 py-3 text-2xl font-bold text-blue-200 shadow-xl drop-shadow-lg backdrop-blur">Circular City</span>
                <p class="mt-2 text-lg text-blue-100">The heart of The Venus Project: a blueprint for sustainable urban living.</p>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </section>

    <!-- Mission Section with UN Summit Visual -->
    <section class="animate-fade-in-up mb-16 flex flex-col items-center gap-8 rounded-xl bg-gradient-to-br from-blue-900/80 to-gray-900/80 px-8 py-8 shadow-2xl md:flex-row">
      <img src="https://www.thevenusproject.com/wp-content/uploads/2015/11/jacque_fresco_un-1-600x338.jpg" alt="Jacque Fresco UN Summit" class="mb-4 w-full rounded-xl object-cover shadow-xl md:mb-0 md:w-1/2" />
      <div>
        <h2 class="mb-4 text-3xl font-bold text-blue-300">The Venus Project Mission</h2>
        <p class="mb-4 text-lg">The Venus Project is a non-profit dedicated to designing human habitats that enhance well-being while remaining fit to Earth's carrying capacity. It explores new materials, energy, construction, and resource management for a humane, sustainable culture. The project's holistic, systems-based approach aims to solve global issues by aligning human progress with nature.</p>
        <p class="mb-4 text-lg italic text-blue-400">"No civilization will prevail in the long-term without acknowledging that the enhancement of human wellbeing depends first on its alignment with nature."</p>
        <TVPButton variant="primary" size="md" @click="$router.push('/solutions')">Explore Solutions</TVPButton>
      </div>
    </section>

    <!-- Solutions Section -->
    <section class="animate-fade-in-up mb-16 rounded-xl bg-gradient-to-br from-green-900/80 to-blue-900/80 px-8 py-8 shadow-lg" id="solutions">
      <h2 class="mb-4 text-3xl font-bold text-green-300">Solutions for a Sustainable Future</h2>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <TVPCard variant="highlight">
          <h3 class="text-xl font-semibold mb-2">Circular Cities</h3>
          <p>Designing urban environments that harmonize with nature, optimize resources, and foster community well-being.</p>
        </TVPCard>
        <TVPCard variant="info">
          <h3 class="text-xl font-semibold mb-2">Resource-Based Economy</h3>
          <p>Transitioning from monetary systems to a model where resources are distributed based on need, not profit.</p>
        </TVPCard>
        <TVPCard variant="success">
          <h3 class="text-xl font-semibold mb-2">Sustainable Technologies</h3>
          <p>Implementing clean energy, advanced automation, and eco-friendly materials for a thriving planet.</p>
        </TVPCard>
      </div>
      <div class="mt-6 text-lg">
        <TVPButton variant="secondary" size="md" @click="$router.push('/research')">Learn More</TVPButton>
      </div>
    </section>

    <!-- Research Section -->
    <section class="animate-fade-in-up mb-16 rounded-xl bg-gradient-to-br from-blue-900/80 to-purple-900/80 px-8 py-8 shadow-lg" id="research">
      <h2 class="mb-4 text-3xl font-bold text-purple-200">Research & Innovation</h2>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <TVPCard>
          <h3 class="text-xl font-semibold mb-2">Systems Thinking</h3>
          <p>Applying holistic, interdisciplinary approaches to solve complex global challenges.</p>
        </TVPCard>
        <TVPCard>
          <h3 class="text-xl font-semibold mb-2">Collaborative Science</h3>
          <p>Fostering open research and knowledge sharing for the benefit of all humanity.</p>
        </TVPCard>
      </div>
    </section>

    <!-- Education Section -->
    <section class="animate-fade-in-up mb-16 rounded-xl bg-gradient-to-br from-yellow-200/80 to-blue-900/80 px-8 py-8 shadow-lg" id="education">
      <h2 class="mb-4 text-3xl font-bold text-yellow-700">Education for the Future</h2>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <TVPCard variant="info">
          <h3 class="text-xl font-semibold mb-2">Workshops & Courses</h3>
          <p>Empowering individuals with knowledge and skills for a sustainable, equitable world.</p>
        </TVPCard>
        <TVPCard variant="highlight">
          <h3 class="text-xl font-semibold mb-2">Youth Programs</h3>
          <p>Inspiring the next generation to become leaders in science, technology, and social change.</p>
        </TVPCard>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="animate-fade-in-up mb-16 rounded-xl bg-gradient-to-br from-gray-900/80 to-blue-900/80 px-8 py-8 shadow-lg" id="faq">
      <h2 class="mb-4 text-3xl font-bold text-blue-400">Frequently Asked Questions</h2>
      <TVPCard>
        <h3 class="text-lg font-semibold mb-2">What is The Venus Project?</h3>
        <p>The Venus Project is a vision for a new society that prioritizes sustainability, human well-being, and technological advancement for the benefit of all.</p>
      </TVPCard>
      <TVPCard>
        <h3 class="text-lg font-semibold mb-2">How can I get involved?</h3>
        <p>You can join as a volunteer, participate in educational programs, or contribute to research and outreach efforts. Visit the official site for more info.</p>
      </TVPCard>
      <TVPCard>
        <h3 class="text-lg font-semibold mb-2">What is a Resource-Based Economy?</h3>
        <p>It's an economic model where resources are distributed based on need and sustainability, not profit or market forces.</p>
      </TVPCard>
    </section>

    <!-- Latest & Zeitgeist Videos Section (Merged) -->
    <section class="animate-fade-in-up mb-16 rounded-xl bg-gradient-to-br from-gray-900/80 to-purple-900/80 px-8 py-8 shadow-lg" id="latest-video">
      <h2 class="mb-4 text-3xl font-bold text-purple-300">Latest & Zeitgeist Videos</h2>
      <div class="mb-8 flex flex-col items-center gap-8 md:flex-row">
        <iframe width="480" height="270" class="rounded-xl border-4 border-purple-700 shadow-lg" src="https://www.youtube.com/embed/rvpTmiVhcxU" title="The Venus Project - A New World System (Documentary)" frameborder="0" allowfullscreen></iframe>
        <div>
          <h3 class="mb-2 text-xl font-semibold text-purple-200">The Venus Project - A New World System (Documentary)</h3>
          <p class="text-purple-100">A comprehensive look at the vision, values, and solutions proposed by The Venus Project.</p>
        </div>
      </div>
      <div class="mb-8 flex flex-col items-center gap-8 md:flex-row">
        <iframe width="480" height="270" class="rounded-xl border-4 border-blue-700 shadow-lg" src="https://www.youtube.com/embed/vqvxVxTl2YU" title="The Choice is Ours: Computer Government" frameborder="0" allowfullscreen></iframe>
        <div>
          <h3 class="mb-2 text-xl font-semibold text-blue-200">The Choice is Ours: Computer Government</h3>
          <p class="text-blue-100">Exploring the role of technology and automation in a sustainable, equitable society.</p>
        </div>
      </div>
      <div class="mb-8 flex flex-col items-center gap-8 md:flex-row">
        <iframe width="480" height="270" class="rounded-xl border-4 border-yellow-700 shadow-lg" src="https://www.youtube.com/embed/4Z9WVZddH9w" title="Zeitgeist: Addendum" frameborder="0" allowfullscreen></iframe>
        <div>
          <h3 class="mb-2 text-xl font-semibold text-yellow-200">Zeitgeist: Addendum</h3>
          <p class="text-yellow-100">A documentary exploring the root causes of social corruption and the path to a sustainable future.</p>
        </div>
      </div>
    </section>

    <!-- Venus Token and Blockchain Section (renamed and updated) -->
    <section class="animate-fade-in-up relative z-20 mb-16 overflow-hidden rounded-xl bg-transparent bg-gradient-to-br from-purple-900/50 to-gray-900/20 px-8 py-8 shadow-lg" id="venus-token">
      <img src="/tvp/sfera-logotip-proekt-venera.jpg" alt="VENUS Token Coin" class="absolute inset-0 z-0 h-full w-full object-cover opacity-50" />
      <div class="relative z-30 flex flex-col items-center gap-8 md:flex-row">
        <TVPCard variant="highlight">
          <h3 class="text-2xl font-bold mb-2">VENUS Token</h3>
          <p>A digital asset supporting the mission of The Venus Project. Designed for transparency, collaboration, and global impact.</p>
          <TVPButton variant="primary" size="sm" @click="$router.push('/tokenomics')">Learn More</TVPButton>
        </TVPCard>
        <TVPCard variant="info">
          <h3 class="text-2xl font-bold mb-2">Blockchain for Good</h3>
          <p>Leveraging blockchain technology to ensure accountability, resource tracking, and community-driven governance.</p>
        </TVPCard>
      </div>
    </section>

    <!-- Footer -->
    <TVPFooter />
  </div>
</template>

<script setup>
import TVPButton from '@/components/TVPButton.vue';
import TVPCard from '@/components/TVPCard.vue';
import TVPFooter from '@/components/TVPFooter.vue';
import TokenCard from "@/components/TokenCard.vue";
import TokenCardImproved from "@/components/TokenCardImproved.vue";
// Add interactivity: smooth scroll to sections
import { onMounted, ref } from "vue";

onMounted(() => {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

const showResume = ref(false);
const myImage = ref("/tvp/prfile.webp"); // Set your image URL here
function toggleResume() {
  showResume.value = !showResume.value;
}

const earthDaySpriteUrl = "https://img.freepik.com/free-vector/flat-character-elements-collection-earth-day-celebration_23-2150183421.jpg?semt=ais_hybrid&w=740";
function spriteStyle(i) {
  // 3x2 grid, each tile is 1/3 width, 1/2 height
  const col = (i - 1) % 3;
  const row = Math.floor((i - 1) / 3);
  return {
    objectPosition: `${(-col * 100) / 2}% ${-row * 100}%`,
    objectFit: "cover",
    width: "100%",
    height: "100%",
  };
}
function spriteSliderStyle(i) {
  // 3x2 grid, each tile is 1/3 width, 1/2 height
  const col = (i - 1) % 3;
  const row = Math.floor((i - 1) / 3);
  return {
    objectFit: "cover",
    objectPosition: `${col * 50}% ${row * 100}%`,
    width: "33.3333%",
    height: "50%",
  };
}

// Import circular city images for the slider
const circularCitySlides = [new URL("@/assets/tvp-slides/1.jpg", import.meta.url).href, new URL("@/assets/tvp-slides/2.jpg", import.meta.url).href, new URL("@/assets/tvp-slides/3.jpg", import.meta.url).href, new URL("@/assets/tvp-slides/4.jpg", import.meta.url).href, new URL("@/assets/tvp-slides/5.jpg", import.meta.url).href, new URL("@/assets/tvp-slides/6.jpg", import.meta.url).href, new URL("@/assets/tvp-slides/7.jpg", import.meta.url).href, new URL("@/assets/tvp-slides/8.jpg", import.meta.url).href, new URL("@/assets/tvp-slides/9.jpg", import.meta.url).href, new URL("@/assets/tvp-slides/10.jpg", import.meta.url).href, new URL("@/assets/tvp-slides/11.jpg", import.meta.url).href];

// Fix for showAddress not defined
const showAddress = ref(false);
const pledgeChecked = ref(false);
</script>

<style scoped>
.venus-project-content {
  min-height: 100vh;
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  padding: 5rem 3rem 3rem 3rem;
  overflow-x: hidden;
  background: linear-gradient(135deg, #181a20 0%, #232946 100%);
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes pop-in {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  80% {
    opacity: 1;
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.animate-fade-in {
  animation: fade-in 1s ease;
}
.animate-fade-in-up {
  animation: fade-in-up 1s ease;
}
.animate-slide-down {
  animation: slide-down 1s cubic-bezier(0.4, 0, 0.2, 1);
}
.animate-pop-in {
  animation: pop-in 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
.dark {
  color-scheme: dark;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
