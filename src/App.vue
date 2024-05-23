<template>
  <v-app>
    <v-container fluid class="ma-0 pa-0">
      <v-row>
        <v-col>
          <NavBar />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-main>
            <router-view />
          </v-main>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
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
@import "./assets/style/app.css";
</style>