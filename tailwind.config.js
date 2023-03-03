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
      pinkish:'#f7dad9'

      
    },
      fontFamily:{
        burtons:'burtons'
      }
    },
  },
  plugins: [],
}