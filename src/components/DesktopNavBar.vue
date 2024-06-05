<script setup>
import websiteLogo from "@/assets/images/logotype.svg";
import afFlag from "@/assets/images/flags/afghanistan-flag.png";
import itFlag from "@/assets/images/flags/italian-flag.png";
import Select from "@/components/Select.vue";

import { ref } from "vue";

const people = ref([
    { name: "Alessandro", img: itFlag },
    { name: "Tara", img: afFlag },
])

// Funzione per gestire la selezione della persona e disabilitarla
const handlePersonSelected = (selectedPerson) => {
    // Cerca la persona selezionata nell'array e disabilita la selezione
    // const personIndex = people.value.findIndex(person => person.name === selectedPerson.name);
    // if (personIndex !== -1) {
    //     people.value[personIndex].disabled = true;
    // }
    console.log(selectedPerson);
};
</script>

<template>
    <v-container>
        <v-row>
            <v-app-bar scroll-behavior="hide" scroll-threshold="100" :height="100">
                <v-col cols="1">
                    <v-dialog max-width="800" transition="dialog-top-transition">
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn variant="text" rounded v-bind="activatorProps">
                                <div class="d-flex flex-column">
                                    <v-card-text class="ma-0 pa-0 text-left text-decoration-underline text-button-text">
                                        How to use
                                    </v-card-text>
                                    <v-card-text class="ma-0 pa-0 text-left text-decoration-underline text-button-text">
                                        this website?
                                    </v-card-text>
                                </div>
                            </v-btn>
                        </template>

                        <template v-slot:default="{ isActive }">
                            <v-card>
                                <v-col align="right">
                                    <v-btn icon="mdi-close" class="text-button-text" @click="isActive.value = false"></v-btn>
                                </v-col>

                                <v-card-text align="center">
                                    <h1>How the possibilities change based on where you're from?</h1>
                                </v-card-text>
                                
                                <v-card-text align="center">
                                    <p>Find out by comparing the stories that are behind passports</p>
                                </v-card-text>

                                <v-row>
                                    <v-col>
                                        <v-card >

                                        </v-card>
                                    </v-col>
                                    <v-col>
                                        <v-img>
                                            
                                        </v-img>
                                    </v-col>
                                    <v-col>
                                        <v-img>
                                            
                                        </v-img>
                                    </v-col>
                                </v-row>

                                <v-col align="center">
                                    <v-btn text="Ok, I understand" @click="isActive.value = false"></v-btn>
                                </v-col>
                            </v-card>
                        </template>
                    </v-dialog>
                </v-col>
                <v-col cols="1">
                    <v-spacer></v-spacer>
                </v-col>
                <v-col cols="2" align-self="end" class="pa-2">
                    <Select :people="people" label="Passport 1" @personSelected="handlePersonSelected" />
                </v-col>
                
                <v-col align="center" cols="4">
                    <router-link to="/">
                        <v-img :src='websiteLogo' alt="Logo for the website" max-width="19rem" position="top -20px right 0px"></v-img>
                    </router-link>
                </v-col>
                
                <v-col cols="2" align-self="end" class="pa-2">
                    <Select :people="people" label="Passport 2" @personSelected="handlePersonSelected" />
                </v-col>
                <v-col cols="1">
                    <v-btn rounded to="/about" variant="text">
                        <v-card-text class="ma-0 pa-0 text-center text-button-text">About</v-card-text>
                    </v-btn>
                </v-col>
                <v-col cols="1">
                    <v-btn icon="mdi-web" height="36px" class="text-button-text" aria-label="Change language"></v-btn>
                </v-col>
            </v-app-bar>
        </v-row>
    </v-container>
</template>