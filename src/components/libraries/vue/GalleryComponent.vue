<template>
  <swiper
    :style="{
      '--swiper-navigation-color': '#9333EA',
      '--swiper-pagination-color': '#9333EA',
    }"
    :lazy="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <img
        src="https://swiperjs.com/demos/images/nature-1.jpg"
        loading="lazy"
      />
      <div
        class="swiper-lazy-preloader swiper-lazy-preloader-white"
      ></div> </swiper-slide
    ><swiper-slide>
      <img
        src="https://swiperjs.com/demos/images/nature-2.jpg"
        loading="lazy"
      />
      <div
        class="swiper-lazy-preloader swiper-lazy-preloader-white"
      ></div> </swiper-slide
    ><swiper-slide>
      <img
        src="https://swiperjs.com/demos/images/nature-3.jpg"
        loading="lazy"
      />
      <div
        class="swiper-lazy-preloader swiper-lazy-preloader-white"
      ></div> </swiper-slide
    ><swiper-slide>
      <img
        src="https://swiperjs.com/demos/images/nature-4.jpg"
        loading="lazy"
      />
      <div
        class="swiper-lazy-preloader swiper-lazy-preloader-white"
      ></div> </swiper-slide
    ><swiper-slide>
      <img
        src="https://swiperjs.com/demos/images/nature-5.jpg"
        loading="lazy"
      />
      <div
        class="swiper-lazy-preloader swiper-lazy-preloader-white"
      ></div> </swiper-slide
    ><swiper-slide>
      <img
        src="https://swiperjs.com/demos/images/nature-6.jpg"
        loading="lazy"
      />
      <div
        class="swiper-lazy-preloader swiper-lazy-preloader-white"
      ></div> </swiper-slide
    ><swiper-slide>
      <img
        src="https://swiperjs.com/demos/images/nature-7.jpg"
        loading="lazy"
      />
      <div
        class="swiper-lazy-preloader swiper-lazy-preloader-white"
      ></div> </swiper-slide
    ><swiper-slide>
      <img
        src="https://swiperjs.com/demos/images/nature-8.jpg"
        loading="lazy"
      />
      <div
        class="swiper-lazy-preloader swiper-lazy-preloader-white"
      ></div> </swiper-slide
    ><swiper-slide>
      <img
        src="https://swiperjs.com/demos/images/nature-9.jpg"
        loading="lazy"
      />
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </swiper-slide>
  </swiper>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';


  // import required modules
  import { Pagination, Navigation } from 'swiper/modules';
  const modules = [ Pagination, Navigation]

</script>


<style scoped> 

  .swiper {
    height: 300px;
  }

  .swiper-pagination-bullet {
  background-color: #9333EA;
}

</style>


