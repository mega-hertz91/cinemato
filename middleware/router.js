export default function ({ store, route }) {
  store.commit('cdn/setCurrentPage', route.query.page !== undefined ? route.query.page : 1)
  if (store.state.cdn.querySearch.length > 0) {
    store.dispatch('cdn/searchFilms', {
      routeName: route.name === 'index' ? 'movies' : route.name,
      page: route.query.page !== undefined ? route.query.page : 1,
      query: store.state.cdn.querySearch
    })
  } else {
    store.dispatch('cdn/updateFilms', {
      routeName: route.name === 'index' ? 'movies' : route.name,
      page: route.query.page !== undefined ? route.query.page : 1
    })
  }
}
