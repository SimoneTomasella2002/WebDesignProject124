<template>
    <v-app>
      <NavBar />
      <v-main>
        <router-view />
      </v-main>
      <Footer />
    </v-app>
  </template>
  
  <script setup>
  import Footer from './components/Footer.vue'
  import NavBar from './components/NavBar.vue'
  </script>
  
  <style>
  @import "./assets/style/app.css";
  </style>
  