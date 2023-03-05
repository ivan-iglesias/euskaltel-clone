<script setup>
import { useBreakpoints } from "@/composables/useBreakpoints";

defineProps({
  slides: Array,
  currentSlide: Number,
});

let { isMobile } = useBreakpoints();
</script>

<template>
  <div class="wrapper">

    <!-- mobile -->
    <div v-if="isMobile()" class="carousel-nav-mobile">
      <div class="carousel-nav-mobile__links">
        <div
          v-for="(slide, index) in slides"
          :class="{
              'carousel-nav-mobile__link': true,
              'carousel-nav-mobile__link--active': currentSlide == index,
          }"
        ></div>
      </div>

      <div class="carousel-nav-mobile__info">
        <div><strong>{{ slides[currentSlide].text }}</strong></div>
        <div><strong>{{ currentSlide + 1 }}/{{ slides.length }}</strong></div>
      </div>
    </div>

    <!-- desktop -->
    <div v-if="! isMobile()" class="carousel-nav">
      <div class="carousel-nav__title">Ofertas destacadas</div>
      <ul class="carousel-nav__links">
        <li
          v-for="(slide, index) in slides"
          @click="$emit('changeSlide', index)"
          :class="{
              'carousel-nav__link': true,
              'carousel-nav__link--active': currentSlide == index,
          }"
        >{{ slide.text }}</li>
      </ul>
    </div>

  </div>
</template>

<style lang="scss">
.carousel-nav-mobile {
  margin: .5rem 0;

  &__links {
    display: flex;
    flex-direction: row;
  }

  &__link {
    flex-grow: 1;
    border-top: 2px solid var(--color-grey-200);
    margin: 0 .3rem;

    &:first-child{
      margin-left: 0;
    }

    &:last-child{
      margin-right: 0;
    }

    &--active {
      border-top: 2px solid var(--color-primary);
    }
  }

  &__info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: .8rem;
    margin: .5rem 0;
  }
}

.carousel-nav {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin: .5rem 0;

  &__title {
    color: var(--color-primary);
    font-family: var(--font-family-primary);
    font-size: 1.3rem;
    border-right: 1px solid var(--color-grey-200);;
    margin-right: 16px;
    padding-right: 16px;
  }

  &__links {
    display: flex;
    flex-direction: row;
    gap: 16px;
    font-size: .8rem;
  }

  &__link {
    cursor: pointer;
    list-style: none;
    padding: 0.5rem;
    border-top: 2px solid var(--color-grey-200);

    &--active {
      border-top: 2px solid var(--color-primary);
    }
  }
}
</style>
