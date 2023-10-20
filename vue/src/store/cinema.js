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

const syncStateWithLocalStorage = (state) => {
  localStorage.setItem(storeKey, JSON.stringify(state.films))
}

export default {
  namespaced: true,
  state: {
    films: JSON.parse(localStorage.getItem(storeKey)) || []
  },
  getters: {
    getFilms: (state) => state.films,
    getFilm: (state) => (id) => state.films.find((cinema) => cinema.id == id),
    getFilmsWithFilter: (state) => ({ field, reverce }) => {
      const films = state.films.slice()
      if (!field) {
        return films
      }
      films.sort((a, b) => {
        const field1 = a[field]
        const field2 = b[field]
        return typeof field1 == "number" ? field1 - field2 : field1.localeCompare(field2)
      })
      return reverce ? films.reverse() : films
    }
  },
  mutations: {
    addCinema (state, payload) {
      payload.id = genHash()
      state.films.push(payload)
      syncStateWithLocalStorage(state)
    },
    removeCinema (state, payload) {
      state.films = state.films.filter((cinema) => cinema.id != payload)
      syncStateWithLocalStorage(state)
    },
    editCinema (state, payload) {
      state.films = state.films.map((cinema) => cinema.id == payload.id ? payload : cinema)
      syncStateWithLocalStorage(state)
    }
  }
}