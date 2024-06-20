<script setup>
import { computed } from 'vue';
import Timeline from '@/components/Timeline/Timeline.vue';
import TimelineRow from '@/components/Timeline/TimelineRowMobile.vue'; // Assicurati di avere la componente correttamente aggiornata e importata
import StoryBoardCard from '@/components/Timeline/TimeLineItems/StoryBoard.vue';
import EdgeCard from '@/components/Timeline/TimeLineItems/EdgeCard.vue';
import images from '@/images';
import Stories from '@/assets/json/stories.json';

const props = defineProps({
    selected1: {
        type: Object,
        default: null,
    },
    selected2: {
        type: Object,
        default: null,
    },
});

const leftName = computed(() => props.selected1?.name || null);
const rightName = computed(() => props.selected2?.name || null);

const getDescription = (name, index) => {
    return name ? (Stories[name][index]?.description || 'Descrizione non disponibile') : 'Nessun nome selezionato';
};

const getImageSrc = (name, index) => {
    return name ? (images[`${name}${index + 1}`] || images['Tara5']) : images['Tara5'];
};
</script>

<template>
    <v-sheet class="mt-5 d-flex flex-column justify-start align-end" color="background" height="82vh">
        <v-card class="mr-10 d-flex" color="red" density="comfortable" rounded="lg" width="9vw" height="4vh">
            <v-card-text class="ma-0 pa-0 d-flex justify-center align-center">Età</v-card-text>
        </v-card>
        <v-card height="1vh"></v-card>
        <v-card class="w-100 bg-background" flat>
            <Timeline class="">
                <TimelineRow :age="5" :mobile="true">
                    <template v-slot:sx-edge-card>
                        <EdgeCard :text="getDescription(leftName, 0)" />
                    </template>
                    <template v-slot:sx-story-board>
                        <StoryBoardCard :imageSrc="getImageSrc(leftName, 0)" />
                    </template>
                    <template v-slot:dx-story-board>
                        <StoryBoardCard :imageSrc="getImageSrc(rightName, 0)" />
                    </template>
                    <template v-slot:dx-edge-card>
                        <EdgeCard :text="getDescription(rightName, 0)" />
                    </template>
                </TimelineRow>
            </Timeline>
        </v-card>
    </v-sheet>
</template>

<style scoped>
.timeline::before {
    width: 6vw;
    border-radius: 2vw;
}
</style>
