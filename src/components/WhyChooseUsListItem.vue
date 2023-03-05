<script setup>
import IconCoverage5g from '@/components/icons/WhyChooseUs/IconCoverage5g.vue';
import IconFibramax from '@/components/icons/WhyChooseUs/IconFibramax.vue';
import IconWifi from '@/components/icons/WhyChooseUs/IconWifi.vue';
import IconWorld from '@/components/icons/WhyChooseUs/IconWorld.vue';

defineProps({
  item: Object
});

const icons = {
  IconCoverage5g,
  IconFibramax,
  IconWifi,
  IconWorld
}
</script>

<template>
  <div class="why-choose-us-list-item">
    <div class="why-choose-us-list-item__image">
      <component :is="icons[item.image]"></component>
    </div>
    <div class="why-choose-us-list-item__content">
      <p class="why-choose-us-list-item__title">{{ item.title }}</p>
      <hr class="why-choose-us-list-item__separator">
      <p class="mb-2">{{ item.text }}</p>
      <a v-if="item.link" :href="item.link" class="link">más info</a>
    </div>
  </div>
</template>

<style lang="scss">
.why-choose-us-list-item {
  box-shadow: 4px 4px 20px var(--color-grey-400);
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  min-height: 320px;
  margin: .5rem;

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
