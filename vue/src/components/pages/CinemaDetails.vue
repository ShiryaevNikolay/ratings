<template>
  <PageLayout>
    <div class="header">
      <RouterLink :to="{ name: routeNames.LIST_CINEMA }" replace>
        <ElButton type="primary" icon="el-icon-arrow-left">Главная страница</ElButton>
      </RouterLink>
    </div>
    <section class="p-16">
      <div class="cinema-details">
        <CinemaCard :cinema="cinema"/>
        <div class="cinema-details__buttons">
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
  },
  methods: {
    deleteCinema () {
      this.removeCinema(this.cinema.id)
      this.$router.replace({ name: RouteNames.LIST_CINEMA })
    }
  }
}
</script>

<style scoped lang="less">
.cinema-details {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 16px;

  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>