import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/network',
    name: 'network',
    component: () => import('@/views/Network.vue')
  }
],
})

export default router
