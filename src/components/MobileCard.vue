<script setup>
const props = defineProps({
    id: Number,
    description: String,
    image: String,
    showText: Boolean,
})

const emit = defineEmits(['update:showText'])

const handleUpdate = () => {
    emit('update:showText', props.id)
}
</script>

<template>
    <div class="card-wrapper">
        <v-card class="ma-0 pa-0 rounded-xl overflow-hidden bg-primary flip-card" :class="{ 'is-flipped': showText }"
            elevation="5" @click="handleUpdate">
                <div class="card-front" v-show="!showText">
                        <v-img class="ma-0 pa-0" cover :src="image" alt="Story Image" width="100%" height="100%"></v-img>
                </div>
            <v-card-item class="ma-0 pa-0 rounded-xl">
                <v-card-text class="card-back" v-show="showText" style="height: 30.608vh; width: 70vw;">
                    {{ description }}
                </v-card-text>
            </v-card-item>
        </v-card>
    </div>
</template>


<style scoped>
.card-wrapper {
    perspective: 1000px;
}

.flip-card {
    width: 70vw;
    height: 30.608vh;
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
