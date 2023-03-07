<script setup>
import { computed } from 'vue'
import IconStar from '@/components/icons/IconStar.vue';
import IconStarHalf from '@/components/icons/IconStarHalf.vue';
import IconStarEmpty from '@/components/icons/IconStarEmpty.vue';

const props = defineProps({
  rating: Number
});

const fullStar = computed(() => Math.floor(props.rating));
const halfStar = computed(() => Number.isInteger(props.rating) ? 0 : 1);
const emptyStar = computed(() => 5 - Math.ceil(props.rating));
</script>

<template>
  <div class="rating-starts">
    <IconStar v-for="index in fullStar" class="rating-starts__star" />
    <IconStarHalf v-for="index in halfStar" class="rating-starts__star" />
    <IconStarEmpty v-for="index in emptyStar" class="rating-starts__star" />
  </div>
</template>

<style scoped>
.rating-starts {
  display: flex;
}

.rating-starts__star {
  height: 21px;
  width: 21px;
  fill: var(--color-primary);
}
</style>
