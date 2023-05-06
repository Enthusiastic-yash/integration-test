/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          'lightGray': '#D3D5D7',
          'lightWhite': '#F5F5F5',
          'lightBlack': '#150732',
          'lighGreen': '#BCED24',

          'blackText': '#0D0033',
          primary: '#1867C0',
          secondary: '#5CBBF6',
        },
      },
    },

  },
})      