/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        txtTitleBLK: '#374151',
        mainBlue: '#2FAE72',
        mainYellow: '#FC9918',
        greenPrimary: '#4DB850',
        greenSecondary: '#24AE94',
        orangePrimary: '#FC9918',
        redPrimary: '#E92A31',
        greenTertiary: '#44A44D',
        orangeSecondary: '#F58218',
      },
      clipPath: {
        polygon: 'polygon(0 0, 100% 10%, 100% 90%, 0 100%)',
      },
    },
  },
  plugins: [],
}
