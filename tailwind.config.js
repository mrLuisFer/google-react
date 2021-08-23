module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      body: ['Open Sans', 'sans-serif'],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
