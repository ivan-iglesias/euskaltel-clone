<script setup>
defineProps({
  href: {
    type: String,
    default: '#'
  },
  type: {
    type: String,
    default: 'primary',
    validator: val => ['primary', 'secondary', 'tertiary', 'white'].includes(val)
  }
});

const emit = defineEmits(['onClickButton']);

function buttonClick(e) {
  if (e.target.getAttribute('href') === '#') {
    e.preventDefault();
  }

  emit('onClickButton');
}
</script>

<template>
  <a
    :href="href"
    @click="buttonClick"
    :class="{
      'btn': true,
      'btn--primary': type == 'primary',
      'btn--secondary': type == 'secondary',
      'btn--tertiary': type == 'tertiary',
      'btn--white': type == 'white',
    }"
  ><slot></slot></a>
</template>

<style lang="scss">
.btn {
  border-radius: var(--border-radius);
  color: white;
  font-weight: 700;
  padding: 8px 12px;
  text-decoration: none;
  transition: all .1s ease-in-out;
  display: flex;
  flex-direction: row;
  justify-content: center;

  &--primary {
    background-color: var(--color-primary);

    &:hover {
      background-color: var(--color-primary-dark);
    }
  }

  &--secondary {
    background-color: var(--color-secondary);

    &:hover {
      background-color: var(--color-secondary-dark);
    }
  }

  &--tertiary {
    background-color: white;
    color: var(--color-tertiary);

    &:hover {
      background-color: white;
      color: var(--color-tertiary-dark);
    }
  }

  &--white {
    background-color: white;
    color: var(--color-primary);

    &:hover {
      color: var(--color-primary-dark);
    }
  }
}
</style>
