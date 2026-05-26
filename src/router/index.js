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
  },
  {
    path: '/cases',
    name: 'cases',
    component: () => import('@/views/Media.vue')
  },
  {
    path: '/cases/:id',
    name: 'article-detail',
    component: () => import('@/views/ArticleDetailView.vue'),
    props: true
  }
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // If the user is going back/forward in the browser, it keep their original position
      return savedPosition
    } else {
      // When you normally click on a link, you always jump to the very beginning (top: 0)
      return { top: 0 }
    }
  }
})

export default router



