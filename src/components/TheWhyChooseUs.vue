<script setup>
import { ref } from 'vue';
import WhyChooseUsCarrousel from './whyChooseUs/WhyChooseUsCarrousel.vue';
import WhyChooseUsList from './whyChooseUs/WhyChooseUsList.vue';
import whyChooseUsCards from '../data/WhyChooseUs.json';
import { useBreakpoints } from "../composables/useBreakpoints";

let { isMobile } = useBreakpoints();

let mobileView = ref(isMobile());

onresize = () => mobileView.value = isMobile();
</script>

<template>
  <section class="why-choose-us">
    <div class="wrapper">
      <h2>¿Por qué elegir Euskaltel?</h2>

      <WhyChooseUsCarrousel
        v-if="mobileView"
        template="WhyChooseUsCard"
        :slides="whyChooseUsCards"
      />

      <WhyChooseUsList
        v-if="! mobileView"
        template="WhyChooseUsCard"
        :slides="whyChooseUsCards"
      />

    </div>
  </section>
</template>

<style lang="scss">
.why-choose-us {
  text-align: center;
  padding: 3rem 0;
}
</style>
