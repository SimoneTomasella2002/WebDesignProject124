<script setup>
import MobileFooter from './MobileFooter.vue'
import DesktopFooter from './DesktopFooter.vue'

const props = defineProps(
    {
        isMobile: {
            type: Boolean,
            required: true,
        },
        items: {
            type: Array,
            required: true,
        },
    }
)
</script>

<template>
    <MobileFooter v-if="props.isMobile" :items="items" />
    <DesktopFooter v-else />
</template>