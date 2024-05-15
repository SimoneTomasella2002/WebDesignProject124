<script setup>
    import NavBar from './components/Navbar.vue';
    import Footer from './components/Footer.vue';
</script>

<template>
    <NavBar />
    <main>  
        <h1>Hello world</h1>
    </main>
    <Footer />
</template>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 75.5vh;
    }
</style>