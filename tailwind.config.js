/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./dist/**/*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '128': '10vh',
      },
      translate: {
        '4.25': '-50%',
        '5.2': '-3px'
      }
    },
  },
  plugins: [],
}

