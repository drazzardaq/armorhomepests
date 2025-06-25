# TVP Application Development

## Overview
This project is a modern, modular web application for The Venus Project, built with Vue 3 and Vite. It features a component-based architecture, advanced styling with Tailwind CSS, PWA support, and integrations for blockchain, 3D, and interactive content.

### Main Pages & Content
- **Home / Overview**: Project introduction, ecosystem, features, roadmap, and community highlights.
- **Mission**: The Venus Project's mission, sustainability vision, and resource-based economy principles.
- **Solutions**: Detailed solutions for a sustainable future, including circular cities and technologies.
- **Research**: Scientific foundations and research supporting TVP proposals.
- **Partners & Partnership**: Official partners, partnership types, benefits, and contact options.
- **Projects**: Major TVP projects, proposals, and status (active, planning, completed).
- **Tokenomics**: Token structure, purpose, and blockchain integration.
- **TVP Planets**: Concepts for planetary habitats and sustainable infrastructure.
- **TVP History**: Timeline and legacy of The Venus Project.
- **TVP Advisors**: List of advisors and their expertise.
- **TVP Visit**: Tour booking and research center information.
- **Resume**: Personal commitment and alignment with TVP values.
- **Media**: Media resources and outreach.
- **NotFound**: Custom 404 page with navigation options.
- **Other**: Additional pages for proposals, relocation, resources, and more.

## Project Structure
- **src/**: Main source code
  - **components/**: Vue 3 UI components
  - **pages/**: Route-based page components
  - **assets/**: Images, data, and static assets
  - **router/**: Vue Router configuration
  - **composables/**, **contracts/**, **layouts/**: App logic, smart contracts, layouts
- **public/**: Static files (images, manifest, favicon, etc.)
- **dev-dist/**: Vite dev output
- **files/**, **images/**: Additional resources
- **Config files**: `vite.config.js`, `tailwind.config.js`, `postcss.config.js`, `package.json`, etc.

See `PROJECT_STRUCTURE_TECH_STYLES.md` for a detailed breakdown.

## Technology Stack
- **Vue 3** (Composition API)
- **Vite** (build tool)
- **Vue Router 4** (routing)
- **Tailwind CSS** (utility-first styling)
- **PWA**: Vite PWA plugin
- **GSAP, Swiper.js** (animation, sliders)
- **FontAwesome** (icons)
- **ethers.js** (blockchain)
- **three.js** (3D)
- **@vueuse/core, @headlessui/vue, @heroicons/vue** (UI/UX)
- **PostCSS** (for Tailwind, nesting, autoprefixer)

## Styles & Design
- Custom color palette (see `tailwind.config.js`)
- Gradients, glassy/frosted effects, responsive layouts
- Animations: fade-in, slide, pop-in, Swiper/GSAP
- Scoped styles in components

## Features
- PWA: installable, offline, manifest
- 3D/slider components
- Blockchain integration (tokenomics, proposals)
- SEO meta/schema via SeoHead
- Accessibility: semantic HTML, ARIA, keyboard nav

---
For more, see `PROJECT_STRUCTURE_TECH_STYLES.md`.