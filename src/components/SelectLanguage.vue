<script setup>
import { ref, watch } from 'vue'

const properties = defineProps({
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

const localSelected = ref(properties.selected)

watch(localSelected, (newValue) => {
    emit('update:selected', newValue)
})

const emitSelected = () => {
    console.log("emitSelected has been called")

    //emit('update:selected', localSelected.value)
}

//const toggleSelect = ref(false)

console.log(properties.languages + "From SelectLanguage.vue");

</script>

<template>
    <v-menu>
        <template v-slot:activator="{ props }">
            <v-btn icon="mdi-translate" size="large" v-bind="props" />
        </template>
        <v-list>
            <v-list-item v-for="(item, index) in items" :key="index" :value="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>

    <!--
    <v-select 
        v-if = "toggleSelect"
        :menu-props = "{value: toggleSelect}"    
        variant="outlined" :density="density" rounded :languages="languages" 
        bg-color="background" label="Language" @change="emitSelected"
        single-line return-object v-model="localSelected"
    >
        <template v-slot:item="{ props, item }">
            <v-list-item v-model="toggleSelect" v-bind="props" class="bg-infoBackground" :disabled="item.raw.selected">
                <template v-slot:title>
                    <span class="text-secondary d-flex justify-start align-center">
                        {{ item.raw.language }}
                    </span>
                </template>
</v-list-item>
</template>
</v-select>
-->
</template>


<script>

export default {
    data: () => ({
        items: [
            { title: 'Click Me' },
            { title: 'Click Me' },
            { title: 'Click Me' },
            { title: 'Click Me 2' },
        ],
    }),
}

</script>