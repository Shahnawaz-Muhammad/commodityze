/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary': ' #d3d3d3',
      'secondary': '#fff',
    },
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      // serif: ['Montserrat', 'serif'],
    },
    backgroundImage: {
      carousel1: "url('/images/carousel-1.jpg')",
      carousel2: "url('/images/carousel-2.jpg')",
      carousel3: "url('/images/carousel-3.jpg')",
      carousel4: "url('/images/carousel-4.jpg')",
      contact: "url('/images/contact.jpg')",
    },
    extend: {
      colors: {
        //just add this below and your all other tailwind colors willwork
     ...colors
 }
    },
  },
  plugins: [],
}
