export default [
  {
    path: '/index',
    component: () => import('../pages/index.vue')
  },
  {
    path: '/:class/detail/:id',
    component: () => import('../pages/detail/detail.vue')
  },
  {
    path: '/user-:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../pages/404.vue')
  },
  {
    path: '/detail/:id',
    component: () => import('../pages/detail/index.vue'),
    children: [
      {
        path: '',
        component: () => import('../pages/detail/detail.vue')
      },
      {
        path: 'game',
        component: () => import('../pages/detail/game.vue')
      },
    ]
  }
];
