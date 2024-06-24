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

const emitSelected = () => {
    console.log("emitSelected has been called")

    //emit('update:selected', localSelected.value)
}

//const toggleSelect = ref(false)

console.log(props.languages + "From SelectLanguage.vue");

</script>

<template>
    <!-- <v-btn icon="mdi-translate" size="large">
        <v-menu activator="parent">
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" icon="mdi-translate"></v-btn>
            </template>
<v-list>
    <v-list-item v-for="(language, index) in props.languages" :key="index" :value="index" @click=" () => {
                        localSelected.value = language;
                        emitSelected();        
                    }">
        <v-list-item-title>{{ language }}</v-list-item-title>
    </v-list-item>
</v-list>
</v-menu>
</v-btn> -->

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

    <v-menu>
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" icon="mdi-translate" color="secondary"></v-btn>
        </template>
        <v-list>
            <v-list-item v-for="(item, index) in props.languages" :key="index" :value="index">
                <v-list-item-title> {{ item.language }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>

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