export const state = () => ({
  path: false
})

export const mutations = {
  setQueryPath (state, path) {
    state.path = path
  }
}
