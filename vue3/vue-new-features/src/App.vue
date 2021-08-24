<template>
  <n-config-provider :theme="theme ? darkTheme : null">
    <n-layout class="warp">
      <app-header></app-header>
      <n-layout class="content" position="absolute" has-sider>
        <app-nav class="nav"></app-nav>
        <n-layout-content
          :native-scrollbar="false"
          content-style="padding: 24px;"
        >
          <router-view></router-view>
        </n-layout-content>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>
<script setup>
import appHeader from './components/app/header.vue';
import appNav from './components/app/nav.vue';
import { ref, provide } from 'vue';
import { useOsTheme, darkTheme } from 'naive-ui';
const osThemeRef = useOsTheme();
const theme = ref(osThemeRef.value === 'dark');
provide('theme', theme);
provide('setTheme', (value) => {
  theme.value = value;
});
</script>
<style lang="scss">
.warp {
  height: 100vh;
  .nav {
    height: 100%;
  }
  .content {
    top: 64px;
  }
}
</style>
