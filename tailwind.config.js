/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'dark': '#252525',
      'Label': '#A3A09E',
      'deviders': '#D1CECC',
      'beighe': '#DFD3BC',
      'bcg_2': '#F5EBE9',
      'bcg': '#FFFAFA',
      'gray': '#2B2525',
      'gray_1': '#EBE6E6',
      'bhover': '#c1deba',
      'white': '#FFFFFF',
    },
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out'
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      },
    },
  },
  variants: {
    lineClamp: ['responsive', 'hover'],
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}