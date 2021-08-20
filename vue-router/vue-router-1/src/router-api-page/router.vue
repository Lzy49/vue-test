<template>
  <div>
    <button @click="router.push('/test')">去 test</button>
    <button @click="router.push('/router-view/test')">
      去 router-view/test
    </button>
    <button @click="router.back()">后退一页</button>
    <button @click="router.forward()">前进一页</button>
    <button @click="router.go(-2)">后退2页</button>
    <button @click="router.go(2)">前进2页</button>
    <button @click="router.removeRoute('test')">删除router-view/test</button>
    <button @click="router.replace('/')">替换当前路径</button>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
// 添加一个根路由
router.addRoute({
  path: '/test',
  component: () => import('./router-link.vue')
});
// 添加一个子路由
router.addRoute('parent', {
  name: 'test',
  path: 'test',
  components: {
    header: () => import('./component/header.vue'),
    default: () => import('./router-link.vue'),
    footer: () => import('./component/footer.vue')
  }
});
// 获取所有router
console.log(router.getRoutes());
// 当然routes中是否存在 name 为 test 的 路由
console.log(router.hasRoute('test'));
// 守卫test
console.log(router.isReady());
router.beforeEach(() => {
  console.log('beforeEach');
});
router.beforeResolve(() => {
  console.log('beforeResolve');
});
router.afterEach(() => {
  console.log('afterEach');
  console.error('报错啦！');
});
router.onError((err) => {
  console.log(err);
});
console.log(router.resolve('/'));
</script>
