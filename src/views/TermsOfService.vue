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
            {{  language === 'English' ? "Terms of Service" : "Termini di Servizio" }}
          </v-card-title>
          <v-card-text class="terms-of-service-body">
            <div class="text-subtitle-1">
              {{ language === 'English' ? "Welcome to Behind a Passport!" : "Benvenuti su Behind a Passport!" }} 
            </div>
            <p class="terms-of-service-text"> 
              {{ language === 'English'
                ? "These terms and conditions outline the rules and regulations for the use of Behind a Passport's Website"
                : "Questi termini e condizioni stabiliscono le regole e le normative per l'uso del sito web di Behind a Passport"
              }}
            </p>
            <div class="text-subtitle-1">
              {{ language === 'English' ? "Open Source license" : "Licenza Open Source" }}
            </div>
            <p class="terms-of-service-text">
              {{ language === 'English'
                ? "The source code of Behind a Passport is open source and available on GitHub. We use the following technologies: JavaScript, Vue, Vuetify, ChatGPT, GitHub Copilot, Adobe Firefly, Animate.css, Vue Router."
                : "Il codice sorgente di Behind a Passport è open source e disponibile su GitHub. Utilizziamo le seguenti tecnologie: JavaScript, Vue, Vuetify, ChatGPT, GitHub Copilot, Adobe Firefly, Animate.css, Vue Router."
                }}
            </p>
            <div class="text-subtitle-1">
              {{ language === 'English' ? "It's not allowed to:" : "Non è consentito:" }}
            </div>
            <ul class="text-list">
              <li>
                {{ language === 'English' ? "Reproduce material from Behind a Passport" : "Ripubblicare materiale da Behind a Passport" }}
              </li>
              <li>
                {{ language === 'English' ? "Sell, rent or sub-license material from Behind a Passport" : "Vendere, affittare o concedere in sublicenza materiale da Behind a Passport" }}
              </li>
              <li>
                {{ language === 'English' ? "Reproduce, duplicate, or copy material from Behind a Passport" : "Riprodurre, duplicare o copiare materiale da Behind a Passport" }}
              </li>
              <li>
                {{ language === 'English' ? "Redistribute content from Behind a Passport" : "Ridistribuire contenuti da Behind a Passport" }}
              </li>
            </ul>
            <div class="text-subtitle-1">
              {{ language === 'English' ? "Stories and Sources of Inspiration" : "Storie e Fonti di Ispirazione" }}
            </div>
            <p>
              {{ language === 'English'
                ? "Some stories presented on Behind a Passport were generated with the help of ChatGPT and GitHub Copilot. The sources and links we used to create these stories can be found here:"
                : "Alcune storie presentate su Behind a Passport sono state generate con l'aiuto di ChatGPT e GitHub Copilot. Le fonti e i link da cui ci siamo ispirati per creare queste storie possono essere trovati qui:"
              }}
            </p>
            <a class="terms-of-service-text" href="https://www.tpi.it/news/joy-albina-africana-italia-20190305266193/"> {{ language === 'English' ? "Joy's story" : "Storia di Joy" }}</a>
            <br>
            <a class="terms-of-service-text" href="https://iir.gmu.edu/immigrant-stories-dc-baltimore/korea/summary-of-interview-with-korean-immigrant"> {{ language === 'English' ? "Ji-hoon's story" : "Storia di Ji-hoon" }}</a>
            <br>
            <a class="terms-of-service-text" href="nytimes.com/2015/08/02/fashion/a-kiss-deferred-by-bosnia-and-herzegovina-civil-war.html?_r=0"> {{ language === 'English' ? "Graphics inspiration" : "Ispirazione grafica" }}</a>
            <div class="text-subtitle-1">
              {{ language === 'English' ? "Font Used" : "Font Usato" }}
            </div>
            <p class="terms-of-service-text">
              {{ language === 'English' ? "The font used on Behind a Passport is taken from:" : "Il font utilizzato su Behind a Passport è preso da:" }}
            </p>
            <a class="terms-of-service-text" href="https://fonts.google.com/specimen/Inter">https://fonts.google.com/specimen/Inter</a>
            <div class="text-subtitle-1">
              {{ language === 'English' ? "Limitation of Liability" : "Limitazione di Responsabilità" }}
              Limitazione di Responsabilità
            </div>
            <p class="terms-of-service-text">
              {{ language === 'English' 
                ? "In no event Behind a Passport, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract."
                : "In nessun caso Behind a Passport, né i suoi dirigenti, direttori e dipendenti, saranno responsabili per qualsiasi cosa derivante o in qualsiasi modo connessa all'uso di questo sito Web, sia tale responsabilità contrattuale."
              }}
            </p>
            <div class="text-subtitle-1">
              {{ language === 'English' ? "Modifications" : "Modifiche" }}
            </div>
            <p class="terms-of-service-text">
              {{ language === 'English' 
                ? "We reserve the right to modify these terms and conditions at any time. By continuing to use Behind a Passport after any changes, you agree to be bound by those changes."
                : "Ci riserviamo il diritto di modificare questi termini e condizioni quando necessario. Continuando a utilizzare Behind a Passport dopo eventuali modifiche, accettate di essere vincolati da tali modifiche."
              }}
            </p>
            <div class="text-subtitle-1">Disclaimer</div>
            <p class="terms-of-service-text">
              {{ language === 'English' 
                ? "To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website."
                : "Nella massima misura consentita dalla legge applicabile, escludiamo tutte le rappresentazioni, garanzie e condizioni relative al nostro sito web e all'uso di questo sito web."
              }}
              </p>
            <div class="text-subtitle-1">
              {{ language === 'English' ? "Generated by ChatGPT" : "Generato da ChatGPT"}}
            </div>
            <p class="terms-of-service-text">
              {{ language === 'English' ? "This text was generated by ChatGPT, an AI model created by OpenAI." : "Questo testo è stato generato da ChatGPT, un modello di intelligenza artificiale creato da OpenAI." }}
            </p>
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
    text-align: left;
    margin-left: 10px;
    margin-right: 10px;
  }

  .terms-of-service-text {
    max-width: 100%;
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