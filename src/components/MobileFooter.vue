<script setup>
import { computed } from 'vue'
const props = defineProps(['selection'])
const selectedFirst = computed(() => props.selection !== null && props.selection.selectId === 1)
const selectedSecond = computed(() => props.selection !== null && props.selection.selectId === 2)
</script>

<template>
    <v-container>
        <v-row class="text-center">
            <v-bottom-navigation>
                <v-col>
                    <v-btn class="h-100 text-none" variant="outlined" rounded>
                        <span class="text-red font-weight-bold d-flex justify-start align-center">
                            {{ selectedFirst ? props.selection.person.name : 'Passaport 1' }}
                            <v-img v-if="selectedFirst" :src="props.selection.person.img" alt="Flag" width="40" height="16"></v-img>
                        </span>
                    </v-btn>
                </v-col>
                <v-col>
                    <v-btn class="h-100 text-none" variant="outlined" rounded>
                        <span class="text-red font-weight-bold d-flex justify-start align-center">
                            Passaport 2
                            <v-img v-if="selectedSecond" :src="props.selection.person.img" alt="Flag" width="40" height="16"></v-img>
                        </span>
                    </v-btn>
                </v-col>
            </v-bottom-navigation>
        </v-row>
    </v-container>
</template>