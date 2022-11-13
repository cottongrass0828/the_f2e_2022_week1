/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3A4AD9',
        'primary-dark': '#3A4AD9',
        'primary-light': '#6473FF',
        secondary: '#F5963E',
        'secondary-dark': '#EC801C',
        'secondary-light': '#FFB672',
        gray: {
          900: '#202020',
          800: '#424242',
          700: '#606060',
          600: '#757576',
          500: '#9E9E9E',
          400: '#BCBCBD',
          300: '#E0E0E0',
          200: '#EEEEEE',
          100: '#F7F7F8',
          50: '#F9F9FA'
        }
      }
    }
  },
  plugins: []
}
