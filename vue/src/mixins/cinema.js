import { mapGetters, mapMutations } from "vuex";

export const helpCinema = {
  methods: {
    ...mapMutations('cinema', [
      'addCinema',
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