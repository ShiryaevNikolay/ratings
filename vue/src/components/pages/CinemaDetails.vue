<template>
  <PageLayout>
    <section class="p-16">
      <div class="cinema-container">
        <img class="cinema-container__image" :src="cinema.previewUrl" />
        <ul class="cinema-container__content">
          <li class="cinema-container__name">{{ cinema.name }}</li>
          <li class="cinem-container__year">{{ cinema.year }}</li>
        </ul>
      </div>
    </section>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import { helpCinema } from "@/mixins/cinema";

export default {
  name: 'CinemaDetails',
  mixins: [helpCinema],
  components: {
    PageLayout
  },
  data () {
    return {
      cinema: Object
    }
  },
  mounted () {
    const cinemaId = this.$route.params.id
    this.cinema = this.getFilm(cinemaId)
  }
}
</script>

<style lang="less">
ul {
  display: inline-block;
  padding: 0px;
  margin: 0px;
  list-style-type: none;
}

.cinema-container {
  &__image {
    max-height: 300px;
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