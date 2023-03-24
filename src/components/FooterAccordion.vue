<script setup>
import { ref } from 'vue';
import { useBreakpoints } from '@/composables/useBreakpoints';
import IconArrowDown from '@/components/icons/IconArrowDown.vue';

let { isGreaterThan, breakpoints } = useBreakpoints();

const props = defineProps({
  title: {
    type: String,
    require: true
  },
  links: {
    type: Array,
    require: true
  }
});

let showLinks = ref(isGreaterThan(breakpoints.laptop) ? true : false);

function onClickTitle() {
  if (isGreaterThan(breakpoints.laptop)) { return; }

  showLinks.value = !showLinks.value;
}
</script>

<template>
  <div class="footer-accordion">

    <div class="footer-accordion__title" @click="onClickTitle">
      <div class="footer-accordion__title-text">{{ title }}</div>
      <IconArrowDown :class="showLinks ? 'rotate-180' : ''" class="show-mobile" />
    </div>

    <ul class="footer-accordion__links" v-show="showLinks">
      <li v-for="link in links" class="footer-accordion__link">
        <a
          class="link link--light"
          href="{{ link.link }}"
          v-html="link.name"
        ></a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.footer-accordion {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--color-grey-600);

  @include for-laptop() {
    border-bottom: unset;
  }
}

.footer-accordion__title {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin: 1.2rem 0;

  @include for-laptop() {
    cursor: unset;
    margin-top: 0;
  }

  &:active,
  &:focus,
  &:hover:not([disabled]) {
    background-color: transparent;
  }

  svg {
    color: var(--color-primary);
  }

  .rotate-180 {
    transform: rotate(180deg);
  }
}

.footer-accordion__title-text {
  font-weight: 700;
  color: var(--color-light);

  @include for-laptop() {
    color: var(--color-primary);
  }
}

.footer-accordion__links {
  list-style: none;
  font-size: .87rem;
  margin-bottom: 1.2rem;

  @include for-laptop() {
    margin-bottom: 0;
  }
}

.footer-accordion__link {
  margin-bottom: .8rem;

  a {
    color: var(--color-grey-400);
  }
}
</style>
