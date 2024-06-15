<template>
  <div class="timeline-row">
    <div class="sx-side">

      <div id="sx-edge-card">
        <slot name="sx-edge-card" :expand="expandCard === 'sx'" /> 
      </div>
     
      <slot name="sx-story-board" :on-click="() => toggleExpand('sx')" />
    </div>

    <div class="age-indicator">
      <span>{{ age }}</span>
    </div>
    
    <div class="dx-side">
      <slot name="dx-story-board" :on-click="() => toggleExpand('dx')" />

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

#sx-edge-card {
  transition: transform 0.3s ease; 
  transform: translateX(-120px); 
}

#dx-edge-card {
  transition: transform 0.3s ease; 
  transform: translateX(120px); 
}

#sx-edge-card:hover{
  transform: translateX(0); /* Shift card to original position on hover */

}

#dx-edge-card:hover{
  transform: translateX(0); /* Shift card to original position on hover */

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
