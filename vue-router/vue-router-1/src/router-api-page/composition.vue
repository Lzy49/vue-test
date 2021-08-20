<template>
  <div>
    <router-link ref="link" to="/router-view/page1">
      去router-view/page1
    </router-link>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import {
  onBeforeRouteLeave,
  onBeforeRouteUpdate,
  useLink,
  useRoute,
  useRouter
} from 'vue-router';
const router = useRouter();
const route = useRoute();
console.log('--------------------------------');
console.log('currentRoute', router.currentRoute);
console.log('--------------------------------');
console.log('route.query', route.query);
// console.log('喝点', linkProps);
onBeforeRouteLeave(() => {
  console.log('跳转路由，并且组件销毁');
});
onBeforeRouteUpdate(() => {
  console.log('修改了动态路由而没有真正离开执行');
});
</script>
