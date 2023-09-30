<template>
  <div class="cinema-card-container">
    <RouterLink to="/details">
    <div class="cinema-card">
      <img class="cinema-card__image" :src="cinema.previewUrl" />
      <ul class="cinema-card__content">
        <li class="cinema-card__name">{{ cinema.name }}</li>
        <li class="cinem-card__year">{{ cinema.year }}</li>
      </ul>
    </div>
  </RouterLink>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'CinemaCard',
  props: {
    cinema: Object,
    default: () => (null)
  },
  components: { RouterLink }
}
</script>

<style lang="less">
ul {
  display: inline-block;
  padding: 0px;
  margin: 0px;
  list-style-type: none;
}

a:active,
a:hover,
a:visited,
a {
  color: black;
  text-decoration: none;
}

.cinema-card-container {
  margin-top: 16px;
}

.cinema-card {
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &__image {
    max-height: 200px;
  }

  &__content {
    margin: 16px;
    vertical-align: top;
  }

  &__name {
    margin-bottom: 16px;
  }
}
</style>