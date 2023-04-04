<script setup>
import { computed } from 'vue';
import CustomerReviewListItem from '@/components/CustomerReviewListItem.vue';
import { useBreakpoints } from '@/composables/useBreakpoints';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

const props = defineProps({
  slides: {
    type: Array,
    require: true
  }
});

const modules = [Pagination];

let { isMobile, isTablet, isLaptop } = useBreakpoints();

const slidesPerView = computed(() => {
  if (isMobile()) return 1.2;
  if (isTablet()) return 2.2;
  if (isLaptop()) return 3.2;
  return 4.2;
});
</script>

<template>
  <div class="customer-review-list">

    <swiper
      :slidesPerView="slidesPerView"
      :spaceBetween="16"
      :modules="modules"
      :pagination="true"
    >
      <swiper-slide v-for="slide in slides">
        <CustomerReviewListItem :item="slide" />
      </swiper-slide>
    </swiper>

  </div>
</template>

<style lang="scss">
.customer-review-list {
  margin: 1rem 0;

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
