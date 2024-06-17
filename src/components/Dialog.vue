<script setup>
import { ref, onMounted } from 'vue';
import DialogImage1 from '@/assets/images/dialog/Dialog-Image-1.png';
import DialogImage2 from '@/assets/images/dialog/Dialog-Image-2.png';
import DialogImage3 from '@/assets/images/dialog/Dialog-Image-3.png';

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
                    <v-card-text class="ma-0 pa-0 text-left text-decoration-underline text-secondary">
                        How to use
                    </v-card-text>
                    <v-card-text class="ma-0 pa-0 text-left text-decoration-underline text-secondary">
                        this website?
                    </v-card-text>
                </div>
            </v-btn>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card color="infoBackground">
                <v-col align="right">
                    <v-btn icon="mdi-close" @click="isActive.value = false" color="infoBackground"
                        class="text-secondary"></v-btn>
                </v-col>

                <v-card-text align="center">
                    <h1>How the possibilities change</h1>
                    <h1>based on where you're from?</h1>
                </v-card-text>

                <v-card-text align="center">
                    <p>Find out by comparing the stories</p>
                    <p>that are behind passports</p>
                </v-card-text>

                <v-row>
                    <v-col align="right">
                        <v-img :src="DialogImage1" alt="Placeholder" width="150px"></v-img>
                    </v-col>
                    <v-col align="center">
                        <v-img :src="DialogImage2" alt="Placeholder" width="150px"></v-img>
                    </v-col>
                    <v-col>
                        <v-img :src="DialogImage3" alt="Placeholder" width="150px"></v-img>
                    </v-col>
                </v-row>

                <v-col align="center" class="mt-4">
                    <v-btn text="Ok! I understand" @click="isActive.value = false" color="blue" class="text-none"></v-btn>
                </v-col>
            </v-card>
        </template>
    </v-dialog>
</template>