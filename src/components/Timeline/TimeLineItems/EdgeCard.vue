<template>
  <div class="container">
    <div v-if="isExpanded" class="overlay" @click="toggleExpand"></div>
    <div class="edge-card" :class="{ expanded: isExpanded }" @click="toggleExpand">
      <h3 v-if="isExpanded">{{ title }}</h3>
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
  },
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>

<style scoped>
@keyframes bg-spin {
  to {
    --border-angle: 1turn;
  }
}

@property --border-angle {
  syntax: "<angle>";
  inherits: true;
  initial-value: 0turn;
}

.container {
  position: relative;
  width: fit-content;
}

.edge-card {
  flex: 1;
  position: relative;
  width: 50px;
  height: 150px;
  background: #223;
  border: solid 5px transparent;
  border-radius: 2em;
  display: grid;
  place-content: center;
  color: black;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1;

  --border-angle: 0turn;
  --main-bg: conic-gradient(
    from var(--border-angle),
    rgb(241, 237, 245),
    rgb(237, 237, 243) 5%,
    rgb(241, 237, 245) 60%,
    rgb(241, 237, 245) 95%
  );
  
  --gradient-border: conic-gradient(from var(--border-angle), transparent 25%, #f3d2b8 , rgb(240, 216, 186) 99%, transparent);

  background: 
    var(--main-bg) padding-box,
    var(--gradient-border) border-box, 
    var(--main-bg) border-box;

  background-position: center center;
  animation: bg-spin 3s linear infinite;
}



.edge-card.expanded {
  width: 250px;
  height: 150px;
  z-index: 6;
}

.edge-card.expanded h3 {
  opacity: 1;
  transform: scale(1, 1);
  transform-origin: 50% 50%;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
}
</style>
