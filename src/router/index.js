import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/pages/Home.vue'
import Contato from '@/pages/Contato.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/contato',
    component: Contato
  },
  {
    path: '*',
    redirect: '/'
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
