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
const getRatingFilmsFromLocalStorage = () => {
  const ratingFilms = JSON.parse(localStorage.getItem(storeKey))
  return ratingFilms ? new Map(Object.entries(ratingFilms)) : new Map()
}

export default {
  namespaced: true,
  state: {
    ratingFilms: getRatingFilmsFromLocalStorage()
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
      const ratingMap = state.ratingFilms
      const newRatingFilms = ratingMap.get(ratingKey) || []
      newRatingFilms.push(payload)
      ratingMap.set(ratingKey, newRatingFilms)
      state.ratingFilms = new Map(ratingMap)
      syncRatingFilmsWithLocalStorage(state)
    },
    removeCinema (state, payload) {
      const ratingKey = String(payload.rating)
      const ratingMap = state.ratingFilms
      const films = ratingMap.get(ratingKey)
      const filteredFilms = films.filter((cinema) => cinema.id != payload.id)
      if (filteredFilms.length == 0) {
        ratingMap.delete(ratingKey)
      } else {
        ratingMap.set(ratingKey, filteredFilms)
      }
      state.ratingFilms = new Map(ratingMap)
      syncRatingFilmsWithLocalStorage(state)
    },
    editCinema (state, payload) {
      const ratingKey = String(payload.rating)
      const ratingMap = state.ratingFilms
      const films = ratingMap.get(ratingKey).map((cinema) => {
        return cinema.id == payload.id ? payload : cinema
      })
      ratingMap.set(ratingKey, films)
      state.ratingFilms = new Map(ratingMap)
      syncRatingFilmsWithLocalStorage(state)
    },
    updateRatingCinema (state, payload) {
      const cinema = payload.cinema
      const ratingKey = String(cinema.rating)
      const ratingMap = state.ratingFilms
      const currentRatingFilms = ratingMap.get(ratingKey).filter((item) => item.id != cinema.id)
      cinema.rating += payload.count
      const newRatingKey = String(cinema.rating)
      const newRatingFilms = ratingMap.get(newRatingKey) || []
      newRatingFilms.push(cinema)
      console.log("Список, из которого удаляется")
      console.log(currentRatingFilms)
      if (currentRatingFilms.length == 0) {
        ratingMap.delete(ratingKey)
      } else {
        ratingMap.set(ratingKey, currentRatingFilms)
      }
      ratingMap.set(newRatingKey, newRatingFilms)
      state.ratingFilms = new Map(ratingMap)
      syncRatingFilmsWithLocalStorage(state)
    },
    clearRating (state) {
      const zeroRating = 0
      const ratingFilms = [...state.ratingFilms.values()].flat().map((cinema) => {
        cinema.rating = zeroRating
        return cinema
      })
      state.ratingFilms = new Map()
      state.ratingFilms.set(String(zeroRating), ratingFilms)
      syncRatingFilmsWithLocalStorage(state)
    }
  }
}