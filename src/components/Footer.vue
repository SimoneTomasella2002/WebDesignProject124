<script setup>
import MobileFooter from './MobileFooter.vue'
import DesktopFooter from './DesktopFooter.vue'

const props = defineProps(['isMobile', 'selection'])
</script>

<template>
    <MobileFooter v-if="props.isMobile" :selection="selection"/>
    <DesktopFooter v-else />
</template>