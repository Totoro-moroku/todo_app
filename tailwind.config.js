/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/recoil/*.{ts,js}',
    './src/recoil/**/*.{ts,js}',
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [],
}
