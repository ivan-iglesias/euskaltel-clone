<script setup>
import BaseButton from '@/components/base/BaseButton.vue';
import BaseLabel from '@/components/base/BaseLabel.vue';
import BasePanel from '@/components/base/BasePanel.vue';
import BasePrice from '@/components/base/BasePrice.vue';
import IconInternet from '@/components/icons/IconInternet.vue';
import IconLandline from '@/components/icons/IconLandline.vue';
import IconMobile5g from '@/components/icons/IconMobile5g.vue';
import IconTv from '@/components/icons/IconTv.vue';
import IconNetflix from '@/components/icons/IconNetflix.vue';

defineProps({
  bundle: Object
});

const icons = {
  IconInternet,
  IconLandline,
  IconMobile5g,
  IconTv,
  IconNetflix
}

const onClick = (title) => console.log(`Bundle: ${title}`);
</script>

<template>
  <BasePanel class="internet-mobile-bundle">
    <BaseLabel :text="bundle.label" class="internet-mobile-bundle__label" />

    <div class="internet-mobile-bundle__container">
      <p class="internet-mobile-bundle__container-title">{{ bundle.name }}</p>

      <p v-for="detail in bundle.details">
        <div class="internet-mobile-bundle__container-icon">
          <component :is="icons[detail.icon]"></component>
        </div>

        <span v-html="detail.text"></span>
        <BaseLabel v-if="detail.label" :text="detail.label" color="tertiary" bold />
      </p>
    </div>

    <template #footer class="internet-mobile-bundle__footer">
      <BasePrice
        :price="bundle.price.value"
        :offer="bundle.price.offer"
        :offer-detail="bundle.price.offerDetail"
      />

      <BaseButton
        @on-click-button="onClick(bundle.name)"
      >Me interesa</BaseButton>
    </template>
  </BasePanel>
</template>

<style lang="scss">
.internet-mobile-bundle {
  width: 100%;
  max-width: 280px;
  background: white;

  &__label {
    margin-bottom: 1rem;
  }

  &__container {
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 16px;

    p {
      display: flex;
      align-items: center;

      span {
        margin-right: .5rem;
      }
    }
  }

  &__container-title {
    font-size: 1.4rem;
    line-height: 1.6rem;
    font-weight: 700;
  }

  &__container-icon {
    align-items: center;
    display: flex;
    height: 24px;
    width: 24px;
    justify-content: center;
    margin-right: 1rem;
  }

  .panel-footer {
    padding-top: 0;
  }
}
</style>
