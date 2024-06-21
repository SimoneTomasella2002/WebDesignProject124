<script setup>
import { ref } from 'vue'
import Dialog from "@/components/Dialog.vue";
import websiteLogo from '@/assets/images/logopassport.svg'

const drawer = ref(false)
</script>

<template>
  <v-app-bar color="primary" class="rounded">
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
          Language
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn to="/about" prepend-icon="mdi-information-outline" variant="text" color="secondary" class="text-none"
          rounded>
          About
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-spacer></v-spacer>
      </v-list-item>
      <v-list-item>
        <Dialog />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
