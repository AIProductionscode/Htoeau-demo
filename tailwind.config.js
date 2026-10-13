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
          teal: '#005A60',
          'teal-dark': '#004247',
          'teal-deep': '#003337',
          cyan: '#00C5D7',
          'cyan-light': '#36D8E8',
          turquoise: '#0096A8',
          navy: '#10232F',
          'navy-dark': '#0B1720',
          'ice-blue': '#DCEEF2',
          'ice-light': '#EEF6F8',
          'off-white': '#F7F8F8',
          muted: '#627A82',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
