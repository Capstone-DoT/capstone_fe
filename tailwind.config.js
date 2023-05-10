/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'black' : '#1A1A1B',
        'gray-dark' : '#9CA3AF',
        'gray' : '#C5C6CC',
        'gray-light' : '#F7F7F7',
        'orange' : '#FFA12E'
      },
      fontFamily: {
        sans: ["NanumSquareNeo", "Poppins", "Arial", "sans-serif"]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
  require('flowbite/plugin')
  ]
}
