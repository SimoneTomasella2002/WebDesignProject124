<script setup>
import { ref, onUpdated, computed } from 'vue';

const props = defineProps({
    id: Number,
    description: String,
    image: String,
    showText: Boolean,
})

onUpdated(() => {
    console.log('MobileCard ', props.id, ' updated');
})

const emit = defineEmits(['update:showText'])

const handleUpdate = () => {
    emit('update:showText', props.id)
}
</script>

<template>
    <v-card class="rounded-xl overflow-auto bg-primary" elevation="5" min-height="215" height="23.5vh" width="68vw"
        @click="handleUpdate">
        <v-card-item class="ma-0 pa-0 rounded-xl">
            <v-card-text v-if="showText" class="mt-5 mx-4 pa-0">
                {{ props.description }}
            </v-card-text>
            <v-card-text v-else class="ma-0 pa-0 d-flex justify-center align-center rounded-xl">
                <v-img class="ma-0 pa-0 d-flex justify-center align-center" :src="props.image" alt="Story Image"
                    width="68vw">
                </v-img>
            </v-card-text>
        </v-card-item>
    </v-card>
</template>