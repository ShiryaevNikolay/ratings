import { mapGetters, mapActions } from "vuex";

export const helpCinema = {
  methods: {
    ...mapActions('cinema', [
      'saveCinema',
      'editCinema'
    ])
  },
  computed: {
    ...mapGetters('cinema', [
      'getFilms',
      'getFilm'
    ])
  }
}