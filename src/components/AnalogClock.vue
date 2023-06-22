<script setup lang="ts">
import Hand from './Hand.vue';
import TimeUtil from '../helper/TimeUtil';
import { computed } from 'vue';

const props = defineProps({
  hour: {
    type: Number,
    default: 0,
  },
  minute: {
    type: Number,
    default: 0,
  },
  sec: {
    type: Number,
    default: 0,
  },
});

const emits = defineEmits(["update:hour", "update:minute", "update:sec"]);

const hour = computed({
  get() {
    return TimeUtil.hourToDeg(props.hour);
  },
  set(value) {
    emits("update:hour", value);
  }
});

const minute = computed({
  get() {
    return TimeUtil.minuteToDeg(props.minute);
  },
  set(value) {
    emits("update:minute", value);
  }
});

const sec = computed({
  get() {
    return TimeUtil.secToDeg(props.sec);
  },
  set(value) {
    emits("update:sec", value);
  }
});

</script>

<template>
  <div class="analog_clock">
    <img src="../assets/clock.png" class="analog_clock__compass"/>
    <div class="analog_clock__center_circle"></div>
    <Hand class="analog_clock__hand_hour" :height="500" :width="250" :weight="25" :rotate="hour" color="#3650FF"></Hand>
    <Hand class="analog_clock__hand_min" :height="700" :width="250" :weight="25" :rotate="minute" color="#A6FF69"></Hand>
    <Hand class="analog_clock__hand_sec" :height="700" :width="250" :weight="10" :rotate="sec" color="coral"></Hand>
  </div>
</template>

<style scoped lang="scss">
.analog_clock {
  &__compass {
    position:absolute;
    width: 100vh;
    height: 100vh;
    top: calc(50% - 100vh / 2);
    left: calc(50% - 100vh / 2);
    z-index: 0;
  }

  &__center_circle {
    --circle-radius: 35px;
    position:absolute;
    top: calc(50% - var(--circle-radius) / 2);
    left: calc(50% - var(--circle-radius) / 2 - 2px);
    height: var(--circle-radius);
    width: var(--circle-radius);
    border-radius: 50%;
    background-color: black;
    z-index: 20;
  }

  &__hand_hour {
    position:absolute;
    top: calc(50% - 500px / 2);
    left: calc(50% - 250px / 2 - 2px);
    z-index: 3;
  }

  &__hand_min {
    position:absolute;
    top: calc(50% - 700px / 2);
    left: calc(50% - 250px / 2 - 2px);
    z-index: 2;
  }

  &__hand_sec {
    position:absolute;
    top: calc(50% - 700px / 2);
    left: calc(50% - 250px / 2 - 2px);
    z-index: 4;
  }
}
</style>
