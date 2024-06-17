<script setup>
import { useDisplay } from 'vuetify'
import Footer from './components/Footer.vue'
import NavBar from './components/NavBar.vue'

const { mobile } = useDisplay()
</script>

<template>
  <v-app>
    <NavBar :is-mobile="mobile" />
    <v-main :is-mobile="mobile">
      <router-view v-slot="{ Component, route }">
        <transition :enter-active-class="route.meta.enterClass" :leave-active-class="route.meta.leaveClass"
          mode="out-in">
          <component :is="Component" :is-mobile="mobile" />
        </transition>
      </router-view>
    </v-main>
    <Footer :is-mobile="mobile" />
  </v-app>
</template>