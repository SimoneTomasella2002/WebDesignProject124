<script setup>
import Timeline from "@/components/Timeline/Timeline.vue";
import TimelineRow from "@/components/Timeline/TimelineRow.vue";
import StoryBoardCard from "@/components/Timeline/TimeLineItems/StoryBoard.vue";
import EdgeCard from "@/components/Timeline/TimeLineItems/EdgeCard.vue";
</script>

<template>
    <v-container>
      <v-row class="d-flex justify-center">
        <v-col cols="12" md="8">
          <Timeline>
            <TimelineRow :age="10">
              <template #sx-edge-card>
                <EdgeCard title="Inizio" />
              </template>
              <template #dx-story-board>
                <StoryBoardCard title="Storia 1" />
              </template>
            </TimelineRow>
            <TimelineRow :age="20">
              <template #sx-story-board>
                <StoryBoardCard title="Storia 2" />
              </template>
              <template #dx-edge-card>
                <EdgeCard title="Fine" />
              </template>
            </TimelineRow>
          </Timeline>
        </v-col>
      </v-row>
    </v-container>
  </template>