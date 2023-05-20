<script setup lang="ts">
import SevenSegment from './components/SevenSegment.vue'
</script>

<template>
  <SevenSegment display_number=9></SevenSegment>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
