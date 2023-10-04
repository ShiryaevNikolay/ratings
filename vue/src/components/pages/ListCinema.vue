<template>
  <PageLayout>
    <section class="p-16">
      <h1>Фильмы</h1>
      <div v-for="cinema in getFilms" :key="cinema.id" class="cinema-item">
        <RouterLink :to="{ name: url.cinemaDetails, params: { id: cinema.id }}">
          <CinemaCard :cinema="cinema" />
        </RouterLink>
      </div>
    </section>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import { helpCinema } from "@/mixins/cinema";
import CinemaCard from "../cinema/CinemaCard.vue"
import { RouterLink } from 'vue-router';
import { RouteNames } from '@/router/routes';

export default {
  name: 'ListCinema',
  mixins: [helpCinema],
  components: {
    PageLayout,
    CinemaCard,
    RouterLink
  },
  data () {
    return {
      url: {
        cinemaDetails: RouteNames.CINEMA_DETAILS
      }
    }
  }
}
</script>

<style scoped>
.cinema-item {
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
}
</style>