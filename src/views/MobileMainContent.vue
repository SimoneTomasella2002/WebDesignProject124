<script>
import { ref } from 'vue';
import LeftTimeline from '@/components/Timeline/LeftTimeline.vue';
import RightTimeline from '@/components/Timeline/RightTimeline.vue';

export default {
    components: {
        LeftTimeline,
        RightTimeline
    },
    props: {
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
    },
    setup() {
        const swipeDirection = ref('Right');

        const swipe = (direction) => {
            swipeDirection.value = direction;
        };

        return {
            swipeDirection,
            swipe
        };
    }
};
</script>

<template>
    <v-window class="pa-4 d-flex justify-center align-center" color="background"
        :touch="{ left: () => swipe('Left'), right: () => swipe('Right') }" role="main">
        <transition
            :enter-active-class="`${swipeDirection === 'Right' ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__fadeInRight'} animate__fast`"
            :leave-active-class="`${swipeDirection === 'Right' ? 'animate__animated animate__fadeOutRight' : 'animate__animated animate__fadeOutLeft'} animate__fast`"
            mode="out-in">
            <component :is="swipeDirection === 'Right' ? 'LeftTimeline' : 'RightTimeline'" :key="swipeDirection"
                :selected1="selected1" :selected2="selected2" :language="language">
            </component>
        </transition>
    </v-window>
</template>

<style scoped>
.animate__fast {
    --animate-duration: 0.5s;
}
</style>
