<template>
  <div v-if="cinema" class="cinema-card">
    <div class="cinema-card__preview">
      <img class="cinema-card__image" :src="cinema.previewUrl" />
      <div class="cinema-card__score">
        <ElRate v-model="getScore" disabled :colors="getSroceIcons" />
      </div>
    </div>
    <div class="cinema-card__info">
      <div class="cinema-card__info__item">{{ cinema.name }}</div>
      <div class="cinema-card__info__item">{{ cinema.originName }}</div>
      <div class="cinema-card__info__item">{{ cinema.producer }}</div>
      <div class="cinema-card__info__item">{{ cinema.year }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CinemaCard',
  props: {
    cinema: Object,
    default: () => (null)
  },
  computed: {
    getScore () {
      return this.cinema ? this.cinema.score : 0
    },
    getSroceIcons () {
      return ['#99A9BF', '#F7BA2A', '#FF9900']
    }
  }
}
</script>

<style scoped lang="less">
.cinema-card {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 16px;

  &__image {
    object-fit: cover;
    width: 100%;
    border-radius: 8px;
  }

  &__score {
    margin-top: 8px;
  }

  &__info {
    &__item {
      margin-bottom: 16px;
    }
  }
}
</style>