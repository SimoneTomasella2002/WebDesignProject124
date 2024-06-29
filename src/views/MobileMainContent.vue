<script setup>
import { computed, ref } from 'vue';
import images from '@/images';
import Stories from '@/assets/json/stories.json';
import MobileCard from '@/components/MobileCard.vue';
import LeftTimeline from '@/components/Timeline/LeftTimeline.vue';
import RightTimeline from '@/components/Timeline/RightTimeline.vue';

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
        <LeftTimeline v-show="swipeDirection === 'Right'"  :selected1="props.selected1" :selected2="props.selected2" :language="props.language" />
        <RightTimeline v-show="swipeDirection === 'Left'" :selected1="props.selected1" :selected2="props.selected2" :language="props.language" />
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
