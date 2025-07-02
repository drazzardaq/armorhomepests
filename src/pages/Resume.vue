<template>
  <div class="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-white shadow-xl md:flex">
    <!-- Left Column (33%) -->
    <div class="flex flex-col justify-between border-r border-gray-200 bg-white p-6 text-gray-900 shadow-lg md:w-1/3 md:p-8">
      <div>
        <!-- Profile Photo -->
        <div class="mb-4 flex justify-center">
          <!-- <img src="@/assets/images/Google.png" alt="Profile Photo" class="mr-3 h-20 w-20 rounded-full border-2 border-indigo-200 object-cover shadow-sm" /> -->
          <h1 class="mb-2 text-3xl font-bold text-gray-900">Dragoljub Ranđelović</h1>
        </div>
        <h2 class="mb-3 ml-1 text-sm text-gray-900 opacity-90">AI Orchestrator & Software Engineer</h2>

        <div class="mb-4 mt-4 font-inter font-normal normal-case text-black">
          <a href="https://maps.google.com/?q=Serbia" target="_blank" class="mb-2 flex items-center !font-inter text-sm !font-normal !normal-case text-black">
            <font-awesome-icon fixed-width :icon="['fas', 'map-location']" class="mr-2 text-lg !text-black/80" />
            Serbia
          </a>
          <a href="tel:+38169698442" class="mb-2 flex items-center !font-inter text-sm !font-normal !normal-case text-black">
            <font-awesome-icon fixed-width :icon="['fas', 'mobile']" class="mr-2 text-lg !text-black/80" />
            38169698442
          </a>
          <a href="mailto:randjelovicdragoljub1@gmail.com" class="mb-2 flex items-center !font-inter text-sm !font-normal !normal-case text-black">
            <font-awesome-icon fixed-width :icon="['fab', 'google']" class="mr-2 text-lg !text-black/80" />
            randjelovicdragoljub1@gmail.com
          </a>
          <a href="mailto:dracorisz@outlook.com" class="mb-4 flex items-center !font-inter text-sm !font-normal !normal-case text-black">
            <font-awesome-icon fixed-width :icon="['fab', 'microsoft']" class="mr-2 text-lg !text-black/80" />
            dracorisz@outlook.com
          </a>
        </div>
        <div class="mb-3 flex flex-wrap items-center gap-3 text-sm">
          <a href="https://www.linkedin.com/in/drazzardaq" target="_blank" class="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 font-inter font-medium text-gray-800 shadow-sm transition hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700">
            <font-awesome-icon fixed-width :icon="['fab', 'linkedin']" class="text-base text-indigo-500" />
            LinkedIn
          </a>
          <a href="https://github.com/drazzardaq" target="_blank" class="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 font-inter font-medium text-gray-800 shadow-sm transition hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700">
            <font-awesome-icon fixed-width :icon="['fab', 'github']" class="text-base text-indigo-500" />
            GitHub
          </a>
          <a href="https://cruxm.com/resume.pdf" target="_blank" class="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 font-inter font-medium text-gray-800 shadow-sm transition hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700">
            <font-awesome-icon fixed-width :icon="['fas', 'download']" class="text-base text-indigo-500" />
            Resume PDF
          </a>
          <a href="https://www.freelancer.com/hireme/Dragoljub" target="_blank" class="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 font-inter font-medium text-gray-800 shadow-sm transition hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700">
            <font-awesome-icon fixed-width :icon="['fas', 'laptop-code']" class="text-base text-indigo-500" />
            Freelancer
          </a>
        </div>

        <div class="my-8">
          <h3 class="mb-3 flex items-center border-b border-indigo-500 pb-2 text-lg font-semibold"><font-awesome-icon fixed-width :icon="['fas', 'id-card']" class="mr-2 text-indigo-400" />Profile</h3>
          <p class="mb-2 text-sm"><font-awesome-icon fixed-width :icon="['fas', 'lightbulb']" class="mr-2 text-yellow-500" />Modern technologist with expertise in AI, software, and design. Passionate about building systems for a sustainable, liberated future grounded in a resource-based economy.</p>
          <ul class="mt-4 list-none pl-0 !text-xs">
            <li class="mb-1 flex items-center !text-sm"><font-awesome-icon fixed-width :icon="['fas', 'birthday-cake']" class="mr-2 text-pink-500" />Birthday: January 17, 1989</li>
            <li class="mb-1 flex items-center !text-sm"><font-awesome-icon fixed-width :icon="['fas', 'star']" class="mr-2 text-yellow-500" />Horoscope: Capricorn</li>
            <li class="mb-1 flex items-center !text-sm"><font-awesome-icon fixed-width :icon="['fas', 'dragon']" class="mr-2 text-green-600" />Chinese Zodiac: Earth Dragon</li>
            <li class="mb-1 flex items-center !text-sm"><font-awesome-icon fixed-width :icon="['fas', 'coins']" class="mr-2 text-yellow-600" />Hourly Rate: $50 USD / Hour</li>
          </ul>
          <!-- <span class="gggb mt-2 inline-flex flex-col items-center justify-center gap-0 rounded-3xl">
            <span class="text-xl">🐉♑🎂💰</span>
            <span class="text-sm">Resource-Based Economy</span>
            <span class="text-sm !text-yellow-300">Leaving preferred</span>
          </span> -->
        </div>

        <div class="mb-8">
          <h3 class="mb-3 flex items-center border-b border-indigo-500 pb-2 text-lg font-semibold"><font-awesome-icon fixed-width :icon="['fas', 'graduation-cap']" class="mr-2 text-blue-400" />Education</h3>
          <div class="mb-0 flex items-center">
            <font-awesome-icon fixed-width :icon="['fas', 'university']" class="mr-2 text-indigo-400" />
            <p class="mb-0 text-base font-medium">B.Sc. (Comp. Sci.), Computer Science</p>
          </div>
          <p class="mb-3 ml-6 text-xs opacity-90"><font-awesome-icon fixed-width :icon="['fas', 'calendar-alt']" class="mr-2" />Megatrend University | October 2010</p>
          <div class="flex items-center">
            <font-awesome-icon fixed-width :icon="['fas', 'university']" class="mr-2 text-indigo-400" />
            <p class="mb-0 text-base font-medium">BCompSc, Information Technology</p>
          </div>
          <p class="ml-6 text-xs opacity-90"><font-awesome-icon fixed-width :icon="['fas', 'calendar-alt']" class="mr-2" />ICT College of Vocational Studies | October 2008</p>
        </div>

        <!-- Selected Projects moved to Left Column -->
        <div class="mb-8">
          <h3 class="mb-3 flex items-center border-b border-indigo-500 pb-2 text-lg font-semibold"><font-awesome-icon fixed-width :icon="['fas', 'project-diagram']" class="mr-2" />Selected Projects</h3>
          <!-- Realmsz Project -->
          <div class="mb-4 border-b border-indigo-600/30 pb-4 last:border-b-0">
            <h4 class="flex items-center text-base font-semibold !normal-case"><img src="@/assets/images/drcsicons/draco.png" alt="Realmsz Milai" class="mr-3 h-12 w-12" />Realmsz</h4>
            <p class="mb-2 text-base opacity-80">Cooperation with Realmsz, delivering advanced web experiences and integrations.</p>
            <p class="ml-auto mt-3 flex w-[105px] items-center self-end text-xs">
              <a href="https://websitedesignsnyc.com/realmsz" target="_blank" class="flex flex-row-reverse items-center text-blue-200 hover:underline"><font-awesome-icon fixed-width :icon="['fas', 'external-link']" class="ml-1" />Visit Site</a>
            </p>
          </div>
          <div class="mb-4 flex items-center justify-center border-b border-indigo-600/30 pb-4 last:border-b-0">
            <div class="flex flex-col items-start justify-start">
              <h4 class="flex items-center text-base font-semibold !normal-case"><img src="@/assets/images/Dracoscopia.png" alt="Dracoscopia.com" class="mr-3 h-12 w-12" />Dracoscopia</h4>
              <p class="my-2 text-base opacity-80">Experience the future of digital art and collectibles with our innovative NFT platform. We combine cutting-edge blockchain technology with stunning digital artwork to create unique, verifiable digital assets.</p>
              <p class="ml-auto mt-3 flex w-[105px] items-center self-end text-xs">
                <a href="https://dracoscopia.com" target="_blank" class="flex flex-row-reverse items-center text-blue-200 hover:underline"><font-awesome-icon fixed-width :icon="['fas', 'external-link']" class="ml-1" />Visit Site</a>
              </p>
            </div>
          </div>
          <div class="mb-4 border-b border-indigo-600/30 pb-4 last:border-b-0">
            <img src="@/assets/images/TVPCE-logo.png" alt="TVPCE on cruxm.com" class="my-5 h-auto w-full rounded-lg" />
            <h4 class="flex items-center text-base font-semibold !normal-case"><font-awesome-icon fixed-width :icon="['fas', 'leaf']" class="mr-2 text-green-600" />Continuous Evolutions</h4>
            <p class="mb-2 text-base opacity-80"><font-awesome-icon fixed-width :icon="['fas', 'sync-alt']" class="mr-2 text-emerald-400" />Actively contributing to the development and evolution of TVPCE, focusing on resource optimization and sustainable systems. (TVPCE-staging on cruxm.com)</p>
          </div>
          <div class="mb-4 border-b border-indigo-600/30 pb-4 last:border-b-0">
            <img src="@/assets/images/Outpost-logo.png" alt="The Venus Project Outpost Proposal" class="my-5 h-auto w-full rounded-lg" />
            <h4 class="flex items-center text-base font-semibold"><font-awesome-icon fixed-width :icon="['fas', 'city']" class="mr-2 text-blue-500" />Outpost Project</h4>
            <p class="mb-2 text-base opacity-80"><font-awesome-icon fixed-width :icon="['fas', 'globe-europe']" class="mr-2 text-blue-400" />Actively contributing to the software and vision of The Venus Project through this outpost initiative, demonstrating commitment to global solutions.</p>
            <p class="ml-auto mt-3 flex w-max items-center self-end text-xs">
              <a href="https://tvp-outpost.dfbdttx2t1x3o.amplifyapp.com/" target="_blank" class="flex flex-row-reverse items-center text-blue-200 hover:underline"><font-awesome-icon fixed-width :icon="['fas', 'external-link']" class="ml-1" />View Proposal</a>
            </p>
          </div>
        </div>

        <div>
          <h3 class="mb-3 border-b border-indigo-500 pb-2 text-lg font-semibold">Personal Commitment</h3>
          <p class="mb-2 text-sm">Applying to join The Venus Project Network as a software developer and collaborator. Committed to contributing skills and energy to advance the mission of a sustainable, humane future.</p>
          <p class="mb-4 text-sm">Dedicated to ethical, open-source, and human-centered technology, with a strong interest in and commitment to the **resource-based economy system**. Ready for interviews, video meetings, and planning.</p>
          <p class="text-xs italic opacity-70">"No civilization will prevail in the long-term without acknowledging that the enhancement of human wellbeing depends first on its alignment with nature."</p>
        </div>

        <!-- Client Review Section -->
        <div class="mt-8 pt-3">
          <h3 class="mb-3 flex items-center text-lg font-semibold"><font-awesome-icon fixed-width :icon="['fas', 'star']" class="mr-2 text-yellow-400" />Client Review</h3>
          <div class="relative rounded-lg bg-indigo-950/95 p-8 text-sm text-white">
            <p class="mb-2 text-sm italic leading-relaxed !text-white">"Drago is by far the best Web Developer I have ever worked with! His knowledge and skills are so impressive and his communication is far superior to what I have received on any freelancing website before. He gives me daily updates, weekly reports, voice/video calls when needed, and screencasts to show his progress along the journey. I will 100% be hiring Drago for all my future projects and will be recommending him to anyone that I know who needs a web developer."</p>
            <br />
            <a href="https://kitbuildings.com/" target="_blank" class="ml-auto block w-full !text-right !font-inter text-sm font-bold !normal-case !text-white">Freelancer Client</a>
            <a href="https://buildersmerchant.com/" target="_blank" class="ml-auto block w-full !text-right !font-inter text-sm font-bold !normal-case !text-white"><i>Builders Merchant, LLC.</i></a>
            <a href="https://app.histruct.com/kit-buildings/en/guest" target="_blank" class="ml-auto block w-full !text-right !font-inter text-sm font-bold !normal-case !text-white">Building Configurator</a><br />
            <div class="mt-2 flex flex-wrap gap-2">
              <span class="inline-flex items-center rounded-full bg-indigo-700/50 px-3 py-1 text-xs font-semibold text-white">PHP</span>
              <span class="inline-flex items-center rounded-full bg-indigo-700/50 px-3 py-1 text-xs font-semibold text-white">JavaScript</span>
              <span class="inline-flex items-center rounded-full bg-indigo-700/50 px-3 py-1 text-xs font-semibold text-white">WordPress</span>
              <span class="inline-flex items-center rounded-full bg-indigo-700/50 px-3 py-1 text-xs font-semibold text-white">Shopify</span>
              <span class="inline-flex items-center rounded-full bg-indigo-700/50 px-3 py-1 text-xs font-semibold text-white">CSS</span>
              <span class="inline-flex items-center rounded-full bg-indigo-700/50 px-3 py-1 text-xs font-semibold text-white">HTML</span>
              <span class="inline-flex items-center rounded-full bg-indigo-700/50 px-3 py-1 text-xs font-semibold text-white">Babylon.js</span>
              <span class="inline-flex items-center rounded-full bg-indigo-700/50 px-3 py-1 text-xs font-semibold text-white">Three.js</span>
              <span class="inline-flex items-center rounded-full bg-indigo-700/50 px-3 py-1 text-xs font-semibold text-white">Vue</span>
              <span class="inline-flex items-center rounded-full bg-indigo-700/50 px-3 py-1 text-xs font-semibold text-white">TailwindCSS</span>
              <span class="inline-flex items-center rounded-full bg-indigo-700/50 px-3 py-1 text-xs font-semibold text-white">Laravel</span>
              <span class="inline-flex items-center rounded-full bg-indigo-700/50 px-3 py-1 text-xs font-semibold text-white">AWS Infra</span>
            </div>
          </div>
        </div>
        <!-- Schedule a Meeting -->
        <div class="mb-8 ml-auto mr-1 mt-5 flex w-full items-center justify-end text-right">
          <!-- <h3 class="mb-3 flex items-center border-b border-indigo-500 pb-2 text-lg font-semibold"><font-awesome-icon :icon="['fas', 'calendar-alt']" class="mr-2" />Schedule a Meeting</h3> -->
          <a href="https://refer.cal.com/drago-fmqzy" target="_blank" class="hover-link flex items-center text-blue-200"> <font-awesome-icon fixed-width :icon="['fas', 'calendar-alt']" class="mr-2" />Book a call or meeting </a>
        </div>
      </div>
    </div>
    <!-- Right Column (67%) -->
    <div class="p-6 md:w-2/3 md:p-8">
      <div class="section-card">
        <h3 class="text-gradient mb-4 flex items-center text-2xl font-bold"><font-awesome-icon fixed-width :icon="['fas', 'user-tie']" class="mr-3" />Summary</h3>
        <p class="leading-relaxed text-gray-700">Highly experienced and versatile AI Orchestrator and Software Engineer with a strong background in full-stack web development, UI/UX design, blockchain, and project management. Dedicated to ethical, open-source, and human-centered technology, with a commitment to contributing to a sustainable and liberated future through practical application and advocacy for a resource-based economy system. Proven ability to lead development teams, make technology decisions, and deliver robust software solutions. Open to relocation and collaborative work environments.</p>
      </div>
      <div class="section-card">
        <h3 class="text-gradient mb-4 flex items-center text-2xl font-bold"><font-awesome-icon fixed-width :icon="['fas', 'tools']" class="mr-3" />Key Skills</h3>
        <div class="mb-6">
          <div class="mb-4 flex items-center justify-start">
            <font-awesome-icon fixed-width :icon="['fas', 'robot']" class="mr-3 text-2xl" />
            <span class="text-xl font-semibold">Essential AI-First Building Skills</span>
          </div>
          <ul class="grid grid-cols-1 gap-5 text-sm text-gray-700 md:grid-cols-2">
            <li class="sub-section-card flex items-center"><font-awesome-icon fixed-width :icon="['fas', 'brain']" class="mr-3 text-2xl text-indigo-500" />Strategic Prompt Engineering</li>
            <li class="sub-section-card flex items-center"><font-awesome-icon fixed-width :icon="['fas', 'code']" class="mr-3 text-2xl text-indigo-500" />AI-Powered Software Creation</li>
            <li class="sub-section-card flex items-center"><font-awesome-icon fixed-width :icon="['fas', 'paint-brush']" class="mr-3 text-2xl text-indigo-500" />Generative Design Mastery</li>
            <li class="sub-section-card flex items-center"><font-awesome-icon fixed-width :icon="['fas', 'video']" class="mr-3 text-2xl text-indigo-500" />Intelligent Video Production</li>
            <li class="sub-section-card flex items-center"><font-awesome-icon fixed-width :icon="['fas', 'pen-nib']" class="mr-3 text-2xl text-indigo-500" />AI Writing Systems</li>
            <li class="sub-section-card flex items-center"><font-awesome-icon fixed-width :icon="['fas', 'cubes']" class="mr-3 text-2xl text-indigo-500" />Orchestrated Content Systems</li>
            <li class="sub-section-card flex items-center"><font-awesome-icon fixed-width :icon="['fas', 'robot']" class="mr-3 text-2xl text-indigo-500" />Business Process Automation</li>
            <li class="sub-section-card flex items-center"><font-awesome-icon fixed-width :icon="['fas', 'chart-line']" class="mr-3 text-2xl text-indigo-500" />Insight Extraction</li>
            <li class="sub-section-card flex items-center"><font-awesome-icon fixed-width :icon="['fas', 'user-tie']" class="mr-3 text-2xl text-indigo-500" />Autonomous Agent Development</li>
            <li class="sub-section-card flex items-center"><font-awesome-icon fixed-width :icon="['fas', 'cloud']" class="mr-3 text-2xl text-indigo-500" />AI Cloud Integration</li>
          </ul>
        </div>
        <div>
          <div class="mb-4 flex items-center justify-start">
            <font-awesome-icon fixed-width :icon="['fas', 'toolbox']" class="mr-3 text-2xl" />
            <span class="text-xl font-semibold">Before-AI Skills & Experience</span>
          </div>
          <ul class="grid grid-cols-1 gap-3 text-sm text-gray-700 md:grid-cols-2">
            <li class="sub-section-card green flex items-center"><font-awesome-icon fixed-width :icon="['fas', 'code']" class="mr-3 text-2xl !text-green-600" />Full Stack Web Development (Vue, React, Node.js, PHP, Laravel, WordPress)</li>
            <li class="sub-section-card green flex items-center"><font-awesome-icon fixed-width :icon="['fas', 'palette']" class="mr-3 text-2xl text-green-600" />UI/UX & Graphic Design (Figma, Adobe Suite, branding, web/mobile design)</li>
            <li class="sub-section-card green flex items-center"><font-awesome-icon fixed-width :icon="['fas', 'link']" class="mr-3 text-2xl text-green-600" />Blockchain & Smart Contracts (Solidity, Web3, NFT platforms)</li>
            <li class="sub-section-card green flex items-center"><font-awesome-icon fixed-width :icon="['fas', 'tasks']" class="mr-3 text-2xl text-green-600" />Project Management & Agile (Scrum, Kanban, remote teams)</li>
            <li class="sub-section-card green flex items-center"><font-awesome-icon fixed-width :icon="['fas', 'plug']" class="mr-3 text-2xl text-green-600" />API Integration & Automation (REST, GraphQL, Zapier, Integromat)</li>
            <li class="sub-section-card green flex items-center"><font-awesome-icon fixed-width :icon="['fas', 'cloud']" class="mr-3 text-2xl text-green-600" />Cloud & DevOps (AWS, DigitalOcean, CI/CD, Docker)</li>
            <!-- <li class="sub-section-card green flex items-center"><font-awesome-icon :icon="['fas', 'chart-pie']" class="mr-3 text-2xl text-green-600" />SEO & Digital Marketing (content, analytics, growth strategy)</li> -->
            <li class="sub-section-card green flex items-center"><font-awesome-icon fixed-width :icon="['fas', 'file-alt']" class="mr-3 text-2xl text-green-600" />Technical Writing & Documentation</li>
            <!-- <li class="sub-section-card green flex items-center"><font-awesome-icon :icon="['fas', 'comments']" class="mr-3 text-2xl text-green-600" />Client Communication & Consulting</li> -->
            <li class="sub-section-card green flex items-center"><font-awesome-icon fixed-width :icon="['fas', 'users']" class="mr-3 text-2xl text-green-600" />Open Source & Community Leadership</li>
          </ul>
        </div>
      </div>

      <!-- DUIMX System Showcase Section -->
      <div class="section-card mb-8 border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50 shadow-xl">
        <div class="relative mb-2 flex items-center">
          <img src="@/assets/images/icon2.png" alt="DUIMX Logo" class="mr-3 h-12 w-12 rounded-full border-4 border-white transition-transform group-hover:scale-[1.15]" />
          <!-- <img src="@/assets/images/Outpost-logo.png" alt="DUIMX Logo" class="mr-4 h-12 w-12 rounded-full border-2 border-indigo-300 bg-white shadow" /> -->
          <div>
            <h3 class="text-gradient text-3xl font-extrabold leading-tight tracking-tight">DUIMX: Open Source UI System</h3>
            <div class="mt-1 text-xs font-semibold uppercase tracking-wider text-indigo-400">Vue + Tailwind + Playground</div>
          </div>
          <a href="https://github.com/sponsors/drazzardaq" target="_blank" class="absolute -right-6 -top-4">
            <p class="group !flex items-center !font-body !text-sm !text-gray-700/50 transition-colors hover:!text-pink-300">
              <span class="!text-gray-700/50 hover:!text-pink-400 group-hover:!text-pink-400">Support</span>
              <font-awesome-icon fixed-width :icon="['fas', 'heart']" class="ml-2 text-base" />
            </p>
          </a>
        </div>
        <p class="mb-4 text-base leading-relaxed text-gray-700">
          <strong>DUIMX</strong> is a modern, open source, Tailwind-powered UI system for Vue, designed for rapid prototyping, live theming, and beautiful, accessible interfaces. It features a unified design language, live property editing, and a rich set of reusable components.<br />
          <span class="mt-2 block"><b>DraCUIIEditor</b> enables live editing of theme, roundness, color, spacing, and more—directly on each component demo page.</span>
        </p>
        <div class="mb-2 mt-4">
          <h4 class="mb-1 text-base font-semibold text-indigo-700">Open Source Elements</h4>
          <ul class="-ml-2 grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
            <li v-for="el in openSourceElements" :key="el.value" class="relative">
              <a :href="'/playground?element=' + el.value" class="flex flex-col items-start justify-start gap-2 rounded-2xl border border-indigo-100 bg-white/40 px-5 py-4 shadow-xl shadow-indigo-900/10 backdrop-blur-md transition-all hover:bg-white/50 hover:shadow-2xl" :class="['shadow-[0_8px_32px_0_rgba(31,38,135,0.18)]', 'border-[1.5px] border-[rgba(120,120,255,0.13)]']">
                <div class="flex items-center gap-2">
                  <span v-html="el.icon" class="drop-shadow-glass text-2xl text-indigo-400" />
                  <span class="font-inter text-base font-semibold text-gray-900">
                    {{ el.label }}
                  </span>
                </div>
                <span class="font-inter text-sm font-light !normal-case text-gray-900"> {{ el.description }}. </span>
                <span class="absolute right-4 top-4 h-2 w-2 rounded-full bg-indigo-50 opacity-60 blur-[2px]" />
              </a>
            </li>
          </ul>
        </div>
        <div class="mt-3 text-xs text-gray-500"><b>Try the playground:</b> Each element demo page features the DraCUIIEditor for live property editing and code preview.</div>
      </div>
      <!-- Experience Section -->
      <div class="section-card my-8 border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50 shadow-xl">
        <h3 class="text-gradient mb-4 flex items-center text-2xl font-bold"><font-awesome-icon fixed-width :icon="['fas', 'briefcase']" class="mr-3" />Work Experience</h3>
        <details class="group mb-2" open>
          <summary class="flex cursor-pointer items-center gap-2 text-lg font-semibold text-indigo-700">
            <span class="!flex flex-col text-2xl transition-transform group-open:rotate-180"><font-awesome-icon fixed-width icon="chevron-down" /></span>
            <div class="flex flex-col">DeSignSwww <span class="text-xs text-gray-400">Developer & Realmsz Partner</span></div>
          </summary>
          <div class="pl-7 pt-2 text-sm">
            <div class="mb-1 text-gray-700">2023 - Present — Remote/Global</div>
            <div class="mb-2">
              Lead developer and technical partner for
              <b> <a href="https://designswww.com/" target="_blank" class="hover-link !font-inter !font-bold !normal-case text-blue-600 underline">DeSignSwww</a> </b>, focusing on advanced web solutions, branding, and digital transformation. Featured cooperation on
              <b>
                <a href="https://websitedesignsnyc.com/" target="_blank" class="hover-link !font-inter !font-bold !normal-case text-blue-600 underline">WebsiteDesignsNYC</a>
              </b>
              and <b>Realmsz</b> (<a href="https://websitedesignsnyc.com/realmsz" target="_blank" class="hover-link !font-inter !font-bold !normal-case text-blue-600 underline">websitedesignsnyc.com/realmsz</a>) projects, delivering innovative web experiences and seamless integrations.
            </div>
          </div>
        </details>
        <details class="group mb-2" data-location="Remote/Global">
          <summary class="flex cursor-pointer items-center gap-2 text-lg font-semibold text-indigo-700">
            <span class="inline-block text-2xl transition-transform group-open:rotate-180"><font-awesome-icon fixed-width icon="chevron-down" /></span>
            <div class="flex flex-col">SEYPRO <span class="text-xs text-gray-400">Web Developer</span></div>
          </summary>
          <div class="pl-7 pt-2 text-sm">
            <div class="mb-1 text-gray-700">December 2021 - Present — Seychelles, South Africa</div>
            <div class="mb-2">
              Besides common technology choice consulting for various websites and apps, I've been a Lead Developer on
              <a href="https://merj.exchange" target="_blank" class="hover-link !font-inter !font-bold !normal-case">merj.exchange</a>
              and
              <a href="https://dev.book-seychelles.com" target="_blank" class="hover-link !font-inter !font-bold !normal-case">dev.book-seychelles.com</a>.
            </div>
          </div>
        </details>

        <details class="group mb-2" data-location="Remote/Global">
          <summary class="flex cursor-pointer items-center gap-2 text-lg font-semibold text-indigo-700">
            <span class="!flex flex-col text-2xl transition-transform group-open:rotate-180"><font-awesome-icon fixed-width icon="chevron-down" /></span>
            <div class="flex flex-col">NTOS <span class="text-xs text-gray-400">IT Consultant</span></div>
          </summary>
          <div class="pl-7 pt-2 text-sm">
            <div class="mb-1 text-gray-700">May 2020 - February 2021 (10 months) — Dubai, United Arab Emirates</div>
            <div class="mb-2">I've been deciding on the technology options, working on the databases, and leading a team of contract-based developers for <b>odros.com</b>. My work with NTOS also included engagement in <b>uniranks.com</b>.</div>
          </div>
        </details>
        <details class="group mb-2">
          <summary class="flex cursor-pointer items-center gap-2 text-lg font-semibold text-indigo-700">
            <span class="!flex flex-col text-2xl transition-transform group-open:rotate-180"><font-awesome-icon fixed-width icon="chevron-down" /></span>
            <div class="flex flex-col">XENOVATION <span class="text-xs text-gray-400">Joomla Developer</span></div>
          </summary>
          <div class="pl-7 pt-2 text-sm">
            <div class="mb-1 text-gray-700">March 2018 - August 2018 (6 months) — Stuttgart, Germany</div>
            <div class="mb-2">While working with Xenovation, I have developed custom features of Gentry 5 Particles for Joomla.</div>
          </div>
        </details>
        <details class="group mb-2">
          <summary class="flex cursor-pointer items-center gap-2 text-lg font-semibold text-indigo-700">
            <span class="!flex flex-col text-2xl transition-transform group-open:rotate-180"><font-awesome-icon fixed-width icon="chevron-down" /></span>
            <div class="flex flex-col">Adaxions <span class="text-xs text-gray-400">CTO and Founder</span></div>
          </summary>
          <div class="pl-7 pt-2 text-sm">
            <div class="mb-1 text-gray-700">May 2017 - May 2018 (1 year 1 month) — Worldwide</div>
            <div class="mb-2">My company's goal is to create various types of digital assets that help marketing and upstream of small and medium-sized businesses.</div>
          </div>
        </details>
        <details class="group mb-2">
          <summary class="flex cursor-pointer items-center gap-2 text-lg font-semibold text-indigo-700">
            <span class="!flex flex-col text-2xl transition-transform group-open:rotate-180"><font-awesome-icon fixed-width icon="chevron-down" /></span>
            <div class="flex flex-col">IS MicroCore <span class="text-xs text-gray-400">Web Developer</span></div>
          </summary>
          <div class="pl-7 pt-2 text-sm">
            <div class="mb-1 text-gray-700">October 2017 - February 2018 (5 months) — Knjaževac, Centralna Srbija, Serbia</div>
            <div class="mb-2">In cooperation with MicroCore, we have continued the previous engagement with the sister company (MicroBusiness) and I've been working on the mobile app connected with the larger cloud-based system.</div>
          </div>
        </details>
        <details class="group mb-2">
          <summary class="flex cursor-pointer items-center gap-2 text-lg font-semibold text-indigo-700">
            <span class="!flex flex-col text-2xl transition-transform group-open:rotate-180"><font-awesome-icon fixed-width icon="chevron-down" /></span>
            <div class="flex flex-col">MicroBusiness <span class="text-xs text-gray-400">Junior Java Developer</span></div>
          </summary>
          <div class="pl-7 pt-2 text-sm">
            <div class="mb-1 text-gray-700">October 2015 - February 2016 (5 months) — Knjaževac, Centralna Srbija, Serbia</div>
            <div class="mb-2">During my stay with MicroBusiness, I've learned about Java, PostgreSQL and robust Enterprise Resource Planning software.</div>
          </div>
        </details>
        <details class="group mb-2">
          <summary class="flex cursor-pointer items-center gap-2 text-lg font-semibold text-indigo-700">
            <span class="!flex flex-col text-2xl transition-transform group-open:rotate-180"><font-awesome-icon fixed-width icon="chevron-down" /></span>
            <div class="flex flex-col">Creative Net FX <span class="text-xs text-gray-400">SEO Manager / Frontend Developer</span></div>
          </summary>
          <div class="pl-7 pt-2 text-sm">
            <div class="mb-1 text-gray-700">October 2013 - May 2014 (8 months) — Bluffton, South Carolina, United States</div>
            <div class="mb-2">In continued cooperation with CreativeNetFX, I've been working as an SEO manager for various clients. In this role, I've participated in the creation and publishment of graphic and textual content.</div>
            <div class="mb-1 text-gray-700">March 2013 - September 2013 (7 months) — Bluffton, South Carolina, United States</div>
            <div class="mb-2">This was my first professional engagement in the field of Web Development, where I quickly advanced from basics to advanced Web Development tools, languages, and techniques.</div>
          </div>
        </details>
        <!-- <details class="group mb-2">
          <summary class="flex cursor-pointer items-center gap-2 font-semibold text-indigo-700 text-lg">
            <span class="!flex flex-col text-2xl transition-transform group-open:rotate-180"><font-awesome-icon icon="chevron-down" /></span>
              <div class="flex flex-col"> TeleTrade Russia <span class="text-xs text-gray-400">Foreign Exchange Consultant / Client Portfolio Manager</span></div>
          </summary>
          <div class="pl-7 pt-2 text-sm">
            <div class="mb-1 text-gray-700">July 2012 - March 2013 (9 months) — Belgrade, Serbia</div>
            <div class="mb-2">As a Foreign Exchange Consultant at TeleTRADE, I've published analyses of various FOREX markets.</div>
            <div class="mb-1 text-gray-700">September 2011 - May 2012 (9 months) — Belgrade, Serbia</div>
            <div class="mb-2">I've been working directly with the TeleTRADE clients in maintaining and increasing their financial portfolios.</div>
          </div>
        </details> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import defEls from "@/data/elements.js";

const openSourceElements = ref(defEls);
const copyToClipboard = (text) => {
  if (navigator && navigator.clipboard) {
    navigator.clipboard.writeText(text);
  } else {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");
.drop-shadow-glass {
  filter: drop-shadow(0 2px 8px rgba(80, 120, 255, 0.18));
}
.font-inter {
  font-family: "Inter", "Segoe UI", "Glass Antiqua", Arial, sans-serif;
}
body {
  font-family: "Inter", sans-serif;
  background-color: #f0f2f5; /* Light gray background */
}
.gggb {
  @apply w-full border-2 border-emerald-300 px-5 py-4 text-base font-semibold text-emerald-200 backdrop-blur-xl;
  @apply bg-gradient-to-br from-emerald-900/60 to-emerald-600/70;
}
.llist-imtes li,
.llist-imtes {
  @apply !ml-2 mb-2 list-disc pl-0 !text-[14px] leading-tight text-gray-500;
}
.text-gradient {
  background-image: linear-gradient(to right, #222352, #241335); /* Indigo to Purple */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}
summary div .flex {
  margin-bottom: 25px !important;
  align-items: center !important;
  justify-content: space-between !important;
  display: block;
}
.section-card {
  background-color: #fff;
  border-radius: 0.75rem; /* rounded-xl */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); /* slightly stronger shadow for contrast */
  padding: 1.5rem; /* p-6 */
  margin-bottom: 1.5rem; /* mb-6 */
  border: 1px solid #e5e7eb; /* subtle border for separation */
}
.sub-section-card {
  background: linear-gradient(135deg, rgba(236, 239, 255, 0.85) 0%, rgba(221, 227, 255, 0.7) 100%);
  border-radius: 1rem; /* more rounded */
  padding: 1.5rem 1.25rem; /* more padding */
  /* margin-bottom: 1.25rem; */
  box-shadow:
    0 4px 24px 0 rgba(80, 120, 255, 0.1),
    0 1.5px 8px 0 rgba(120, 120, 255, 0.1) inset;
  border: 1.5px solid rgba(120, 120, 255, 0.13);
  backdrop-filter: blur(12px) saturate(1.2);
  -webkit-backdrop-filter: blur(12px) saturate(1.2);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 0.95rem; /* slightly larger font size */
  color: #1e293b !important; /* dark gray for better readability */
  gap: 1rem; /* more gap */
  transition:
    box-shadow 0.2s,
    border-color 0.2s;
}
.sub-section-card.green {
  background: linear-gradient(135deg, rgba(236, 255, 249, 0.35) 0%, rgba(59, 226, 162, 0.35) 100%);
  border-radius: 1rem; /* more rounded */
  padding: 1.5rem 1.25rem; /* more padding */
  /* margin-bottom: 1.25rem; */
  box-shadow:
    0 4px 24px 0 rgba(80, 120, 255, 0.1),
    0 1.5px 8px 0 rgba(120, 120, 255, 0.1) inset;
  border: 1.5px solid rgba(120, 120, 255, 0.13);
  backdrop-filter: blur(12px) saturate(1.12);
  -webkit-backdrop-filter: blur(12px) saturate(1.12);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem; /* more gap */
  transition:
    box-shadow 0.2s,
    border-color 0.2s;
}
.sub-section-card.green:hover {
  border-color: #37c499;
}
.sub-section-card:hover {
  box-shadow:
    0 8px 32px 0 rgba(80, 120, 255, 0.18),
    0 2px 12px 0 rgba(120, 120, 255, 0.15) inset;
  border-color: #6366f1;
}
.hover-link {
  color: #333 !important; /* dark gray */
  transition: color 0.2s;
}
.hover-link:hover {
  text-decoration: underline;
  color: #1e40af; /* blue-800 */
}
/* Improve contrast for icons and text in left column */
.bg-white .fa-map-marker-alt,
.bg-white .fa-phone,
.bg-white .fa-envelope,
.bg-white .fa-linkedin,
.bg-white .fa-globe,
.bg-white .fa-laptop-code {
  color: #6366f1 !important; /* indigo-500 */
}
.bg-white h3,
.bg-white h4 {
  color: #1e293b;
}
.bg-white p,
.bg-white li,
.bg-white a {
  color: #22292f;
}
.bg-white .text-blue-200 {
  color: #2563eb !important;
}
.bg-white .text-yellow-900 {
  color: #92400e !important;
}
.bg-white .border-b {
  border-color: #e5e7eb !important;
}
.sponsor-btn {
  background: linear-gradient(90deg, #f472b6 0%, #ec4899 100%);
  color: #fff;
  font-weight: bold;
  border-radius: 9999px;
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px 0 #f472b655;
  transition:
    background 0.2s,
    box-shadow 0.2s;
}
.sponsor-btn:hover {
  background: linear-gradient(90deg, #ec4899 0%, #f472b6 100%);
  box-shadow: 0 4px 16px 0 #ec489988;
}
.sponsor-heart {
  transition: color 0.2s;
  color: #fff;
}
.sponsor-btn:hover .sponsor-heart {
  color: #be185d;
}
.opensource-link {
  display: flex;
  flex-direction: column;
  background: #f8fafc;
  border-radius: 0.75rem;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.04);
  transition:
    box-shadow 0.2s,
    background 0.2s;
  margin-bottom: 0.5rem;
  text-decoration: none;
  color: #22292f;
}
.opensource-link:hover {
  background: #e0e7ef;
  box-shadow: 0 4px 16px 0 #6366f155;
}
.opensource-preview {
  display: flex;
  align-items: center;
  margin-bottom: 0.25rem;
}
.copy-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #6366f1;
  padding: 0 0.25rem;
  font-size: 1rem;
  transition: color 0.15s;
}
.copy-btn:hover {
  color: #a855f7;
}
.payment-ul {
  font-size: 0.75rem;
  margin-top: 0.25rem;
}
.payment-li {
  margin-bottom: 0.1rem;
  line-height: 1.2;
}
</style>
