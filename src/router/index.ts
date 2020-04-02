import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index.vue'
import Top from '@/views/Top.vue'
import CirclesIndex from '@/views/circles/Index.vue'
import CirclesDetail from '@/views/circles/Detail.vue'

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
        name: 'circlesIndex',
        component: CirclesIndex,
      }, {
        path: 'circles/:circleId',
        name: 'circlesDetail',
        component: CirclesIndex
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
