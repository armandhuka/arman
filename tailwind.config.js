/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        sm: '4px',
        md: '8px',
        lg: '12px',
      },
      colors: {
        light: {
          background: '#ffffff',
          text: '#1a1a1a',
        },
        dark: {
          background: '#262626',
          text: '#ffffff',
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'), // Add this plugin to enable backdrop filters
  ],
}
