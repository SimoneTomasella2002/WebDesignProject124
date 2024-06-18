<script setup>
import Dialog from "@/components/Dialog.vue";
import websiteLogo from "@/assets/images/logopassport.svg";
import Select from "@/components/Select.vue";

const props = defineProps(["people"]);
const emit = defineEmits(["toggleVisibility"]);
const handleToggleVisibility = (person) => {
    emit("toggleVisibility", person);
}
</script>

<template>
    <v-container>
        <v-row>
            <v-app-bar scroll-behavior="hide" scroll-threshold="100" :height="100" color="primary">
                <v-col cols="1" class="ma-0 pa-2 pa-md-6">
                    <Dialog />
                </v-col>
                <v-col cols="1" class="ma-0 pa-0">
                    <v-spacer></v-spacer>
                </v-col>
                <v-col cols="2" align-self="end" class="ma-0 pa-2">
                    <Select :people="props.people" label="Passport 1" @toggle-visibility="handleToggleVisibility" />
                </v-col>

                <v-col align-self="center" cols="4" class="ma-0 pa-0 d-flex justify-center align-center">
                    <router-link to="/">
                        <v-img :src='websiteLogo' alt="Logo for the website" width="18vw" height="9vh"></v-img>
                    </router-link>
                </v-col>

                <v-col cols="2" align-self="end" class="ma-0 pa-2">
                    <Select :people="props.people" label="Passport 2" @toggle-visibility="handleToggleVisibility" />
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
        </v-row>
    </v-container>
</template>

<style scoped>
.responsive-logo {
  width: 20vw;
  height: 10vh;
  max-width: 390px; /* Aggiungi un limite massimo se necessario */
  max-height: 70px; /* Aggiungi un limite massimo se necessario */
}
</style>