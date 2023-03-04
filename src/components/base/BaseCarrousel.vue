<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from "swiper";
import BaseCarrouselNavigation from "@/components/base/BaseCarrouselNavigation.vue";

import 'swiper/css';

defineProps({
  slides: Object
});

const modules = [Autoplay];

let swiperInstance = null;
let currentSlide = ref(0);

const onSwiper = (swiper) => swiperInstance = swiper;

const onSlideChange = () => currentSlide.value = swiperInstance.activeIndex;

const changeSlide = (index) => swiperInstance.slideTo(index);
</script>

<template>
  <swiper
    @swiper="onSwiper"
    :modules="modules"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: true,
    }"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="slide in slides">
      <picture>
        <source media="(max-width: 480px)" :srcset="'./images/banners/mobile/' + slide.image">
        <source media="(max-width: 768px)" :srcset="'./images/banners/tablet/' + slide.image">
        <source media="(max-width: 1024px)" :srcset="'./images/banners/laptop/' + slide.image">
        <source media="(max-width: 1280px)" :srcset="'./images/banners/desktop/' + slide.image">
        <img data-object-fit="cover" :src="'./images/banners/desktop/' + slide.image">
      </picture>
    </swiper-slide>
  </swiper>

  <BaseCarrouselNavigation
    :slides="slides"
    :currentSlide="currentSlide"
    @change-slide="changeSlide"
  />
</template>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  background: white;
  height: 400px;
  background-color: var(--color-primary);
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
</style>
