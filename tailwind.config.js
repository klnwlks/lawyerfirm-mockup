/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "rbl": "#0a0908",
        "dnv": "#22333b",
        "alm": "#eae0d5",
        "khk": "#c6ac8f",
        "umb": "#5e503f",
      },

      fontFamily: {
        arapey: ['Arapey']
      }
    },
  },
  plugins: [],
};
