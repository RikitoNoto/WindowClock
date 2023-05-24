<script setup lang="ts">
import Dot from './Dot.vue';

const props = defineProps({
  height: {
    type: Number,
    default: 350,
  },
  turn_on_colon: {
    type: Boolean,
    default: true,
  }
});

const offset: number = props.height * 75 / 350;
const center: number = props.height / 2;
const radius: number = props.height * 50 / 350
</script>

<template>
  <div class="colon">
    <Dot class="colon__dot__top" :radius=radius v-if="props.turn_on_colon"></Dot>
    <Dot class="colon__dot__bottom" :radius=radius v-if="props.turn_on_colon"></Dot>
  </div>
</template>

<style scoped lang="scss">
  .colon {
    --offset: v-bind(offset);
    --center: v-bind(center);
    --height: v-bind(height);
    --radius: v-bind(radius);

    position: relative;
    height: calc(1px * var(--height));
    width: calc(1px * var(--radius));
    padding: 0% calc(1px * var(--radius));
    &__dot__top {
      position: absolute;
      top: calc(1px * calc(var(--center) - var(--offset) - calc(var(--radius) / 2)));
    }

    &__dot__bottom {
      position: absolute;
      top: calc(1px * calc(var(--center) + var(--offset) - calc(var(--radius) / 2)));
    }
  }
</style>
