const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/*.tsx',
    './src/**/*.tsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['proxima-nova', 'sans-serif'],
      'serif': ['Lora'],
      'display': ['proxima-nova', 'sans-serif'],
      'body': ['proxima-nova', 'sans-serif'],
    },
    extend: {},
    colors: {
      // Build your palette here
      gray: colors.warmGray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      lightBlue: colors.lightBlue,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'group-focus'],
      borderColor: ['hover'],
      borderWidth: ['hover', 'focus'],
      boxShadow: ['active'],
      cursor: ['hover', 'focus'],
      ringColor: ['hover'],
      ringOffsetColor: ['hover'],
      ringOffsetWidth: ['hover'],
      ringOpacity: ['hover'],
      ringWidth: ['hover'],
      textColor: ['active'],
      transitionProperty: ['hover', 'focus'],
      translate: ['active']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
