<script setup>
import Footer from './components/Footer.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <v-app class="d-flex flex-column text-center pa-0 ma-0">
    <NavBar />
    <v-main>
      <router-view v-slot="{ Component, route }">
        <transition 
          :enter-active-class="route.meta.enterClass"
          :leave-active-class="route.meta.leaveClass"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>
    <Footer />
  </v-app>
</template>