<template>
  <div v-if="cinema" class="cinema-card">
    <img class="cinema-card__image" :src="cinema.previewUrl" />
    <ul class="cinema-card__content">
      <li class="cinema-card__name">{{ cinema.name }}</li>
      <li class="cinem-card__year">{{ cinema.year }}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'CinemaCard',
  props: {
    cinema: Object,
    default: () => (null)
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