<template>
  <div v-if="cinema" class="cinema-card">
    <ul class="cinema-card__list">
      <li>
        <img class="cinema-card__image" :src="cinema.previewUrl" />
      </li>
      <li class="cinema-card__score cinema-card__item">
        <el-rate v-model="getScore" disabled :colors="getSroceIcons" />
      </li>
    </ul>
    <ul class=" cinema-card__list cinema-card__info">
      <li class="cinema-card__name">{{ cinema.name }}</li>
      <li class="cinema-card__origin-name cinema-card__item">{{ cinema.originName }}</li>
      <li class="cinema-card__producer cinema-card__item">{{ cinema.producer }}</li>
      <li class="cinema-card__date cinema-card__item">{{ cinema.date }}</li>
    </ul>
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
    getScore() {
      return this.cinema ? this.cinema.score : 0
    },
    getSroceIcons() {
      return ['#99A9BF', '#F7BA2A', '#FF9900'] // same as { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
    }
  }
}
</script>

<style scoped lang="less">
.cinema-card {
  margin-top: 16px;

  &__image {
    max-height: 200px;
  }

  &__list {
    display: inline-block;
    padding: 0px;
    list-style-type: none;
    vertical-align: top;
  }

  &__info {
    margin: 16px;
  }

  &__item {
    margin-top: 16px;
  }
}
</style>