/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '128': '10vh',
      },
      translate: {
        '4.25': '-50%',
      }
    },
  },
  plugins: [],
}

