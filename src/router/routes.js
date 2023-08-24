const routes = [
  {
    path: '/',
    component: () => import('../layout/index.vue'),
    children: [
      {
        path: '/map',
        meta: {
          title: '地图'
        },
        component: () => import('../components/space-map.vue')
      }
    ]
  },

]

export default routes