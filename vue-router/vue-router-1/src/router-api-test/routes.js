export default [
  {
    path: '/',
    component: () => import('../router-api-page/router-view.vue')
  },
  {
    path: '/router-link',
    component: () => import('../router-api-page/router-link.vue')
  }
];
