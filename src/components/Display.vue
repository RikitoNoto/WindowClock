<script setup lang="ts">
import SevenSegment from './SevenSegment.vue';
import Colon from './Colon.vue';


const props = defineProps({
  scale: {
    type: Number,
    default: 1,
  },
});

const char_height: number = 140 * props.scale;
const char_width: number = char_height * 4/7;

</script>

<template>
  <div class="display">
    <SevenSegment class="display__char" :number=1 :height=char_height :width=char_width></SevenSegment>
    <SevenSegment class="display__char" :number=1 :height=char_height :width=char_width></SevenSegment>
    <Colon class="display__char" :height=char_height></Colon>
    <SevenSegment class="display__char" :number=1 :height=char_height :width=char_width></SevenSegment>
    <SevenSegment class="display__char" :number=1 :height=char_height :width=char_width></SevenSegment>
  </div>
</template>

<style scoped lang="scss">
.display {
  &__char {
    display: inline-block;
  }
}
</style>
