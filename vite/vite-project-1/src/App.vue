<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + Vite" />
    <Features />
  </div>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue';
import Features from './components/Features.vue';
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
if (import.meta.hot) {
  // // HMR 代码
  // import.meta.hot.accept((newModule) => {
  //   console.log(newModule);
  // });  
  // import.meta.hot.dispose((data) => {
  //   // 清理副作用
  //   console.log('我有什么用', data);
  // });
  import.meta.hot.decline()
  console.log('data',import.meta.hot.data);
}
const fun = function (){
  console.log('say hi1')
}
fun();
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
