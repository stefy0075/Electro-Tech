/** @type {import('tailwindcss').Config} */
export default {
  variants: {
    extend: {
      scale: ['hover'],
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#31302E',
        secondary: '#ACDC54',
        tertiary: '#B2CFCD',
      },
    },
  },
  plugins: [],
};



