<template>
    <footer>
        <div class="footer-container">
            <div class="footer-general-information">
                <div class="footer-general-information-logo">
                    <img src="@/assets/images/logo.jpg" class="footer-logo" alt="The website logo">
                    <i>Behind a passport</i>
                </div>
                <div class="footer-general-information-github">
                    <img src="@/assets/images/github-logo.png" class="github-logo" alt="The github logo">
                    <a href="https://github.com/SimoneTomasella2002/WebDesignProject124">Take a look at our code</a>
                </div>
            </div>
            <div class="footer-center">
                <h3>Credits for used assets (WIP)</h3>
            </div>
            <div class="footer-right">
                <h3>Orari</h3>
                <p>Lun - Ven: 9:00 - 18:00</p>
                <p>Sab: 9:00 - 13:00</p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    footer {
        margin-top: auto;
        flex-direction: column;
        background: #796fe6;
        color: white;
        padding: 20px;
    }

    .footer-container {
        display: flex;
        justify-content: space-between;
    }

    .footer-general-information-logo {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

    .footer-logo {
        height: 50px;
        width: 50px;
        border-radius: 100%;
        margin-right: 5px;
    }

    .footer-general-information-github {
        display: flex;
        align-items: center;
    }

    .github-logo {
        height: 25px;
        width: 25px;
        border-radius: 100%;
        margin-right: 5px;
    }

    .footer-general, .footer-right {
        display: flex;
        flex-direction: column;
    }

    h3 {
        margin-bottom: 5px;
    }

    p {
        margin: 0;
    }
</style>