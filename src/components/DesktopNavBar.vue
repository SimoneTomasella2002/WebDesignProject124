<script setup>
import websiteLogo from "@/assets/images/logotype.svg";
</script>

<template>
    <v-container>
        <v-row>
            <v-app-bar scroll-behavior="hide" scroll-threshold="1" :height="100">
                <v-col align="center" cols="1" align-self="end">
                    <v-btn variant="text" rounded>
                        <div class="d-flex flex-column">
                            <v-card-text class="ma-0 pa-0 text-left text-decoration-underline text-button-text">
                                How to use
                            </v-card-text>
                            <v-card-text class="ma-0 pa-0 text-left text-decoration-underline text-button-text">
                                this website?
                            </v-card-text>
                        </div>
                    </v-btn>
                </v-col>
                <v-col cols="1">
                    <v-spacer></v-spacer>
                </v-col>
                <v-col align="center" cols="2" align-self="end">
                    <v-btn variant="outlined" rounded append-icon="" class="text-button-text" block>
                        <v-card-text
                            class="ma-0 pa-0 text-center text-primary font-weight-bold">Alessandro</v-card-text></v-btn>
                </v-col>
                <v-col align="center" cols="4" align-self="center">
                    <router-link to="/">
                        <v-img :src='websiteLogo' alt="Logo for the website" max-width="19rem"
                            position="top -20px right 0px" </v-img>
                    </router-link>
                </v-col>
                <v-col align="center" cols="2" align-self="end">
                    <v-btn variant="outlined" rounded append-icon="" class="text-button-text" block><v-card-text
                            class="ma-0 pa-0 text-center text-primary font-weight-bold">Tara</v-card-text></v-btn>
                </v-col>
                <v-col align="center" cols="1" align-self="end">
                    <v-btn rounded to="/about" variant="text">
                        <v-card-text class="ma-0 pa-0 text-center text-button-text">About</v-card-text>
                    </v-btn>
                </v-col>
                <v-col align="center" cols="1" align-self="end">
                    <v-btn icon="mdi-web" height="36px" class="text-button-text" aria-label="Change language"></v-btn>
                </v-col>
            </v-app-bar>
        </v-row>
    </v-container>
</template>