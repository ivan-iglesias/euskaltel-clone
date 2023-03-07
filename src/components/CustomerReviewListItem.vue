<script setup>
import IconAvatarMen from '@/components/icons/IconAvatarMen.vue';
import IconAvatarWomen from '@/components/icons/IconAvatarWomen.vue';
import RatingStars from '@/components/RatingStars.vue';

defineProps({
  item: Object
});

const avatars = {
  male: IconAvatarMen,
  female: IconAvatarWomen
};
</script>

<template>
  <div class="customer-review-list-item">
    <div class="customer-review-list-item__header">
      <div class="customer-review-list-item__avatar">
        <component :is="avatars[item.gender]"></component>
      </div>
      {{ item.name }}
    </div>
    <div class="customer-review-list-item__rating">
      <RatingStars :rating="item.rating" />
    </div>
    <div class="customer-review-list-item__content">
      <p>{{ item.text }}</p>
    </div>
  </div>
</template>

<style lang="scss">
.star {
  height: 24px;
  width: 24px;
}

.customer-review-list-item {
  box-shadow: 4px 4px 2px var(--color-grey-400);
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  min-height: 228px;
  margin: .5rem;
  max-width: 280px;

  padding: 16px;
  text-align: start;

  &__header {
    font-size: 1.3rem;
    font-weight: 700;
    display: flex;
    align-items: center;
  }

  &__rating {
    margin: .8rem 0;
  }

  &__avatar {
    height: 48px;
    width: 48px;
    margin-right: 16px;

    svg {
      height: 48px;
      width: 48px;
    }
  }
}
</style>
