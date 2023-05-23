<script setup lang="ts">
import SevenSegment from './components/SevenSegment.vue'
import Dot from './components/Dot.vue'
import Colon from './components/Colon.vue';
</script>

<template>
  <SevenSegment :number=8 :height=350 :width=200></SevenSegment>
  <Colon></Colon>
</template>

<style scoped>
</style>
