import '@fortawesome/fontawesome-pro/css/all.min.css'
import '@fontsource/lora/400-italic.css'
import '../src/styles/base.css'


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
