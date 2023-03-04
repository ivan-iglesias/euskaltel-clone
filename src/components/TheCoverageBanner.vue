<script setup>
import BaseButton from "@/components/base/BaseButton.vue";
import IconPin from '@/components/icons/IconPin.vue';

const onClick = () => console.log(`Coverage feature`);

</script>

<template>
  <div class="wrapper">
    <section class="banner-coverage">
      <div class="banner-coverage__container">
        <IconPin class="banner-coverage__icon" />
        <div><strong>¿Puedes tener Euskaltel en tu casa?</strong></div>
        <BaseButton
          @on-click-button="onClick()"
          class="banner-coverage__button"
        >Compruébalo</BaseButton>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.banner-coverage {
  background-color: var(--color-primary-light);
  border-radius: var(--border-radius);
  margin: 2rem 0;
  padding: 1.3rem;

  &::before {
    background-image: url('/images/coverage.svg');
    background-repeat: no-repeat;
    background-size: auto 100%;
    content: "";
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 64%;
    -webkit-mask-image: linear-gradient(270deg, transparent 25%, #000 75%);
    mask-image: linear-gradient(270deg, transparent 25%, #000 75%);

    @include for-tablet() {
      width: 32%;
    }
  }

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
