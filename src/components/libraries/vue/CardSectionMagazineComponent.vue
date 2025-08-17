<script setup>
import Slider from './Slider.vue'
import CardItem from './CardItem.vue'

const props = defineProps({
  titleSection: String,
  items: Array
})
</script>

<template>
  <div class="mt-24">
    <h1 class="mt-3 text-2xl font-semibold leading-6 text-zinc-900 dark:text-white">
      {{ titleSection }}
    </h1>

    <Slider :items="items">
      <CardItem
        v-for="item in items"
        :key="item.name"
        :name="item.name"
        :cover="item.cover"
        :description="item.description"
        :url="item.url"
      />
    </Slider>
  </div>
</template>
