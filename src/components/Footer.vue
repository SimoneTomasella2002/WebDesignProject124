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
        language: {
            type: String,
            required: true,
        }
    }
)
</script>

<template>
    <MobileFooter v-if="props.isMobile" :is-mobile="isMobile" :items="items" role="navigation" />
    <DesktopFooter v-else role="contentinfo" :language="language" />
</template>