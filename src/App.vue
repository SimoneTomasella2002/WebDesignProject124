<script setup>
import { useDisplay } from 'vuetify'
import { ref } from "vue";
import Footer from './components/Footer.vue'
import NavBar from './components/NavBar.vue'
import afFlag from "@/assets/images/flags/afghanistan-flag.png";
import itFlag from "@/assets/images/flags/italian-flag.png";

const { mobile } = useDisplay()
const people = ref([
    { name: "Alessandro", img: itFlag },
    { name: "Tara", img: afFlag },
])
</script>

<template>
  <v-app>
    <NavBar :is-mobile="mobile" :people="people"/>
    <v-main :is-mobile="mobile">
      <router-view v-slot="{ Component, route }">
        <transition :enter-active-class="route.meta.enterClass" :leave-active-class="route.meta.leaveClass"
          mode="out-in">
          <component :is="Component" :is-mobile="mobile" />
        </transition>
      </router-view>
    </v-main>
    <Footer :is-mobile="mobile" :people="people"/>
  </v-app>
</template>