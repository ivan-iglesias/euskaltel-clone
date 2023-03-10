<script setup>
import { ref, computed } from 'vue';
import TopDevicesListItem from '@/components/TopDevicesListItem.vue';
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

const mobileView = ref(isMobile());

const slidesPerView = computed(() => {
  if (isMobile()) return 1;
  if (isTablet()) return 1.7;
  if (isLaptop()) return 2.1;
  return 2.5;
});

onresize = () => mobileView.value = isMobile();
</script>

<template>
  <div class="top-devices-list">

    <swiper
      :slidesPerView="slidesPerView"
      :modules="modules"
      :pagination="true"
    >
      <swiper-slide v-for="slide in slides">
        <TopDevicesListItem :item="slide" />
      </swiper-slide>
    </swiper>

  </div>
</template>

<style lang="scss">
.top-devices-list {
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
