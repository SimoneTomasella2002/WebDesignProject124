<template>
  <div class="timeline">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Timeline"
};
</script>

<style scoped>
.timeline {
  position: relative;
  width: 100vh;
  margin: 0 auto;
  padding: 20px 0;
}

/* vertical timeline line */
.timeline::before {
  content: "";
  position: absolute;
  width: 6px;
  background-color: #333;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}
</style>
