<script setup>
import { ref } from 'vue'
import Dialog from "@/components/Dialog.vue";
import websiteLogo from '@/assets/images/logopassport.svg'
import afFlag from "@/assets/images/flags/afghanistan-flag.png";
import itFlag from "@/assets/images/flags/italian-flag.png";
import Select from "@/components/Select.vue";

const drawer = ref(false)
const people = ref([
  { name: "Alessandro", img: itFlag },
  { name: "Tara", img: afFlag },
])
</script>

<template>
  <v-container>
    <v-row>
      <v-app-bar color="primary" class="rounded" scroll-behavior="hide">
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
      <v-navigation-drawer v-model="drawer" color="infoBackground" temporary>
        <v-list>
          <v-list-item>
            <v-spacer></v-spacer>
          </v-list-item>
          <v-list-item>
            <div style="margin-top: 1rem;">
              <Select :people="people" label="Passport 1" />
            </div>
          </v-list-item>
          <v-list-item>
            <div style="margin-top: 1rem;">
              <Select :people="people" label="Passport 2" />
            </div>
          </v-list-item>
          <v-list-item>
            <v-spacer></v-spacer>
          </v-list-item>
          <v-list-item>
            <v-btn prepend-icon="mdi-web" variant="text" color="secondary" class="text-none" rounded>
              Language
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn to="/about" prepend-icon="mdi-information-outline" variant="text" color="secondary" class="text-none" rounded>
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
    </v-row>
  </v-container>
</template>
