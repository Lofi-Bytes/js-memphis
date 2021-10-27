module.exports = {
  content: [
    './src/*.tsx',
    './src/**/*.tsx',
  ],
  theme: {
    fontFamily: {
      'sans': ['proxima-nova', 'sans-serif'],
      'serif': ['Lora'],
      'display': ['proxima-nova', 'sans-serif'],
      'body': ['proxima-nova', 'sans-serif'],
    },
    extend: {}
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'group-focus'],
      borderColor: ['hover', 'group-focus'],
      borderWidth: ['hover', 'focus'],
      boxShadow: ['active'],
      cursor: ['hover', 'focus'],
      ringColor: ['hover', 'active'],
      ringOffsetColor: ['hover', 'active'],
      ringOffsetWidth: ['hover', 'active'],
      ringOpacity: ['hover', 'active'],
      ringWidth: ['hover', 'active'],
      textColor: ['active', 'group-focus'],
      transitionProperty: ['hover', 'focus'],
      translate: ['active']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
