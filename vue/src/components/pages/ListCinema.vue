<template>
  <PageLayout>
    <section class="p-16">
      <h1>Фильмы</h1>
      <div>
        <CinemaCard v-for="cinema in getFilms" :key="cinema.name" :cinema="cinema" />
      </div>
    </section>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import { helpCinema } from "@/mixins/cinema";
import CinemaCard from "../cinema/CinemaCard.vue"

export default {
  name: 'ListCinema',
  mixins: [helpCinema],
  components: {
    PageLayout,
    CinemaCard
  }
}
</script>