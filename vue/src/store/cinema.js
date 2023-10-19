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
const getStateFromLocalStorage = () => {
  const films = localStorage.getItem(storeKey)
  if (films) {
    return JSON.parse(films)
  } else {
    return []
  }
}

export default {
  namespaced: true,
  state: {
    films: getStateFromLocalStorage(),
    filters: [
      {
        id: 0,
        label: "Без фильтра"
      },
      {
        id: 1,
        label: "По рейтингу"
      },
      {
        id: 2,
        label: "По дате"
      },
      {
        id: 3,
        label: "По названию"
      }
    ],
    filterSortingTypes: [
      {
        value: false,
        label: "По возрастанию"
      },
      {
        value: true,
        label: "По убыванию"
      }
    ]
    // films: [
    //   {
    //     id: 1,
    //     previewUrl: 'https://images.unsplash.com/photo-1693711942336-f4f9963bd364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    //     name: 'Фильм 1',
    //     originName: 'Оригинальне название',
    //     date: '2020-07-03',
    //     producer: 'Имя режиссера',
    //     score: 4
    //   },
    //   {
    //     id: 2,
    //     previewUrl: 'https://images.unsplash.com/photo-1697213799599-de2d228124e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    //     name: 'Фильм 2',
    //     originName: 'Film 2',
    //     date: '2020-10-05',
    //     producer: 'Режиссер',
    //     score: 2
    //   }
    // ]
  },
  getters: {
    getFilms: (state) => state.films,
    getFilm: (state) => (id) => state.films.find((cinema) => cinema.id == id),
    getFilmsWithFilter: (state) => (filterId, needReverce) => {
      let films = state.films.slice()
      switch (filterId) {
        case 1:
          films = films.sort((a, b) => a.score - b.score)
          break 
        case 2:
          films = films.sort()
          break
        case 3:
          films = films.sort((a, b) => a.name.localeCompare(b))
          break
      }
      if (needReverce) {
        return films.reverse()
      } else {
        return films
      }
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