/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  colors: {
    'rads': '#FB8053',
    'white': "#FFFFFF",
    'orange': '#F2994A',
    'grey': '#F2F4F7'
  },


  plugins: [require("daisyui"),

  ],

}

