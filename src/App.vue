<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheMobilePlans from '@/components/TheMobilePlans.vue';
import TheInternetMobileBundles from '@/components/TheInternetMobileBundles.vue';
import TheCoverageBanner from '@/components/TheCoverageBanner.vue';
import BaseCarrousel from '@/components/base/BaseCarrousel.vue';
import homeSliders from '@/data/HomeSliders.json';
</script>

<template>

  <TheHeader />

  <main class="main">
    <BaseCarrousel :sliders="homeSliders" />
    <TheCoverageBanner />
    <TheMobilePlans />
    <TheInternetMobileBundles />
  </main>
</template>

<style scoped>

</style>
