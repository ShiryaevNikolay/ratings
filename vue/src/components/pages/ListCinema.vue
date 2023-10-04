<template>
  <PageLayout>
    <section class="p-16">
      <h1>Фильмы</h1>
      <div v-for="cinema in getFilms" :key="cinema.id" class="cinema-item">
        <RouterLink :to="{ name: routeNames.CINEMA_DETAILS, params: { id: cinema.id }}">
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
  computed: {
    routeNames () {
      return RouteNames
    }
  }
}
</script>

<style scoped lang="less">
.cinema-item {
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
}
</style>