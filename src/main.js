import "@mdi/font/css/materialdesignicons.css";
import "./assets/style/main.css";
import { createApp } from "vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Importa la configurazione del tema
import { myAccessibleTheme } from "./themeConfig.js";

// Components
import App from "./App.vue";
import Router from "./router/index";

// Inizializza Vuetify con il tema personalizzato
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "myAccessibleTheme",
    themes: {
      myAccessibleTheme,
    },
    options: {
      customProperties: true,
    },
    defaultAssets: {
      font: {
        family: "Inter",
      },
    },
  },
  icons: {
    iconfont: "mdi",
  },
});

// Crea e monta l'applicazione Vue
createApp(App).use(vuetify).use(Router).mount("#app");
