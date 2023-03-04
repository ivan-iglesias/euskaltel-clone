<script setup>
import IconCoverage5g from '../icons/WhyChooseUs/IconCoverage5g.vue';
import IconFibramax from '../icons/WhyChooseUs/IconFibramax.vue';
import IconWifi from '../icons/WhyChooseUs/IconWifi.vue';
import IconWorld from '../icons/WhyChooseUs/IconWorld.vue';

defineProps({
  card: Object
});

const icons = {
  IconCoverage5g,
  IconFibramax,
  IconWifi,
  IconWorld
}
</script>

<template>
  <div class="why-choose-us-card">
    <div class="why-choose-us-card__image">
      <component :is="icons[card.image]"></component>
    </div>
    <div class="why-choose-us-card__content">
      <p class="why-choose-us-card__title">{{ card.title }}</p>
      <hr class="why-choose-us-card__separator">
      <p class="mb-2">{{ card.text }}</p>
      <a v-if="card.link" :href="card.link" class="link">más info</a>
    </div>
  </div>
</template>

<style lang="scss">
.why-choose-us-card {
  box-shadow: 4px 4px 20px var(--color-grey-400);
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  min-height: 320px;

  @include for-tablet() {
    flex-direction: row;
    max-width: 428px;
    min-height: unset;
  }

  @include for-laptop() {
    max-width: 528px;
  }

  &__title {
    font-size: 1.3rem;
    font-weight: 700;
  }

  &__separator {
    background-color: var(--color-primary);
    border: none;
    height: 4px;
    margin: 8px 0;
    width: 32px;
  }

  &__image {
    display: flex;
    padding: 16px 0 0 16px;

    @include for-tablet() {
      height: 128px;
      min-width: 128px;
      align-items: center;
      justify-content: center;
      margin-right: 24px;
    }

    @include for-laptop() {
      height: 192px;
      min-width: 192px;
    }

    svg {
      height: 100%;
      width: 56px;

      @include for-tablet() {
        height: 96px;
        width: 96px;
      }

      @include for-laptop() {
        height: 110px;
        width: 110px;
      }
    }
  }

  &__content {
    padding: 16px;
    text-align: left;

    @include for-tablet() {
      padding-left: 0;
    }
  }
}
</style>
