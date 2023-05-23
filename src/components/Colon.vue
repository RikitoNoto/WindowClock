<script setup lang="ts">
import Dot from './Dot.vue';

const props = defineProps({
  height: {
    type: Number,
    default: 350,
  },
});

const offset: number = props.height * 75 / 350;
const center: number = props.height / 2;
</script>

<template>
  <div class="colon">
    <Dot class="colon__dot__top"></Dot>
    <Dot class="colon__dot__bottom"></Dot>
  </div>
</template>

<style scoped lang="scss">
  .colon {
    --offset: v-bind(offset);
    --center: v-bind(center);
    position: relative;
    &__dot__top {
      position: absolute;
      top: calc(1px * calc(var(--center) - var(--offset)));
    }

    &__dot__bottom {
      position: absolute;
      top: calc(1px * calc(var(--center) + var(--offset)));
    }
  }
</style>
