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
        primary: '#000f7d',
        secondary: '#f4f6fc',
        tertiary: '#050a30',
        quaternary: '#2d0085',
        quintary: '#7957BC',
        sextary: '#233dff',
        septenary: '#5B388A',
        octary: '#46326E',
        nonary: '#DCCAFF',
        decennial: '#5B48A4'
      },
    },
  },
  plugins: [],
};



