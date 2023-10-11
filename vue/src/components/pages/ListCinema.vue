<template>
  <PageLayout>
    <section class="p-16">
      <h1>Фильмы</h1>
      <div v-for="cinema in getFilms" :key="cinema.id" class="cinema-item">
        <RouterLink :to="{ name: routeNames.CINEMA_DETAILS, params: { id: cinema.id } }">
          <CinemaCard :cinema="cinema" />
        </RouterLink>
        <div class="cinema-item__button">
          <RouterLink :to="{ name: routeNames.EDIT_CINEMA, params: { id: cinema.id } }">
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
          </RouterLink>
        </div>
        <div class="cinema-item__button cinema-item__button_delete">
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
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
    routeNames() {
      return RouteNames
    }
  }
}
</script>

<style scoped lang="less">
.cinema-item {
  position: relative;

  &__button {
    position: absolute;
    top: 0px;
    right: 0px;

    &_delete {
      top: 40px;
      margin-top: 16px;
    }
  }
}
</style>