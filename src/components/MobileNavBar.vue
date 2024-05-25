<script setup>
import { ref } from 'vue'
import websiteLogo from '@/assets/images/logotype.svg'

const drawer = ref(false)

const items = [
  { title: 'Home', icon: 'mdi-home', to: '/' },
  { title: 'About', icon: 'mdi-information', to: '/about' }
]
</script>

<template>
  <v-container>
    <v-row>
      <v-app-bar color="background" class="rounded" scroll-behavior="hide" scroll-threshold="1">
        <v-col align="start" cols="3">
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </v-col>
        <v-col align="center" cols="6">
          <v-toolbar-title>
            <RouterLink to="/">
              <v-img :src="websiteLogo" alt="Logo for the website" max-width="10rem"
                position="top -10px right 0px"></v-img>
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
