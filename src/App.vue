<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheMobilePlans from '@/components/TheMobilePlans.vue';
import TheInternetMobileBundles from '@/components/TheInternetMobileBundles.vue';
import TheCoverageBanner from '@/components/TheCoverageBanner.vue';
import TheWhyChooseUs from '@/components/TheWhyChooseUs.vue';
import TheCustomerReview from '@/components/TheCustomerReview.vue';
import TheTopDevices from '@/components/TheTopDevices.vue';
import TheWifiMesh from '@/components/TheWifiMesh.vue';
import TheTv from '@/components/TheTv.vue';
import TheFibraMaxBanner from '@/components/TheFibraMaxBanner.vue';
import TheFAQs from '@/components/TheFAQs.vue';
import TheAlreadyCustomer from '@/components/TheAlreadyCustomer.vue';
import TheHireUs from '@/components/TheHireUs.vue';
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
    <TheCustomerReview />
    <TheTopDevices />
    <TheWifiMesh />
    <TheTv />
    <TheFibraMaxBanner />
    <TheFAQs />
    <TheAlreadyCustomer />
  </main>

  <TheHireUs />
  <TheFooter />

</template>

<style scoped>

</style>
