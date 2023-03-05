<script setup>
import internetMobileBundles from '@/data/InternetMobileBundles.json';
import InternetMobileBundle from '@/components/InternetMobileBundle.vue';
</script>

<template>
  <section class="internet-mobile-bundle-section">
    <div class="wrapper">
      <h2>Tarifas de fibra y móvil con 5G</h2>
      <p class="description">Descubre las mejores ofertas de Euskaltel de fibra y móvil</p>

      <div class="internet-mobile-bundle-section__bundles">
        <InternetMobileBundle
          v-for="bundle in internetMobileBundles"
          :key="bundle.name"
          :bundle="bundle"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.internet-mobile-bundle-section {
  text-align: center;
  padding: 3rem 0;

  &__bundles {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    margin: 2rem 0;
  }
}
</style>
