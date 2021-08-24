<template>
  <n-layout-header class="app-header" bordered>
    <div class="nav">
      <n-switch :value="theme" @update:value="(v) => setTheme(v)" />
    </div>
  </n-layout-header>
</template>
<script setup>
import { inject } from 'vue';
const theme = inject('theme');
const setTheme = inject('setTheme');
</script>
<style lang="scss">
.app-header {
  height: 64px;
  padding: 20px;
  display: flex;
  justify-content: flex-end;

  .n-switch.n-switch--active .n-switch__rail {
    background: #000;
  }
  .nav{
    align-self: flex-end;
  }
}
</style>
