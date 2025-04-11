# Armor Home Solutions

A modern web application for Armor Home Solutions, built with Vue 3, Vite, and Inertia.js.

## Features

- Modern, responsive design
- Component-based architecture
- Smooth animations and transitions
- SEO-friendly
- Fast loading times
- Mobile-first approach

## Prerequisites

- Node.js (v16 or higher)
- npm or pnpm

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/armor-home-solutions.git
cd armor-home-solutions
```

2. Install dependencies:
```bash
# Using npm
npm install

# Using pnpm
pnpm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
VITE_APP_NAME="Armor Home Solutions"
VITE_APP_URL=http://localhost:3000
```

## Development

To start the development server:

```bash
# Using npm
npm run dev

# Using pnpm
pnpm dev
```

The application will be available at `http://localhost:3000`.

## Building for Production

To create a production build:

```bash
# Using npm
npm run build

# Using pnpm
pnpm build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── assets/          # Static assets (images, fonts, etc.)
├── components/      # Reusable Vue components
├── pages/          # Page components
├── router/         # Vue Router configuration
├── styles/         # Global styles and Tailwind configuration
└── utils/          # Utility functions
```

## Components

- `HeroSection.vue`: Reusable hero section component
- `ServiceCard.vue`: Card component for displaying services
- `TestimonialCard.vue`: Card component for displaying testimonials
- `CallToAction.vue`: Call-to-action section component

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 