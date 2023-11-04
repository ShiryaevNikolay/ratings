<template>
  <PageLayout>
    <div class="header">
      <RouterLink :to="{ name: routeNames.HOME }" replace>
        <ElButton type="primary" icon="el-icon-arrow-left">Главная страница</ElButton>
      </RouterLink>
    </div>
    <section class="p-16">
      <div class="cinema-header">
        <h1>Фильмы</h1>
        <div class="cinema-header__filters">
          <div v-if="isSelectedFilter">
            <ElSelect v-model="needReverce" placeholder="Тип сортировки">
              <ElOption
                v-for="filterSortingType in filterOrder"
                :key="filterSortingType.value"
                :label="filterSortingType.label"
                :value="filterSortingType.value">
              </ElOption>
            </ElSelect>
          </div>
          <div>
            <ElSelect v-model="selectedFilter" placeholder="Фильтр">
              <ElOption
                v-for="filter in filters"
                :key="filter.field"
                :label="filter.label"
                :value="filter.field">
              </ElOption>
            </ElSelect>
          </div>
        </div>
      </div>
      <div v-for="cinema in films" :key="cinema.id" class="cinema-item">
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
import { mapGetters } from 'vuex';

const filters = [
  {
    field: null,
    label: "Без фильтра"
  },
  {
    field: "score",
    label: "По оценке"
  },
  {
    field: "date",
    label: "По дате"
  },
  {
    field: "name",
    label: "По названию"
  },
  {
    field: "rating",
    label: "По рейтингу"
  }
]
const filterOrder = [
  {
    value: false,
    label: "По возрастанию"
  },
  {
    value: true,
    label: "По убыванию"
  }
]

export default {
  name: 'ListCinema',
  mixins: [helpCinema],
  components: {
    PageLayout,
    CinemaCard,
    RouterLink
  },
  data() {
    return {
      selectedFilter: null,
      needReverce: false
    }
  },
  computed: {
    ...mapGetters('cinema', [
      'getFilmsWithFilter'
    ]),
    filters () {
      return filters
    },
    filterOrder() {
      return filterOrder
    },
    routeNames () {
      return RouteNames
    },
    isSelectedFilter () {
      return this.selectedFilter != null
    },
    films () {
      return this.getFilmsWithFilter({
        field: this.selectedFilter,
        reverce: this.selectedFilter ? this.needReverce : false
      })
    }
  },
  methods: {
    deleteCinema (cinema) {
      this.removeCinema(cinema.id)
    }
  },
  mounted() {
    this.selectedFilterId = this.filters[0].id
    this.needReverce = this.filterOrder[0].value
  }
}
</script>

<style scoped lang="less">
.cinema-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  margin-bottom: 16px;

  &__filters {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
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