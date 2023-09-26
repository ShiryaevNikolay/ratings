import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/Home.vue'
import ListCinema from '../components/pages/ListCinema.vue'
import { RouteNames } from './routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: HomePage
  },
  {
    path: '/list-cinema',
    name: RouteNames.LIST_CINEMA,
    component: ListCinema
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
