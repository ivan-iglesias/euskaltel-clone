<script setup>
import WhyChooseUsCard from './WhyChooseUsCard.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

const props = defineProps({
  template: {
    type: String,
    require: true
  },
  slides: {
    type: Array,
    require: true
  }
});

const modules = [Pagination];
</script>

<template>
  <div class="why-choose-us-carrousel">
    <swiper
      :slidesPerView="1.2"
      :spaceBetween="32"
      :modules="modules"
      :pagination="true"
    >
      <swiper-slide v-for="slide in slides">
        <WhyChooseUsCard :card="slide" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss">
.why-choose-us-carrousel {
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-wrapper {
    margin-bottom: 48px;
  }

  .swiper-pagination-bullet {
    border: .5px solid var(--color-primary);
    opacity: 1;
    background: white;
    height: 8px;
    margin: 0 12px !important;
    width: 8px;
  }

  .swiper-pagination-bullet-active {
    background-color: var(--color-primary);;
  }
}
</style>
