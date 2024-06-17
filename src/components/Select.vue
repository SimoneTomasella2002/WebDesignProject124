<script setup>
const props = defineProps(['people', 'label'])
</script>

<template>
    <v-select variant="outlined" density="compact" class="text-secondary" rounded :items="people" item-title="name"
        :label="label" hint="Choose a passport" persistent-hint hide-selected bg-color="background">
        <template v-slot:item="{ props, item }">
            <v-list-item v-bind="props" class="bg-infoBackground">
                <template v-slot:title>
                    <span class="text-secondary" style="display: flex; justify-content: start; align-items: center;">
                        {{ item.raw.name }}
                        <v-img :src="item.raw.img" alt="Flag" max-width="40" height="16"></v-img>
                    </span>
                </template>
            </v-list-item>
        </template>
    </v-select>
</template>