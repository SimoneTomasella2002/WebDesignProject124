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

const vuetify = createVuetify({
    components,
    directives,
    iconsets,
})

createApp(App)
    .use(vuetify)
    .use(Router)
    .mount('#app')
