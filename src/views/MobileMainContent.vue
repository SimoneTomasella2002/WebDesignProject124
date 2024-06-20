<script setup>
import { computed } from 'vue';
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
    <v-sheet class="mt-5 mb-5" color="background">
        <v-card class="d-flex w-100 justify-end align-center" density="compact" color="background" flat>
            <v-card-item>
                <v-card-text class="d-flex justify-center align-center w-0">Età</v-card-text>
            </v-card-item>
        </v-card>
        <v-timeline side="start" line-color="red" line-thickness="6vw" density="comfortable" truncate-line="end">
            <v-timeline-item
                v-for="story in Stories[leftName]"
                :key="story.description"
                dot-color="red"
                size="large"
            >
            <v-card class="w-100">
                <v-card-text>{{ story.description }}</v-card-text>
            </v-card>
            </v-timeline-item>
        </v-timeline>
    </v-sheet>
</template>

<style scoped>
.timeline::before {
    width: 6vw;
    border-radius: 2vw;
}
</style>
