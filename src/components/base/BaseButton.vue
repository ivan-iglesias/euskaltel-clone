<script setup>
defineProps({
    href: {
        type: String,
        default: '#'
    },
    type: {
        type: String,
        default: 'primary',
        validator: val => ['primary', 'secondary'].includes(val)
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
        }"
    ><slot></slot></a>
</template>

<style lang="scss">
.btn {
    border-radius: var(--border-radius);
    color: white;
    display: block;
    padding: 12px 8px;
    text-align: center;
    text-decoration: none;
    transition: all .1s ease-in-out;

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
}
</style>
