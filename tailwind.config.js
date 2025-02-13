/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        poppins100: ['Poppins-Thin'],
        poppins300: ['Poppins-Light'],
        poppins400: ['Poppins-Regular'],
        poppins500: ['Poppins-Medium'],
        poppins600: ['Poppins-SemiBold'],
        poppins700: ['Poppins-Bold'],
      },
      fontSize: {
        'very-tiny': '6px',
        tiny: '8px',
        'small-tiny': '10px',
        small: '12px',
        'small-medium': '14px',
        medium: '16px',
        'medium-extra': '18px',
        regular: '20px',
        'regular-extra': '22px',
        large: '24px',
        'extra-large': '48px',
      },
      colors: {
        color: {
          white: '#FFFFFF',
          black: '#000000',
          blue: '#0094A9',
          blue01: '#0094A9',
          blue02: '#0C879D',
          blue03: '#197890',
          blue04: '#266983',
          blue05: '#3D5F7A',
          blue06: '#4A5974',
          error: '#FA4B44',
          success: '#0E9B85',
          caution: '#ECC30B',
        },
      },
    },
  },
  plugins: [],
};
