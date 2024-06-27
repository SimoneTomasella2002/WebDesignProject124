<script setup>
import { computed, ref } from 'vue';
import Timeline from '@/components/Timeline/Timeline.vue';
import TimelineRow from '@/components/Timeline/TimelineRow.vue';
import StoryBoardCard from '@/components/Timeline/TimeLineItems/StoryBoard.vue';
import EdgeCard from '@/components/Timeline/TimeLineItems/EdgeCard.vue';
import images from '@/images';
import Stories from '@/assets/json/stories.json';
import backgroundImage from '@/assets/images/pattern/Pattern_1920x1080.png';

const props = defineProps({
  selected1: {
    type: Object,
    default: null,
  },
  selected2: {
    type: Object,
    default: null,
  },
  language: {
    type: Object,
    default: null,
  },
});

const leftName = computed(() => props.selected1.name);
const rightName = computed(() => props.selected2.name);
const language = computed(() => props.language.language);

function imageName(index, name) {
  return `${name.replace(/-/g, '_')}${index}`;
}

const handleFocus = (value, newId, newSide) => {
  if (value) {
    id.value = newId;
    side.value = newSide;
  }
  else {
    id.value = -1;
    side.value = '';
  }
};

const id = ref(-1);
const side = ref('');
</script>

<template>
  <v-card color="background" role="main"
    :style="{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }">
    <v-row class="mt-4 d-flex justify-center align-center">
      <v-card class="rounded-xl mx-auto d-flex justify-center align-center" width="6vw" color="red">
        <v-card-title class="text-h6 text-md-h5 text-lg-h4" color="red">
          {{ language === 'English' ? "Age" : "Età" }}
        </v-card-title>
      </v-card>
    </v-row>
    <div class="timeline-wrapper">
      <Timeline>
        <TimelineRow v-for="(leftStory, index) in Stories[leftName]" :key="leftStory.index"
          :age="parseInt(leftStory.age)" :isFocused="id === index" :side="side">
          <template v-slot:sx-edge-card>
            <EdgeCard :text="language === 'English' ? leftStory.description_en : leftStory.description"
              class="elevation-8 rounded-lg" :id="index" side="left" @update:focus="handleFocus" />
          </template>
          <template v-slot:sx-story-board>
            <StoryBoardCard class="elevation-8 rounded-lg" :imageSrc="images[imageName(leftStory.index, leftName)]" />
          </template>
          <template v-slot:dx-story-board>
            <StoryBoardCard class="elevation-8 rounded-lg" :imageSrc="images[imageName(index + 1, rightName)]" />
          </template>
          <template v-slot:dx-edge-card>
            <EdgeCard
              :text="language === 'English' ? Stories[rightName][index].description_en : Stories[rightName][index].description"
              class="elevation-8 rounded-lg" :id="index" side="right" @update:focus="handleFocus" />
          </template>
        </TimelineRow>
      </Timeline>
    </div>
  </v-card>
</template>

<style scoped>
* {
  font-family: 'Inter', sans-serif;
}

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
