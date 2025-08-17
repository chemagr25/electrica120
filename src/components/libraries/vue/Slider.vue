<script setup>
import { ref } from 'vue'

const props = defineProps({
    items: Array
})

const cardsCont = ref(null)

function scrollLeft() {
    cardsCont.value.scrollBy({ left: -220, behavior: 'smooth' })
}
function scrollRight() {
    cardsCont.value.scrollBy({ left: 220, behavior: 'smooth' })
}
</script>

<template>
    <div class="slider-container">
        <button v-show="items.length > 1" class="btn left" @click="scrollLeft">‹</button>

        <div ref="cardsCont" class="cards-cont">
            <slot />
        </div>

        <button v-show="items.length > 1" class="btn right" @click="scrollRight">›</button>
    </div>
</template>

<style scoped>
.slider-container {
    position: relative;
    display: flex;
    align-items: center;
}

.cards-cont {
    display: flex;
    height: 480px;
    gap: 1.8rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding: 1rem;
    margin-top: 10px;
    scroll-behavior: smooth;
    overflow-y: hidden;
}

.cards-cont::-webkit-scrollbar {
    display: none;
}

.cards-cont {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.btn {
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    font-size: 1rem;
    padding: 0.5rem;
    cursor: pointer;
    transition: background 0.3s;
    z-index: 10;
}

.btn:hover {
    background: rgba(0, 0, 0, 0.7);
}

.btn.left {
    position: absolute;
    left: 0;
}

.btn.right {
    position: absolute;
    right: 0;
}
</style>
