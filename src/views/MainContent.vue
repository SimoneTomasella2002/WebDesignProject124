<script setup>
import MobileMainContent from './MobileMainContent.vue'
import DesktopMainContent from './DesktopMainContent.vue'

const props = defineProps(
    {
        isMobile: {
            type: Boolean,
            required: true,
        },
        selected1: {
            type: Object,
            deafult: null,
        },
        selected2: {
            type: Object,
            default: null,
        },
        language: {
            type: Object,
            default: null,
        }
    }
)
</script>

<template>
    <MobileMainContent v-if="props.isMobile" :selected1="selected1" :selected2="selected2" :language="language" />
    <DesktopMainContent v-else :selected1="selected1" :selected2="selected2" :language="language"/>
</template>