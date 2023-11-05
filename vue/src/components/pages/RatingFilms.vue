<template>
  <PageLayout>
    <div class="header">
      <RouterLink :to="{ name: routeNames.HOME }" replace>
        <ElButton type="primary" icon="el-icon-arrow-left">Главная страница</ElButton>
      </RouterLink>
    </div>
    <section class="p-16">
      <div v-if="isFilmsEmpty">
        <h1>Фильмы не найдены. Необходимо добавить фильм для составления рейтинга</h1>
      </div>
      <div v-else-if="getFilmsForRaiting">
        <h1>Составление рейтинга</h1>
        <div class="rating">
          <div class="rating__cinema">
            <CinemaPreview :cinema="getFilmsForRaiting.firstFilm" />
            <div class="rating__controls">
              <ElButton @click="() => addRating(getFilmsForRaiting.firstFilm, 10)" type="success">{{ "+10" }}</ElButton>
              <div class="rating__controls__container">
                <ElButton @click="() => addRating(getFilmsForRaiting.firstFilm, 1)" type="primary">{{ "+1" }}</ElButton>
                <span>{{ getRatings.firstRating }}</span>
              </div>
            </div>
          </div>
          <div class="rating__divider" />
          <div class="rating__cinema">
            <CinemaPreview :cinema="getFilmsForRaiting.secondFilm" />
            <div class="rating__controls">
              <div class="rating__controls__container">
                <span>{{ getRatings.secondRating }}</span>
                <ElButton @click="() => addRating(getFilmsForRaiting.secondFilm, 1)" type="primary">{{ "+1" }}</ElButton>
              </div>
              <ElButton @click="() => addRating(getFilmsForRaiting.secondFilm, 10)" type="success">{{ "+10" }}</ElButton>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="rating-header">
        <h1>Рейтинг составлен</h1>
        <ElButton @click="() => clear()" type="primary">Очистить список</ElButton>
      </div>
    </section>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import CinemaPreview from '../cinema/CinemaPreview.vue';
import { mapGetters, mapMutations } from 'vuex';
import { RouterLink } from 'vue-router';
import { RouteNames } from '@/router/routes';

export default {
  name: "RatingFilms",
  components: {
    PageLayout,
    RouterLink,
    CinemaPreview
  },
  computed: {
    ...mapGetters('cinema', [
      'getRatingFilms',
      'getFilmsWithFilter'
    ]),
    routeNames () {
      return RouteNames
    },
    films () {
      return this.getFilmsWithFilter({
        field: "rating",
        reverse: true
      })
    },
    isFilmsEmpty () {
      return this.films.size == 0
    },
    getFilmsForRaiting () {
      const rating = this.getRatingFilms
      const films = this.films
      for (let i = 0; i < films.length - 1; i++) {
        const firstFilm = films[i]
        const secondFilm = films[i + 1]
        const firstRating = rating[firstFilm.id] || 0
        const secondRating = rating[secondFilm.id] || 0
        if (firstRating == secondRating) {
          return {
            firstFilm,
            secondFilm
          }
        }
      }
      return null
    },
    getRatings () {
      const currentFilms = this.getFilmsForRaiting
      return {
        firstRating: this.getRatingFilms[currentFilms.firstFilm.id] || 0,
        secondRating: this.getRatingFilms[currentFilms.secondFilm.id] || 0
      }
    }
  },
  methods: {
    ...mapMutations('cinema', [
      'updateRatingCinema',
      'clearRating'
    ]),
    addRating (cinema, count) {
      this.updateRatingCinema({
        id: cinema.id,
        count: count
      })
    },
    clear () {
      this.clearRating()
    }
  }
}
</script>

<style scoped lang="less">
.rating-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.rating {
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  gap: 20px;
  margin: 16px;
  margin-top: 40px;

  &__divider {
    background-color: gray;
  }

  &__cinema {
    display: flex;
    flex-direction: column;
    widows: 100%;
  }

  &__controls {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;

    &__container {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 16px;
    }
  }
}
</style>