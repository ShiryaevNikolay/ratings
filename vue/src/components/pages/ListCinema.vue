<template>
  <PageLayout>
    <section class="p-16">
      <h1>Фильмы</h1>
      <div v-for="cinema in getFilms" :key="cinema.id" class="cinema-item">
        <div class="cinema-item__cinema">
          <RouterLink :to="{ name: routeNames.CINEMA_DETAILS, params: { id: cinema.id } }">
            <CinemaCard :cinema="cinema" />
          </RouterLink>
        </div>
        <div class="cinema-item__buttons">
          <RouterLink :to="{ name: routeNames.EDIT_CINEMA, params: { id: cinema.id } }">
            <ElButton type="primary" icon="el-icon-edit" circle />
          </RouterLink>
          <ElButton type="danger" icon="el-icon-delete" circle @click="() => deleteCinema(cinema)" />
        </div>
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
  },
  methods: {
    deleteCinema (cinema) {
      this.removeCinema(cinema.id)
    }
  }
}
</script>

<style scoped lang="less">
.cinema-item {
  display: grid;
  grid-template-columns: 1fr auto;
  margin-bottom: 20px;

  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>