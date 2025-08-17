<script setup>
const props = defineProps({
  name: String,
  cover: String,
  description: String,
  url: String
})
</script>

<template>
  <div class="card-composition ">
    <div class="card-inner">
      <div class="card-front" :style="{ backgroundImage: `url(${cover})` }"></div>
      <div class="card-back border">
        <p class="card-text bg-red-950">
          {{ description || 'Este es el texto por detrás' }}
        </p>
      </div>
    </div>
    <div class="mt-3 name text-xl font-semibold dark:text-white">
      <a :href="url" target="_blank">{{ name }}</a>
    </div>
  </div>
</template>

<style scoped>
.card-composition {
  flex: 0 0 auto;
  width: 250px;
  height: 350px;
  perspective: 1000px;
}
.name {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  cursor: pointer;
}
.name:hover {
  color: #9333EA;
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
.card-front {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.card-back {
  transform: rotateY(180deg);
  display: flex;
  padding: .5rem;
  
}

.card-text {


}
</style>
