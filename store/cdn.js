export const state = () => ({
  films: [],
  currentPage: 1,
  totalPages: 0,
  loading: true,
  queryString: ''
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
  setQueryString (state, query) {
    state.queryString = query
  }
}

export const actions = {
  async updateFilms ({ commit, state }, { routeName, page }) {
    commit('enableLoading')
    const films = await this.$axios.$get(`/api/${routeName}?page=${page}`)
    commit('addFilms', films)
    commit('disableLoading')
  },
  async searchFilms ({ commit, state }, { routeName, page, query }) {
    commit('enableLoading')
    const films = await this.$axios.$get(`/api/${routeName !== 'index' ? routeName : 'movies'}/search?page=${page}&query=${query}&field=title`)
    commit('addFilms', films)
    commit('disableLoading')
  },
  async lastFilms ({ commit, state }, { routeName, page }) {
    commit('enableLoading')
    const films = await this.$axios.$get(`/api/${routeName !== 'index' ? routeName : 'movies'}/last?page=${page}&field=title`)
    commit('addFilms', films)
    commit('disableLoading')
  }
}
