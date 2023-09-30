<template>
  <PageLayout>
    <section class="p-16">
      Homepage
      <button @click="() => openHelpModal()">Open modal</button>
      <CinemaForm />
      <div>
        <CinemaCard v-for="cinema in getFilms" :key="cinema.name" :cinema="cinema" />
      </div>
    </section>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import { helpModal } from "@/mixins/modals";
import { helpCinema } from "@/mixins/cinema";
import CinemaForm from "../forms/CinemaForm"
import CinemaCard from "../cinema/CinemaCard.vue"

export default {
  name: 'HomePage',
  mixins: [helpModal, helpCinema],
  components: {
    PageLayout,
    CinemaForm,
    CinemaCard
  }
}
</script>

<style>
</style>
