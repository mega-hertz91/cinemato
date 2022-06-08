export const state = () => ({
  loading: true,
  activate: true
})

export const getters = {
  loading (state, getters, rootState) {
    return rootState['cdn/loading']
  }
}
