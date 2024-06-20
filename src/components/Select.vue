<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
    items: {
        type: Array,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
    selected: {
        type: Object,
        default: null,
    },
})

const emit = defineEmits(['update:selected'])

const localSelected = ref(props.selected)

watch(localSelected, (newValue) => {
    emit('update:selected', newValue)
})

const emitSelected = () => {
    emit('update:selected', localSelected.value)
}
</script>

<template>
    <v-select variant="outlined" density="comfortable" rounded :items="items" item-title="name" hint="Choose a passport"
        persistent-hint bg-color="background" :label="label" single-line return-object v-model="localSelected"
        @change="emitSelected" hide-selected hide-no-data>
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