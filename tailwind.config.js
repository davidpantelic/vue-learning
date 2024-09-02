/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        suse: ['SUSE', 'sans-serif']
      },
      colors: {
        'brand-black': '#081107',
        'brand-green': '#2cdd0d',
        'brand-yellow': '#f1fac0'
      }
    }
  },
  plugins: []
}
