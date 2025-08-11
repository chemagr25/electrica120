<script setup>
import { ref } from 'vue'

import { onMounted } from 'vue'

const props = defineProps({
  titleSection: String,
  items: Array

})



onMounted(() => {
  document.querySelectorAll('.slider-container').forEach(container => {
    const cardsCont = container.querySelector('.cards-cont')
    const btnLeft = container.querySelector('.btn.left')
    const btnRight = container.querySelector('.btn.right')

    btnLeft.addEventListener('click', () => {
      cardsCont.scrollBy({ left: -440, behavior: 'smooth' })
    })

    btnRight.addEventListener('click', () => {
      cardsCont.scrollBy({ left: 440, behavior: 'smooth' })
    })
  })
})



</script>

<template>
  <div class="mt-24">
    <h1 class="mt-3 text-3xl font-semibold leading-6 text-zinc-900 group-hover:text-zinc-600 dark:text-white"> {{ titleSection }}</h1>
    <div class="slider-container">
      <button class="btn left" @click="scrollLeft">‹</button>
      <div ref="cardsCont" class="cards-cont">
        <div class="card-composition flex flex-col" v-for="item in items">
          <div class="card"   :style="{ backgroundImage: `url(${item.cover})` }"></div>
          <div class="mt-3 text-xl font-semibold leading-6 text-zinc-900 group-hover:text-zinc-600 dark:text-white">{{ item?.name }}</div>
        </div>
      </div>
      <button class="btn right" @click="scrollRight">›</button>
    </div>
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
  gap: 1.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 1rem;
  margin-top: 30px;
  scroll-behavior: smooth;
}

.card {
  flex: 0 0 auto;
  width: 200px;
  height: 250px;
  border-radius: 10px;
  scroll-snap-align: start;
  background-size: cover;
  background-repeat: no-repeat;
}

.card-composition {
  transition: transform 0.3s ease;


}

.card-composition:hover {
  transform: scale(1.1);
}

.cards-cont::-webkit-scrollbar {
  display: none;
}

.cards-cont {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Botones */
.btn {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 2rem;
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
