import {
  createRouter,
  createWebHashHistory,
} from 'vue-router';
console.log(createWebHashHistory)
import routes from './routes';
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;
