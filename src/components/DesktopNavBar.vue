<script setup>
import { ref } from "vue";

import Dialog from "@/components/Dialog.vue";
import websiteLogo from "@/assets/images/logopassport.svg";
import Select from "@/components/Select.vue";
import SelectLanguage from "@/components/SelectLanguage.vue";

function scrollToTheTop() {
    window.scrollTo(0, 0);
}

const props = defineProps({
    items: {
        type: Array,
        required: true,
    },
    languages: {
        type: Array,
        required: true
    }
})

const emit = defineEmits(['update:selected1', 'update:selected2', 'update:selectedLanguage'])

const selected1 = ref(props.items[0])
const selected2 = ref(props.items[1])
const selectedLanguage = ref(props.languages[0])

const updateSelected1 = (newValue) => {
    selected1.value = newValue
    emit('update:selected1', newValue)
}

const updateSelected2 = (newValue) => {
    selected2.value = newValue
    emit('update:selected2', newValue)
}

const updateLanguage = (value) => {
    selectedLanguage.value = value
    emit('update:selectedLanguage', value)
    console.log("Language has been changed to " + value + " From DesktopNavBar.vue")
}

console.log(props.languages)

</script>

<template>
    <v-app-bar scroll-behavior="hide" scroll-threshold="100" :height="100" color="primary" role="navigation">
        <v-col cols="2" class="ma-0 pa-2 pa-md-6">
            <Dialog :language="selectedLanguage"/>
        </v-col>
        <v-col cols="2" align-self="end" class="ma-0 pa-2">
            <Select :items="items" label="Passport 1" :selected="selected1" :language="selectedLanguage" @update:selected="updateSelected1" />
        </v-col>

        <v-col align-self="center" cols="4" class="ma-0 pa-0 d-flex justify-center align-center">
            <router-link to="/">
                <img :src='websiteLogo' @click="scrollToTheTop" alt="Logo for the website"
                    style="width: 18vw; height: 9vh; display: flex; justify-content: center; align-content: center;"></img>
            </router-link>
        </v-col>

        <v-col cols="2" align-self="end" class="ma-0 pa-2">
            <Select :items="items" label="Passport 2" :selected="selected2" :language="selectedLanguage" @update:selected="updateSelected2" />
        </v-col>
        
        <v-col cols="1" align-self="center" class="ma-0 pa-0 text-center">
            <v-btn rounded to="/about" variant="text">
                <v-card-text class="ma-0 pa-0 text-center text-secondary">
                    {{ selectedLanguage === 'English' ? 'About' : 'Chi siamo' }}
                </v-card-text>
            </v-btn>
        </v-col>
        
        <v-col cols="1" align-self="center" class="ma-0 pa-0 text-center">
            <SelectLanguage :languages="languages" label="Language" :selected="selectedLanguage" @update:selected="updateLanguage"/>
        </v-col>
    </v-app-bar>
</template>