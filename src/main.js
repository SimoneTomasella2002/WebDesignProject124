import '@mdi/font/css/materialdesignicons.css'
// import "./assets/style/main.css";
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
    dark: false, // Modalità chiara predefinita
    colors: {
        background: '#F3EFD4', // Sfondo
        'background-variant': '#978E4F', // Sfondo leggermente più chiaro
        surface: '#E6E1C2', // Superficie leggermente più scura dello sfondo
        'surface-bright': '#E6E1C2', // Superficie leggermente più scura
        'surface-light': '#D9D2B4', // Superficie ancora più chiara
        'surface-variant': '#424242', // Grigio scuro per elementi contrastanti
        'on-surface-variant': '#FFFFFF', // Testo chiaro su elementi contrastanti
        primary: '#CC434D', // Colore primario
        'primary-darken-1': '#B0303A', // Versione leggermente più scura del primario
        secondary: '#338495', // Colore secondario
        'secondary-darken-1': '#2A6A7A', // Versione leggermente più scura del secondario
        error: '#B00020', // Rosso per errori
        info: '#2196F3', // Blu per informazioni
        success: '#4CAF50', // Verde per successo
        warning: '#FB8C00', // Giallo per avvertenze
        'button-text': '#6E662F', // Testo dei pulsanti
        'navigation-route': '#6E662F', // Colore delle rotte di navigazione
        'description-text': '#000000', // Colore del testo per le descrizioni
    },
    variables: {
        'border-color': '#978E4F', // Colore dei bordi
        'border-opacity': 1.0, // Opacità del bordo piena per migliore visibilità
        'high-emphasis-opacity': 0.87, // Opacità per elementi ad alta enfasi
        'medium-emphasis-opacity': 0.60, // Opacità per elementi a media enfasi
        'disabled-opacity': 0.38, // Opacità per elementi disabilitati
        'idle-opacity': 0.04, // Opacità per elementi inattivi
        'hover-opacity': 0.08, // Opacità hover leggermente aumentata
        'focus-opacity': 0.12, // Opacità per stato focus
        'selected-opacity': 0.16, // Opacità selected aumentata per maggiore visibilità
        'activated-opacity': 0.24, // Opacità activated aumentata per maggiore visibilità
        'pressed-opacity': 0.32, // Opacità pressed aumentata per maggiore visibilità
        'dragged-opacity': 0.08, // Opacità per stato dragged
        'theme-kbd': '#212529', // Colore per elementi di tastiera
        'theme-on-kbd': '#FFFFFF', // Colore del testo su elementi di tastiera
        'theme-code': '#F5F5F5', // Colore per codice
        'theme-on-code': '#000000', // Colore del testo su elementi di codice
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
    icons: {
        iconfont: 'mdi',
    },
})

createApp(App)
    .use(vuetify)
    .use(Router)
    .mount('#app')
