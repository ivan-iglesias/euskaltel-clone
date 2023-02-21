<script setup>
defineProps({
    price: Number,
    offer: String,
    offerDetail: String,
    currency: {
        type: String,
        default: '€'
    },
    frequency: {
        type: String,
        default: ' /mes'
    }
});
</script>

<template>
    <div class="price">
        <div class="price-wrapper">
            <div class="price__number">{{ price }}</div>
            <div class="price__info">
                <div v-if="offer" class="price__offer">{{ offer }}</div>
                <div class="price__info_2">
                    <span class="price__currency">{{ currency }}</span>
                    <span class="price__frequency">{{ frequency }}</span>
                </div>
            </div>
        </div>

        <div class="price__offer-detail">{{ offerDetail }}</div>
    </div>
</template>

<style lang="scss">
.price {
    font-size: 2.5rem;
    margin: 8px 0;

    @include for-desktop() {
        font-size: 3rem;
    }

    &__number {
        font-size: 1.2em;
        font-weight: 700;
        line-height: 1em;
    }

    &__info {
        margin-top: auto;
    }

    &__info_2 {
        line-height: 1em;
    }

    &__currency {
        font-size: .6em;
        font-weight: 700;

        line-height: 1em;
    }

    &__frequency {
        color: var(--color-text-light);
        font-size: .3em;
        font-weight: 300;
        line-height: 1em;
    }

    &__offer {
        font-size: .25em;
        height: 0;
        line-height: 1em;
    }

    &__offer-detail {
        font-size: .27em;
        color: var(--color-text-light);
        font-weight: 300;
        text-align: center;
        height: 1.5em;
    }

    .price-wrapper {
        display: flex;
        gap: 4px;
        text-align: left;

        justify-content: center;

        &--justify-start {
            justify-content: start;
        }
    }
}
</style>
