<template>
    <v-timeline class="mb-4" side="start" line-color="red" line-thickness="30" density="compact" truncate-line="both">
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
                :image="imageCache[story.index]" :show-text="activeId === story.index"
                @update:show-text="updateActiveId" class="d-flex justify-center align-center" />
            <template #icon>
                <span class="my-icon rounded-circle bg-red text-center text-timelineNumbers">
                    {{ story.age }}
                </span>
            </template>
        </v-timeline-item>
    </v-timeline>
</template>

<script setup>
import { computed, ref, watch, onMounted } from 'vue';
import images from '@/images';
import Stories from '@/assets/json/stories.json';
import MobileCard from '@/components/MobileCard.vue';
import { setImage, getImage } from '@/indexedDB';

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
    activeId.value == id ? activeId.value = 0 : activeId.value = id;
}

const imageCache = ref({});

const fetchImage = async (index, name) => {
    const imageName = `${name.replace(/-/g, '_')}${index}`;
    const cachedImage = await getImage(imageName);
    if (cachedImage) {
        imageCache.value = { ...imageCache.value, [index]: cachedImage };
    } else {
        const imageUrl = images[imageName];
        imageCache.value = { ...imageCache.value, [index]: imageUrl };
        await setImage(imageName, imageUrl);
    }
};

watch(leftName, (newLeftName) => {
    Stories[newLeftName].forEach(story => {
        fetchImage(story.index, newLeftName);
    });
});

onMounted(() => {
    Stories[leftName.value].forEach(story => {
        fetchImage(story.index, leftName.value);
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
