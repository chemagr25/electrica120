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
      cardsCont.scrollBy({ left: -220, behavior: 'smooth' })
    })

    btnRight.addEventListener('click', () => {
      cardsCont.scrollBy({ left: 220, behavior: 'smooth' })
    })
  })
})



</script>

<template>
  <div class="mt-24">
    <h1 class="mt-3 text-3xl font-semibold leading-6 text-zinc-900 dark:text-white">
      {{ titleSection }}
    </h1>

    <div class="slider-container">
      <button class="btn left" @click="scrollLeft">‹</button>

      <div ref="cardsCont" class="cards-cont">
        <div class="card-composition" v-for="item in items" :key="item.name">
          <div class="card-inner">
            <!-- Cara frontal -->
            <div class="card-front" :style="{ backgroundImage: `url(${item.cover})` }"></div>
            <!-- Cara trasera -->
            <div class="card-back">
              <p>{{ item?.description || 'Este es el texto por detrás' }}</p>
            </div>
          </div>
          <div class="mt-3 text-xl font-semibold leading-6 text-zinc-900 dark:text-white">
            {{ item?.name }}
          </div>
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
  height: 340px;
  gap: 1.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 1rem;
  margin-top: 30px;
  scroll-behavior: smooth;
}

.card-composition {
  flex: 0 0 auto;
  width: 200px;
  height: 250px; /* solo la parte que rota */
  perspective: 1000px;
}
.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.card-composition:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  overflow: hidden;
}

/* Frente */
.card-front {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

/* Parte trasera */
.card-back {
  background: #333;
  color: white;
  transform: rotateY(180deg);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
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
