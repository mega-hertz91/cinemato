export const state = () => ({
  films: [],
  currentPage: 1,
  totalPages: 0,
  loading: false,
  query: false
})

export const mutations = {
  addFilms (state, films) {
    state.films = films.data
    state.totalPages = Number(films.last_page)
    state.currentPage = films.current_page
  },
  enableLoading (state) {
    state.loading = true
  },
  disableLoading (state) {
    state.loading = false
  },
  setQuery (state, query) {
    state.query = query
  }
}

export const getters = {
  filmById: state => (id) => {
    return state.films.find(f => f.imdb_id === id)
  }
}

export const actions = {
  async loadFilms ({ commit, state }, { path, query }) {
    commit('enableLoading')
    const films = await this.$axios.$get(`/api/${path}?${query}`)
    commit('addFilms', films)
    commit('disableLoading')
  }
}
