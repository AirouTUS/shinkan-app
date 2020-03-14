import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index.vue'
import Top from '@/views/Top.vue'
import Circles from '@/views/Circles.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: Index,
    children: [
      {
        path: '',
        component: Top
      }, {
        path: 'circles',
        component: Circles
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
