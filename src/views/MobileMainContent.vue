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
        <v-timeline side="start" line-color="red" line-thickness="30" density="comfortable" truncate-line="both">
            <v-timeline-item line-inset="1" fill-dot dot-color="background" size="45">
                <template #icon>
                    <span class="rounded-lg bg-red w-100 text-center text-h6">
                        Età
                    </span>
                </template>
            </v-timeline-item>
            <v-timeline-item v-for="story in Stories[leftName]" :key="story.description" size="65">
                <v-card class="rounded-xl" elevation="10" height="27vh" width="67vw">
                    <v-card-item>
                        <v-card-text class="ma-5">{{ story.description }}</v-card-text>
                    </v-card-item>
                </v-card>
                <template #icon>
                    <span class="my-icon rounded-circle bg-red text-center">
                        {{ story.age }}
                    </span>
                </template>
            </v-timeline-item>
        </v-timeline>
    </v-sheet>
</template>

<style scoped>
.my-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 65px;
    height: 65px;
    line-height: 65px;
    font-size: 1.5rem;
    font-weight: bold;
    color: #EBD9BA;
    border: 3px solid #EBD9BA;
}
</style>
