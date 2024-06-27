<script setup>
import { computed, ref } from 'vue';
import images from '@/images';
import Stories from '@/assets/json/stories.json';
import MobileCard from '@/components/MobileCard.vue';
import backgroundImage from '@/assets/images/pattern/Pattern_1080x1920.png';

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
const rightName = computed(() => props.selected2.name);
const language = computed(() => props.language.language);

const activeId = ref(0);

const updateActiveId = (id) => {
    activeId.value == id ? activeId.value = 0 : activeId.value = id;
}

const swipeDirection = ref('None'); // Right => passport 1, Left => passport 2

const swipe = (direction) => {
    swipeDirection.value = direction;
}

const name = computed(() => swipeDirection.value === 'Left' ? rightName.value : leftName.value);
const side = computed(() => swipeDirection.value === 'Left' ? 'end' : 'start');
function imageName(index) {
    return `${name.value.replace(/-/g, '_')}${index}`;
}
</script>

<template>
    <v-window class="pa-4 d-flex justify-center align-center" color="background"
        :style="{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'}"
        :touch="{ left: () => swipe('Left'), right: () => swipe('Right') }" role="main">
        <v-timeline class="mb-4" :side="side" line-color="red" line-thickness="30" density="compact"
            truncate-line="both">
            <v-timeline-item line-inset="1" fill-dot dot-color="background" size="45">
                <template #icon>
                    <span class="rounded-lg bg-red w-100 text-center text-h6">
                        {{ language === 'English' ? 'Age' : 'Età' }}
                    </span>
                </template>
            </v-timeline-item>
            <v-timeline-item v-for="story in Stories[name]" :key="story.index" size="65">
                <MobileCard :id="story.index"
                    :description="language === 'English' ? story.description_en : story.description"
                    :image="images[imageName(story.index)]" :show-text="activeId === story.index"
                    @update:show-text="updateActiveId" class="d-flex justify-center align-center" </MobileCard>
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
