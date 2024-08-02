/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        eudoxus: ['Eudoxus', 'sans-serif'],
      },
      colors: {
        green: '#95d524',       // Custom green color
        lightBlue: '#29c4f8',   // Custom light blue color
        darkBlue: '#04165d',    // Custom dark blue color
      },
    },
  },
  plugins: [],
}

