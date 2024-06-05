<script setup>
import Footer from './components/Footer.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <v-app>
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