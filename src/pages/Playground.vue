<template>
  <div class="relative flex h-screen !max-h-screen w-full flex-col overflow-x-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <!-- Animated Background -->
    <div class="bg-gradient-animated absolute inset-0 opacity-20"></div>
    <div class="absolute inset-0 bg-black/40">
      <div class="absolute left-10 top-10 h-72 w-72 animate-pulse rounded-full bg-white opacity-20 mix-blend-multiply blur-xl filter"></div>
      <div class="animation-delay-2000 absolute right-10 top-40 h-72 w-72 animate-pulse rounded-full bg-yellow-100 opacity-20 mix-blend-multiply blur-xl filter"></div>
      <div class="animation-delay-4000 absolute bottom-10 left-1/2 h-72 w-72 animate-pulse rounded-full bg-pink-100 opacity-20 mix-blend-multiply blur-xl filter"></div>
    </div>

    <!-- Compact Header -->
    <header id="quick-links-dropdown" class="relative z-10 flex items-center justify-between border-b border-white/10 p-5 backdrop-blur-sm">
      <div class="flex items-center gap-3">
        <img src="@/assets/images/icon2.png" alt="DUIMX Logo" class="h-12 w-12 rounded-full transition-transform group-hover:scale-[1.15] invert" />
        <div>
          <h1 class="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-lg font-bold text-transparent">Playground</h1>
          <p v-if="selectedElement" class="text-xs text-slate-400">{{ elements.find((el) => el.value === selectedElement)?.label || "Unknown Component" }}</p>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <!-- Quick Links Dropdown (group-hover) -->
        <div class="relative group z-[1100]">
          <button class="flex items-center gap-2 rounded-lg border border-purple-500/30 bg-slate-800/50 px-3 py-2 text-purple-200 backdrop-blur transition-all hover:bg-purple-500/20">
            <span class="text-sm">🔗</span>
            <span class="hidden text-xs sm:inline">Quick Links</span>
            <span class="text-xs transition-transform duration-200 group-hover:rotate-180">▼</span>
          </button>
          <div class="absolute right-0 top-full -mt-1 pt-2 w-72 rounded-lg border border-purple-500/30 bg-slate-800/95 backdrop-blur-xl shadow-2xl z-[1100] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all">
            <div class="p-2 z-[99999] relative">
              <h3 class="mb-2 px-2 text-xs font-semibold text-purple-300">External Resources</h3>
              <a href="https://dracoscopia.com" target="_blank" class="flex items-center gap-3 rounded-lg p-3 text-sm transition-all hover:bg-purple-500/20">
                <span class="text-lg">🌐</span>
                <div>
                  <div class="font-medium text-slate-200">Dracoscopia</div>
                  <div class="text-xs text-slate-400">dracoscopia.com</div>
                </div>
              </a>
              <a href="https://github.com/drazzardaq" target="_blank" class="flex items-center gap-3 rounded-lg p-3 text-sm transition-all hover:bg-purple-500/20">
                <span class="text-lg">⚡</span>
                <div>
                  <div class="font-medium text-slate-200">GitHub Profile</div>
                  <div class="text-xs text-slate-400">Open Source Projects</div>
                </div>
              </a>
              <a href="https://github.com/sponsors/drazzardaq" target="_blank" class="flex items-center gap-3 rounded-lg p-3 text-sm transition-all hover:bg-purple-500/20">
                <span class="text-lg">💖</span>
                <div>
                  <div class="font-medium text-slate-200">Sponsor</div>
                  <div class="text-xs text-slate-400">Support Development</div>
                </div>
              </a>
              <a href="https://websitedesignsnyc.com/realmsz" target="_blank" class="flex items-center gap-3 rounded-lg p-3 text-sm transition-all hover:bg-purple-500/20">
                <span class="text-lg">🧠</span>
                <div>
                  <div class="font-medium text-slate-200">Realmsz</div>
                  <div class="text-xs text-slate-400">Realmsz by DWWW</div>
                </div>
              </a>
              <a href="https://tvp-outpost.dfbdttx2t1x3o.amplifyapp.com/" target="_blank" class="flex items-center gap-3 rounded-lg p-3 text-sm transition-all hover:bg-purple-500/20">
                <span class="text-lg">🚀</span>
                <div>
                  <div class="font-medium text-slate-200">The Venus</div>
                  <div class="text-xs text-slate-400">Outpost Project</div>
                </div>
              </a>
              <div class="my-2 border-t border-purple-500/20"></div>
              <h3 class="mb-2 px-2 text-xs font-semibold text-purple-300">Project Pages</h3>
              <router-link to="/" class="flex items-center gap-3 rounded-lg p-3 text-sm transition-all hover:bg-purple-500/20">
                <span class="text-lg">📄</span>
                <div>
                  <div class="font-medium text-slate-200">Resume</div>
                  <div class="text-xs text-slate-400">Professional Profile</div>
                </div>
              </router-link>
              <router-link to="/planets" class="flex items-center gap-3 rounded-lg p-3 text-sm transition-all hover:bg-purple-500/20">
                <span class="text-lg">🪐</span>
                <div>
                  <div class="font-medium text-slate-200">Planets</div>
                  <div class="text-xs text-slate-400">Solar System Explorer</div>
                </div>
              </router-link>
              <router-link to="/outpostproposal" class="flex items-center gap-3 rounded-lg p-3 text-sm transition-all hover:bg-purple-500/20">
                <span class="text-lg">🏗️</span>
                <div>
                  <div class="font-medium text-slate-200">Outpost</div>
                  <div class="text-xs text-slate-400">Venus Project Initiative</div>
                </div>
              </router-link>
              
            </div>
          </div>
        </div>

        <!-- Actions Dropdown (group-hover) -->
        <div class="relative group z-[1100]">
          <button class="flex items-center gap-2 rounded-lg border border-purple-500/30 bg-slate-800/50 px-3 py-2 text-purple-200 backdrop-blur transition-all hover:bg-purple-500/20">
            <span class="text-sm">⚡</span>
            <span class="hidden text-xs sm:inline">Actions</span>
            <span class="text-xs transition-transform duration-200 group-hover:rotate-180">▼</span>
          </button>
          <div class="absolute right-0 top-full -mt-1 pt-2 w-72 rounded-lg border border-purple-500/30 bg-slate-800/95 backdrop-blur-xl shadow-2xl z-[1100] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all">
            <div class="p-2 z-[99999] relative">
              <h3 class="mb-2 px-2 text-xs font-semibold text-purple-300">Quick Actions</h3>
              <div class="grid grid-cols-2 gap-2">
                <button @click="resetAll" class="flex items-center gap-2 rounded-lg border border-slate-600/50 bg-slate-700/50 px-3 py-2 text-xs text-slate-200 transition-all hover:bg-slate-600/50">
                  <span>🔄</span>
                  Reset
                </button>
                <button @click="copyComponentCode" class="flex items-center gap-2 rounded-lg border border-slate-600/50 bg-slate-700/50 px-3 py-2 text-xs text-slate-200 transition-all hover:bg-slate-600/50">
                  <span>📋</span>
                  Copy
                </button>
                <button @click="toggleLiveEditor" class="flex items-center gap-2 rounded-lg border border-slate-600/50 bg-slate-700/50 px-3 py-2 text-xs text-slate-200 transition-all hover:bg-slate-600/50" :class="{ 'border-purple-500/30 bg-purple-500/20': showLiveEditor }">
                  <span>💻</span>
                  Code
                </button>
                <button @click="openPreviewInNewTab" class="flex items-center gap-2 rounded-lg border border-slate-600/50 bg-slate-700/50 px-3 py-2 text-xs text-slate-200 transition-all hover:bg-slate-600/50">
                  <span>🔗</span>
                  Preview
                </button>
                <button @click="importFromUiverse" class="col-span-2 flex items-center gap-2 rounded-lg border border-slate-600/50 bg-slate-700/50 px-3 py-2 text-xs text-slate-200 transition-all hover:bg-slate-600/50">
                  <span>🌌</span>
                  Import from Uiverse
                </button>
              </div>
            </div>
          </div>
        </div>

        <button @click="toggleDocsDrawer" class="rounded-lg border border-purple-500/30 bg-slate-800/50 px-2 py-2 text-purple-200 backdrop-blur transition-all hover:bg-purple-500/20" :class="{ 'bg-purple-500/20': showDocsDrawer }">📄</button>
      </div>
    </header>

    <!-- Main Content - Unified Layout -->
    <main class="relative z-0 flex min-h-0 flex-1 gap-4 overflow-hidden p-4">
      <!-- Left Sidebar: Component List & Controls -->
      <aside class="scrollbar-gutter-stable flex w-80 flex-col gap-4 overflow-hidden">
        <!-- Component Search & List -->
        <div class="scrollbar-gutter-stable flex flex-col rounded-xl border border-white/10 bg-slate-800/40 backdrop-blur-xl">
          <div class="border-b border-purple-500/20 p-4">
            <h3 class="mb-2 text-sm font-semibold text-purple-300">📦 Components</h3>
            <input v-model="searchQuery" placeholder="Search components..." class="w-full rounded-lg border border-purple-500/30 bg-slate-700/50 px-3 py-2 text-sm text-slate-200 focus:border-purple-400 focus:outline-none" />
          </div>
          <div class="scrollbar-gutter-stable max-h-64 flex-1 overflow-y-auto p-2">
            <div v-if="filteredElements.length === 0" class="flex flex-col items-center justify-center py-8 text-center">
              <span class="mb-2 text-2xl">🔍</span>
              <p class="text-sm text-slate-400">No components found</p>
              <p class="text-xs text-slate-500">Try a different search term</p>
            </div>
            <div v-for="el in filteredElements" :key="el.value" class="group relative flex cursor-pointer items-center gap-3 rounded-lg p-3 text-sm transition-all hover:bg-purple-500/10" :class="{ 'border border-purple-500/30 bg-purple-500/20': selectedElement === el.value }" @click="selectElement(el.value)">
              <div class="flex h-8 w-8 items-center justify-center rounded-lg border border-purple-500/30 bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                <span class="text-xs">{{ el.icon || "🧩" }}</span>
              </div>
              <div class="min-w-0 flex-1">
                <p class="truncate text-xs font-medium text-purple-50">{{ el.label }}</p>
                <p v-if="el.description" class="truncate text-xs text-slate-400">{{ el.description }}</p>
              </div>
              <div class="flex items-center gap-1">
                <span v-if="el.hasDocs" class="text-xs text-purple-400" title="Has Documentation">📄</span>
                <span v-if="el.isNew" class="text-xs text-green-400" title="New Component">✨</span>
                <span v-if="selectedElement === el.value" class="text-xs text-purple-300">✓</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Live Controls -->
        <div class="scrollbar-gutter-stable flex-1 overflow-auto">
          <UnifiedControls :theme="theme" :primary-color="primaryColor" :font-family="fontFamily" :roundness="roundness" :width="width" :height="height" :padding="padding" :margin="margin" :bg-color="bgColor" :text-color="textColor" :box-shadow="boxShadow" :border-width="borderWidth" :animation="animation" :animation-speed="animationSpeed" :shadow-color="shadowColor" :shadow-intensity="shadowIntensity" :glow-color="glowColor" :glow-intensity="glowIntensity" :blur-amount="blurAmount" :opacity="opacity" :export-format="exportFormat" :preview-bg="previewBg" :copied="copiedFeedback" :show-export-controls="true" :show-live-code="false" :relevant-controls="getRelevantControls" :component-specific-props="getComponentSpecificProps" :selected-component="selectedElement" @update:theme="theme = $event" @update:primary-color="primaryColor = $event" @update:font-family="fontFamily = $event" @update:roundness="roundness = $event" @update:width="width = $event" @update:height="height = $event" @update:padding="padding = $event" @update:margin="margin = $event" @update:bg-color="bgColor = $event" @update:text-color="textColor = $event" @update:box-shadow="boxShadow = $event" @update:border-width="borderWidth = $event" @update:animation="animation = $event" @update:animation-speed="animationSpeed = $event" @update:shadow-color="shadowColor = $event" @update:shadow-intensity="shadowIntensity = $event" @update:glow-color="glowColor = $event" @update:glow-intensity="glowIntensity = $event" @update:blur-amount="blurAmount = $event" @update:opacity="opacity = $event" @update:export-format="exportFormat = $event" @update:preview-bg="previewBg = $event" @update:component-specific="updateComponentSpecific" @reset="resetAll" @toggle-preview="showExportPreview = !showExportPreview" @copy="copyComponentCode" />
        </div>
      </aside>

      <!-- Center: Component Preview with Collapsible Editor -->
      <div class="relative flex min-h-0 flex-1 flex-col">
        <!-- Preview Area -->
        <div class="min-h-0 flex-1 overflow-auto" :class="{ 'pb-20': !showLiveEditor, 'pb-4': showLiveEditor }">
          <div class="h-full min-h-[400px] rounded-xl border border-white/10 bg-slate-800/30 shadow-2xl backdrop-blur-xl" :style="previewBgStyle">
            <div class="flex h-full min-h-[300px] w-full items-center justify-center p-6">
              <!-- Featured Components Preview (when no selection) -->
              <div v-if="!selectedElement" class="w-full">
                <div class="mb-6 text-center">
                  <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                    <span class="text-2xl">🎨</span>
                  </div>
                  <h3 class="mb-2 text-lg font-bold text-slate-300">DUIMX Component Library</h3>
                  <p class="text-sm text-slate-400">Explore our featured components below, or select any component from the sidebar</p>
                </div>

                <!-- Featured Components Grid -->
                <div class="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
                  <!-- Featured Button -->
                  <div class="group relative">
                    <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl transition-all duration-300 group-hover:blur-2xl"></div>
                    <div class="relative cursor-pointer rounded-xl border border-white/10 bg-slate-800/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/40" @click="selectElement('DimButton')">
                      <div class="mb-4 text-center">
                        <h4 class="mb-2 text-sm font-semibold text-purple-300">Interactive Buttons</h4>
                        <div class="flex justify-center">
                          <DimButton :roundness="12" primaryColor="#6366f1" :width="140" :height="40" theme="dark" class="text-sm"> Click Me </DimButton>
                        </div>
                      </div>
                      <p class="text-center text-xs text-slate-400">Customizable buttons with hover effects, animations, and multiple variants</p>
                    </div>
                  </div>

                  <!-- Featured Card -->
                  <div class="group relative">
                    <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-xl transition-all duration-300 group-hover:blur-2xl"></div>
                    <div class="relative cursor-pointer rounded-xl border border-white/10 bg-slate-800/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40" @click="selectElement('DimCard')">
                      <div class="mb-4 text-center">
                        <h4 class="mb-2 text-sm font-semibold text-blue-300">Modern Cards</h4>
                        <div class="flex justify-center">
                          <div class="w-32 rounded-lg border border-blue-500/30 bg-slate-700/50 p-3 transition-transform hover:scale-105">
                            <div class="mb-2 h-2 w-full rounded bg-blue-500/40"></div>
                            <div class="mb-1 h-1 w-3/4 rounded bg-slate-500"></div>
                            <div class="h-1 w-1/2 rounded bg-slate-500"></div>
                          </div>
                        </div>
                      </div>
                      <p class="text-center text-xs text-slate-400">Glass morphism, neumorphic, and modern card layouts with smooth animations</p>
                    </div>
                  </div>

                  <!-- Featured Input -->
                  <div class="group relative">
                    <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-xl transition-all duration-300 group-hover:blur-2xl"></div>
                    <div class="relative cursor-pointer rounded-xl border border-white/10 bg-slate-800/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/40" @click="selectElement('DimSearchBar')">
                      <div class="mb-4 text-center">
                        <h4 class="mb-2 text-sm font-semibold text-emerald-300">Smart Inputs</h4>
                        <div class="flex justify-center">
                          <div class="flex w-36 items-center gap-2 rounded-lg border border-emerald-500/30 bg-slate-700/50 px-3 py-2">
                            <span class="text-emerald-400">🔍</span>
                            <div class="h-1 flex-1 rounded bg-slate-500"></div>
                          </div>
                        </div>
                      </div>
                      <p class="text-center text-xs text-slate-400">Advanced search bars, AI prompts, sliders, and interactive form components</p>
                    </div>
                  </div>
                </div>

                <!-- Quick Stats -->
                <div class="mt-8 flex justify-center gap-8 text-center">
                  <div>
                    <div class="text-lg font-bold text-purple-400">{{ elements.filter((el) => el.category !== "Future").length }}</div>
                    <div class="text-xs text-slate-500">Components</div>
                  </div>
                  <div>
                    <div class="text-lg font-bold text-blue-400">∞</div>
                    <div class="text-xs text-slate-500">Variants</div>
                  </div>
                  <div>
                    <div class="text-lg font-bold text-emerald-400">100%</div>
                    <div class="text-xs text-slate-500">Customizable</div>
                  </div>
                </div>
              </div>
              <!-- Component Display -->
              <div v-else class="relative flex w-full items-center justify-center">
                <!-- Component Info Overlay -->
                <div v-if="selectedElement" class="absolute left-4 top-4 z-10 rounded-lg bg-black/70 px-3 py-2 backdrop-blur-sm">
                  <div class="font-mono text-xs text-white/80">{{ selectedElement }}</div>
                  <div class="font-mono text-xs text-purple-400">v0.0.1</div>
                </div>

                <component v-if="liveComponent && isEditingCode" :is="liveComponent" class="max-w-full" />
                <component v-else-if="selectedComponent" :is="selectedComponent" v-bind="componentProps" class="max-w-full" />
                <div v-else class="text-center text-slate-400">
                  <span class="mb-2 block text-4xl">⚠️</span>
                  Component not found
                </div>
              </div>
            </div>
            <div v-if="codeError" class="mx-6 mb-6 rounded border border-red-500/30 bg-red-900/20 p-3 text-sm text-red-400">
              {{ codeError }}
            </div>
          </div>
        </div>

        <!-- Collapsible Live Code Editor -->
        <div
          v-if="selectedElement"
          class="bg-slate-900/98 absolute bottom-0 left-0 right-0 z-20 rounded-t-xl border-t border-white/10 backdrop-blur-xl transition-all duration-500 ease-in-out"
          :class="{
            'h-16': !showLiveEditor,
            'h-[50vh]': showLiveEditor && !isLiveEditorExpanded,
            'h-[80vh]': isLiveEditorExpanded,
          }"
          @mouseenter="hoverEditor = true"
          @mouseleave="hoverEditor = false"
        >
          <!-- Collapse/Expand Handle -->
          <div class="flex cursor-pointer items-center justify-between border-b border-white/5 px-6 py-4 transition-all hover:bg-slate-800/30" @click="toggleLiveEditor">
            <div class="flex items-center gap-3">
              <div class="h-2 w-2 animate-pulse rounded-full bg-purple-400"></div>
              <span class="text-sm font-medium text-purple-300">Live Code Editor</span>
              <span v-if="!showLiveEditor" class="text-xs text-slate-400 transition-opacity duration-200" :class="{ 'opacity-100': hoverEditor, 'opacity-50': !hoverEditor }">
                {{ hoverEditor ? "👆 Click to pin open • 👁️ Hover preview active" : "Click to expand or hover to preview" }}
              </span>
            </div>
            <div class="flex items-center gap-2">
              <span class="rounded-full bg-slate-800/50 px-2 py-1 text-xs text-slate-500">{{ selectedElement }}</span>
              <svg class="h-4 w-4 text-purple-300 transition-transform duration-200" :class="{ 'rotate-180': showLiveEditor }" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </div>
          </div>

          <!-- Live Code Editor Content -->
          <div v-show="showLiveEditor" class="h-full overflow-hidden">
            <LiveCodeEditor :componentName="selectedElement" :initialTemplate="componentTemplate" :initialStyle="componentStyle" :initialScript="componentScript" :isVisible="showLiveEditor" @codeChange="handleCodeChange" @toggleFullscreen="handleLiveEditorFullscreen" />
          </div>
        </div>

        <!-- Hover Preview from Bottom (when collapsed) -->
        <div v-if="selectedElement && !showLiveEditor && hoverEditor" class="bg-slate-900/98 absolute bottom-16 left-0 right-0 z-30 h-80 transform rounded-t-xl border-t border-white/10 shadow-2xl backdrop-blur-xl transition-all duration-200 ease-out" @mouseenter="hoverEditor = true" @mouseleave="hoverEditor = false">
          <div class="h-full overflow-hidden p-4">
            <div class="mb-2 flex items-center justify-between border-b border-purple-500/20 pb-2">
              <span class="text-xs font-medium text-purple-300">👁️ Preview Mode - Click handle below to pin open</span>
              <button
                @click="
                  showLiveEditor = true;
                  hoverEditor = false;
                "
                class="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-400 transition-all hover:bg-purple-500/20 hover:text-purple-300"
              >
                📌 Pin Open
              </button>
            </div>
            <div class="h-full overflow-hidden">
              <LiveCodeEditor :componentName="selectedElement" :initialTemplate="componentTemplate" :initialStyle="componentStyle" :initialScript="componentScript" :isVisible="true" @codeChange="handleCodeChange" @toggleFullscreen="handleLiveEditorFullscreen" />
            </div>
          </div>
        </div>

        <!-- Export Code Preview -->
        <div v-if="showExportPreview && selectedElement" class="absolute right-4 top-4 z-10 max-w-md rounded-xl border border-white/10 bg-slate-800/95 backdrop-blur-xl">
          <div class="flex items-center justify-between border-b border-purple-500/20 p-4">
            <h3 class="text-sm font-semibold text-purple-300">{{ exportFormat.toUpperCase() }} Export Preview</h3>
            <button @click="showExportPreview = false" class="text-slate-400 hover:text-purple-300">✕</button>
          </div>
          <div class="p-4">
            <pre class="max-h-64 overflow-x-auto rounded-lg bg-slate-900/50 p-3 font-mono text-xs text-slate-300"><code>{{ generateFullComponentCode(exportFormat) }}</code></pre>
            <div class="mt-3 flex gap-2">
              <button @click="copyComponentCode" class="rounded bg-purple-500 px-3 py-1 text-xs text-white transition-colors hover:bg-purple-600">
                {{ copiedFeedback ? "✓ Copied!" : "Copy Code" }}
              </button>
              <button v-if="exportFormat === 'html'" @click="openPreviewInNewTab" class="rounded bg-blue-500 px-3 py-1 text-xs text-white transition-colors hover:bg-blue-600">Open in New Tab</button>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Documentation Drawer - Left Overlay -->
    <div v-if="showDocsDrawer" class="fixed inset-0 z-50 flex">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="toggleDocsDrawer"></div>

      <!-- Drawer Content -->
      <div class="docs-drawer left-overlay docs-content custom-scrollbar w-60vw md:w-60vw max-w-4xl overflow-y-auto">
        <div class="sticky top-0 flex items-center justify-between border-b border-purple-500/20 bg-slate-900/95 p-4 backdrop-blur-xl">
          <div class="flex items-center gap-2">
            <span class="text-purple-400">📄</span>
            <h3 class="font-semibold text-purple-300">{{ selectedElement || "Component" }} Documentation</h3>
          </div>
          <button @click="toggleDocsDrawer" class="rounded-lg p-2 text-slate-400 transition-all hover:bg-slate-800/50 hover:text-purple-300">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="p-6">
          <!-- Documentation Content -->
          <div v-if="selectedElement" class="prose prose-sm prose-purple max-w-none space-y-6 text-slate-300">
            <div v-html="markdownToHtml(docsContent)"></div>

            <!-- Component Variants Section -->
            <div v-if="componentVariants.length > 0 || loadingVariants" class="border-t border-slate-700 pt-6">
              <h3 class="mb-4 flex items-center gap-2 text-purple-300">
                <span>🎨</span>
                Variants from Uiverse.io
              </h3>

              <!-- Loading State -->
              <div v-if="loadingVariants" class="flex items-center gap-2 text-slate-400">
                <div class="h-4 w-4 animate-spin rounded-full border-2 border-purple-500/30 border-t-purple-500"></div>
                Loading variants...
              </div>

              <!-- Variants Grid -->
              <div v-else class="grid gap-4">
                <div v-for="variant in componentVariants" :key="variant.name" class="component-card rounded-lg p-4">
                  <h4 class="mb-2 font-semibold text-slate-200">{{ variant.name }}</h4>
                  <pre class="overflow-x-auto rounded border border-slate-600 bg-slate-900/80 p-3 text-xs"><code>{{ variant.code }}</code></pre>
                  <button @click="copyVariantCode(variant.code)" class="mt-2 rounded bg-purple-600/20 px-3 py-1 text-xs text-purple-300 transition-all hover:bg-purple-600/30">Copy Code</button>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="py-12 text-center text-slate-500">
            <span class="mb-4 block text-4xl">📄</span>
            <p>Select a component to view its documentation</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Uiverse Import Modal -->
    <div v-if="showUiverseModal" class="fixed inset-0 z-[60] flex items-center justify-center">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="showUiverseModal = false"></div>

      <!-- Modal Content -->
      <div class="relative z-10 mx-4 max-h-[90vh] w-full max-w-4xl">
        <div class="overflow-hidden rounded-2xl border border-purple-500/30 bg-slate-900/95 shadow-2xl backdrop-blur-xl">
          <!-- Modal Header -->
          <div class="flex items-center justify-between border-b border-purple-500/20 p-4">
            <h3 class="flex items-center gap-2 text-lg font-semibold text-purple-300">
              <span>🌌</span>
              Import from Uiverse.io
            </h3>
            <button @click="showUiverseModal = false" class="text-slate-400 transition-colors hover:text-purple-300">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- UiverseBrowser Component -->
          <div class="max-h-[75vh] overflow-auto">
            <UiverseBrowser :selectedComponent="selectedElement?.replace('Dim', '').toLowerCase()" @variantSelected="handleVariantSelected" @variantImported="handleVariantImported" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineAsyncComponent, h, shallowRef, onMounted, onBeforeUnmount } from "vue";
import { useRoute, useRouter } from "vue-router";
import LiveCodeEditor from "@/components/LiveCodeEditor.vue";
import UnifiedControls from "@/components/UnifiedControls.vue";
import UiverseBrowser from "@/components/UiverseBrowser.vue";
import DimButton from "@/opensource/DimButton.vue";
import elements from "@/data/elements";
import componentControlConfigs from "@/data/componentControlConfigs";
import { getRelevantControlsMap, getComponentSpecificMap, getComponentDocTemplates, generateComponentDocs } from "@/data/playgroundMaps";

import "@/assets/css/playground.css";

const theme = ref("dark");
const systemVersion = ref("1.1.0"); // DUIMX system version
const showQuickLinks = ref(false); // Quick Links dropdown state

// Theme management with localStorage
const initializeTheme = () => {
  try {
    const savedTheme = localStorage.getItem("DUIMX-theme");
    if (savedTheme && ["light", "dark", "system"].includes(savedTheme)) {
      theme.value = savedTheme;
    } else if (savedTheme === "system") {
      // Check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      theme.value = prefersDark ? "dark" : "light";
    }

    // Apply theme to document
    applyThemeToDocument(theme.value);
  } catch (e) {
    console.warn("Failed to load theme from localStorage:", e);
    theme.value = "dark"; // Fallback to dark theme
  }
};

const applyThemeToDocument = (currentTheme) => {
  document.documentElement.setAttribute("data-theme", currentTheme);

  // Update meta theme-color for mobile browsers
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute("content", currentTheme === "dark" ? "#0f172a" : "#ffffff");
  }
};

const saveThemeToStorage = (newTheme) => {
  try {
    localStorage.setItem("DUIMX-theme", newTheme);
  } catch (e) {
    console.warn("Failed to save theme to localStorage:", e);
  }
};

const selectedElement = ref("");
const showDocsDrawer = ref(false);
const showUiverseModal = ref(false);
const showLiveEditor = ref(false);
const isLiveEditorExpanded = ref(false);
const hoverEditor = ref(false);
const searchQuery = ref("");

// Component styling controls
const roundness = ref(12);
const primaryColor = ref("#6366f1");
const bgColor = ref("#ffffff");
const textColor = ref("#22292f");
const fontFamily = ref("inherit");
const width = ref(400);
const height = ref(120);
const padding = ref(16);
const margin = ref(8);
const boxShadow = ref("md");
const borderWidth = ref(1.5);
const animation = ref("none");
const animationSpeed = ref("normal");
const shadowColor = ref("#000000");
const shadowIntensity = ref(1);
const glowColor = ref("#6366f1");
const glowIntensity = ref(0);
const blurAmount = ref(0);
const opacity = ref(1);
const previewBg = ref("dark");

// Live code editing state
const componentTemplate = ref("");
const componentStyle = ref("");
const componentScript = ref("");
const isEditingCode = ref(false);
const liveComponent = shallowRef(null);
const codeError = ref("");
const exportFormat = ref("vue"); // vue, html, css, tailwind
const copiedFeedback = ref(false);
const showExportPreview = ref(false);

// Documentation and variants system
const docsContent = ref("");
const componentVariants = ref([]);
const loadingVariants = ref(false);
const selectedVariant = ref(null);

// Component-specific values storage
const componentSpecificValues = ref({});

// Computed properties
const filteredElements = computed(() => {
  const q = searchQuery.value.trim().toLowerCase();
  if (!q) return elements;
  return elements.filter((el) => el.label.toLowerCase().includes(q) || el.value.toLowerCase().includes(q));
});

const getRelevantControls = computed(() => {
  if (!selectedElement.value) return [];
  return getRelevantControlsMap[selectedElement.value] || getRelevantControlsMap["default"];
});

const getComponentSpecificProps = computed(() => {
  if (!selectedElement.value) return {};
  return getComponentSpecificMap[selectedElement.value]?.(componentSpecificValues.value) || {};
});

// Add a list of valid variants for DimButton (must match DimButton.vue validator exactly)
const dimButtonValidVariants = [
  // Core variants
  "primary",
  "secondary",
  "outline",
  "ghost",
  "glass",
  "solid",
  "link",
  // Status variants
  "danger",
  "success",
  "warning",
  // Advanced variants
  "gradient",
  "glassmorphic",
  "neon",
  "neumorphic",
  "animated",
  "hover-effects",
  "ripple",
  "glow",
  "shadow",
  "minimal",
  "retro",
];

// Utility to sanitize variant for DimButton
function sanitizeDimButtonVariant(variant) {
  if (dimButtonValidVariants.includes(variant)) return variant;
  return "primary"; // fallback to default (matches DimButton.vue default)
}

// Enhanced componentProps with proper priority: global > component-specific > imported
const componentProps = computed(() => {
  // Base global props (highest priority)
  const globalProps = {
    roundness: roundness.value,
    primaryColor: primaryColor.value,
    bgColor: bgColor.value,
    textColor: textColor.value,
    fontFamily: fontFamily.value,
    width: width.value,
    height: height.value,
    padding: padding.value,
    margin: margin.value,
    theme: theme.value,
    boxShadow: boxShadow.value,
    borderWidth: borderWidth.value,
    animation: animation.value,
    animationSpeed: animationSpeed.value,
    shadowColor: shadowColor.value,
    shadowIntensity: shadowIntensity.value,
    glowColor: glowColor.value,
    glowIntensity: glowIntensity.value,
    blurAmount: blurAmount.value,
    opacity: opacity.value,
  };

  // Component-specific props (medium priority)
  const componentSpecific = getComponentSpecificProps.value;

  // Imported props (lowest priority)
  const importedProps = {
    importedStyles: componentSpecific.importedStyles || {},
    importedVariant: componentSpecific.importedVariant,
  };

  // Apply priority merging: imported < component-specific < global
  let mergedProps = {
    ...importedProps,
    ...componentSpecific,
    ...globalProps,
  };

  // Component-specific handling
  if (selectedElement.value === "DimButton") {
    // Ensure only valid variant is passed
    const variant = sanitizeDimButtonVariant(mergedProps.variant || "primary");

    // Use imported colors if no component-specific or global override
    const effectivePrimaryColor = globalProps.primaryColor !== "#6366f1" ? globalProps.primaryColor : componentSpecific.importedPrimaryColor || globalProps.primaryColor;

    return {
      ...mergedProps,
      variant,
      primaryColor: effectivePrimaryColor,
      // Ensure proper prop names for DimButton
      text: mergedProps.label || mergedProps.text || "Click Me",
      label: mergedProps.label || "Click Me",
      fontSize: mergedProps.fontSize || 14,
      buttonWidth: mergedProps.buttonWidth,
      buttonHeight: mergedProps.buttonHeight,
      gradientFrom: mergedProps.gradientFrom || "#6366f1",
      gradientTo: mergedProps.gradientTo || "#8b5cf6",
      gradientDirection: mergedProps.gradientDirection || "135deg",
      fontWeight: mergedProps.fontWeight || "medium",
      icon: mergedProps.icon || "",
      iconPosition: mergedProps.iconPosition || "left",
      fullWidth: mergedProps.fullWidth || false,
      disabled: mergedProps.disabled || false,
      loading: mergedProps.loading || false,
      size: mergedProps.size || "md",
    };
  }

  if (selectedElement.value === "DimModal") {
    return {
      ...mergedProps,
      isOpen: true,
      title: "Modal Title",
      content: "Modal content goes here...",
      closeOnOverlay: false,
    };
  }

  return mergedProps;
});

// Router setup for deep linking
const route = useRoute();
const router = useRouter();

// Enhanced theme toggle with localStorage persistence
const toggleTheme = () => {
  const currentTheme = theme.value;
  let newTheme;

  // Cycle through: dark -> light -> system -> dark
  switch (currentTheme) {
    case "dark":
      newTheme = "light";
      break;
    case "light":
      newTheme = "system";
      break;
    case "system":
      newTheme = "dark";
      break;
    default:
      newTheme = "dark";
  }

  theme.value = newTheme;

  // If system theme, detect actual preference
  if (newTheme === "system") {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyThemeToDocument(prefersDark ? "dark" : "light");
  } else {
    applyThemeToDocument(newTheme);
  }

  saveThemeToStorage(newTheme);

  // Show toast notification
  showThemeToast(newTheme);
};

const showThemeToast = (newTheme) => {
  const themeNames = {
    dark: "🌙 Dark Mode",
    light: "☀️ Light Mode",
    system: "🖥️ System Theme",
  };

  // Create toast element
  const toast = document.createElement("div");
  toast.className = "fixed top-4 right-4 z-[100] bg-slate-800/90 backdrop-blur text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full";
  toast.textContent = `Switched to ${themeNames[newTheme]}`;

  document.body.appendChild(toast);

  // Animate in
  setTimeout(() => {
    toast.classList.remove("translate-x-full");
  }, 10);

  // Animate out and remove
  setTimeout(() => {
    toast.classList.add("translate-x-full");
    setTimeout(() => {
      if (document.body.contains(toast)) {
        document.body.removeChild(toast);
      }
    }, 300);
  }, 2000);
};

const showResetToast = () => {
  // Create a minimal toast element
  const toast = document.createElement("div");
  toast.className = "fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2 text-white shadow-lg transition-all";
  toast.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
    </svg>
    <span>Component reset to defaults</span>
  `;

  // Add to body and remove after animation
  document.body.appendChild(toast);

  // Animate in
  setTimeout(() => {
    toast.classList.add("opacity-0");
    setTimeout(() => toast.remove(), 300);
  }, 2000);
};

const toggleDocsDrawer = () => {
  showDocsDrawer.value = !showDocsDrawer.value;
  if (showDocsDrawer.value && selectedElement.value) {
    loadComponentDocs(selectedElement.value);
  }
};

// Add missing checkForUpdates function
const checkForUpdates = () => {
  // Simple update check notification
  const toast = document.createElement("div");
  toast.className = "fixed top-4 right-4 z-[100] bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300";
  toast.textContent = "✅ DUIMX Playground is up to date!";

  document.body.appendChild(toast);

  // Remove after 3 seconds
  setTimeout(() => {
    if (document.body.contains(toast)) {
      document.body.removeChild(toast);
    }
  }, 3000);
};

const toggleLiveEditor = () => {
  showLiveEditor.value = !showLiveEditor.value;
};

// Handle code changes from the live editor
const handleCodeChange = (codeData) => {
  if (codeData) {
    // Update component code state
    componentTemplate.value = codeData.template || "";
    componentStyle.value = codeData.style || "";
    componentScript.value = codeData.script || "";

    // Clear any previous errors
    codeError.value = "";

    // Trigger component update if needed
    if (codeData.full) {
      // Update the live component with new code
      try {
        // This would be where we'd compile and update the live component
        // For now, just store the code
        console.log("Code updated:", codeData);
      } catch (error) {
        codeError.value = error.message;
        console.error("Code compilation error:", error);
      }
    }
  }
};

// Handle fullscreen toggle for live editor
const handleLiveEditorFullscreen = (isFullscreen) => {
  isLiveEditorExpanded.value = isFullscreen;

  // Additional logic for fullscreen mode
  if (isFullscreen) {
    // Could add specific fullscreen styling or behavior here
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

// Select element and trigger necessary updates
const selectElement = (elementValue) => {
  selectedElement.value = elementValue;
  handleElementChange();
};

const handleElementChange = () => {
  updateQueryElement(selectedElement.value);
  loadComponentCode(selectedElement.value);

  // Initialize component-specific values with defaults when switching components
  if (selectedElement.value && componentControlConfigs[selectedElement.value]) {
    const defaultValues = {};
    const configs = componentControlConfigs[selectedElement.value];

    // Initialize each prop with its default value
    Object.keys(configs).forEach((propName) => {
      defaultValues[propName] = configs[propName].default;
    });

    componentSpecificValues.value = defaultValues;
  } else {
    componentSpecificValues.value = {};
  }

  // Load documentation if docs drawer is open
  if (showDocsDrawer.value && selectedElement.value) {
    loadComponentDocs(selectedElement.value);
  }
};

const updateQueryElement = (val) => {
  router.replace({ query: { ...route.query, element: val } });
};

const resetAll = () => {
  // Performance monitoring for reset operation
  const resetStart = performance.now();

  // Define default values for all DUIMX components
  const defaultValues = {
    // Core style defaults
    roundness: 12,
    primaryColor: "#6366f1",
    bgColor: selectedElement.value.includes("Dim") ? "#1e293b" : "#ffffff",
    textColor: selectedElement.value.includes("Dim") ? "#e2e8f0" : "#22292f",
    fontFamily: "inherit",
    width: 400,
    height: 120,
    padding: 16,
    margin: 8,
    boxShadow: "md",
    borderWidth: 1.5,

    // Effect defaults
    animation: "none",
    animationSpeed: "normal",
    shadowColor: "#000000",
    shadowIntensity: 1,
    glowColor: "#6366f1",
    glowIntensity: 0,
    blurAmount: 0,
    opacity: 1,
    previewBg: "dark",

    // Component type-specific defaults
    buttonDefaults: {
      size: "md",
      variant: "solid",
      disabled: false,
    },
    layoutDefaults: {
      variant: "default",
      hoverable: true,
    },
    dataDefaults: {
      animated: true,
      interactive: true,
    },
  };

  // Reset all control values to defaults
  roundness.value = defaultValues.roundness;
  primaryColor.value = defaultValues.primaryColor;
  bgColor.value = defaultValues.bgColor;
  textColor.value = defaultValues.textColor;
  fontFamily.value = defaultValues.fontFamily;
  width.value = defaultValues.width;
  height.value = defaultValues.height;
  padding.value = defaultValues.padding;
  margin.value = defaultValues.margin;
  boxShadow.value = defaultValues.boxShadow;
  borderWidth.value = defaultValues.borderWidth;
  animation.value = defaultValues.animation;
  animationSpeed.value = defaultValues.animationSpeed;
  shadowColor.value = defaultValues.shadowColor;
  shadowIntensity.value = defaultValues.shadowIntensity;
  glowColor.value = defaultValues.glowColor;
  glowIntensity.value = defaultValues.glowIntensity;
  blurAmount.value = defaultValues.blurAmount;
  opacity.value = defaultValues.opacity;
  previewBg.value = defaultValues.previewBg;

  // Reset editor state
  isEditingCode.value = false;
  codeError.value = "";
  showExportPreview.value = false;
  copiedFeedback.value = false;

  // Reset component-specific values based on current component
  componentSpecificValues.value = {};

  // Show UI feedback
  showResetToast();

  // Performance logging (dev mode only)
  if (import.meta.env.DEV) {
    const resetTime = performance.now() - resetStart;
    console.log(`🔄 Reset completed in ${resetTime.toFixed(2)}ms`);
    console.log(`Memory usage: ${(performance.memory?.usedJSHeapSize / 1048576).toFixed(2)}MB`);
  }
};

const copyComponentCode = async () => {
  if (!selectedElement.value) return;

  try {
    const fullCode = generateFullComponentCode(exportFormat.value);
    await navigator.clipboard.writeText(fullCode);

    // Show success feedback
    copiedFeedback.value = true;
    setTimeout(() => {
      copiedFeedback.value = false;
    }, 2000);

    console.log(`Copied ${exportFormat.value} code to clipboard!`);
  } catch (e) {
    console.error("Failed to copy code:", e);
  }
};

// Add missing copyVariantCode function
const copyVariantCode = async (code) => {
  try {
    await navigator.clipboard.writeText(code);

    // Show success toast
    const toast = document.createElement("div");
    toast.className = "fixed bottom-4 right-4 z-50 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg transition-all";
    toast.textContent = "✅ Variant code copied to clipboard!";

    document.body.appendChild(toast);
    setTimeout(() => {
      if (document.body.contains(toast)) {
        document.body.removeChild(toast);
      }
    }, 2000);
  } catch (e) {
    console.error("Failed to copy variant code:", e);
  }
};

const openPreviewInNewTab = () => {
  if (exportFormat.value === "html") {
    const htmlCode = generateFullComponentCode("html");
    const blob = new Blob([htmlCode], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
    // Clean up the blob URL after a short delay
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
};

// Load component source code for editing
const loadComponentCode = async (componentName) => {
  if (!componentName) {
    componentTemplate.value = "";
    componentStyle.value = "";
    componentScript.value = "";
    return;
  }

  try {
    // Try to fetch component source code (would need a backend endpoint)
    // For now, generate a basic template based on component props
    componentTemplate.value = generateComponentTemplate(componentName);
    componentStyle.value = generateComponentStyle(componentName);
    componentScript.value = generateComponentScript(componentName);
  } catch (e) {
    console.error("Error loading component code:", e);
    // Fallback to basic templates
    componentTemplate.value = `<div class="component-wrapper">
  <${componentName} v-bind="$props" />
</div>`;
    componentStyle.value = `.component-wrapper {
  /* Add custom styles here */
}`;
    componentScript.value = `export default {
  name: '${componentName}Live',
  props: {
    // Add props here
  }
}`;
  }
};

// Generate component templates
const generateComponentTemplate = (componentName) => {
  return `<${componentName}
  :roundness="${roundness.value}"
  :primaryColor="'${primaryColor.value}'"
  :bgColor="'${bgColor.value}'"
  :textColor="'${textColor.value}'"
  :fontFamily="'${fontFamily.value}'"
  :width="${width.value}"
  :height="${height.value}"
  :padding="${padding.value}"
  :margin="${margin.value}"
  :theme="'${theme.value}'"
  :boxShadow="'${boxShadow.value}'"
  :borderWidth="${borderWidth.value}"
  :animation="'${animation.value}'"
/>`;
};

const generateComponentStyle = (componentName) => {
  return `/* Custom styles for ${componentName} */
.${componentName.toLowerCase()} {
  border-radius: ${roundness.value}px;
  color: ${textColor.value};
  font-family: ${fontFamily.value};
}`;
};

const generateComponentScript = (componentName) => {
  return `import ${componentName} from '@/opensource/${componentName}.vue';

export default {
  name: '${componentName}Live',
  components: {
    ${componentName}
  },
  props: {
    roundness: { type: Number, default: ${roundness.value} },
    primaryColor: { type: String, default: '${primaryColor.value}' },
    bgColor: { type: String, default: '${bgColor.value}' },
    textColor: { type: String, default: '${textColor.value}' },
    fontFamily: { type: String, default: '${fontFamily.value}' },
    width: { type: Number, default: ${width.value} },
    height: { type: Number, default: ${height.value} },
    padding: { type: Number, default: ${padding.value} },
    margin: { type: Number, default: ${margin.value} },
    theme: { type: String, default: '${theme.value}' },
    boxShadow: { type: String, default: '${boxShadow.value}' },
    borderWidth: { type: Number, default: ${borderWidth.value} },
    animation: { type: String, default: '${animation.value}' }
  }
}`;
};

const generateFullComponentCode = (format = "vue") => {
  if (format === "html") {
    // HTML + Tailwind CSS format (like Uiverse.io)
    const cleanedStyle = componentStyle.value.replace(/`/g, "").replace(/\${[^}]*}/g, "");

    return `<!DOCTYPE html>
<html lang="en">



<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${selectedElement.value} Component</title>
    <script src="https://cdn.tailwindcss.com"><\\/script>
    <style>
        ${cleanedStyle}
        .component-container {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            font-family: 'Inter', sans-serif;
        }
    </style>
</head>
<body>
    <div class="component-container">
        ${componentTemplate.value}
    </div>
    
    <!-- Optional: Add interactivity -->
    <script>
        // Add your JavaScript here
        console.log('${selectedElement.value} component loaded');
    <\\/script>
</body>
</html>`;
  } else if (format === "css") {
    // Pure CSS without Vue-specific syntax
    const cleanCSS = componentStyle.value
      .replace(/`/g, "")
      .replace(/\${[^}]*}/g, "")
      .replace(/scoped/g, "");

    return `/* ${selectedElement.value} Component Styles */
/* Copy this CSS to your stylesheet */

${cleanCSS}

/* Base styles for the component */
.component-wrapper {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  box-sizing: border-box;
}

/* Optional: Animation keyframes */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

/* Usage: Add 'animate-fade-in' or 'animate-pulse' classes */`;
  } else if (format === "tailwind") {
    // Tailwind utility classes version
    return generateTailwindVersion();
  } else {
    // Default Vue SFC format
    return `<template>
  ${componentTemplate.value}
</template>

<script>
${componentScript.value}
<\\/script>

<style scoped>
${componentStyle.value}
</style>`;
  }
};

// Generate Tailwind utility-first version
const generateTailwindVersion = () => {
  // Convert color values to Tailwind classes
  const getPrimaryColorClass = () => {
    const color = primaryColor.value.toLowerCase();
    if (color.includes("#6366f1") || color.includes("indigo")) return "indigo";
    if (color.includes("#8b5cf6") || color.includes("violet")) return "violet";
    if (color.includes("#ec4899") || color.includes("pink")) return "pink";
    if (color.includes("#f59e0b") || color.includes("amber")) return "amber";
    if (color.includes("#10b981") || color.includes("emerald")) return "emerald";
    if (color.includes("#3b82f6") || color.includes("blue")) return "blue";
    return "indigo"; // default
  };

  const colorScheme = getPrimaryColorClass();
  const isDark = theme.value === "dark";

  const themeClasses = {
    bg: isDark ? "bg-gray-900" : `bg-${colorScheme}-50`,
    text: isDark ? "text-gray-100" : "text-gray-900",
    border: isDark ? `border-${colorScheme}-500/30` : `border-${colorScheme}-200`,
    hover: isDark ? `hover:bg-${colorScheme}-500/20` : `hover:bg-${colorScheme}-100`,
    accent: `bg-${colorScheme}-500`,
    accentText: "text-white",
  };

  const roundnessClass = roundness.value <= 2 ? "rounded-none" : roundness.value <= 4 ? "rounded-sm" : roundness.value <= 8 ? "rounded" : roundness.value <= 12 ? "rounded-md" : roundness.value <= 16 ? "rounded-lg" : roundness.value <= 24 ? "rounded-xl" : "rounded-2xl";

  const paddingClass = padding.value <= 4 ? "p-1" : padding.value <= 8 ? "p-2" : padding.value <= 12 ? "p-3" : padding.value <= 16 ? "p-4" : padding.value <= 20 ? "p-5" : padding.value <= 24 ? "p-6" : "p-8";

  const marginClass = margin.value <= 4 ? "m-1" : margin.value <= 8 ? "m-2" : margin.value <= 12 ? "m-3" : margin.value <= 16 ? "m-4" : margin.value <= 20 ? "m-5" : margin.value <= 24 ? "m-6" : "m-8";

  const componentName = selectedElement.value;

  // Generate component-specific Tailwind code
  let componentCode = "";

  if (componentName === "DimButton") {
    const buttonClasses = [roundnessClass, paddingClass, themeClasses.accent, themeClasses.accentText, "font-semibold", "transition-all", "duration-200", "transform", "hover:scale-105", `hover:bg-${colorScheme}-600`, "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", `focus:ring-${colorScheme}-500`].join(" ");

    componentCode = `<button class="${buttonClasses}">
  Click Me
</button>`;
  } else if (componentName === "DimCard") {
    const cardClasses = [roundnessClass, paddingClass, marginClass, themeClasses.bg, themeClasses.text, themeClasses.border, "border", "shadow-lg", "backdrop-blur-sm", "transition-all", "duration-300", "hover:shadow-xl", "hover:scale-[1.02]"].join(" ");

    componentCode = `<div class="${cardClasses}">
  <h3 class="text-lg font-bold mb-2">Card Title</h3>
  <p class="text-gray-600 dark:text-gray-400">Card content goes here...</p>
</div>`;
  } else if (componentName === "DimModal") {
    // For Vue SFC format, use the actual component
    if (format === "vue") {
      componentCode = `<DimModal 
  :isOpen="true"
  :roundness="${roundness.value}"
  primaryColor="${primaryColor.value}"
  bgColor="${bgColor.value}"
  textColor="${textColor.value}"
  fontFamily="${fontFamily.value}"
  :width="${width.value}"
  :height="${height.value}"
  :padding="${padding.value}"
  :margin="${margin.value}"
  theme="${theme.value}"
  title="Modal Title"
  content="Modal content goes here..."
  :closeOnOverlay="false"
/>`;
    } else {
      // For HTML/CSS format, generate static HTML
      const modalClasses = [roundnessClass, "p-6", themeClasses.bg, themeClasses.text, "shadow-2xl", "max-w-md", "w-full", "animate-in", "fade-in-0", "zoom-in-95"].join(" ");

      componentCode = `<div class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
  <div class="${modalClasses}">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-xl font-bold">Modal Title</h2>
      <button class="text-xl hover:opacity-70 transition-opacity">&times;</button>
    </div>
    <p class="mb-6">Modal content goes here...</p>
    <div class="flex gap-2 justify-end">
      <button class="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors">Cancel</button>
      <button class="px-4 py-2 bg-${colorScheme}-500 text-white ${roundnessClass} hover:bg-${colorScheme}-600 transition-colors">Confirm</button>
    </div>
  </div>
</div>`;
    }
  } else {
    // Default component
    const defaultClasses = [roundnessClass, paddingClass, marginClass, themeClasses.accent, themeClasses.accentText, "font-medium", "transition-all", "duration-200", "hover:scale-105", "shadow-lg", "backdrop-blur-sm"].join(" ");

    componentCode = `<div class="${defaultClasses}">
  ${componentName.replace("Dim", "")} Component
</div>`;
  }

  return `<!-- ${componentName} - Tailwind Version -->
${componentCode}

<!-- Tailwind CSS Setup -->
<!-- Add to your HTML head: -->
<!-- <script src="https://cdn.tailwindcss.com"><\\/script> -->
<!-- Or install via npm: npm install tailwindcss -->

<!-- Optional: Add custom Tailwind config -->
<!--
<script>
  tailwind.config = {
    theme: {
      extend: {
        animation: {
          'fade-in': 'fadeIn 0.3s ease-in-out',
          'slide-up': 'slideUp 0.3s ease-out',
        }
      }
    }
  }
<\\/script>
-->`;
};

// Documentation event handlers
const loadComponentDocs = async (componentName) => {
  docsContent.value = generateComponentDocs(componentName, componentControlConfigs, systemVersion.value);
  // Also load variants from uiverse
  if (!loadingVariants.value) {
    loadComponentVariants(componentName);
  }
};

// Import component from Uiverse.io
const importFromUiverse = async () => {
  if (!selectedElement.value) {
    showNotification("⚠️ Please select a component first", "warning");
    return;
  }

  // Open UiverseBrowser modal
  showUiverseModal.value = true;
};

// --- Enhanced Variant import handlers for UiverseBrowser with priority system ---
function handleVariantImported(variantData) {
  try {
    const { variant, vueComponent, category } = variantData;

    // Store imported styles in component-specific values with lowest priority
    const importedProps = {};

    // Update component template with imported code
    componentTemplate.value = vueComponent.template || variant.htmlCode;
    componentStyle.value = vueComponent.style || variant.cssCode;
    componentScript.value = vueComponent.script || "";

    // Extract and apply styles to component-specific values (lowest priority)
    if (variant.cssCode) {
      // Parse CSS for color values
      const colorMatches = variant.cssCode.match(/#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}/g);
      if (colorMatches && colorMatches.length > 0) {
        // Store as imported prop, don't override global primaryColor directly
        importedProps.importedPrimaryColor = colorMatches[0];
      }

      // Parse border-radius values
      const radiusMatch = variant.cssCode.match(/border-radius:\s*(\d+)px/);
      if (radiusMatch) {
        importedProps.importedRoundness = parseInt(radiusMatch[1]);
      }

      // Parse dimensions
      const widthMatch = variant.cssCode.match(/width:\s*(\d+)px/);
      const heightMatch = variant.cssCode.match(/height:\s*(\d+)px/);
      if (widthMatch) importedProps.buttonWidth = parseInt(widthMatch[1]);
      if (heightMatch) importedProps.buttonHeight = parseInt(heightMatch[1]);

      // Parse padding
      const paddingMatch = variant.cssCode.match(/padding:\s*(\d+)px/);
      if (paddingMatch) importedProps.importedPadding = parseInt(paddingMatch[1]);

      // Parse font-size
      const fontSizeMatch = variant.cssCode.match(/font-size:\s*(\d+)px/);
      if (fontSizeMatch) importedProps.fontSize = parseInt(fontSizeMatch[1]);

      // Store full imported styles for lowest priority merging
      importedProps.importedStyles = variant.cssCode;
    }

    // Extract variant from class names or style patterns
    if (variant.htmlCode) {
      // Try to detect variant from class names or patterns
      const html = variant.htmlCode.toLowerCase();
      if (html.includes("gradient") || html.includes("linear-gradient")) {
        importedProps.importedVariant = "gradient";
      } else if (html.includes("outline") || html.includes("border-2")) {
        importedProps.importedVariant = "outline";
      } else if (html.includes("ghost") || html.includes("bg-transparent")) {
        importedProps.importedVariant = "ghost";
      } else if (html.includes("glass") || html.includes("backdrop-blur")) {
        importedProps.importedVariant = "glassmorphic";
      } else if (html.includes("neon") || html.includes("glow")) {
        importedProps.importedVariant = "neon";
      } else if (html.includes("shadow")) {
        importedProps.importedVariant = "shadow";
      }
    }

    // Merge imported props into component-specific values (lowest priority)
    componentSpecificValues.value = {
      ...componentSpecificValues.value,
      ...importedProps,
    };

    // Update component template if available
    if (variant.htmlCode) {
      componentTemplate.value = variant.htmlCode;
      showLiveEditor.value = true;
    }

    // Close modal and show success notification
    showUiverseModal.value = false;
    showNotification(`✨ Imported "${variant.name}" successfully! Styles applied with proper priority.`, "success");

    console.log("Variant imported successfully with priority system:", { variant, importedProps });
  } catch (error) {
    console.error("Failed to import variant:", error);
    showNotification("❌ Failed to import variant", "error");
  }
}

function handleVariantSelected(variant) {
  try {
    // Load variant for preview
    selectedVariant.value = variant;

    // Update docs if available
    if (variant.description) {
      docsContent.value = `# ${variant.name}\n\n${variant.description}\n\nBy: ${variant.author}`;
    }

    console.log("Variant selected:", variant);
  } catch (error) {
    console.error("Failed to select variant:", error);
  }
}

// Add notification system
function showNotification(message, type = "info") {
  // Simple notification implementation
  const notification = document.createElement("div");
  notification.className = `fixed top-4 right-4 px-6 py-3 rounded-lg text-white z-[10000] transition-all transform translate-x-0 ${type === "success" ? "bg-green-500" : type === "error" ? "bg-red-500" : type === "warning" ? "bg-yellow-500" : "bg-blue-500"}`;
  notification.textContent = message;
  document.body.appendChild(notification);

  // Animate in
  requestAnimationFrame(() => {
    notification.style.transform = "translateX(0)";
  });

  // Remove after delay
  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Add missing updateComponentSpecific function
function updateComponentSpecific(newValues) {
  componentSpecificValues.value = {
    ...componentSpecificValues.value,
    ...newValues,
  };
}

// Add missing previewBgStyle computed property
const previewBgStyle = computed(() => {
  switch (previewBg.value) {
    case "grid":
      return {
        background: `repeating-linear-gradient(0deg, rgba(30,30,45,0.8), rgba(30,30,45,0.8) 24px, rgba(45,45,60,0.9) 24px, rgba(45,45,60,0.9) 48px), repeating-linear-gradient(90deg, rgba(30,30,45,0.8), rgba(30,30,45,0.8) 24px, rgba(45,45,60,0.9) 24px, rgba(45,45,60,0.9) 48px)`,
        backgroundSize: "48px 48px",
      };
    case "white":
      return {
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
      };
    case "gradient":
      return {
        background: "linear-gradient(135deg, rgba(129,140,248,0.2) 0%, rgba(244,114,182,0.2) 50%, rgba(34,197,94,0.2) 100%)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 8s ease infinite",
      };
    case "dots":
      return {
        background: "radial-gradient(circle, rgba(129,140,248,0.15) 1px, transparent 1px), radial-gradient(circle, rgba(244,114,182,0.15) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      };
    default:
      return {};
  }
});

// Add stub for loadComponentVariants
function loadComponentVariants(componentName) {
  // TODO: Implement variant loading from Uiverse or other sources
  componentVariants.value = [];
  loadingVariants.value = false;
}

// Add markdownToHtml utility (simple)
function markdownToHtml(md) {
  if (!md) return "";
  // Simple replacements for demo; use a real parser for production
  return md
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/\*\*(.*?)\*\*/gim, "<b>$1</b>")
    .replace(/\*(.*?)\*/gim, "<i>$1</i>")
    .replace(/`([^`]+)`/gim, "<code>$1</code>")
    .replace(/\n/g, "<br>");
}

// Add missing selectedComponent computed property
const selectedComponent = computed(() => {
  if (!selectedElement.value) return null;
  try {
    return defineAsyncComponent({
      loader: () => import(`@/opensource/${selectedElement.value}.vue`).catch(() => import("@/opensource/DimComingSoon.vue")),
      loadingComponent: h("div", { class: "flex items-center justify-center p-8 text-purple-300" }, [h("div", { class: "animate-spin mr-2 w-4 h-4 border-2 border-purple-500 border-t-transparent rounded-full" }), "Loading component..."]),
      errorComponent: h("div", { class: "flex items-center justify-center p-8 text-red-400 border border-red-500/30 rounded-lg" }, [h("span", { class: "mr-2" }, "⚠️"), `Failed to load ${selectedElement.value}`]),
      delay: 100,
      timeout: 5000,
    });
  } catch (e) {
    console.error("Error setting up component:", e);
    return null;
  }
});

// --- Lifecycle Hooks ---
// Initialize theme and setup on mount
const initializePlayground = () => {
  initializeTheme();

  if (route.query.element && elements.find((el) => el.value === route.query.element)) {
    selectedElement.value = route.query.element;
    handleElementChange();
  }

  if (window.matchMedia) {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", (e) => {
      if (theme.value === "system") {
        applyThemeToDocument(e.matches ? "dark" : "light");
      }
    });
  }
};

onMounted(() => {
  initializePlayground();
});
</script>

<style scoped>
/* Dropdown transition */
.dropdown-enter-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.dropdown-leave-active {
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}

.dropdown-enter-from {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}

.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-5px) scale(0.98);
}

.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>
