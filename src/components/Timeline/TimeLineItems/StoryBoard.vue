<template>
  <div class="story-board-card">
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: "StoryBoardCard",
  props: {
    title: {
      type: String,
      required: true 
    }
  }
};
</script>

<style scoped>
.story-board-card {
  width: 250px; 
  height: 150px; 
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
