<script setup>
import internetMobileBundles from "@/data/InternetMobileBundles.json";
import InternetMobileBundle from "./InternetMobileBundle.vue";
</script>

<template>
    <div class="internet-mobile-bundles">
        <InternetMobileBundle
            v-for="bundle in internetMobileBundles"
            :key="bundle.name"
            :bundle="bundle"
        />
    </div>
</template>

<style lang="scss">
.internet-mobile-bundles {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    margin: 1rem 0;
}
</style>
