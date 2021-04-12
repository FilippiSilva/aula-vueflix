import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../components/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/series',
        name: 'Series',
        component: () => import(/* webpackChunkName: "series" */ '../views/Series.vue')
      },
      {
        path: '/movies',
        name: 'Movies',
        component: () => import(/* webpackChunkName: "movies" */ '../views/Movies.vue')
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
