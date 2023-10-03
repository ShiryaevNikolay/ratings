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

export default {
  namespaced: true,
  state: {
    films: [
      {
        id: 1,
        previewUrl: 'https://images.unsplash.com/photo-1693711942336-f4f9963bd364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2838&q=80',
        name: 'Name 1',
        year: 2023
      },
    ]
  },
  getters: {
    getFilms: (state) => state.films,
    getFilm: (state) => (id) => state.films.find((cinema) => cinema.id == id)
  },
  mutations: {
    addCinema: (state, payload) => {
      payload.id = genHash()
      state.films.push(payload)
    },
    // Удаление фильма по id
    removeCinema: (state, payload) => {
      state.films = state.films.filter((cinema) => cinema.id != payload)
    },
    // Редактирование фильма. payload хранит id и cinema
    editCinema: (state, payload) => {
      state.films = state.films.map((cinema) => cinema.id == payload.id ? payload.cinema : cinema)
    }
  },
  actions: {
    saveCinema: (store, payload) => new Promise(() => {
      store.commit('addCinema', payload)
    })
  },
}