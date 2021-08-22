export default [
  {
    path: '/',
    component: () => import('../router-api-page/router-view.vue')
  },
  {
    path: '/router-link',
    component: () => import('../router-api-page/router-link.vue')
  },
  {
    path: '/router-view/',
    component: () => import('../router-api-page/router-view.vue'),
    name: 'parent',
    children: [
      {
        path: 'page1',
        components: {
          header: () => import('../router-api-page/component/header.vue'),
          default: () => import('../router-api-page/component/detal.vue'),
          footer: () => import('../router-api-page/component/footer.vue')
        }
      }
    ]
  },
  {
    path: '/composition/:id',
    component: () => import('../router-api-page/composition.vue'),
    meta: {
      title: 'test'
    }
  },
  {
    path: '/router-test',
    component: () => import('../router-api-page/router.vue'),
    meta: {
      title: 'xx'
    }
  }
];
