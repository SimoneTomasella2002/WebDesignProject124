<template>
  <div class="container">
    <div class="edge-card bg-infoBackground" tabindex="0" aria-label="Edge Card" @focus="emitFocus(true)"
      @blur="emitFocus(false)">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  side: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['update:focus']);

const emitFocus = (value) => {
  emit('update:focus', value, props.id, props.side);
};
</script>

<style scoped>
.container {
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
  border: solid 2px #978E4F;
  border-radius: 8px;
  cursor: pointer;
}


.edge-card p {
  align-items: center;
  text-align: left;
  margin: 0;
  padding: 30px;
  margin: 20px;
  color: rgb(37, 35, 35);
  font-size: 1.2vw;
}
</style>
