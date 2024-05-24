<script setup>
import Footer from './components/Footer.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <v-app class="text-center pa-0 ma-0">
    <v-container fluid>
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
