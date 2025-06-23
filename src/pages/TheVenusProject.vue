<template>
  <div class="venus-project-content dark min-h-screen w-full max-w-none animate-fade-in bg-white bg-gradient-to-br from-gray-50/50 via-gray-900/10 to-gray-950 px-0 py-8 text-white md:px-0">
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
                <span class="inline-block rounded-xl bg-white/10 px-6 py-3 text-2xl font-bold text-yellow-900 shadow-xl drop-shadow-lg backdrop-blur">Unity & Vision</span>
                <p class="mt-2 text-lg text-yellow-900">The Sfera Logotip symbolizes the unity and global vision of The Venus Project.</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-green-900/40 to-gray-900/40 shadow-2xl md:h-[520px]">
              <img src="/tvp/gpe.png" alt="Global Pledge Event" class="absolute inset-0 z-0 h-full w-full scale-105 object-cover opacity-90" />
              <div class="absolute inset-0 z-10 bg-gradient-to-br from-green-900/40 to-gray-900/40 opacity-60"></div>
              <div class="relative z-20 w-full text-center">
                <span class="inline-block rounded-xl bg-white/10 px-6 py-3 text-2xl font-bold text-green-200 shadow-xl drop-shadow-lg backdrop-blur">Global Pledge</span>
                <p class="mt-2 text-lg text-green-100">A call to action for global stewardship and commitment to Earth.</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-800/40 to-gray-900/40 shadow-2xl md:h-[520px]">
              <img src="/tvp/the-venus-project-circular-city.jpg" alt="Circular City" class="absolute inset-0 z-0 h-full w-full scale-105 object-cover opacity-90" />
              <div class="absolute inset-0 z-10 bg-gradient-to-br from-blue-800/40 to-gray-900/40 opacity-60"></div>
              <div class="relative z-20 w-full text-center">
                <span class="inline-block rounded-xl bg-white/10 px-6 py-3 text-2xl font-bold text-blue-100 shadow-xl drop-shadow-lg backdrop-blur">Circular City</span>
                <p class="mt-2 text-lg text-blue-100">A model for resilient, resource-efficient urban environments and the future of sustainable living.</p>
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
      </div>
    </section>

    <!-- Highlights Section -->
    <section class="animate-fade-in-up mb-16 rounded-xl bg-gradient-to-br from-gray-900/80 to-blue-900/80 px-8 py-8 shadow-lg" id="highlights">
      <h2 class="mb-4 text-3xl font-bold text-blue-400">Highlights</h2>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <img src="https://www.thevenusproject.com/wp-content/uploads/2016/01/tcio_hp.jpg" alt="The Choice is Ours" class="animate-fade-in-up rounded-xl shadow-lg" />
        <img src="https://www.thevenusproject.com/wp-content/uploads/2024/08/parallel-paths.png" alt="Venus Evolution" class="animate-fade-in-up rounded-xl shadow-lg" />
      </div>
      <div class="mt-6 text-lg">
        <a href="https://www.thevenusproject.com/scenarios/venus-evolution/" class="text-blue-400 underline" target="_blank">Learn more about Venus Evolution &rarr;</a>
      </div>
    </section>

    <!-- Latest & Zeitgeist Videos Section (Merged) -->
    <section class="animate-fade-in-up mb-16 rounded-xl bg-gradient-to-br from-gray-900/80 to-purple-900/80 px-8 py-8 shadow-lg" id="latest-video">
      <h2 class="mb-4 text-3xl font-bold text-purple-300">Latest & Zeitgeist Videos</h2>
      <div class="mb-8 flex flex-col items-center gap-8 md:flex-row">
        <iframe width="480" height="270" class="rounded-xl border-4 border-purple-700 shadow-lg" src="https://www.youtube.com/watch?v=rvpTmiVhcxU" title="The Venus Project - A New World System (Documentary)" frameborder="0" allowfullscreen></iframe>
        <div>
          <h3 class="mb-2 text-xl font-semibold text-purple-200">The Venus Project - A New World System (Documentary)</h3>
          <p class="text-lg text-gray-300">This official documentary explores the vision, values, and real-world impact of The Venus Project. It details the transition to a resource-based economy, sustainable city design, and the role of technology in shaping a better future for all.</p>
        </div>
      </div>
      <div class="mb-8 flex flex-col items-center gap-8 md:flex-row">
        <img width="480" height="270" class="w-[480px] rounded-xl border-4 border-blue-700 shadow-lg" src="https://inhabitat.com/wp-content/blogs.dir/1/files/2017/02/The-Venus-Project-Water-889x499.jpg" title="The Venus Project - Circular City Design (Explained) " />
        <div>
          <h3 class="mb-2 text-xl font-semibold text-blue-200">The Venus Project - Circular City Design (Explained)</h3>
          <p class="text-lg text-gray-300">A deep dive into the circular city model, this video explains the principles, layout, and benefits of The Venus Project's urban design. Discover how the circular city layout optimizes resource use, reduces waste, and fosters a sense of community. The design integrates renewable energy, automated systems, and green spaces, making it a blueprint for sustainable urban living. This approach is central to the Resource-Based Economy and the vision of Jacque Fresco and Roxanne Meadows.</p>
        </div>
      </div>
      <div class="mb-8 flex flex-col items-center gap-8 md:flex-row">
        <iframe width="480" height="270" class="rounded-xl border-4 border-blue-700 shadow-lg" src="https://www.youtube.com/embed/vqvxVxTl2YU" title="The Choice is Ours: Computer Government" frameborder="0" allowfullscreen></iframe>
        <div>
          <h3 class="mb-2 text-xl font-semibold text-blue-200">The Choice is Ours: Computer Government</h3>
          <p class="text-lg text-gray-300">This film explores the concept of computer-based government as envisioned by The Venus Project, highlighting the potential for technology to manage resources, eliminate corruption, and create a more equitable society. It presents a vision for a future where decisions are made by scientific method and data, not politics or profit.</p>
        </div>
      </div>
      <!-- Zeitgeist Movie Series -->
      <div class="mb-8">
        <h3 class="mb-4 text-2xl font-bold text-pink-300">Zeitgeist Movie Series</h3>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div class="flex flex-col items-center">
            <iframe width="320" height="180" class="mb-2 rounded-xl border-4 border-pink-700 shadow-lg" src="https://www.youtube.com/embed/Cr2LItuzdtU" title="Zeitgeist: The Movie (2007)" frameborder="0" allowfullscreen></iframe>
            <h4 class="text-lg font-semibold text-pink-200">Zeitgeist: The Movie (2007)</h4>
            <p class="text-center text-sm text-gray-300">The original Zeitgeist film explores religion, 9/11, and the monetary system, sparking a global movement for social change and critical thinking.</p>
          </div>
          <div class="flex flex-col items-center">
            <iframe width="320" height="180" class="mb-2 rounded-xl border-4 border-pink-700 shadow-lg" src="https://www.youtube.com/embed/6nSwT_5GoJk" title="Zeitgeist - Addendum" frameborder="0" allowfullscreen></iframe>
            <h4 class="text-lg font-semibold text-pink-200">Zeitgeist: Addendum</h4>
            <p class="text-center text-sm text-gray-300">This sequel focuses on social corruption, materialism, and the flaws of currency-based economies, introducing the Resource-Based Economy and The Venus Project as solutions.</p>
          </div>
          <div class="flex flex-col items-center">
            <iframe width="320" height="180" class="mb-2 rounded-xl border-4 border-pink-700 shadow-lg" src="https://www.youtube.com/embed/5uUA2wTBblo" title="Zeitgeist - Moving Forward" frameborder="0" allowfullscreen></iframe>
            <h4 class="text-lg font-semibold text-pink-200">Zeitgeist: Moving Forward</h4>
            <p class="text-center text-sm text-gray-300">The third film explores human survival, economics, and the work of Peter Joseph, further advocating for a transition to a sustainable, science-based society.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Venus Token and Blockchain Section (renamed and updated) -->
    <section class="animate-fade-in-up relative z-20 mb-16 overflow-hidden rounded-xl bg-transparent bg-gradient-to-br from-purple-900/50 to-gray-900/20 px-8 py-8 shadow-lg" id="venus-token">
      <img src="/tvp/sfera-logotip-proekt-venera.jpg" alt="VENUS Token Coin" class="absolute inset-0 z-0 h-full w-full object-cover opacity-50" />
      <div class="relative z-30 flex flex-col items-center gap-8 md:flex-row">
        <div>
          <h2 class="mb-4 text-3xl font-bold text-purple-300">TVP, VENUS & JFF Tokens & Blockchain</h2>
          <p class="mb-4 text-lg">TVP, VENUS, and JFF are the foundation of a transparent, community-driven ecosystem. These tokens empower users to participate in governance, access exclusive features, earn rewards, and unlock knowledge and legacy resources. The system is designed to liberate users from the pressures of traditional finance and identity, offering a path to authentic participation and self-actualization.</p>
          <ul class="mb-4 ml-8 list-disc text-lg">
            <li>Governance: Shape the platform's future through proposals and voting with TVP</li>
            <li>Staking: Earn VENUS rewards and unlock exclusive benefits</li>
            <li>Marketplace: Trade NFTs, access premium content, and earn royalties using TVP</li>
            <li>Legacy & Knowledge: Unlock archives, educational content, and events with JFF</li>
            <li>Identity: Decentralized, reputation-based participation</li>
            <li>Community: Open, non-monetary offering—your value is your engagement and vision</li>
          </ul>
          <div class="mt-4 flex gap-4">
            <div class="h-20 w-20 rounded-full border-2 border-green-700 bg-white p-1">
              <img class="rounded-full border-0 bg-white -hue-rotate-90" src="https://i.pinimg.com/280x280_RS/c9/a6/24/c9a624d27142baf6bd3c54bd01c9caee.jpg" alt="TVP Token" />
            </div>
            <img class="h-20 w-20 rounded-full border-2 border-blue-900/70 bg-white p-1" src="https://i.pinimg.com/280x280_RS/c9/a6/24/c9a624d27142baf6bd3c54bd01c9caee.jpg" alt="VENUS Token" />
            <img class="h-20 w-20 rounded-full border-[3px] border-gray-300 bg-white p-1 saturate-0" src="/tvp/JFFlogo.png" alt="JFF Token" />
          </div>
        </div>
      </div>
    </section>

    <!-- Tokenomics Overview Section (using TokenCardImproved) -->
    <section class="animate-fade-in-up mb-16 rounded-xl bg-gradient-to-br from-gray-900/80 to-purple-900/80 px-8 py-8 shadow-lg" id="tokenomics-overview">
      <h2 class="mb-4 text-3xl font-bold text-purple-200">Tokenomics Overview</h2>
      <div class="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        <TokenCardImproved name="TVP Token" :icon="'https://i.pinimg.com/280x280_RS/c9/a6/24/c9a624d27142baf6bd3c54bd01c9caee.jpg'" iconClass="border-green-700" borderColor="border-green-400/40" titleColor="text-blue-400" stats="Total Supply: 1,000,000,000 TVP" network="Polygon" type="Governance & Utility" description="The primary token of the ecosystem, used for governance, NFT purchases, and platform fees. TVP is the core governance and utility token for The Venus Project ecosystem. Holders can participate in proposals, vote, and pay for platform services." gradient="linear-gradient(135deg, #2563eb 0%, #1e293b 100%)" :details="['Governance: Vote on proposals and platform changes', 'Utility: Pay for services, NFTs, and platform fees', 'Supply: 1,000,000,000 TVP', 'Network: Polygon', 'Open source: Yes']" badge="Awaiting Approval" badgeClass="bg-yellow-600 text-white" />
        <TokenCardImproved name="VENUS Token" :icon="'https://i.pinimg.com/280x280_RS/c9/a6/24/c9a624d27142baf6bd3c54bd01c9caee.jpg'" iconClass="border-pink-400" borderColor="border-pink-400/40" titleColor="text-pink-400" stats="Type: Staking Rewards" network="Polygon" type="Staking Rewards" description="Earned through staking TVP tokens, VENUS provides enhanced governance rights and exclusive platform benefits. VENUS is the reward and incentive token, with a focus on community engagement and platform growth." gradient="linear-gradient(135deg, #ec489966 0%, #f472b666 100%)" :details="['Earned by staking TVP', 'Enhanced governance rights', 'Exclusive platform benefits', 'Network: Polygon', 'Open source: Yes']" badge="Awaiting Approval" badgeClass="bg-yellow-600 text-white" />
        <TokenCardImproved name="JFF Token" :icon="'/tvp/JFFlogo.png'" iconClass="'border-gray-500 grayscale contrast-200'" borderColor="'border-gray-400/40'" titleColor="'text-gray-400'" stats="Type: Legacy & Knowledge" network="Polygon" type="Legacy & Knowledge" description="JFF is the token of the Jacque Fresco Foundation, honoring the legacy of Jacque Fresco. It unlocks exclusive knowledge, digital archives, and participation in educational initiatives and events dedicated to advancing the vision of a sustainable, scientifically-grounded future." gradient="linear-gradient(135deg, #d1d5db55 0%, #6b728555 100%)" :details="['Access to Jacque Fresco Foundation archives', 'Educational content', 'Special events', 'Meet the Genius: Jacque Fresco & Roxanne Meadows (see below)', 'Astrology: https://www.astrotheme.com/astrology/Jacque_Fresco', 'Biography: https://www.thevenusproject.com/jacque-fresco/', 'Roxanne: https://www.thevenusproject.com/the-venus-project/roxanne-meadows/']" extra="<span class='font-bold text-green-400'>Proposal</span>: Access to Jacque Fresco Foundation archives, educational content, and special events.<br><a href='#meet-genius'>Meet the Genius: Jacque Fresco & Roxanne Meadows</a><br><a href='https://www.astrotheme.com/astrology/Jacque_Fresco'>Astrology</a><br><a href='https://www.thevenusproject.com/jacque-fresco/'>Biography</a><br><a href='https://www.thevenusproject.com/the-venus-project/roxanne-meadows/'>Roxanne Meadows</a>" badge="Proposal" badgeClass="bg-green-700 text-white" />
      </div>
    </section>

    <!-- Removed: Honorable Contributors now listed on Advisors page -->

    <!-- Circular Cities Section (Extended) -->
    <section class="animate-fade-in-up mb-16 rounded-xl bg-gradient-to-br from-blue-900/80 to-gray-900/80 px-8 py-8 shadow-2xl" id="circular-cities">
      <h2 class="mb-8 text-center text-3xl font-bold text-blue-200">Circular Cities: The Heart of The Venus Project</h2>
      <div class="mb-8 flex flex-col items-center gap-8 md:flex-row">
        <div class="flex-1">
          <p class="mb-4 text-lg text-gray-200">The Venus Project’s circular city design is a blueprint for a sustainable, resource-based society. The city’s radial plan optimizes efficiency, accessibility, and harmony with nature. Each concentric ring serves a specific function, from residential and recreational areas to agricultural and energy zones, all integrated with advanced technology and ecological principles.</p>
          <ul class="mb-4 ml-8 list-disc text-lg text-blue-100">
            <li>Central dome: Core for research, education, and community events</li>
            <li>Surrounding rings: Housing, healthcare, recreation, and culture</li>
            <li>Greenbelts: Urban agriculture, parks, and wildlife corridors</li>
            <li>Outer rings: Clean industry, renewable energy, and transportation</li>
            <li>Automated systems: Resource management, recycling, and distribution</li>
            <li>Self-sufficiency: Cities designed to be modular, scalable, and adaptable</li>
          </ul>
          <p class="mb-4 text-lg text-gray-200">This design minimizes waste, maximizes well-being, and fosters a sense of community. The circular city is not just an architectural concept—it’s a systems approach to living in balance with the planet, supporting a resource-based economy and a new social paradigm.</p>
          <a href="https://www.thevenusproject.com/resource-based-economy/environment/circular-city/" class="text-blue-400 underline" target="_blank">Learn more about Circular Cities &rarr;</a>
        </div>
        <div class="flex flex-1 flex-col items-center">
          <img src="@/assets/tvp-slides/1.jpg" alt="Circular City Concept" class="mb-4 w-full max-w-md rounded-2xl shadow-xl" />
          <img src="@/assets/tvp-slides/2.jpg" alt="Circular City Interior" class="w-full max-w-md rounded-2xl shadow-xl" />
        </div>
      </div>
      <!-- Circular City Image Slider -->
      <div class="mx-auto mt-8 w-full max-w-4xl">
        <swiper-container :slides-per-view="1" :space-between="0" :navigation="true" :pagination="{ clickable: true }" class="circular-city-slider">
          <swiper-slide v-for="(img, i) in circularCitySlides" :key="i">
            <div class="relative flex h-96 w-full items-center justify-center overflow-hidden rounded-2xl bg-gray-900 shadow-2xl">
              <img :src="img" :alt="`Circular City Slide ${i + 1}`" class="h-full w-full object-cover" />
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </section>

    <!-- Meet the Genius Section -->
    <section class="animate-fade-in-up mb-16 rounded-xl bg-gradient-to-br from-blue-900/80 to-gray-900/80 px-8 py-8 shadow-2xl" id="meet-genius">
      <h2 class="mb-8 text-center text-3xl font-bold text-blue-200">Meet the Founding Geniuses</h2>
      <div class="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
        <!-- Jacque Fresco Card -->
        <div class="flex flex-col items-center rounded-xl border border-blue-400 bg-gray-800/80 p-8 shadow-lg">
          <img src="@/assets/jf.webp" alt="Jacque Fresco" class="mb-4 h-40 w-40 rounded-full border-4 border-blue-300 object-cover shadow-xl" />
          <h3 class="mb-2 text-2xl font-bold text-blue-200">Jacque Fresco</h3>
          <p class="mb-2 text-center text-gray-300">Founder of The Venus Project, visionary futurist, social engineer, and industrial designer. Jacque dedicated his life to designing a sustainable, humane future for all humanity.</p>
          <ul class="mb-2 text-sm text-gray-400">
            <li><strong>Born:</strong> March 13, 1916 (Manhattan, NY, USA)</li>
            <li><strong>Died:</strong> May 18, 2017 (Sebring, FL, USA)</li>
            <li><strong>Astrology:</strong> <a href="https://www.astrotheme.com/astrology/Jacque_Fresco" class="text-blue-400 underline" target="_blank">Pisces</a></li>
            <li><strong>Chinese Zodiac:</strong> Fire Dragon <img src="/tvp/sad.png" alt="Fire Dragon" class="ml-1 inline h-6 w-6" /></li>
            <li><a href="https://www.thevenusproject.com/jacque-fresco/" class="mr-2 text-blue-400 underline" target="_blank">Official Jacque Fresco Page</a></li>
          </ul>
          <div class="mb-2 flex flex-wrap justify-center gap-3">
            <a href="https://www.thevenusproject.com/jacque-fresco/" class="rounded bg-blue-700 px-4 py-2 font-bold text-white shadow transition hover:bg-blue-500" target="_blank">Biography</a>
            <a href="https://www.thevenusproject.com/?s=Jacque" class="rounded bg-blue-900 px-4 py-2 font-bold text-white shadow transition hover:bg-blue-700" target="_blank">More</a>
          </div>
        </div>
        <!-- Roxanne Meadows Card -->
        <div class="flex flex-col items-center rounded-xl border border-green-400 bg-gray-800/80 p-8 shadow-lg">
          <img src="@/assets/Roxanne.jpg" alt="Roxanne Meadows" class="mb-4 h-40 w-40 rounded-full border-4 border-green-300 object-cover shadow-xl" />
          <h3 class="mb-2 text-2xl font-bold text-green-200">Roxanne Meadows</h3>
          <p class="mb-2 text-center text-gray-300">Co-founder and director of The Venus Project, architectural designer, technical illustrator, and lecturer. Roxanne has worked alongside Jacque Fresco for over 40 years, helping to communicate and realize the vision of a sustainable, humane future.</p>
          <ul class="mb-2 text-sm text-gray-400">
            <li><strong>Born:</strong> March 6, 1943 (USA)</li>
            <li><strong>Astrology:</strong> Pisces</li>
            <li class="flex items-center gap-2"><strong>Chinese Zodiac:</strong> Water Goat <img src="/tvp/goat.png" alt="Water Goat" class="ml-1 inline h-6 w-6" /></li>
            <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/roxanne-meadows-a2879711/" class="text-green-400 underline" target="_blank">roxanne-meadows</a></li>
            <li><a href="https://www.thevenusproject.com/the-venus-project/roxanne-meadows/" class="mr-2 text-green-400 underline" target="_blank">Official Roxanne Meadows Page</a></li>
          </ul>
          <div class="mb-2 flex flex-wrap justify-center gap-3">
            <a href="https://www.thevenusproject.com/the-venus-project/roxanne-meadows/" class="rounded bg-green-700 px-4 py-2 font-bold text-white shadow transition hover:bg-green-500" target="_blank">Biography</a>
            <a href="https://www.thevenusproject.com/?s=Roxanne+Meadows" class="rounded bg-green-900 px-4 py-2 font-bold text-white shadow transition hover:bg-green-700" target="_blank">More</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Proposal & AI Ethics Section (Merged) -->
    <section class="animate-fade-in-up mb-16 rounded-xl bg-gradient-to-br from-gray-900/80 to-blue-900/80 px-8 py-8 shadow-lg" id="proposal-ai-ethics">
      <h2 class="mb-4 text-3xl font-bold text-blue-300">The Venus Project Network – Proposals, AI, & Ethics</h2>
      <p class="mb-4 text-lg">This webapp is a template for submitting proposals and collaborative projects to The Venus Project Network. Please address all proposals and correspondence to:</p>
      <div>
        <h3 class="mb-2 cursor-pointer text-2xl font-semibold text-blue-200" @click="showAddress = !showAddress">
          <span>The Venus Project Address</span>
          <span class="ml-2 text-sm" v-if="!showAddress">(Show)</span>
          <span class="ml-2 text-sm" v-else>(Hide)</span>
        </h3>
        <transition name="fade">
          <div v-if="showAddress" class="mb-4 rounded-lg bg-gray-900/60 p-4 text-lg">
            <strong>The Venus Project</strong><br />
            21 Valley Lane<br />
            Venus, Florida 33960<br />
            United States<br />
            Phone: +1-863-465-0321<br />
            <a href="https://www.thevenusproject.com/the-venus-project/roxanne-meadows/" class="text-blue-400 underline" target="_blank">Roxanne Meadows</a>
          </div>
        </transition>
      </div>
      <p class="mb-4 text-lg">
        Use the sections above to prepare your project, then send your proposal or inquiry to the address above or via
        <a href="https://www.thevenusproject.com/contribute/" class="text-blue-400 underline" target="_blank">thevenusproject.com/contribute</a>.
      </p>
      <hr class="my-8 border-blue-700/30" />
      <h3 class="mb-4 text-2xl font-bold text-blue-200">AI, Ethics & Human Liberation</h3>
      <p class="mb-4 text-lg">Some ideas and tools are powered by AI, but The Venus Project needs your help to ensure technology serves humanity and avoids the pitfalls of a "nonsense prison." We invite you to join the conversation and help guide the ethical use of AI for a liberated, sustainable future.</p>
      <ul class="mb-4 ml-8 list-disc text-lg">
        <li>Promote open, transparent, and ethical AI development</li>
        <li>Encourage human-centered design and decision-making</li>
        <li>Collaborate to prevent misuse and ensure technology empowers all</li>
        <li>Share your ideas and concerns with the community</li>
      </ul>
      <a href="https://www.thevenusproject.com/contribute/" class="mt-2 inline-block rounded-lg bg-blue-700 px-6 py-3 text-center font-bold text-white shadow-lg transition-all duration-300 hover:bg-blue-500" target="_blank">Contribute</a>
    </section>

    <!-- TVP YouTube Streaming/Feed Section -->
    <section class="animate-fade-in-up mb-16 rounded-xl bg-gradient-to-br from-gray-900/80 to-blue-900/80 px-8 py-8 shadow-lg" id="tvp-youtube-feed">
      <h2 class="mb-4 text-3xl font-bold text-blue-300">The Venus Project - YouTube Channel</h2>
      <div class="flex flex-col items-start gap-8 md:flex-row">
        <iframe width="480" height="270" class="rounded-xl border-4 border-blue-700 shadow-lg" src="https://www.youtube.com/embed?listType=user_uploads&list=TheVenusProjectGlobal" title="The Venus Project YouTube Feed" frameborder="0" allowfullscreen></iframe>
        <div>
          <p class="mb-2 text-lg">Watch the latest videos, livestreams, and updates from The Venus Project's official YouTube channel.</p>
          <a href="https://www.youtube.com/@TheVenusProjectGlobal" class="text-blue-400 underline" target="_blank">Visit Channel</a>
        </div>
      </div>
    </section>

    <!-- My Intention: Relocate, Initiate Contact, and Collaborate Section -->
    <section class="animate-fade-in-up mb-16 rounded-xl bg-gradient-to-br from-green-900/80 to-gray-900/80 px-8 py-8 shadow-lg" id="intention-relocate">
      <div class="mb-8 text-center">
        <h2 class="mb-4 text-3xl font-bold text-white">Ready to Relocate & Collaborate</h2>
        <h3 class="mb-2 text-xl font-semibold text-green-200">Open to New Opportunities & Partnerships</h3>
        <p class="mb-2 text-lg">Eager to join The Venus Project or similar initiatives, contribute skills, and help shape a sustainable future. Relocation is welcome, and open to direct contact, video calls, and collaborative discussions.</p>
        <p class="mb-4 text-lg">If you are part of The Venus Project, the Fresco Foundation, or a like-minded community, let's connect and explore how to work together.</p>
        <div class="mt-4 flex flex-col justify-center gap-4 md:flex-row">
          <a href="mailto:dracorisz@outlook.com" class="rounded-lg bg-blue-700 px-6 py-3 text-center font-bold text-white shadow-lg transition-all duration-300 hover:bg-blue-500">Email Me</a>
          <a href="https://wa.me/38169698442" target="_blank" class="flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-center font-bold text-white shadow-lg transition-all duration-300 hover:bg-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 inline h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.372.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.455 4.436-9.89 9.893-9.89 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.896 6.994c-.003 5.456-4.438 9.891-9.893 9.891zm8.413-18.306A11.815 11.815 0 0012.05 0C5.495 0 .06 5.435.058 12.086c0 2.13.557 4.213 1.615 6.044L0 24l6.064-1.591a11.876 11.876 0 005.983 1.527h.005c6.554 0 11.89-5.435 11.893-12.086a11.82 11.82 0 00-3.49-8.463z" /></svg>
            WhatsApp Me
          </a>
        </div>
        <p class="mt-4 text-sm text-gray-400">I am open to interviews, video meetings, and collaborative planning. Let's connect and make a real impact together.</p>
        <div class="mt-8 text-lg font-semibold text-green-200">
          <span class="inline-block rounded-lg bg-green-900/80 px-4 py-2 shadow">Ready to take action and join a global movement for a better world. Let's build the future together!</span>
        </div>
      </div>
    </section>

    <!-- Contact & Relocation Section -->
    <section class="animate-fade-in-up mb-16 rounded-xl bg-gradient-to-br from-green-900/80 to-gray-900/80 px-8 py-8 shadow-lg" id="contact-relocation">
      <h2 class="mb-4 text-3xl font-bold text-green-300">Connect & Help Me Relocate</h2>
      <p class="mb-4 text-lg">I am open to opportunities and collaborations worldwide. If you can help me organize my life, relocate, or find a place where I can contribute and be of use—please reach out! I am ready to join projects, communities, or initiatives that align with the values of The Venus Project and the vision of a liberated, sustainable future.</p>
      <ul class="mb-4 ml-8 list-disc text-lg">
        <li>Assistance with relocation or remote work</li>
        <li>Invitations to join communities or projects</li>
        <li>Guidance for integrating into new environments</li>
        <li>Mentorship, networking, and support</li>
      </ul>
      <div class="mt-4 flex flex-col gap-4 md:flex-row">
        <a href="mailto:dracorisz@outlook.com" class="rounded-lg bg-blue-700 px-6 py-3 text-center font-bold text-white shadow-lg transition-all duration-300 hover:bg-blue-500">Contact Me</a>
        <a href="https://TVPOutpost.com/thevenusproject" target="_blank" class="rounded-lg bg-green-700 px-6 py-3 text-center font-bold text-white shadow-lg transition-all duration-300 hover:bg-green-500">See My Work</a>
      </div>
      <h2 class="my-5 cursor-pointer text-2xl font-bold text-blue-200" @click="toggleResume">Resume / CV <span v-if="!showResume">(Show)</span><span v-else>(Hide)</span></h2>
      <transition name="fade">
        <div v-if="showResume">
          <div class="mb-6 flex flex-col items-start gap-8 md:flex-row">
            <div class="flex h-40 w-40 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gray-700">
              <img v-if="myImage" :src="myImage" alt="My Photo" class="h-full w-full object-cover" />
              <span v-else class="text-center text-gray-400">Your Image Here</span>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-semibold">Profile</h3>
              <p class="mb-2 text-lg">Throughout my career, I have refined my expertise across various domains, mastering modern technologies, programming languages, and design trends to deliver high-quality digital experiences.</p>
              <ul class="mb-2 ml-8 list-disc text-lg">
                <li>
                  Current Location: Serbia
                  <span class="ml-2 inline-block rounded bg-emerald-500/70 px-3 py-1 text-sm font-semibold uppercase text-emerald-100">Aiming to Relocate </span>
                </li>
                <li>Birthday: January 17, 1989</li>
                <li>Horoscope: Capricorn</li>
                <li>
                  Chinese Zodiac: Earth Dragon <img src="/tvp/sad.png" alt="Earth Dragon" class="ml-1 inline h-6 w-6 align-middle" />
                  <span class="group relative ml-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" stroke-width="2" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 16v-4m0-4h.01" />
                    </svg>
                    <span class="pointer-events-none absolute left-1/2 z-50 mt-2 w-64 -translate-x-1/2 rounded bg-gray-900 p-2 text-xs text-blue-200 opacity-0 shadow-lg transition group-hover:opacity-100"> January 17, 1989, according to Chinese astrology, is the Year of the Earth Dragon which started February 17, 1988 in line with the Chinese New Year and ended the evening of February 5, 1989, giving way to the Earth Snake zodiac sign. </span>
                  </span>
                </li>
                <li>
                  Hourly Rate: $50 USD / Hour
                  <span class="ml-2 inline-block rounded bg-crypto-warning/20 px-3 py-1 text-sm font-semibold uppercase text-crypto-warning">Goal $0 Economy Leaving </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="mb-6">
            <h3 class="text-xl font-semibold">Technical Expertise</h3>
            <ul class="ml-8 list-disc text-lg">
              <li>Programming: PHP, HTML, CSS, JavaScript</li>
              <li>Frameworks: Laravel, TailwindCSS, Vue.js, Three.js, WordPress</li>
              <li>Database: MySQL, MariaDB, MySQL Workbench, phpMyAdmin</li>
              <li>Tools: AI, 3D, Blockchain, AWS, GitHub</li>
            </ul>
          </div>
          <div class="mb-6">
            <h3 class="text-xl font-semibold">Experience</h3>
            <ul class="ml-8 list-disc text-lg">
              <li>Lead Developer, SEYPRO (2021 - 2023): Lead developer for merj.exchange and book-seychelles.com</li>
              <li>IT Consultant, NTOS (2020 - 2021): Tech lead for odros.com, uniranks.com</li>
              <li>Joomla Developer, Xenovation (2018): Custom features for Gentry 5 Particles</li>
            </ul>
          </div>
          <div class="mb-6">
            <h3 class="text-xl font-semibold">Education & Certifications</h3>
            <ul class="ml-8 list-disc text-lg">
              <li>Bachelor of Computer Science, Serbia</li>
              <li>US English, Basic Numeracy, CSS, Data Entry, HTML, WordPress, Adobe Photoshop (Freelancer.com certified)</li>
            </ul>
          </div>
          <div class="mb-6">
            <h3 class="text-xl font-semibold">Portfolio Highlights</h3>
            <ul class="ml-8 list-disc text-lg">
                <li><span class="font-semibold">Design:</span> Book covers, Intuit folders, infographics, music album covers, brochures, and more</li>
                <li>
                <span class="font-semibold">Web Development:</span>
                <ul class="ml-6 list-disc">
                  <li>
                  <a href="https://merj.exchange" class="text-blue-400 underline" target="_blank">merj.exchange</a>
                  </li>
                  <li>
                  <a href="https://dev.book-seychelles.com" class="text-blue-400 underline" target="_blank">dev.book-seychelles.com</a>
                  </li>
                  <li><a href="https://sey-pro.com/cws-prev" class="text-blue-400 underline" target="_blank">sey-pro.com/cws-prev</a> <span class="text-gray-400">(CWS Project)</span></li>
                  <li><a href="https://TVPOutpost.com" class="text-blue-400 underline" target="_blank">TVPOutpost.com</a></li>
                  <li><a href="https://realmsz.com" class="text-blue-400 underline" target="_blank">realmsz.com</a></li>
                </ul>
                </li>
                <li>
                <span class="font-semibold">Freelancer Reviews: </span>
                <a href="https://www.freelancer.com/u/Dragoljub" class="text-blue-400 underline" target="_blank">freelancer.com/u/Dragoljub</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-semibold">Contact</h3>
            <p class="text-lg">Email: dracorisz@outlook.com | Portfolio: <a href="https://TVPOutpost.com/thevenusproject" class="text-blue-400 underline" target="_blank">TVPOutpost.com/thevenusproject</a></p>
          </div>
        </div>
      </transition>
    </section>

    <!-- Earth Day Sprites Section -->
    <section class="animate-fade-in-up mb-16 rounded-xl bg-gradient-to-br from-green-800/80 to-blue-900/80 px-0 py-8 shadow-lg md:px-8" id="earth-day-sprites">
      <h2 class="mb-4 text-center text-3xl font-bold text-green-300">Earth Day Celebration Sprites</h2>
      <div class="mx-auto w-full max-w-4xl">
        <swiper-container :slides-per-view="1" :space-between="0" :navigation="true" :pagination="{ clickable: true }" class="earthday-sprite-slider">
          <swiper-slide v-for="i in 6" :key="i">
            <div class="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-2xl bg-white shadow-2xl md:h-96">
              <img :src="earthDaySpriteUrl" :style="spriteSliderStyle(i)" class="h-full w-full object-cover" alt="Earth Day Sprite" />
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </section>

    <!-- TVP Pledge Section (NEW) -->
    <section class="animate-fade-in-up mb-16 rounded-xl border-4 border-yellow-400/40 bg-gradient-to-br from-yellow-400/20 to-blue-900/80 px-8 py-8 shadow-2xl" id="tvp-pledge">
      <h2 class="mb-6 flex items-center justify-center gap-2 text-center text-3xl font-bold text-yellow-300">
        The Venus Project Pledge
        <a href="https://www.thevenusproject.com/concepts/knowledge/approaches-responses/" target="_blank" rel="noopener" class="ml-2 inline-block align-middle" title="Official Approaches & Responses">
          <svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5 text-yellow-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 3h7m0 0v7m0-7L10 14m-4 0v7m0-7h7" /></svg>
        </a>
      </h2>
      <p class="mx-auto mb-6 max-w-2xl text-center text-lg text-yellow-100">By joining The Venus Project movement, I pledge to uphold and promote the following principles, inspired by TVP's official methodology and approaches:</p>
      <ul class="mx-auto mb-6 ml-8 max-w-3xl list-disc text-lg text-yellow-100">
        <li><b>Global Context:</b> Consider global risks, opportunities, and constraints in all actions.</li>
        <li><b>Local Constraints:</b> Adapt solutions to local conditions and systems.</li>
        <li><b>Layered Design:</b> Integrate multiple levels of functionality for resilience and stability.</li>
        <li><b>Parallel Development:</b> Encourage diverse solutions and learning in parallel.</li>
        <li><b>Biomimicry & Ecomimicry:</b> Learn from nature’s systems and processes.</li>
        <li><b>Fractal Scaling:</b> Design for scalable, adaptable, and robust systems.</li>
        <li><b>Vertical Integration:</b> Reduce reliance on outsourcing by integrating supply chain functions.</li>
        <li><b>Incremental Improvement:</b> Use short feedback loops for ongoing optimization.</li>
        <li><b>Minimal Starting Conditions:</b> Begin with a minimum viable system and grow responsibly.</li>
        <li><b>Science & Systems Thinking:</b> Make evidence-based, holistic, and interdisciplinary decisions.</li>
        <li><b>Ethics & Narrative:</b> Communicate with integrity and foster meaning through storytelling.</li>
      </ul>
      <div class="flex flex-col items-center gap-4">
        <label class="flex cursor-pointer items-center gap-2 text-lg font-semibold text-yellow-200">
          <input type="checkbox" class="form-checkbox h-5 w-5 text-yellow-400" v-model="pledgeChecked" />
          I commit to these principles and to advancing the vision of The Venus Project.
        </label>
        <span v-if="pledgeChecked" class="mt-2 animate-pulse font-bold text-green-300">Thank you for pledging your commitment!</span>
      </div>
      <div class="mt-6 text-center">
        <a href="https://www.thevenusproject.com/concepts/knowledge/approaches-responses/" target="_blank" rel="noopener" class="flex items-center justify-center gap-1 text-yellow-200 underline">
          Read the full Approaches & Responses on thevenusproject.com
          <svg xmlns="http://www.w3.org/2000/svg" class="inline h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 3h7m0 0v7m0-7L10 14m-4 0v7m0-7h7" /></svg>
        </a>
      </div>
    </section>

    <!-- Hidden Personal Commitment Section -->
    <section style="display: none" id="personal-commitment">
      <div class="flex flex-col items-center justify-center py-12">
        <img src="@/assets/czodiac5_4.png" alt="Dragon Zodiac" class="mb-4 h-32 w-32" />
        <img src="https://chinese.gratis/tools/horoscope/images/czodiac5.gif" alt="Chinese Dragon Zodiac" class="mb-4 h-24 w-24" />
        <h2 class="mb-2 text-2xl font-bold text-yellow-400">A Personal Commitment</h2>
        <p class="mb-2 max-w-xl text-center text-gray-300">This section is a hidden dedication expressing my desire to commit my life to the work and vision of Jacque Fresco.</p>
        <div class="mb-2 w-full max-w-lg rounded-xl border border-yellow-500/30 bg-gray-900/80 p-6">
          <h3 class="mb-1 text-lg font-semibold text-yellow-300">Jacque Fresco</h3>
          <p class="mb-1 text-gray-400">Birthday: <span class="font-bold">March 16, 1916</span></p>
          <p class="mb-1 text-gray-400">Chinese Zodiac: <span class="font-bold">Fire Dragon</span> (Feb 4, 1916 – Jan 22, 1917)</p>
        </div>
        <div class="flex w-full max-w-lg items-center gap-3 rounded-xl border border-green-500/30 bg-gray-900/80 p-6">
          <img src="/tvp/sad.png" alt="Earth Dragon" class="h-10 w-10 rounded-full" />
          <div>
            <h3 class="mb-1 text-lg font-semibold text-green-300">Dragoljub</h3>
            <p class="mb-1 text-gray-400">Birthday: <span class="font-bold">January 17, 1989</span></p>
            <p class="mb-1 text-gray-400">Chinese Zodiac: <span class="font-bold">Earth Dragon</span> (Feb 17, 1988 – Feb 5, 1989)</p>
          </div>
        </div>
        <p class="mt-4 text-xs text-gray-500">This is a private, hidden section for personal inspiration and commitment.</p>
      </div>
    </section>
    <!-- Distinct Software Team Application Area -->
    <section class="animate-fade-in-up mb-16 rounded-xl border-4 border-blue-400 bg-gradient-to-br from-blue-900/80 to-gray-900/80 px-8 py-8 shadow-2xl" id="tvp-network-application">
      <h2 class="mb-4 text-center text-3xl font-bold text-blue-300">The Venus Project Network – Software Team Application</h2>
      <p class="mb-4 text-center text-lg text-blue-100">This section is dedicated to my application and commitment to join The Venus Project Network as a software developer and collaborator. All proposals, intentions, and related content are unified here for clarity and transparency.</p>
      <!-- ...existing application/proposal content... -->
    </section>
  </div>
</template>
<script setup>
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
<SeoHead
    title="The Venus Project | Vision, Solutions & Global Network"
    description="Explore The Venus Project’s vision for a sustainable future, our solutions to global challenges, and how you can join our worldwide network. Learn about our mission, history, and resource-based economy."
    keywords="The Venus Project, solutions, global network, resource-based economy, sustainability, mission, history, FAQ"
    image="/the-venus-project-circular-city.jpg"
    url="https://www.thevenusproject.com/venus-project"
    type="website"
    :schema="{
      '@context': 'https://schema.org',
      '@type': 'NGO',
      'name': 'The Venus Project',
      'url': 'https://www.thevenusproject.com/',
      'logo': '/the-venus-project-logo.png',
      'sameAs': [
        'https://www.facebook.com/TheVenusProjectGlobal',
        'https://twitter.com/TheVenusProject',
        'https://www.youtube.com/user/thevenusprojectmedia'
      ],
      'description': 'The Venus Project is a global initiative for a sustainable, resource-based future.'
    }"
  />
