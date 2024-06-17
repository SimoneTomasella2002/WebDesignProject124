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
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* vertical timeline line */
.timeline::before {
  content: "";
  position: absolute;
  width: 1.302vw;
  background-color: #BA2D0B;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
