import { mapGetters } from "vuex";

export const helpCinema = {
  computed: {
    ...mapGetters('cinema', [
      'getFilms'
    ])
  }
}