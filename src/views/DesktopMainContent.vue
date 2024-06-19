<script setup>
import { computed } from 'vue';
import Timeline from '@/components/Timeline/Timeline.vue';
import TimelineRow from '@/components/Timeline/TimelineRow.vue';
import StoryBoardCard from '@/components/Timeline/TimeLineItems/StoryBoard.vue';
import EdgeCard from '@/components/Timeline/TimeLineItems/EdgeCard.vue';
import images from '@/images';
import Stories from '@/assets/json/stories.json';

const props = defineProps({
  selected1: {
    type: Object,
    default: null,
  },
  selected2: {
    type: Object,
    default: null,
  },
});

const leftName = computed(() => props.selected1?.name || null);
const rightName = computed(() => props.selected2?.name || null);

const getDescription = (name, index) => {
  return name ? (Stories[name][index]?.description || 'Descrizione non disponibile') : 'Nessun nome selezionato';
};

const getImageSrc = (name, index) => {
  return name ? (images[`${name}${index + 1}`] || images['Tara5']) : images['Tara5'];
};
</script>

<template>
  <div class="main-content">
    <div class="pa-md-4 d-flex justify-center">
      <v-card class="rounded-xl mx-auto" width="10.208vw" color="#BA2D0B">
        <v-card-title class="text-h6 text-md-h5 text-lg-h4" color="#FFF2DB">Età</v-card-title>
      </v-card>
    </div>

    <div class="timeline-wrapper">
      <Timeline>
        <TimelineRow v-for="age in [5, 6, 11, 18, 19, 20, 21, 22, 23, 24]" :key="age" :age="age">
          <template v-slot:sx-edge-card>
            <EdgeCard :text="getDescription(leftName, age - 5)" />
          </template>
          <template v-slot:sx-story-board>
            <StoryBoardCard :imageSrc="getImageSrc(leftName, age - 5)" />
          </template>
          <template v-slot:dx-story-board>
            <StoryBoardCard :imageSrc="getImageSrc(rightName, age - 5)" />
          </template>
          <template v-slot:dx-edge-card>
            <EdgeCard :text="getDescription(rightName, age - 5)" />
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
body,
html {
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
