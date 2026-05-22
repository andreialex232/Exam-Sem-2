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
    props: true
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('@/views/Contacts.vue')
  }
  ]
})

export default router
