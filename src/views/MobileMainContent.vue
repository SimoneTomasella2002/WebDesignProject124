<script setup>
import { ref } from 'vue';
import LeftTimeline from '@/components/Timeline/LeftTimeline.vue';
import RightTimeline from '@/components/Timeline/RightTimeline.vue';
import 'animate.css';

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
        <transition
            :enter-active-class="`${swipeDirection === 'Right' ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__fadeInRight'} animate__fast`"
            :leave-active-class="`${swipeDirection === 'Right' ? 'animate__animated animate__fadeOutRight' : 'animate__animated animate__fadeOutLeft'} animate__fast`"
            mode="out-in">
            <component :is="swipeDirection === 'Right' ? LeftTimeline : RightTimeline"
                       :selected1="props.selected1" :selected2="props.selected2" :language="props.language" />
        </transition>
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

.animate__fast {
    --animate-duration: 0.5s;
}
</style>
