<script setup>
import mobilePlans from "@/data/MobilePlans.json";
import MobilePlan from "./MobilePlan.vue";
</script>

<template>
    <div class="mobile-plans">
        <MobilePlan
            v-for="plan in mobilePlans"
            :key="plan.name"
            :plan="plan"
        />
    </div>
</template>

<style lang="scss">
.mobile-plans {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    margin: 1rem;
}
</style>
