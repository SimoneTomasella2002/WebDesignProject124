<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import MobileMainContent from './MobileMainContent.vue'
import DesktopMainContent from './DesktopMainContent.vue'

const isMobile = ref(window.innerWidth < 768)

const handleResize = () => {
    isMobile.value = window.innerWidth < 768
}

onMounted(() => {
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})
</script>

<template>
    <component :is="isMobile ? MobileMainContent : DesktopMainContent" />
</template>