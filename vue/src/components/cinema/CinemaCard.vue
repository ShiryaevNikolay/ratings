<template>
  <div v-if="cinema" class="cinema-card">
    <img class="cinema-card__image" :src="cinema.previewUrl" />
    <ul class="cinema-card__content">
      <li class="cinema-card__name">{{ cinema.name }}</li>
      <li class="cinema-card__origin-name">{{ cinema.originName }}</li>
      <li class="cinema-card__producer">{{ cinema.producer }}</li>
      <li class="cinema-card__date">{{ cinema.date }}</li>
      <li class="cinema-card__score">
        <el-rate v-model="getScore" disabled :colors="getSroceIcons" />  
      </li>
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
    getScore () {
      return this.cinema ? this.cinema.score : 0
    },
    getSroceIcons () {
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

  &__content {
    display: inline-block;
    padding: 0px;
    margin: 16px;
    list-style-type: none;
    vertical-align: top;
  }

  &__name {
    margin-bottom: 16px;
  }
}
</style>