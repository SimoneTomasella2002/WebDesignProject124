<script setup>
import Dialog from "@/components/Dialog.vue";
import websiteLogo from "@/assets/images/logopassport.svg";
import Select from "@/components/Select.vue";

const props = defineProps(["people"]);
</script>

<template>
    <v-container>
        <v-row>
            <v-app-bar scroll-behavior="hide" scroll-threshold="100" :height="100" color="primary">
                <v-col cols="1" class="pa-2">
                    <Dialog />
                </v-col>
                <v-col cols="1">
                    <v-spacer></v-spacer>
                </v-col>
                <v-col cols="2" align-self="end" class="pa-2">
                    <Select :people="people" label="Passport 1" />
                </v-col>

                <v-col align-self="center" cols="4" class="d-flex justify-center align-center">
                    <router-link to="/">
                        <v-img :src='websiteLogo' alt="Logo for the website" width="18vw" height="9vh"></v-img>
                    </router-link>
                </v-col>

                <v-col cols="2" align-self="end" class="pa-2">
                    <Select :people="people" label="Passport 2" />
                </v-col>
                <v-col cols="1" align-self="center">
                    <v-btn rounded to="/about" variant="text">
                        <v-card-text class="ma-0 pa-0 text-center text-secondary">About</v-card-text>
                    </v-btn>
                </v-col>
                <v-col cols="1" align-self="center" class="text-center">
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