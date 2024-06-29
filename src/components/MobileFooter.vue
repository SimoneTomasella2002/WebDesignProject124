<script setup>
import { ref } from 'vue';
import Select from './Select.vue';

const props = defineProps({
    isMobile: {
        type: Boolean,
        required: true,
    },
    items: {
        type: Array,
        required: true,
    },
    language: {
        type: Object,
        default: null,
    }
})

const emit = defineEmits(['update:selected1', 'update:selected2'])

const selected1 = ref(props.items[0])
const selected2 = ref(props.items[1])

const updateSelected1 = (value) => {
    selected1.value = value
    emit('update:selected1', value)
}

const updateSelected2 = (value) => {
    selected2.value = value
    emit('update:selected2', value)
}
</script>

<template>
    <v-bottom-navigation class="bg-primary" style="height: 64px ">
        <v-col>
            <Select :items="items" label="Passport 1" :selected="selected1" :is-mobile="isMobile" :language="language"
                @update:selected="updateSelected1" />
        </v-col>
        <v-col>
            <Select :items="items" label="Passport 2" :selected="selected2" :is-mobile="isMobile" :language="language"
                @update:selected="updateSelected2" />
        </v-col>
    </v-bottom-navigation>
</template>