<script setup>
import {ref, watch} from 'vue'

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

const emitSelected = () => {
    emit('update:selected', localSelected.value)
}

var toggleSelect = false

</script>

<template>
    <v-btn @click="toggleSelect = !toggleSelect" density="compact" icon="mdi-translate" />
    <v-select 
        v-if = "toggleSelect"
        :menu-props = "{value: toggleSelect}"    
        variant="outlined" :density="density" rounded :languages="languages" 
        bg-color="background" label="Language" @change="emitSelected"
    >
    </v-select>
</template>