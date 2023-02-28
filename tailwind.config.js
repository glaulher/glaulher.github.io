/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // colors: {
    //   // Configure your color palette here
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   nord: {
    //     header: '#3B4252',
    //     dark: '#292e39',
    //     font: '#eceff4',
    //     blue: '#5e81ac',
    //     red: '#bf616a',
    //     green: '#8fbcbb',
    //     yellow: '#ebcb8b',
    //     blight: '#88c0d0',
    //     orange: '#d08770',
    //   },
    // },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
