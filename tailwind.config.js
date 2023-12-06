/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-mobile': "url('../assets/coding-exam-assets (1)/hero/hero-mobile.jpg')",
        'hero-desktop': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}

