<script setup>
import MobileMainContent from './MobileMainContent.vue'
import DesktopMainContent from './DesktopMainContent.vue'

const props = defineProps(['isMobile'])
</script>

<template>
    <MobileMainContent v-if="props.isMobile" />
    <DesktopMainContent v-else />
</template>