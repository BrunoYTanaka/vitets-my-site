/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        sideBar: 'animateToLeft .2s ease-in-out'
      },
      keyframes: {
        animateToLeft: {
          '0%': {
            left: '-100%'
          },
          '100%': {
            left: 0
          }
        }
      }
    }
  },
  plugins: []
}
