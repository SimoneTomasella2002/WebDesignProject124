<script setup>
import { ref } from 'vue'

const props = defineProps(['people', 'label', 'selectId'])
const person = ref(null)
const emit = defineEmits(['toggleVisibility'])
const handleUpdate = (person) => {
    emit('toggleVisibility', person, props.selectId)
}
</script>

<template>
    <v-select variant="outlined" density="compact" rounded :items="people" item-title="name" hint="Choose a passport"
        persistent-hint hide-selected hide-no-data bg-color="background" :label="label" single-line return-object
        v-model="person" @update:model-value="handleUpdate">
        <!-- <template v-slot:append-inner>
            <div style="position: relative; left: 1rem;">
                <v-icon icon="mdi-power-on" class="text-stroke"></v-icon>
            </div>
        </template> -->
        <template v-slot:selection="{ item }">
            <span
                class="text-red font-weight-bold d-flex justify-start align-center text-truncate text-no-wrap text-md-subtitle-2 text-lg-body-1">
                {{ item.title }}
                <v-img :src="item.raw.img" alt="Flag" width="40" height="16"></v-img>
            </span>
        </template>
        <template v-slot:item="{ props, item }">
            <v-list-item v-bind="props" class="bg-infoBackground">
                <template v-slot:title>
                    <span class="text-secondary d-flex justify-start align-center">
                        {{ item.raw.name }}
                        <v-img :src="item.raw.img" alt="Flag" max-width="40" height="16"></v-img>
                    </span>
                </template>
            </v-list-item>
        </template>
    </v-select>
</template>