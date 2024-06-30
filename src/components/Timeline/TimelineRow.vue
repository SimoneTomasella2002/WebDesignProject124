<template>
  <div class="timeline-row">
    <div class="sx-side">
      <div class="sx-edge-card" :class="{ 'sx-edge-card-focus': props.isFocused && props.side === 'left' }">
        <slot name="sx-edge-card" />
      </div>
      <div class="story-board bg-infoBackground" @click="() => toggleExpand('sx')">
        <slot name="sx-story-board" />
      </div>
    </div>

    <div class="age-indicator">
      <span>{{ age }}</span>
    </div>

    <div class="dx-side">
      <div class="story-board bg-infoBackground" @click="() => toggleExpand('dx')">
        <slot name="dx-story-board" />
      </div>
      <div class="dx-edge-card" :class="{ 'dx-edge-card-focus': props.isFocused && props.side === 'right' }">
        <slot name="dx-edge-card" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, onUpdated } from 'vue';

const props = defineProps({
  age: {
    type: Number,
    required: true,
  },
  isFocused: {
    type: Boolean,
    required: true,
  },
  side: {
    type: String,
    required: true,
  },
});

const expandCard = ref(null);

const toggleExpand = (side) => {
  expandCard.value = expandCard.value === side ? null : side;
};

const handleClickOutside = (event) => {
  if (!event.target.closest('.timeline-row')) {
    expandCard.value = null;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});

// onUpdated(() => { // per ricordare di fixare la prop stability
//   console.log(props.isFocused, props.side);
// });
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
}

.dx-side {
  justify-content: flex-start;
}

.story-board {
  margin: 0 5.208vw;
  border-radius: 8px;
}

.sx-edge-card,
.dx-edge-card {
  position: absolute;
  z-index: 1;
  cursor: pointer;
  transition: transform 0.5s ease-in-out;
  padding: 0;
  margin: 0;
}


.dx-edge-card::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0vw; /* NON CANCELLARE */
  right: -100vw;
  background-color: transparent;
  z-index: -1; 
}

.sx-edge-card::before{
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: -100vw;
  right: 0vw; /* NON CANCELLARE */
  background-color: transparent;
  z-index: -1; 
}

.sx-edge-card {
  transform: translateX(-18vw);
  left: 0;
}

.dx-edge-card {
  transform: translateX(18vw);
  right: 0;
}

.sx-edge-card:hover,
.sx-edge-card-focus {
  transform: translateX(1.563vw);
}

.dx-edge-card:hover,
.dx-edge-card-focus {
  transform: translateX(-1.563vw);
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