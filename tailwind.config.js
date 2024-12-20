/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
          tab:{ max: "768px"},
          mob:{ max: "576px"},
      },
      fontFamily:{
        inter:[ "Inter", "sans-serif"],
        roboto:["Roboto", "sans-serif"],
        caveat:[ "Caveat", "sans-serif"],
      },
      colors:{
        white: '#ffffff',
        black: '#000000',
        dblack: '#1c1c1c',
        sblack: '#293141',
        gray: '#596738',
        dgray: '#9197a6',
        sgray: '#767c8f',

      }
    },
  },
  plugins: [],
}