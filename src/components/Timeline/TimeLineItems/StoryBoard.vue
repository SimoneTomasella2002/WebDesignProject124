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
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
