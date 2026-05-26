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
  },
  {
    path: '/events',
    name: 'events',
    component: () => import('@/views/Events.vue')
  },
  {
    path: '/network/:name',
    name: 'network-profile',
    component: () => import('@/components/network-components/Network-profile.vue'),
  },
  {
    path: '/events/:name',
    name: 'events-profile',
    component: () => import('@/components/events-components/Event-profile.vue')
  }
  ]
})

export default router
