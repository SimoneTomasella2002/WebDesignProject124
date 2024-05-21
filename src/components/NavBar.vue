<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import MobileNavBar from './MobileNavBar.vue'
import DesktopNavBar from './DesktopNavBar.vue'

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
    <component :is="isMobile ? MobileNavBar : DesktopNavBar" />
</template>

