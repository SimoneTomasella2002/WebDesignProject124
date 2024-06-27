<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title class="text-h5 text-center">
            Termini di Servizio
          </v-card-title>
          <v-card-text class="terms-of-service-body">
            <div class="text-subtitle-1">Benvenuti su Behind a Passport!</div>
            <p class="terms-of-service-text">Questi termini e condizioni stabiliscono le regole e le normative per l'uso del sito web di Behind a Passport, disponibile all'indirizzo https://behindapassport.life.</p>
            
            <div class="text-subtitle-1">Licenza Open Source</div>
            <p class="terms-of-service-text">Il codice sorgente di Behind a Passport è open source e disponibile su GitHub. Utilizziamo le seguenti tecnologie: JavaScript, Vue, Vuetify, ChatGPT, GitHub Copilot, Adobe Firefly, Animate.css, Vue Router.</p>
            
            <div class="text-subtitle-1">Proprietà Intellettuale</div>
            <p class="terms-of-service-text">Salvo diversa indicazione, Behind a Passport e/o i suoi licenzianti detengono i diritti di proprietà intellettuale per tutto il materiale su Behind a Passport. Tutti i diritti sono riservati.</p>
            <div class="text-subtitle-1">Non è consentito:</div>
            <ul class="text-list">
              <li>Ripubblicare materiale da Behind a Passport</li>
              <li>Vendere, affittare o concedere in sublicenza materiale da Behind a Passport</li>
              <li>Riprodurre, duplicare o copiare materiale da Behind a Passport</li>
              <li>Ridistribuire contenuti da Behind a Passport</li>
            </ul>
            
            <div class="text-subtitle-1">Limitazione di Responsabilità</div>
            <p class="terms-of-service-text">Non garantiamo che le informazioni su questo sito web siano corrette, complete o aggiornate. Non saremo responsabili per eventuali perdite o danni di qualsiasi natura derivanti dall'uso o dall'incapacità di utilizzare il sito web o dal materiale su questo sito.</p>
            
            <div class="text-subtitle-1">Modifiche</div>
            <p class="terms-of-service-text">Ci riserviamo il diritto di modificare questi termini e condizioni quando necessario. Continuando a utilizzare Behind a Passport dopo eventuali modifiche, accettate di essere vincolati da tali modifiche.</p>
            
            <div class="text-subtitle-1">Disclaimer</div>
            <p class="terms-of-service-text">Nella massima misura consentita dalla legge applicabile, escludiamo tutte le rappresentazioni, garanzie e condizioni relative al nostro sito web e all'uso di questo sito web.</p>
            
            <div class="text-subtitle-1">Generato da ChatGPT</div>
            <p class="terms-of-service-text">Questo testo è stato generato da ChatGPT, un modello di intelligenza artificiale creato da OpenAI.</p>
            
            <div class="text-subtitle-1">Informazioni di Contatto</div>
            <p class="terms-of-service-text">Per qualsiasi domanda riguardante i nostri termini di servizio, potete contattarci all'indirizzo email [inserire email di contatto].</p>
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
    display: flex;
    text-align: center;
    justify-content: center;
  }

  .text-subtitle-1 {
    display: flex;
    text-align: center;
    justify-content: center;


    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 1.5rem;
  }

  .text-list {
    text-align: center;
    justify-content: center;
  }


</style>