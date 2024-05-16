<script setup>
    import Footer from './components/Footer.vue';
</script>

<template>
    <nav class="nav-container">
        <div class="right-nav-bar-container">
            <RouterLink to='/'>
                <img src="@/assets/images/logo.jpg" class="nav-logo" alt="Logo for Web Design Project Website">
            </RouterLink>
        </div>
        
        <div class="right-nav-bar-container">

            <RouterLink to='./views/ChiSiamo.vue' class="right-nav-first-button">
                Chi Siamo
            </RouterLink>

        </div>
    </nav>

    <main>
        <RouterView />
    </main>

    <Footer />
</template>

<style>
    .nav-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: black;
        height: max-content;
    }
    
    .nav-logo {
        height: 50px;
        width: 50px;
        padding: 5px;
        border-radius: 100%;
    }

    i {
        color: white;
        padding-right: 10px;
        background: linear-gradient();
    }

    .right-nav-bar-container {
        display: flex;
        align-items: center;
    }

    .right-nav-first-button, .right-nav-second-button {
        color: white;
        padding-right: 10px;
        background: linear-gradient();
    }
</style>




