module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  corePlugins: [],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')({ strategy: 'class' })],
}
