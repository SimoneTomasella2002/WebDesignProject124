<script setup>

data: () => ({
    languages: ['Italian', 'English'],
    toggleSelect: false
})

</script>

<template align-center>
    <v-btn @click="toggleSelect = !toggleSelect" density="compact" icon="mdi-translate" />
    <v-select 
        v-if = "toggleSelect"
        label = "Language" 
        :items = "languages" 
        :menu-props = "{value: toggleSelect}"
    />
</template>