import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index.vue'
import Top from '@/views/Top.vue'
import Circles from '@/views/Circles.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    children: [
      {
        path: '',
        name: 'top',
        component: Top
      }, {
        path: 'circles',
        name: 'circles',
        component: Circles
      }, {
        path: 'circles/:circleId',
        name: 'circleDetail',
        component: Circles
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
