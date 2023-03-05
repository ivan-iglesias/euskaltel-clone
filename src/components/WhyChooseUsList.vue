<script setup>
import { ref } from 'vue';
import WhyChooseUsListItem from '@/components/WhyChooseUsListItem.vue';
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

let { isMobile } = useBreakpoints();

let mobileView = ref(isMobile());

onresize = () => mobileView.value = isMobile();
</script>

<template>
  <div class="why-choose-us-list">

    <div class="why-choose-us-list__flex" v-if="! mobileView">
      <WhyChooseUsListItem
        v-for="slide in slides"
        :item="slide"
      />
    </div>

    <swiper
      v-if="mobileView"
      :slidesPerView="1.2"
      :spaceBetween="16"
      :modules="modules"
      :pagination="true"
    >
      <swiper-slide v-for="slide in slides">
        <WhyChooseUsListItem :item="slide" />
      </swiper-slide>
    </swiper>

  </div>
</template>

<style lang="scss">
.why-choose-us-list {
  margin: 1rem 0;

  &__flex {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
  }

  .swiper {
    width: 100%;
    height: 100%;
    margin-top: 1rem;
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
    background-color: var(--color-primary);
  }
}
</style>
