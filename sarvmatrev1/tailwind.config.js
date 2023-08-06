/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      newsletter:'#EAF0CE',
      primary1:"#209089",
      primary2:"#209089",
    },
    height: {
        '72': '70vh',
      },
    fontFamily:{
      'comferta':['Comfortaa', 'cursive'],
      'poppins': ['Poppins','sans-serif']
    },
    screens: {
      xsm: "400px"
    }
    },
    
  },
  plugins: [],
}