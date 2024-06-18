<script setup>
const props = defineProps(['people'])
</script>

<template>
    <v-container>
        <v-row class="text-center">
            <v-bottom-navigation>
                <v-col>
                    <v-btn class="h-100 text-none" variant="outlined" rounded>
                        <span class="text-red font-weight-bold d-flex justify-start align-center">
                            {{ props.people[0].name }}
                            <v-img :src="props.people[0].img" alt="Flag" width="40" height="16"></v-img>
                        </span>
                    </v-btn>
                </v-col>
                <v-col>
                    <v-btn class="h-100 text-none" variant="outlined" rounded>
                        <span class="text-red font-weight-bold d-flex justify-start align-center">
                            {{ props.people[1].name }}
                            <v-img :src="props.people[1].img" alt="Flag" width="40" height="16"></v-img>
                        </span>
                    </v-btn>
                </v-col>
            </v-bottom-navigation>
        </v-row>
    </v-container>
</template>