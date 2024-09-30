/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        mclaren: ['McLaren', 'sans-serif'],
        encode: ['Encode Sans Semi Condensed', 'sans-serif']
      }
    },
  },
  plugins: [],
}