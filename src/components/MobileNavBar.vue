<template>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Mobile Navbar</v-toolbar-title>
  
      <v-navigation-drawer v-model="drawer" app>
        <v-list>
          <v-list-item @click="drawer = false">
            <RouterLink to="/">
              <v-list-item-title>Home</v-list-item-title>
            </RouterLink>
          </v-list-item>
          <v-list-item @click="drawer = false">
            <RouterLink to="/views/ChiSiamo.vue">
              <v-list-item-title>About</v-list-item-title>
            </RouterLink>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-app-bar>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { RouterLink } from 'vue-router'
  
  const drawer = ref(false)
  </script>
  