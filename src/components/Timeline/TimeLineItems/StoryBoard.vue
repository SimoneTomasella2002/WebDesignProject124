<template>
  <div class="story-board-card" @click="handleClick">
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: "StoryBoardCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function,
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.onClick();
    },
  },
};
</script>

<style scoped>
.story-board-card {
  position: static;
  width: 700px;
  height: 450px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}



</style>
