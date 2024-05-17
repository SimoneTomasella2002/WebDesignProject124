<template>
    <footer>
        <div class="footer-container">
            <div class="footer-left">
                <h3>Contatti</h3>
                <p>Telefono: 1234567890</p>
                <p>Email: place@holder.com</p>
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

    .footer-left, .footer-right {
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