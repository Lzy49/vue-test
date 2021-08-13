<template>
  <h1>{{ msg }}</h1>
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation {{ color }}
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="state.count++">
    count is: {{ state.count }}
  </button>
  <button @click="setColor">setColor</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>
// import axios from 'axios';
import { defineProps, reactive, ref } from 'vue';
defineProps({
  msg: String
});
console.log('env', import.meta.env);
const state = reactive({ count: 0 });
let color = ref('red');
color = ref('green');
const setColor = () => {
  console.log(color);
  color.value = 'red';
  state.count++;
};
</script>

<style scoped>
a {
  color: v-bind(color);
}
div {
  background: url('../assets/logo.png');
}
</style>
