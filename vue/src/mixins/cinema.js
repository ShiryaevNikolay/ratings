import { mapGetters, mapActions } from "vuex";

export const helpCinema = {
  methods: {
    ...mapActions('cinema', [
      'saveCinema'
    ])
  },
  computed: {
    ...mapGetters('cinema', [
      'getFilms',
      'getFilm'
    ])
  }
}