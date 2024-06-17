<script setup>
import MobileFooter from './MobileFooter.vue'
import DesktopFooter from './DesktopFooter.vue'

const props = defineProps(['isMobile'])
</script>

<template>
    <MobileFooter v-if="props.isMobile" />
    <DesktopFooter v-else />
</template>