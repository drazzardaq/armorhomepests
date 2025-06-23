<template>
  <div class="venus-project-content min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-white from-50% via-tvp-purple/20 to-tvp-blue/80 animate-fade-in !px-0 pb-8 text-gray-900 md:px-0">
    
    <!-- 1. Hero Slider (immersive, smooth, 3D, full-width) -->
    <section class="mb-16 md:mb-20 w-full max-w-[1600px] mx-auto relative overflow-x-hidden animate-fade-in-up rounded-3xl" id="hero-slider" aria-label="Hero Image Slider">
      <div class="hero-slider-3d w-full h-[480px] md:h-[600px] flex items-center justify-center relative select-none">
        <transition-group name="hero3d" tag="div" class="w-full h-full flex items-center justify-center relative">
          <div v-for="(slide, idx) in tvpSlides" :key="idx" :class="['hero-slide', { active: currentSlide === idx, prev: currentSlide === (idx-1+tvpSlides.length)%tvpSlides.length, next: currentSlide === (idx+1)%tvpSlides.length }]" :style="{ backgroundImage: `url('${slide.img}')` }" role="group" :aria-label="slide.alt">
            <div class="hero-slide-overlay animate-fade-in-up min-h-[1600px] text-center bg-gradient-to-b from-black/70 via-black/20 to-white p-8 md:p-16 shadow-2xl">
              <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white drop-shadow mb-4 animate-pop-in">{{ slide.title }}</h2>
              <p class="text-base md:text-2xl p-5 rounded-3xl bg-black/40 font-medium text-white/90 mb-1 animate-fade-in-up max-w-7xl mx-auto shadow-lg">{{ slide.desc }}</p>
              <router-link v-if="slide.cta" :to="slide.cta.link" class="mb-10 btn-glass-hero animate-pop-in shadow-lg">{{ slide.cta.text }}</router-link>
            </div>
          </div>
        </transition-group>
        <button class="slider-btn left-4 animate-fade-in bg-white/80 hover:bg-white text-blue-700 shadow-lg border border-blue-200" @click="prevSlide" aria-label="Previous Slide" tabindex="0">
          <font-awesome-icon icon="chevron-left" />
        </button>
        <button class="slider-btn right-4 animate-fade-in bg-white/80 hover:bg-white text-blue-700 shadow-lg border border-blue-200" @click="nextSlide" aria-label="Next Slide" tabindex="0">
          <font-awesome-icon icon="chevron-right" />
        </button>
        <div class="slider-thumbs absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20 animate-fade-in-up">
          <button v-for="(slide, idx) in tvpSlides" :key="'dot-'+idx" class="slider-thumb bg-white/80 hover:bg-blue-100 border border-blue-200 shadow" :class="{ active: currentSlide === idx }" @click="goToSlide(idx)" :aria-label="`Go to slide ${idx+1}`" tabindex="0">
            <font-awesome-icon :icon="currentSlide === idx ? 'circle' : ['fas', 'circle']" class="text-blue-700" />
          </button>
        </div>
      </div>
    </section>
    
    <!-- 2. Introduction (immersive, less repetitive) -->
    <section class="animate-fade-in-up mb-12 md:mb-16 rounded-3xl glass-bg py-10 md:py-12 shadow-2xl max-w-7xl w-full mx-auto glassy-interact">
      <CentralIcon />
      <p class="text-lg md:text-xl text-gray-700 text-center max-w-7xl animate-fade-in">Designing a sustainable, resource-based future for all. Explore, connect, and help shape a better world.</p>
      <h2 class="mb-8 text-4xl font-extrabold text-gradient text-center animate-slide-down">Welcome to The Venus Project</h2>
      <p class="mb-6 text-lg text-gray-800 animate-fade-in text-center">Explore our vision for a sustainable, resource-based future. Join us in creating a world where technology and human values align for the benefit of all.</p>
      <div class="flex flex-col items-center gap-4">
        <router-link to="/about" class="btn-glass animate-pop-in shadow-lg text-blue-700 font-bold px-6 py-3"> <font-awesome-icon icon="info-circle" class="mr-2" /> Learn More About TVP </router-link>
      </div>
    </section>

    <!-- 3. Explore The Venus Project (moved up and expanded) -->
    <section class="animate-fade-in-up glassy-bg mb-12 md:mb-16 rounded-2xl py-10 md:py-12 shadow-2xl max-w-7xl w-full mx-auto glassy-interact" id="explore-tvp" aria-label="Explore The Venus Project">
      <h2 class="text-gradient mb-6 text-4xl font-extrabold text-center">Explore The Venus Project</h2>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 p-8">
        <div class="explore-card flex flex-col gap-2 rounded-xl bg-white/80 p-6 shadow group hover:scale-105 transition-transform">
          <a href="https://www.thevenusproject.com/concepts/vision/" target="_blank" rel="noopener noreferrer" class="text-lg font-bold text-blue-700 group-hover:underline">Vision</a>
          <p class="text-gray-700">A systems approach to intelligently manage resources for all inhabitants, human and otherwise.</p>
        </div>
        <div class="explore-card flex flex-col gap-2 rounded-xl bg-white/80 p-6 shadow group hover:scale-105 transition-transform">
          <a href="https://www.thevenusproject.com/concepts/values/" target="_blank" rel="noopener noreferrer" class="text-lg font-bold text-blue-700 group-hover:underline">Values</a>
          <p class="text-gray-700">Finding balance amid opposites and outlining the conditions for a sustainable civilization.</p>
        </div>
        <div class="explore-card flex flex-col gap-2 rounded-xl bg-white/80 p-6 shadow group hover:scale-105 transition-transform">
          <a href="https://www.thevenusproject.com/concepts/knowledge/" target="_blank" rel="noopener noreferrer" class="text-lg font-bold text-blue-700 group-hover:underline">Knowledge</a>
          <p class="text-gray-700">Drawing from a diverse knowledge set to inform design and innovation.</p>
        </div>
        <div class="explore-card flex flex-col gap-2 rounded-xl bg-white/80 p-6 shadow group hover:scale-105 transition-transform">
          <a href="https://www.thevenusproject.com/about/history/" target="_blank" rel="noopener noreferrer" class="text-lg font-bold text-blue-700 group-hover:underline">History</a>
          <p class="text-gray-700">Continuing work started decades ago, pioneering solutions for the future.</p>
        </div>
        <div class="explore-card flex flex-col gap-2 rounded-xl bg-white/80 p-6 shadow group hover:scale-105 transition-transform">
          <a href="https://www.thevenusproject.com/concepts/cities-in-the-sea/" target="_blank" rel="noopener noreferrer" class="text-lg font-bold text-blue-700 group-hover:underline">Cities in the Sea</a>
          <p class="text-gray-700">Innovative city designs for sustainable living in marine environments.</p>
        </div>
        <div class="explore-card flex flex-col gap-2 rounded-xl bg-white/80 p-6 shadow group hover:scale-105 transition-transform">
          <a href="https://www.thevenusproject.com/concepts/energy/" target="_blank" rel="noopener noreferrer" class="text-lg font-bold text-blue-700 group-hover:underline">Energy</a>
          <p class="text-gray-700">Harnessing renewable energy sources for a clean, sustainable future.</p>
        </div>
        <div class="explore-card flex flex-col gap-2 rounded-xl bg-white/80 p-6 shadow group hover:scale-105 transition-transform">
          <a href="https://www.thevenusproject.com/concepts/transportation/" target="_blank" rel="noopener noreferrer" class="text-lg font-bold text-blue-700 group-hover:underline">Transportation</a>
          <p class="text-gray-700">Advanced, efficient, and sustainable transportation systems.</p>
        </div>
        <div class="explore-card flex flex-col gap-2 rounded-xl bg-white/80 p-6 shadow group hover:scale-105 transition-transform">
          <a href="https://www.thevenusproject.com/concepts/automation/" target="_blank" rel="noopener noreferrer" class="text-lg font-bold text-blue-700 group-hover:underline">Automation</a>
          <p class="text-gray-700">Utilizing automation to free humanity from repetitive labor and increase quality of life.</p>
        </div>
      </div>
    </section>

    <!-- About The Venus Project / Mission Section -->
    <section class="about-tvp-section animate-fade-in-up mb-12 md:mb-16 w-full max-w-7xl mx-auto glassy-bg rounded-2xl shadow-2xl px-4 py-10 md:py-16 flex flex-col items-center glassy-interact">
      <h2 class="text-gradient mb-4 text-3xl md:text-4xl font-extrabold text-center">About The Venus Project</h2>
      <p class="mb-6 text-center text-lg text-gray-700 max-w-3xl mx-auto">
        The Venus Project is a non-profit organization dedicated to designing human habitats that enhance well-being while remaining fit to the carrying capacity of Earth and local ecosystems. We explore new materials, energy sources, construction methods, and a new resource management paradigm for a humane and sustainable culture. Our holistic, interdisciplinary approach aims to renew human habitats, restore the environment, and align technology with ecology for a sustainable future.
      </p>
    </section>

    <!-- Highlights Section (with images/captions) -->
    <section class="highlights-section animate-fade-in-up mb-12 md:mb-16 w-full max-w-7xl mx-auto glassy-bg rounded-2xl shadow-2xl px-4 py-10 md:py-16 flex flex-col items-center glassy-interact">
      <h2 class="text-gradient mb-4 text-3xl md:text-4xl font-extrabold text-center">Highlights</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-7xl mx-auto">
        <div class="frosted-glass-card rounded-2xl shadow-xl overflow-hidden relative group">
          <img src="https://www.thevenusproject.com/wp-content/uploads/2015/11/jacque_fresco_un-1-768x432.jpg" alt="Jacque Fresco at the UN" class="w-full h-56 md:h-72 object-cover group-hover:scale-105 transition-transform duration-700" />
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/90 via-white/60 to-transparent p-4">
            <h3 class="text-lg font-bold text-blue-900">United Nations Novus Summit</h3>
            <p class="text-gray-700 text-sm">TVP presented at the UN Novus Summit, sharing the vision for a sustainable future.</p>
          </div>
        </div>
        <div class="frosted-glass-card rounded-2xl shadow-xl overflow-hidden relative group">
          <img src="https://www.thevenusproject.com/wp-content/uploads/2016/01/tcio_hp.jpg" alt="The Choice is Ours Documentary" class="w-full h-56 md:h-72 object-cover group-hover:scale-105 transition-transform duration-700" />
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/90 via-white/60 to-transparent p-4">
            <h3 class="text-lg font-bold text-blue-900">The Choice is Ours</h3>
            <p class="text-gray-700 text-sm">A documentary exploring TVP’s vision, values, and solutions for a sustainable future.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Proposals (componentized, creative, filterable) -->
    <Proposals :proposals="allProposals" :filters="proposalFilters" />

    <!-- 4. Network & Partners (expanded, distinction from Partnerships) -->
    <section class="animate-fade-in-up glass-bg mb-12 md:mb-16 rounded-2xl py-10 md:py-12 max-w-7xl w-full mx-auto glassy-interact" id="network" aria-label="Network">
      <h2 class="mb-2 text-center text-4xl font-extrabold text-gray-900 drop-shadow-lg">Our Network</h2>
      <div class="mb-8 text-center text-lg text-blue-700 font-semibold">Including Community & Volunteers</div>
      <p class="mx-auto mb-8 max-w-7xl text-center text-lg text-gray-700">The Venus Project collaborates with a global network of organizations, foundations, research centers, sustainability leaders, and a vibrant community of volunteers. These partnerships foster knowledge exchange, co-promotion, and joint action toward a sustainable, resource-based future. Explore our network below:</p>
      <div class="grid grid-cols-2 snap-x flex-col gap-8 overflow-x-auto pb-4" style="scroll-snap-type: x-mandatory" tabindex="0" aria-label="Network Cards">
        <PartnerCard img="https://www.thevenusproject.com/wp-content/uploads/2024/03/JFFlogoALT_NOtag_vert_forWHITEKbkgd-300x286.png" title="Jacque Fresco Foundation" description="Preserving and publishing Jacque Fresco’s body of work. Ensuring conceptual and philosophical continuity with The Venus Project." link="https://www.frescofoundation.org/" linkText="Visit JFF" imgBorder="border-[#0091f2]" btnClass="bg-[#0091f2] !text-white hover:bg-[#0091f2]" padClass="p-3" />
        <PartnerCard img="https://thoriumenergyalliance.com/wp-content/uploads/2020/01/TEA-logo-250.png" title="Thorium Energy Alliance" description="Promoting global energy security through thorium as a fuel source. Educational and non-profit partner for energy innovation." link="https://thoriumenergyalliance.com/" linkText="Visit TEA" imgBorder="border-[#02a3c6]" btnClass="bg-[#02a3c6] !text-white" padClass="px-3 py-2" />
        <PartnerCard img="https://www.thevenusproject.com/wp-content/uploads/2019/09/NARDC_logo-1.jpg" title="NARDC (Aquaponics R&D Center)" description="Developing scalable aquaponics solutions for food security, poverty reduction, and ecosystem health." link="https://nardc.in/about-us/" linkText="Visit NARDC" imgBorder="border-[#e77a40] !text-white" btnClass="bg-[#e77a40] !text-white hover:bg-[#e77a40]" padClass="p-0" />
        <PartnerCard img="except" title="Except Integrated Sustainability" description="Consultants for sustainable development projects in cities, buildings, and industry. Supported TVP’s Center for Resource Management." link="https://except.eco/" linkText="Visit Except" imgBorder="border-teal-400" btnClass="bg-teal-600 text-white hover:bg-teal-400" padClass="px-3 py-2" />
        <PartnerCard img="https://www.thevenusproject.com/wp-content/uploads/2019/10/react_logo2.png" title="REACT Project" description="A multinational project for climate change education and behavioral change, in partnership with NTNU and the UN IPCC." link="https://www.react-project.com/" linkText="Visit REACT" imgBorder="border-purple-400" btnClass="bg-purple-700 text-white hover:bg-purple-500" padClass="p-2" />
        <PartnerCard img="https://www.thevenusproject.com/wp-content/uploads/2020/02/progenerate-logo2-300x300.jpg" title="Progenerate Studio" description="Architectural design studio focused on sustainability, circularity, and self-sufficiency. Provides R&D and design for TVP." link="https://www.facebook.com/progeneratebook/" linkText="Visit Progenerate" imgBorder="border-gray-400" btnClass="bg-gray-700 text-white hover:bg-gray-500" padClass="rounded" />
        <PartnerCard img="/tvp/Space-1.jpg" title="Community & Volunteers" description="Thousands of volunteers and local chapters worldwide support TVP’s mission. Join our global community and make a difference." link="/volunteer" linkText="Volunteer" imgBorder="border-purple-400" btnClass="bg-purple-700 text-white hover:bg-purple-500" />
        <PartnerCard img="https://dracoscopia.com/logo.png" title="Dracoscopia" description="Dracoscopia is a creative and research partner, exploring new frontiers in art, science, and technology. Awaiting partnership acceptance." link="https://dracoscopia.com" linkText="Visit Dracoscopia" imgBorder="border-gray-400" btnClass="bg-gray-700 text-white hover:bg-gray-500" badge="Awaiting Acceptance" />
      </div>
      <div class="mt-8 text-center">
        <router-link to="/network" class="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-xl font-bold text-white shadow-lg transition-all duration-300 hover:bg-blue-500" aria-label="Explore Full Network">
          <font-awesome-icon icon="globe" class="mr-2 h-6 w-6" />
          Explore Full Network
        </router-link>
      </div>
    </section>

    <!-- 5. Contact/Join (improved CTA) -->
    <section class="animate-fade-in-up mb-12 md:mb-16 flex flex-col items-center gap-8 rounded-2xl bg-white/80 py-8 md:py-10 shadow-2xl max-w-7xl w-full mx-auto glassy-interact" id="contact">
      <h2 class="mb-2 text-3xl font-bold text-gray-900">Let's Connect and Create Together!</h2>
      <p class="mb-4 px-10 text-center text-lg text-gray-700">Interested in contributing to our proposals or any content on this website? Eager to collaborate? I would love to hear from you! Reach out to explore how we can work together to build a better future.</p>
      <div class="flex flex-col items-center gap-4">
        <a href="mailto:dracorisz@outlook.com" class="flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-bold text-white shadow hover:opacity-90"><font-awesome-icon icon="envelope" class="h-5 w-5" />Email: dracorisz@outlook.com</a>
        <a href="https://wa.me/38169698442" target="_blank" class="flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-bold text-white shadow hover:opacity-90"><font-awesome-icon :icon="['fab', 'whatsapp']" class="h-5 w-5" />WhatsApp: +38169698442</a>
        <router-link to="/resume" class="btn-glass flex items-center gap-2"><font-awesome-icon icon="user" />See My Resume</router-link>
      </div>
    </section>


    <!-- 6. Latest News -->
    <section class="animate-fade-in-up glassy-bg mb-12 md:mb-16 rounded-2xl py-10 md:py-12 shadow-2xl max-w-7xl w-full mx-auto glassy-interact" id="latest-news" aria-label="Latest News">
      <h2 class="text-gradient mb-6 text-center text-4xl font-extrabold">Latest News</h2>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div class="news-card-bg relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-2xl shadow-xl">
          <img src="/tvp/Space-1.jpg" alt="Transcending Paradigms" class="absolute inset-0 z-0 h-full w-full rounded-2xl object-cover" />
          <div class="news-card-gradient pointer-events-none absolute inset-0 z-10"></div>
          <div class="relative z-20 flex flex-col gap-2 p-6">
            <span class="mb-1 text-sm text-gray-500">March 15, 2024</span>
            <h3 class="text-lg font-bold text-blue-700">Transcending Paradigms</h3>
            <p class="text-gray-700">Exploring new ways of thinking to address global challenges and foster a sustainable future.</p>
            <a href="/resume#latest-news" class="btn-link-arrow mt-2">Read More <font-awesome-icon icon="arrow-right" /></a>
          </div>
        </div>
        <div class="news-card-bg relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-2xl shadow-xl">
          <img src="/tvp/resource-based-economy-the-venus-project.jpg" alt="Ecologically Sustainable Development" class="absolute inset-0 z-0 h-full w-full rounded-2xl object-cover" />
          <div class="news-card-gradient pointer-events-none absolute inset-0 z-10"></div>
          <div class="relative z-20 flex flex-col gap-2 p-6">
            <span class="mb-1 text-sm text-gray-500">March 10, 2024</span>
            <h3 class="text-lg font-bold text-blue-700">Ecologically Sustainable Development</h3>
            <p class="text-gray-700">Strategies and innovations for building a society in harmony with nature.</p>
            <a href="/resume#latest-news" class="btn-link-arrow mt-2">Read More <font-awesome-icon icon="arrow-right" /></a>
          </div>
        </div>
        <div class="news-card-bg relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-2xl shadow-xl">
          <img src="/tvp/4.jpg" alt="Cultivating A Resilient Society" class="absolute inset-0 z-0 h-full w-full rounded-2xl object-cover" />
          <div class="news-card-gradient pointer-events-none absolute inset-0 z-10"></div>
          <div class="relative z-20 flex flex-col gap-2 p-6">
            <span class="mb-1 text-sm text-gray-500">March 5, 2024</span>
            <h3 class="text-lg font-bold text-blue-700">Cultivating A Resilient Society</h3>
            <p class="text-gray-700">How communities can adapt and thrive amidst global uncertainty and change.</p>
            <a href="/resume#latest-news" class="btn-link-arrow mt-2">Read More <font-awesome-icon icon="arrow-right" /></a>
          </div>
        </div>
        <div class="news-card-bg relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-2xl shadow-xl">
          <img src="/tvp/sfera-logotip-proekt-venera.jpg" alt="Integrated Aquaponics System" class="absolute inset-0 z-0 h-full w-full rounded-2xl object-cover" />
          <div class="news-card-gradient pointer-events-none absolute inset-0 z-10"></div>
          <div class="relative z-20 flex flex-col gap-2 p-6">
            <span class="mb-1 text-sm text-gray-500">February 28, 2024</span>
            <h3 class="text-lg font-bold text-blue-700">Integrated Aquaponics System</h3>
            <p class="text-gray-700">Innovative food production for sustainable, healthy communities.</p>
            <a href="/resume#latest-news" class="btn-link-arrow mt-2">Read More <font-awesome-icon icon="arrow-right" /></a>
          </div>
        </div>
      </div>
    </section>

    <!-- Get Involved / Register for a Tour Section -->
    <section class="get-involved-section animate-fade-in-up mb-12 md:mb-16 w-full max-w-7xl mx-auto glassy-bg rounded-2xl shadow-2xl px-4 py-10 md:py-16 flex flex-col items-center glassy-interact">
      <h2 class="text-gradient mb-4 text-3xl md:text-4xl font-extrabold text-center">Get Involved</h2>
      <p class="mb-6 text-center text-lg text-gray-700 max-w-2xl mx-auto">Participate in a seminar and tour at our Center in Venus, Florida. Meet Roxanne Meadows, get your questions answered, and learn how you can contribute to a resource-based economy.</p>
      <a href="https://www.thevenusproject.com/the-venus-project/research-center/" target="_blank" class="btn-glass-cta">Learn More & Register</a>
    </section>

    <!-- 1b. Circular Cities Slider (restored, improved, mobile-friendly) -->
    <section class="circular-cities-section animate-fade-in-up mb-12 md:mb-16 w-full max-w-7xl mx-auto glassy-bg rounded-2xl shadow-2xl px-0 py-8 md:py-12 flex flex-col items-center glassy-interact">
      <h2 class="text-gradient mb-4 text-3xl md:text-4xl font-extrabold text-center">Circular Cities: The Heart of TVP</h2>
      <p class="mb-6 text-center text-lg text-gray-700 max-w-2xl mx-auto">Explore the vision of sustainable, circular cities—integrating nature, technology, and community for a thriving future. Each city is designed for resource efficiency, well-being, and harmony with the environment.</p>
      <div class="relative w-full max-w-3xl mx-auto">
        <div class="overflow-hidden rounded-2xl shadow-lg">
          <img :src="circularCitySlides[circularCurrent]" :alt="`Circular City Slide ${circularCurrent+1}`" class="w-full h-64 md:h-96 object-cover transition-all duration-700" />
        </div>
        <button class="slider-btn left-4 bg-white/80 hover:bg-white text-blue-700 shadow-lg border border-blue-200" @click="circularPrev" aria-label="Previous City Slide" tabindex="0" style="top:50%;left:0;transform:translateY(-50%);"><font-awesome-icon icon="chevron-left" /></button>
        <button class="slider-btn right-4 bg-white/80 hover:bg-white text-blue-700 shadow-lg border border-blue-200" @click="circularNext" aria-label="Next City Slide" tabindex="0" style="top:50%;right:0;transform:translateY(-50%);"><font-awesome-icon icon="chevron-right" /></button>
        <div class="slider-thumbs absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          <button v-for="(slide, idx) in circularCitySlides" :key="'circular-dot-'+idx" class="slider-thumb bg-white/80 hover:bg-blue-100 border border-blue-200 shadow" :class="{ active: circularCurrent === idx }" @click="circularGo(idx)" :aria-label="`Go to city slide ${idx+1}`" tabindex="0">
            <font-awesome-icon :icon="circularCurrent === idx ? 'circle' : ['fas', 'circle']" class="text-blue-700" />
          </button>
        </div>
      </div>
      <div class="mt-6 text-center text-gray-600 text-base max-w-2xl mx-auto">
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
import '@/assets/tvp-global.css';
import TokenCard from "@/components/TokenCard.vue";
import ContactCTA from "@/components/common/ContactCTA.vue";
import ProposalCard from "@/components/ProposalCard.vue";
import PartnerCard from "@/components/PartnerCard.vue";
import CentralIcon from "@/components/common/CentralIcon.vue";
import Proposals from '@/components/Proposals.vue';
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
    img: "/tvp/the-venus-project-circular-city.jpg",
    title: "Circular Cities: The Heart of TVP",
    desc: "Discover the blueprint for sustainable urban living. Circular cities optimize resources, foster community, and integrate nature and technology.",
    alt: "Circular city design, The Venus Project",
    cta: { text: "Learn More", link: "/thevenusproject#circular-cities" },
  },
  {
    img: "/tvp/resource-based-economy-the-venus-project.jpg",
    title: "Resource-Based Economy",
    desc: "A new economic model for the 21st century. TVP proposes a system where resources are managed for the well-being of all.",
    alt: "Resource-based economy, The Venus Project",
    cta: { text: "Explore RBE", link: "/thevenusproject#mission" },
  },
  {
    img: "/tvp/Space-1.jpg",
    title: "Global Collaboration",
    desc: "Join a worldwide network of innovators, scientists, and volunteers working for a better future.",
    alt: "Global collaboration, The Venus Project",
    cta: { text: "Join the Network", link: "/network" },
  },
  // {
  //   img: "/tvp/JFFlogo.png",
  //   title: "Jacque Fresco Foundation",
  //   desc: "Honoring the legacy of Jacque Fresco. Explore archives, events, and educational resources.",
  //   alt: "Jacque Fresco Foundation",
  //   cta: { text: "Visit JFF", link: "/network" },
  // },
  // {
  //   img: "/tvp/logo_full_logo_gdt.svg",
  //   title: "Global Design Team",
  //   desc: "A worldwide network of designers, engineers, and volunteers collaborating on open-source solutions for TVP and beyond.",
  //   alt: "Global Design Team",
  //   cta: { text: "Join the Team", link: "/teams" },
  // },
  {
    img: "/tvp/sfera-logotip-proekt-venera.jpg",
    title: "Sustainable Technologies",
    desc: "TVP develops and promotes sustainable technologies for energy, food, water, and shelter.",
    alt: "Sustainable technologies, The Venus Project",
    cta: { text: "See Innovations", link: "/thevenusproject#highlights" },
  },
  {
    img: "/tvp/4.jpg",
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
const circularCitySlides = Object.values(import.meta.glob('@/assets/tvp-slides/*.jpg', { eager: true })).map((module) => module.default || module);
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
    summary: "Insights into sustainable development and TVP’s approach to ecological balance.",
  },
  {
    title: "Cultivating A Resilient Society Amidst the Great Unraveling",
    link: "https://www.thevenusproject.com/cultivating-a-resilient-society-amidst-the-great-unraveling/",
    summary: "How TVP’s principles can help societies adapt and thrive in challenging times.",
  },
  {
    title: "Website Update",
    link: "https://www.thevenusproject.com/website-update/",
    summary: "Latest updates and improvements to The Venus Project’s online presence.",
  },
  {
    title: "Honoring the Legacy of Jacque Fresco: Transcriptions of His Visionary Lectures Completed",
    link: "https://www.thevenusproject.com/honoring-the-visionary-legacy-of-jacque-fresco-transcriptions-of-his-visionary-lectures-completed/",
    summary: "Celebrating the completion of transcriptions of Jacque Fresco’s lectures.",
  },
];

// Proposal filters and data
const proposalFilters = [
  'All',
  'Sustainability',
  'Tech',
  'Community',
  'Education',
  'Blockchain',
];
const allProposals = [
  {
    title: 'TVPOutpost',
    desc: 'A modular, open-source AI orchestration and automation platform for creative and scientific workflows.',
    img: '/tvp/logo_full_logo_gdt.svg',
    tags: ['Tech', 'Sustainability', 'Community'],
  },
  {
    title: 'Reamlsz',
    desc: 'A decentralized, gamified knowledge and collaboration network for open innovation and learning.',
    img: '/tvp/Space-1.jpg',
    tags: ['Tech', 'Community', 'Education'],
  },
  {
    title: 'Dolphinal',
    desc: 'A privacy-first, open-source digital identity and credentialing system for the new web.',
    img: '/tvp/resource-based-economy-the-venus-project.jpg',
    tags: ['Tech', 'Blockchain'],
  },
  {
    title: 'OpenAI Orchestrator',
    desc: 'A toolkit for building, deploying, and managing autonomous AI agents and workflows.',
    img: '/tvp/4.jpg',
    tags: ['Tech', 'Education'],
  },
  {
    title: 'EcoChain',
    desc: 'A blockchain-based platform for tracking, verifying, and rewarding sustainable actions and projects.',
    img: '/tvp/sfera-logotip-proekt-venera.jpg',
    tags: ['Blockchain', 'Sustainability'],
  },
  {
    title: 'DeepSeek Coder V2 LLM Cluster',
    desc: 'A scalable, collaborative cluster for advanced AI code generation and research.',
    img: '/tvp/Space-1.jpg',
    tags: ['Tech', 'Education'],
  },
  // Creative new proposals:
  {
    title: 'AquaLoop',
    desc: 'A global open-source network for decentralized, AI-managed aquaponics and food security.',
    img: '/tvp/Space-1.jpg',
    tags: ['Sustainability', 'Tech', 'Community'],
  },
  {
    title: 'EduSphere',
    desc: 'Immersive, AI-powered education platform for lifelong learning and global collaboration.',
    img: '/tvp/4.jpg',
    tags: ['Education', 'Tech', 'Community'],
  },
  {
    title: 'SolarShare',
    desc: 'Peer-to-peer solar energy sharing and microgrid management for resilient communities.',
    img: '/tvp/resource-based-economy-the-venus-project.jpg',
    tags: ['Sustainability', 'Tech', 'Community'],
  },
  {
    title: 'HealthMesh',
    desc: 'A privacy-first, decentralized health data and telemedicine network for all.',
    img: '/tvp/sfera-logotip-proekt-venera.jpg',
    tags: ['Tech', 'Community'],
  },
  {
    title: 'GreenLedger',
    desc: 'A transparent blockchain for tracking, verifying, and rewarding sustainable actions worldwide.',
    img: '/tvp/logo_full_logo_gdt.svg',
    tags: ['Blockchain', 'Sustainability'],
  },
  {
    title: 'SkillBridge',
    desc: 'A global skills exchange and mentorship platform for upskilling and community resilience.',
    img: '/tvp/4.jpg',
    tags: ['Education', 'Community'],
  },
];
</script>
