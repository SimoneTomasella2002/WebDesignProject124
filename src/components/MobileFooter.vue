<script setup>
import Select from './Select.vue';

const props = defineProps(["people"]);
const emit = defineEmits(["toggleVisibility"]);
const handleToggleVisibility = (person, selectId) => {
    emit("toggleVisibility", person, selectId);
}
</script>

<template>
    <v-container>
        <v-row class="text-center">
            <v-bottom-navigation>
                <v-col>
                    <Select :people="props.people" label="Passport 1" select-id="1"
                        @toggle-visibility="handleToggleVisibility" />
                </v-col>
                <v-col>
                    <Select :people="props.people" label="Passport 2" select-id="2"
                        @toggle-visibility="handleToggleVisibility" />
                </v-col>
            </v-bottom-navigation>
        </v-row>
    </v-container>
</template>