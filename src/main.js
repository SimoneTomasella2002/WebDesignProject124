import "@mdi/font/css/materialdesignicons.css";
import "./assets/style/main.css";
import { createApp } from "vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Importa la configurazione del tema
import { myCustomTheme } from "./themeConfig.js";

// Components
import App from "./App.vue";
import Router from "./router/index";

// Inizializza Vuetify con il tema personalizzato
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "myCustomTheme",
    themes: {
      myCustomTheme,
    },
    options: {
      customProperties: true,
    },
  },
  icons: {
    iconfont: "mdi",
  },
  display: {
    mobileBreakpoint: 'md',
  },
  typography: {
    font: {
      family: 'Inter, sans-serif',
    },
  },
});

// Crea e monta l'applicazione Vue
createApp(App).use(vuetify).use(Router).mount("#app");
