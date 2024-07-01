<script setup>
import { useDisplay } from 'vuetify'
import { ref, reactive, computed } from "vue";

import Footer from './components/Footer.vue'
import NavBar from './components/NavBar.vue'
import afFlag from "@/assets/images/flags/afghanistan-flag.png";
import itFlag from "@/assets/images/flags/italian-flag.png";
import nigeriaFlag from "@/assets/images/flags/nigeria-flag.png";
import southkoreaFlag from "@/assets/images/flags/southkorea-flag.png";
import desktopBackgroundImage from '@/assets/images/pattern/Pattern_1920x1080.png';
import mobileBackgroundImage from '@/assets/images/pattern/Pattern_1080x1920.png';
import patternBackgroundImage from '@/assets/images/pattern/Pattern.svg';

const { mobile } = useDisplay()

const people = ref([
  { name: "Alessandro", img: itFlag, selected: true },
  { name: "Tara", img: afFlag, selected: true },
  { name: "Joy", img: nigeriaFlag, selected: false },
  { name: "Ji-hoon", img: southkoreaFlag, selected: false }
])

const languages = ref([
  { language: "Italiano" },
  { language: "English" }
])

const selected1 = ref(people.value[0])
const selected2 = ref(people.value[1])
const selectedLanguage = ref(languages.value[0]) // Contiene l'oggetto selezionato per la lingua

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

const updateSelectedLanguage = (value) => {
  selectedLanguage.value = value
}

const desktopBackground = reactive({
  backgroundImage: `url(${desktopBackgroundImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover'
})

const mobileBackground = reactive({
  backgroundImage: `url(${mobileBackgroundImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover'
})

const iphoneBackground = reactive({
  backgroundImage: `url(${patternBackgroundImage})`,
  backgroundRepeat: 'repeat',
  backgroundSize: '15rem'
})

// Function to check if the device is an iPhone
const isIphone = computed(() => {
  return /iPhone/.test(navigator.userAgent)
})
</script>

<template>
  <v-app>
    <NavBar :is-mobile="mobile" :items="people" :languages="languages" 
      @update:selected1="updateSelected1"
      @update:selected2="updateSelected2" 
      @update:selectedLanguage="updateSelectedLanguage" 
    />
    <v-main :is-mobile="mobile" :style="!mobile ? desktopBackground : isIphone ? iphoneBackground : mobileBackground">
      <router-view v-slot="{ Component, route }">
        <transition :enter-active-class="route.meta.enterClass" :leave-active-class="route.meta.leaveClass"
          mode="out-in">
          <component :is="Component" :is-mobile="mobile" :selected1="selected1" :selected2="selected2" :language="selectedLanguage"/>
        </transition>
      </router-view>
    </v-main>
    <Footer :is-mobile="mobile" :items="people" :language="selectedLanguage"
      @update:selected1="updateSelected1"
      @update:selected2="updateSelected2" 
    />
  </v-app>
</template>