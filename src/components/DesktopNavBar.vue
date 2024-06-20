<script setup>
import { ref, computed } from "vue";

import Dialog from "@/components/Dialog.vue";
import websiteLogo from "@/assets/images/logopassport.svg";
import Select from "@/components/Select.vue";

const props = defineProps({
    items: {
        type: Array,
        required: true,
    },
})

const emit = defineEmits(['update:selected1', 'update:selected2'])

const selected1 = ref(props.items[0])
const selected2 = ref(props.items[1])

const updateSelected1 = (value) => {
    selected1.value = value
    emit('update:selected1', value)
}

const updateSelected2 = (value) => {
    selected2.value = value
    emit('update:selected2', value)
}
</script>

<template>
    <v-app-bar scroll-behavior="hide" scroll-threshold="100" :height="100" color="primary">
        <v-col cols="2" class="ma-0 pa-2 pa-md-6">
            <Dialog />
        </v-col>
        <v-col cols="2" align-self="end" class="ma-0 pa-2">
            <Select :items="items" label="Passport 1" :selected="selected1"
                @update:selected="updateSelected1" />
        </v-col>

        <v-col align-self="center" cols="4" class="ma-0 pa-0 d-flex justify-center align-center">
            <router-link to="/">
                <img :src='websiteLogo' alt="Logo for the website" style="width: 18vw; height: 9vh; display: flex; justify-content: center; align-content: center;"></img>
            </router-link>
        </v-col>

        <v-col cols="2" align-self="end" class="ma-0 pa-2">
            <Select :items="items" label="Passport 2" :selected="selected2"
                @update:selected="updateSelected2" />
        </v-col>
        <v-col cols="1" align-self="center" class="ma-0 pa-0 text-center">
            <v-btn rounded to="/about" variant="text">
                <v-card-text class="ma-0 pa-0 text-center text-secondary">About</v-card-text>
            </v-btn>
        </v-col>
        <v-col cols="1" align-self="center" class="ma-0 pa-0 text-center">
            <v-btn icon="mdi-web" height="36px" class="text-secondary" aria-label="Change language"></v-btn>
        </v-col>
    </v-app-bar>
</template>