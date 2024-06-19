<script setup>
import MobileMainContent from './MobileMainContent.vue'
import DesktopMainContent from './DesktopMainContent.vue'

const props = defineProps(['isMobile', 'selection'])
</script>

<template>
    <MobileMainContent v-if="props.isMobile" />
    <DesktopMainContent v-else :selection="props.selection" />
</template>