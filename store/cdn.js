export const state = () => ({
  films: [],
  currentPage: 1,
  totalPages: 0,
  loading: true,
  querySearch: ''
})

export const mutations = {
  addFilms (state, films) {
    state.films = films.data
    state.totalPages = Number(films.last_page)
  },
  setCurrentPage (state, page) {
    state.currentPage = page
  },
  enableLoading (state) {
    state.loading = true
  },
  disableLoading (state) {
    state.loading = false
  },
  setQuerySearch (state, query) {
    state.querySearch = query
  }
}

export const actions = {
  async updateFilms ({ commit, state }, { routeName }) {
    commit('enableLoading')
    const films = await this.$axios.$get(`/api/${routeName}?page=${state.currentPage}`)
    commit('addFilms', films)
    commit('disableLoading')
  },
  async searchFilms ({ commit, state }, { routeName, query }) {
    commit('enableLoading')
    const films = await this.$axios.$get(`/api/${routeName !== 'index' ? routeName : 'movies'}/search?page=${state.currentPage}&query=${query}&field=title`)
    commit('addFilms', films)
    commit('disableLoading')
  }
}
