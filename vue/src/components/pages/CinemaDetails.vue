<template>
  <PageLayout>
    <section class="p-16">
      <CinemaCard :cinema="cinema"/>
    </section>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import CinemaCard from "../cinema/CinemaCard.vue"
import { helpCinema } from "@/mixins/cinema";

export default {
  name: 'CinemaDetails',
  mixins: [helpCinema],
  components: {
    PageLayout,
    CinemaCard
  },
  computed: {
    cinema () {
      const cinemaId = this.$route.params.id
      return this.getFilm(cinemaId)
    }
  }
}
</script>