<script setup>
import { ref, computed } from "vue";
import Timeline from "@/components/Timeline/Timeline.vue";
import TimelineRow from "@/components/Timeline/TimelineRow.vue";
import StoryBoardCard from "@/components/Timeline/TimeLineItems/StoryBoard.vue";
import EdgeCard from "@/components/Timeline/TimeLineItems/EdgeCard.vue";
import images from "@/images";
import Stories from "@/assets/json/stories.json";

const props = defineProps(["leftPerson", "rightPerson"]); // selection is an object with person to show and selectId (1 => sx, 2 => dx)

const leftName = computed(() => handleName(props.leftPerson.person));
const rightName = computed(() => handleName(props.rightPerson.person));

function handleName(person) {
  if (person) {
    return person.name;
  }
  return null;
}
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
            <EdgeCard :text="leftName !== null ? Stories[leftName][0].description : 'zio'" />
          </template>
          <template v-slot:sx-story-board>
            <StoryBoardCard :imageSrc="leftName !== null ? images[leftName + 1] : 'zio'" />
          </template>
          <template v-slot:dx-story-board>
            <StoryBoardCard :imageSrc="rightName !== null ? images[rightName + 1] : 'zio'" />
          </template>
          <template v-slot:dx-edge-card>
            <EdgeCard :text="rightName !== null ? Stories[rightName][0].description : 'zio'" />
          </template>
        </TimelineRow>



        <TimelineRow :age="6">
          <template v-slot:sx-edge-card>
            <EdgeCard :text="leftName !== null ? Stories[leftName][1].description : 'zio'" />
          </template>
          <template v-slot:sx-story-board>
            <StoryBoardCard :imageSrc="leftName !== null ? images[leftName + 2] : 'zio'" />
          </template>
          <template v-slot:dx-story-board>
            <StoryBoardCard :imageSrc="rightName !== null ? images[rightName + 2] : 'zio'" />
          </template>
          <template v-slot:dx-edge-card>
            <EdgeCard :text="rightName !== null ? Stories[rightName][1].description : 'zio'" />
          </template>
        </TimelineRow>



        <TimelineRow :age="11">
          <template v-slot:sx-edge-card>
            <EdgeCard :text="leftName !== null ? Stories[leftName][2].description : 'zio'" />
          </template>
          <template v-slot:sx-story-board>
            <StoryBoardCard :imageSrc="leftName !== null ? images[leftName + 3] : 'zio'" />
          </template>
          <template v-slot:dx-story-board>
            <StoryBoardCard :imageSrc="rightName !== null ? images[rightName + 3] : 'zio'" />
          </template>
          <template v-slot:dx-edge-card>
            <EdgeCard :text="rightName !== null ? Stories[rightName][2].description : 'zio'" />
          </template>
        </TimelineRow>



        <TimelineRow :age="18">
          <template v-slot:sx-edge-card>
            <EdgeCard :text="leftName !== null ? Stories[leftName][3].description : 'zio'" />
          </template>
          <template v-slot:sx-story-board>
            <StoryBoardCard :imageSrc="leftName !== null ? images[leftName + 4] : 'zio'" />
          </template>
          <template v-slot:dx-story-board>
            <StoryBoardCard :imageSrc="rightName !== null ? images[rightName + 4] : 'zio'" />
          </template>
          <template v-slot:dx-edge-card>
            <EdgeCard :text="rightName !== null ? Stories[rightName][3].description : 'zio'" />
          </template>
        </TimelineRow>



        <TimelineRow :age="19">
          <template v-slot:sx-edge-card>
            <EdgeCard :text="leftName !== null ? Stories[leftName][4].description : 'zio'" />
          </template>
          <template v-slot:sx-story-board>
            <StoryBoardCard :imageSrc="leftName !== null ? images[leftName + 5] : 'zio'" />
          </template>
          <template v-slot:dx-story-board>
            <StoryBoardCard :imageSrc="rightName !== null ? images[rightName + 5] : 'zio'" />
          </template>
          <template v-slot:dx-edge-card>
            <EdgeCard :text="rightName !== null ? Stories[rightName][4].description : 'zio'" />
          </template>
        </TimelineRow>



        <TimelineRow :age="20">
          <template v-slot:sx-edge-card>
            <EdgeCard :text="leftName !== null ? Stories[leftName][5].description : 'zio'" />
          </template>
          <template v-slot:sx-story-board>
            <StoryBoardCard :imageSrc="leftName !== null ? images[leftName + 6] : 'zio'" />
          </template>
          <template v-slot:dx-story-board>
            <StoryBoardCard :imageSrc="rightName !== null ? images[rightName + 6] : 'zio'" />
          </template>
          <template v-slot:dx-edge-card>
            <EdgeCard :text="rightName !== null ? Stories[rightName][5].description : 'zio'" />
          </template>
        </TimelineRow>



        <TimelineRow :age="21">
          <template v-slot:sx-edge-card>
            <EdgeCard :text="leftName !== null ? Stories[leftName][6].description : 'zio'" />
          </template>
          <template v-slot:sx-story-board>
            <StoryBoardCard :imageSrc="leftName !== null ? images[leftName + 7] : 'zio'" />
          </template>
          <template v-slot:dx-story-board>
            <StoryBoardCard :imageSrc="rightName !== null ? images[rightName + 7] : 'zio'" />
          </template>
          <template v-slot:dx-edge-card>
            <EdgeCard :text="rightName !== null ? Stories[rightName][6].description : 'zio'" />
          </template>
        </TimelineRow>


        <TimelineRow :age="22">
          <template v-slot:sx-edge-card>
            <EdgeCard :text="leftName !== null ? Stories[leftName][7].description : 'zio'" />
          </template>
          <template v-slot:sx-story-board>
            <StoryBoardCard :imageSrc="leftName !== null ? images[leftName + 8] : 'zio'" />
          </template>
          <template v-slot:dx-story-board>
            <StoryBoardCard :imageSrc="rightName !== null ? images[rightName + 8] : 'zio'" />
          </template>
          <template v-slot:dx-edge-card>
            <EdgeCard :text="rightName !== null ? Stories[rightName][7].description : 'zio'" />
          </template>
        </TimelineRow>



        <TimelineRow :age="23">
          <template v-slot:sx-edge-card>
            <EdgeCard :text="leftName !== null ? Stories[leftName][8].description : 'zio'" />
          </template>
          <template v-slot:sx-story-board>
            <StoryBoardCard :imageSrc="leftName !== null ? images[leftName + 9] : 'zio'" />
          </template>
          <template v-slot:dx-story-board>
            <StoryBoardCard :imageSrc="rightName !== null ? images[rightName + 9] : 'zio'" />
          </template>
          <template v-slot:dx-edge-card>
            <EdgeCard :text="rightName !== null ? Stories[rightName][8].description : 'zio'" />
          </template>
        </TimelineRow>


        <TimelineRow :age="24">
          <template v-slot:sx-edge-card>
            <EdgeCard :text="leftName !== null ? Stories[leftName][9].description : 'zio'" />
          </template>
          <template v-slot:sx-story-board>
            <StoryBoardCard :imageSrc="leftName !== null ? images[leftName + 10] : 'zio'" />
          </template>
          <template v-slot:dx-story-board>
            <StoryBoardCard :imageSrc="rightName !== null ? images[rightName + 10] : 'zio'" />
          </template>
          <template v-slot:dx-edge-card>
            <EdgeCard :text="rightName !== null ? Stories[rightName][9].description : 'zio'" />
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
