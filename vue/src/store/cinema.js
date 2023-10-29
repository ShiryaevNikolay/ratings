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

const storeKey = 'CINEMA_STORE'

const syncRatingFilmsWithLocalStorage = (state) => {
  const ratingFilmsAsObject = Object.fromEntries(state.ratingFilms.entries())
  localStorage.setItem(storeKey, JSON.stringify(ratingFilmsAsObject))
}

export default {
  namespaced: true,
  state: {
    ratingFilms: new Map(Object.entries(JSON.parse(localStorage.getItem(storeKey))))
  },
  getters: {
    getFilms: (state) => [...state.ratingFilms.values()].flat(),
    getFilm: (state, getters) => (id) => getters.getFilms.find((cinema) => cinema.id == id),
    getFilmsWithFilter: (state, getters) => ({ field, reverce }) => {
      const films = getters.getFilms.slice()
      if (!field) {
        return films.sort((a, b) => a["date"] - b["date"])
      }
      films.sort((a, b) => {
        const field1 = a[field]
        const field2 = b[field]
        console.log(field1 + ' ' + field2)
        return typeof field1 == "number" ? field1 - field2 : field1.localeCompare(field2)
      })
      return reverce ? films.reverse() : films
    },
    getRatingFilms: (state) => state.ratingFilms
  },
  mutations: {
    addCinema (state, payload) {
      payload.id = genHash()
      payload.rating = 0
      const ratingKey = String(payload.rating)
      const newRatingFilms = state.ratingFilms.get(ratingKey) || []
      newRatingFilms.push(payload)

      // TODO: удалить
      console.log(newRatingFilms)
      state.ratingFilms.set(ratingKey, newRatingFilms)

      // TODO: удалить
      console.log(state.ratingFilms)
      syncRatingFilmsWithLocalStorage(state)
    },
    removeCinema (state, payload) {
      const ratingKey = String(payload.rating)
      const films = state.ratingFilms.get(ratingKey)
      const filteredFilms = films.filter((cinema) => cinema.id != payload.id)
      state.ratingFilms.set(ratingKey, filteredFilms)
      syncRatingFilmsWithLocalStorage(state)
    },
    editCinema (state, payload) {
      const ratingKey = String(payload.rating)
      const films = state.ratingFilms.get(ratingKey).map((cinema) => {
        return cinema.id == payload.id ? payload : cinema
      })
      state.ratingFilms.set(ratingKey, films)
      syncRatingFilmsWithLocalStorage(state)
    }
  }
}