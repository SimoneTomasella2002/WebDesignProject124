<script setup>
import { ref } from 'vue'
import Dialog from "@/components/Dialog.vue";
import websiteLogo from '@/assets/images/logopassport.svg'

const props = defineProps ({
  languages: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['update:selectedLanguage'])

const selectedLanguage = ref(props.languages[0])

const updateLanguage = (value) => {
    selectedLanguage.value = value
    emit('update:selectedLanguage', value)
    console.log("Language has been changed to " + value + " From DesktopNavBar.vue")
}

const drawer = ref(false)

console.log(props.languages)
</script>

<template>
  <v-app-bar color="primary" class="rounded" role="navigation">
    <v-col align-self="start" cols="3">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-col>
    <v-col align-self="center" cols="6">
      <v-toolbar-title class="d-flex justify-center align-center">
        <RouterLink to="/">
          <v-img :src="websiteLogo" alt="Logo for the website" width="50vw" height="6vh"></v-img>
        </RouterLink>
      </v-toolbar-title>
    </v-col>
    <v-col cols="3">
    </v-col>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" color="infoBackground" role="complementary" temporary>
    <v-list>
      <v-list-item>
        <v-spacer></v-spacer>
      </v-list-item>
      <v-list-item>
        <v-btn prepend-icon="mdi-web" variant="text" color="secondary" class="text-none" rounded>
          {{ selectedLanguage === 'English' ? "Language" : "Lingua" }}
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn to="/about" prepend-icon="mdi-information-outline" variant="text" color="secondary" class="text-none"
          rounded>
          {{ selectedLanguage === 'English' ? "About" : "Chi siamo" }}
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-spacer></v-spacer>
      </v-list-item>
      <v-list-item>
        <Dialog :language="selectedLanguage"/>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
