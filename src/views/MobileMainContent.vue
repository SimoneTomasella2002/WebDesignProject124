<script setup>
import { computed, ref } from 'vue';
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

const showText = ref(false);
</script>

<template>
    <v-window class="mb-4" color="background">
        <v-timeline class="mb-2" side="start" line-color="red" line-thickness="30" density="comfortable"
            truncate-line="both">
            <v-timeline-item line-inset="1" fill-dot dot-color="background" size="45">
                <template #icon>
                    <span class="rounded-lg bg-red w-100 text-center text-h6">
                        Età
                    </span>
                </template>
            </v-timeline-item>
            <v-timeline-item v-for="story in Stories[leftName]" :key="story.index" size="65">
                <v-card class="rounded-xl overflow-auto bg-primary" elevation="5" min-height="215" height="23.5vh"
                    width="68vw" @click="{ showText = !showText; console.log(showText) }">
                    <v-card-item class="ma-0 pa-0 rounded-xl">
                        <v-card-text v-if="showText" class="mt-5 mx-4 pa-0">
                            {{ story.description }}
                        </v-card-text>
                        <v-card-text v-else class="ma-0 pa-0 d-flex justify-center align-center rounded-xl">
                            <v-img class="ma-0 pa-0 d-flex justify-center align-center"
                                :src="images[leftName + story.index]" alt="Story Image" width="68vw">
                            </v-img>
                        </v-card-text>
                    </v-card-item>
                </v-card>
                <template #icon>
                    <span class="my-icon rounded-circle bg-red text-center">
                        {{ story.age }}
                    </span>
                </template>
            </v-timeline-item>
        </v-timeline>
    </v-window>
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
    border: 3px solid #FFF2DB;
}
</style>
