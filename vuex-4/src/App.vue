<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld />
  <test />
  <Input input-key="name" />
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue';
import test from './components/test.vue';
import Input from './components/input.vue';
import { useStore } from 'vuex';
const store = useStore();
store.commit('setName', '浏阳');
console.log(store.state.test.name);
store.dispatch('setName', '张飞').then((res) => {
  console.log('promise', store.state);
  console.log(store.state.test.name);
});
console.log('------------ 调用 test/setName -----------');
store.dispatch('test/setName');
console.log('------------ 调用 test/setName -----------');
</script>

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
