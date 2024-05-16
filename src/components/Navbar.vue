<template>
    <nav class="nav-container">
        <div class="right-nav-bar-container">
            <img src="@/assets/images/logo.jpg" class="nav-logo" alt="Logo for Web Design Project Website">
        </div>
        
        <div class="right-nav-bar-container">

            <router-link :to="'@/views/ChiSiamo'" class="right-nav-second-button">
                Chi siamo
            </router-link>

        </div>
    </nav>
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

    .right-nav-first-button {
        color: white;
        padding-right: 10px;
        background: linear-gradient();
    }

    .right-nav-second-button {
        color: white;
        padding-right: 10px;
        background: linear-gradient();
    }



</style>