/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#dc2626', // Brand Red (Primary)
          black: '#0f172a', // Solid Black/Deep Slate
          white: '#ffffff', // Clean White
        },
        // Sendai Maquinas theme colors
        'brand-red': '#dc2626',
        'safety-orange': '#ea580c',
        'construction-green': '#16a34a',
        'deep-slate': '#0f172a',
      },
      boxShadow: {
        'lg-soft': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)',
      },
    },
  },
  plugins: [],
}
