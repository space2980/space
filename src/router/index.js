import { createRouter,createWebHashHistory } from 'vue-router'
import routes from './routes'

// v3
const router = createRouter({
  history:createWebHashHistory(),
  routes
})

// 路由守卫

export default router