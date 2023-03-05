<script setup>
import WhyChooseUsList from '@/components/WhyChooseUsList.vue';
import slides from '@/data/WhyChooseUs.json';
</script>

<template>
  <section class="why-choose-us-section">
    <div class="wrapper">
      <h2>¿Por qué elegir Euskaltel?</h2>

      <WhyChooseUsList :slides="slides" />
    </div>
  </section>
</template>

<style lang="scss">
.why-choose-us-section {
  text-align: center;
  padding: 3rem 0;
}
</style>
