<script setup lang="ts">
import DigitalClock from './components/DigitalClock.vue';
import AnalogClock from './components/AnalogClock.vue';
import { onMounted, ref } from 'vue'
import { appWindow } from '@tauri-apps/api/window';

const option_key = "Escape";

const hour = ref(0);
const minute = ref(0);
const sec = ref(0);
const display_modal = ref(false);

enum ClockMode {
  Analog,
  Degital,
}
const clock_mode = ref(ClockMode.Analog);

const closeModal = () => {
  display_modal.value = false;
}


appWindow.setFullscreen(true);

setInterval(() => {
    const current = new Date();

    hour.value = current.getHours();
    minute.value = current.getMinutes();
    sec.value = current.getSeconds() + (current.getMilliseconds() / 1000);
  },
  10
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
  <div class="app">
    <DigitalClock v-if="clock_mode==ClockMode.Degital" :scale=1.5 v-model:hour="hour" v-model:minute="minute"></DigitalClock>
    <AnalogClock v-if="clock_mode==ClockMode.Analog" v-model:hour="hour" v-model:minute="minute" v-model:sec="sec"></AnalogClock>
    <div id="modal" class="modal" :class="{'is-active': display_modal}">
      <div class="modal-background" v-on:click="closeModal"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Preference</p>
          <button class="delete" aria-label="close" v-on:click="closeModal"></button>
        </header>
        <section class="modal-card-body">
          <div class="control">
            <label class="preference__label">Mode:</label>
            <label class="radio">
              <input type="radio" name="mode" :value="ClockMode.Degital" v-model="clock_mode">
              Degital
            </label>
            <label class="radio">
              <input type="radio" name="mode" :value="ClockMode.Analog" v-model="clock_mode">
              Analog
            </label>
          </div>
        </section>
        <footer class="modal-card-foot">
        </footer>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "bulma/bulma.sass";

.app {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  background-color: dimgray;
}

.preference__label {
  font-size: 1.2rem;
  margin-right: 2rem;
}
</style>
