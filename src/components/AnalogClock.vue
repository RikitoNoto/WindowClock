<script setup lang="ts">
</script>

<template>
  <div class="analog_clock">
    <img src="../assets/clock.png" class="analog_clock__compass"/>
    <div class="analog_clock__hand_hour">
      <div class="analog_clock__hand_hour__dest"></div>
    </div>

    <div class="analog_clock__hand_minute">
      <div class="analog_clock__hand_minute__dest"></div>
    </div>
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
  }

  &__hand_hour {
    --hour_hand_height: 500px;
    --hour_hand_width: 250px;
    --hour_hand_weight: 50px;

    position:absolute;
    width: var(--hour_hand_width);
    height: var(--hour_hand_height);
    top: calc(50% - var(--hour_hand_height) / 2);
    left: calc(50% - var(--hour_hand_width) / 2 - 1px);

    &__dest {
      display: flex;
      justify-content: center;
      position: absolute;
      border-radius: 50%;
      width: var(--hour_hand_width);
      height: var(--hour_hand_height);
      &::before{
        content: '';
        position: absolute;
        width: var(--hour_hand_weight);
        height: calc(var(--hour_hand_height) / 2);
        background: black;
        z-index: 11;
        border-radius: calc(var(--hour_hand_weight) / 2);
      }
    }
  }

&__hand_minute {
  --minute_hand_height: 700px;
  --minute_hand_width: 250px;
  --minute_hand_weight: 25px;

  position:absolute;
  width: var(--minute_hand_width);
  height: var(--minute_hand_height);
  top: calc(50% - var(--minute_hand_height) / 2);
  left: calc(50% - var(--minute_hand_width) / 2 - 1px);

  &__dest {
    display: flex;
    justify-content: center;
    position: absolute;
    border-radius: 50%;
    width: var(--minute_hand_width);
    height: var(--minute_hand_height);
    rotate: 90deg;
    &::before{
      content: '';
      position: absolute;
      width: var(--minute_hand_weight);
      height: calc(var(--minute_hand_height) / 2);
      background: black;
      z-index: 11;
      border-radius: calc(var(--minute_hand_weight) / 2);
    }
  }
}


}
</style>
