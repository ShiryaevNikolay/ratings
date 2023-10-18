<template>
  <PageLayout>
    <section class="p-16">
      <div class="cinema-header">
        <h1>Фильмы</h1>
        <div class="cinema-header__filters">
          <div>
            <ElSelect v-model="selectedFilterId" placeholder="Фильтр">
              <ElOption
                v-for="filter in filters"
                :key="filter.id"
                :label="filter.label"
                :value="filter.id">
              </ElOption>
            </ElSelect>
          </div>
        </div>
      </div>
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
import { mapState } from 'vuex';

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
      selectedFilterId: null
    }
  },
  computed: {
    ...mapState('cinema', [
      'filters'
    ]),
    routeNames () {
      return RouteNames
    }
  },
  methods: {
    deleteCinema (cinema) {
      this.removeCinema(cinema.id)
    }
  },
  mounted () {
    this.selectedFilterId = this.filters[0].id
  }
}
</script>

<style scoped lang="less">
.cinema-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
}

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