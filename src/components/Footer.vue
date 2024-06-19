<script setup>
import MobileFooter from './MobileFooter.vue'
import DesktopFooter from './DesktopFooter.vue'

const props = defineProps(['isMobile', 'people'])
</script>

<template>
    <MobileFooter v-if="props.isMobile" :people="props.people"/>
    <DesktopFooter v-else />
</template>