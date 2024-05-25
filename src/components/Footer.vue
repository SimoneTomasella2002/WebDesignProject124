<script setup>
import websiteLogo from "@/assets/images/logo.jpg";
import githubLogo from "@/assets/images/github-logo.png";
</script>

<template>
    <v-footer padless class="footer-background">
        <v-container>
            <v-row>
                <!-- General Information Column -->
                <v-col>
                    <v-card flat class="d-flex flex-column align-center pa-3 footer-card-background">
                        <v-row class="align-center mb-4">
                            <v-col cols="auto">
                                <v-img :src="websiteLogo" alt="The website logo" width="50" height="50"
                                    class="rounded-circle"></v-img>
                            </v-col>
                            <v-col>
                                <i>Behind a passport</i>
                            </v-col>
                        </v-row>
                        <v-row class="align-center mb-2">
                            <v-col cols="auto">
                                <v-img :src="githubLogo" alt="The github logo" width="25" height="25"
                                    class="rounded-circle"></v-img>
                            </v-col>
                            <v-col>
                                <v-btn text href="https://github.com/SimoneTomasella2002/WebDesignProject124"
                                    color="primary">
                                    Take a look at our code
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <p>Where to contact us: placeholder@gmail.com</p>
                                <RouterLink to="/terms">
                                    <v-btn text color="primary">Terms of service</v-btn>
                                </RouterLink>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>

                <!-- Credits Column -->
                <v-col>
                    <v-card flat class="d-flex flex-column align-center pa-3 footer-card-background">
                        <v-row>
                            <v-col>
                                <h3>Credits for used assets (WIP)</h3>
                                <p>placeholder for a future link</p>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>

                <!-- Team Column -->
                <v-col>
                    <v-card flat class="d-flex flex-column align-center pa-3 footer-card-background">
                        <v-row>
                            <v-col>
                                <h3>La nostra squadra:</h3>
                                <v-row>
                                    <v-col>
                                        <h4>Devs:</h4>
                                        <ul class="list-unstyled">
                                            <li>Simone Tomasella</li>
                                            <li>Thomas Ghione</li>
                                            <li>Loris Prataiolo</li>
                                            <li>Kevin Barragan</li>
                                        </ul>
                                    </v-col>
                                    <v-col>
                                        <h4>Designers:</h4>
                                        <ul class="list-unstyled">
                                            <li>Giulia Salaris</li>
                                            <li>Gabriel Oddone</li>
                                            <li>Francesca Vernasca</li>
                                            <li>Lorenzo Sacco</li>
                                        </ul>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>
