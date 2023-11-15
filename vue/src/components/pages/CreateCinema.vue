<template>
  <PageLayout>
    <div class="header">
      <RouterLink :to="{ name: routeNames.HOME }" replace>
        <ElButton type="primary" icon="el-icon-arrow-left">Главная страница</ElButton>
      </RouterLink>
    </div>
    <section class="p-16">
      <h1>Добавление рейтинга фильма</h1>
      <CinemaForm btnText="Добавить фильм" @btnClick="(cinema) => saveCinema(cinema)" />
    </section>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import CinemaForm from "../forms/CinemaForm"
import { RouteNames } from '@/router/routes'
import { helpCinema } from "@/mixins/cinema"
import { RouterLink } from 'vue-router'
import { mapActions } from 'vuex'

export default {
  name: "CreateCinema",
  mixins: [helpCinema],
  components: {
    PageLayout,
    RouterLink,
    CinemaForm
  },
  computed: {
    routeNames() {
      return RouteNames
    }
  },
  methods: {
    ...mapActions('cinema', [
      'createFilm'
    ]),
    saveCinema (cinema) {
      this.createFilm(cinema)
        .then((filmId) => {
          this.$router.push({ name: RouteNames.CINEMA_DETAILS, params: { id: filmId } })
        })
    }
  }
}
</script>