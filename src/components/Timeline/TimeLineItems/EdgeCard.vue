<template>
  <div class="container">
    <div
      class="edge-card"
      :class="{ 'hovered': isHovered }"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <h3>{{ title }}</h3>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EdgeCard",
  props: {
    title: {
      type: String,
      required: true,
    },

    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isHovered: false,
    };
  },
  methods: {
    onMouseEnter() {
      this.isHovered = true;
    },
    onMouseLeave() {
      this.isHovered = false;
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
  width: fit-content;
  overflow: hidden;
}

.edge-card {
  position: relative;
  width: 26.042vw;
  height: 18.229vw;
  background: #eae4d9; 
  border: solid 5px transparent;
  border-radius: 2em;
  color: black;
  cursor: pointer;

  z-index: 3;
 
}


.edge-card h3 {
  text-align: left;
  margin: 0;
  padding: 10px;
  color: #014C78;
}

.edge-card p {
  text-align: left;
  margin: 0;
  padding: 10px;
  color: rgb(37, 35, 35);
}


</style>
