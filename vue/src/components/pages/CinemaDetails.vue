<template>
  <PageLayout>
    <div class="header">
      <RouterLink :to="{ name: routeNames.LIST_CINEMA }" replace>
        <ElButton type="primary" icon="el-icon-arrow-left">Главная страница</ElButton>
      </RouterLink>
    </div>
    <section class="p-16">
      <CinemaCard :cinema="cinema"/>
    </section>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import CinemaCard from "../cinema/CinemaCard.vue"
import { helpCinema } from "@/mixins/cinema";
import { RouterLink } from 'vue-router'
import { RouteNames } from '@/router/routes'

export default {
  name: 'CinemaDetails',
  mixins: [helpCinema],
  components: {
    PageLayout,
    RouterLink,
    CinemaCard
  },
  computed: {
    cinema () {
      const cinemaId = this.$route.params.id
      return this.getFilm(cinemaId)
    },
    routeNames() {
      return RouteNames
    }
  }
}
</script>