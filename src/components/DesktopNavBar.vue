<template>
    <nav class="nav-container">
        <div class="left-nav-blankspace"></div>
        <div class="center-nav-bar-container">
            <button @click="chooseFirstPassport" class="center-nav-choose-first-passport-button">
                Select first passport
            </button>
            <RouterLink to="/" class="center-nav-a-container">
                <img src="@/assets/images/logotype.svg" class="center-nav-logotype"
                    alt="Logotype for Web Design Project">
            </RouterLink>
            <button @click="chooseSecondPassport" class="center-nav-choose-second-passport-button">
                Select second passport
            </button>
        </div>
        <div class="right-nav-bar-container">
            <RouterLink to="/about" class="right-nav-about-button">
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
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
}

.left-nav-bar-container,
.right-nav-bar-container {
    display: flex;
    align-items: center;
    text-align: center;
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

/* Contents of left blankspace */
.left-nav-blankspace {
    margin-right: 55px;
}

/* Contents of center navbar*/

.center-nav-a-container:hover {
    filter: brightness(125%);
}

.center-nav-logotype {
    width: 200px;
    margin-right: 10px;
}

/* Contents of right navbar */

.right-nav-about-button {
    padding: 6.5px;
    text-decoration: none;
    /* Rimuove la linea sotto il link */
}

/* Shared content */

.right-nav-about-button,
.right-nav-choose-language-button,
.center-nav-choose-first-passport-button,
.center-nav-choose-second-passport-button {
    background: #338495;
    color: white;
    margin-right: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    font-weight: bold;
}

.right-nav-choose-language-button,
.center-nav-choose-first-passport-button,
.center-nav-choose-second-passport-button {
    padding: 6.5px;
    border-width: 3px;
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
.center-nav-choose-second-passport-button:active,
.center-nav-logotype:active {
    filter: brightness(75%);
}

@keyframes nav-button-hover {
    0% {
        background: #338495;
    }

    100% {
        background: #796fe6;
    }
}

@media screen and (max-width: 1115px) {

    .center-nav-choose-first-passport-button,
    .center-nav-choose-second-passport-button,
    .right-nav-choose-language-button,
    .right-nav-about-button {
        font-size: 14px;
    }
}

@media screen and (max-width: 1045px) {

    .center-nav-choose-first-passport-button,
    .center-nav-choose-second-passport-button,
    .right-nav-choose-language-button,
    .right-nav-about-button {
        font-size: 12px;
    }
}
</style>
