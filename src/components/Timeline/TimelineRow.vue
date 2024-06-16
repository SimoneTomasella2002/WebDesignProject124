<template>
  <div class="timeline-row">
    <div class="sx-side">
      <div id="sx-edge-card">
        <slot name="sx-edge-card" :expand="expandCard === 'sx'" />
      </div>
      <div class="story-board" @click="() => toggleExpand('sx')">
        <slot name="sx-story-board" />
      </div>
    </div>

    <div class="age-indicator">
      <span>{{ age }}</span>
    </div>
    
    <div class="dx-side">
      <div class="story-board" @click="() => toggleExpand('dx')">
        <slot name="dx-story-board" />
      </div>
      <div id="dx-edge-card">
        <slot name="dx-edge-card" :expand="expandCard === 'dx'" />
      </div>
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
  data() {
    return {
      expandCard: null,
    };
  },
  methods: {
    toggleExpand(side) {
      this.expandCard = this.expandCard === side ? null : side;
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.expandCard = null;
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
};
</script>

<style scoped>
.timeline-row {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 25px;
  position: relative;
  box-sizing: border-box;
}

.sx-side,
.dx-side {
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
}

.sx-side {
  justify-content: flex-end; /* Align items to the right */
}

.dx-side {
  justify-content: flex-start; /* Align items to the left */
}

.story-board {
  margin: 0 200px; /* modifica l'elemento di sinistra per cambiare il gap */
}

#sx-edge-card,
#dx-edge-card {
  position: absolute;
  z-index: 1;
  transition: transform 0.3s ease;
}

#sx-edge-card {
  transform: translateX(-550px);
  left: 0;
}

#dx-edge-card {
  transform: translateX(550px);
  right: 0;
}

#sx-edge-card:hover {
  transform: translateX(130px); /* Stop 30px away from the 0 position */
}

#dx-edge-card:hover {
  transform: translateX(-130px); /* Stop 30px away from the 0 position */
}

.age-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #BA2D0B;
  border: 0.5px  solid #FFF2DB;  
}

.age-indicator span {
  font-size: 50px;
  font-weight: bold;
  color: #FFF2DB;
  
}
</style>
