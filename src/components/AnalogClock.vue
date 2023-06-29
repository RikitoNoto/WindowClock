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
    return TimeUtil.hourToDeg(props.hour, props.minute, props.sec);
  },
  set(value) {
    emits("update:hour", value);
  }
});

const minute = computed({
  get() {
    return TimeUtil.minuteToDeg(props.minute, props.sec);
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

const HOUR_HAND_SIZE = {
  height: "50%",
  width: "1%",
  weight: "1.8rem",
};

const MINUTE_HAND_SIZE = {
  height: "75%",
  width: "1%",
  weight: "1.8rem",
};

const SECOND_HAND_SIZE = {
  height: "80%",
  width: "1%",
  weight: "1rem",
};

</script>

<template>
  <div class="analog_clock analog_clock__compass">
    <div class="analog_clock__center_circle"></div>
    <Hand class="analog_clock__hand_hour" :height="HOUR_HAND_SIZE.height" :width="HOUR_HAND_SIZE.width" :weight="HOUR_HAND_SIZE.weight" :rotate="hour" color="#3650FF"></Hand>
    <Hand class="analog_clock__hand_min" :height="MINUTE_HAND_SIZE.height" :width="MINUTE_HAND_SIZE.width" :weight="MINUTE_HAND_SIZE.weight" :rotate="minute" color="#A6FF69"></Hand>
    <Hand class="analog_clock__hand_sec" :height="SECOND_HAND_SIZE.height" :width="SECOND_HAND_SIZE.width" :weight="SECOND_HAND_SIZE.weight" :rotate="sec" color="coral"></Hand>
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
    background-image: url(../assets/clock.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 0;
    &::before {
      content: "";
      --size: 85%;
      position: absolute;
      top: calc(50% - var(--size) / 2);
      left: calc(50% - var(--size) / 2);
      height: var(--size);
      width: var(--size);
      border-radius: 50%;
      background: radial-gradient(transparent,rgba(255,255,255,0.2));
      box-shadow: -10px -10px 20px rgba(255,255,255,0.1),
                  10px 10px 20px rgba(0,0,0,0.2),
                  0px 40px 50px rgba(0,0,0,0.2);
      z-index: -1;
    }
  }

  &__center_circle {
    --circle-radius: 35px;
    position:absolute;
    top: calc(50% - var(--circle-radius) / 2);
    left: calc(50% - var(--circle-radius) / 2);
    height: var(--circle-radius);
    width: var(--circle-radius);
    border-radius: 50%;
    background-color: black;
    z-index: 20;
  }

  --hour_hand_height: v-bind(HOUR_HAND_SIZE.height);
  --hour_hand_width: v-bind(HOUR_HAND_SIZE.width);
  --hour_hand_weight: v-bind(HOUR_HAND_SIZE.weight);

  --minute_hand_height: v-bind(MINUTE_HAND_SIZE.height);
  --minute_hand_width: v-bind(MINUTE_HAND_SIZE.width);
  --minute_hand_weight: v-bind(MINUTE_HAND_SIZE.weight);

  --second_hand_height: v-bind(SECOND_HAND_SIZE.height);
  --second_hand_width: v-bind(SECOND_HAND_SIZE.width);
  --second_hand_weight: v-bind(SECOND_HAND_SIZE.weight);

  &__hand_hour {
    position:absolute;
    top: calc(50% - var(--hour_hand_height) / 2);
    left: calc(50% - var(--hour_hand_width) / 2);
    z-index: 3;
  }

  &__hand_min {
    position:absolute;
    top: calc(50% - var(--minute_hand_height) / 2);
    left: calc(50% - var(--minute_hand_width) / 2);
    z-index: 2;
  }

  &__hand_sec {
    position:absolute;
    top: calc(50% - var(--second_hand_height) / 2);
    left: calc(50% - var(--second_hand_width) / 2);
    z-index: 4;
  }
}
</style>
