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
            :enter-active-class="`${swipeDirection === 'Right' ? 'scroll-in-left' : 'scroll-in-right'}`"
            :leave-active-class="`${swipeDirection === 'Right' ? 'scroll-out-right' : 'scroll-out-left'}`"
            mode="out-in">
            <component :is="swipeDirection === 'Right' ? 'LeftTimeline' : 'RightTimeline'" :key="swipeDirection"
                :selected1="selected1" :selected2="selected2" :language="language">
            </component>
        </transition>
    </v-window>
</template>

<style scoped>
.scroll-in-left {
    animation: scroll-in-left 0.5s forwards;
}

.scroll-in-right {
    animation: scroll-in-right 0.5s forwards;
}

.scroll-out-left {
    animation: scroll-out-left 0.5s forwards;
}

.scroll-out-right {
    animation: scroll-out-right 0.5s forwards;
}

@keyframes scroll-in-left {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes scroll-in-right {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes scroll-out-left {
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(-100%);
        opacity: 0;
    }
}

@keyframes scroll-out-right {
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(100%);
        opacity: 0;
    }
}
</style>
