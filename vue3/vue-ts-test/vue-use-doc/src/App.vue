<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Optiona from './components/Optiona.vue';
import HelloWorld from './components/HelloWorld.vue';
import Doc from './components/Doc.vue';
import { ref, onMounted } from 'vue';
import Setup from './components/Setup.vue';
const title = ref('三国演义');
function setTitle(newtitle: string) {
  title.value = newtitle;
}
// const setupComponent = ref(null)
// setupComponent.value.log(); // 报错
const setupComponent = ref<InstanceType<typeof Setup>>();
onMounted(() => {
  console.log(setupComponent.value.log);
});
</script>

<template>
  <Setup ref="setupComponent"></Setup>
  <Doc></Doc>
  <Optiona
    :book="{
      title: title,
      count: 1000,
      writer: '罗贯中'
    }"
    @set="setTitle"
  />

  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <img alt="Vue logo" src="./assets/logo.png" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
