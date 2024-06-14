<script setup>
import Timeline from "@/components/Timeline/Timeline.vue";
import TimelineRow from "@/components/Timeline/TimelineRow.vue";
import StoryBoardCard from "@/components/Timeline/TimeLineItems/StoryBoard.vue";
import EdgeCard from "@/components/Timeline/TimeLineItems/EdgeCard.vue";
</script>

<template>
  <div class="main-content">
    <h1>Età</h1>

    <Timeline>
      <TimelineRow :age="25">
        <template v-slot:sx-edge-card>
          <EdgeCard title="left edge card one" />
        </template>

        <template v-slot:sx-story-board>
          <StoryBoardCard title="left story board card one" />
        </template>

        <template v-slot:dx-story-board>
          <StoryBoardCard title="right story board card one" />
        </template>

        <template v-slot:dx-edge-card>
          <EdgeCard title="right edge card one" />
        </template>
      </TimelineRow>

      <TimelineRow :age="30">
        <template v-slot:sx-edge-card>
          <EdgeCard title="left edge card two" />
        </template>

        <template v-slot:sx-story-board>
          <StoryBoardCard title="left story board card two" />
        </template>

        <template v-slot:dx-story-board>
          <StoryBoardCard title="right story board card two" />
        </template>

        <template v-slot:dx-edge-card>
          <EdgeCard title="right edge card two" />
        </template>
      </TimelineRow>

      </Timeline>
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

.main-content {
  text-align: center;
  align-items: center;
  font-family: Arial, sans-serif;
  padding: 20px;
}

.timeline {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin: 0 auto;
}

h1 {
  margin: 20px 0;
}
</style>
