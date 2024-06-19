<script setup>
import { useDisplay } from 'vuetify'
import { computed, ref } from "vue";
import Footer from './components/Footer.vue'
import NavBar from './components/NavBar.vue'
import afFlag from "@/assets/images/flags/afghanistan-flag.png";
import itFlag from "@/assets/images/flags/italian-flag.png";

const { mobile } = useDisplay()

const people = ref([
    { name: "Alessandro", img: itFlag, visible: true},
    { name: "Tara", img: afFlag, visible: true},
])

const filteredPeople = computed(() => people.value.filter(person => person.visible))

const toggleVisibility = (person, selectId) => {
    if (parseInt(selectId) === 1) {
      leftPerson = { person }
    }
    if (parseInt(selectId) === 2) {
      rightPerson = { person }
    }
    people.value.forEach(p => p.visible = p !== person)
}

let leftPerson = ref({
  person: null,
})

let rightPerson = ref({
  person: null,
})
</script>

<template>
  <v-app>
    <NavBar :is-mobile="mobile" :people="filteredPeople" @toggle-visibility="toggleVisibility" />
    <v-main :is-mobile="mobile">
      <router-view v-slot="{ Component, route }">
        <transition :enter-active-class="route.meta.enterClass" :leave-active-class="route.meta.leaveClass"
          mode="out-in">
          <component :is="Component" :is-mobile="mobile" :left-person="leftPerson" :right-person="rightPerson"  />
        </transition>
      </router-view>
    </v-main>
    <Footer :is-mobile="mobile"/>
  </v-app>
</template>