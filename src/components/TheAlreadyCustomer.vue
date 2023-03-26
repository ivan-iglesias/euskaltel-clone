<script setup>
import BaseButton from '@/components/base/BaseButton.vue';
import IconUser from '@/components/icons/Artwork/IconUser.vue';

const onClick = () => console.log(`I am already a customer`);
</script>

<template>
  <div class="wrapper">
    <section class="banner-already-customer">
      <div class="banner-already-customer__container">
        <IconUser class="banner-already-customer__icon" />
        <div><strong>¡Yo ya soy de Euskaltel!</strong></div>
        <BaseButton
          @on-click-button="onClick()"
          class="banner-already-customer__button"
        >Ver Ofertas</BaseButton>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.banner-already-customer {
  background-color: var(--color-tertiary-light);
  border-radius: var(--border-radius);
  margin: 2rem 0;
  padding: 1.3rem;

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @include for-tablet() {
      flex-direction: row;
      gap: 2rem;
    }
  }

  &__icon {
    height: 64px;
    width: 64px;
  }

  &__button {
    width: 150px;
  }
}
</style>
