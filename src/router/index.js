import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/o-nama',
      alias: '/about-us',
      name: 'about',
      component: AboutView
    },
    {
      path: '/proizvodi',
      alias: '/products',
      name: 'products',
      component: HomeView
    },
    {
      path: '/kontakt',
      alias: '/contact',
      name: 'contact',
      component: HomeView
    }
  ]
})

export default router
