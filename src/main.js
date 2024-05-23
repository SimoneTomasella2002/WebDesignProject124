import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import "./assets/style/main.css";
import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Components
import App from './App.vue'
import Router from './router/index'

const myAccessibleTheme = {
    dark: true, // Modalità scura predefinita
    colors: {
        background: '#f3efd4', // Colore primario (chiaro)
        surface: '#e6e1c2', // Sfondo leggermente più scuro
        'surface-bright': '#e6e1c2', // Sfondo leggermente più scuro
        'surface-light': '#d9d2b4', // Sfondo ancora più chiaro
        'surface-variant': '#424242', // Grigio scuro per elementi contrastanti
        'on-surface-variant': '#EEEEEE', // Testo chiaro su elementi contrastanti
        primary: '#f3efd4', // Colore primario (chiaro)
        'primary-darken-1': '#e6e1c2', // Versione leggermente più scura del primario
        secondary: '#48A9A6', // Colore secondario
        'secondary-darken-1': '#018786', // Versione leggermente più scura del secondario
        error: '#B00020', // Rosso per errori
        info: '#2196F3', // Blu per informazioni
        success: '#4CAF50', // Verde per successo
        warning: '#FB8C00', // Giallo per avvertenze
    },
    variables: {
        'border-color': '#000000',
        'border-opacity': 0.12,
        'high-emphasis-opacity': 0.87,
        'medium-emphasis-opacity': 0.60,
        'disabled-opacity': 0.38,
        'idle-opacity': 0.04,
        'hover-opacity': 0.04,
        'focus-opacity': 0.12,
        'selected-opacity': 0.08,
        'activated-opacity': 0.12,
        'pressed-opacity': 0.12,
        'dragged-opacity': 0.08,
        'theme-kbd': '#212529',
        'theme-on-kbd': '#FFFFFF',
        'theme-code': '#F5F5F5',
        'theme-on-code': '#000000',
    }
}

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'myAccessibleTheme',
        themes: {
            myAccessibleTheme,
        },
    },
})

createApp(App)
    .use(vuetify)
    .use(Router)
    .mount('#app')
