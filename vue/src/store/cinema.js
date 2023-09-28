export default {
  namespaced: true,
  state: {
    films: [
      {
        previewUrl: 'https://images.unsplash.com/photo-1693711942336-f4f9963bd364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2838&q=80',
        name: 'Name 1',
        year: 2023
      },
      {
        previewUrl: 'https://images.unsplash.com/photo-1693711942336-f4f9963bd364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2838&q=80',
        name: 'Name 2',
        year: 2020
      },
      {
        previewUrl: 'https://images.unsplash.com/photo-1693711942336-f4f9963bd364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2838&q=80',
        name: 'Name 3',
        year: 2019
      },
      {
        previewUrl: 'https://images.unsplash.com/photo-1693711942336-f4f9963bd364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2838&q=80',
        name: 'Name 4',
        year: 2018
      },
      {
        previewUrl: 'https://images.unsplash.com/photo-1693711942336-f4f9963bd364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2838&q=80',
        name: 'Name 5',
        year: 2015
      },
      {
        previewUrl: 'https://images.unsplash.com/photo-1693711942336-f4f9963bd364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2838&q=80',
        name: 'Name 6',
        year: 2021
      },
      {
        previewUrl: 'https://images.unsplash.com/photo-1693711942336-f4f9963bd364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2838&q=80',
        name: 'Name 7',
        year: 2022
      }
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
      store.commit('addCinema', payload)
    })
  },
}