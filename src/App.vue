<script setup lang="ts">
import Display from './components/Display.vue';
import { onMounted, ref } from 'vue'
import { appWindow } from '@tauri-apps/api/window';

const option_key = "Escape";

const hour = ref(0);
const minute = ref(0);
const display_modal = ref(false);
const closeModal = () => {
  display_modal.value = false;
}


appWindow.setFullscreen(true);

setInterval(() => {
    const current = new Date();
    hour.value = current.getHours();
    minute.value = current.getMinutes();
  },
  100
);

onMounted(()=>{
  document.addEventListener("keydown", (e: KeyboardEvent)=>{
    if(e.key === option_key){
      display_modal.value = !display_modal.value;
    }
  });
});
</script>

<template>
  <Display :scale=1.5 v-model:hour="hour" v-model:minute="minute"></Display>

  <div id="modal" class="modal" :class="{'is-active': display_modal}">
    <div class="modal-background" v-on:click="closeModal"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Preference</p>
        <button class="delete" aria-label="close" v-on:click="closeModal"></button>
      </header>
      <section class="modal-card-body">
      </section>
      <footer class="modal-card-foot">
      </footer>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "bulma/bulma.sass";
</style>
