export const state = () => ({
  films: [],
  film: {},
  currentPage: 1,
  totalPages: 0,
  loading: false,
  query: false,
  years: ['2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008']
})

export const mutations = {
  addFilms (state, films) {
    state.films = films.data
    state.totalPages = Number(films.last_page)
    state.currentPage = films.current_page
  },
  pushFilms (state, films) {
    // eslint-disable-next-line no-console
    console.log(state.films.concat(films.data))
    state.films = state.films.concat(films.data)
    state.totalPages = Number(films.last_page)
    state.currentPage = films.current_page
  },
  addFilm (state, film) {
    state.film = film.data[0]
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

export const actions = {
  async loadFilms ({ commit, state }, { path, query }) {
    commit('enableLoading')
    const films = await this.$axios.$get(`/api/${path}?${query}`)
    commit('addFilms', films)
    commit('disableLoading')
  },

  async addFilms ({ commit, state }, { path, query }) {
    commit('enableLoading')
    const films = await this.$axios.$get(`/api/${path}?${query}`)
    commit('pushFilms', films)
    commit('disableLoading')
  },

  async loadFilmByID ({ commit, state }, id) {
    commit('enableLoading')
    const film = await this.$axios.$get(`/api/short/?imdb_id=${id}`)
    commit('addFilm', film)
    commit('disableLoading')
  }
}
