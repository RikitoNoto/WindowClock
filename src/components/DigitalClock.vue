<script setup lang="ts">
import SevenSegment from './SevenSegment.vue';
import Colon from './Colon.vue';
import TimeUtil from '../helper/TimeUtil';
import { computed } from 'vue';


const props = defineProps({
  scale: {
    type: Number,
    default: 1,
  },
  hour: {
    type: Number,
    default: 0,
  },
  minute: {
    type: Number,
    default: 0,
  },
});

const emits = defineEmits(["update:hour", "update:minute"]);

const hour = computed({
  get() {
    return props.hour;
  },
  set(value) {
    emits("update:hour", value);
  }
});

const minute = computed({
  get() {
    return props.minute;
  },
  set(value) {
    emits("update:minute", value);
  }
});

const char_height: number = 140 * props.scale;
const char_width: number = char_height * 4/7;
</script>

<template>
  <div class="digital_clock">
    <SevenSegment class="digital_clock__char" :number=TimeUtil.numToDigArray(hour)[0] :height=char_height :width=char_width></SevenSegment>
    <SevenSegment class="digital_clock__char" :number=TimeUtil.numToDigArray(hour)[1] :height=char_height :width=char_width></SevenSegment>
    <Colon class="digital_clock__char" :height=char_height :turn_on_colon=true></Colon>
    <SevenSegment class="digital_clock__char" :number=TimeUtil.numToDigArray(minute)[0] :height=char_height :width=char_width></SevenSegment>
    <SevenSegment class="digital_clock__char" :number=TimeUtil.numToDigArray(minute)[1] :height=char_height :width=char_width></SevenSegment>
  </div>
</template>

<style scoped lang="scss">
.digital_clock {
  &__char {
    display: inline-block;
    margin-left: 1vw;
    margin-right: 1vw;
  }
}
</style>
