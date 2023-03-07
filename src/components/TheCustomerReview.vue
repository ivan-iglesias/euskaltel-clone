<script setup>
import CustomerReviewList from '@/components/CustomerReviewList.vue';
import slides from '@/data/CustomerReviews.json';
</script>

<template>
  <section class="customer-review-section">
    <div class="wrapper">
      <h2>Opiniones de clientes de Euskaltel</h2>

      <CustomerReviewList :slides="slides" />
    </div>
  </section>
</template>

<style scoped>
.customer-review-section {
  text-align: center;
  padding: 3rem 0;
}
</style>
