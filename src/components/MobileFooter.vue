<script setup>
import { ref, computed } from 'vue';
import Select from './Select.vue';

const props = defineProps({
    items: {
        type: Array,
        required: true,
    },
})

const emit = defineEmits(['update:selected1', 'update:selected2'])

const selected1 = ref(null)
const selected2 = ref(null)

const updateSelected1 = (value) => {
    selected1.value = value
    emit('update:selected1', value)
}

const updateSelected2 = (value) => {
    selected2.value = value
    emit('update:selected2', value)
}

const filteredItems1 = computed(() => {
    return props.items.filter(item => item.name !== selected2.value?.name)
})

const filteredItems2 = computed(() => {
    return props.items.filter(item => item.name !== selected1.value?.name)
})
</script>

<template>
    <v-bottom-navigation>
        <v-col>
            <Select :items="filteredItems1" label="Passport 1" :selected="selected1"
                @update:selected="updateSelected1" />
        </v-col>
        <v-col>
            <Select :items="filteredItems2" label="Passport 2" :selected="selected2"
                @update:selected="updateSelected2" />
        </v-col>
    </v-bottom-navigation>
</template>