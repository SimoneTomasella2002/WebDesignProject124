<script setup>
import MobileFooter from './MobileFooter.vue'
import DesktopFooter from './DesktopFooter.vue'

const props = defineProps(['isMobile', 'people', 'selection'])
</script>

<template>
    <MobileFooter v-if="props.isMobile" :people="people" :selection="selection"/>
    <DesktopFooter v-else />
</template>