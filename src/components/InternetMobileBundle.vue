<script setup>
import BaseButton from "@/components/base/BaseButton.vue";
import BaseLabel from "@/components/base/BaseLabel.vue";
import BasePanel from "@/components/base/BasePanel.vue";
import BasePrice from "@/components/base/BasePrice.vue";
import IconInternet from "@/components/icons/IconInternet.vue";
import IconLandline from "@/components/icons/IconLandline.vue";
import IconMobile5g from "@/components/icons/IconMobile5g.vue";

defineProps({
    bundle: Object
});

const icons = {
    IconInternet,
    IconLandline,
    IconMobile5g
}

const onClick = (title) => console.log(`Bundle: ${title}`);

</script>

<template>
    <BasePanel
        class="bundle"
    >
        <BaseLabel :text="bundle.label" class="bundle__label" />

        <div class="bundle__container">
            <p class="bundle__container__title">{{ bundle.name }}</p>

            <p
                v-for="detail in bundle.details"
                :class="{ 'bundle__container__inline': detail.label }"
            >

                <div class="bundle__container__icon">
                    <component :is="icons[detail.icon]"></component>
                </div>


                <span v-html="detail.text"></span>
                <BaseLabel v-if="detail.label" :text="detail.label" color="tertiary" bold />
            </p>
        </div>

        <template #footer class="bundle__footer">
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
.bundle {
    width: 280px;
    min-width: 280px;

    &__label {
        margin-bottom: 1rem;
    }

    &__container {
        display: flex;
        flex-direction: column;
        text-align: start;
        gap: 16px;

        &__title {
            font-size: 1.4rem;
            line-height: 1.6rem;
            font-weight: 700;
        }

        &__inline {
            display: flex;

            span {
                margin-right: .5rem;
            }
        }

        &__icon {
            align-items: center;
            display: flex;
            height: 24px;
            width: 24px;
            justify-content: center;
            margin-right: 1rem;
        }

        p {
            display: flex;
            align-items: center;
        }
    }

    .panel-footer {
        padding-top: 0;
    }
}
</style>
