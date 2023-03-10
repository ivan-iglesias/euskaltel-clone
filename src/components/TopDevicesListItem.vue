<script setup>
import IconDeviceScreen from '@/components/icons/IconDeviceScreen.vue';
import IconDeviceCamera from '@/components/icons/IconDeviceCamera.vue';
import IconDeviceMemory from '@/components/icons/IconDeviceMemory.vue';
import BaseButton from '@/components/base/BaseButton.vue';

defineProps({
  item: Object
});

const onClick = (name) => console.log(`Device: ${name}`);
</script>

<template>
  <div class="top-devices-list-item">

    <div class="top-devices-list-item__left">
      <img
        class="top-devices-list-item__image"
        :src="'./images/devices/' + item.image"
        :alt="item.name"
      >
    </div>

    <div class="top-devices-list-item__right">
      <div class="top-devices-list-item__info">
        <div class="top-devices-list-item__brand">{{ item.brand }}</div>
        <div class="top-devices-list-item__name">{{ item.name }}</div>
        <ul class="top-devices-list-item__specs">
          <li>
            <IconDeviceScreen />
            <span>{{ item.specs.screen }}</span>
          </li>
          <li>
            <IconDeviceCamera />
            <span>{{ item.specs.camera }}</span>
          </li>
          <li>
            <IconDeviceMemory />
            <span>{{ item.specs.memory }}</span>
          </li>
        </ul>
        <div class="top-devices-list-item__detail">{{ item.price.detail }}</div>
        <div class="top-devices-list-item__price">{{ item.price.value }}<span class="top-devices-list-item__euro">€</span></div>
      </div>
      <BaseButton
          @on-click-button="onClick(item.name)"
          class="btn--tertiary"
      >Me interesa</BaseButton>
    </div>

  </div>
</template>

<style lang="scss">
.top-devices-list-item {
  border-radius: var(--border-radius);
  background-color: var(--color-tertiary);
  display: flex;
  margin: .5rem;
  padding: 1rem;
  gap: 2rem;
  max-width: 600px;

  @include for-tablet() {
    height: 325px;
  }

  &__left {
    display: flex;
    align-items: center;
  }

  &__image {
    height: auto;
    width: 100%;
    max-height: 100%;
    filter: drop-shadow(0 8px 8px rgba(0,41,74,.6));
  }

  &__right {
    color: white;
  }

  &__info {
    display: flex;
    flex-direction: column;
    font-size: .8rem;
    gap: 2px;
    margin-bottom: 1rem;
    text-align: left;

    @include for-tablet() {
      font-size: 1rem;
      gap: 8px;
    }
  }

  &__brand {
    opacity: .5;
  }

  &__name {
    font-weight: 700;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    font-family: var(--font-family-primary);
  }

  &__specs {
    display: flex;
    font-size: .7rem;
    justify-content: space-between;

    li {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 1.5rem;
    }
  }

  &__detail {
    opacity: .5;
  }

  &__price {
    font-weight: 700;
    font-size: 1.5rem;
    font-family: var(--font-family-primary);
  }

  &__euro {
    font-weight: 600;
    font-size: 1.2rem;
    font-family: var(--font-family-primary);
  }
}
</style>
