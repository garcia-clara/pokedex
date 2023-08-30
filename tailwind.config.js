/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.tsx",
    "./src/**/*.tsx",
  ],
  theme: {
    fontFamily: {
      'pokemon' : ['Pokemon', 'consolas']
    },
    extend: {},
  },
  plugins: [],
}