import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/produk',
      name: 'about',

      component: () => import('../views/produk.vue')
    },
    {
      path: '/produk',
      name: 'about',

      component: () => import('../views/produk.vue')
    }
  ]
})

export default router
