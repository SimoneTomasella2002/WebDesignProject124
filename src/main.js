import './assets/style/main.css'
import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { md3 } from 'vuetify/blueprints/md3'

// Components
import App from './App.vue'
import Router from './router/index'

const vuetify = createVuetify({
    components,
    directives,
    blueprint: md3,
})

createApp(App)
    .use(vuetify)
    .use(Router)
    .mount('#app')
