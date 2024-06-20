<template>
    <div class="timeline-row" :class="{ 'swiped-left': isSwipedLeft }" @touchstart="handleTouchStart"
        @touchmove="handleTouchMove" @touchend="handleTouchEnd">
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
            isSwipedLeft: false,
            startX: 0,
            endX: 0,
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
        handleTouchStart(event) {
            this.startX = event.touches[0].clientX;
        },
        handleTouchMove(event) {
            this.endX = event.touches[0].clientX;
        },
        handleTouchEnd() {
            const distance = this.endX - this.startX;
            if (distance < -50) {
                this.isSwipedLeft = true;
            } else if (distance > 50) {
                this.isSwipedLeft = false;
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
    overflow: hidden;
    touch-action: pan-y;
}

.sx-side,
.dx-side {
    flex: 1;
    display: flex;
    align-items: center;
    position: relative;
    transition: transform 0.3s ease;
    width: 100%;
}

.sx-side {
    justify-content: flex-end;
}

.dx-side {
    justify-content: flex-start;
    transform: translateX(100%);
}

.swiped-left .sx-side {
    transform: translateX(-100%);
}

.swiped-left .dx-side {
    transform: translateX(0);
}

.story-board {
    margin: 0 5.208vw;
}

#sx-edge-card,
#dx-edge-card {
    position: absolute;
    z-index: 1;
    transition: transform 0.3s ease;
}

#sx-edge-card {
    transform: translateX(-23.438vw);
    left: 0;
}

#dx-edge-card {
    transform: translateX(23.438vw);
    right: 0;
}

#sx-edge-card:hover {
    transform: translateX(1.563vw);
}

#dx-edge-card:hover {
    transform: translateX(-1.563vw);
}

.age-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.167vw;
    height: 4.167vw;
    border-radius: 50%;
    background-color: #BA2D0B;
    border: 2px solid #FFF2DB;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
}

.age-indicator span {
    font-size: 1.823vw;
    font-weight: bold;
    color: #FFF2DB;
}
</style>