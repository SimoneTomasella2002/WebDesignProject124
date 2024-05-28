<template>
  <div class="container">
    <div v-if="isExpanded" class="overlay" @click="toggleExpand"></div>
    <div class="edge-card" :class="{ expanded: isExpanded }" @click="toggleExpand">
      <span class="arrow" :class="{ rotate: isExpanded }">
        <i class="fas fa-chevron-right"></i> </span>
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
.container {
  position: relative;
  width: fit-content;
}

.edge-card {
  flex: 1;
  position: relative;
  width: 50px;
  height: 150px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1;
}

.edge-card.expanded {
  width: 250px; /* Adjusted width for better visualization */
  height: 150px;
  z-index: 6;
}

.edge-card.expanded h3 {
  opacity: 1; /* Start with full opacity */
  transform: scale(1, 1); /* Scale from the center */
  transform-origin: 50% 50%; /* Set transform origin */
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out; /* Smoother transition */

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

.arrow {
  transition: transform 0.3s ease;
}

.arrow.rotate {
  transform: rotate(180deg); /* Rotate arrow on expansion */
}


</style>