/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2172b9',
        'secondary-blue': '#3B82F6',
        'accent-blue': '#60A5FA',
        'dark-gray': '#1F2937',
        'light-gray': '#F3F4F6',
        'primary-green': '#059669',
        'secondary-green': '#10B981',
        'medium-gray': '#9CA3AF',
        'white': '#FFFFFF',
        'black': '#000000',
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 10px 15px rgba(0, 0, 0, 0.2)',
        'soft': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'medium': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'hard': '0 10px 15px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        'soft': '0.5rem',
        'medium': '0.75rem',
        'hard': '1rem',
      },
      transitionDuration: {
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      spacing: {
        '380px': '380px',
        '250px': '250px',
      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          aw: (value) => ({
            width: value,
            maxWidth: value,
            minWidth: value,
          }),
          ah: (value) => ({
            height: value,
            maxHeight: value,
            minHeight: value,
          }),
          as: (value) => ({
            width: value,
            maxWidth: value,
            minWidth: value,
            height: value,
            maxHeight: value,
            minHeight: value,
          }),
        },
        { values: theme("spacing") },
      );
    },
  ],
}