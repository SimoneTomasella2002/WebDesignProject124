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
    <v-window class="py-4" color="background" :touch="{ left: () => swipe('Left'), right: () => swipe('Right') }"
        role="main">
        <transition
            :enter-active-class="swipeDirection === 'Left' ? 'animate__animated animate__fadeInRight animate__fast' : 'animate__animated animate__fadeInLeft animate__fast'"
            :leave-active-class="swipeDirection === 'Left' ? 'animate__animated animate__fadeOutLeft animate__fast' : 'animate__animated animate__fadeOutRight animate__fast'"
            mode="out-in">
            <component :is="swipeDirection === 'Right' ? LeftTimeline : RightTimeline" :selected1="props.selected1"
                :selected2="props.selected2" :language="props.language" />
        </transition>
    </v-window>
</template>

<style scoped>
.animate__fast {
    --animate-duration: 0.5s;
}
</style>
