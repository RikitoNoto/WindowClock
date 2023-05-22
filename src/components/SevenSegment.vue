<script setup lang="ts">

const props = defineProps({
  number: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    default: 350,
  },
  width: {
    type: Number,
    default: 200,
  }
});

const number_lighting: Map<number, {top: boolean,  top_left: boolean,  top_right: boolean,  middle: boolean,  bottom_left: boolean,   bottom_right: boolean, bottom: boolean}> = new Map([
  [1, { top: false,  top_left: false,  top_right: true,  middle: false,  bottom_left: false,   bottom_right: true, bottom: false}],
  [2, { top: true,   top_left: false,  top_right: true,  middle: true,  bottom_left: true,   bottom_right: false, bottom: true}],
  [3, { top: true,  top_left: false,  top_right: true,  middle: true,  bottom_left: false,   bottom_right: true, bottom: true}],
  [4, { top: false,  top_left: true,  top_right: true,  middle: true,  bottom_left: false,   bottom_right: true, bottom: false}],
  [5, { top: true,  top_left: true,  top_right: false,  middle: true,  bottom_left: false,   bottom_right: true, bottom: true}],
  [6, { top: true,  top_left: true,  top_right: false,  middle: true,  bottom_left: true,   bottom_right: true, bottom: true}],
  [7, { top: true,  top_left: false,  top_right: true,  middle: false,  bottom_left: false,   bottom_right: true, bottom: false}],
  [8, { top: true,  top_left: true,  top_right: true,  middle: true,  bottom_left: true,   bottom_right: true, bottom: true}],
  [9, { top: true,  top_left: true,  top_right: true,  middle: true,  bottom_left: false,   bottom_right: true, bottom: true}],
  [0, { top: true,  top_left: true,  top_right: true,  middle: false,  bottom_left: true,   bottom_right: true, bottom: true}],
]);
</script>

<template>
  <div class="seven-segment">
    <div class="seven-segment__bar seven-segment__bar__top seven-segment__bar__horizontal" :class="{'seven-segment__bar__active': number_lighting.get(props.number)?.top}"></div>
    <div class="seven-segment__bar seven-segment__bar__top-left seven-segment__bar__vertical" :class="{'seven-segment__bar__active': number_lighting.get(props.number)?.top_left}"></div>
    <div class="seven-segment__bar seven-segment__bar__top-right seven-segment__bar__vertical" :class="{'seven-segment__bar__active': number_lighting.get(props.number)?.top_right}"></div>
    <div class="seven-segment__bar seven-segment__bar__middle seven-segment__bar__horizontal" :class="{'seven-segment__bar__active': number_lighting.get(props.number)?.middle}"></div>
    <div class="seven-segment__bar seven-segment__bar__bottom-left seven-segment__bar__vertical" :class="{'seven-segment__bar__active': number_lighting.get(props.number)?.bottom_left}"></div>
    <div class="seven-segment__bar seven-segment__bar__bottom-right seven-segment__bar__vertical" :class="{'seven-segment__bar__active': number_lighting.get(props.number)?.bottom_right}"></div>
    <div class="seven-segment__bar seven-segment__bar__bottom seven-segment__bar__horizontal" :class="{'seven-segment__bar__active': number_lighting.get(props.number)?.bottom}"></div>
  </div>
</template>

<style scoped lang="scss">
$color: red;

.seven-segment {
  --color: #{$color};
  position: relative;

  /* --height: 350; */
  --height: v-bind(props.height);
  --width: v-bind(props.width);
  --bar_size_l: calc(var(--height) / 3.5); /* bar size long */
  --bar_size_s: calc(var(--width) / 4);    /* bar size short */
  --bar_size_l_px: calc(1px * var(--bar_size_l));
  --bar_size_s_px: calc(1px * var(--bar_size_s));

  --bar_border_size: calc(var(--bar_size_s) / 2);
  --bar_border_size_px: calc(1px * var(--bar_border_size));

  height: calc(1px * var(--height));
  width: calc(1px * var(--width));
  &__bar {
    display: inline-block;
    position: absolute;

    &__active {
      background-color: var(--color);
    }

    &__vertical {
      height: var(--bar_size_l_px);
      width: var(--bar_size_s_px);
      &:before,
      &:after {
        position: absolute;
        left: 0;
        width: 0;
        height: 0;
        content: '';
        border: var(--bar_border_size_px) solid transparent;
        border-top: var(--bar_border_size_px) solid transparent;
        border-bottom: var(--bar_border_size_px) solid transparent;
      }

      &.seven-segment__bar__active:before {
        top: 100%;
        border-top-color: var(--color);
      }
      &.seven-segment__bar__active:after {
        bottom: 100%;
        border-bottom-color: var(--color);
      }
    }

    &__horizontal {
      height: var(--bar_size_s_px);
      width: calc(var(--bar_size_l_px) - 2px);
      &:before,
      &:after {
        position: absolute;
        top: 0;
        width: 0;
        height: 0;
        content: '';
        border: var(--bar_border_size_px) solid transparent;
        border-right: var(--bar_border_size_px) solid transparent;
        border-left: var(--bar_border_size_px) solid transparent;
      }
      &.seven-segment__bar__active:before {
        left: 100%;
        border-left-color: var(--color);
      }
      &.seven-segment__bar__active:after {
        right: 100%;
        border-right-color: var(--color);
      }
    }

    &__top {
      top: 0px;
      left: calc(var(--bar_size_s_px) + 1px);
    }

    &__top-left {
      top: var(--bar_size_s_px);
      left: 0px;
    }

    &__top-right {
      top: var(--bar_size_s_px);
      left: calc(var(--bar_size_s_px) + var(--bar_size_l_px));
    }

    &__middle {
      top: calc(var(--bar_size_s_px) + var(--bar_size_l_px));
      left: calc(var(--bar_size_s_px) + 1px);
    }

    &__bottom-left {
      top: calc(var(--bar_size_s_px) + var(--bar_size_l_px) + var(--bar_size_s_px));
      left: 0px;
    }

    &__bottom-right {
      top: calc(var(--bar_size_s_px) + var(--bar_size_l_px) + var(--bar_size_s_px));
      left: calc(var(--bar_size_s_px) + var(--bar_size_l_px));
    }

    &__bottom {
      top: calc(var(--bar_size_s_px) + var(--bar_size_l_px) + var(--bar_size_s_px) + var(--bar_size_l_px));
      left: calc(var(--bar_size_s_px) + 1px);
    }
  }
}

</style>
