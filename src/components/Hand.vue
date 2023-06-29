<script setup lang="ts">
const props = defineProps({
  height: {
    type: String,
    default: 0,
  },
  width: {
    type: String,
    default: 0,
  },
  weight: {
    type: String,
    default: 0,
  },
  rotate: {
    type: Number,
    default: 0,
  },
  color: {
    type: String,
    default: "black",
  }
});
</script>

<template>
  <div class="hand">
    <div class="hand__dest">
    </div>
  </div>
</template>

<style scoped lang="scss">
.hand {
  --hand_height: v-bind(props.height);
  --hand_width: v-bind(props.width);
  --hand_weight: v-bind(props.weight);
  --dest_rotate: v-bind(`${props.rotate}deg`);
  --hand_color: v-bind(props.color);

  width: var(--hand_width);
  height: var(--hand_height);

  &__dest {
    display: flex;
    justify-content: center;
    position: absolute;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    rotate: var(--dest_rotate);
    &::before{
      content: '';
      position: absolute;
      width: var(--hand_weight);
      height: 50%;
      background: var(--hand_color);
      border-radius: calc(var(--hand_weight) / 2);
    }
  }
}
</style>
