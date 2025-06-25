<template>
  <SeoHead
    title="The Venus Project | A Blueprint for a Sustainable Future"
    description="Explore The Venus Project: a comprehensive vision for a sustainable, resource-based economy, circular cities, and a future where technology and human values align. Discover our mission, solutions, proposals, and global network."
    keywords="The Venus Project, mission, solutions, resource-based economy, circular cities, sustainability, FAQ, media, proposals"
    image="@/assets/images/tvp/the-venus-project-circular-city.jpg"
    url="https://www.thevenusproject.com/"
    type="website"
    :schema="{
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'The Venus Project',
      url: 'https://www.thevenusproject.com/',
      description: 'A comprehensive vision for a sustainable, resource-based economy and a future where technology and human values align.',
    }"
  />
  <div class="venus-project-content flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-white from-50% via-emerald-400/10 to-tvp-blue/0 !px-0 pb-8 text-gray-900 md:px-0">
    <!-- 1. Hero Slider (now first) -->
    <section class="relative mx-auto mb-16 w-screen max-w-screen min-w-[100vw] overflow-x-hidden rounded-3xl md:mb-20" id="hero-slider" aria-label="Hero Image Slider">
      <div class="hero-slider-3d relative flex h-[320px] w-full select-none items-center justify-center md:h-[600px]">
        <transition-group name="hero3d" tag="div" class="relative flex h-full w-full items-center justify-center" aria-live="polite" aria-atomic="true">
          <div v-for="(slide, idx) in tvpSlides" :key="idx" :class="['hero-slide', { active: currentSlide === idx, prev: currentSlide === (idx - 1 + tvpSlides.length) % tvpSlides.length, next: currentSlide === (idx + 1) % tvpSlides.length }]" role="group" :aria-label="slide.alt" tabindex="0">
            <img :src="slide.img" :alt="slide.alt" class="hero-slide-image absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out" loading="lazy" />
            <div class="hero-slide-overlay-up absolute h-full flex-1 inset-0 bg-gradient-to-b from-black/70 via-black/20 to-white p-4 text-center shadow-2xl md:p-16">
              <h2 class="animate-pop-in mb-3 mt-auto text-xl font-extrabold text-white tracking-wide drop-shadow md:text-4xl">
                {{ slide.title }}
              </h2>
              <p class="mx-auto my-8 max-w-4xl rounded-3xl bg-black/10 !p-8 !text-xl text-white md:text-3xl">
                {{ slide.desc }}
              </p>
              <router-link v-if="slide.cta" :to="slide.cta.link" class="btn-glass-hero animate-pop-in mb-6 shadow-lg md:mb-10">{{ slide.cta.text }}</router-link>
            </div>
          </div>
        </transition-group>
        <button class="slider-btn left-0 !bg-gradient-to-r" @click="prevSlide" aria-label="Previous Slide" tabindex="0">
          <font-awesome-icon icon="chevron-left" />
        </button>
        <button class="slider-btn right-3 !bg-gradient-to-l" @click="nextSlide" aria-label="Next Slide" tabindex="0">
          <font-awesome-icon icon="chevron-right" />
        </button>
        <div class="slider-thumbs-up absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2 md:bottom-8">
          <button v-for="(slide, idx) in tvpSlides" :key="'dot-' + idx" class="slider-thumb border border-blue-200 bg-white/80 shadow hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400" :class="{ active: currentSlide === idx }" @click="goToSlide(idx)" :aria-label="`Go to slide ${idx + 1}`" tabindex="0">
            <!-- <font-awesome-icon :icon="currentSlide === idx ? 'circle' : 'circle'" class="text-blue-700" /> -->
          </button>
        </div>
      </div>
    </section>

    <!-- 3. Explore The Venus Project (moved up and expanded) -->
    <section class="glassy-bg glassy-interact mx-auto mb-12 w-full max-w-7xl rounded-2xl py-10 shadow-2xl md:mb-16 md:py-12" id="explore-tvp" aria-label="Explore The Venus Project">
      <h2 class="text-gradient mb-6 text-center text-4xl font-extrabold">Explore The Venus Project</h2>
      <div class="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 lg:grid-cols-4">
        <a href="https://www.thevenusproject.com/concepts/vision/" target="_blank" rel="noopener noreferrer" class="explore-card group flex flex-col gap-2 rounded-xl bg-white/80 p-6 shadow transition-transform hover:scale-105">
          <p class="text-lg font-bold text-blue-700 group-hover:text-navy">Vision</p>
          <p class="normal-case text-gray-700">A systems approach to intelligently manage resources for all inhabitants, human and otherwise.</p>
        </a>
        <a href="https://www.thevenusproject.com/concepts/values/" target="_blank" rel="noopener noreferrer" class="explore-card group flex flex-col gap-2 rounded-xl bg-white/80 p-6 shadow transition-transform hover:scale-105">
          <p class="text-lg font-bold text-blue-700 group-hover:text-navy">Values</p>
          <p class="normal-case text-gray-700">Finding balance amid opposites and outlining the conditions for a sustainable civilization.</p>
        </a>
        <a href="https://www.thevenusproject.com/concepts/knowledge/" target="_blank" rel="noopener noreferrer" class="explore-card group flex flex-col gap-2 rounded-xl bg-white/80 p-6 shadow transition-transform hover:scale-105">
          <p class="text-lg font-bold text-blue-700 group-hover:text-navy">Knowledge</p>
          <p class="normal-case text-gray-700">Drawing from a diverse knowledge set to inform design and innovation.</p>
        </a>
        <a href="https://www.thevenusproject.com/about/history/" target="_blank" rel="noopener noreferrer" class="explore-card group flex flex-col gap-2 rounded-xl bg-white/80 p-6 shadow transition-transform hover:scale-105">
          <p  class="text-lg font-bold text-blue-700 group-hover:text-navy">History</p>
          <p class="normal-case text-gray-700">Continuing work started decades ago, pioneering solutions for the future.</p>
        </a>
        <a href="https://www.thevenusproject.com/resource-based-economy/environment/cities-in-the-sea/" target="_blank" rel="noopener noreferrer" class="explore-card group flex flex-col gap-2 rounded-xl bg-white/80 p-6 shadow transition-transform hover:scale-105">
          <p class="text-lg font-bold text-blue-700 group-hover:text-navy">Cities in the Sea</p>
          <p class="normal-case text-gray-700">Innovative city designs for sustainable living in marine environments.</p>
        </a>
        <a href="https://www.thevenusproject.com/concepts/energy/" target="_blank" rel="noopener noreferrer" class="explore-card group flex flex-col gap-2 rounded-xl bg-white/80 p-6 shadow transition-transform hover:scale-105">
          <p class="text-lg font-bold text-blue-700 group-hover:text-navy">Energy</p>
          <p class="normal-case text-gray-700">Harnessing renewable energy sources for a clean, sustainable future.</p>
        </a>
        <a href="https://www.thevenusproject.com/concepts/transportation/" target="_blank" rel="noopener noreferrer" class="explore-card group flex flex-col gap-2 rounded-xl bg-white/80 p-6 shadow transition-transform hover:scale-105">
          <p class="text-lg font-bold text-blue-700 group-hover:text-navy">Transportation</p>
          <p class="normal-case text-gray-700">Advanced, efficient, and sustainable transportation systems.</p>
        </a>
        <a href="https://www.thevenusproject.com/product/automation/" target="_blank" rel="noopener noreferrer" class="explore-card group flex flex-col gap-2 rounded-xl bg-white/80 p-6 shadow transition-transform hover:scale-105">
          <p class="text-lg font-bold text-blue-700 group-hover:text-navy">Automation</p>
          <p class="normal-case text-gray-700">Utilizing automation to free humanity from repetitive labor and increase quality of life.</p>
        </a>
      </div>
    </section>

    <!-- About The Venus Project / Mission Section -->
    <section class="about-tvp-section-up glassy-bg glassy-interact mx-auto mb-12 flex w-full max-w-7xl flex-col items-center rounded-2xl px-4 py-10 shadow-2xl md:mb-16 md:py-16">
      <h2 class="text-gradient mb-4 text-center text-3xl font-extrabold md:text-4xl">About The Venus Project</h2>
      <p class="mx-auto mb-6 max-w-3xl text-center text-lg text-gray-700">The Venus Project is a non-profit organization dedicated to designing human habitats that enhance well-being while remaining fit to the carrying capacity of Earth and local ecosystems. We explore new materials, energy sources, construction methods, and a new resource management paradigm for a humane and sustainable culture. Our holistic, interdisciplinary approach aims to renew human habitats, restore the environment, and align technology with ecology for a sustainable future.</p>
    </section>

    <!-- Highlights Section (with images/captions and YouTube/documentary links) -->
    <section class="highlights-section-up glassy-bg glassy-interact mx-auto mb-12 flex w-full max-w-7xl flex-col items-center rounded-2xl px-4 py-10 shadow-2xl md:mb-16 md:py-16">
      <h2 class="text-gradient mb-4 text-center text-3xl font-extrabold md:text-4xl">Highlights & Documentaries</h2>
      <div class="mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 md:grid-cols-2">
        <div class="flex flex-col items-center rounded-xl bg-white/90 p-6 shadow-lg">
          <iframe width="100%" height="270" class="mb-4 rounded-xl border-4 border-blue-700 shadow-lg" src="https://www.youtube.com/embed/Yb5ivvcTvRQ" title="The Choice is Ours (Full Documentary)" frameborder="0" allowfullscreen></iframe>
          <h3 class="mb-2 text-xl font-semibold text-blue-700">The Choice is Ours (Full Documentary)</h3>
          <p class="text-center text-gray-700">A comprehensive documentary on TVP's vision, values, and solutions.</p>
        </div>
        <div class="flex flex-col items-center rounded-xl bg-white/90 p-6 shadow-lg">
          <iframe width="100%" height="270" class="mb-4 rounded-xl border-4 border-blue-700 shadow-lg" src="https://www.youtube.com/embed/KphWsnhZ4Ag" title="Paradise or Oblivion" frameborder="0" allowfullscreen></iframe>
          <h3 class="mb-2 text-xl font-semibold text-blue-700">Paradise or Oblivion</h3>
          <p class="text-center text-gray-700">A documentary on the root causes of social problems and TVP's solutions.</p>
        </div>
        <div class="flex flex-col items-center rounded-xl bg-white/90 p-6 shadow-lg">
          <iframe width="100%" height="270" class="mb-4 rounded-xl border-4 border-blue-700 shadow-lg" src="https://www.youtube.com/embed/_z0Pia5GwSA" title="Designing the Future" frameborder="0" allowfullscreen></iframe>
          <h3 class="mb-2 text-xl font-semibold text-blue-700">Designing the Future</h3>
          <p class="text-center text-gray-700">A short film about TVP's design process and vision.</p>
        </div>
        <div class="flex flex-col items-center rounded-xl bg-white/90 p-6 shadow-lg">
          <iframe width="100%" height="270" class="mb-4 rounded-xl border-4 border-purple-700 shadow-lg" src="https://www.youtube.com/embed/rvpTmiVhcxU" title="The Venus Project - A New World System (Documentary)" frameborder="0" allowfullscreen></iframe>
          <h3 class="mb-2 text-xl font-semibold text-purple-700">The Venus Project - A New World System</h3>
          <p class="text-center text-gray-700">A comprehensive look at the vision, values, and solutions proposed by The Venus Project.</p>
        </div>
        <div class="flex flex-col items-center rounded-xl bg-white/90 p-6 shadow-lg">
          <iframe width="100%" height="270" class="mb-4 rounded-xl border-4 border-blue-700 shadow-lg" src="https://www.youtube.com/embed/vqvxVxTl2YU" title="The Choice is Ours: Computer Government" frameborder="0" allowfullscreen></iframe>
          <h3 class="mb-2 text-xl font-semibold text-blue-700">The Choice is Ours: Computer Government</h3>
          <p class="text-center text-gray-700">Exploring the role of technology and automation in a sustainable, equitable society.</p>
        </div>
        <div class="rounded-xl bg-white/90 p-6 shadow-lg flex flex-col items-center">
          <iframe width="100%" height="270" class="rounded-xl border-4 border-yellow-700 shadow-lg mb-4" src="https://www.youtube.com/embed/4Z9WVZddH9w" title="Zeitgeist: Moving Forward" frameborder="0" allowfullscreen></iframe>
          <h3 class="mb-2 text-xl font-semibold text-yellow-700">Zeitgeist: Moving Forward</h3>
          <p class="text-gray-700 text-center">A documentary exploring the root causes of social corruption and the path to a sustainable future.</p>
        </div>
        <div class="rounded-xl bg-white/90 p-6 shadow-lg flex flex-col items-center">
          <iframe width="100%" height="270" class="rounded-xl border-4 border-yellow-700 shadow-lg mb-4" src="https://www.youtube.com/embed/jl7Yq8QbPns?si=Tgq7hkPLMTFlsvDf" title="What is The Venus Project?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <h3 class="mb-2 text-xl font-semibold text-yellow-700">What is The Venus Project?</h3>
          <p class="text-gray-700 text-center">An alternative vision of what the future can be if we apply what we already know in order to achieve a sustainable new world civilization.</p>
        </div>
        <div class="flex flex-col items-center rounded-xl bg-white/90 p-6 shadow-lg">
          <a href="https://www.youtube.com/@TheVenusProjectGlobal" target="_blank" class="btn-glass-cta mb-4">Visit TVP YouTube Channel</a>
          <img src="/the-venus-project-logo.png" alt="The Venus Project YouTube Channel" class="mb-2 h-32 w-32 object-contain" />
          <h3 class="mb-2 text-xl font-semibold text-blue-900">The Venus Project YouTube Channel</h3>
          <p class="text-center text-gray-700">Explore all documentaries, lectures, and news.</p>
        </div>
      </div>
      <div class="mt-8 flex w-full flex-col justify-center gap-6 md:flex-row">
        <a href="https://www.youtube.com/playlist?list=PLziCaCLfGaWk3S7oWwcIp8Sp7ZQlVvVSu" target="_blank" class="btn-glass-cta">All Documentaries Playlist</a>
        <a href="https://www.youtube.com/playlist?list=PLziCaCLfGaWmW41Er_O63il5HF2StnXC4" target="_blank" class="btn-glass-cta">Jacque Fresco Lectures</a>
      </div>
    </section>
    <!-- 2. Mission Section (NEW) -->
    <section class="mission-section-up glassy-bg glassy-interact mx-auto mb-12 w-full max-w-7xl rounded-2xl px-4 py-12 shadow-2xl md:mb-16 md:py-16" id="mission" aria-label="Mission">
      <h2 class="text-gradient mb-4 text-center text-4xl font-extrabold md:text-5xl">Our Mission</h2>
      <p class="mx-auto mb-6 max-w-3xl text-center text-lg text-gray-700">The Venus Project is dedicated to realizing a new era of civilization—one where human potential is unleashed through the intelligent application of science and technology, and where the well-being of people and the planet is the highest priority. Our mission is to catalyze a global transition to a resource-based economy, eliminating artificial scarcity, poverty, and war. We strive to inspire, educate, and unite people everywhere to co-create a sustainable, equitable, and peaceful future for all.</p>
      <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div class="rounded-xl bg-white/70 p-8 shadow-lg dark:bg-black/40">
          <h3 class="text-gradient mb-2 text-xl font-bold">Core Values</h3>
          <ul class="list-disc space-y-1 pl-6 text-gray-800 dark:text-gray-200">
            <li>Human and environmental well-being above profit or politics</li>
            <li>Global cooperation and peaceful problem-solving</li>
            <li>Science and technology for social good</li>
            <li>Equitable access to resources for all</li>
            <li>Continuous learning, innovation, and adaptability</li>
          </ul>
        </div>
        <div class="rounded-xl bg-white/70 p-8 shadow-lg dark:bg-black/40">
          <h3 class="text-gradient mb-2 text-xl font-bold">Our Vision</h3>
          <p class="text-gray-800 dark:text-gray-200">We envision a world where cities are designed for people and nature, not profit; where automation and renewable energy free humanity from menial labor; where education, healthcare, and opportunity are universal; and where the boundaries of what is possible are continually expanded by creativity and collaboration. The Venus Project’s vision is a thriving, peaceful civilization in harmony with the Earth.</p>
        </div>
      </div>
    </section>
    <!-- 3. Solutions Section (NEW) -->
    <section class="solutions-section-up glassy-bg glassy-interact mx-auto mb-12 w-full max-w-7xl rounded-2xl px-4 py-12 shadow-2xl md:mb-16 md:py-16" id="solutions" aria-label="Solutions">
      <h2 class="text-gradient mb-4 text-center text-4xl font-extrabold md:text-5xl">Our Solutions</h2>
      <p class="mx-auto mb-10 max-w-3xl text-center text-lg text-gray-700">The Venus Project offers a comprehensive set of solutions to address the root causes of today’s social, economic, and environmental challenges. By applying science and technology with human and ecological well-being as our highest priorities, we can create a world of abundance, peace, and sustainability for all.</p>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div class="solution-card rounded-xl bg-white/80 p-6 shadow-lg">
          <h3 class="mb-2 text-xl font-bold text-tvp-blue">Resource-Based Economy</h3>
          <p class="text-gray-700">A system where resources are managed scientifically for the well-being of all, eliminating the need for money, barter, or servitude.</p>
          <p class="text-tvp-green mt-2 text-sm font-semibold">How We Realize This: We advocate for global resource surveys, open access to technology, and collaborative design of systems that meet everyone’s needs.</p>
        </div>
        <div class="solution-card rounded-xl bg-white/80 p-6 shadow-lg">
          <h3 class="mb-2 text-xl font-bold text-tvp-blue">Circular Cities</h3>
          <p class="text-gray-700">Urban designs that optimize resource use, foster community, and integrate nature and technology for a thriving, sustainable future.</p>
          <p class="text-tvp-green mt-2 text-sm font-semibold">How We Realize This: We develop and share blueprints for modular, circular cities that are efficient, beautiful, and adaptable to local needs.</p>
        </div>
        <div class="solution-card rounded-xl bg-white/80 p-6 shadow-lg">
          <h3 class="mb-2 text-xl font-bold text-tvp-blue">Sustainable Technologies</h3>
          <p class="text-gray-700">Innovations in energy, food, water, and shelter that reduce environmental impact and improve quality of life for all.</p>
          <p class="text-tvp-green mt-2 text-sm font-semibold">How We Realize This: We promote research, open-source development, and demonstration projects in renewable energy, automation, and ecological design.</p>
        </div>
        <div class="solution-card rounded-xl bg-white/80 p-6 shadow-lg">
          <h3 class="mb-2 text-xl font-bold text-tvp-blue">Education & Outreach</h3>
          <p class="text-gray-700">Programs and media to inform, inspire, and empower people to participate in building a better world.</p>
          <p class="text-tvp-green mt-2 text-sm font-semibold">How We Realize This: We create documentaries, courses, and events to raise awareness and foster critical thinking about systemic change.</p>
        </div>
        <div class="solution-card rounded-xl bg-white/80 p-6 shadow-lg">
          <h3 class="mb-2 text-xl font-bold text-tvp-blue">Global Collaboration</h3>
          <p class="text-gray-700">A worldwide network of volunteers, experts, and organizations working together for systemic change.</p>
          <p class="text-tvp-green mt-2 text-sm font-semibold">How We Realize This: We build partnerships, open platforms, and inclusive teams to co-create and implement solutions worldwide.</p>
        </div>
        <div class="solution-card rounded-xl bg-white/80 p-6 shadow-lg">
          <h3 class="mb-2 text-xl font-bold text-tvp-blue">Restoring the Environment</h3>
          <p class="text-gray-700">Holistic approaches to renew habitats, restore ecosystems, and align technology with ecology.</p>
          <p class="text-tvp-green mt-2 text-sm font-semibold">How We Realize This: We support reforestation, regenerative agriculture, and eco-restoration projects that heal the planet.</p>
        </div>
      </div>
    </section>
    <!-- FAQ Section (harmonized, expanded) -->
    <section class="faq-section-up glassy-bg glassy-interact mx-auto mb-12 w-full max-w-7xl rounded-2xl px-4 pb-1 pt-12 shadow-2xl md:mb-16 md:py-16" id="faq">
      <h2 class="text-gradient mb-4 text-center text-4xl font-extrabold md:text-5xl">Frequently Asked Questions</h2>
      <div class="mx-auto max-w-7xl divide-y divide-blue-100 rounded-xl bg-white/90 px-6 pb-0 pt-6 shadow-lg">
        <div class="py-4">
          <h3 class="mb-2 text-lg font-bold text-tvp-blue">What is The Venus Project?</h3>
          <p class="text-gray-700">The Venus Project is a vision for a new society that prioritizes sustainability, human well-being, and technological advancement for the benefit of all.</p>
        </div>
        <div class="py-4">
          <h3 class="mb-2 text-lg font-bold text-tvp-blue">What is a resource-based economy?</h3>
          <p class="text-gray-700">A resource-based economy is a system in which goods and services are available without the use of money, credits, barter, or any other form of debt or servitude. Resources are managed scientifically for the benefit of all.</p>
        </div>
        <div class="py-4">
          <h3 class="mb-2 text-lg font-bold text-tvp-blue">How does TVP address global challenges?</h3>
          <p class="text-gray-700">TVP proposes holistic, science-based solutions to issues like poverty, war, and environmental degradation by redesigning our social and economic systems from the ground up.</p>
        </div>
        <div class="py-4">
          <h3 class="mb-2 text-lg font-bold text-tvp-blue">How can I get involved?</h3>
          <p class="text-gray-700">You can join as a volunteer, participate in educational programs, or contribute to research and outreach efforts. Visit the Get Involved section or contact us for more information.</p>
        </div>
        <div class="py-4">
          <h3 class="mb-2 text-lg font-bold text-tvp-blue">Is TVP a political movement?</h3>
          <p class="text-gray-700">No, The Venus Project is not affiliated with any political party or ideology. It is a non-profit organization focused on systemic, scientific solutions for humanity’s future.</p>
        </div>
      </div>
    </section>

    <!-- Research & Innovation Section (harmonized) -->
    <section class="research-section-up glassy-bg glassy-interact mx-auto mb-12 w-full max-w-7xl rounded-2xl px-4 py-12 shadow-2xl md:mb-16 md:py-16" id="research">
      <h2 class="text-gradient mb-4 text-center text-4xl font-extrabold md:text-5xl">Research & Innovation</h2>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div class="rounded-xl bg-white/90 p-8 shadow-lg">
          <h3 class="mb-2 text-xl font-semibold text-blue-700">Systems Thinking</h3>
          <p class="text-gray-700">Applying holistic, interdisciplinary approaches to solve complex global challenges.</p>
        </div>
        <div class="rounded-xl bg-white/90 p-8 shadow-lg">
          <h3 class="mb-2 text-xl font-semibold text-green-700">Collaborative Science</h3>
          <p class="text-gray-700">Fostering open research and knowledge sharing for the benefit of all humanity.</p>
        </div>
      </div>
    </section>

    <!-- Education Section (harmonized) -->
    <section class="education-section-up glassy-bg glassy-interact mx-auto mb-12 w-full max-w-7xl rounded-2xl px-4 py-12 shadow-2xl md:mb-16 md:py-16" id="education">
      <h2 class="text-gradient mb-4 text-center text-4xl font-extrabold md:text-5xl">Education for the Future</h2>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div class="rounded-xl bg-white/90 p-8 shadow-lg">
          <h3 class="mb-2 text-xl font-semibold text-purple-700">Workshops & Courses</h3>
          <p class="text-gray-700">Empowering individuals with knowledge and skills for a sustainable, equitable world.</p>
        </div>
        <div class="rounded-xl bg-white/90 p-8 shadow-lg">
          <h3 class="mb-2 text-xl font-semibold text-yellow-700">Youth Programs</h3>
          <p class="text-gray-700">Inspiring the next generation to become leaders in science, technology, and social change.</p>
        </div>
      </div>
    </section>

    <!-- 4. Proposals (componentized, creative, filterable) -->
    <Proposals :proposals="allProposals" :filters="proposalFilters" />

    <!-- 4. Network & Partners (expanded, distinction from Partnerships) -->
    <section class="glass-bg glassy-interact mx-auto mb-12 w-full max-w-7xl rounded-2xl py-10 md:mb-16 md:py-12" id="network" aria-label="Network">
      <h2 class="mb-2 text-center text-4xl font-extrabold text-gray-900 drop-shadow-lg">Our Network</h2>
      <div class="mb-8 text-center text-lg font-semibold text-blue-700">Including Community & Volunteers</div>
      <p class="mx-auto mb-8 max-w-7xl text-center text-lg text-gray-700">The Venus Project collaborates with a global network of organizations, foundations, research centers, sustainability leaders, and a vibrant community of volunteers. These partnerships foster knowledge exchange, co-promotion, and joint action toward a sustainable, resource-based future. Explore our network below:</p>
      <div class="grid snap-x grid-cols-2 flex-col gap-8 overflow-x-auto pb-4" style="scroll-snap-type: x mandatory">
        <PartnerCard bgColor1="#ff0dcc" bgColor2="#fCbd33" img="https://www.thevenusproject.com/wp-content/uploads/2024/03/JFFlogoALT_NOtag_vert_forWHITEKbkgd-300x286.png" title="Jacque Fresco Foundation" description="Preserving and publishing Jacque Fresco's body of work. Ensuring conceptual and philosophical continuity with The Venus Project." link="https://www.frescofoundation.org/" linkText="Visit JFF" imgBorder="border-[#0091f2]" btnClass="bg-[#0091f2] !text-white hover:bg-[#0091f2]" padClass="p-3" />
        <PartnerCard bgColor1="#ff0dcc" bgColor2="#fCbd33" img="https://thoriumenergyalliance.com/wp-content/uploads/2020/01/TEA-logo-250.png" title="Thorium Energy Alliance" description="Promoting global energy security through thorium as a fuel source. Educational and non-profit partner for energy innovation." link="https://thoriumenergyalliance.com/" linkText="Visit TEA" imgBorder="border-[#02a3c6]" btnClass="bg-[#02a3c6] !text-white" padClass="px-3 py-2" />
        <PartnerCard bgColor1="#555" bgColor2="#fCbd33" img="https://www.thevenusproject.com/wp-content/uploads/2019/09/NARDC_logo-1.jpg" title="NARDC (Aquaponics R&D Center)" description="Developing scalable aquaponics solutions for food security, poverty reduction, and ecosystem health." link="https://nardc.in/about-us/" linkText="Visit NARDC" imgBorder="border-[#e77a40] !text-white" btnClass="bg-[#e77a40] !text-white hover:bg-[#e77a40]" padClass="p-0" />
        <PartnerCard bgColor1="#333" bgColor2="#fCbd33" img="except" title="Except Integrated Sustainability" description="Consultants for sustainable development projects in cities, buildings, and industry. Supported TVP's Center for Resource Management." link="https://except.eco/" linkText="Visit Except" imgBorder="border-teal-400" btnClass="bg-teal-600 text-white hover:bg-teal-400" padClass="px-3 py-2" />
        <PartnerCard bgColor1="#ff0dcc" bgColor2="#000" img="https://www.thevenusproject.com/wp-content/uploads/2019/10/react_logo2.png" title="REACT Project" description="A multinational project for climate change education and behavioral change, in partnership with NTNU and the UN IPCC." link="https://www.react-project.com/" linkText="Visit REACT" imgBorder="border-purple-400" btnClass="bg-purple-700 text-white hover:bg-purple-500" padClass="p-2" />
        <PartnerCard bgColor1="#ff0dcc" bgColor2="#fCbd33" img="https://www.thevenusproject.com/wp-content/uploads/2020/02/progenerate-logo2-300x300.jpg" title="Progenerate Studio" description="Architectural design studio focused on sustainability, circularity, and self-sufficiency. Provides R&D and design for TVP." link="https://www.facebook.com/progeneratebook/" linkText="Visit Progenerate" imgBorder="border-gray-400" btnClass="bg-gray-700 text-white hover:bg-gray-500" padClass="rounded" />
        <PartnerCard bgColor1="#fff" bgColor2="#fCbd33" img="/tvp/Space-1.jpg" title="Community & Volunteers" description="Thousands of volunteers and local chapters worldwide support TVP's mission. Join our global community and make a difference." link="/volunteer" linkText="Volunteer" imgBorder="border-purple-400" btnClass="bg-purple-700 text-white hover:bg-purple-500" />
        <PartnerCard bgColor1="#ff0dcc" bgColor2="#fCbd33" img="https://dracoscopia.com/logo.png" title="Dracoscopia" description="Dracoscopia is a creative and research partner, exploring new frontiers in art, science, and technology." link="https://dracoscopia.com" linkText="Visit Dracoscopia" imgBorder="!rounded-full border-emerald-400" btnClass="bg-emerald-500 text-white hover:bg-emerald-200" badge="Awaiting Acceptance" padClass="p-5" />
      </div>
      <div class="mt-8 text-center">
        <router-link to="/network" class="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-xl font-bold text-white shadow-lg transition-all duration-300 hover:bg-blue-500" aria-label="Explore Full Network">
          <font-awesome-icon icon="globe" class="mr-2 h-6 w-6" />
          Explore Full Network
        </router-link>
      </div>
    </section>

    <!-- 5. Contact/Join (improved CTA) -->
    <section class="glassy-interact mx-auto mb-12 flex w-full max-w-7xl flex-col items-center gap-8 rounded-2xl bg-white/80 py-8 shadow-2xl md:mb-16 md:py-10" id="contact">
      <h2 class="mb-2 text-3xl font-bold text-gray-900">Let's Connect and Create Together!</h2>
      <p class="mb-4 px-10 text-center text-lg text-gray-700">Interested in contributing to our proposals or any content on this website? Eager to collaborate? I would love to hear from you! Reach out to explore how we can work together to build a better future.</p>
      <div class="flex flex-col items-center gap-4 md:flex-row">
        <a href="mailto:dracorisz@outlook.com" class="flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-bold text-white shadow hover:opacity-90"><font-awesome-icon icon="envelope" class="h-5 w-5" />Email</a>
        <a href="https://wa.me/38169698442" target="_blank" class="flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-bold text-white shadow hover:opacity-90"><font-awesome-icon :icon="['fab', 'whatsapp']" class="h-5 w-5" />WhatsApp</a>
        <router-link to="/resume" class="btn-glass flex items-center gap-2"><font-awesome-icon icon="file-pdf" class="mr-2 h-5 w-5" />Resume</router-link>
        <a href="https://github.com/sponsors/drazzardaq" target="_blank" class="btn-glass-cta"><font-awesome-icon icon="heart" class="mr-2 h-5 w-5" />Support</a>
      </div>
    </section>
    <!-- 6. Latest News -->
    <section class="glassy-bg glassy-interact mx-auto mb-12 w-full max-w-7xl rounded-2xl py-10 shadow-2xl md:mb-16 md:py-1  2" id="latest-news" aria-label="Latest News">
      <h2 class="text-gradient mb-6 text-center text-4xl font-extrabold text-white">Latest News</h2>
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 w-full mx-auto px-5">
        <div class="max-w-[100%] mx-auto news-card-bg relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-2xl shadow-xl">
          <img :src="circularCitySlides[0]" alt="Transcending Paradigms" class="absolute inset-0 z-0 h-full w-full rounded-2xl object-cover" />
          <div class="news-card-gradient pointer-events-none absolute inset-0 z-10"></div>
          <div class="relative z-20 flex flex-col gap-2 p-6">
            <span class="mb-1 text-sm text-white">March 15, 2024</span>
            <h3 class="text-lg font-bold text-white">Transcending Paradigms</h3>
            <p class="text-white">Exploring new ways of thinking to address global challenges and foster a sustainable future.</p>
            <router-link to="/resume#latest-news" class="btn-link-arrow mt-2 !text-white">Read More <font-awesome-icon icon="arrow-right" /></router-link>
          </div>
        </div>
        <div class="max-w-[100%] mx-auto news-card-bg relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-2xl shadow-xl">
          <img :src="circularCitySlides[1]" alt="Ecologically Sustainable Development" class="absolute inset-0 z-0 h-full w-full rounded-2xl object-cover" />
          <div class="news-card-gradient pointer-events-none absolute inset-0 z-10"></div>
          <div class="relative z-20 flex flex-col gap-2 p-6">
            <span class="mb-1 text-sm text-white">March 10, 2024</span>
            <h3 class="text-lg font-bold text-white">Ecologically Sustainable Development</h3>
            <p class="text-white">Strategies and innovations for building a society in harmony with nature.</p>
            <a href="/resume#latest-news" class="btn-link-arrow mt-2 !text-white">Read More <font-awesome-icon icon="arrow-right" /></a>
          </div>
        </div>
        <div class="max-w-[100%] mx-auto news-card-bg relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-2xl shadow-xl">
          <img :src="circularCitySlides[2]" alt="Cultivating A Resilient Society" class="absolute inset-0 z-0 h-full w-full rounded-2xl object-cover" />
          <div class="news-card-gradient pointer-events-none absolute inset-0 z-10"></div>
          <div class="relative z-20 flex flex-col gap-2 p-6">
            <span class="mb-1 text-sm text-white">March 5, 2024</span>
            <h3 class="text-lg font-bold text-white">Cultivating A Resilient Society</h3>
            <p class="text-white">How communities can adapt and thrive amidst global uncertainty and change.</p>
            <a href="/resume#latest-news" class="btn-link-arrow mt-2 !text-white">Read More <font-awesome-icon icon="arrow-right" /></a>
          </div>
        </div>
        <div class="max-w-[100%] mx-auto news-card-bg relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-2xl shadow-xl">
          <img :src="circularCitySlides[3]" alt="Integrated Aquaponics System" class="absolute inset-0 z-0 h-full w-full rounded-2xl object-cover" />
          <div class="news-card-gradient pointer-events-none absolute inset-0 z-10"></div>
          <div class="relative z-20 flex flex-col gap-2 p-6">
            <span class="mb-1 text-sm text-white">February 28, 2024</span>
            <h3 class="text-lg font-bold text-white">Integrated Aquaponics System</h3>
            <p class="text-white">Innovative food production for sustainable, healthy communities.</p>
            <a href="/resume#latest-news" class="btn-link-arrow mt-2 !text-white">Read More <font-awesome-icon icon="arrow-right" /></a>
          </div>
        </div>
      </div>
    </section>

    <!-- Get Involved / Register for a Tour Section -->
    <section class="get-involved-section-up glassy-bg glassy-interact mx-auto mb-12 flex w-full max-w-7xl flex-col items-center rounded-2xl px-4 py-10 shadow-2xl md:mb-16 md:py-16">
      <h2 class="text-gradient mb-4 text-center text-3xl font-extrabold md:text-4xl">Get Involved</h2>
      <p class="mx-auto mb-6 max-w-2xl text-center text-lg text-gray-700">Participate in a seminar and tour at our Center in Venus, Florida. Meet Roxanne Meadows, get your questions answered, and learn how you can contribute to a resource-based economy.</p>
      <a href="https://www.thevenusproject.com/the-venus-project/research-center/" target="_blank" class="btn-glass-cta">Learn More & Register</a>
    </section>

    <section class="relative z-10 glass-bg glassy-interact mx-auto mb-12 w-full max-w-7xl rounded-3xl py-10 shadow-2xl md:mb-16 md:py-12">
      <!-- <CentralIcon color="dark" class="relative z-20" /> -->
      <img src="@/assets/images/tvp/venus2.webp" alt="The Venus Planet" class="h-full w-full absolute object-cover rounded-3xl inset-0 -z-10" loading="lazy" />
      <div class="h-full w-full absolute object-cover rounded-3xl inset-0 -z-5 bg-white/90"></div>
      <img src="@/assets/images/Outpost-logo.png" alt="The Venus Planet" class="h-20 mb-8 w-auto mx-auto relative z-10" loading="lazy" />
      <!-- <h2 class="relative z-10 text-gradient mb-1 mt-6 animate-slide-down text-center text-4xl font-extrabold">Welcome to</h2>
      <h2 class="relative z-10 text-gradient mb-1 animate-slide-down text-center text-[37px] font-extrabold !font-doom">The Venus</h2>
      <h2 class="relative z-10 text-gradient mb-6 animate-slide-down text-center !font-body  text-[35px] font-extrabold">Outpost Project</h2> -->
      <p class="relative z-10 max-w-7xl text-center text-lg text-gray-700 md:text-xl">Designing a sustainable, resource-based future for all. Explore, connect, and help shape a better world.</p>
      <p class="relative z-10 mb-6 text-center px-20 text-lg text-gray-800">Explore our vision for a sustainable, resource-based future. Join us in creating a world where technology and human values align for the benefit of all.</p>
      <div class="relative z-10 flex flex-col items-center gap-4">
        <router-link to="/about" class="btn-glass animate-pop-in px-6 py-3 font-bold text-white shadow-lg"> <font-awesome-icon icon="info-circle" class="mr-2" /> Learn More About TVP </router-link>
      </div>
    </section>

    <!-- 1b. Circular Cities Slider (restored, improved, mobile-friendly) -->
    <section class="circular-cities-section-up glassy-bg glassy-interact mx-auto mb-12 flex w-full max-w-7xl flex-col items-center rounded-2xl px-0 py-8 shadow-2xl md:mb-16 md:py-12">
      <h2 class="text-gradient mb-4 text-center text-3xl font-extrabold md:text-4xl">Circular Cities: The Heart of TVP</h2>
      <p class="mx-auto mb-6 max-w-2xl text-center text-lg text-gray-700">Explore the vision of sustainable, circular cities—integrating nature, technology, and community for a thriving future. Each city is designed for resource efficiency, well-being, and harmony with the environment.</p>
      <div class="relative mx-auto w-[1080px] max-w-7xl min-w-[1080px] min-h-[380px]">
        <div class="overflow-hidden rounded-2xl shadow-lg h-[380px] max-h-[380px] w-full">
          <img :src="circularCitySlides[circularCurrent]" :alt="`Circular City Slide ${circularCurrent + 1}`" class="h-full w-full object-cover transition-all duration-700" />
        </div>
        <button class="slider-btn left-0  !bg-gradient-to-r rounmded-3xl" @click="circularPrev" aria-label="Previous City Slide" tabindex="0" style="top: 50%; left: 0; transform: translateY(-50%)"><font-awesome-icon icon="chevron-left" /></button>
        <button class="slider-btn right-0  !bg-gradient-to-l rounmded-3xl" @click="circularNext" aria-label="Next City Slide" tabindex="0" style="top: 50%; right: 0; transform: translateY(-50%)"><font-awesome-icon icon="chevron-right" /></button>
        <div class="slider-thumbs absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          <button v-for="(slide, idx) in circularCitySlides" :key="'circular-dot-' + idx" class="slider-thumb border border-blue-200 bg-white/80 shadow hover:bg-tvp-teal" :class="{ active: circularCurrent === idx }" @click="circularGo(idx)" :aria-label="`Go to city slide ${idx + 1}`" tabindex="0">
            <!-- <font-awesome-icon :icon="circularCurrent === idx ? 'circle' : ['fas', 'circle']" class="text-blue-700" /> -->
          </button>
        </div>
      </div>
      <div class="mx-auto mt-6 max-w-2xl text-center text-base text-gray-600">
        <span v-if="circularCurrent === 0">Aerial view of a TVP circular city, showing green belts, radial sectors, and integrated transport.</span>
        <span v-else-if="circularCurrent === 1">Central dome and research hub, surrounded by residential and recreational zones.</span>
        <span v-else-if="circularCurrent === 2">Waterways and green corridors connecting city sectors for ecology and leisure.</span>
        <span v-else-if="circularCurrent === 3">Renewable energy installations and smart infrastructure for self-sufficiency.</span>
        <span v-else-if="circularCurrent === 4">Community spaces, learning centers, and collaborative work environments.</span>
        <span v-else-if="circularCurrent === 5">Night view: illuminated city layout with efficient, beautiful lighting.</span>
        <span v-else-if="circularCurrent === 6">Integration of food production, aquaponics, and urban farming.</span>
        <span v-else-if="circularCurrent === 7">Public transport hubs and walkable, car-free neighborhoods.</span>
        <span v-else-if="circularCurrent === 8">Circular city in harmony with surrounding nature and water bodies.</span>
        <span v-else-if="circularCurrent === 9">Innovative architecture blending form, function, and sustainability.</span>
        <span v-else-if="circularCurrent === 10">A vision for the future: scalable, adaptable, and inclusive urban design.</span>
      </div>
    </section>
  </div>
</template>

<script setup>
import TokenCard from "@/components/TokenCard.vue";
import SeoHead from "@/components/SeoHead.vue";
import PartnerCard from "@/components/PartnerCard.vue";
import CentralIcon from "@/components/common/CentralIcon.vue";
import Proposals from "@/components/Proposals.vue";
import CityWithPurpose from "@/components/CityWithPurpose.vue";
import { allProposals, proposalFilters } from "@/assets/proposals.js";
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChevronLeft, faChevronRight, faCircle, faEye, faBalanceScale, faBookOpen, faHistory, faCoins, faGlobe, faUsers, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faPinterestP, faYoutube, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faChevronLeft, faChevronRight, faCircle, faEye, faBalanceScale, faBookOpen, faHistory, faCoins, faGlobe, faUsers, faEnvelope, faFacebookF, faTwitter, faLinkedinIn, faInstagram, faPinterestP, faYoutube, faWhatsapp);

// Register FontAwesomeIcon globally for this file
const components = { FontAwesomeIcon };

// Slider logic
const tvpSlides = [
  {
    img: "@/assets/images/city-slides/8.jpg",
    title: "Circular Cities: The Heart of TVP",
    desc: "Discover the blueprint for sustainable urban living. Circular cities optimize resources, foster community, and integrate nature and technology.",
    alt: "Circular city design, The Venus Project",
    cta: { text: "Learn More", link: "/thevenusproject#circular-cities" },
  },
  {
    img: "@/assets/images/city-slides/1.jpg",
    title: "Resource-Based Economy",
    desc: "A new economic model for the 21st century. TVP proposes a system where resources are managed for the well-being of all.",
    alt: "Resource-based economy, The Venus Project",
    cta: { text: "Explore RBE", link: "/thevenusproject#mission" },
  },
  {
    img: "@/assets/images/city-slides/11.jpg",
    title: "Global Collaboration",
    desc: "Join a worldwide network of innovators, scientists, and volunteers working for a better future.",
    alt: "Global collaboration, The Venus Project",
    cta: { text: "Join the Network", link: "/network" },
  },
  {
    img: "@/assets/images/city-slides/2.jpg",
    title: "Jacque Fresco Foundation",
    desc: "Honoring the legacy of Jacque Fresco. Explore archives, events, and educational resources.",
    alt: "Jacque Fresco Foundation",
    cta: { text: "Visit JFF", link: "/network" },
  },
  {
    img: "@/assets/images/city-slides/3.jpg",
    title: "Global Design Team",
    desc: "A worldwide network of designers, engineers, and volunteers collaborating on open-source solutions for TVP and beyond.",
    alt: "Global Design Team",
    cta: { text: "Join the Team", link: "/teams" },
  },
  {
    img: "@/assets/images/city-slides/5.jpg",
    title: "Sustainable Technologies",
    desc: "TVP develops and promotes sustainable technologies for energy, food, water, and shelter.",
    alt: "Sustainable technologies, The Venus Project",
    cta: { text: "See Innovations", link: "/thevenusproject#highlights" },
  },
  {
    img: "@/assets/images/city-slides/4.jpg",
    title: "Education & Outreach",
    desc: "TVP educates the public through seminars, tours, and digital media. Get involved and help spread the vision.",
    alt: "Education and outreach, The Venus Project",
    cta: { text: "Get Involved", link: "/cta-visit" },
  },
];
const currentSlide = ref(0);
let sliderInterval = null;

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % tvpSlides.length;
}
function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + tvpSlides.length) % tvpSlides.length;
}
function startSlider() {
  if (sliderInterval) clearInterval(sliderInterval);
  sliderInterval = setInterval(nextSlide, 5000);
}
function stopSlider() {
  if (sliderInterval) clearInterval(sliderInterval);
}

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
  startSlider();
  // GSAP Animations
  gsap.from(".venus-project-content > *", { opacity: 0, y: 40, stagger: 0.15, duration: 1, ease: "power2.out" });
  gsap.from(".glassy-bg", { opacity: 0.7, duration: 1.2, ease: "power1.inOut" });
});

// Fix GSAP: animate each section on scroll
import { nextTick } from "vue";
function animateSections() {
  const sections = document.querySelectorAll(".venus-project-content > section, .venus-project-content > header, .venus-project-content > footer");
  sections.forEach((section, i) => {
    gsap.fromTo(section, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, delay: i * 0.12, ease: "power2.out", scrollTrigger: { trigger: section, start: "top 80%" } });
  });
}
onMounted(async () => {
  await nextTick();
  animateSections();
  startSlider();
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

// Swipable slider logic
let touchStartX = 0;
let touchEndX = 0;
function onTouchStart(e) {
  touchStartX = e.changedTouches[0].screenX;
}
function onTouchMove(e) {
  touchEndX = e.changedTouches[0].screenX;
}
function onTouchEnd() {
  if (touchEndX === 0) return;
  if (touchEndX < touchStartX - 40) nextSlide();
  if (touchEndX > touchStartX + 40) prevSlide();
  touchStartX = 0;
  touchEndX = 0;
}
function goToSlide(idx) {
  currentSlide.value = idx;
}

// Circular Cities slider logic
const circularCitySlides = Object.values(import.meta.glob("../assets/images/city-slides/*.jpg", { eager: true })).map((module) => module.default || module);
const circularCurrent = ref(0);
let circularInterval = null;
function circularNext() {
  circularCurrent.value = (circularCurrent.value + 1) % circularCitySlides.length;
}
function circularPrev() {
  circularCurrent.value = (circularCurrent.value - 1 + circularCitySlides.length) % circularCitySlides.length;
}
function circularGo(idx) {
  circularCurrent.value = idx;
}
onMounted(() => {
  if (circularInterval) clearInterval(circularInterval);
  circularInterval = setInterval(circularNext, 6000);
});

// Latest News data
const latestNews = [
  {
    title: "Transcending Paradigms",
    link: "https://www.thevenusproject.com/transcending-paradigms/",
    summary: "A new article exploring the need to move beyond outdated paradigms for a sustainable future.",
  },
  {
    title: "Ecologically Sustainable Development",
    link: "https://www.thevenusproject.com/ecologically-sustainable-development/",
    summary: "Insights into sustainable development and TVP's approach to ecological balance.",
  },
  {
    title: "Cultivating A Resilient Society Amidst the Great Unraveling",
    link: "https://www.thevenusproject.com/cultivating-a-resilient-society-amidst-the-great-unraveling/",
    summary: "How TVP's principles can help societies adapt and thrive in challenging times.",
  },
  {
    title: "Website Update",
    link: "https://www.thevenusproject.com/website-update/",
    summary: "Latest updates and improvements to The Venus Project's online presence.",
  },
  {
    title: "Honoring the Legacy of Jacque Fresco: Transcriptions of His Visionary Lectures Completed",
    link: "https://www.thevenusproject.com/honoring-the-visionary-legacy-of-jacque-fresco-transcriptions-of-his-visionary-lectures-completed/",
    summary: "Celebrating the completion of transcriptions of Jacque Fresco's lectures.",
  },
];

// Proposal filters and data
</script>

<style scoped>
.slider-btn {
  @apply text-blue-700 focus:outline-none !rounded-none !px-10 h-full from-black/60 to-transparent text-6xl;
}
</style>