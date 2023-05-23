<script setup lang="ts">

const props = defineProps({
  radius: {
    type: Number,
    default: 50,
  },
});

</script>

<template>
  <div class="dot">
  </div>
</template>

<style scoped lang="scss">
  .dot {
    background-color: red;
    --radius: v-bind(props.radius);
    --radius_px: calc(1px * var(--radius));
    height: var(--radius_px);
    width: var(--radius_px);
    border-radius: calc(var(--radius_px) / 2);
  }
</style>
