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
    <div>
      <MobileNavBar v-if="isMobile" />
      <DesktopNavBar v-else />
    </div>

    <nav class="nav-container">
        <div class="left-nav-bar-container">
            <RouterLink to='/' class="a-container">
                <img src="@/assets/images/logo.jpg" class="nav-logo" alt="Logo for Web Design Project Website">
            </RouterLink>
        </div>

        <div class="center-nav-bar-container">
            <button @click="chooseFirstPassport" class="center-nav-choose-first-passport-button">
                Choose first passport
            </button>

            <img src="" class="center-nav-logotype" alt="Logotype for Web Design Project">

            <button @click="chooseSecondPassport" class="center-nav-choose-second-passport-button">
                Choose second passport
            </button>
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
  </template>
<script>

</script>

<style scoped>
    /* Style for navbar */
    /* (STYLES NEEDS TO BE READ FROM LEFT TO RIGHT) */

    .nav-container {
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #f3efd4;
        height: max-content;
        margin-top: 0;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.4);
    }

    .center-nav-bar-container {
        justify-content: center;
    }

    .a-container,
    .nav-logo {
        height: 50px;
        width: 50px;
        border-radius: 100%;
    }

    .a-container:hover {
        filter: brightness(125%);
    }

    .a-container {
        margin: 5px;
    }

    .left-nav-bar-container,
    .right-nav-bar-container {
        display: flex;
        align-items: center;
        text-align: center;
    }

    .right-nav-about-button,
    .right-nav-choose-language-button,
    .center-nav-choose-first-passport-button,
    .center-nav-choose-second-passport-button {
        background: linear-gradient(0deg, #34b7c4, #51a6ce, #6295d6, #6f83de, #796fe6);
        color: white;
        margin-right: 10px;
        padding: 5px;
        border-radius: 8px;
        border-style: solid;
        border-color: black;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    }

    .right-nav-choose-language-button,
    .center-nav-choose-first-passport-button,
    .center-nav-choose-second-passport-button {
        padding: 6.5px;
        border-width: 3px;

        font-family: "Pixelify Sans", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
    }

    .right-nav-about-button:hover,
    .right-nav-choose-language-button:hover,
    .center-nav-choose-first-passport-button:hover,
    .center-nav-choose-second-passport-button:hover {
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4), 0 3px 10px 0 rgba(0, 0, 0, 0.39);

        animation-name: nav-button-hover;
        animation-duration: 0.2s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;

        cursor: pointer;
    }

    .right-nav-about-button:active,
    .right-nav-choose-language-button:active,
    .center-nav-choose-first-passport-button:active,
    .center-nav-choose-second-passport-button:active .nav-logo:active {
        filter: brightness(75%);
    }

    @keyframes nav-button-hover {
        0% {
            background: linear-gradient(0deg, #34b7c4, #51a6ce, #6295d6, #6f83de, #796fe6);
        }

        100% {
            background: #796fe6;
        }
    }


    .center-nav-bar-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 60%;
        padding: 0 20px;
        box-sizing: border-box;
        margin-left: 100px;

    }


    .nationality-selector {
        flex: 1;
        text-align: center;
    }

    #logotype {
        flex: 1;

        text-align: center;
        font-size: 40px;
    }
</style>
  
  
