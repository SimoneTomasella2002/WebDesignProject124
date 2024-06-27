<script setup>
import { computed } from "vue";

const props = defineProps({
    language: {
        type: Object,
        default: null
    }
})

const language = computed(() => {
    return props.language.language
})

</script>


<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title class="text-h5 text-center">
            Termini di Servizio
          </v-card-title>
          <v-card-text class="terms-of-service-body">
            <div class="text-subtitle-1">
              {{ language === 'English'
                ? "Welcome to Behind a Passport!"
                : "Benvenuti su Behind a Passport!"
              }} 
            </div>
            <p class="terms-of-service-text">Questi termini e condizioni stabiliscono le regole e le normative per l'uso del sito web di Behind a Passport, disponibile all'indirizzo https://behindapassport.life.</p>
            
            <div class="text-subtitle-1">Licenza Open Source</div>
            <p class="terms-of-service-text">Il codice sorgente di Behind a Passport è open source e disponibile su GitHub. Utilizziamo le seguenti tecnologie: JavaScript, Vue, Vuetify, ChatGPT, GitHub Copilot, Adobe Firefly, Animate.css, Vue Router.</p>
            
            <div class="text-subtitle-1">Non è consentito:</div>
            <ul class="text-list">
              <li>Ripubblicare materiale da Behind a Passport</li>
              <li>Vendere, affittare o concedere in sublicenza materiale da Behind a Passport</li>
              <li>Riprodurre, duplicare o copiare materiale da Behind a Passport</li>
              <li>Ridistribuire contenuti da Behind a Passport</li>
            </ul>

            <div class="text-subtitle-1">Storie e Fonti di Ispirazione</div>
            <p>Alcune storie presentate su Behind a Passport sono state generate con l'aiuto di ChatGPT e GitHub Copilot. Le fonti e i link da cui ci siamo ispirati per creare queste storie possono essere trovati qui:</p>
            <p class="terms-of-service-text">https://www.tpi.it/news/joy-albina-africana-italia-20190305266193/</p>
            <p class="terms-of-service-text">https://iir.gmu.edu/immigrant-stories-dc-baltimore/korea/summary-of-interview-with-korean-immigrant</p>
            
            <div class="text-subtitle-1">Font Usato</div>
            <p class="terms-of-service-text">Il font utilizzato su Behind a Passport è preso da:</p>
            <p class="terms-of-service-text">https://fonts.google.com/specimen/Inter</p>
            
            <div class="text-subtitle-1">Limitazione di Responsabilità</div>
            <p class="terms-of-service-text">Non garantiamo che le informazioni su questo sito web siano corrette, complete o aggiornate. Non saremo responsabili per eventuali perdite o danni di qualsiasi natura derivanti dall'uso o dall'incapacità di utilizzare il sito web o dal materiale su questo sito.</p>
            
            <div class="text-subtitle-1">Modifiche</div>
            <p class="terms-of-service-text">Ci riserviamo il diritto di modificare questi termini e condizioni quando necessario. Continuando a utilizzare Behind a Passport dopo eventuali modifiche, accettate di essere vincolati da tali modifiche.</p>
            
            <div class="text-subtitle-1">Disclaimer</div>
            <p class="terms-of-service-text">Nella massima misura consentita dalla legge applicabile, escludiamo tutte le rappresentazioni, garanzie e condizioni relative al nostro sito web e all'uso di questo sito web.</p>
            
            <div class="text-subtitle-1">Generato da ChatGPT</div>
            <p class="terms-of-service-text">Questo testo è stato generato da ChatGPT, un modello di intelligenza artificiale creato da OpenAI.</p>
            
            </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

  * {
      font-family: 'Inter', sans-serif;
    }

  .terms-of-service-body {
    text-align: center;
  }

  .terms-of-service-text {
    max-width: 80%;
  }

  .text-subtitle-1 {


    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 1.5rem;
  }

  .text-list {
    margin-left: 1.5rem;
  }


</style>