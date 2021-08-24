export default [
  {
    path: '/',
    component: () => import('../pages/index.vue')
  },
  {
    path: '/vue3.2',
    component: () => import('../pages/vue/3.2.vue')
  }
];
