import "@mdi/font/css/materialdesignicons.css";
import "./assets/style/main.css";
import { createApp } from "vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import {
  VApp,
  VAppBar,
  VMain,
  VContainer,
  VBtn,
  VCard,
  VImg,
  VBottomNavigation,
  VSheet,
  VRow,
  VDialog,
  VWindow,
  VCol,
  VSelect,
  VFooter,
  VCardTitle,
  VListItem,
  VWindowItem,
  VCardText,
  VCardActions,
  VNavigationDrawer,
  VList,
  VSpacer,
  VToolbarTitle,
  VAppBarNavIcon,
  VCardItem,
  VTimeline,
  VTimelineItem,
  VMenu,
  VListItemTitle,
} from "vuetify/components";

// Importa la configurazione del tema
import { myCustomTheme } from "./themeConfig.js";

// Components
import App from "./App.vue";
import Router from "./router/index";

// Inizializza Vuetify con il tema personalizzato
const vuetify = createVuetify({
  components: {
    VApp,
    VAppBar,
    VMain,
    VContainer,
    VBtn,
    VCard,
    VImg,
    VBottomNavigation,
    VSheet,
    VRow,
    VDialog,
    VWindow,
    VCol,
    VSelect,
    VFooter,
    VCardTitle,
    VListItem,
    VWindowItem,
    VCardText,
    VCardActions,
    VNavigationDrawer,
    VList,
    VSpacer,
    VToolbarTitle,
    VAppBarNavIcon,
    VCardItem,
    VTimeline,
    VTimelineItem,
    VMenu,
    VListItemTitle,
  },

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
    mobileBreakpoint: "md",
  },
});

// Crea e monta l'applicazione Vue
createApp(App).use(vuetify).use(Router).mount("#app");
