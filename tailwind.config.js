/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
      back: '#1A120B',
      mid1:'#3C2A21',
      mid2:'#D5CEA3',
      fore: '#E5E5CB',
      pale:'#EDE0D4',
      earth:'#7F5539',
      mud:'#9C6644',
      sand:'#B08968',
      calm:'#DDB892',
      pinkish:'#f7dad9',
      some_gray:'#9D9D9D',
      light_bg:'#f6f6f2',
      light_accent:'#c2edce',
      light_accent2:'#badfe7',
      light_mid2:'#6fb3b8',
      light_front:'#388087',

      
    },
      fontFamily:{
        burtons:'burtons'
      }
    },
  },
  plugins: [],
}