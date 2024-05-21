<script setup>
    import Footer from './components/Footer.vue';
    import NavBar from './components/NavBar.vue';
</script>

<template>
    <div class="app-container">
        <NavBar />

        <main>
            <RouterView />
        </main>

        <Footer />
    </div>
</template>

<style>
    @import "./assets/style/app.css";
</style>



