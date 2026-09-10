/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warmBase: '#FBF6EE',
        primary: '#D96C63',
        amber: '#E0A84A',
        clay: '#CDB4A4',
        cocoa: '#5B3E2B',
        neutralSoft: '#EDE2D6',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto'],
      },
      boxShadow: {
        'warm-md': '0 12px 30px rgba(189,160,146,0.10)',
        'warm-lg': '0 30px 60px rgba(189,160,146,0.12)',
      }
    },
  },
  plugins: [],
}
