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
    <v-card class="rounded-xl overflow-hidden bg-primary" elevation="5" @click="handleUpdate">
        <v-card-item class="ma-0 pa-0 rounded-xl">
            <v-card-text v-if="showText" style="height: 30.608vh; width: 70vw;">
                {{ props.description }}
            </v-card-text>
            <v-card-text v-else class="ma-0 pa-0 d-flex justify-center align-center rounded-xl">
                <v-img class="ma-0 pa-0 d-flex justify-center align-center" :src="props.image" alt="Story Image"
                    width="70vw">
                </v-img>
            </v-card-text>
        </v-card-item>
    </v-card>
</template>