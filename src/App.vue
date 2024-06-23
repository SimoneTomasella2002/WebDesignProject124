<script setup>
import { useDisplay } from 'vuetify'
import { ref, onMounted } from "vue";

import Footer from './components/Footer.vue'
import NavBar from './components/NavBar.vue'
import afFlag from "@/assets/images/flags/afghanistan-flag.png";
import itFlag from "@/assets/images/flags/italian-flag.png";
import nigeriaFlag from "@/assets/images/flags/nigeria-flag.png";
import southkoreaFlag from "@/assets/images/flags/southkorea-flag.png";

const { mobile } = useDisplay()

const people = ref([
  { name: "Alessandro", img: itFlag, selected: true },
  { name: "Tara", img: afFlag, selected: true },
  { name: "Joy", img: nigeriaFlag, selected: false },
  { name: "Ji-hoon", img: southkoreaFlag, selected: false }
])

const selected1 = ref(null)
const selected2 = ref(null)

const updateSelected1 = (newValue) => {
  selected1.value = newValue
  people.value.forEach((person) => {
    if (person.name === newValue.name || person.name === selected2.value.name) {
      person.selected = true
    } else {
      person.selected = false
    }
  })
}

const updateSelected2 = (newValue) => {
  selected2.value = newValue
  people.value.forEach((person) => {
    if (person.name === newValue.name || person.name === selected1.value.name) {
      person.selected = true
    } else {
      person.selected = false
    }
  })
}

// Imposta i valori predefiniti per le due selezioni
onMounted(() => {
  if (people.value.length > 0) {
    selected1.value = people.value[0]
    if (people.value.length > 1) {
      selected2.value = people.value[1]
    }
  }
})
</script>

<template>
  <v-app>
    <NavBar :is-mobile="mobile" :items="people" @update:selected1="updateSelected1"
      @update:selected2="updateSelected2" />
    <v-main :is-mobile="mobile">
      <router-view v-slot="{ Component, route }">
        <transition :enter-active-class="route.meta.enterClass" :leave-active-class="route.meta.leaveClass"
          mode="out-in">
          <component :is="Component" :is-mobile="mobile" :selected1="selected1" :selected2="selected2" />
        </transition>
      </router-view>
    </v-main>
    <Footer :is-mobile="mobile" :items="people" @update:selected1="updateSelected1"
      @update:selected2="updateSelected2" />
  </v-app>
</template>