export default [
  {
    path: '/setup/:id',
    component: () => import('../pages/setup.vue'),
    meta: {
      title: 'setup'
    }
  },
  {
    path: '/index',
    component: () => import('../pages/index.vue')
  },
  {
    path: '/:class/detail/:id',
    component: () => import('../pages/detail/detail.vue')
  },
  {
    path: '/detail/:id',
    component: () => import('../pages/detail/index.vue'),
    meta: {
      name: 'parent',
      title: 'parent'
    },
    redirect: (to) => {
      return './test';
    },
    children: [
      {
        path: '',
        meta: {
          name: 'child'
        },
        component: () => import('../pages/detail/detail.vue'),
        beforeEnter: [
          () => {
            console.log('这里是 beforeEnter');
          }
        ]
      },
      {
        path: 'game',
        component: () => import('../pages/detail/game.vue')
      }
    ]
  },
  {
    path: '/test',
    alias: ['/bbb', '/ccc'],
    components: {
      default: () => import('../pages/404.vue'),
      testView: () => import('../pages/detail/game.vue')
    }
  },
  {
    path: '/user-:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../pages/404.vue')
  },
  {
    path: '/props-page1/:id/:name',
    component: () => import('../pages/propsPage.vue'),
    meta: {
      transition: 'bounce'
    },
    props: true
  },
  {
    path: '/props-page2/:id/:name',
    components: {
      default: () => import('../pages/propsPage.vue'),
      testView: () => import('../pages/propsPage.vue')
    },
    meta: {
      transition: 'bounce'
    },
    props: {
      default: true,
      testView: true
    }
  },
  {
    path: '/props-page3',
    props: (route) => ({
      name: route.query.name,
      id: route.query.id
    }),
    meta: {
      transition: 'bounce'
    },
    component: () => import('../pages/propsPage.vue')
  },
  {
    path: '/scroll-1',
    component: () => import('../pages/scroll.vue'),
  }
];
