<template>
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