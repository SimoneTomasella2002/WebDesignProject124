<template>
  <div class="home">
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
import Timeline from "@/components/Timeline/Timeline.vue";
import TimelineRow from "@/components/Timeline/TimelineRow.vue";
import StoryBoardCard from "@/components/Timeline/TimeLineItems/StoryBoard.vue";
import EdgeCard from "@/components/Timeline/TimeLineItems/EdgeCard.vue";


export default {
  name: "Home",
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
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}
.home {
  text-align: center;
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
