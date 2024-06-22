<template>
  <div class="timeline-row">
    <div class="sx-side">
      <div id="sx-edge-card" tabindex="0" aria-label="Edge Card">
        <slot name="sx-edge-card" />
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
      <div id="dx-edge-card" tabindex="0" aria-label="Edge Card">
        <slot name="dx-edge-card" />
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
  justify-content: flex-end;
  /* Align items to the right */
}

.dx-side {
  justify-content: flex-start;
  /* Align items to the left */
}

.story-board {
  margin: 0 5.208vw;
  /* modifica l'elemento di sinistra per cambiare il gap */
  border-radius: 8px;
}

#sx-edge-card,
#dx-edge-card {
  position: absolute;
  z-index: 1;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  padding: 0;
  margin: 0;
}



#sx-edge-card {
  transform: translateX(-18vw);
  left: 0;


}

#dx-edge-card {
  transform: translateX(18vw);
  right: 0;

}

#sx-edge-card:hover,
#sx-edge-card:focus {
  transform: translateX(1.563vw);
  padding-left: 100px;

}

#dx-edge-card:hover,
#dx-edge-card:focus {
  transform: translateX(-1.563vw);
  padding-right: 100px;

}

.age-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6vw;
  height: 6vw;
  border-radius: 50%;
  background-color: #BA2D0B;
  border: 2px solid #FFF2DB;
}

.age-indicator span {
  font-size: 3vw;
  font-weight: bold;
  color: #FFF2DB;
}
</style>
