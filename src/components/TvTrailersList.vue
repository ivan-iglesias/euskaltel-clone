<script setup>
import { computed } from 'vue';
import { useBreakpoints } from '@/composables/useBreakpoints';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper';
import slides from '@/data/TvTrailers.json';

import 'swiper/css';
import 'swiper/css/pagination';

const modules = [Pagination];

let { isMobile, isTablet } = useBreakpoints();

const slidesPerView = computed(() => {
  if (isMobile()) return 1.7;
  if (isTablet()) return 2.6;
  return 3;
});
</script>

<template>
  <div class="tv-trailers-list">
    <swiper
      :slidesPerView="slidesPerView"
      :spaceBetween="16"
      :modules="modules"
      :pagination="true"
    >
      <swiper-slide v-for="slide in slides">
        <img
          class="tv-trailers-list__image"
          :src="'./images/tv/trailers/' + slide['image']"
          :alt="slide['name']"
        >
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss">
.tv-trailers-list {
  margin: 0 auto;
  max-width: 608px;
  width: 100%;

  &__image {
    border-radius: var(--border-radius);
    max-width: 196px;
    width: 100%;
  }

  .swiper {
    width: 100%;
    height: 100%;
    margin-top: 1rem;
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
    background-color: var(--color-primary);
  }
}
</style>
