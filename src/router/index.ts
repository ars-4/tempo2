import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/art',
    name: 'Art',
    component: () => import(/* webpackChunkName: "art" */ '../views/Art.vue')
  },
  {
    path: '/photography',
    name: 'Photography',
    component: () => import(/* webpackChunkName: "photography" */ '../views/Photography.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
