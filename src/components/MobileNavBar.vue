<script setup>
import { ref } from 'vue'
import websiteLogo from '@/assets/images/logopassport.svg'

const drawer = ref(false)

const items = [
  { title: 'Home', icon: 'mdi-home', to: '/' },
  { title: 'About', icon: 'mdi-information', to: '/about' }
]
</script>

<template>
  <v-container>
    <v-row>
      <v-app-bar color="primary" class="rounded" scroll-behavior="hide">
        <v-col align-self="start" cols="3">
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </v-col>
        <v-col align-self="center" cols="6" >
          <v-toolbar-title class="d-flex justify-center align-center">
            <RouterLink to="/">
              <v-img :src="websiteLogo" alt="Logo for the website" width="50vw" height="6vh"></v-img>
            </RouterLink>
          </v-toolbar-title>
        </v-col>
        <v-col cols="3"></v-col>
      </v-app-bar>
    </v-row>
  </v-container>
  <v-navigation-drawer v-model="drawer" :width="100" temporary>
    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index" :to="item.to" link>
        <v-icon>{{ item.icon }}</v-icon>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
