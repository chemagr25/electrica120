<template>
  <div class="swiper mySwiper w-[400px] h-[210px]  lg:w-[700px] lg:h-[340px]">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="/gen20.jpeg" alt="Imagen 1" />
      </div>
      <div class="swiper-slide">
        <img src="/gen2024.jpg" alt="Imagen 2" />
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

onMounted(() => {
  new Swiper('.mySwiper', {
    spaceBetween: 8,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
      
    },
  })
})
</script>

<style scoped>


.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}



::v-deep(.swiper-pagination-bullet-active) {
  background-color: #6941c6;
}

</style>
