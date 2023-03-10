<script setup>
import TopDevicesList from '@/components/TopDevicesList.vue';
import slides from '@/data/TopDevices.json';
</script>

<template>
  <section class="top-devices-section">
    <div class="wrapper">
      <h2>Lo +TOP en Smartphones y gadgets</h2>

      <TopDevicesList :slides="slides" />
    </div>
  </section>
</template>

<style scoped>
.top-devices-section {
  text-align: center;
  padding: 3rem 0;
}
</style>
