<template>
  <div class="story-board-card">
    <v-img :src="imageSrc" alt="Story Image" class="story-image" cover></v-img>
  </div>
</template>

<script>
export default {
  name: "StoryBoardCard",
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.story-board-card {
  position: relative;
  width: 26.042vw;
  height: 18.229vw;
  background-color: white;
  border: solid 2px #978E4F;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.story-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
