<script setup>
import { ref, onMounted } from 'vue';

// Reactive variable to control dialog visibility
const isDialogActive = ref(false);

// Open the dialog after 2 seconds when the component is mounted
onMounted(() => {
  setTimeout(() => {
    isDialogActive.value = true;
  }, 2000);
});

</script>


<template>
    <v-dialog v-model="isDialogActive" max-width="800" transition="dialog-top-transition">
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
                        <v-card>

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
</template>