<script setup>
defineProps({
  text: {
    type: String,
    default: 'Label por defecto'
  },
  bold: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: 'primary',
    validator: val => ['primary', 'secondary', 'tertiary'].includes(val)
  },
});
</script>

<template>
  <div :class="{
    'label': true,
    'label--bold': bold,
    'label--secondary': color == 'secondary',
    'label--tertiary': color == 'tertiary'
  }">{{ text }}</div>
</template>

<style lang="scss">
.label {
  color: var(--color-primary);
  background-color: var(--color-primary-light);
  border-radius: 4px;
  font-size: .7rem;
  padding: 4px;
  line-height: 1.3;
  width: max-content;

  &--secondary {
    color: var(--color-secondary);
    background-color: var(--color-secondary-light);
  }

  &--tertiary {
    color: var(--color-tertiary);
    background-color: var(--color-tertiary-light);
  }

  &--bold {
    font-weight: 700;
  }
}
</style>
