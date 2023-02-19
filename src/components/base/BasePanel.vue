<script setup>
defineProps({
    hightlight: {
        type: Boolean,
        default: false
    },
});
</script>

<template>
    <div :class="{
        'panel': true,
        'hightlight': hightlight
    }">
        <div v-if="$slots.header" class="panel-header">
            <slot name="header" />
        </div>

        <div class="panel-container">
            <slot />
        </div>

        <div v-if="$slots.footer" class="panel-footer">
            <div class="panel-footer__delimiter"></div>
            <slot name="footer" />
        </div>
    </div>
</template>

<style lang="scss">
.panel {
    border: 1px solid var(--color-grey-400);
    border-radius: var(--border-radius);
    display: flex;
    flex-direction: column;
}

.hightlight {
    border: 1px solid var(--color-secondary);
}

.panel-header {
    align-items: center;
    background-color: #cce8ff;
    color: #008dff;
    display: flex;
    justify-content: center;
    padding: 8px;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
}

.hightlight .panel-header {
    background-color: #cff9f2;
    color: var(--color-secondary);
}

.panel-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px 16px;
    text-align: center;

    @include for-desktop() {
        padding: 24px;
    }
}

.panel-footer {
    padding: 24px 16px;
    margin-top: auto;

    @include for-desktop() {
        padding: 24px;
    }

    &__delimiter {
        border-top: 1px solid var(--color-grey-200);
    }
}

</style>
