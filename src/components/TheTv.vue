<script setup>
import TvDeviceInfo from '@/components/TvDeviceInfo.vue';
</script>

<template>
  <section class="tv-section">
    <div class="wrapper">
      <h2>Otra forma de ver la tele </h2>

      <div class="tv-section__row">
        <div class="tv-section__column">
          <TvDeviceInfo />
        </div>
        <div class="tv-section__column">
          <h4>Nuestros favoritos</h4>
          <div style="background-color: #ccc;width: 100%;">SLIDER</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.tv-section {
  text-align: center;
  padding: 3rem 0;
  background-color: var(--color-grey-200);;
}

.tv-section__row {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @include for-desktop() {
    flex-direction: row;
  }
}

.tv-section__column {
  width: 100%;

  @include for-desktop() {
    width: 50%;
  }
}
</style>
