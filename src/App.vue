<script setup>
    import Footer from './components/Footer.vue';
</script>

<template>
    <div class="app-container">
        <nav class="nav-container">
            <div class="right-nav-bar-container">
                <RouterLink to='/'>
                    <img src="@/assets/images/logo.jpg" class="nav-logo" alt="Logo for Web Design Project Website">
                </RouterLink>
            </div>
            
            <div class="right-nav-bar-container">

                <RouterLink to='/views/ChiSiamo.vue' class="right-nav-first-button">
                    Chi Siamo
                </RouterLink>

            </div>
        </nav>

        <main>
            <RouterView />
        </main>

        <Footer></Footer>
    </div>
</template>

<style>
    .app-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        font-family: "Gameboy Style Font";
        src: url(./assets/fonts/EarlyGameBoy.ttf);
    }

    .nav-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #34b7c4;
        height: max-content;
    }
    
    .nav-logo {
        height: 50px;
        width: 50px;
        padding: 5px;
        border-radius: 100%;
    }

    .right-nav-bar-container {
        display: flex;
        align-items: center;
    }

    .right-nav-first-button, .right-nav-second-button {
        color: white;
        margin-right: 10px;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        background: linear-gradient(#34b7c4, #51a6ce, #6295d6, #6f83de, #796fe6)
    }
</style>




