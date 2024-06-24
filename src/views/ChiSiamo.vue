<script setup>
import PictureContainer from "@/components/PictureContainer.vue";


/*
  ENGLISH TRANSLATION:

  "How do the chances of finding a place to stay in the world change based on our country of origin? Do we all have the same opportunities and rights?"

  We are a group of designers and computer scientists, united by a passion for telling human stories and committed to a fairer and more aware world.

  We believe that understanding the experiences of others is the first step towards empathy and change. With this project, we aim to open a space for reflection, examining the stories of people migrating from all parts of the world for various reasons, and comparing them.
*/

</script>

<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Il messaggio</h1>
      </v-col>
      <v-col align="left" cols="12">
        <v-card class="pa-2 bg-primary text-body-1 font-weight-medium">
          <p>“Come cambiano le possibilità di trovare un posto in cui stare nel mondo in base al nostro paese di
            origine? Abbiamo tutti le stesse opportunità e diritti?”</p>
          <p>Siamo un gruppo di designer e informatici, uniti dalla passione per il racconto delle storie umane e
            dall'impegno per un mondo più giusto e consapevole.</p>
          <p>Crediamo che la comprensione delle esperienze degli altri sia il primo passo verso l'empatia e il
            cambiamento. Con questo progetto, vogliamo aprire uno spazio di riflessione, rivolgendo uno sguardo a tutte
            le storie delle persone che migrano da ogni parte del mondo per motivi diversi, mettendole a confronto.</p>
        </v-card>
      </v-col>

      <v-col cols="12">
        <h1>Chi siamo</h1>
      </v-col>
      <v-col v-for="name in ['Simone', 'Thomas', 'Kevin', 'Loris', 'Gabriel', 'Giulia', 'Francesca', 'Lorenzo']"
        :key="name" cols="12" sm="6" md="3" lg="3">
        <PictureContainer :ProfileName="name" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
* {
  font-family: 'Inter', sans-serif;
}
</style>