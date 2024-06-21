<template>
  <div class="container">
    <div
      class="edge-card"
      :class="{ 'hovered': isHovered }"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EdgeCard",
  props: {
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
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;



  position: relative;
  padding: 0;
  margin: 0;
  width: 26.042vw;
  height: 18.229vw;


  background: #FFF8EC; 
  border: solid 2px #978E4F;
  border-radius: 8px;
  color: black;
  cursor: pointer;
}


.edge-card p {
  align-items: center;
  text-align: left;
  margin: 0;
  padding: 30px;
  margin:20px;
  color: rgb(37, 35, 35);
  font-size: 1.2vw; 
}
</style>
