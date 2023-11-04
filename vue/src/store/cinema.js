export const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max - min);
  return Math.round(rand);
}

export const genHash = (length = 32) => {
  let hash = "";
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    hash += chars[randomInteger(0, chars.length-1)]
  }

  return hash + Date.now();
}

const filmsKey = 'CINEMA_STORE'
const ratingFilmsKey = 'RATING_FILMS_STORE'

const syncFilmsWithLocalStorage = (state) => {
  localStorage.setItem(filmsKey, JSON.stringify(state.films))
}
const syncRatingFilmsWithLocalStorage = (state) => {
  localStorage.setItem(ratingFilmsKey, JSON.stringify(state.ratingFilms))
}

export default {
  namespaced: true,
  state: {
    films: JSON.parse(localStorage.getItem(filmsKey)) || [],
    ratingFilms: JSON.parse(localStorage.getItem(ratingFilmsKey)) || {}
  },
  getters: {
    getFilms: (state) => state.films,
    getFilm: (state) => (id) => state.films.find((cinema) => cinema.id == id),
    getFilmsWithFilter: (state) => ({ field, reverce }) => {
      const films = state.films.slice()
      if (!field) {
        return films.sort((a, b) => a["date"] - b["date"])
      }
      films.sort((a, b) => {
        const field1 = a[field]
        const field2 = b[field]
        return typeof field1 == "number" ? field1 - field2 : field1.localeCompare(field2)
      })
      return reverce ? films.reverse() : films
    },
    getRatingFilms: (state) => state.ratingFilms
  },
  mutations: {
    addCinema (state, payload) {
      payload.id = genHash()
      state.films.push(payload)
      state.ratingFilms = {
        ...state.ratingFilms,
        [payload.id]: payload.rating
      }
      syncFilmsWithLocalStorage(state)
      syncRatingFilmsWithLocalStorage(state)
    },
    removeCinema (state, payload) {
      state.films = state.films.filter((cinema) => cinema.id != payload)
      delete state.ratingFilms[payload]
      syncFilmsWithLocalStorage(state)
      syncRatingFilmsWithLocalStorage(state)
    },
    editCinema (state, payload) {
      state.films = state.films.map((cinema) => cinema.id == payload.id ? payload : cinema)
      syncFilmsWithLocalStorage(state)
    },
    updateRatingCinema (state, payload) {
      state.films = state.films.map((cinema) => cinema.id == payload.id ? payload : cinema)
      state.ratingFilms[payload.id] = payload.rating
      syncFilmsWithLocalStorage(state)
      syncRatingFilmsWithLocalStorage(state)
    },
    clearRating (state) {
      state.films = state.films.map((cinema) => {
        cinema.rating = 0
        return cinema
      })
      const newRatingFilms = state.films.map((cinema) => [cinema.id, cinema.rating])
      state.ratingFilms = Object.fromEntries(newRatingFilms)
      syncFilmsWithLocalStorage(state)
      syncRatingFilmsWithLocalStorage(state)
    }
  }
}