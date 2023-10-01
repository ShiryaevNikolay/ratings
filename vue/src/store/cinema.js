export default {
  namespaced: true,
  state: {
    films: [
      {
        previewUrl: 'https://images.unsplash.com/photo-1693711942336-f4f9963bd364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2838&q=80',
        name: 'Name 1',
        year: 2023
      },
    ]
  },
  getters: {
    getFilms: (state) => state.films
  },
  mutations: {
    addCinema: (state, payload) => {
      state.films.push(payload)
    }
  },
  actions: {
    saveCinema: (store, payload) => new Promise(() => {
      console.log(payload)
      store.commit('addCinema', payload)
    })
  },
}