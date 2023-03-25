<script setup>
import { ref } from 'vue';
import IconArrowDown from '@/components/icons/IconArrowDown.vue';

const props = defineProps({
  question: {
    type: String,
    require: true
  },
  answer: {
    type: String,
    require: true
  }
});

let open = ref(false);
</script>

<template>
  <div class="faq">
      <div class="faq__question-wrapper" @click="open = !open">
        <div
          :class="{
            'faq__question': true,
            'faq__question--bold': open,
          }"
        >{{ question }}</div>
        <IconArrowDown
          :class="{
            'faq__arrow': true,
            'rotate-180': open,
          }"
        />
      </div>
      <div class="faq__answer" v-show="open" v-html="answer"></div>
  </div>
</template>

<style lang="scss">
.faq {
  background-color: var(--color-light);
  padding: 1rem;
  margin: 1rem 0;
  text-align: start;
}

.faq__arrow {
  height: 24px;
  width: 24px;
  color: var(--color-primary);
}

.faq__question-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
}

.faq__question {
  max-width: 264px;
  font-size: 1rem;

  @include for-tablet() {
    font-size: 1.05rem;
    max-width: 95%;
  }
}

.faq__question--bold {
  font-weight: 700;
}

.faq__answer {
  margin-top: 1rem;
  line-height: 1.8rem;
  font-size: 1rem;
  color: var(--color-text-light);
  animation: vertical-in .5s ease-in-out;
}
</style>
