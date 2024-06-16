<script setup>
import Timeline from "@/components/Timeline/Timeline.vue";
import TimelineRow from "@/components/Timeline/TimelineRow.vue";
import StoryBoardCard from "@/components/Timeline/TimeLineItems/StoryBoard.vue";
import EdgeCard from "@/components/Timeline/TimeLineItems/EdgeCard.vue";
</script>

<template>
  <div class="main-content">
    <h1>Età</h1>
    <div class="timeline-wrapper">
      <Timeline>
        <TimelineRow :age="25">
          <template v-slot:sx-edge-card>
            <EdgeCard title="left edge card one"  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perspiciatis error suscipit vitae " />
          </template>
          <template v-slot:sx-story-board>
            <StoryBoardCard title="left story board card one"  />
          </template>
          <template v-slot:dx-story-board>
            <StoryBoardCard title="right story board card one" />
          </template>
          <template v-slot:dx-edge-card>
            <EdgeCard title="right edge card one" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perspiciatis error suscipit vitae " />
          </template>
        </TimelineRow>
        <TimelineRow :age="30">
          <template v-slot:sx-edge-card>
            <EdgeCard title="left edge card two" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perspiciatis error suscipit vitae " />
          </template>
          <template v-slot:sx-story-board>
            <StoryBoardCard title="left story board card two" />
          </template>
          <template v-slot:dx-story-board>
            <StoryBoardCard title="right story board card two" />
          </template>
          <template v-slot:dx-edge-card>
            <EdgeCard title="right edge card two" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perspiciatis error suscipit vitae " />
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
  padding-bottom: 30px;
  overflow: hidden;
}

.timeline {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0;
  right: inherit;
  box-sizing: border-box; /* Include padding and border in the element's total width */
}

h1 {
  text-align: center;
  margin: 20px 0;
  background-color: #BA2D0B;
  color: #FFF2DB;

}
</style>
