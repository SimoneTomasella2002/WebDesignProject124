<template>
    <v-container>
        <v-row justify="center">
            <v-timeline class="mb-4" side="start" line-color="red" line-thickness="30" density="compact"
                truncate-line="both">
                <v-timeline-item line-inset="1" fill-dot dot-color="background" size="45">
                    <template #icon>
                        <span class="rounded-lg bg-red w-100 text-center text-h6 text-timelineNumbers">
                            {{ language === 'English' ? 'Age' : 'Età' }}
                        </span>
                    </template>
                </v-timeline-item>
                <v-timeline-item v-for="story in Stories[leftName]" :key="story.index" size="65">
                    <MobileCard :id="story.index"
                        :description="language === 'English' ? story.description_en : story.description"
                        :image-src="`/illustrations/${leftName}/${leftName + story.index}.svg`"
                        :show-text="activeId === story.index" @update:show-text="updateActiveId"
                        class="d-flex justify-center align-center" />
                    <template #icon>
                        <span class="my-icon rounded-circle bg-red text-center text-timelineNumbers">
                            {{ story.age }}
                        </span>
                    </template>
                </v-timeline-item>
            </v-timeline>
        </v-row>
    </v-container>
</template>

<script setup>
import { computed, ref, watch, onMounted } from 'vue';
import Stories from '@/assets/json/stories.json';
import MobileCard from '@/components/MobileCard.vue';
import { cacheImage } from '@/indexedDBCache';

const props = defineProps({
    selected1: {
        type: Object,
        default: null,
    },
    selected2: {
        type: Object,
        default: null,
    },
    language: {
        type: Object,
        default: null,
    }
});

const leftName = computed(() => props.selected1.name);
const language = computed(() => props.language.language);

const activeId = ref(0);

const updateActiveId = (id) => {
    activeId.value = activeId.value === id ? 0 : id;
};

const preloadAdjacentImages = (currentIndex) => {
    const stories = Stories[leftName.value];
    const preloadIndexes = [currentIndex - 1, currentIndex + 1];

    preloadIndexes.forEach((index) => {
        if (index >= 0 && index < stories.length) {
            const src = `/illustrations/${leftName.value}/${leftName.value + stories[index].index}.svg`;
            cacheImage(src).catch(console.error);
        }
    });
};

watch(activeId, (newId) => {
    preloadAdjacentImages(newId);
});

watch(() => props.selected1, () => {
    activeId.value = 0;

    Stories[leftName.value].forEach((story) => {
        const src = `/illustrations/${leftName.value}/${leftName.value + story.index}.svg`;
        cacheImage(src).catch(console.error);
    });
});

onMounted(() => {
    Stories[leftName.value].forEach((story) => {
        const src = `/illustrations/${leftName.value}/${leftName.value + story.index}.svg`;
        cacheImage(src).catch(console.error);
    });
});
</script>

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