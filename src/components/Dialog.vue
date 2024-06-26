<script setup>
import { useDisplay } from 'vuetify'
import { ref, onMounted } from 'vue';
import DialogImageDesktopIta1 from '@/assets/images/dialog/Dialog-Image-1_Desktop_Ita.png';
import DialogImageDesktopIta2 from '@/assets/images/dialog/Dialog-Image-2_Desktop_Ita.png';
import DialogImageDesktopIta3 from '@/assets/images/dialog/Dialog-Image-3_Desktop_Ita.png';
import DialogImageDesktopEng1 from '@/assets/images/dialog/Dialog-Image-1_Desktop_Eng.png';
import DialogImageDesktopEng2 from '@/assets/images/dialog/Dialog-Image-2_Desktop_Eng.png';
import DialogImageDesktopEng3 from '@/assets/images/dialog/Dialog-Image-3_Desktop_Eng.png';
import DialogImageMobileIta1 from '@/assets/images/dialog/Dialog-Image-1_Mobile_Ita.png';
import DialogImageMobileIta2 from '@/assets/images/dialog/Dialog-Image-2_Mobile_Ita.png';
import DialogImageMobileIta3 from '@/assets/images/dialog/Dialog-Image-3_Mobile_Ita.png';
import DialogImageMobileEng1 from '@/assets/images/dialog/Dialog-Image-1_Mobile_Eng.png';
import DialogImageMobileEng2 from '@/assets/images/dialog/Dialog-Image-2_Mobile_Eng.png';
import DialogImageMobileEng3 from '@/assets/images/dialog/Dialog-Image-3_Mobile_Eng.png';

const props = defineProps({
    language: {
        type: String,
        required: true
    }
})


// Reactive variable to control dialog visibility
const isDialogActive = ref(false);

// Open the dialog after 2 seconds when the component is mounted
onMounted(() => {
    setTimeout(() => {
        isDialogActive.value = true;
    }, 2000);
});

const { mobile } = useDisplay()
const window = ref(0);
const length = ref(3);

// Needed by v-window component in mobile view
function getDialogImage(index) {
    switch (index) {
        case 1:
            return props.language === 'English' ? DialogImageMobileEng1 : DialogImageMobileIta1;
        case 2:
            return props.language === 'English' ? DialogImageMobileEng2 : DialogImageMobileIta2;
        case 3:
            return props.language === 'English' ? DialogImageMobileEng3 : DialogImageMobileIta3;
        default:
            return '';
    }
}

</script>

<script>

// Needed by v-window component in mobile view
export default {
    data() {
        return {
            window: 0,
            length: 3
        };
    },
};

</script>

<template>
    <v-dialog v-model="isDialogActive" max-width="800" transition="dialog-top-transition">
        <template v-slot:activator="{ props: activatorProps }">
            <v-btn variant="text" rounded v-bind="activatorProps" height="60">
                <div class="d-flex flex-column">
                    <v-card-text class="ma-0 pa-0 text-left text-decoration-underline text-secondary font-italic">
                        {{ language === 'English' ? 'How to use' : 'Come usare'}}
                    </v-card-text>
                    <v-card-text class="ma-0 pa-0 text-left text-decoration-underline text-secondary font-italic">
                        {{ language === 'English' ? 'this website?' : 'questo sito?' }}
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

                <v-card-text v-if="mobile" align="center">
                    <p class="mobile-dialog-title">
                        {{ language === 'English' ? "How the possibilities change based on where you're from?" : "Come cambiano le possibilità in base a dove vivi?" }}
                    </p>
                </v-card-text>
                <v-card-text v-else align="center">
                    <h1>
                        {{ language === 'English' ? "How the possibilities change based on where you're from?" : "Come cambiano le possibilità in base a dove vivi?" }}
                    </h1>
                </v-card-text>

                <v-card-text align="center">
                    <p>
                        {{ language === 'English' ? 'Find out by comparing the stories' : 'Scoprilo comparando le storie' }}
                    </p>
                    <p>
                        {{ language === 'English' ? 'that are behind passports' : 'che si celano dietro ai passaporti' }}
                    </p>
                </v-card-text>

                <v-window v-if="mobile" v-model="window" show-arrows>
                    <v-window-item v-for="n in length" :key="n" align="center">
                        <v-img :src="getDialogImage(n)" alt="Placeholder" width="150px"></v-img>
                    </v-window-item>
                </v-window>
                <v-row v-else>
                    <v-col align="right">
                        <v-img :src="props.language === 'English' ? DialogImageDesktopEng1 : DialogImageDesktopIta1" alt="Placeholder" width="150px"></v-img>
                    </v-col>
                    <v-col align="center">
                        <v-img :src="props.language === 'English' ? DialogImageDesktopEng2 : DialogImageDesktopIta2" alt="Placeholder" width="150px"></v-img>
                    </v-col>
                    <v-col>
                        <v-img :src="props.language === 'English' ? DialogImageDesktopEng3 : DialogImageDesktopIta3" alt="Placeholder" width="150px"></v-img>
                    </v-col>
                </v-row>

                <v-col align="center" class="mt-4 mb-3">
                    <v-btn @click="isActive.value = false" color="blue" class="text-none">
                        {{ language === 'English' ? 'Ok! I understand' : 'Ok! Ho capito' }}
                    </v-btn>
                </v-col>
            </v-card>
        </template>
    </v-dialog>
</template>

<style scoped>
.mobile-dialog-title {
    font-size: 22px;
    font-weight: bold;
}
</style>