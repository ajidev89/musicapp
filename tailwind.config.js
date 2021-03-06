module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        mont: ['Montserrat']
      },
      fontSize: {
        'xxs': '.7rem'
      },
      transitionProperty: {
         'height': 'height',
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
