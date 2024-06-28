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

const swipeDirection = ref('Right'); // Right => passport 1, Left => passport 2

const swipe = (direction) => {
    swipeDirection.value = direction;
}

function imageName(index, name) {
    return `${name.replace(/-/g, '_')}${index}`;
}
</script>

<template>
    <v-window class="pa-4 d-flex justify-center align-center" color="background"
        :touch="{ left: () => swipe('Left'), right: () => swipe('Right') }" role="main">
        <Transition :name="swipeDirection === 'Right' ? 'scroll-right' : 'scroll-left'">
            <v-timeline v-if="swipeDirection === 'Right'" class="mb-4" side="start" line-color="red" line-thickness="30"
                density="compact" truncate-line="both">
                <v-timeline-item line-inset="1" fill-dot dot-color="background" size="45">
                    <template #icon>
                        <span class="rounded-lg bg-red w-100 text-center text-h6">
                            {{ language === 'English' ? 'Age' : 'Età' }}
                        </span>
                    </template>
                </v-timeline-item>
                <v-timeline-item v-for="story in Stories[leftName]" :key="story.index" size="65">
                    <MobileCard :id="story.index"
                        :description="language === 'English' ? story.description_en : story.description"
                        :image="images[imageName(story.index, leftName)]" :show-text="activeId === story.index"
                        @update:show-text="updateActiveId" class="d-flex justify-center align-center" />
                    <template #icon>
                        <span class="my-icon rounded-circle bg-red text-center">
                            {{ story.age }}
                        </span>
                    </template>
                </v-timeline-item>
            </v-timeline>
            <v-timeline v-else class="mb-4" side="end" line-color="red" line-thickness="30" density="compact"
                truncate-line="both">
                <v-timeline-item line-inset="1" fill-dot dot-color="background" size="45">
                    <template #icon>
                        <span class="rounded-lg bg-red w-100 text-center text-h6">
                            {{ language === 'English' ? 'Age' : 'Età' }}
                        </span>
                    </template>
                </v-timeline-item>
                <v-timeline-item v-for="story in Stories[rightName]" :key="story.index" size="65">
                    <MobileCard :id="story.index"
                        :description="language === 'English' ? story.description_en : story.description"
                        :image="images[imageName(story.index, rightName)]" :show-text="activeId === story.index"
                        @update:show-text="updateActiveId" class="d-flex justify-center align-center" />
                    <template #icon>
                        <span class="my-icon rounded-circle bg-red text-center">
                            {{ story.age }}
                        </span>
                    </template>
                </v-timeline-item>
            </v-timeline>
        </Transition>
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

.scroll-left-enter-active,
.scroll-left-leave-active,
.scroll-right-enter-active,
.scroll-right-leave-active {
    transition: transform 0.5s ease, opacity 0.5s ease;
}

.scroll-left-enter,
.scroll-right-leave-to {
    transform: translateX(100%);
    opacity: 0;
}

.scroll-left-leave-to,
.scroll-right-enter {
    transform: translateX(-100%);
    opacity: 0;
}
</style>
