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
  <v-card color="background" role="main">
    <v-row class="mt-4 d-flex justify-center align-center">
      <v-card class="rounded-xl mx-auto d-flex justify-center align-center" width="6vw" color="red">
        <v-card-title class="text-h6 text-md-h5 text-lg-h4" color="red">Età</v-card-title>
      </v-card>
    </v-row>
    <div class="timeline-wrapper">
      <Timeline>
        <TimelineRow
          v-for="([age, index]) in [[5, 0], [6, 1], [11, 2], [18, 3], [19, 4], [20, 5], [21, 6], [22, 7], [23, 8], [24, 9]]"
          :key="age" :age="age">
          <template v-slot:sx-edge-card>
            <EdgeCard class="elevation-8 rounded-lg":text="getDescription(leftName, index)" />
          </template>
          <template v-slot:sx-story-board>
            <StoryBoardCard class="elevation-8 rounded-lg" :imageSrc="getImageSrc(leftName, index)" />
          </template>
          <template v-slot:dx-story-board>
            <StoryBoardCard class="elevation-8 rounded-lg" :imageSrc="getImageSrc(rightName, index)" />
          </template>
          <template v-slot:dx-edge-card>
            <EdgeCard class="elevation-8 rounded-lg" :text="getDescription(rightName, index)" />
          </template>
        </TimelineRow>
      </Timeline>
    </div>
  </v-card>
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

.timeline-wrapper {
  padding-bottom: 1.563vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
</style>
