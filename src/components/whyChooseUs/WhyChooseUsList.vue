<script setup>
import WhyChooseUsCard from './WhyChooseUsCard.vue';

const props = defineProps({
  template: {
    type: String,
    require: true
  },
  slides: {
    type: Array,
    require: true
  }
});
</script>

<template>
  <div class="why-choose-us-cards">
    <WhyChooseUsCard
      v-for="slide in slides"
      :card="slide"
    />
  </div>
</template>

<style lang="scss">
.why-choose-us-cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin: 2rem 0;
}
</style>
