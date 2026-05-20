import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Events from '@/views/Events.vue'

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
  },
  {
    path: '/events',
    name: 'events',
    component: () => import('@/views/Events.vue')
  }
  ]
})

export default router
