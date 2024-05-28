<template>
  <div class="timeline-row">
    <div class="sx-side">
      <slot name="sx-edge-card"></slot>
      <slot name="sx-story-board"></slot>
    </div>

    <div class="age-indicator">
      <span>{{ age }}</span>
    </div>
    
    <div class="dx-side">
      <slot name="dx-story-board"></slot>
      <slot name="dx-edge-card"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimelineRow",
  props: {
    age: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.timeline-row {
  display: flex; /* Use flexbox for horizontal arrangement */
  align-items: center; /* Align content vertically */
  width: 100%;
  gap: 20px; /* Gap between elements */
  margin-bottom: 25px;
  position: relative;
  box-sizing: border-box;
}

.sx-side,
.dx-side {
  flex: 1; /* Allow sides to expand */
  display: flex; /* Arrange children inline */
  justify-content: space-between; /* Distribute space evenly within sides */
  /* Add other styles for sides (e.g., border, padding) */
}

.age-indicator {
  display: flex; /* Arrange content inline */
  align-items: center; /* Align content vertically */
  justify-content: center; /* Center content horizontally */
  width: 50px; /* Fixed width for age indicator */
  height: 50px; /* Adjust height as needed */
  border-radius: 50%; /* Create a circle */
  background-color: #ddd; /* Set background color */
  /* Add other styles for age indicator (e.g., border, text color) */
}

.age-indicator span {
  font-size: 16px; /* Adjust font size */
  font-weight: bold; /* Make text bold */
  color: black;
}
</style>