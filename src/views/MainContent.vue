<script setup>
import MobileMainContent from './MobileMainContent.vue'
import DesktopMainContent from './DesktopMainContent.vue'

const props = defineProps(['isMobile', 'leftPerson', 'rightPerson'])
</script>

<template>
    <MobileMainContent v-if="props.isMobile" />
    <DesktopMainContent v-else :left-person="props.leftPerson" :right-person="props.rightPerson" />
</template>