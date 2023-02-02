/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './recoil/*.{ts,js}',
    './recoil/**/*.{ts,js}',
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [],
}
