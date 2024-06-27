<script setup>
import { ref, watch, onUpdated, computed } from 'vue'

const props = defineProps({
    languages: {
        type: Array,
        required: true
    },
    selected: {
        type: Object,
        default: null
    },
    isMobile: {
        type: Boolean,
        default: false,
    }
})

const emit = defineEmits(['update:selected'])

const localSelected = ref(props.selected)

const language = computed(() => localSelected.value.language)

const mobile = computed(() => props.isMobile)

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
    <v-menu :location="mobile ? 'end' : 'bottom'">
        <template v-slot:activator="{ props }">
            <v-btn v-if="!mobile" v-bind="props" icon="mdi-translate" color="secondary"></v-btn>
            <v-btn v-else v-bind="props" prepend-icon="mdi-translate" color="secondary" variant="text" class="text-none" rounded> {{ language === 'English' ? 'Language' : 'Lingua' }}</v-btn>
        </template>
        <v-list>
            <v-list-item :disabled="item === localSelected" @click="() => emitSelected( item )" v-for="(item, index) in props.languages" :key="index" :value="index">
                <v-list-item-title> {{ item.language }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>

</template>