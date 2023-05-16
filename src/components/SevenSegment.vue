<script setup lang="ts">

defineProps<{ msg: string }>()
</script>

<template>
  <div class="seven-segment">
    <div class="seven-segment__bar seven-segment__bar__top seven-segment__bar__horizontal"></div>
    <div class="seven-segment__bar seven-segment__bar__top-left seven-segment__bar__vertical"></div>
    <div class="seven-segment__bar seven-segment__bar__top-right seven-segment__bar__vertical"></div>
    <div class="seven-segment__bar seven-segment__bar__middle seven-segment__bar__horizontal"></div>
    <div class="seven-segment__bar seven-segment__bar__bottom-left seven-segment__bar__vertical"></div>
    <div class="seven-segment__bar seven-segment__bar__bottom-right seven-segment__bar__vertical"></div>
    <div class="seven-segment__bar seven-segment__bar__bottom seven-segment__bar__horizontal"></div>
  </div>
</template>

<style scoped lang="scss">
$scale: 1;


.seven-segment {
  position: relative;
  &__bar {
    display: inline-block;
    position: absolute;
    background-color: red;

    &__vertical {
      height: 100px;
      width: 50px;
      &:before,
      &:after {
        position: absolute;
        left: 0;
        width: 0;
        height: 0;
        content: '';
        border: 25px solid transparent;
        border-top: 25px solid transparent;
        border-bottom: 25px solid transparent;
      }
      &:before {
        top: 100%;
        border-top-color: red;
      }
      &:after {
        bottom: 100%;
        border-bottom-color: red;
      }
    }

    &__horizontal {
      height: 50px;
      width: 98px;
      &:before,
      &:after {
        position: absolute;
        top: 0;
        width: 0;
        height: 0;
        content: '';
        border: 25px solid transparent;
        border-right: 25px solid transparent;
        border-left: 25px solid transparent;
      }
      &:before {
        left: 100%;
        border-left-color: red;
      }
      &:after {
        right: 100%;
        border-right-color: red;
      }
    }

    &__top {
      top: 0px;
      left: 51px;
    }

    &__top-left {
      top: 50px;
      left: 0px;
    }

    &__top-right {
      top: 50px;
      left: 150px;
    }

    &__middle {
      top: 150px;
      left: 51px;
    }

    &__bottom-left {
      top: 200px;
      left: 0px;
    }

    &__bottom-right {
      top: 200px;
      left: 150px;
    }

    &__bottom {
      top: 300px;
      left: 51px;
    }
  }
}

</style>
