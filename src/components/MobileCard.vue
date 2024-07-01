<template>
    <div class="card-wrapper">
        <v-card class="ma-0 pa-0 rounded-xl overflow-hidden bg-primary flip-card"
            :style="{ height: computedHeight, maxHeight: maxComputedHeight }" :class="{ 'is-flipped': showText }"
            elevation="5" @click="handleUpdate">
            <div class="card-front" v-show="!showText">
                <v-img class="ma-0 pa-0" :src="cachedImage" cover alt="Story Image" width="100%" height="100%"></v-img>
            </div>
            <v-card-item class="ma-0 pa-0 rounded-xl">
                <v-card-text class="card-back" v-show="showText"
                    :style="{ height: computedHeight, maxHeight: maxComputedHeight, width: '70vw' }">
                    {{ description }}
                </v-card-text>
            </v-card-item>
        </v-card>
    </div>
</template>

<script setup>
import { computed, ref, watch, onMounted } from 'vue';
import { useDisplay } from 'vuetify';
import { cacheImage } from '@/indexedDBCache';

const { name, width } = useDisplay();

const props = defineProps({
    id: Number,
    description: String,
    imageSrc: String,
    showText: Boolean,
})

const emit = defineEmits(['update:showText'])

const handleUpdate = () => {
    emit('update:showText', props.id)
}

const computedHeight = computed(() => {
    switch (name.value) {
        case 'xs':
            if (width.value > 500) return '40.608vh'
            return '30.608vh'
        case 'sm':
            return '40.608vh'
        default:
            return '30.608vh'
    }
})

const maxComputedHeight = computed(() => {
    switch (name.value) {
        case 'xs':
            if (width.value > 500) return '300px'
            return '200px'
        case 'sm':
            return '400px'
        default:
            return '200px'
    }
})

const cachedImage = ref(props.imageSrc);

const updateCachedImage = async () => {
    if (!props.imageSrc) {
        console.warn('Image source is empty or undefined');
        return;
    }
    try {
        cachedImage.value = await cacheImage(props.imageSrc);
    } catch (error) {
        console.error('Error caching image:', error);
        cachedImage.value = props.imageSrc;
    }
};

onMounted(updateCachedImage);

// Osserva i cambiamenti della prop imageSrc
watch(() => props.imageSrc, updateCachedImage);
</script>

<style scoped>
.card-wrapper {
    perspective: 1000px;
}

.flip-card {
    width: 70vw;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    position: relative;
}

.flip-card.is-flipped {
    transform: rotateY(180deg);
}

.card-front {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-back {
    transform: rotateY(180deg);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>