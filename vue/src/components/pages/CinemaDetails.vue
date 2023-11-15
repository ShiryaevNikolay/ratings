<template>
  <PageLayout>
    <div class="header">
      <RouterLink :to="{ name: routeNames.LIST_CINEMA }" replace>
        <ElButton type="primary" icon="el-icon-arrow-left">Главная страница</ElButton>
      </RouterLink>
    </div>
    <section class="p-16">
      <div class="cinema-details">
        <div class="cinema-details__header">
          <ElRate v-model="getScore" disabled :colors="getSroceIcons" />
          <div class="cinema-details__header__buttons">
            <RouterLink :to="{ name: routeNames.EDIT_CINEMA, params: { id: cinema.id } }">
              <ElButton type="primary" icon="el-icon-edit" circle />
            </RouterLink>
            <ElButton type="danger" icon="el-icon-delete" circle @click="() => deleteCinema()" />
          </div>
        </div>
        <div class="cinema-card__preview" :style="previewStyle"/>
        <div class="cinema-details__info">
          <div class="cinema-details__info__item cinema-details__info__name">{{ cinema.name }}</div>
          <div class="cinema-details__info__item">Оригинальное название: {{ cinema.originName }}</div>
          <div class="cinema-details__info__item">Режиссер: {{ cinema.producer }}</div>
          <div class="cinema-details__info__item">Год: {{ cinema.year }}</div>
        </div>
      </div>
    </section>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import { helpCinema } from "@/mixins/cinema";
import { RouterLink } from 'vue-router'
import { RouteNames } from '@/router/routes'

export default {
  name: 'CinemaDetails',
  mixins: [helpCinema],
  components: {
    PageLayout,
    RouterLink
  },
  computed: {
    getScore () {
      return this.cinema ? this.cinema.score : 0
    },
    getSroceIcons () {
      return ['#99A9BF', '#F7BA2A', '#FF9900']
    },
    cinema () {
      const cinemaId = this.$route.params.id
      return this.getFilm(cinemaId)
    },
    routeNames() {
      return RouteNames
    },
    previewStyle () {
      return {
        backgroundImage: `url(${this.cinema.coverUrl || ''})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`
      }
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
  grid-template:
    "header" auto
    "cover" 300px
    "info" auto;
  gap: 16px;

  &__header {
    grid-area: header;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &__buttons {
      display: flex;
      flex-direction: row;
      justify-content: end;
      gap: 16px
    }
  }

  &__preview {
    grid-area: cover;
    background: #bababa;
    background-size: cover;
    background-position: center;
  }

  &__info {
    grid-area: info;
    display: flex;
    flex-direction: column;
    gap: 16px;

    &__name {
      font-weight: 600;
      font-size: 20px;
    }
  }
}
</style>