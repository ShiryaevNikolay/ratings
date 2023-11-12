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
      <div class="mt-16">
        <ElButton
          type="primary"
          class="load-by-id"
          @click="() => changeVisibleFormById()"
        >{{  isVisibleLoadFormById ? "Отмена" : "Загрузить по id"  }}</ElButton>
      </div>
      <div v-if="isVisibleLoadFormById" class="create-cinema__load-by-id mt-16">
        <ElInput v-model="idFilm" placeholder="ID фильма"/>
        <ElButton icon="el-icon-download" @click="() => {}" circle />
      </div>
    </section>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import CinemaForm from "../forms/CinemaForm"
import { RouteNames } from '@/router/routes'
import { helpCinema } from "@/mixins/cinema"
import { RouterLink } from 'vue-router'

export default {
  name: "CreateCinema",
  mixins: [helpCinema],
  components: {
    PageLayout,
    RouterLink,
    CinemaForm
  },
  data () {
    return {
      isVisibleLoadFormById: false,
      idFilm: null
    }
  },
  computed: {
    routeNames() {
      return RouteNames
    }
  },
  methods: {
    saveCinema (cinema) {
      this.addCinema(cinema)
    },
    changeVisibleFormById() {
      this.isVisibleLoadFormById = !this.isVisibleLoadFormById
    }
  }
}
</script>

<style scoped lang="less">
.mt-16 {
  margin-top: 16px;
}

.create-cinema {
  &__load-by-id {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
}
</style>