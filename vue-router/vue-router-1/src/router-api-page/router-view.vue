<template>
  <div>
    <h1>this is index</h1>
    <div class="wrap">
      <!-- name 演示 -->
      <router-view name="header"></router-view>
      <router-view></router-view>
      <router-view name="footer"></router-view>
      <!-- route 演示 -->
      <!-- <router-view
        :route="{
          fullPath: '/router-view/page1',
          path: '/router-view/page1',
          hash: '',
          matched: [],
          meta: {},
          name: undefined,
          params: {},
          query: {}
        }"
        v-slot="{ Component, route }"
      >
        {{ route }}
        <component :is="Component" :key="route"></component>
      </router-view> -->
      <!-- v-slot 演示 -->
      <br>
      <!-- <router-view v-slot="{ Component, route }">
        {{ route }}
        <component :is="Component"></component>
      </router-view> -->
    </div>
  </div>
</template>
<script></script>
<style>
.wrap {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
