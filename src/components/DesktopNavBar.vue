<script setup>
import websiteLogo from "@/assets/images/logotype.svg";
import afFlag from "@/assets/images/afghanistan-flag.png";
import itFlag from "@/assets/images/italian-flag.png";

import { ref } from "vue";

const people = ref([
    { name: "Alessandro", img: itFlag },
    { name: "Tara", img: afFlag },
])
</script>

<template>
    <v-container>
        <v-row>
            <v-app-bar :height="100" absolute="">
                <v-col cols="1" align-self="end">
                    <v-dialog transition="dialog-top-transition">
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
                                <v-col class="pa-0 ma-0">
                                    <v-toolbar title="How to use the website">
                                        <v-btn icon="mdi-check-circle-outline" @click="isActive.value = false"></v-btn>
                                    </v-toolbar>
                                </v-col>

                                <v-card-text>
                                    Palle
                                </v-card-text>
                            </v-card>
                        </template>
                    </v-dialog>
                </v-col>
                <v-col cols="1">
                    <v-spacer></v-spacer>
                </v-col>
                <v-col cols="2" align-self="end">
                    <v-select variant="outlined" density="compact" class="text-button-text" rounded :items="people"
                        item-title="name" :label="people[0].name">
                        <template v-slot:item="{ props, item }">
                            <v-list-item v-bind="props">
                                <template v-slot:title>
                                    <span class="text-button-text">
                                        {{ item.raw.name }}
                                        <v-img :src="item.raw.img" alt="Flag" width="24" height="16"></v-img>
                                    </span>
                                </template>
                            </v-list-item>
                        </template>
                    </v-select>
                </v-col>
                <v-col align="center" cols="4" align-self="center">
                    <router-link to="/">
                        <v-img :src='websiteLogo' alt="Logo for the website" max-width="19rem"
                            position="top -20px right 0px" </v-img>
                    </router-link>
                </v-col>
                <v-col cols="2" align-self="end">
                    <v-btn variant="outlined" rounded class="text-button-text" block>
                        <v-card-text class="ma-0 pa-0 text-primary font-weight-bold mr-2">Tara</v-card-text>
                        <v-img :src="afFlag" alt="Afghanistan flag" width="24" height="16"></v-img>
                    </v-btn>
                </v-col>
                <v-col cols="1" align-self="end">
                    <v-btn rounded to="/about" variant="text">
                        <v-card-text class="ma-0 pa-0 text-center text-button-text">About</v-card-text>
                    </v-btn>
                </v-col>
                <v-col cols="1" align-self="end">
                    <v-btn icon="mdi-web" height="36px" class="text-button-text" aria-label="Change language"></v-btn>
                </v-col>
            </v-app-bar>
        </v-row>
    </v-container>
</template>