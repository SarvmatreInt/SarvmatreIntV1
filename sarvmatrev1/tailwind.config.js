/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      newsletter:'#EAF0CE'
    },
    height: {
        '72': '70vh',
      }
    },
    
  },
  plugins: [],
}