<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheMobilePlans from '@/components/TheMobilePlans.vue';
import TheInternetMobileBundles from '@/components/TheInternetMobileBundles.vue';
</script>

<template>

  <TheHeader />

  <main class="main">
    <TheMobilePlans />
    <TheInternetMobileBundles />
  </main>
</template>

<style scoped>
.main {
  padding-top: 96px;
}
</style>
