<script setup>
import { computed, ref } from 'vue';
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
  <v-card color="background" role="main">
    <v-row class="mt-4 d-flex justify-center align-center">
      <v-card class="rounded-xl mx-auto d-flex justify-center align-center" width="6vw" color="red">
        <v-card-title class="text-h6 text-md-h5 text-lg-h4" color="red">Età</v-card-title>
      </v-card>
    </v-row>
    <div class="timeline-wrapper">
      <Timeline>
        <TimelineRow v-for="(leftStory, index) in Stories[leftName]" :key="leftStory.index"
          :age="parseInt(leftStory.age)" :isFocused="id === index" :side="side">
          <template v-slot:sx-edge-card>
            <EdgeCard class="elevation-8 rounded-lg" :text="leftStory.description" :id="index" side="left"
              @update:focus="handleFocus" />
          </template>
          <template v-slot:sx-story-board>
            <StoryBoardCard class="elevation-8 rounded-lg" :imageSrc="images[imageName(leftStory.index, leftName)]" />
          </template>
          <template v-slot:dx-story-board>
            <StoryBoardCard class="elevation-8 rounded-lg" :imageSrc="images[imageName(index + 1, rightName)]" />
          </template>
          <template v-slot:dx-edge-card>
            <EdgeCard class="elevation-8 rounded-lg" :text="Stories[rightName][index].description" :id="index"
              side="right" @update:focus="handleFocus" />
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
