<script setup>
import { ref } from 'vue';
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

const swipeDirection = ref('Right'); // Right => passport 1, Left => passport 2

const swipe = (direction) => {
    swipeDirection.value = direction;
}
</script>

<template>
    <v-window class="pa-4 d-flex justify-center align-center w-100" color="background"
        :touch="{ left: () => swipe('Left'), right: () => swipe('Right') }" role="main">
        <LeftTimeline v-show="swipeDirection === 'Right'" :selected1="props.selected1" :selected2="props.selected2"
            :language="props.language"
            :class="{ 'move-left': swipeDirection === 'Left', 'move-right': swipeDirection === 'Right' }" />
        <RightTimeline v-show="swipeDirection === 'Left'" :selected1="props.selected1" :selected2="props.selected2"
            :language="props.language"
            :class="{ 'move-left': swipeDirection === 'Left', 'move-right': swipeDirection === 'Right' }" />
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
