<script setup>
import { computed, ref } from 'vue';
import images from '@/images';
import Stories from '@/assets/json/stories.json';
import MobileCard from '@/components/MobileCard.vue';

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

const activeId = ref(0);

const updateActiveId = (id) => {
    activeId.value == id ? activeId.value = 0 : activeId.value = id;
}

const swipeDirection = ref('None'); // Right => passport 1, Left => passport 2

const swipe = (direction) => {
    swipeDirection.value = direction;
    console.log('Swipe direction: ', swipeDirection.value);
}

const name = computed(() => swipeDirection.value === 'Left' ? rightName.value : leftName.value);
const side = computed(() => swipeDirection.value === 'Left' ? 'end' : 'start');
</script>

<template>
    <v-window class="mb-4" color="background" :touch="{ left: () => swipe('Left'), right: () => swipe('Right') }">
        <v-timeline class="mb-4" :side="side" line-color="red" line-thickness="30" density="comfortable"
            truncate-line="both">
            <v-timeline-item line-inset="1" fill-dot dot-color="background" size="45">
                <template #icon>
                    <span class="rounded-lg bg-red w-100 text-center text-h6">
                        Età
                    </span>
                </template>
            </v-timeline-item>
            <v-timeline-item v-for="story in Stories[name]" :key="story.index" size="65">
                <MobileCard :id="story.index" :description="story.description" :image="images[name + story.index]"
                    :show-text="activeId === story.index" @update:show-text="updateActiveId"></MobileCard>
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
