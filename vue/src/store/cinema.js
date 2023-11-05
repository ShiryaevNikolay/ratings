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
  localStorage.setItem(ratingFilmsKey, JSON.stringify(state.rating))
}

export default {
  namespaced: true,
  state: {
    films: JSON.parse(localStorage.getItem(filmsKey)) || [],
    rating: JSON.parse(localStorage.getItem(ratingFilmsKey)) || {}
  },
  getters: {
    getFilms: (state) => state.films,
    getFilm: (state) => (id) => state.films.find((film) => film.id == id),
    getFilmsWithFilter: (state) => ({ field, reverce }) => {
      const films = state.films.slice()
      const rating = state.rating
      if (!field) {
        return films.sort((a, b) => a["date"] - b["date"])
      }
      if (field == "rating") {
        films.sort((first, second) => {
          return rating[first.id] || 0 - rating[second.id] || 0
        })
      } else {
        films.sort((a, b) => {
          const field1 = a[field]
          const field2 = b[field]
          return typeof field1 == "number" ? field1 - field2 : field1.localeCompare(field2)
        })
      }
      return reverce ? films.reverse() : films
    },
    getRatingFilms: (state) => state.rating
  },
  mutations: {
    addCinema (state, payload) {
      payload.id = genHash()
      state.films.push(payload)
      syncFilmsWithLocalStorage(state)
    },
    removeCinema (state, payload) {
      state.films = state.films.filter((film) => film.id != payload)
      delete state.rating[payload]
      syncFilmsWithLocalStorage(state)
      syncRatingFilmsWithLocalStorage(state)
    },
    editCinema (state, payload) {
      state.films = state.films.map((film) => film.id == payload.id ? payload : film)
      syncFilmsWithLocalStorage(state)
    },
    updateRatingCinema (state, payload) {
      const currentRating = state.rating[payload.id] || 0
      state.rating = {
        ...state.rating,
        [payload.id]: currentRating + payload.count
      }
      syncRatingFilmsWithLocalStorage(state)
    },
    clearRating (state) {
      state.rating = {}
      syncRatingFilmsWithLocalStorage(state)
    }
  }
}