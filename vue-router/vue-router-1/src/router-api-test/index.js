import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  createMemoryHistory,
  NavigationFailureType,
  START_LOCATION,
  onBeforeRouteLeave,
  onBeforeRouteUpdate,
  
} from 'vue-router';
import routes from './routes';
console.log(NavigationFailureType, START_LOCATION);
const router = createRouter({
  history: createWebHashHistory(''),
  // history:createWebHistory(),
  routes
});
// router.beforeEach((to, from) => {
//   console.log(to, from);
//   return true;
// });
router.beforeEach((to, form, next) => {
  console.log('--------------- beforeEach -------------');
  console.log(to, form);
  console.log('----------------------------------------');
  console.log('beforeEach');
  next();
});
router.beforeResolve((to, form) => {
  console.log(to, form);
  console.log('%c beforeResolve', 'color:red');
});
// router.afterEach((e) => {
//   console.log(e)
//   console.log('afterEach');
//   console.error('报错啦！');
// });
router.onError((err) => {
  console.log(err);
});
export default router;
