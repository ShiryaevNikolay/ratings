<template>
  <PageLayout>
    <section class="p-16">
      <CinemaForm :cinema="cinema" />
    </section>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import CinemaForm from "../forms/CinemaForm"
import { helpCinema } from "@/mixins/cinema"

export default {
  name: 'EditCinema',
  mixins: [helpCinema],
  components: {
    PageLayout,
    CinemaForm
  },
  computed: {
    cinema () {
      const cinemaId = this.$route.params.id
      return this.getFilm(cinemaId)
    }
  }
}
</script>