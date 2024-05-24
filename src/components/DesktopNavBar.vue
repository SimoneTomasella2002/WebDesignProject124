<template>
    <v-container>
        <v-row>
            <v-app-bar scroll-behavior="hide" scroll-threshold="1" class="custom-app-bar">
                <v-col align="center" cols="1">
                    <v-btn variant="text">
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
                <v-col align="center" cols="2">
                    <v-btn variant="outlined" rounded append-icon="">Alessandro</v-btn>
                </v-col>
                <v-col align="center" cols="4">
                    <router-link to="/">
                        <img src="@/assets/images/logotype.svg" alt="Logo for the website" width="40%"/>
                    </router-link>
                </v-col>
                <v-col align="center" cols="2">
                    <v-btn variant="outlined" rounded append-icon="">Tara</v-btn>
                </v-col>
                <v-col align="center" cols="1">
                    <v-btn rounded to="/about">About</v-btn>
                </v-col>
                <v-col align="center" cols="1">
                    <v-btn icon="mdi-web" density="compact"></v-btn>
                </v-col>
            </v-app-bar>
        </v-row>
    </v-container>
</template>

<style scoped>
</style>