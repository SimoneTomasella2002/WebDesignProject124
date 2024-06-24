<script setup>
import { ref, watch } from 'vue'

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

const emitSelected = (language) => {
    console.log("emitSelected has been called with value " + language + " From SelectLanguage.vue")
    localSelected.value = language
    emit('update:selected', language)
}

console.log(localSelected.value + " From SelectLanguage.vue")
console.log(props.languages.values + " From SelectLanguage.vue")
console.log(props.selected.value + " From SelectLanguage.vue")

</script>

<template>

    <v-menu>
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" icon="mdi-translate" color="secondary"></v-btn>
        </template>
        <v-list>
            <v-list-item @click="() => emitSelected( item.language )" v-for="(item, index) in props.languages" :key="index" :value="index">
                <v-list-item-title> {{ item.language }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>

</template>