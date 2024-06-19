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
    if (selectId) {
      selection = { person, selectId }
      console.log(selection)
    }
    people.value.forEach(p => p.visible = p !== person)
}

let selection = ref({
  person: null,
  selectId: null
})
</script>

<template>
  <v-app>
    <NavBar :is-mobile="mobile" :people="filteredPeople" @toggle-visibility="toggleVisibility" />
    <v-main :is-mobile="mobile">
      <router-view v-slot="{ Component, route }">
        <transition :enter-active-class="route.meta.enterClass" :leave-active-class="route.meta.leaveClass"
          mode="out-in">
          <component :is="Component" :is-mobile="mobile" />
        </transition>
      </router-view>
    </v-main>
    <Footer :is-mobile="mobile" :people="filteredPeople" :selection="selection"/>
  </v-app>
</template>