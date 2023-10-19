<template>
  <PageLayout>
    <section class="p-16">
      <h1>Добавление рейтинга фильма</h1>
      <CinemaForm btnText="Добавить фильм" @btnClick="(cinema) => saveCinema(cinema)" />
    </section>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import CinemaForm from "../forms/CinemaForm"
import { helpCinema } from "@/mixins/cinema"

export default {
  name: "CreateCinema",
  mixins: [helpCinema],
  components: {
    PageLayout,
    CinemaForm
  },
  methods: {
    saveCinema (cinema) {
      this.addCinema(cinema)
    }
  }
}
</script>