<script setup lang="ts">
import Display from './components/Display.vue';
import { ref } from 'vue'


const hour = ref(0);
const minute = ref(0);

setInterval(() => {
    const current = new Date();
    hour.value = current.getHours();
    minute.value = current.getMinutes();
  },
  100
);
</script>

<template>
  <Display :scale=1.5 :hour=hour :minute=minute></Display>
</template>

<style scoped>
</style>
