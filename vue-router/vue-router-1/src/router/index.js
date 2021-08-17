import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    console.log(savedPosition);
    return {
      top: 0
    };
  }
});

router.beforeEach((to, from) => {
  console.log('这里是 beforeEach');
  return true;
});
router.beforeResolve((to, from) => {
  console.log('这里是 beforeResolve');
  return true;
});
router.afterEach((to, from) => {
  console.log('这里是 afterEach');
});
export default router;
