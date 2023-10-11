import { mapGetters, mapActions } from "vuex";

export const helpCinema = {
  methods: {
    ...mapActions('cinema', [
      'saveCinema',
      'editCinema',
      'removeCinema'
    ])
  },
  computed: {
    ...mapGetters('cinema', [
      'getFilms',
      'getFilm'
    ])
  }
}