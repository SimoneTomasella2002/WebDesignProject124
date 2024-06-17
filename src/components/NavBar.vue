<script setup>
import MobileNavBar from './MobileNavBar.vue'
import DesktopNavBar from './DesktopNavBar.vue'

const props = defineProps(['isMobile'])
</script>

<template>
    <MobileNavBar v-if="props.isMobile" />
    <DesktopNavBar v-else />
</template>
