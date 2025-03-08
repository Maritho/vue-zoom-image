<template>

  <VueZoomGallery
    :data="gallery"
    :zoom-level="2"
    :zoom-window-size="2">
  </VueZoomGallery>
</template>

<script setup>
import VueZoomGallery from './libs/VueZoomGallery.vue';
import { reactive } from 'vue'

const gallery = reactive([
  {
    image: 'https://cdn.narasi.tv/production/img/store/product.png',
    imageFull: 'https://cdn.narasi.tv/production/img/store/product.png'
  },
  {
    image: 'https://cdn.narasi.tv/production/img/store/collaboration-1.png',
    imageFull: 'https://cdn.narasi.tv/production/img/store/collaboration-1.png'
  },
  {
    image: 'https://cdn.narasi.tv/production/img/store/product.png',
    imageFull: 'https://cdn.narasi.tv/production/img/store/product.png'
  },

  {
    image: 'https://cdn.narasi.tv/production/img/store/collaboration-1.png',
    imageFull: 'https://cdn.narasi.tv/production/img/store/collaboration-1.png'
  },
  {
    image: 'https://cdn.narasi.tv/production/img/store/collaboration-1.png',
    imageFull: 'https://cdn.narasi.tv/production/img/store/collaboration-1.png'
  },
])
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
}
</style>
