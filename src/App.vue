<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheMobilePlans from '@/components/TheMobilePlans.vue';
import TheInternetMobileBundles from '@/components/TheInternetMobileBundles.vue';
import TheCoverageBanner from '@/components/TheCoverageBanner.vue';
import TheWhyChooseUs from '@/components/TheWhyChooseUs.vue';
import BaseCarousel from '@/components/base/BaseCarousel.vue';
import homeSlides from '@/data/HomeSlides.json';
</script>

<template>

  <TheHeader />

  <main class="main">
    <BaseCarousel :slides="homeSlides" />
    <TheCoverageBanner />
    <TheInternetMobileBundles />
    <TheWhyChooseUs />
    <TheMobilePlans />
  </main>
</template>

<style scoped>

</style>
