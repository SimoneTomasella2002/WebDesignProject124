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
                <p>Where to contact us: placeholder@gmail.com</p>
                <p>PLACEHOLDER Terms of service</p>
            </div>
            <div class="footer-center">
                <h3 class="footer-center-h3">Credits for used assets (WIP)</h3>
                <p>placeholder for a future link</p>
            </div>
            <div class="footer-right">
                <h3 class="footer-right-h3">La nostra squadra:</h3>
                <div class="team">
                    <ul class="list-team">
                        <h4 class="list-name">Devs:</h4>
                        <li>Simone Tomasella</li>
                        <li>Thomas Ghione</li>
                        <li>Loris Prataiolo</li>
                        <li>Kevin Barragan</li>
                    </ul>
                    <ul class="list-team">
                        <h4 class="list-name">Designers:</h4>
                        <li>Giulia Salaris</li>
                        <li>Gabriel Oddone</li>
                        <li>Francesca Vernasca</li>
                        <li>Lorenzo Sacco</li>
                    </ul>
                </div>
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
        padding-top: 48px;
        padding-bottom: 12px;
        padding-left: 12px;
        padding-right: 12px;
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
        align-items: center;
    }

    .footer-right {
        margin-top: 0px;
    }

    .footer-center-h3, .footer-right-h3 {
        margin-top: 16px;
        margin-bottom: 0px;
    }

    .list-team {
        margin-top: 4px;
        margin-bottom: 4px;
    }

    .team {
        display: flex;
        flex-direction: row;
    }

    .list-name {
        margin-top: 4px;
        margin-bottom: 4px;
    }

    p {
        margin: 0;
    }
    
</style>