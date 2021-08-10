<template>
  <h1>{{ msg }}</h1>
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation {{ stateName }}
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="state.count++">
    count is: {{ state.count }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>
import axios from 'axios';
import { defineProps, reactive, ref } from 'vue';
console.log('axios', axios);

defineProps({
  msg: String
});
const state = reactive({ count: 0 });
const stateName = ref('张三');
</script>

<style scoped>
a {
  color: #42b983;
}
div {
  background: url('../assets/logo.png');
}
</style>
