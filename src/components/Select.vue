<script setup>
const props = defineProps(['people', 'label'])
const emits = defineEmits(['personSelected'])

let selectedPerson = null

const handleSelect = (selected) => {
    console.log(selected)
    selectedPerson = selected
    emits.personSelected(selectedPerson)
}
</script>

<template>
    <v-select variant="outlined" density="compact" class="text-button-text" rounded :items="people" item-title="name"
        :label="label" hint="Choose a passport" persistent-hint hide-selected>
        <template v-slot:item="{ props, item }">
            <v-list-item v-bind="props">
                <template v-slot:title>
                    <span class="text-button-text" style="display: flex; justify-content: start; align-items: center;">
                        {{ item.raw.name }}
                        <v-img :src="item.raw.img" alt="Flag" max-width="40" height="16"></v-img>
                    </span>
                </template>
            </v-list-item>
        </template>
    </v-select>
</template>