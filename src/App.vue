<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12">
          <NavBar />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-main>
            <router-view />
          </v-main>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <Footer />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup>
import Footer from './components/Footer.vue'
import NavBar from './components/NavBar.vue'
</script>

<style>
/* @import "./assets/style/app.css"; */
</style>