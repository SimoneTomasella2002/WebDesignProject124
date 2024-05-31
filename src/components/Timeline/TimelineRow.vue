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
  display: flex;
  align-items: center;
  width: 100%;
  gap: 20px;
  margin-bottom: 25px;
  position: relative;
  box-sizing: border-box;
}

.sx-side,
.dx-side {
  flex: 1;
  display: flex;
  justify-content: space-between;
}

.age-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ddd;
}

.age-indicator span {
  font-size: 16px;
  font-weight: bold;
  color: black;
}
</style>