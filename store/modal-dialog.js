export const state = () => ({
  active: false
})

export const mutations = {
  open (state, film) {
    state.active = true
    state.film = film
  },
  close (state, film) {
    state.active = false
    state.film = {}
  }
}
