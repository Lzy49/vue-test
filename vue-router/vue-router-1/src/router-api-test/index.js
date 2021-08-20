import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  createMemoryHistory,
  NavigationFailureType,
  START_LOCATION
} from 'vue-router';
import routes from './routes';
console.log(NavigationFailureType,START_LOCATION)
const router = createRouter({
  history: createWebHashHistory(''),
  // history:createWebHistory(),
  routes
});
// router.beforeEach((to, from) => {
//   console.log(to, from);
//   return true;
// });
export default router;
