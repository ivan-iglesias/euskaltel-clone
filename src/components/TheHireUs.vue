<script setup>
import BaseButton from '@/components/base/BaseButton.vue';
import IconLandline from '@/components/icons/IconLandline.vue';

const onCmnClick = () => console.log('CMN Click');
</script>

<template>
  <section class="hire-us-section">
    <div class="hire-us-section__content wrapper">
      <p class="hire-us-section__title">¿Quieres contratar Euskaltel?</p>
      <div class="hire-us-section__contact">
        <p>Llámanos gratis, lunes a domingo de 9-22h</p>
        <BaseButton
          type="white"
          @on-click-button="onCmnClick()"
        ><IconLandline class="mr-2" />900 825 606</BaseButton>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.hire-us-section {
  background-color: var(--color-primary);
  color: var(--color-light);
  padding: 3rem 0;
  text-align: center;
}

.hire-us-section__content {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @include for-tablet() {
    flex-direction: row;
  }
}

.hire-us-section__title {
  font-size: 1.3rem;
  font-weight: 700;

  @include for-tablet() {
    font-size: 1.8rem;
  }
}

.hire-us-section__contact {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @include for-tablet() {
    flex-direction: row;
  }

  p {
    font-size: 1rem;
    font-weight: 700;

    @include for-tablet() {
      font-size: 1.1rem;
    }
  }

  a {
    min-width: 150px;
  }
}
</style>
