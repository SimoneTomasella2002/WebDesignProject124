<script setup>
import Timeline from "@/components/Timeline/Timeline.vue";
import TimelineRow from "@/components/Timeline/TimelineRow.vue";
import StoryBoardCard from "@/components/Timeline/TimeLineItems/StoryBoard.vue";
import EdgeCard from "@/components/Timeline/TimeLineItems/EdgeCard.vue";

import ale1 from "@/assets/images/Illustrazioni/alessandro/Alessandro1.svg";
import ale2 from "@/assets/images/Illustrazioni/alessandro/Alessandro2.svg";
import ale3 from "@/assets/images/Illustrazioni/alessandro/Alessandro3.svg";
import ale4 from "@/assets/images/Illustrazioni/alessandro/Alessandro4.svg";
import ale5 from "@/assets/images/Illustrazioni/alessandro/Alessandro5.svg";
import ale6 from "@/assets/images/Illustrazioni/alessandro/Alessandro6.svg";
import ale7 from "@/assets/images/Illustrazioni/alessandro/Alessandro7.svg";
import ale8 from "@/assets/images/Illustrazioni/alessandro/Alessandro8.svg";
import ale9 from "@/assets/images/Illustrazioni/alessandro/Alessandro9.svg";
import ale10 from "@/assets/images/Illustrazioni/alessandro/Alessandro10.svg";

import tara1 from "@/assets/images/Illustrazioni/tara/Tara1.svg";
import tara2 from "@/assets/images/Illustrazioni/tara/Tara2.svg";
import tara3 from "@/assets/images/Illustrazioni/tara/Tara3.svg";
import tara4 from "@/assets/images/Illustrazioni/tara/Tara4.svg";
import tara5 from "@/assets/images/Illustrazioni/tara/Tara5.svg";
import tara6 from "@/assets/images/Illustrazioni/tara/Tara6.svg";
import tara7 from "@/assets/images/Illustrazioni/tara/Tara7.svg";
import tara8 from "@/assets/images/Illustrazioni/tara/Tara8.svg";
import tara9 from "@/assets/images/Illustrazioni/tara/Tara9.svg";
import tara10 from "@/assets/images/Illustrazioni/tara/Tara10.svg";
</script>

<template>
  <div class="main-content">
    <div class="pa-md-4 d-flex justify-center">
      <v-card class=" rounded-xl mx-auto" width="10.208vw" color="#BA2D0B">
        <v-card-title class="text-h6 text-md-h5 text-lg-h4" color="#FFF2DB">Età</v-card-title>
      </v-card>
    </div>

    <div class="timeline-wrapper">
      <Timeline>
        <TimelineRow :age="5">
          <template v-slot:sx-edge-card>
            <EdgeCard  text="Alessandro vive in un paese dell’entroterra ligure, in Italia, non molto distante dal capoluogo. Molto curioso, vivace, robusto." />
          </template>
          <template v-slot:sx-story-board>
            <StoryBoardCard :imageSrc="ale1" />
          </template>
          <template v-slot:dx-story-board>
            <StoryBoardCard :imageSrc="tara1" />
          </template>
          <template v-slot:dx-edge-card>
            <EdgeCard text="Tara vive in un paese sulle montagne dell’Afghanistan, nella regione del Ghazni. Giudiziosa, decisa, d’aspetto sobrio." />
          </template>
        </TimelineRow>



        <TimelineRow :age="6">
          <template v-slot:sx-edge-card>
            <EdgeCard text="Fa il primo viaggio all’estero con la famiglia in Spagna, la prima volta in aereo, è facile viaggiare in Europa." />
          </template>
          <template v-slot:sx-story-board>
            <StoryBoardCard :imageSrc="ale2"/>
          </template>
          <template v-slot:dx-story-board>
            <StoryBoardCard :imageSrc="tara2" />
          </template>
          <template v-slot:dx-edge-card>
            <EdgeCard  text="I suoi genitori hanno deciso di far studiare lei e i suoi fratelli, così comincia ad andare a scuola in città (zone di influenza e corridoi militari occidentali, sopprattutto USA) " />
          </template>
        </TimelineRow>



        <TimelineRow :age="11">
          <template v-slot:sx-edge-card>
            <EdgeCard text="Durante le scuole medie, si innamora della biologia e in futuro decide di iscriversi al liceo scientifico. I genitori lo mandano con amici ai campi estivi inglesi per imparare la lingua." />
          </template>
          <template v-slot:sx-story-board>
            <StoryBoardCard  :imageSrc="ale3" />
          </template>
          <template v-slot:dx-story-board>
            <StoryBoardCard :imageSrc="tara3" />
          </template>
          <template v-slot:dx-edge-card>
            <EdgeCard text="Mette il velo per la prima volta, come da tradizione della sua cultura quando si diventa donna, il velo non le copre mai i ciuffi più ribelli. " />
          </template>
        </TimelineRow>



        <TimelineRow :age="18">
          <template v-slot:sx-edge-card>
            <EdgeCard text="Durante il suo percorso di studio, ha modo di fare un anno di scambio culturale negli USA, prima volta che fa il passaporto, prima volta otreoceano. " />
          </template>
          <template v-slot:sx-story-board>
            <StoryBoardCard  :imageSrc="ale4" />
          </template>
          <template v-slot:dx-story-board>
            <StoryBoardCard :imageSrc="tara4" />
          </template>
          <template v-slot:dx-edge-card>
            <EdgeCard text="Essendo in età da marito, si sposa con un uomo sempre originario delle sue zone, lui si è opposto ai talebani ed essendo emigrato da minorenne ha cittadinanza italiana." />
          </template>
        </TimelineRow>



        <TimelineRow :age="19">
          <template v-slot:sx-edge-card>
            <EdgeCard  text="Consecuito il diploma, si ritrova a riflettere su dove continuare i suoi studi. Alla fine decide di specializzarsi in biochimica e fa richiesta alla Oxford University e dopo il colloquio viene preso." />
          </template>
          <template v-slot:sx-story-board>
            <StoryBoardCard  :imageSrc="ale5" />
          </template>
          <template v-slot:dx-story-board>
            <StoryBoardCard :imageSrc="tara5" />
          </template>
          <template v-slot:dx-edge-card>
            <EdgeCard text="Anche suo marito la esorta ad emanciparsi, così si iscrive all’università. Ma una voce però comincia a girare: gli americani voglio andarsene dal paese. " />
          </template>
        </TimelineRow>



        <TimelineRow :age="20">
          <template v-slot:sx-edge-card>
            <EdgeCard text="Dopo essersi trasferito nella città britannica giusto per il periodo di studio, incomincia a cercare un lavoretto part-time per poter aiutare economicamente ed essere più indipendente." />
          </template>
          <template v-slot:sx-story-board>
            <StoryBoardCard :imageSrc="ale6" />
          </template>
          <template v-slot:dx-story-board>
            <StoryBoardCard :imageSrc="tara6" />
          </template>
          <template v-slot:dx-edge-card>
            <EdgeCard text="Tara è incinta, ma l’ombra dei talebani si fa sempre più presente. Bisogna dare un futro a questo bambino...bisogna andare via dal paese. Suo marito è tornato in Italia, lei nel frattempo si reca a Kabul, fa il passaporto e parte per l’Iran. " />
          </template>
        </TimelineRow>



        <TimelineRow :age="21">
          <template v-slot:sx-edge-card>
            <EdgeCard text="Il Regno Unito è cambiato dopo la Brexit ed è decisamente più difficile stare dietro alla burocrazia del paese, non riesce a trovare un occupazione che gli permetta di poter fare tutto, è la prima volta che si sente veramente “immigrato”." />
          </template>
          <template v-slot:sx-story-board>
            <StoryBoardCard  :imageSrc="ale7"/>
          </template>
          <template v-slot:dx-story-board>
            <StoryBoardCard :imageSrc="tara7" />
          </template>
          <template v-slot:dx-edge-card>
            <EdgeCard text="In Iran è ospitata da un parente che vive lì da tempo, attende il permesso di partire per raggiungere il marito, nel frattempo nasce il suo primo figlio, ora è mamma e si può solo andare avanti. " />
          </template>
        </TimelineRow>
        

        <TimelineRow :age="22">
          <template v-slot:sx-edge-card>
            <EdgeCard text="Durante un suo periodo a casa, mentre rinnova il suo vecchio passaporto (maggiorenne, 10 anni di durata) fa la conoscenza di quella che diventerà la sua fidanzata, è la sua prima storia d’amore più seria." />
          </template>
          <template v-slot:sx-story-board>
            <StoryBoardCard  :imageSrc="ale8" />
          </template>
          <template v-slot:dx-story-board>
            <StoryBoardCard :imageSrc="tara8" />
          </template>
          <template v-slot:dx-edge-card>
            <EdgeCard text="Finalmente arriva il permesso di ricongiungimento. Dopo tanta attesa, prende suo figlio in braccio e si incammina per l’Europa attraverso i canali umanitari della rotta balcanica." />
          </template>
        </TimelineRow>



        <TimelineRow :age="23">
          <template v-slot:sx-edge-card>
            <EdgeCard text="Sono anni di duro studio, alla fine del terzo anno, può scegliere di poter proseguire con una sua ricerca assistito da un professore. " />
          </template>
          <template v-slot:sx-story-board>
            <StoryBoardCard  :imageSrc="ale9" />
          </template>
          <template v-slot:dx-story-board>
            <StoryBoardCard :imageSrc="tara9" />
          </template>
          <template v-slot:dx-edge-card>
            <EdgeCard text="Finalmente, al compimento dei suoi 23 anni, arriva in Italia e raggiunge suo marito nella sua nuova casa. Sà di essere più fortunata di molti altri, il suo prossimo obiettivo è integrarsi nel nuovo paese." />
          </template>
        </TimelineRow>


        <TimelineRow :age="24">
          <template v-slot:sx-edge-card>
            <EdgeCard text="Dopo il periodo di ricerca pensa di tornare nell’Unione Europea per poter diventare ricercatore. Per quanto vorrebbe tornare in Italia, pensa che potrà andare avanti nella sua specializzazione solo in altri paesi UE per il momento." />
          </template>
          <template v-slot:sx-story-board>
            <StoryBoardCard :imageSrc="ale10" />
          </template>
          <template v-slot:dx-story-board>
            <StoryBoardCard :imageSrc="tara10" />
          </template>
          <template v-slot:dx-edge-card>
            <EdgeCard text="Dopo un anno, riesce a parlare abbastanza bene la lingua e suo figlio può andare a scuola. Anche se sà che ci saranno ancora parecchie difficoltà nell’integrarsi, spera di poter riprendere a studiare lei stessa un giorno." />
          </template>
        </TimelineRow>
      </Timeline>
    </div>
  </div>
</template>

<script>
export default {
  name: "main-content",
  components: {
    Timeline,
    TimelineRow,
    StoryBoardCard,
    EdgeCard
  }
};
</script>

<style scoped>
body, html {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  width: 100%;
}

.main-content {
  text-align: center;
}

.timeline-wrapper {
  padding-bottom: 1.563vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
}


</style>
