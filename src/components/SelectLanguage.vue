<script setup>
import { ref, watch, onUpdated } from 'vue'

const props = defineProps({
    languages: {
        type: Array,
        required: true
    },
    selected: {
        type: Object,
        default: null
    }
})

const emit = defineEmits(['update:selected'])

const localSelected = ref(props.selected)

watch(localSelected, (newValue) => {
    emit('update:selected', newValue)
})

const emitSelected = (item) => {
    localSelected.value = item
    emit('update:selected', item)
}

onUpdated(() => {
    console.log("SelectLanguage - Selected Language: ", localSelected.value)
})
</script>

<template>

    <v-menu>
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" icon="mdi-translate" color="secondary"></v-btn>
        </template>
        <v-list>
            <v-list-item @click="() => emitSelected( item )" v-for="(item, index) in props.languages" :key="index" :value="index">
                <v-list-item-title> {{ item.language }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>

</template>