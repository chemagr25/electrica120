<script setup>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectFlip } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

const modules = [Navigation, Pagination, Scrollbar, A11y, EffectFlip, EffectFade];

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
};
</script>

<template>
  <swiper
  :style="{
      '--swiper-navigation-color': '#9333EA',
      '--swiper-pagination-color': '#9333EA',
    }"
    :modules="modules"
    :slides-per-view="1"
    :space-between="30"
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide
      ><img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtP3ZnPqa24OzFd86-_440mF3RoRGRVHhKrzg-OWy7i5g6aj3V3-YoM0itTiMSZNEY6pj-JlJ6-IglgcUygPR0vLN9alsrFCMlP_kuaNw4Nq73BDd-u1x3_pyfv209o9TsZLqh4gU-4neXzXa0vY_xWLtSjI311xUFyC-iIWjvmwKPdPIpc02QJcHQt4D6/s1280/WhatsApp%20Image%202024-11-11%20at%201.33.41%20PM%20(1).jpeg"
        alt=""
    /></swiper-slide>
    <swiper-slide
      ><img
      src="/2025.jpeg"  
      alt=""
    /></swiper-slide>
  </swiper>
</template>

<style >
.swiper {
  border-radius: 10px;
  height: 200px;
}

@media (min-width: 640px) {
  .swiper {
    height: 200px;/* altura para pantallas más grandes */
  }
}
img {
    border-radius: 10px;
    object-fit: contain; 
}
</style>
