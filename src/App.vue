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

            <div class="center-nav-bar-container">
                <v-btn @click="chooseFirstPassport" class="center-nav-choose-first-passport-button">
                    Choose first passport
                </v-btn>

                <img src="" class="center-nav-logotype" alt="Logotype for Web Design Project">

                <v-btn @click="chooseSecondPassport" class="center-nav-choose-second-passport-button">
                    Choose second passport
                </v-btn>
            </div>

            <div class="right-nav-bar-container">
                <RouterLink to='/views/ChiSiamo.vue' class="right-nav-about-button">
                    About
                </RouterLink>
                <v-btn @click="chooseLanguage" class="right-nav-choose-language-button">
                    Language
                </v-btn>
            </div>
        </nav>

        <main>
            <RouterView />
        </main>

        <Footer />
    </div>
</template>

<style>
    @import "./assets/style/app.css";
</style>



