<script setup>
import websiteLogo from "@/assets/images/logo.jpg";

function scrollToTheTop () {
    window.scrollTo(0,0);
}
</script>

<template>
    <v-footer padless class="footer-background">
        <v-container>
            <v-row>
                <!-- General Information Column -->
                <v-col cols="12" md="4">
                    <v-card flat class="d-flex flex-column align-center pa-3 footer-card-background">
                        <v-img :src="websiteLogo" alt="The website logo" width="50" height="50"
                            class="rounded-circle mb-2"></v-img>
                        <i class="mb-2">Behind a passport</i>
                        <v-btn @click="openGithubPageInASeparateTab" text href="https://github.com/SimoneTomasella2002/WebDesignProject124" color="primary"
                            class="mb-2">
                            Take a look at our code
                        </v-btn>
                        <p class="mb-2">Where to contact us: placeholder@gmail.com</p>
                        <RouterLink to="/terms">
                            <v-btn @click="scrollToTheTop" text color="primary">Terms of service</v-btn>
                        </RouterLink>
                    </v-card>
                </v-col>

                <!-- Credits Column -->
                <v-col cols="12" md="4">
                    <v-card flat class="d-flex flex-column align-center pa-3 footer-card-background">
                        <h3 class="mb-2">Credits for used assets (WIP)</h3>
                        <p class="mb-2">placeholder for a future link</p>
                    </v-card>
                </v-col>

                <!-- Team Column -->
                <v-col cols="12" md="4">
                    <v-card flat class="d-flex flex-column align-center pa-3 footer-card-background">
                        <h3 class="mb-2">La nostra squadra:</h3>
                        <v-row>
                            <v-col cols="6">
                                <h4 class="mb-2">Devs:</h4>
                                <ul class="list-unstyled">
                                    <li class="mb-1">Simone Tomasella</li>
                                    <li class="mb-1">Thomas Ghione</li>
                                    <li class="mb-1">Loris Prataiolo</li>
                                    <li class="mb-1">Kevin Barragan</li>
                                </ul>
                            </v-col>
                            <v-col cols="6">
                                <h4 class="mb-2">Designers:</h4>
                                <ul class="list-unstyled">
                                    <li class="mb-1">Giulia Salaris</li>
                                    <li class="mb-1">Gabriel Oddone</li>
                                    <li class="mb-1">Francesca Vernasca</li>
                                    <li class="mb-1">Lorenzo Sacco</li>
                                </ul>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>