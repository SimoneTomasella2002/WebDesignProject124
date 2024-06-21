<script setup>
import MobileNavBar from './MobileNavBar.vue'
import DesktopNavBar from './DesktopNavBar.vue'

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
    <MobileNavBar v-if="props.isMobile" role="navigation"/>
    <DesktopNavBar v-else :items="items" role="navigation"/>
</template>
