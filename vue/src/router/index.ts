import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/Home.vue'
import ListCinema from '../components/pages/ListCinema.vue'
import EditCinema from '../components/pages/EditCinema.vue'
import CinemaDetails from '../components/pages/CinemaDetails.vue'
import CreateCinema from '../components/pages/CreateCinema.vue'
import RatingFilms from '../components/pages/RatingFilms.vue'
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
  },
  {
    path: '/cinema/:id',
    name: RouteNames.CINEMA_DETAILS,
    component: CinemaDetails
  },
  {
    path: '/cinema/:id/edit',
    name: RouteNames.EDIT_CINEMA,
    component: EditCinema
  },
  {
    path: '/cinema/create',
    name: RouteNames.CREATE_CINEMA,
    component: CreateCinema
  },
  {
    path: '/cinema/rating',
    name: RouteNames.RATING_FILMS,
    component: RatingFilms
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
