<script setup>
import mobilePlans from "@/data/MobilePlans.json";
import MobilePlan from "./MobilePlan.vue";
</script>

<template>
  <section class="mobile-plan">
    <div class="wrapper">
      <h2>Tarifas móviles con 5G</h2>
      <p class="description">Tarifas de móvil con llamadas ilimitadas y máxima velocidad </p>

      <div class="mobile-plan__cards">
        <MobilePlan
          v-for="plan in mobilePlans"
          :key="plan.name"
          :plan="plan"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.mobile-plan {
  text-align: center;
  padding: 3rem 0;
  background-color: var(--color-grey-200);

  &__cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    margin: 2rem 0;
  }
}
</style>
