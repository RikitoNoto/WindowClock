<script setup lang="ts">
import Hand from './Hand.vue';
</script>

<template>
  <div class="analog_clock">
    <img src="../assets/clock.png" class="analog_clock__compass"/>
    <div class="analog_clock__center_circle"></div>
    <Hand class="analog_clock__hand_hour" :height="500" :width="250" :weight="25" :rotate="0" color="#3650FF"></Hand>
    <Hand class="analog_clock__hand_min" :height="700" :width="250" :weight="25" :rotate="0" color="#A6FF69"></Hand>
    <Hand class="analog_clock__hand_sec" :height="700" :width="250" :weight="10" :rotate="0" color="coral"></Hand>
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
