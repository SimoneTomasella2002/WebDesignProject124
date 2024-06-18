<script setup>
import MobileNavBar from './MobileNavBar.vue'
import DesktopNavBar from './DesktopNavBar.vue'

const props = defineProps(['isMobile', 'people'])
</script>

<template>
    <MobileNavBar v-if="props.isMobile" :people="props.people" />
    <DesktopNavBar v-else :people="props.people" />
</template>
