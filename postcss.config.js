// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   }
// }

module.exports = () => ({
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  log: console.log("PostCSS Watch")
})
