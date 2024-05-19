<script setup>
    import Footer from './components/Footer.vue';
</script>

<template>
    <div class="app-container">
        <nav class="nav-container">
            <div class="left-nav-bar-container">
                <RouterLink to='/' class="a-container">
                    <img src="@/assets/images/logo.jpg" class="nav-logo" alt="Logo for Web Design Project Website">
                </RouterLink>
            </div>
            
            <div class="right-nav-bar-container">
                <RouterLink to='/views/ChiSiamo.vue' class="right-nav-about-button">
                    About
                </RouterLink>
                <button @click="chooseLanguage" class="right-nav-choose-language-button">
                    Language
                </button>
            </div>
        </nav>

        <main>
            <RouterView />
        </main>

        <Footer />
    </div>
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap');
    
    .app-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        font-family: "Pixelify Sans", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
    }

    .nav-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #34b7c4;
        height: max-content;
    }
    
    .a-container, .nav-logo {
        height: 50px;
        width: 50px;
        border-radius: 100%;
    }

    .a-container:hover {
        filter:brightness(125%);
    }

    .a-container {
        margin: 5px;
    }

    .left-nav-bar-container, .right-nav-bar-container {
        display: flex;
        align-items: center;
        text-align: center;
    }

    .right-nav-about-button, .right-nav-choose-language-button {
        background: linear-gradient(0deg, #34b7c4, #51a6ce, #6295d6, #6f83de, #796fe6);
        color: white;
        margin-right: 10px;
        padding: 5px;
        border-radius: 8px;
        border-style: solid;
        border-color: black;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    }

    .right-nav-choose-language-button {
        padding: 6.5px;
        border-width: 3px;

        font-family: "Pixelify Sans", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
    }

    .right-nav-about-button:hover, .right-nav-choose-language-button:hover {
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4), 0 3px 10px 0 rgba(0, 0, 0, 0.39);
    
        animation-name: nav-button-hover;
        animation-duration: 0.2s;
        animation-timing-function: linear;
        animation-fill-mode: forwards
    }

    .right-nav-choose-language-button:hover {
        cursor: pointer;
    }

    .right-nav-about-button:active, .right-nav-choose-language-button:active {
        filter:brightness( 75% );
    }

    @keyframes nav-button-hover {
        0% {background: linear-gradient(0deg, #34b7c4, #51a6ce, #6295d6, #6f83de, #796fe6);}
        100% {background: #796fe6;}
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        background: linear-gradient(#34b7c4, #51a6ce, #6295d6, #6f83de, #796fe6)
    }
</style>



