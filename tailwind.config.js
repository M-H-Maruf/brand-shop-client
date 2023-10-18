/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'teko': ['Teko', 'sans-serif'],
      'mukta': ['Mukta', 'sans-serif'],
      'orbitron': ['Orbitron', 'sans-serif'],
    },
    extend: {
      colors: {
        "brand-primary": "#C9A482",
      },
    },
  },
  plugins: [require("daisyui")],
}

