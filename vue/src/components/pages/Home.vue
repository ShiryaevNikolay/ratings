<template>
  <PageLayout>
    <section class="p-16">
      Homepage
      <button @click="() => openHelpModal()">Open modal</button>
      <CinemaForm />
      <div>
        <CinemaCard v-for="cinema in films" :key="cinema.name" :cinema="cinema" />
      </div>
    </section>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import { helpModal } from "@/mixins/modals";
import { mapGetters } from "vuex";
import CinemaForm from "../forms/CinemaForm"
import CinemaCard from "../cinema/CinemaCard.vue"

export default {
  name: 'HomePage',
  mixins: [helpModal],
  components: {
    PageLayout,
    CinemaForm,
    CinemaCard
  },
  computed: {
    ...mapGetters('cinema', [
      'getFilms'
    ]),
    films () {
      return this.getFilms()
    }
  }
}
</script>

<style>
</style>
