<script setup>
import BaseButton from '@/components/base/BaseButton.vue';
import BasePanel from '@/components/base/BasePanel.vue';
import BasePrice from '@/components/base/BasePrice.vue';
import IconMobile5g from '@/components/icons/IconMobile5g.vue';

defineProps({
  plan: Object
});

const onClick = (title) => console.log(`Mobile Plan: ${title}`);

</script>

<template>
  <BasePanel
    :hightlight="plan.hightlight"
    class="mobile-plan"
  >
    <template #header>
      <h3 class="mobile-plan__title"><IconMobile5g />{{ plan.name }}</h3>
    </template>

    <div class="mobile-plan__container">

      <div class="mobile-plan__container-wraper">
        <p class="mobile-plan__container-title">{{ plan.nameLong }}</p>

        <p v-for="detail in plan.details">
          <span v-html="detail"></span>
        </p>
      </div>

      <div class="mobile-plan__container-wraper mobile-plan__container-wraper--no-gap">
        <BasePrice
          :price="plan.price.value"
          :offer="plan.price.offer"
          :offer-detail="plan.price.offerDetail"
        />

        <BaseButton
          @on-click-button="onClick(plan.nameLong)"
        >Me interesa</BaseButton>
      </div>
    </div>
  </BasePanel>
</template>

<style lang="scss">
.mobile-plan {
  width: 100%;
  max-width: 360px;
  background: white;

  &__title {
    align-items: center;
    display: flex;
    gap: .5rem;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 31px;
  }

  &__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
    text-align: start;

    @include for-desktop() {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  }

  &__container-wraper {
    display: flex;
    flex-direction: column;
    gap: 12px;

    &--no-gap {
      gap: 0;
    }
  }

  &__container-title {
    font-size: 1.1rem;
    line-height: 1.6rem;
    font-weight: 700;
  }

  .price {
    margin-bottom: 16px;

    @include for-desktop() {
      margin: 16px 0;
    }
  }
}
</style>
